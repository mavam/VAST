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

#define SUITE segment

#include "vast/segment.hpp"
#include "vast/segment_builder.hpp"

#include "vast/test/test.hpp"
#include "vast/test/fixtures/events.hpp"

#include <caf/binary_deserializer.hpp>
#include <caf/binary_serializer.hpp>

#include "vast/ids.hpp"
#include "vast/load.hpp"
#include "vast/table_slice.hpp"
#include "vast/save.hpp"

using namespace vast;

FIXTURE_SCOPE(segment_tests, fixtures::events)

TEST(construction and querying) {
  segment_builder builder;
  for (auto& slice : zeek_conn_log_slices)
    REQUIRE(!builder.add(slice));
  auto x = builder.finish();
  REQUIRE_NOT_EQUAL(x, nullptr);
  CHECK_EQUAL(x->num_slices(), zeek_conn_log_slices.size());
  MESSAGE("lookup IDs for some segments");
  auto xs = x->lookup(make_ids({0, 6, 19, 21}));
  REQUIRE(xs);
  auto& slices = *xs;
  REQUIRE_EQUAL(slices.size(), 2u); // [0,8), [16,24)
  CHECK_EQUAL(*slices[0], *zeek_conn_log_slices[0]);
  CHECK_EQUAL(*slices[1], *zeek_conn_log_slices[2]);
}

TEST(serialization) {
  segment_builder builder;
  auto slice = zeek_conn_log_slices[0];
  REQUIRE(!builder.add(slice));
  auto x = builder.finish();
  REQUIRE_NOT_EQUAL(x, nullptr);
  segment_ptr y;
  std::vector<char> buf;
  REQUIRE_EQUAL(save(nullptr, buf, x), caf::none);
  REQUIRE_EQUAL(load(nullptr, buf, y), caf::none);
  REQUIRE_NOT_EQUAL(y, nullptr);
  CHECK_EQUAL(x->ids(), y->ids());
  CHECK_EQUAL(x->num_slices(), y->num_slices());
  MESSAGE("load segment from chunk");
  chunk_ptr chk;
  REQUIRE_EQUAL(load(nullptr, buf, chk), caf::none);
  REQUIRE(segment::make(chk));
}

FIXTURE_SCOPE_END()
