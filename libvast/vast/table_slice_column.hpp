/******************************************************************************
 *                    _   _____   __________                                  *
 *                   | | / / _ | / __/_  __/     Visibility                   *
 *                   | |/ / __ |_\ \  / /          Across                     *
 *                   |___/_/ |_/___/ /_/       Space and Time                 *
 *                                                                            *
 * This file is part of VAST. It is subject to the license terms in the       *
 * LICENSE file found in the top-level directory of this distribution and at  *
 * http://vast.io/license. No part of VAST, including this file, may be       *
 * copied, modified, propagated, or distributed except according to the terms *
 * contained in the LICENSE file.                                             *
 ******************************************************************************/

#pragma once

#include "vast/fwd.hpp"
#include "vast/view.hpp"

#include <caf/meta/type_name.hpp>

#include <cstdint>
#include <optional>
#include <string_view>

namespace vast {

/// Convenience helper for traversing a column of a table slice.
/// @relates table_slice
class table_slice_column {
public:
  /// Defaulted constructors, destructors, and assignment operators.
  table_slice_column() noexcept;
  ~table_slice_column() noexcept;
  table_slice_column(const table_slice_column&) noexcept;
  table_slice_column& operator=(const table_slice_column&) noexcept;
  table_slice_column(table_slice_column&&) noexcept;
  table_slice_column& operator=(table_slice_column&&) noexcept;

  /// Construct a view on a column of a table slice.
  /// @param slice The slice to view.
  /// @param column The viewed column's index.
  /// @pre `column < slice->columns()`
  table_slice_column(table_slice_ptr slice, size_t column) noexcept;

  /// Construct a view on a column of a table slice.
  /// @param slice The slice to view.
  /// @param column The viewed column's name.
  static std::optional<table_slice_column>
  make(table_slice_ptr slice, std::string_view column) noexcept;

  /// @returns the data at given row.
  /// @pre `row < size()`
  data_view operator[](size_t row) const;

  /// @returns the number of rows in the column.
  size_t size() const noexcept;

  /// @returns the viewed table slice.
  const table_slice_ptr& slice() const noexcept;

  /// @returns the viewed column's index.
  size_t index() const noexcept;

  /// Opt-in to CAF's type inspection API.
  template <class Inspector>
  friend auto inspect(Inspector& f, table_slice_column& x) ->
    typename Inspector::result_type {
    return f(caf::meta::type_name("vast.table_slice_column"), x.slice_,
             x.column_);
  }

private:
  table_slice_ptr slice_ = nullptr;
  size_t column_ = 0;
};

} // namespace vast
