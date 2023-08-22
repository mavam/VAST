//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/series_builder.hpp"

#include "tenzir/test/test.hpp"

#include <arrow/api.h>

namespace tenzir {

using namespace experimental;

namespace {

void check(series_builder& b, int64_t length, std::string_view type,
           std::string_view array) {
  CHECK_EQUAL(b.length(), length);
  auto a = b.finish();
  CHECK_EQUAL(a->length(), length);
  CHECK_EQUAL(a->type()->ToString(), type);
  CHECK_EQUAL(a->ToString(), array);
}

TEST(empty) {
  auto b = series_builder{};
  check(b, 0, R"(null)", R"(0 nulls)");
}

TEST(one empty record) {
  auto b = series_builder{};
  b.record();
  check(b, 1, R"(struct<>)", R"(-- is_valid: all not null)");
}

TEST(two empty records) {
  auto b = series_builder{};
  b.record();
  b.record();
  check(b, 2, R"(struct<>)", R"(-- is_valid: all not null)");
}

TEST(one null) {
  auto b = series_builder{};
  b.null();
  check(b, 1, R"(null)", R"(1 nulls)");
}

TEST(two nulls) {
  auto b = series_builder{};
  b.null();
  b.null();
  check(b, 2, R"(null)", R"(2 nulls)");
}

TEST(one empty record then one null) {
  auto b = series_builder{};
  b.record();
  b.null();
  check(b, 2, R"(struct<>)", R"(-- is_valid:
  [
    true,
    false
  ])");
}

TEST(one null then one empty record) {
  auto b = series_builder{};
  b.null();
  b.record();
  check(b, 2, R"(struct<>)", R"(-- is_valid:
  [
    false,
    true
  ])");
}

TEST(one record with one field) {
  auto b = series_builder{};
  b.record().field("a").atom(42);
  check(b, 1, R"(struct<a: int64>)", R"(-- is_valid: all not null
-- child 0 type: int64
  [
    42
  ])");
}

TEST(one nested record then a null) {
  auto b = series_builder{};
  b.record().field("a").record().field("b").atom(42);
  b.null();
  check(b, 2, R"(struct<a: struct<b: int64>>)", R"(-- is_valid:
  [
    true,
    false
  ]
-- child 0 type: struct<b: int64>
  -- is_valid:
      [
      true,
      false
    ]
  -- child 0 type: int64
    [
      42,
      null
    ])");
}

TEST(one nested record then one empty record) {
  auto b = series_builder{};
  b.record().field("a").record().field("b").atom(42);
  b.record();
  check(b, 2, R"(struct<a: struct<b: int64>>)", R"(-- is_valid: all not null
-- child 0 type: struct<b: int64>
  -- is_valid:
      [
      true,
      false
    ]
  -- child 0 type: int64
    [
      42,
      null
    ])");
}

TEST(two nested records) {
  auto b = series_builder{};
  b.record().field("a").record().field("b").atom(42);
  b.record().field("a").record().field("b").atom(43);
  check(b, 2, R"(struct<a: struct<b: int64>>)", R"(-- is_valid: all not null
-- child 0 type: struct<b: int64>
  -- is_valid: all not null
  -- child 0 type: int64
    [
      42,
      43
    ])");
}

TEST(challenge) {
  auto b = series_builder{};
  b.record().field("a").record();
  b.record().field("a").atom(42);
  b.list().atom(43);
  b.record().field("a").atom(44);
  check(
    b, 4,
    R"(dense_union<0: struct<a: dense_union<: struct<>=0, : int64=1>>=0, 1: list<item: int64>=1>)",
    R"(-- is_valid: all not null
-- type_ids:   [
    0,
    0,
    1,
    0
  ]
-- value_offsets:   [
    0,
    1,
    0,
    2
  ]
-- child 0 type: struct<a: dense_union<: struct<>=0, : int64=1>>
  -- is_valid: all not null
  -- child 0 type: dense_union<0: struct<>=0, 1: int64=1>
    -- is_valid: all not null
    -- type_ids:       [
        0,
        1,
        1
      ]
    -- value_offsets:       [
        0,
        0,
        1
      ]
    -- child 0 type: struct<>
      -- is_valid: all not null
    -- child 1 type: int64
      [
        42,
        44
      ]
-- child 1 type: list<item: int64>
  [
    [
      43
    ]
  ])");
}

TEST(set field to value then to null) {
  auto b = series_builder{};
  auto foo = b.record().field("foo");
  foo.atom(42);
  foo.null();
  check(b, 1, "struct<foo: int64>", R"(-- is_valid: all not null
-- child 0 type: int64
  [
    null
  ])");
}

TEST(set field to null then to value) {
  auto b = series_builder{};
  auto foo = b.record().field("foo");
  foo.null();
  foo.atom(42);
  check(b, 1, "struct<foo: int64>", R"(-- is_valid: all not null
-- child 0 type: int64
  [
    42
  ])");
}

TEST(set field to int64 then to other int64) {
  auto b = series_builder{};
  auto foo = b.record().field("foo");
  foo.atom(42);
  foo.atom(43);
  check(b, 1, "struct<foo: int64>", R"(-- is_valid: all not null
-- child 0 type: int64
  [
    43
  ])");
}

TEST(set field to list then to other list) {
  auto b = series_builder{};
  b.record().field("foo").list().atom(0);
  auto foo = b.record().field("foo");
  auto x = foo.list();
  x.atom(1);
  x.atom(2);
  auto y = foo.list();
  y.atom(3);
  check(b, 2, "struct<foo: list<item: int64>>", R"(-- is_valid: all not null
-- child 0 type: list<item: int64>
  [
    [
      0
    ],
    [
      3
    ]
  ])");
}

TEST(set same field to multiple types) {
  auto b = series_builder{};
  auto foo = b.record().field("foo");
  foo.record();
  foo.list();
  foo.record().field("bar").list();
  foo.null();
  foo.atom(42);
  foo.list().list();
  foo.null();
  check(b, 1,
        "struct<foo: dense_union<: struct<bar: list<item: null>>=0, : "
        "list<item: list<item: null>>=1, : int64=2>>",
        R"(-- is_valid: all not null
-- child 0 type: dense_union<0: struct<bar: list<item: null>>=0, 1: list<item: list<item: null>>=1, 2: int64=2>
  -- is_valid: all not null
  -- type_ids:     [
      0
    ]
  -- value_offsets:     [
      1
    ]
  -- child 0 type: struct<bar: list<item: null>>
    -- is_valid:
          [
        true,
        false
      ]
    -- child 0 type: list<item: null>
      [
0 nulls,
        null
      ]
  -- child 1 type: list<item: list<item: null>>
    [
      [],
      [
0 nulls
      ]
    ]
  -- child 2 type: int64
    [
      42
    ])");
}

// -- playground ------------------------------------------------

// TEST(fixed type schema) {
//   auto t = type{};
//   auto b = series_builder{/*std::move(t)*/};
//   auto foo = b.record().field("foo");
//   if (not foo.exists()) {
//     // skip field
//   }
//   auto d = data{42};
//   if (foo.type() == d.type()) {
//     foo.atom(d);
//   } else {
//     // type mismatch
//   }
// }

TEST(maybe we want to change some values) {
  auto b = series_builder{};
  b.record().field("a").null();
  auto* field_builder = b.record().field("a").builder();
  if (field_builder != nullptr
      && field_builder->type()->id() == arrow::Type::INT64) {
    auto values
      = std::static_pointer_cast<arrow::Int64Array>(field_builder->finish());
    field_builder->reset();
    for (auto value : *values) {
      if (value) {
        field_builder->record().field("yay").atom(*value + 42);
      } else {
        field_builder->null();
      }
    }
  }
  auto test = b.finish();
}

} // namespace

} // namespace tenzir
