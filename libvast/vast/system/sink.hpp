//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/system/actors.hpp"
#include "vast/system/instrumentation.hpp"
#include "vast/transform.hpp"

#include <caf/behavior.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/stateful_actor.hpp>

#include <chrono>
#include <cstdint>

namespace vast::system {

// The base class for SINK actors.
struct sink_state {
  std::chrono::steady_clock::duration flush_interval = std::chrono::seconds(1);
  std::chrono::steady_clock::time_point last_flush;
  uint64_t processed = 0;
  uint64_t max_events = 0;
  caf::event_based_actor* self;
  caf::actor statistics_subscriber;
  accountant_actor accountant;
  vast::system::measurement measurement;
  format::writer_ptr writer;
  transformation_engine transforms;
  const char* name = "writer";

  explicit sink_state(caf::event_based_actor* self_ptr);

  void send_report();
};

caf::behavior sink(caf::stateful_actor<sink_state>* self,
                   format::writer_ptr&& writer, uint64_t max_events);

caf::behavior
transforming_sink(caf::stateful_actor<sink_state>* self,
                  format::writer_ptr&& writer,
                  std::vector<transform>&& transforms, uint64_t max_events);

} // namespace vast::system
