//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/detail/friend_attribute.hpp"
#include "tenzir/fbs/partition_synopsis.hpp"
#include "tenzir/index_config.hpp"
#include "tenzir/partition_info.hpp"
#include "tenzir/qualified_record_field.hpp"
#include "tenzir/resource.hpp"
#include "tenzir/synopsis.hpp"
#include "tenzir/table_slice.hpp"
#include "tenzir/uuid.hpp"

namespace caf {

// Forward declaration to be able to befriend the unshare implementation.
template <typename T>
T* default_intrusive_cow_ptr_unshare(T*&);

} // namespace caf

namespace tenzir {

/// Contains one synopsis per partition column.
struct partition_synopsis final : public caf::ref_counted {
  partition_synopsis() = default;
  ~partition_synopsis() override = default;
  partition_synopsis(const partition_synopsis&) = delete;
  partition_synopsis(partition_synopsis&& that) noexcept;

  partition_synopsis& operator=(const partition_synopsis&) = delete;
  partition_synopsis& operator=(partition_synopsis&& that) noexcept;

  /// Add data to the synopsis.
  // TODO: It would make sense to pass an index_config to partition synopsis
  // constructor instead.
  void add(const table_slice& slice, size_t partition_capacity,
           const index_config& synopsis_options);

  /// Optimizes the partition synopsis contents for size.
  /// @related buffered_synopsis
  void shrink();

  /// Estimate the memory footprint of this partition synopsis.
  /// @returns A best-effort estimate of the amount of memory used by this
  ///          synopsis.
  size_t memusage() const;

  // Information about the raw data storage.
  resource store_file = {};

  // Information about the dense indexes.
  resource indexes_file = {};

  // Information about the sparse indexes.
  resource sketches_file = {};

  // Number of events in the partition.
  uint64_t events = 0;

  /// The minimum import timestamp of all contained table slices.
  time min_import_time = time::max();

  /// The maximum import timestamp of all contained table slices.
  time max_import_time = time::min();

  /// The version number of this partition.
  uint64_t version = version::current_partition_version;

  /// The schema of this partition. This is only set for partition synopses with
  /// a version >= 1, because they are guaranteed to be homogenous.
  type schema = {};

  /// Synopsis data structures for types.
  std::unordered_map<type, synopsis_ptr> type_synopses_;

  /// Synopsis data structures for individual columns.
  std::unordered_map<qualified_record_field, synopsis_ptr> field_synopses_;

  // -- flatbuffer -------------------------------------------------------------

  FRIEND_ATTRIBUTE_NODISCARD friend caf::expected<
    flatbuffers::Offset<fbs::partition_synopsis::LegacyPartitionSynopsis>>
  pack(flatbuffers::FlatBufferBuilder& builder, const partition_synopsis&);

  FRIEND_ATTRIBUTE_NODISCARD friend caf::error
  unpack(const fbs::partition_synopsis::LegacyPartitionSynopsis&,
         partition_synopsis&);

private:
  // Returns a raw pointer to a deep copy of this partition synopsis.
  // For use by the `caf::intrusive_cow_ptr`.
  friend partition_synopsis* ::caf::default_intrusive_cow_ptr_unshare<
    partition_synopsis>(partition_synopsis*& ptr);
  partition_synopsis* copy() const;

  // Cached memory usage.
  mutable std::atomic<size_t> memusage_ = 0ull;
};

/// A partition synopsis and a uuid.
struct partition_synopsis_pair {
  tenzir::uuid uuid;
  partition_synopsis_ptr synopsis;

  template <class Inspector>
  friend auto inspect(Inspector& f, partition_synopsis_pair& x) {
    return f.object(x)
      .pretty_name("tenzir.partition-synopsis-pair")
      .fields(f.field("uuid", x.uuid), f.field("synopsis", x.synopsis));
  }
};

} // namespace tenzir
