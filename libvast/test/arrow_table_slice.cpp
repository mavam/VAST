#define SUITE arrow_table_slice

#include "vast/arrow_table_slice.hpp"

#include "vast/test/fixtures/table_slices.hpp"
#include "vast/test/test.hpp"

#include "vast/arrow_table_slice_builder.hpp"
#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/address.hpp"
#include "vast/concept/parseable/vast/port.hpp"
#include "vast/concept/parseable/vast/subnet.hpp"
#include "vast/type.hpp"

#include <caf/make_copy_on_write.hpp>
#include <caf/test/dsl.hpp>

#include <arrow/api.h>

using namespace vast;
using namespace std::chrono_literals;
using namespace std::string_literals;
using namespace std::string_view_literals;

namespace {

template <class... Ts>
auto make_slice(record_type layout, const Ts&... xs) {
  auto builder = arrow_table_slice_builder::make(layout);
  auto ok = builder->add(xs...);
  if (!ok)
    FAIL("builder failed to add given values");
  auto slice = builder->finish();
  if (slice.encoding() == table_slice::encoding::none)
    FAIL("builder failed to produce a table slice");
  return slice;
}

template <class VastType, class... Ts>
auto make_single_column_slice(const Ts&... xs) {
  record_type layout{record_field{"foo", VastType{}}};
  return make_slice(layout, xs...);
}

table_slice roundtrip(table_slice slice) {
  factory<table_slice_builder>::add<arrow_table_slice_builder>(caf::atom("arro"
                                                                         "w"));
  table_slice slice_copy;
  std::vector<char> buf;
  caf::binary_serializer sink{nullptr, buf};
  CHECK_EQUAL(inspect(sink, slice), caf::none);
  caf::binary_deserializer source{nullptr, buf};
  CHECK_EQUAL(inspect(source, slice_copy), caf::none);
  return slice_copy;
}

count operator"" _c(unsigned long long int x) {
  return static_cast<count>(x);
}

enumeration operator"" _e(unsigned long long int x) {
  return static_cast<enumeration>(x);
}

integer operator"" _i(unsigned long long int x) {
  return static_cast<integer>(x);
}

} // namespace

