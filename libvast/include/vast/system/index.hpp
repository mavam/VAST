//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/detail/lru_cache.hpp"
#include "vast/detail/stable_set.hpp"
#include "vast/fbs/index.hpp"
#include "vast/index_statistics.hpp"
#include "vast/plugin.hpp"
#include "vast/query_context.hpp"
#include "vast/query_queue.hpp"
#include "vast/system/active_partition.hpp"
#include "vast/system/actors.hpp"
#include "vast/system/catalog.hpp"
#include "vast/system/importer.hpp"
#include "vast/system/query_cursor.hpp"
#include "vast/uuid.hpp"

#include <caf/actor.hpp>
#include <caf/behavior.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/typed_response_promise.hpp>

#include <queue>
#include <unordered_map>
#include <vector>

namespace vast::system {

/// The transformer replaces the old partition with the new one or keeps it
/// depending on the value of keep_original_partition.
enum class keep_original_partition : bool {
  yes = true,
  no = false,
};

template <class Inspector>
auto inspect(Inspector& f, keep_original_partition& x) {
  return detail::inspect_enum(f, x);
}

// New partition creation listeners will be sent the initial state of the
// whole database if they set this to 'yes'.
enum class send_initial_dbstate : bool {
  yes = true,
  no = false,
};

template <class Inspector>
auto inspect(Inspector& f, send_initial_dbstate& x) {
  return detail::inspect_enum(f, x);
}

/// Helper class used to route table slice columns to the correct indexer
/// in the CAF stream stage.
struct i_partition_selector {
  bool operator()(const type& filter, const table_slice& slice) const;
};

/// Extract a partition synopsis from the partition at `partition_path`
/// and write it to `partition_synopsis_path`.
//  TODO: Move into separate header.
caf::error
extract_partition_synopsis(const std::filesystem::path& partition_path,
                           const std::filesystem::path& partition_synopsis_path);

/// Flatbuffer integration. Note that this is only one-way, restoring
/// the index state needs additional runtime information.
// TODO: Pull out the persisted part of the state into a separate struct
// that can be packed and unpacked.
caf::expected<flatbuffers::Offset<fbs::Index>>
pack(flatbuffers::FlatBufferBuilder& builder, const index_state& state);

/// The state of the active partition.
struct active_partition_info {
  /// The partition actor.
  active_partition_actor actor = {};

  /// The slot ID that identifies the partition in the stream.
  caf::stream_slot stream_slot = {};

  /// The store actor that holds the segments for this partition.
  // NOTE: Logically this should belong inside the active partition, but the way
  // the CAF streaming api works makes it really annoying to have the partition
  // stream both whole table_slices to the store and table_slice_columns to
  // the indexers. So barring a major refactoring, we just have the partition
  // do the streaming.
  store_builder_actor store = {};

  // The slot ID that identifies the store in the stream.
  caf::stream_slot store_slot = {};

  /// The remaining free capacity of the partition.
  size_t capacity = {};

  /// The UUID of the partition.
  uuid id = {};

  /// The spawn timestamp of the partition.
  std::chrono::steady_clock::time_point spawn_time = {};

  template <class Inspector>
  friend auto inspect(Inspector& f, active_partition_info& x) {
    return f.object(x)
      .pretty_name("active_partition_info")
      .fields(f.field("actor", x.actor), f.field("stream-slot", x.stream_slot),
              f.field("capacity", x.capacity), f.field("id", x.id),
              f.field("spawn-time", x.spawn_time));
  }
};

/// Loads partitions from disk by UUID.
class partition_factory {
public:
  explicit partition_factory(index_state& state);

  filesystem_actor& filesystem(); // getter/setter

  partition_actor operator()(const uuid& id) const;

  [[nodiscard]] size_t materializations() const;

private:
  filesystem_actor filesystem_;
  const index_state& state_;

  /// A counter for the amount passive partitions were loaded from disk.
  mutable size_t materializations_ = 0;
};

/// Event counters for metrics.
struct index_counters {
  /// Stores how many passive partitions were loaded from disk until the last
  /// time the delta was written to the metrics. This variable stores the
  /// absolute number since the index was started and is only used to calulate
  /// the delta for the next round.
  size_t previous_materializations = 0;

  /// How many queries were sent to partitions.
  size_t partition_lookups = 0;

