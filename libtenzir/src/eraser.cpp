//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2020 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/eraser.hpp"

#include "tenzir/fwd.hpp"

#include "tenzir/catalog.hpp"
#include "tenzir/concept/parseable/tenzir/expression.hpp"
#include "tenzir/concept/parseable/to.hpp"
#include "tenzir/index.hpp"
#include "tenzir/logger.hpp"
#include "tenzir/query_context.hpp"

#include <caf/event_based_actor.hpp>
#include <caf/stateful_actor.hpp>
#include <caf/timespan.hpp>

namespace tenzir {

record eraser_state::status(status_verbosity) const {
  auto result = record{};
  result["query"] = query_;
  result["interval"] = interval_;
  return result;
}

eraser_actor::behavior_type
eraser(eraser_actor::stateful_pointer<eraser_state> self,
       caf::timespan interval, std::string query, index_actor index) {
  TENZIR_TRACE_SCOPE("eraser: {} {} {} {}", TENZIR_ARG(self->id()),
                     TENZIR_ARG(interval), TENZIR_ARG(query),
                     TENZIR_ARG(index));
  // Set member variables.
  self->state.interval_ = interval;
  self->state.query_ = std::move(query);
  self->state.index_ = std::move(index);
  self->delayed_send(self, interval, atom::ping_v);
  return {
    [self](atom::ping) {
      self
        ->request(static_cast<eraser_actor>(self), self->state.interval_,
                  atom::run_v)
        .then(
          [self](atom::ok) {
            TENZIR_VERBOSE("{} successfully finishes run", *self);
            self->delayed_send(static_cast<eraser_actor>(self),
                               self->state.interval_, atom::ping_v);
          },
          [self](const caf::error& e) {
            TENZIR_WARN("{} encountered error while erasing: {}", *self, e);
            self->delayed_send(static_cast<eraser_actor>(self),
                               self->state.interval_, atom::ping_v);
          });
    },
    [self](atom::run) -> caf::result<atom::ok> {
      auto const& query = self->state.query_;
      TENZIR_VERBOSE("{} runs with query {}", *self, query);
      auto expr = to<expression>(query);
      if (!expr)
        return caf::make_error(ec::invalid_query, fmt::format("{} failed to "
                                                              "parse query {}",
                                                              *self, query));
      if (expr = normalize_and_validate(std::move(*expr)); !expr)
        return caf::make_error(
          ec::invalid_query,
          fmt::format("{} failed to normalize and validate {}", *self, query));
      auto transform = pipeline::internal_parse(
        fmt::format("where {}", fmt::to_string(expression{negation{*expr}})));
      if (!transform)
        return transform.error();
      auto rp = self->make_response_promise<atom::ok>();
      self->request(self->state.index_, caf::infinite, atom::resolve_v, *expr)
        .then(
          [self, transform = std::move(*transform),
           rp](legacy_catalog_lookup_result& result) mutable {
            for (const auto& [_, partition_infos] : result.candidate_infos) {
              TENZIR_DEBUG("{} resolved query {} to {} partitions", *self,
                           self->state.query_,
                           partition_infos.partition_infos.size());
              if (partition_infos.partition_infos.empty()) {
                rp.deliver(atom::ok_v);
                continue;
              }
              // TODO: Test if the candidate is a false positive before applying
              // the transform to avoid unnecessary noise.
              self
                ->request(self->state.index_, caf::infinite, atom::apply_v,
                          std::move(transform), partition_infos.partition_infos,
                          keep_original_partition::no)
                .then(
                  [self,
                   rp](const std::vector<tenzir::partition_info>&) mutable {
                    TENZIR_DEBUG("{} applied filter transform with query {}",
                                 *self, self->state.query_);
                    rp.deliver(atom::ok_v);
                  },
                  [self, rp](const caf::error& e) mutable {
                    TENZIR_WARN("{} failed to apply filter query {}: {}", *self,
                                self->state.query_, e);
                    rp.deliver(e);
                  });
            }
          },
          [rp](const caf::error& e) mutable {
            TENZIR_ASSERT(false, caf::deep_to_string(e).c_str());
            rp.deliver(e);
          });
      return rp;
    },
    // -- status_client_actor -------------------------------------------------
    [self](atom::status, status_verbosity v, duration) {
      return self->state.status(v);
    },
  };
}

} // namespace tenzir
