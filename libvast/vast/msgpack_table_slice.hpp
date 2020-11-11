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
#include "vast/table_slice.hpp"

#include <caf/meta/type_name.hpp>

namespace vast {

/// Additional state needed for the implementation of MessagePack-encoded table
/// slices that cannot easily be accessed from the underlying FlatBuffers table
/// directly.
template <class FlatBuffer>
struct msgpack_table_slice_state;

template <>
struct msgpack_table_slice_state<fbs::table_slice::msgpack::v0> {
  /// The deserialized table layout.
  record_type layout;
};

/// A table slice that stores elements encoded in
/// [MessagePack](https://msgpack.org) format. The implementation stores data
/// in row-major order.
template <class FlatBuffer>
class msgpack_table_slice final {
public:
  // -- constructors, destructors, and assignment operators --------------------

  /// Constructs a MessagePack-encoded table slice from a FlatBuffers table.
  /// @param slice The encoding-specific FlatBuffers table.
  explicit msgpack_table_slice(const FlatBuffer& slice) noexcept;

  /// Destroys a MessagePack-encoded table slice.
  ~msgpack_table_slice() noexcept;

  // -- properties -------------------------------------------------------------

  /// @returns The table layout.
  const record_type& layout() const noexcept;

  /// @returns The number of rows in the slice.
  table_slice::size_type rows() const noexcept;

  /// @returns The number of columns in the slice.
  table_slice::size_type columns() const noexcept;

  // -- data access ------------------------------------------------------------

  /// Appends all values in column `column` to `index`.
  /// @param `offset` The offset of the table slice in its ID space.
  /// @param `column` The index of the column to append.
  /// @param `index` the value index to append to.
  void append_column_to_index(id offset, table_slice::size_type column,
                              value_index& index) const;

  /// Retrieves data by specifying 2D-coordinates via row and column.
  /// @param row The row offset.
  /// @param column The column offset.
  /// @pre `row < rows() && column < columns()`
  data_view at(table_slice::size_type row, table_slice::size_type column) const;

private:
  // -- implementation details -------------------------------------------------

  /// A const-reference to the underlying FlatBuffers table.
  const FlatBuffer& slice_;

  /// Additional state needed for the implementation.
  msgpack_table_slice_state<FlatBuffer> state_;
};

// -- template machinery -------------------------------------------------------

/// Explicit deduction guide (not needed as of C++20).
template <class FlatBuffer>
msgpack_table_slice(const FlatBuffer&) -> msgpack_table_slice<FlatBuffer>;

/// Extern template declarations for all MessagePack encoding versions.
extern template class msgpack_table_slice<fbs::table_slice::msgpack::v0>;

} // namespace vast
