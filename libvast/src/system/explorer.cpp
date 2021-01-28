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

#include "vast/system/explorer.hpp"

#include "vast/fwd.hpp"

#include "vast/command.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/string.hpp"
#include "vast/expression.hpp"
#include "vast/logger.hpp"
#include "vast/system/query_status.hpp"
#include "vast/table_slice.hpp"
#include "vast/table_slice_builder.hpp"
#include "vast/table_slice_builder_factory.hpp"
#include "vast/table_slice_column.hpp"
#include "vast/uuid.hpp"

#include <caf/event_based_actor.hpp>
#include <caf/settings.hpp>

#include <algorithm>
#include <optional>

using namespace std::chrono_literals;

namespace vast::system {

explorer_state::explorer_state(caf::event_based_actor*) {
  // nop
}

void explorer_state::forward_results(vast::table_slice slice) {
  // Check which of the ids in this slice were already sent to the sink
  // and forward those that were not.
  vast::bitmap unseen;
  for (size_t i = 0; i < slice.rows(); ++i) {
    auto id = slice.offset() + i;
    auto [_, new_] = returned_ids.insert(id);
    if (new_) {
      vast::ids tmp;
      tmp.append_bits(false, id);
      tmp.append_bits(true, 1);
      unseen |= tmp;
    }
  }
  if (unseen.empty())
    return;
  std::vector<table_slice> slices;
  if (unseen.size() == slice.rows()) {
    slices.push_back(slice);
  } else {
    // If a slice was partially known, divide it up and forward only those
    // ids that the source hasn't received yet.
    slices = vast::select(slice, unseen);
  }
  // Send out the prepared slices up to the configured limit.
  for (auto slice : slices) {
    if (num_sent >= limits.total)
      break;
    if (num_sent + slice.rows() <= limits.total) {
      self->send(sink, slice);
      num_sent += slice.rows();
    } else {
      auto truncated = truncate(slice, limits.total - num_sent);
      self->send(sink, truncated);
      num_sent += truncated.rows();
    }
  }
  return;
}

caf::behavior
explorer(caf::stateful_actor<explorer_state>* self, caf::actor node,
         explorer_state::event_limits limits,
         std::optional<vast::duration> before,
         std::optional<vast::duration> after, std::optional<std::string> by) {
  auto& st = self->state;
  st.self = self;
  st.node = node;
  st.limits = limits;
  st.num_sent = 0;
  // If none of 'before' and 'after' a given we assume an infinite timebox
  // around each result, but if one of them is given the interval should be
  // finite on both sides.
  if (before && !after)
    after = vast::duration{0s};
  if (after && !before)
    before = vast::duration{0s};
  st.before = before;
  st.after = after;
  st.by = by;
  auto quit_if_done = [=]() {
    auto& st = self->state;
    if (st.initial_query_completed && st.running_exporters == 0)
      self->quit();
  };
  self->set_down_handler([=]([[maybe_unused]] const caf::down_msg& msg) {
    // Only the spawned EXPORTERs are expected to send down messages.
    auto& st = self->state;
    --st.running_exporters;
    VAST_DEBUG("{} received DOWN from {} outstanding requests: {}",
               detail::id_or_name(self), msg.source, st.running_exporters);
    quit_if_done();
  });
  return {
    [=](table_slice slice) {
      auto& st = self->state;
      // TODO: Add some cleaner way to distinguish the different input streams,
      // maybe some 'tagged' stream in caf?
      if (!st.initial_exporter) {
        VAST_ERROR("{} received table slices before an initial "
                   "exporter",
                   detail::id_or_name(self));
        return;
      }
      if (self->current_sender() != st.initial_exporter) {
        st.forward_results(slice);
        return;
      }
      // Don't bother making new queries if we discard all results anyways.
      if (st.num_sent >= st.limits.total)
        return;
      auto&& layout = slice.layout();
      auto it = std::find_if(layout.fields.begin(), layout.fields.end(),
                             [](const record_field& field) {
                               return has_attribute(field.type, "timestamp");
                             });
      if (it == layout.fields.end()) {
        VAST_DEBUG("{} could not find timestamp field in {}",
                   detail::id_or_name(self), layout);
        return;
      }
      std::optional<table_slice_column> by_column;
      if (st.by) {
        // Need to pivot from caf::optional to std::optional here, as the
        // former doesnt support emplace or value assignment.
        if (auto col = table_slice_column::make(slice, *st.by))
          by_column.emplace(std::move(*col));
        if (!by_column) {
          VAST_TRACE("{}  {} because it has no column {}",
                     detail::id_or_name("skipping slice with"), layout, *st.by);
          return;
        }
      }
      VAST_DEBUG("{} uses {} to construct timebox", detail::id_or_name(self),
                 it->name);
      auto column = table_slice_column::make(slice, it->name);
      VAST_ASSERT(column);
      for (size_t i = 0; i < column->size(); ++i) {
        auto data_view = (*column)[i];
        auto x = caf::get_if<vast::time>(&data_view);
        // Skip if no value
        if (!x)
          continue;
        std::optional<vast::expression> before_expr;
        if (st.before)
          before_expr = predicate{attribute_extractor{atom::timestamp_v},
                                  greater_equal, data{*x - *st.before}};

        std::optional<vast::expression> after_expr;
        if (st.after)
          after_expr = predicate{attribute_extractor{atom::timestamp_v},
                                 less_equal, data{*x + *st.after}};
        std::optional<vast::expression> by_expr;
        if (st.by) {
          VAST_ASSERT(by_column); // Should have been checked above.
          auto ci = (*by_column)[i];
          if (caf::get_if<caf::none_t>(&ci))
            continue;
          // TODO: Make `predicate` accept a data_view as well to save
          // the call to `materialize()`.
          by_expr = predicate{field_extractor{*st.by}, equal, materialize(ci)};
        }
        auto build_conjunction
          = [](std::optional<expression>&& lhs,
               std::optional<expression>&& rhs) -> std::optional<expression> {
          if (lhs && rhs)
            return conjunction{std::move(*lhs), std::move(*rhs)};
          if (lhs)
            return std::move(lhs);
          if (rhs)
            return std::move(rhs);
          return std::nullopt;
        };
        auto temporal_expr
          = build_conjunction(std::move(before_expr), std::move(after_expr));
        auto spatial_expr = std::move(by_expr);
        auto expr = build_conjunction(std::move(temporal_expr),
                                      std::move(spatial_expr));
        // We should have checked during argument parsing that `expr` has at
        // least one constraint.
        VAST_ASSERT(expr);
        auto query = to_string(*expr);
        VAST_TRACE("{} spawns new exporter with query {}",
                   detail::id_or_name(self), query);
        auto exporter_invocation = invocation{{}, "spawn exporter", {query}};
        if (st.limits.per_result)
          caf::put(exporter_invocation.options, "vast.export.max-events",
                   st.limits.per_result);
        ++self->state.running_exporters;
        self->request(st.node, caf::infinite, exporter_invocation)
          .then(
            [=](caf::actor handle) {
              auto exporter = caf::actor_cast<exporter_actor>(handle);
              VAST_DEBUG("{} registers exporter {}", detail::id_or_name(self),
                         exporter);
              self->monitor(exporter);
              self->send(exporter, atom::sink_v, self);
              self->send(exporter, atom::run_v);
            },
            [=](caf::error error) {
              VAST_ERROR("{} failed to spawn exporter: {}",
                         detail::id_or_name(self), render(error));
              --self->state.running_exporters;
            });
      }
    },
    [=](atom::provision, exporter_actor exporter) {
      self->state.initial_exporter = exporter.address();
    },
    [=]([[maybe_unused]] std::string name, query_status) {
      VAST_DEBUG("{} received final status from {}", detail::id_or_name(self),
                 name);
      self->state.initial_query_completed = true;
      quit_if_done();
    },
    [=](atom::sink, const caf::actor& sink) {
      VAST_DEBUG("{} registers sink {}", detail::id_or_name(self), sink);
      auto& st = self->state;
      st.sink = sink;
    }};
}

} // namespace vast::system