  /// How many partitions were scheduled for queries.
  size_t partition_scheduled = 0;
};

/// The state of the index actor.
struct index_state {
  // -- type aliases -----------------------------------------------------------

  using index_stream_stage_ptr = caf::stream_stage_ptr<
    table_slice, caf::broadcast_downstream_manager<table_slice, vast::type,
                                                   i_partition_selector>>;

  // -- constructor ------------------------------------------------------------

  explicit index_state(index_actor::pointer self);

  // -- persistence ------------------------------------------------------------

  [[nodiscard]] std::filesystem::path
  index_filename(const std::filesystem::path& basename = {}) const;

  /// The path to a partition transform finalize marker.
  [[nodiscard]] std::filesystem::path marker_path(const uuid& id) const;

  /// Maps partitions to their expected location on the file system.
  [[nodiscard]] std::filesystem::path partition_path(const uuid& id) const;

  /// The path to which a partition transformer should write a partition with
  /// the UUID `id`.
  [[nodiscard]] std::filesystem::path
  transformer_partition_path(const uuid& id) const;

  /// Returns a format string that can be formatted with a partition id to
  /// get the output location of that partition for the partition transformer.
  [[nodiscard]] std::string transformer_partition_path_template() const;

  /// Maps partition synopses to their expected location on the file system.
  [[nodiscard]] std::filesystem::path
  partition_synopsis_path(const uuid& id) const;

  /// The path to which a partition transformer should write a synopsis
  /// for a partition with the UUID `id`.
  [[nodiscard]] std::filesystem::path
  transformer_partition_synopsis_path(const uuid& id) const;

  /// Returns a format string that can be formatted with a partition id to
  /// get the output location of the that partition synopsis for the
  /// partition transformer.
  [[nodiscard]] std::string
  transformer_partition_synopsis_path_template() const;

  caf::error load_from_disk();

  void flush_to_disk();

  // -- flush handling ---------------------------------------------------------

  /// Adds a new flush listener.
  void add_flush_listener(flush_listener_actor listener);

  /// Sends a notification to all listeners and clears the listeners list.
  void notify_flush_listeners();

  // -- partition handling -----------------------------------------------------

  /// Generates a unique query id.
  vast::uuid create_query_id();

  /// Creates a new active partition.
  /// @param schema The schema of the new partition. All events routed to the
  /// partition are assumed to have the exact same schema.
  /// @returns An iterator to the new active partition.
  [[nodiscard]] caf::expected<
    std::unordered_map<type, active_partition_info>::iterator>
  create_active_partition(const type& schema);

  /// Decommissions the active partition.
  /// @param schema The schema of the active partition to decommission.
  /// @param completion The completion handler; called in the actor context of
  /// the index when the partition was decommissioned.
  /// @note This invalidates iterators to the *active_partitions* map.
  void decommission_active_partition(
    const type& schema, std::function<void(const caf::error&)> completion);

  /// Adds a new partition creation listener.
  void
  add_partition_creation_listener(partition_creation_listener_actor listener);

  // -- query handling ---------------------------------------------------------

  void schedule_lookups();

  // -- introspection ----------------------------------------------------------

  /// Flushes collected metrics to the accountant.
  void send_report();

  /// @returns various status metrics.
  [[nodiscard]] caf::typed_response_promise<record>
  status(status_verbosity v) const;

  size_t memusage() const;

  // -- data members -----------------------------------------------------------

  /// Pointer to the parent actor.
  index_actor::pointer self;

  /// The streaming stage.
  index_stream_stage_ptr stage;

  /// One active (read/write) partition per layout.
  std::unordered_map<type, active_partition_info> active_partitions = {};

  /// Partitions that are currently in the process of persisting.
  // TODO: An alternative to keeping an explicit set of unpersisted partitions
  // would be to add functionality to the LRU cache to "pin" certain items.
  // Then (assuming the query interface for both types of partition stays
  // identical) we could just use the same cache for unpersisted partitions and
  // unpin them after they're safely on disk.
  std::unordered_map<uuid, partition_actor> unpersisted = {};

  /// The set of passive (read-only) partitions currently loaded into memory.
  /// Uses the `partition_factory` to load new partitions as needed, and evicts
  /// old entries when the size exceeds `max_inmem_partitions`.
  detail::lru_cache<uuid, partition_actor, partition_factory> inmem_partitions;

  /// The set of partitions that exist on disk.
  std::unordered_set<uuid> persisted_partitions = {};

