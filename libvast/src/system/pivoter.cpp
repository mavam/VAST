/******************************************************************************
 *                    _   _____   __________                                  *
 *                   | | / / _ | / __/_  __/     Visibility                   *
 *                   | |/ / __ |_\ \  / /          Across                     *
 *                   |___/_/ |_/___/ /_/       Space and Time                 *
 *                                                                            *
 * This file is part of VAST. It is subject to the license terms in the       *
 * LICENSE file found in the top-level directory of this distribution and at  *
 * http://vast.io/license. No part of VAST, including this file, may be       *
 * copied, modified, propagated, or distributed except according to the terms *
 * contained in the LICENSE file.                                             *
 ******************************************************************************/

#include "vast/system/pivoter.hpp"

#include "vast/fwd.hpp"

#include "vast/command.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/detail/string.hpp"
#include "vast/expression.hpp"
#include "vast/logger.hpp"
#include "vast/system/query_status.hpp"
#include "vast/table_slice.hpp"
#include "vast/table_slice_column.hpp"
#include "vast/uuid.hpp"

#include <caf/event_based_actor.hpp>
#include <caf/settings.hpp>

namespace vast::system {

namespace {

/// Returns the field that shall be used to extract values from for
/// the pivot membership query.
caf::optional<record_field>
common_field(const pivoter_state& st, const record_type& indicator) {
  auto f = st.cache.find(indicator);
  if (f != st.cache.end())
    return f->second;
    // TODO: This algorithm can be enabled once we have a live updated
    //       type registry. (Switch the type of target to record_type.)
#if 0
  for (auto& t : target.fields) {
    for (auto& i : indicator.fields) {
      if (t.name == i.name) {
        st.cache.insert({indicator, i});
        return i;
      }
    }
  }
#else
  // This is a heuristic to find the field for pivoting until a runtime
  // updated type registry is available to feed the algorithm above.
  std::string edge;
  VAST_LOG_SPD_TRACE("{}  {}  {}", detail::id_or_name(st.self),
                     VAST_ARG(st.target), VAST_ARG(indicator.name()));
  if (detail::starts_with(st.target, "zeek")
      && detail::starts_with(indicator.name(), "zeek"))
    edge = "uid";
  else
    edge = "community_id";
  for (auto& i : indicator.fields) {
    if (i.name == edge) {
      st.cache.insert({indicator, i});
      return i;
    }
  }
#endif
  st.cache.insert({indicator, caf::none});
  VAST_LOG_SPD_WARN("{} got slice without shared column: {}",
                    detail::id_or_name(st.self), indicator.name());
  return caf::none;
}

} // namespace

pivoter_state::pivoter_state(caf::event_based_actor*) {
  // nop
}

caf::behavior pivoter(caf::stateful_actor<pivoter_state>* self, caf::actor node,
                      std::string target, expression expr) {
  auto& st = self->state;
  st.self = self;
  st.node = node;
  st.expr = std::move(expr);
  st.target = std::move(target);
  auto quit_if_done = [=]() {
    auto& st = self->state;
    if (st.initial_query_completed && st.running_exporters == 0)
      self->quit();
  };
  self->set_down_handler([=]([[maybe_unused]] const caf::down_msg& msg) {
    // Only the spawned EXPORTERs are expected to send down messages.
    auto& st = self->state;
    st.running_exporters--;
    VAST_LOG_SPD_DEBUG("{} received DOWN from {} outstanding requests: {}",
                       detail::id_or_name(self), msg.source,
                       st.running_exporters);
    quit_if_done();
  });
  return {
    [=](vast::table_slice slice) {
      auto& st = self->state;
      auto pivot_field = common_field(st, slice.layout());
      if (!pivot_field)
        return;
      VAST_LOG_SPD_DEBUG("{} uses {} to extract {} events",
                         detail::id_or_name(self), *pivot_field, st.target);
      auto column = table_slice_column::make(slice, pivot_field->name);
      VAST_ASSERT(column);
      auto xs = list{};
      for (size_t i = 0; i < column->size(); ++i) {
        auto data = materialize((*column)[i]);
        auto x = caf::get_if<std::string>(&data);
        // Skip if no value
        if (!x)
          continue;
        // Skip if ID was already requested
        if (st.requested_ids.count(*x) > 0)
          continue;
        xs.push_back(*x);
        st.requested_ids.insert(*x);
      }
      if (xs.empty()) {
        VAST_LOG_SPD_DEBUG("{} already queried for all {}",
                           detail::id_or_name(self), pivot_field->name);
        return;
      }
      auto expr = conjunction{
        predicate{attribute_extractor{atom::type_v}, equal, data{st.target}},
        predicate{field_extractor{pivot_field->name}, in, data{xs}}};
      // TODO(ch9411): Drop the conversion to a string when node actors can
      //               be spawned without going through an invocation.
      auto query = to_string(expr);
      VAST_LOG_SPD_DEBUG("{} queries for {}  {}", detail::id_or_name(self),
                         xs.size(), pivot_field->name);
      VAST_LOG_SPD_TRACE("{} spawns new exporter with query {}",
                         detail::id_or_name(self), query);
      auto exporter_options = caf::settings{};
      caf::put(exporter_options, "vast.export.disable-taxonomies", true);
      auto exporter_invocation
        = invocation{std::move(exporter_options), "spawn exporter", {query}};
      ++self->state.running_exporters;
      self->request(st.node, caf::infinite, exporter_invocation)
        .then(
          [=](caf::actor handle) {
            auto exporter = caf::actor_cast<exporter_actor>(std::move(handle));
            VAST_LOG_SPD_DEBUG("{} registers exporter {}",
                               detail::id_or_name(self), exporter);
            self->monitor(exporter);
            self->send(exporter, atom::sink_v, self->state.sink);
            self->send(exporter, atom::run_v);
          },
          [=](caf::error error) {
            VAST_LOG_SPD_ERROR("{} failed to spawn exporter: {}",
                               detail::id_or_name(self), render(error));
            --self->state.running_exporters;
          });
      ;
    },
    [=](std::string name, query_status) {
      VAST_LOG_SPD_DEBUG("{} received final status from {}",
                         detail::id_or_name(self), name);
      self->state.initial_query_completed = true;
      quit_if_done();
    },
    [=](atom::sink, const caf::actor& sink) {
      VAST_LOG_SPD_DEBUG("{} registers sink {}", detail::id_or_name(self),
                         sink);
      auto& st = self->state;
      st.sink = sink;
    },
  };
}

} // namespace vast::system
