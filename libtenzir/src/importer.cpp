//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/importer.hpp"

#include "tenzir/fwd.hpp"

#include "tenzir/atoms.hpp"
#include "tenzir/defaults.hpp"
#include "tenzir/detail/actor_metrics.hpp"
#include "tenzir/detail/weak_run_delayed.hpp"
#include "tenzir/logger.hpp"
#include "tenzir/series_builder.hpp"
#include "tenzir/status.hpp"
#include "tenzir/table_slice.hpp"

#include <caf/config_value.hpp>
#include <caf/settings.hpp>

#include <filesystem>

namespace tenzir {

importer_state::importer_state(importer_actor::pointer self) : self{self} {
  // nop
}

importer_state::~importer_state() = default;

void importer_state::on_process(const table_slice& slice) {
  auto t = timer::start(measurement_);
  const auto rows = slice.rows();
  TENZIR_ASSERT(rows > 0);
  const auto is_internal = slice.schema().attribute("internal").has_value();
  if (not is_internal) {
    schema_counters[slice.schema()] += rows;
  }
  for (const auto& [subscriber, wants_internal] : subscribers) {
    if (is_internal == wants_internal) {
      self->send(subscriber, slice);
    }
  }
  unpersisted_events.push_back(std::move(slice));
  t.stop(rows);
}

void importer_state::handle_slice(table_slice&& slice) {
  slice.import_time(time::clock::now());
  on_process(slice);
  self->send(index, std::move(slice));
}

importer_actor::behavior_type
importer(importer_actor::stateful_pointer<importer_state> self,
         const std::filesystem::path& dir, index_actor index) {
  TENZIR_TRACE("importer {} {}", TENZIR_ARG(self->id()), TENZIR_ARG(dir));
  if (auto ec = std::error_code{};
      std::filesystem::exists(dir / "current_id_block", ec)) {
    std::filesystem::remove(dir / "current_id_block", ec);
  }
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    self->quit(msg.reason);
  });
  if (index) {
    self->state().index = std::move(index);
  }
  self->set_down_handler([self](const caf::down_msg& msg) {
    const auto subscriber
      = std::remove_if(self->state().subscribers.begin(),
                       self->state().subscribers.end(),
                       [&](const auto& subscriber) {
                         return subscriber.first.address() == msg.source;
                       });
    self->state().subscribers.erase(subscriber,
                                    self->state().subscribers.end());
  });
  // We call the metrics "ingest" to distinguish them from the "import" metrics;
  // these will disappear again in the future when we rewrite the database
  // component.
  auto builder = series_builder{type{
    "tenzir.metrics.ingest",
    record_type{
      {"timestamp", time_type{}},
      {"schema", string_type{}},
      {"schema_id", string_type{}},
      {"events", uint64_type{}},
    },
    {{"internal"}},
  }};
  detail::weak_run_delayed_loop(
    self, defaults::metrics_interval,
    [self, builder = std::move(builder),
     actor_metrics_builder = detail::make_actor_metrics_builder()]() mutable {
      self->state().handle_slice(
        detail::generate_actor_metrics(actor_metrics_builder, self));
      const auto now = time::clock::now();
      for (const auto& [schema, count] : self->state().schema_counters) {
        auto event = builder.record();
        event.field("timestamp", now);
        event.field("schema", schema.name());
        event.field("schema_id", schema.make_fingerprint());
        event.field("events", count);
      }
      self->state().schema_counters.clear();
      auto slice = builder.finish_assert_one_slice();
      if (slice.rows() == 0) {
        return;
      }
      self->state().handle_slice(std::move(slice));
    });
  // Clean up unpersisted events every second.
  const auto active_partition_timeout
    = caf::get_or(content(self->system().config()),
                  "tenzir.active-partition-timeout",
                  defaults::active_partition_timeout);
  detail::weak_run_delayed_loop(
    self, std::chrono::seconds{1}, [self, active_partition_timeout] {
      // We clear everything that's older than the active partition timeout plus
      // a fixed 10 seconds to allow some processing to happen. This is an
      // estimate, and it's definitely not a perfect solution, but it's good
      // enough hopefully.
      const auto cutoff = time::clock::now() - active_partition_timeout
                          - std::chrono::seconds{10};
      const auto it = std::ranges::find_if(
        self->state().unpersisted_events, [&](const auto& slice) {
          return slice.import_time() > cutoff;
        });
      self->state().unpersisted_events.erase(
        self->state().unpersisted_events.begin(), it);
    });
  return {
    [self](atom::flush) -> caf::result<void> {
      auto rp = self->make_response_promise<void>();
      rp.delegate(self->state().index, atom::flush_v);
      return rp;
    },
    [self](table_slice& slice) -> caf::result<void> {
      self->state().handle_slice(std::move(slice));
      return {};
    },
    [self](atom::subscribe, receiver_actor<table_slice>& subscriber,
           bool internal) -> std::vector<table_slice> {
      self->monitor(subscriber);
      self->state().subscribers.emplace_back(std::move(subscriber), internal);
      return self->state().unpersisted_events;
    },
    // -- status_client_actor --------------------------------------------------
    [](atom::status, status_verbosity, duration) { //
      return record{};
    },
  };
}

} // namespace tenzir
