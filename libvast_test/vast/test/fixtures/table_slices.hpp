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

#include "vast/test/fixtures/actor_system_and_events.hpp"
#include "vast/test/test.hpp"

#include "vast/aliases.hpp"
#include "vast/fwd.hpp"
#include "vast/table_slice.hpp"
#include "vast/table_slice_builder.hpp"
#include "vast/table_slice_builder_factory.hpp"
#include "vast/table_slice_factory.hpp"
#include "vast/type.hpp"
#include "vast/view.hpp"

#include <caf/binary_deserializer.hpp>
#include <caf/binary_serializer.hpp>

#include <string>
#include <tuple>
#include <vector>

// Helper macro to define a table-slice unit test.
#define TEST_TABLE_SLICE(type)                                                 \
  TEST(type) {                                                                 \
    initialize<type, type ## _builder>();                                      \
    run();                                                                     \
  }

namespace vast {

/// Constructs table slices filled with random content for testing purposes.
/// @param num_slices The number of table slices to generate.
/// @param slice_size The number of rows per table slices.
/// @param layout The layout of the table slice.
/// @param offset The offset of the first table slize.
/// @param seed The seed value for initializing the random-number generator.
/// @returns a list of randomnly filled table slices or an error.
/// @relates table_slice
caf::expected<std::vector<table_slice_ptr>>
make_random_table_slices(size_t num_slices, size_t slice_size,
                         record_type layout, id offset = 0, size_t seed = 0);

/// Converts the table slice into a 2-D matrix in row-major order such that
/// each row represents an event.
/// @param slice The table slice to convert.
/// @param first_row An offset to the first row to consider.
/// @param num_rows Then number of rows to consider. (0 = all rows)
/// @returns a 2-D matrix of data instances corresponding to *slice*.
/// @requires first_row < slice->rows()
/// @requires num_rows <= slice->rows() - first_row
/// @note This function exists primarily for unit testing because it performs
/// excessive memory allocations.
std::vector<std::vector<data>>
to_data(const table_slice& slice, size_t first_row = 0, size_t num_rows = 0);

std::vector<std::vector<data>>
to_data(const std::vector<table_slice_ptr>& slices);

} // namespace vast

namespace fixtures {

class table_slices : public deterministic_actor_system_and_events {
public:
  table_slices();

  // Registers a table slice implementation.
  template <class T, class Builder>
  void initialize() {
    using namespace vast;
    factory<table_slice>::add<T>();
    factory<table_slice_builder>::add<Builder>(T::class_id);
    builder = factory<table_slice_builder>::make(T::class_id, layout);
    if (builder == nullptr)
      FAIL("builder factory could not construct a valid instance");
  }

  // Run all tests in the fixture.
  void run();

private:
  using triple = std::tuple<vast::integer, std::string, vast::real>;

  caf::binary_deserializer make_source();

  caf::binary_serializer make_sink();

  vast::table_slice_ptr make_slice();

  vast::data_view at(size_t row, size_t col) const;

  void test_add();

  void test_equality();

  void test_copy();

  void test_manual_serialization();

  void test_smart_pointer_serialization();

  void test_message_serialization();

  void test_load_from_chunk();

  void test_append_column_to_index();

  vast::record_type layout;

  vast::table_slice_builder_ptr builder;

  std::vector<std::vector<vast::data>> test_data;

  std::vector<char> buf;
};

} // namespace fixtures