  /// This set to true after the index finished reading the catalog state
  /// from disk.
  bool accept_queries = {};

  /// The maximum number of events that a partition can hold.
  size_t partition_capacity = {};

  /// Timeout after which an active partition is forcibly flushed.
  duration active_partition_timeout = {};

  /// The maximum size of the partition LRU cache (or the maximum number of
  /// read-only partition loaded to memory).
  size_t max_inmem_partitions = {};

  /// The number of partitions initially returned for a query.
  uint32_t taste_partitions = {};

  /// The queue of in-flight queries.
  query_queue pending_queries = {};

  /// Maps exporter actor address to known query ID for monitoring
  /// purposes.
  std::unordered_map<caf::actor_addr, std::unordered_set<uuid>> monitored_queries
    = {};

  /// The maximum number of partitions to serve queries at the same time.
  /// Assigned from the `max-queries` config option.
  /// TODO: Rename that option appropriately and deprecate the old name.
  size_t max_concurrent_partition_lookups = 0;

  /// A counter to track the number of partitions that are currently serving
  /// lookups.
  size_t running_partition_lookups = 0;

  /// Keeps temporary statistics that are flushed with the metrics.
  index_counters counters = {};

  /// The CATALOG actor.
  catalog_actor catalog = {};

  /// The TYPE REGISTRY actor. (required for spawning partition transformers)
  type_registry_actor type_registry;

  /// The directory for persistent state.
  std::filesystem::path dir = {};

  /// The directory for partition synopses.
  std::filesystem::path synopsisdir = {};

  /// The directory for in-progress partition transforms.
  std::filesystem::path markersdir = {};

  /// Statistics about processed data.
  index_statistics stats = {};

  /// Timekeeper for the scheduling algorithm.
  struct measurement scheduler_measurement = {};

  /// Handle of the accountant.
  accountant_actor accountant = {};

  /// List of actors that wait for the next flush event.
  std::vector<flush_listener_actor> flush_listeners = {};

  /// List of actors that want to be notified about new partitions.
  std::vector<partition_creation_listener_actor> partition_creation_listeners
    = {};

  /// Actor handle of the store actor.
  archive_actor global_store = {};

  /// Plugin responsible for spawning new partition-local stores.
  const vast::store_actor_plugin* store_actor_plugin = {};

  /// The partitions currently being transformed.
  detail::stable_set<uuid> partitions_in_transformation = {};

  /// Actor handle of the filesystem actor.
  filesystem_actor filesystem = {};

  /// Config options to be used for new synopses; passed to active partitions.
  index_config synopsis_opts;

  /// Config options for the index.
  caf::settings index_opts;

  /// Requested queries before the index started up.
  std::vector<std::pair<caf::typed_response_promise<query_cursor>, query_context>>
    delayed_queries;

  constexpr static inline auto name = "index";
};

/// Indexes events in horizontal partitions.
/// @param accountant The accountant actor.
/// @param filesystem The filesystem actor. Not used by the index itself but
/// forwarded to partitions.
/// @param archive The legacy archive actor. To be removed eventually (tm).
/// @param catalog The catalog actor.
/// @param type_registry The type registry actor.
/// @param dir The directory of the index.
/// @param store_backend The store backend to use for new partitions.
/// @param partition_capacity The maximum number of events per partition.
/// @param active_partition_timeout Timeout after which an active partition is
/// forcibly flushed.
/// @param max_inmem_partitions The maximum number of passive partitions loaded
/// into memory.
/// @param taste_partitions How many lookup partitions to schedule immediately.
/// @param max_concurrent_partition_lookups The maximum amount of concurrent
/// lookups.
/// @param catalog_dir The directory used by the catalog.
/// @param index_config The meta-index configuration of the false-positives
/// rates for the types and fields.
/// @pre `partition_capacity > 0
//  TODO: Use a settings struct for the various parameters.
index_actor::behavior_type
index(index_actor::stateful_pointer<index_state> self,
      accountant_actor accountant, filesystem_actor filesystem,
      archive_actor archive, catalog_actor catalog,
      type_registry_actor type_registry, const std::filesystem::path& dir,
      std::string store_backend, size_t partition_capacity,
      duration active_partition_timeout, size_t max_inmem_partitions,
      size_t taste_partitions, size_t max_concurrent_partition_lookups,
      const std::filesystem::path& catalog_dir, index_config);

} // namespace vast::system
