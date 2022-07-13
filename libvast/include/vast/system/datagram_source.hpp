//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2018 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/pipeline.hpp"
#include "vast/system/actors.hpp"
#include "vast/system/source.hpp"

#include <caf/io/typed_broker.hpp>

#include <optional>

namespace vast::system {

struct datagram_source_state : source_state {
  // -- member types -----------------------------------------------------------

  using super = source_state;

  // -- constructors, destructors, and assignment operators --------------------

  using super::super;

  // -- member variables -------------------------------------------------------

  /// Shuts down the stream manager when `true`.
  bool done = false;

  /// Containes the amount of dropped packets since the last heartbeat.
  size_t dropped_packets = 0;

  /// Timestamp when the source was started.
  caf::timestamp start_time;
};

/// An event producer.
/// @param self The actor handle.
/// @param udp_listening_port The requested port.
/// @param reader The reader instance.
/// @param table_slice_size The maximum size for a table slice.
/// @param max_events The optional maximum amount of events to import.
/// @param type_registry The actor handle for the type-registry component.
/// @param local_module Additional local modules to consider.
/// @param type_filter Restriction for considered types.
/// @param accountant_actor The actor handle for the accountant component.
caf::behavior datagram_source(
  caf::stateful_actor<datagram_source_state, caf::io::broker>* self,
  uint16_t udp_listening_port, format::reader_ptr reader,
  size_t table_slice_size, std::optional<size_t> max_events,
  const type_registry_actor& type_registry, vast::module local_module,
  std::string type_filter, accountant_actor accountant,
  std::vector<pipeline>&& pipelines);

} // namespace vast::system
