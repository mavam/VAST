//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/fbs/flatbuffer_container.hpp"

#include "vast/as_bytes.hpp"

#define SUITE flatbuffer_container
#include "vast/test/test.hpp"

TEST(roundtrip) {
  // Explicitly append null bytes so the string considers them
  // part of its data.
  auto test_data0 = std::string{"ottos mops klopft"} + '\0';
  auto test_data1 = std::string{"otto: komm mops komm"} + '\0';
  auto test_data2 = std::string{"ottos mops kommt"} + '\0';
  auto test_data3 = std::string{"ottos mops kotzt"} + '\0';
  auto test_data4 = std::string{"otto: ogottogott"} + '\0';
  auto builder = vast::fbs::flatbuffer_container_builder{};
  builder.add(vast::as_bytes(test_data0));
  builder.add(vast::as_bytes(test_data1));
  builder.add(vast::as_bytes(test_data2));
  builder.add(vast::as_bytes(test_data3));
  builder.add(vast::as_bytes(test_data4));
  auto container = std::move(builder).finish();
  REQUIRE(container);
  REQUIRE_EQUAL(container.size(), 5ull);
  auto const* str0 = container.get<char>(0);
  auto const* str1 = container.get<char>(1);
  auto const* str2 = container.get<char>(2);
  auto const* str3 = container.get<char>(3);
  auto const* str4 = container.get<char>(4);
  CHECK_EQUAL(::strcmp(test_data0.c_str(), str0), 0);
  CHECK_EQUAL(::strcmp(test_data1.c_str(), str1), 0);
  CHECK_EQUAL(::strcmp(test_data2.c_str(), str2), 0);
  CHECK_EQUAL(::strcmp(test_data3.c_str(), str3), 0);
  CHECK_EQUAL(::strcmp(test_data4.c_str(), str4), 0);
  auto chunk0 = container.get_raw(0);
  auto chunk1 = container.get_raw(1);
  auto chunk2 = container.get_raw(2);
  auto chunk3 = container.get_raw(3);
  auto chunk4 = container.get_raw(4);
  CHECK_EQUAL(vast::as_bytes(test_data0), as_bytes(chunk0));
  CHECK_EQUAL(vast::as_bytes(test_data1), as_bytes(chunk1));
  CHECK_EQUAL(vast::as_bytes(test_data2), as_bytes(chunk2));
  CHECK_EQUAL(vast::as_bytes(test_data3), as_bytes(chunk3));
  CHECK_EQUAL(vast::as_bytes(test_data4), as_bytes(chunk4));
}
