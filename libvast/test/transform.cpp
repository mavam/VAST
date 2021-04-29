//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#define SUITE transform

#include "vast/transform.hpp"

#include "vast/test/test.hpp"

#include "vast/arrow_table_slice_builder.hpp"
#include "vast/msgpack_table_slice_builder.hpp"
#include "vast/table_slice_builder_factory.hpp"
#include "vast/transform_steps/delete.hpp"
#include "vast/transform_steps/hash.hpp"
#include "vast/transform_steps/replace.hpp"

using namespace std::literals;

// clang-format off
const auto testdata_layout = vast::record_type{
  {"uid", vast::string_type{}},
  {"index", vast::integer_type{}}}.name("testdata");
// clang-format on

struct fixture {
  fixture() {
    vast::factory<vast::table_slice_builder>::add<
      vast::arrow_table_slice_builder>(vast::table_slice_encoding::arrow);
    vast::factory<vast::table_slice_builder>::add<
      vast::msgpack_table_slice_builder>(vast::table_slice_encoding::msgpack);
  }

  // Creates a table slice with a single string field and random data.
  static vast::table_slice
  make_transforms_testdata(vast::table_slice_encoding encoding
                           = vast::defaults::import::table_slice_type) {
    auto builder = vast::factory<vast::table_slice_builder>::make(
      encoding, testdata_layout);
    REQUIRE(builder);
    for (int i = 0; i < 10; ++i) {
      auto uuid = vast::uuid::random();
      auto str = fmt::format("{}", uuid);
      REQUIRE(builder->add(str, i));
    }
    return builder->finish();
  }
};

FIXTURE_SCOPE(transform_tests, fixture)

TEST(delete_ step) {
  auto slice = make_transforms_testdata();
  vast::delete_step delete_step("uid");
  auto deleted = delete_step.apply(vast::table_slice{slice});
  REQUIRE(deleted);
  CHECK_EQUAL(deleted->layout().fields.size(), 1ull);
  vast::delete_step invalid_delete_step("xxx");
  auto not_deleted = invalid_delete_step.apply(vast::table_slice{slice});
#if VAST_ENABLE_ARROW > 0
  // If arrow is enabled the default format is arrow, so we do one more
  // test where we force msgpack.
  auto msgpack_slice
    = make_transforms_testdata(vast::table_slice_encoding::msgpack);
  auto msgpack_deleted = delete_step.apply(vast::table_slice{msgpack_slice});
  REQUIRE(msgpack_deleted);
  CHECK_EQUAL(msgpack_deleted->layout().fields.size(), 1ull);
#endif
}

TEST(replace step) {
  auto slice = make_transforms_testdata();
  vast::replace_step replace_step("uid", "xxx");
  auto replaced = replace_step.apply(vast::table_slice{slice});
  REQUIRE(replaced);
  REQUIRE_EQUAL(replaced->layout().fields.size(), 2ull);
  CHECK_EQUAL(replaced->layout().fields[0].name, "uid");
  CHECK_EQUAL((*replaced).at(0, 0), vast::data_view{"xxx"sv});
}

TEST(anonymize step) {
  auto slice = make_transforms_testdata();
  vast::hash_step hash_step("uid", "hashed_uid");
  auto anonymized = hash_step.apply(vast::table_slice{slice});
  REQUIRE(anonymized);
  REQUIRE_EQUAL(anonymized->layout().fields.size(), 3ull);
  REQUIRE_EQUAL(anonymized->layout().fields[2].name, "hashed_uid");
  // TODO: Not sure how we can check that the data was correctly hashed.
}

TEST(transform with multiple steps) {
  vast::transform transform("test_transform", {"testdata"});
  transform.add_step(std::make_unique<vast::replace_step>("uid", "xxx"));
  transform.add_step(std::make_unique<vast::delete_step>("index"));
  auto slice = make_transforms_testdata();
  auto transformed = transform.apply(std::move(slice));
  REQUIRE(transformed);
  REQUIRE_EQUAL(transformed->layout().fields.size(), 1ull);
  CHECK_EQUAL(transformed->layout().fields[0].name, "uid");
  CHECK_EQUAL((*transformed).at(0, 0), vast::data_view{"xxx"sv});
  auto wrong_layout = vast::record_type{testdata_layout}.name("foo");
  auto builder = vast::factory<vast::table_slice_builder>::make(
    vast::defaults::import::table_slice_type, wrong_layout);
  REQUIRE(builder->add("asdf", 23));
  auto wrong_slice = builder->finish();
  auto not_transformed = transform.apply(std::move(wrong_slice));
  REQUIRE(not_transformed);
  REQUIRE_EQUAL(transformed->layout().fields.size(), 2ull);
  CHECK_EQUAL(transformed->layout().fields[0].name, "uid");
  CHECK_EQUAL(transformed->layout().fields[0].name, "index");
  CHECK_EQUAL((*transformed).at(0, 0), vast::data_view{"asdf"sv});
  CHECK_EQUAL((*transformed).at(0, 0), vast::data{23});
}

TEST(transformation engine - single matching transform) {
  std::vector<vast::transform> transforms;
  auto& transform1
    = transforms.emplace_back("t1", std::vector<std::string>{"foo", "testdat"
                                                                    "a"});
  auto& transform2
    = transforms.emplace_back("t2", std::vector<std::string>{"foo"});
  transform1.add_step(std::make_unique<vast::delete_step>("uid"));
  transform2.add_step(std::make_unique<vast::delete_step>("index"));
  vast::transformation_engine engine(std::move(transforms));
  auto slice = make_transforms_testdata();
  auto transformed = engine.apply(std::move(slice));
  // We expect that only one transformation has been applied.
  REQUIRE_EQUAL(transformed->layout().fields.size(), 1ull);
  CHECK_EQUAL(transformed->layout().fields[0].name, "index");
}

TEST(transformation engine - multiple matching transforms) {
  std::vector<vast::transform> transforms;
  auto& transform1
    = transforms.emplace_back("t1", std::vector<std::string>{"foo", "testdat"
                                                                    "a"});
  auto& transform2
    = transforms.emplace_back("t2", std::vector<std::string>{"testdata"});
  transform1.add_step(std::make_unique<vast::delete_step>("uid"));
  transform2.add_step(std::make_unique<vast::delete_step>("index"));
  vast::transformation_engine engine(std::move(transforms));
  auto slice = make_transforms_testdata();
  auto transformed = engine.apply(std::move(slice));
  // We expect that both transforms have been applied, leaving us with an empty
  // table slice.
  CHECK(!transformed);
}

FIXTURE_SCOPE_END()
