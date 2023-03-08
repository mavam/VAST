//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/system/source.hpp"

#include "vast/fwd.hpp"

#include "vast/concept/printable/std/chrono.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/fill_status_map.hpp"
#include "vast/detail/string.hpp"
#include "vast/detail/weak_run_delayed.hpp"
#include "vast/error.hpp"
#include "vast/expression.hpp"
#include "vast/format/reader.hpp"
#include "vast/logger.hpp"
#include "vast/module.hpp"
#include "vast/pipeline.hpp"
#include "vast/system/actors.hpp"
#include "vast/system/instrumentation.hpp"
#include "vast/system/status.hpp"
#include "vast/table_slice.hpp"
#include "vast/type_set.hpp"

#include <caf/attach_continuous_stream_source.hpp>
#include <caf/downstream.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/stateful_actor.hpp>

#include <chrono>
#include <optional>

namespace vast::system {

namespace {
template <class... Args>
void send_to_accountant(caf::scheduled_actor* self, accountant_actor accountant,
                        Args&&... args) {
  static_assert(caf::detail::tl_count_type<
                  accountant_actor::signatures,
                  auto(std::decay_t<Args>...)->caf::result<void>>::value,
                "Args are incompatible with accountant actor's API");
  caf::unsafe_send_as(self, accountant, std::forward<Args>(args)...);
}
} // namespace

void source_state::initialize(const catalog_actor& catalog,
                              std::string type_filter) {
  // Figure out which modules we need.
  if (catalog) {
    auto blocking = caf::scoped_actor{self->system()};
    blocking->request(catalog, caf::infinite, atom::get_v, atom::type_v)
      .receive(
        [=, this](const type_set& types) {
          auto prefix_then_dot = [](std::string_view name,
                                    std::string_view prefix) {
            if (prefix.empty())
              return true;
            auto [name_mismatch, prefix_mismatch] = std::mismatch(
              name.begin(), name.end(), prefix.begin(), prefix.end());
            return prefix_mismatch == prefix.end()
                   && (name_mismatch == name.end() || *name_mismatch == '.');
          };
          // First, merge and de-duplicate the local module with types from the
          // catalog's type-registry.
          auto merged_module = module{};
          for (const auto& type : local_module)
            if (prefix_then_dot(type.name(), type_filter))
              if (caf::holds_alternative<record_type>(type))
                merged_module.add(type);
          // Second, filter valid types from all available record types.
          for (const auto& type : types)
            if (prefix_then_dot(type.name(), type_filter))
              if (caf::holds_alternative<record_type>(type))
                merged_module.add(type);
          // Third, try to set the new module.
          if (auto err = reader->module(std::move(merged_module)))
            VAST_ERROR("{} source failed to set schema: {}", reader->name(),
                       err);
        },
        [this](const caf::error& err) {
          VAST_ERROR("{} source failed to receive schema: {}", reader->name(),
                     err);
        });
  } else {
    // We usually expect to have the type registry at the ready, but if we
    // don't we fall back to only using the modules from disk.
    VAST_WARN("{} source failed to retrieve registered types and only "
              "considers types local to the import command",
              reader->name());
    if (auto err = reader->module(std::move(local_module)))
      VAST_ERROR("{} source failed to set schema: {}", reader->name(), err);
  }
}

void source_state::send_report() {
  // Send the reader-specific status report to the accountant.
  if (auto status = reader->status(); !status.data.empty())
    send_to_accountant(self, accountant, atom::metrics_v, std::move(status));
  // Send the source-specific performance metrics to the accountant.
  auto r = performance_report{{{std::string{name}, metrics}}};
  for (const auto& [key, m, _] : r.data) {
    if (m.events > 0) {
      if (auto rate = m.rate_per_sec(); std::isfinite(rate))
        VAST_INFO("{} source produced {} events at a rate of {} events/sec in "
                  "{}",
                  reader->name(), m.events, static_cast<uint64_t>(rate),
                  to_string(m.duration));
      else
        VAST_INFO("{} source produced {} events in {}", reader->name(),
                  m.events, to_string(m.duration));
    } else {
      VAST_DEBUG("{} source produced 0 events in {}", reader->name(),
                 to_string(m.duration));
    }
  }
  metrics = measurement{};
  send_to_accountant(self, accountant, atom::metrics_v, std::move(r));
  // Send the per-event counters to the accountant.
  for (auto&& [name, count] : std::exchange(event_counters, {}))
    send_to_accountant(self, accountant, atom::metrics_v,
                       fmt::format("{}.events.{}", reader->name(), name), count,
                       metrics_metadata{});
}

void source_state::filter_and_push(
  table_slice slice, const std::function<void(table_slice)>& push_to_out) {
  const auto unfiltered_rows = slice.rows();
  if (filter) {
    if (auto filtered_slice = vast::filter(std::move(slice), *filter)) {
      VAST_DEBUG("{} forwards {}/{} produced {} events after filtering",
                 reader->name(), filtered_slice->rows(), unfiltered_rows,
                 slice.schema());
      if (auto err = executor.add(std::move(*filtered_slice))) {
        VAST_ERROR("source can not add slice to pipeline executor - data "
                   "loss due to error: {}",
                   err);
      }
      auto transformed_slices = executor.finish();
      if (!transformed_slices) {
        VAST_ERROR("source can not transform slices in pipeline - data "
                   "loss due to error: {}",
                   transformed_slices.error());
      } else {
        for (auto&& slice : *transformed_slices) {
          push_to_out(std::move(slice));
        }
      }
    } else {
      VAST_DEBUG("{} forwards 0/{} produced {} events after filtering",
                 reader->name(), unfiltered_rows, slice.schema());
    }
  } else {
    VAST_DEBUG("{} forwards {} produced {} events", reader->name(),
               unfiltered_rows, slice.schema());
    auto import_ok = executor.add(std::move(slice));
    if (import_ok) {
      VAST_WARN("source can not add slice to pipeline executor - data "
                "loss");
    }
    auto transformed_slices = executor.finish();
    for (auto&& slice : *transformed_slices) {
      push_to_out(std::move(slice));
    }
  }
}

caf::behavior
source(caf::stateful_actor<source_state>* self, format::reader_ptr reader,
       size_t table_slice_size, std::optional<size_t> max_events,
       const catalog_actor& catalog, vast::module local_module,
       std::string type_filter, accountant_actor accountant,
       std::vector<pipeline>&& pipelines) {
  VAST_TRACE_SCOPE("{}", VAST_ARG(*self));
  // Initialize state.
  self->state.self = self;
  self->state.name = reader->name();
  self->state.reader = std::move(reader);
  self->state.requested = max_events;
  self->state.local_module = std::move(local_module);
  self->state.accountant = std::move(accountant);
  self->state.table_slice_size = table_slice_size;
  self->state.has_sink = false;
  self->state.done = false;
  self->state.executor = pipeline_executor{std::move(pipelines)};
  // Register with the accountant.
  self->send(self->state.accountant, atom::announce_v, self->state.name);
  self->state.initialize(catalog, std::move(type_filter));
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    VAST_VERBOSE("{} received EXIT from {}", *self, msg.source);
    self->state.done = true;
    if (self->state.mgr) {
      self->state.mgr->shutdown();
      self->state.mgr->out().fan_out_flush();
      self->state.mgr->out().close();
      self->state.mgr->out().force_emit_batches();
    }
    self->quit(msg.reason);
  });
  // Spin up the stream manager for the source.
  self->state.mgr = caf::attach_continuous_stream_source(
    self,
    // init
    [self](caf::unit_t&) {
      caf::timestamp now = std::chrono::system_clock::now();
      self->send(self->state.accountant, atom::metrics_v, "source.start", now,
                 metrics_metadata{});
    },
    // get next element
    [self](caf::unit_t&, caf::downstream<table_slice>& out, size_t num) {
      if (self->state.has_sink && self->state.mgr->out().num_paths() == 0) {
        VAST_WARN("{} discards request for {} messages because all its "
                  "outbound paths were removed",
                  *self, num);
        return;
      }
      // Extract events until the source has exhausted its input or until
      // we have completed a batch.
      auto push_slice = [&](table_slice slice) {
        self->state.filter_and_push(std::move(slice), [&](table_slice slice) {
          const auto& schema = slice.schema();
          self->state.event_counters[std::string{schema.name()}]
            += slice.rows();
          out.push(std::move(slice));
        });
      };
      // We can produce up to num * table_slice_size events per run.
      auto events = static_cast<size_t>(num) * self->state.table_slice_size;
      if (self->state.requested)
        events = std::min(events, *self->state.requested - self->state.count);
      auto t = timer::start(self->state.metrics);
      auto [err, produced] = self->state.reader->read(
        events, self->state.table_slice_size, push_slice);
      VAST_DEBUG("{} read {} events", *self, produced);
      // TODO: We use the produced number in metrics and INFO logs, but it is
      // the number _before_ filtering which may be a bit unexpected to the
      // user. Because we filter the slices 1-by-1 this isn't an easy change to
      // make. This is especially annoying when the filter is invalid.
      t.stop(produced);
      self->state.count += produced;
      auto finish = [&] {
        self->state.done = true;
        self->state.send_report();
        self->quit();
      };
      if (self->state.requested
          && self->state.count >= *self->state.requested) {
        VAST_DEBUG("{} finished with {} events", *self, self->state.count);
        return finish();
      }
      if (err == ec::stalled) {
        if (!self->state.waiting_for_input) {
          // This pull handler was invoked while we were waiting for a wakeup
          // message. Sending another one would create a parallel wakeup cycle.
          self->state.waiting_for_input = true;
          detail::weak_run_delayed(self, self->state.wakeup_delay, [self] {
            VAST_VERBOSE("{} wakes up to check for new input", *self);
            self->state.waiting_for_input = false;
            // If we are here, the reader returned with ec::stalled the last
            // time it was called. Let's check if we can read something now.
            if (self->state.mgr->generate_messages())
              self->state.mgr->push();
          });
          VAST_DEBUG("{} scheduled itself to resume after {}", *self,
                     self->state.wakeup_delay);
          // Exponential backoff for the wakeup calls.
          // For each consecutive invocation of this generate handler that does
          // not emit any events, we double the wakeup delay.
          // The sequence is 0, 20, 40, 80, 160, 320, 640, 1280.
          if (self->state.wakeup_delay == std::chrono::milliseconds::zero())
            self->state.wakeup_delay = std::chrono::milliseconds{20};
          else if (self->state.wakeup_delay
                   < self->state.reader->batch_timeout_ / 2)
            self->state.wakeup_delay *= 2;
        } else {
          VAST_DEBUG("{} timed out but is already scheduled for wakeup", *self);
        }
        return;
      }
      self->state.wakeup_delay = std::chrono::milliseconds::zero();
      if (err == ec::timeout) {
        VAST_DEBUG("{} reached batch timeout and flushes its buffers", *self);
        self->state.mgr->out().force_emit_batches();
      } else if (err != caf::none) {
        if (err != vast::ec::end_of_input)
          VAST_INFO("{} completed with message: {}", *self, render(err));
        else
          VAST_DEBUG("{} completed at end of input", *self);
        return finish();
      }
      VAST_DEBUG("{} ended a generation round regularly", *self);
    },
    // done?
    [self](const caf::unit_t&) {
      return self->state.done;
    });
  auto result = source_actor::behavior_type{
    [self](atom::get, atom::module) { //
      return self->state.reader->module();
    },
    [self](atom::put, class module module) -> caf::result<void> {
      VAST_DEBUG("{} received schema {}", *self, module);
      if (auto err = self->state.reader->module(std::move(module)))
        return err;
      return caf::unit;
    },
    [self](atom::normalize, expression& expr) -> caf::result<void> {
      auto normalized_expr = normalize_and_validate(std::move(expr));
      if (!normalized_expr) {
        return caf::make_error(ec::invalid_argument,
                               fmt::format("failed to normalize expression: "
                                           "{}",
                                           normalized_expr.error()));
      }
      self->state.filter = std::move(*normalized_expr);
      return {};
    },
    [self](stream_sink_actor<table_slice, std::string> sink) {
      VAST_ASSERT(sink);
      VAST_DEBUG("{} registers sink {}", *self, VAST_ARG(sink));
      // TODO: Currently, we use a broadcast downstream manager. We need to
      //       implement an anycast downstream manager and use it for the
      //       source, because we mustn't duplicate data.
      if (self->state.has_sink) {
        self->quit(caf::make_error(ec::logic_error,
                                   "source does not support "
                                   "multiple sinks; sender =",
                                   self->current_sender()));
        return;
      }
      // Start streaming.
      self->state.has_sink = true;
      detail::weak_run_delayed_loop(self, defaults::system::telemetry_rate,
                                    [self] {
                                      self->state.send_report();
                                    });
      self->state.mgr->add_outbound_path(
        sink, std::make_tuple(self->state.reader->name()));
    },
    [self](atom::status, status_verbosity v) {
      auto rs = make_status_request_state(self);
      if (v >= status_verbosity::detailed) {
        record src;
        if (self->state.reader)
          src["format"] = self->state.reader->name();
        src["produced"] = uint64_t{self->state.count};
        // General state such as open streams.
        if (v >= status_verbosity::debug)
          detail::fill_status_map(src, self);
      }
      return rs->promise;
    },
  };
  // We cannot return the behavior directly and make the SOURCE a typed actor
  // as long as SOURCE and DATAGRAM SOURCE coexist with the same interface,
  // because the DATAGRAM SOURCE is a typed broker.
  return result.unbox();
}

} // namespace vast::system
