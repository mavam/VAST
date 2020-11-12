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
#include "vast/table_slice_builder.hpp"

#include <flatbuffers/flatbuffers.h>

#include <memory>
#include <vector>

namespace vast {

/// A builder for table slices that store elements encoded in the
/// [Arrow](https://arrow.apache.org) format.
class arrow_table_slice_builder final : public table_slice_builder {
public:
  // -- member types -----------------------------------------------------------

  /// Wraps a type-specific Arrow builder.
  struct column_builder {
    /// Destroys an Arrow column builder.
    virtual ~column_builder() noexcept;

    /// Adds data to the column builder.
    /// @param x The data to add.
    /// @returns `true` on success.
    virtual bool add(data_view x) = 0;

    /// @returns An Arrow array from the accumulated calls to add.
    [[nodiscard]] virtual std::shared_ptr<arrow::Array> finish() = 0;

    /// @returns The underlying array builder.
    virtual std::shared_ptr<arrow::ArrayBuilder> arrow_builder() const = 0;

    /// Constructs an Arrow column builder.
    /// @param t A type to create a column builder for.
    /// @param pool The Arrow memory pool to use.
    /// @returns A builder for columns of type `t`.
    static std::unique_ptr<column_builder>
    make(const type& t, arrow::MemoryPool* pool);
  };

  // -- constructors, destructors, and assignment operators --------------------

  /// Constructs an Arrow table slice builder instance.
  /// @param layout The layout of the slice.
  /// @param initial_buffer_size The buffer size the builder starts with.
  /// @returns A table_slice_builder instance.
  static table_slice_builder_ptr
  make(record_type layout, size_t initial_buffer_size = default_buffer_size);

  /// Destroys an Arrow table slice builder.
  ~arrow_table_slice_builder() noexcept override;

  // -- properties -------------------------------------------------------------

  [[nodiscard]] table_slice
  finish(span<const byte> serialized_layout = {}) override;

  /// @returns The current number of rows in the table slice.
  size_t rows() const noexcept override;

  /// @returns An identifier for the implementing class.
  caf::atom_value implementation_id() const noexcept override;

  /// Allows The table slice builder to allocate sufficient storage.
  /// @param `num_rows` The number of rows to allocate storage for.
  void reserve(size_t num_rows) override;

private:
  // -- implementation details -------------------------------------------------

  /// Constructs an Arrow table slice.
  /// @param layout The layout of the slice.
  /// @param initial_buffer_size The buffer size the builder starts with.
  explicit arrow_table_slice_builder(record_type layout,
                                     size_t initial_buffer_size
                                     = default_buffer_size);

  /// Adds data to the builder.
  /// @param x The data to add.
  /// @returns `true` on success.
  bool add_impl(data_view x) override;

  /// Current column index.
  size_t column_ = 0;

  /// Number of filled rows.
  size_t rows_ = 0;

  /// Schema of the Record Batch corresponding to the layout.
  std::shared_ptr<arrow::Schema> schema_ = {};

  /// Builders for columnar Arrow arrays.
  std::vector<std::unique_ptr<column_builder>> column_builders_ = {};

  /// The underlying FlatBuffers builder.
  flatbuffers::FlatBufferBuilder builder_;
};

// -- utility functions --------------------------------------------------------

/// Converts a VAST `record_type` to an Arrow `Schema`.
/// @param t The record type to convert.
/// @returns An arrow representation of `t`.
std::shared_ptr<arrow::Schema> make_arrow_schema(const record_type& t);

/// Converts a VAST `type` to an Arrow `DataType`.
/// @param t The type to convert.
/// @returns An arrow representation of `t`.
std::shared_ptr<arrow::DataType> make_arrow_type(const type& t);

} // namespace vast
