//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/uuid.hpp"

#include <cstdint>

namespace vast::system {

/// Information returned by the index for ongoing queries to allow for
/// pagination.
struct query_cursor {
  /// The handle of the query; needed to schedule additional partitions from the
  /// candidate set.
  uuid id = {};

  /// The number of partitions that qualify for the query.
  uint32_t candidate_partitions = {};

  friend auto inspect(auto& f, query_cursor& x) {
    return f(x.id, x.candidate_partitions);
  }
};

} // namespace vast::system
