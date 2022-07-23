//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/system/exporter.hpp"

#include "vast/fwd.hpp"

#include "vast/concept/printable/std/chrono.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/bitmap.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/concept/printable/vast/uuid.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/fill_status_map.hpp"
#include "vast/detail/narrow.hpp"
#include "vast/detail/tracepoint.hpp"
#include "vast/error.hpp"
#include "vast/expression_visitors.hpp"
#include "vast/logger.hpp"
#include "vast/query_context.hpp"
#include "vast/system/query_cursor.hpp"
#include "vast/system/query_status.hpp"
#include "vast/system/report.hpp"
#include "vast/system/status.hpp"
#include "vast/table_slice.hpp"

#include <caf/stream_slot.hpp>
#include <caf/typed_event_based_actor.hpp>

namespace vast::system {

namespace {

void ship_results(exporter_actor::stateful_pointer<exporter_state> self) {
  VAST_TRACE_SCOPE("");
  auto& st = self->state;
  VAST_DEBUG("{} relays {} events", *self, st.query_status.cached);
  while (st.query_status.requested > 0 && st.query_status.cached > 0) {
    VAST_ASSERT(!st.results.empty());
    // Fetch the next table slice. Either we grab the entire first slice in
    // st.results or we need to split it up.
    table_slice slice = {};
    if (st.results[0].rows() <= st.query_status.requested) {
      slice = std::move(st.results[0]);
      st.results.erase(st.results.begin());
    } else {
      auto [first, second]
        = split(std::move(st.results[0]), st.query_status.requested);
      VAST_ASSERT(first.encoding() != table_slice_encoding::none);
      VAST_ASSERT(second.encoding() != table_slice_encoding::none);
      VAST_ASSERT(first.rows() == st.query_status.requested);
      slice = std::move(first);
      st.results[0] = std::move(second);
    }
    // Ship the slice and update state.
    auto rows = slice.rows();
    VAST_ASSERT(rows <= st.query_status.cached);
    st.query_status.cached -= rows;
    st.query_status.requested -= rows;
    st.query_status.shipped += rows;
    if (auto err = self->state.pipeline.add(std::move(slice))) {
      VAST_ERROR("exporter failed to apply the transformation: {}", err);
      return;
    }
    auto transformed = self->state.pipeline.finish();
    if (!transformed) {
      VAST_ERROR("exporter failed to finish the transformation: {}",
                 transformed.error());
      return;
    }
    for (auto& t : *transformed)
      self->anon_send(st.sink, std::move(t));
  }
}

void report_statistics(exporter_actor::stateful_pointer<exporter_state> self) {
  auto& st = self->state;
  if (st.statistics_subscriber)
    self->anon_send(st.statistics_subscriber, st.name, st.query_status);
  if (st.accountant) {
    auto processed = st.query_status.processed;
    auto shipped = st.query_status.shipped;
    auto results = shipped + st.results.size();
    auto selectivity = processed != 0
                         ? detail::narrow_cast<double>(results)
                             / detail::narrow_cast<double>(processed)
                         : 1.0;
    auto msg = report{
      .data = {
        {"exporter.processed", processed},
        {"exporter.results", results},
        {"exporter.shipped", shipped},
        {"exporter.selectivity", selectivity},
        {"exporter.runtime", st.query_status.runtime},
      },
      .metadata = {
        {"query", fmt::to_string(self->state.query_context.id)},
      },
    };
    self->send(st.accountant, std::move(msg));
  }
}

void shutdown(exporter_actor::stateful_pointer<exporter_state> self,
              caf::error err) {
  VAST_DEBUG("{} initiates shutdown with error {}", *self, render(err));
  self->send_exit(self, std::move(err));
}

void shutdown(exporter_actor::stateful_pointer<exporter_state> self) {
  if (has_continuous_option(self->state.options))
    return;
  VAST_DEBUG("{} initiates shutdown", *self);
  self->send_exit(self, caf::exit_reason::normal);
}

void request_more_hits(exporter_actor::stateful_pointer<exporter_state> self) {
  auto& st = self->state;
  // Sanity check.
  if (!has_historical_option(st.options)) {
    VAST_WARN("{} requested more hits for continuous query", *self);
    return;
  }
  // Do nothing if we already shipped everything the client asked for.
  if (st.query_status.requested == 0) {
    VAST_DEBUG("{} shipped {} results and waits for client to request more",
               *self, self->state.query_status.shipped);
    return;
  }
  // Do nothing if we received everything.
  if (st.query_status.received == st.query_status.expected) {
    VAST_DEBUG("{} received hits for all {} partitions", *self,
               st.query_status.expected);
    return;
  }
  // If the if-statement above isn't true then `received < expected` must hold.
  // Otherwise, we would receive results for more partitions than qualified as
  // hits by the INDEX.
  VAST_ASSERT(st.query_status.received < st.query_status.expected);
  auto remaining = st.query_status.expected - st.query_status.received;
  // TODO: Figure out right number of partitions to ask for. For now, we
  // bound the number by an arbitrary constant.
  auto n = std::min(remaining, size_t{2});
  // Store how many partitions we schedule with our request. When receiving
  // 'done', we add this number to `received`.
  st.query_status.scheduled = n;
  // Request more hits from the INDEX.
  VAST_DEBUG("{} asks index to process {} more partitions", *self, n);
  self->send(st.index, st.id, detail::narrow<uint32_t>(n));
}

void handle_batch(exporter_actor::stateful_pointer<exporter_state> self,
                  table_slice slice) {
  VAST_ASSERT(slice.encoding() != table_slice_encoding::none);
  VAST_DEBUG("{} got batch of {} events", *self, slice.rows());
  // Construct a candidate checker if we don't have one for this type.
  auto layout = slice.layout();
  auto it = self->state.checkers.find(layout);
  if (it == self->state.checkers.end()) {
    auto x = tailor(self->state.query_context.expr, layout);
    if (!x) {
      VAST_ERROR("{} failed to tailor expression: {}", *self,
                 render(x.error()));
      ship_results(self);
      shutdown(self);
      return;
    }
    VAST_DEBUG("{} tailored AST to {}: {}", *self, layout, x);
    std::tie(it, std::ignore)
      = self->state.checkers.emplace(layout, std::move(*x));
  }
  auto& checker = it->second;
  // Perform candidate check, splitting the slice into subsets if needed.
  self->state.query_status.processed += slice.rows();
  auto selection = evaluate(checker, slice, {});
  auto selection_size = rank(selection);
  if (selection_size == 0) {
    // No rows qualify.
    return;
  }
  self->state.query_status.cached += selection_size;
  select(self->state.results, slice, selection);
  // Ship slices to connected SINKs.
  ship_results(self);
}

} // namespace

exporter_actor::behavior_type
exporter(exporter_actor::stateful_pointer<exporter_state> self, expression expr,
         query_options options, std::vector<pipeline>&& pipelines) {
  self->state.options = options;
  self->state.query_context
    = vast::query_context::make_extract(self, std::move(expr));
  self->state.query_context.priority
    = has_low_priority_option(self->state.options)
        ? query_context::priority::low
        : query_context::priority::normal;
  self->state.pipeline = pipeline_executor{std::move(pipelines)};
  if (auto err = self->state.pipeline.validate(
        pipeline_executor::allow_aggregate_pipelines::no)) {
    VAST_ERROR("transformer is not allowed to use aggregate transform {}", err);
    self->quit();
    return exporter_actor::behavior_type::make_empty_behavior();
  }
  if (has_continuous_option(options))
    VAST_DEBUG("{} has continuous query option", *self);
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    VAST_DEBUG("{} received exit from {} with reason: {}", *self, msg.source,
               msg.reason);
    if (msg.reason != caf::exit_reason::kill)
      report_statistics(self);
    self->quit(msg.reason);
  });
  self->set_down_handler([=](const caf::down_msg& msg) {
    VAST_DEBUG("{} received DOWN from {}", *self, msg.source);
    if (has_continuous_option(self->state.options)
        && msg.source == self->state.index)
      report_statistics(self);
    // Without sinks and resumable sessions, there's no reason to proceed.
    self->quit(msg.reason);
  });
  return {
    [self](atom::extract) -> caf::result<void> {
      // Sanity check.
      VAST_DEBUG("{} got request to extract all events", *self);
      if (self->state.query_status.requested == max_events) {
        VAST_WARN("{} ignores extract request, already getting all", *self);
        return {};
      }
      // Configure state to get all remaining partition results.
      self->state.query_status.requested = max_events;
      ship_results(self);
      request_more_hits(self);
      return {};
    },
    [self](atom::extract, uint64_t requested_results) -> caf::result<void> {
      // Sanity checks.
      if (requested_results == 0) {
        VAST_WARN("{} ignores extract request for 0 results", *self);
        return {};
      }
      if (self->state.query_status.requested == max_events) {
        VAST_WARN("{} ignores extract request, already getting all", *self);
        return {};
      }
      VAST_ASSERT(self->state.query_status.requested < max_events);
      // Configure state to get up to `requested_results` more events.
      auto n = std::min(max_events - requested_results, requested_results);
      VAST_DEBUG("{} got a request to extract {} more results in addition to "
                 "{} pending results",
                 *self, n, self->state.query_status.requested);
      self->state.query_status.requested += n;
      ship_results(self);
      request_more_hits(self);
      return {};
    },
    [self](accountant_actor accountant) {
      self->state.accountant = std::move(accountant);
      self->send(self->state.accountant, atom::announce_v, self->name());
    },
    [self](index_actor index) {
      VAST_DEBUG("{} registers index {}", *self, index);
      self->state.index = std::move(index);
      if (has_continuous_option(self->state.options))
        self->monitor(self->state.index);
    },
    [self](atom::sink, const caf::actor& sink) {
      VAST_DEBUG("{} registers sink {}", *self, sink);
      self->state.sink = sink;
      self->monitor(self->state.sink);
    },
    [self](atom::run) {
      VAST_VERBOSE("{} executes query: {}", *self, self->state.query_context);
      self->state.start = std::chrono::system_clock::now();
      if (!has_historical_option(self->state.options))
        return;
      self
        ->request(self->state.index, caf::infinite, atom::evaluate_v,
                  self->state.query_context)
        .then(
          [=](const atom::done&) {
            using namespace std::string_literals;
            // Figure out if we're done by bumping the counter for `received`
            // and check whether it reaches `expected`.
            caf::timespan runtime
              = std::chrono::system_clock::now() - self->state.start;
            self->state.query_status.runtime = runtime;
            VAST_DEBUG("{} received all hits from {} partition(s) in {}", *self,
                       self->state.query_status.expected,
                       vast::to_string(runtime));
            VAST_TRACEPOINT(query_done, self->state.id.as_u64().first);
            if (self->state.accountant)
              self->send(
                self->state.accountant, "exporter.hits.runtime", runtime,
                metrics_metadata{
                  {"query", fmt::to_string(self->state.query_context.id)}});
            shutdown(self);
          },
          [=](const caf::error& e) {
            shutdown(self, e);
          });
    },
    [self](atom::ping, const query_cursor& cursor) -> uint32_t {
      VAST_ASSERT_CHEAP(cursor.candidate_partitions > 0);
      auto taste_size
        = std::min(self->state.taste_size, cursor.candidate_partitions);
      VAST_VERBOSE("{} got lookup handle {}, scheduled {}/{} partitions", *self,
                   cursor.id, taste_size, cursor.candidate_partitions);
      self->state.id = cursor.id;
      self->state.query_status.expected = cursor.candidate_partitions;
      self->state.query_status.scheduled = taste_size;
      return taste_size;
    },
    [self](atom::statistics, const caf::actor& statistics_subscriber) {
      VAST_DEBUG("{} registers statistics subscriber {}", *self,
                 statistics_subscriber);
      self->state.statistics_subscriber = statistics_subscriber;
    },
    [self](
      caf::stream<table_slice> in) -> caf::inbound_stream_slot<table_slice> {
      return self
        ->make_sink(
          in,
          [](caf::unit_t&) {
            // nop
          },
          [=](caf::unit_t&, table_slice slice) {
            handle_batch(self, std::move(slice));
          },
          [=](caf::unit_t&, const caf::error& err) {
            if (err)
              VAST_ERROR("{} got error during streaming: {}", *self, err);
          })
        .inbound_slot();
    },
    // -- status_client_actor --------------------------------------------------
    [self](atom::status, status_verbosity v) {
      auto result = record{};
      if (v >= status_verbosity::info) {
        record exp;
        exp["expression"] = to_string(self->state.query_context.expr);
        if (v >= status_verbosity::detailed) {
          exp["start"] = caf::deep_to_string(self->state.start);
          auto pipeline_names = list{};
          for (const auto& t : self->state.pipeline.pipelines())
            pipeline_names.emplace_back(t.name());
          exp["pipelines"] = std::move(pipeline_names);
          if (v >= status_verbosity::debug)
            detail::fill_status_map(exp, self);
        }
        auto xs = list{};
        xs.emplace_back(std::move(exp));
        result["queries"] = std::move(xs);
      }
      return result;
    },
    // -- receiver_actor<table_slice> ------------------------------------------
    [self](table_slice slice) { //
      VAST_ASSERT(slice.encoding() != table_slice_encoding::none);
      VAST_DEBUG("{} got batch of {} events", *self, slice.rows());
      self->state.query_status.processed += slice.rows();
      self->state.query_status.cached += slice.rows();
      self->state.results.push_back(slice);
      // Ship slices to connected SINKs.
      ship_results(self);
    },
    [self](atom::done) {
      using namespace std::string_literals;
      // Figure out if we're done by bumping the counter for `received`
      // and check whether it reaches `expected`.
      caf::timespan runtime
        = std::chrono::system_clock::now() - self->state.start;
      self->state.query_status.runtime = runtime;
      self->state.query_status.received += self->state.query_status.scheduled;
      VAST_DEBUG("{} received hits from {}/{} partitions", *self,
                 self->state.query_status.received,
                 self->state.query_status.expected);
      if (self->state.query_status.received < self->state.query_status.expected)
        request_more_hits(self);
    },
  };
}

} // namespace vast::system
