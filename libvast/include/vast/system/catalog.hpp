//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2018 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/detail/flat_map.hpp"
#include "vast/detail/inspection_common.hpp"
#include "vast/module.hpp"
#include "vast/partition_synopsis.hpp"
#include "vast/system/actors.hpp"
#include "vast/taxonomies.hpp"
#include "vast/time_synopsis.hpp"
#include "vast/uuid.hpp"

#include <caf/settings.hpp>
#include <caf/typed_event_based_actor.hpp>

#include <map>
#include <string>
#include <vector>

namespace vast::system {

/// The state of the CATALOG actor.
struct catalog_state {
public:
  // -- constructor ------------------------------------------------------------

  catalog_state() = default;

  // -- concepts ---------------------------------------------------------------

  constexpr static auto name = "catalog";

  // -- utility functions ------------------------------------------------------

  /// Adds new synopses for a partition in bulk. Used when
  /// re-building the catalog state at startup.
  void create_from(std::map<uuid, partition_synopsis_ptr>&&);

  /// Add a new partition synopsis.
  void merge(const uuid& partition, partition_synopsis_ptr);

  /// Returns the partition synopsis for a specific partition.
  /// Note that most callers will prefer to use `lookup()` instead.
  /// @pre `partition` must be a valid key for this catalog.
  partition_synopsis_ptr& at(const uuid& partition);

  /// Erase this partition from the catalog.
  void erase(const uuid& partition);

  /// Retrieves the list of candidate partition IDs for a given expression.
  /// @param expr The expression to lookup.
  /// @returns A vector of UUIDs representing candidate partitions.
  [[nodiscard]] catalog_result lookup(const expression& expr) const;

  [[nodiscard]] std::vector<partition_info>
  lookup_impl(const expression& expr) const;

  /// @returns A best-effort estimate of the amount of memory used for this
  /// catalog (in bytes).
  [[nodiscard]] size_t memusage() const;

  /// Update the list of fields that should not be touched by the pruner.
  void update_unprunable_fields(const partition_synopsis& ps);

  /// Create the path that the catalog's type registry is persisted at on disk.
  [[nodiscard]] std::filesystem::path type_registry_filename() const;

  /// Save the type-registry to disk.
  [[nodiscard]] caf::error save_type_registry_to_disk() const;

  /// Load the type-registry from disk.
  caf::error load_type_registry_from_disk();

  /// Store a new layout in the registry.
  void insert(vast::type layout);

  /// Get a list of known types from the registry.
  [[nodiscard]] type_set types() const;

  // -- data members -----------------------------------------------------------

  /// A pointer to the parent actor.
  catalog_actor::pointer self = {};

  /// An actor handle to the accountant.
  accountant_actor accountant = {};

  /// Maps a partition ID to the synopses for that partition.
  // We mainly iterate over the whole map and return a sorted set, for which
  // the `flat_map` proves to be much faster than `std::{unordered_,}set`.
  // See also ae9dbed.
  detail::flat_map<uuid, partition_synopsis_ptr> synopses = {};

  /// The set of fields that should not be touched by the pruner.
  detail::heterogeneous_string_hashset unprunable_fields;

  std::map<std::string, type_set> type_data = {};
  vast::module configuration_module = {};
  vast::taxonomies taxonomies = {};
  std::filesystem::path type_registry_dir = {};
};

/// The result of a catalog query.
struct catalog_result {
  enum kind {
    exact,
    probabilistic,
  };

  template <class Inspector>
  friend auto inspect(Inspector& f, kind& x) {
    return detail::inspect_enum(f, x);
  }

  enum kind kind { kind::exact };
  std::vector<partition_info> partitions;

  template <class Inspector>
  friend auto inspect(Inspector& f, catalog_result& x) {
    return f.object(x)
      .pretty_name("vast.system.catalog_result")
      .fields(f.field("kind", x.kind), f.field("partitions", x.partitions));
  }
};

/// The CATALOG is the first index actor that queries hit. The result
/// represents a list of candidate partition IDs that may contain the desired
/// data. The CATALOG may return false positives but never false negatives.
/// @param self The actor handle.
/// @param accountant An actor handle to the accountant.
/// @param type_reg_dir the folder for the type registry.
catalog_actor::behavior_type
catalog(catalog_actor::stateful_pointer<catalog_state> self,
        accountant_actor accountant, const std::filesystem::path& type_reg_dir);

} // namespace vast::system
