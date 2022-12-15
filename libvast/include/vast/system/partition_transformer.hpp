//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/detail/flat_map.hpp"
#include "vast/index_statistics.hpp"
#include "vast/segment_builder.hpp"
#include "vast/system/active_partition.hpp"
#include "vast/system/actors.hpp"

#include <caf/broadcast_downstream_manager.hpp>
#include <caf/stream_stage.hpp>
#include <caf/typed_event_based_actor.hpp>

#include <unordered_map>
#include <variant>
#include <vector>

namespace vast::system {

/// Similar to the active partition, but all contents come in a single
/// stream, a transform is applied and no queries need to be answered
/// while the partition is constructed.
struct partition_transformer_state {
  static constexpr const char* name = "partition-transformer";

  using result_type = std::vector<augmented_partition_synopsis>;
  using promise_type = caf::typed_response_promise<result_type>;
  using partition_tuple = std::tuple<vast::uuid, vast::type, chunk_ptr>;
  using synopsis_tuple = std::tuple<vast::uuid, chunk_ptr>;

  struct stream_data {
    caf::expected<std::vector<partition_tuple>> partition_chunks = caf::error{};
    caf::expected<std::vector<synopsis_tuple>> synopsis_chunks = caf::error{};
  };

  struct path_data {
    promise_type promise = {};
  };

  partition_transformer_state() = default;

  // Update the `type_ids` map with the information of the given slice.
  void
  update_type_ids_and_indexers(std::unordered_map<std::string, ids>& type_ids,
                               const vast::uuid& partition_id,
                               const table_slice& slice);

  // Returns the partition in which to insert this slice, maybe creating a new
  // partition.
  active_partition_state::serialization_data&
  create_or_get_partition(const table_slice& slice);

  void fulfill(
    partition_transformer_actor::stateful_pointer<partition_transformer_state>
      self,
    stream_data&&, path_data&&) const;

  /// Actor handle of the catalog.
  catalog_actor catalog = {};

  /// Actor handle of the accountant.
  accountant_actor accountant = {};

  /// Actor handle of the filesystem actor.
  filesystem_actor fs = {};

  /// The transform to be applied to the data.
  pipeline_ptr transform = {};

  using stage_type
    = caf::stream_stage<table_slice,
                        caf::broadcast_downstream_manager<table_slice>>;
  using source_type = typename stage_type::stream_source;

  /// The stream stage to send table slices to the store(s).
  using partition_transformer_stream_stage_ptr
    = caf::stream_stage_ptr<table_slice,
                            caf::broadcast_downstream_manager<table_slice>>;

  partition_transformer_stream_stage_ptr stage = {};

  /// Cached stream error, if the stream terminated abnormally.
  caf::error stream_error = {};

  /// Cached transform error, if the transform returns one.
  caf::error transform_error = {};

  /// The maximum number of events per partition. (not really necessary, but
  /// required by the partition synopsis)
  size_t partition_capacity = 0ull;

  /// Total number of rows in all transformed `slices`.
  size_t events = 0ull;

  /// Number of rows per event type in the input and output.
  index_statistics stats_in;
  index_statistics stats_out;

  /// Oldest import timestamp of the input data.
  vast::time min_import_time = {};

  /// Newest import timestamp of the input data.
  vast::time max_import_time = {};

  /// The data of the newly created partition(s).
  std::multimap<type, active_partition_state::serialization_data> data = {};

  /// Auxiliary data required to create the final partition flatbuffer.
  struct buildup {
    /// The stream slot of the associated store builder.
    // Note that we don't need to store the builder
    // itself, it will shut itself down automatically.
    caf::outbound_stream_slot<table_slice> slot = {};

    /// Cached table slices in this partition.
    std::vector<table_slice> slices = {};

    /// Stores the value index for each field.
    // Fields with a `#skip` attribute are stored as `nullptr`.
    using value_index_map
      = detail::stable_map<qualified_record_field, value_index_ptr>;
    value_index_map indexers = {};
  };

  std::unordered_map<uuid, buildup> partition_buildup;

  /// Store id for partitions.
  std::string store_id;

  /// Options for creating new synopses.
  index_config synopsis_opts = {};

  /// Options for creating new value indices.
  caf::settings index_opts = {};

  // Two format strings that can be formatted with a `vast::uuid`
  // as the single parameter. They give the
  std::string partition_path_template;
  std::string synopsis_path_template;

  /// The actor waits until both the stream is finished and an `atom::persist`
  /// has arrived. Depending on what happens first, a different set of
  /// variables need to be stored in the meantime.
  std::variant<std::monostate, stream_data, path_data> persist;

  /// Number of stores launched and finished.
  size_t stores_launched = 0ull;
  size_t stores_finished = 0ull;

  struct stores_are_finished {};
  struct transformer_is_finished {
    promise_type promise;
    result_type result;
  };

  /// This actor shuts down when both all stores it spawned have shut down,
  /// and its own result is ready.
  std::variant<std::monostate, stores_are_finished, transformer_is_finished>
    shutdown_state;
};

/// Spawns a PARTITION TRANSFORMER actor with the given parameters.
/// This actor
partition_transformer_actor::behavior_type partition_transformer(
  partition_transformer_actor::stateful_pointer<partition_transformer_state>,
  std::string store_id, const index_config& synopsis_opts,
  const caf::settings& index_opts, accountant_actor accountant,
  catalog_actor catalog, filesystem_actor fs, pipeline_ptr transform,
  std::string partition_path_template, std::string synopsis_path_template);

} // namespace vast::system