#define CHECK_OK(expression)                                                   \
  if (!(expression).ok())                                                      \
    FAIL("!! " #expression);

TEST(single column - equality) {
  auto slice1 = make_single_column_slice<count_type>(0_c, 1_c, caf::none, 3_c);
  auto slice2 = make_single_column_slice<count_type>(0_c, 1_c, caf::none, 3_c);
  CHECK_VARIANT_EQUAL(slice1.at(0, 0), slice2.at(0, 0));
  CHECK_VARIANT_EQUAL(slice1.at(1, 0), slice2.at(1, 0));
  CHECK_VARIANT_EQUAL(slice1.at(2, 0), slice2.at(2, 0));
  CHECK_VARIANT_EQUAL(slice1.at(3, 0), slice2.at(3, 0));
  CHECK_EQUAL(slice1, slice1);
  CHECK_EQUAL(slice1, slice2);
  CHECK_EQUAL(slice2, slice1);
  CHECK_EQUAL(slice2, slice2);
}

TEST(single column - count) {
  auto slice = make_single_column_slice<count_type>(0_c, 1_c, caf::none, 3_c);
  REQUIRE_EQUAL(slice.rows(), 4u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), 0_c);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), 1_c);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), caf::none);
  CHECK_VARIANT_EQUAL(slice.at(3, 0), 3_c);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - enumeration) {
  auto slice = make_single_column_slice<enumeration_type>(0_e, 1_e, caf::none);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), 0_e);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), 1_e);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), caf::none);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - integer) {
  auto slice = make_single_column_slice<integer_type>(caf::none, 1_i, 2_i);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), caf::none);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), 1_i);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), 2_i);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - boolean) {
  auto slice = make_single_column_slice<bool_type>(false, caf::none, true);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), false);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), caf::none);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), true);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - real) {
  auto slice = make_single_column_slice<real_type>(1.23, 3.21, caf::none);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), 1.23);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), 3.21);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), caf::none);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - string) {
  auto slice = make_single_column_slice<string_type>("a"sv, caf::none, "c"sv);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), "a"sv);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), caf::none);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), "c"sv);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - pattern) {
  auto p1 = pattern("foo.ar");
  auto p2 = pattern("hello* world");
  auto slice = make_single_column_slice<pattern_type>(p1, p2, caf::none);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), make_view(p1));
  CHECK_VARIANT_EQUAL(slice.at(1, 0), make_view(p2));
  CHECK_VARIANT_EQUAL(slice.at(2, 0), caf::none);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - time) {
  using ts = vast::time;
  auto epoch = ts{duration{0}};
  auto slice
    = make_single_column_slice<time_type>(epoch, caf::none, epoch + 48h);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), epoch);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), caf::none);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), epoch + 48h);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - duration) {
  auto h0 = duration{0};
  auto h12 = h0 + 12h;
  auto slice = make_single_column_slice<duration_type>(h0, h12, caf::none);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), h0);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), h12);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), caf::none);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - address) {
  using vast::address;
  using vast::to;
  auto a1 = unbox(to<address>("172.16.7.1"));
  auto a2 = unbox(to<address>("ff01:db8::202:b3ff:fe1e:8329"));
  auto a3 = unbox(to<address>("2001:db8::"));
  auto slice = make_single_column_slice<address_type>(caf::none, a1, a2, a3);
  REQUIRE_EQUAL(slice.rows(), 4u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), caf::none);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), a1);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), a2);
  CHECK_VARIANT_EQUAL(slice.at(3, 0), a3);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - subnet) {
  using vast::subnet;
  using vast::to;
  auto s1 = unbox(to<subnet>("172.16.7.0/8"));
  auto s2 = unbox(to<subnet>("172.16.0.0/16"));
  auto s3 = unbox(to<subnet>("172.0.0.0/24"));
  auto slice = make_single_column_slice<subnet_type>(s1, s2, s3, caf::none);
  REQUIRE_EQUAL(slice.rows(), 4u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), s1);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), s2);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), s3);
  CHECK_VARIANT_EQUAL(slice.at(3, 0), caf::none);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - port) {
  using vast::port;
  using vast::to;
  auto p1 = unbox(to<port>("80/tcp"));
  auto p2 = unbox(to<port>("2020/udp"));
  auto p3 = unbox(to<port>("8080/icmp"));
  auto slice = make_single_column_slice<port_type>(p1, p2, caf::none, p3);
  REQUIRE_EQUAL(slice.rows(), 4u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), p1);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), p2);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), caf::none);
  CHECK_VARIANT_EQUAL(slice.at(3, 0), p3);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - list of integers) {
  auto t = list_type{integer_type{}};
  record_type layout{record_field{"values", t}};
  list list1{1_i, 2_i, 3_i};
  list list2{10_i, 20_i};
  auto slice = make_slice(layout, list1, caf::none, list2);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), make_view(list1));
  CHECK_VARIANT_EQUAL(slice.at(1, 0), caf::none);
  CHECK_VARIANT_EQUAL(slice.at(2, 0), make_view(list2));
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - list of strings) {
  auto t = list_type{string_type{}};
  record_type layout{record_field{"values", t}};
  list list1{"hello"s, "world"s};
  list list2{"a"s, "b"s, "c"s};
  auto slice = make_slice(layout, list1, list2, caf::none);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), make_view(list1));
  CHECK_VARIANT_EQUAL(slice.at(1, 0), make_view(list2));
  CHECK_VARIANT_EQUAL(slice.at(2, 0), caf::none);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - list of list of integers) {
  auto t = list_type{integer_type{}};
  // Note: we call the copy ctor if we don't wrap list_type into a type.
  auto list_list_type = list_type{type{t}};
  record_type layout{record_field{"values", list_list_type}};
  list list11{1_i, 2_i, 3_i};
  list list12{10_i, 20_i};
  list list1{list11, list12};
  list list21{};
  list list22{0_i, 1_i, 1_i, 2_i, 3_i, 5_i, 8_i, 13_i};
  list list2{list11, list12};
  auto slice = make_slice(layout, caf::none, list1, list2);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), caf::none);
  CHECK_VARIANT_EQUAL(slice.at(1, 0), make_view(list1));
  CHECK_VARIANT_EQUAL(slice.at(2, 0), make_view(list2));
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - map) {
  record_type layout{
    record_field{"values", map_type{string_type{}, count_type{}}}};
  map map1{{"foo"s, 42_c}, {"bar"s, 23_c}};
  map map2{{"a"s, 0_c}, {"b"s, 1_c}, {"c", 2_c}};
  auto slice = make_slice(layout, map1, map2, caf::none);
  REQUIRE_EQUAL(slice.rows(), 3u);
  CHECK_VARIANT_EQUAL(slice.at(0, 0), make_view(map1));
  CHECK_VARIANT_EQUAL(slice.at(1, 0), make_view(map2));
  CHECK_VARIANT_EQUAL(slice.at(2, 0), caf::none);
  CHECK_ROUNDTRIP(slice);
}

TEST(single column - serialization) {
  using vast::factory;
  factory<table_slice_builder>::add<arrow_table_slice_builder>(caf::atom("arro"
                                                                         "w"));
  auto slice1 = make_single_column_slice<count_type>(0_c, 1_c, 2_c, 3_c);
  decltype(slice1) slice2 = {};
  {
    std::vector<char> buf;
    caf::binary_serializer sink{nullptr, buf};
    CHECK_EQUAL(sink(slice1), caf::none);
    caf::binary_deserializer source{nullptr, buf};
    CHECK_EQUAL(source(slice2), caf::none);
  }
  CHECK_VARIANT_EQUAL(slice2.at(0, 0), 0_c);
  CHECK_VARIANT_EQUAL(slice2.at(1, 0), 1_c);
  CHECK_VARIANT_EQUAL(slice2.at(2, 0), 2_c);
  CHECK_VARIANT_EQUAL(slice2.at(3, 0), 3_c);
  CHECK_VARIANT_EQUAL(slice1, slice2);
}

FIXTURE_SCOPE(arrow_table_slice_tests, fixtures::table_slices)

TEST_TABLE_SLICE(arrow_table_slice_builder, "arrow")

FIXTURE_SCOPE_END()
