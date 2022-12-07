//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <iterator>
#define SUITE convertible

#include "vast/concept/convertible/data.hpp"
#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/address.hpp"
#include "vast/concept/parseable/vast/subnet.hpp"
#include "vast/concept/parseable/vast/time.hpp"
#include "vast/data.hpp"
#include "vast/detail/flat_map.hpp"
#include "vast/test/test.hpp"

#include <caf/test/dsl.hpp>

using namespace vast;
using namespace vast::test;

template <class From, class To = From>
struct X {
  constexpr inline static bool use_deep_to_string_formatter = true;

  To value;

  template <class Inspector>
  friend auto inspect(Inspector& fun, X& x) {
    return fun.apply(x.value);
  }

  inline static const record_type& layout() noexcept {
    if constexpr (has_layout<From>) {
      static const auto result = record_type{
        {"value", From::layout()},
      };
      return result;
    } else {
      static const auto result = record_type{
        {"value", type::infer(From{})},
      };
      return result;
    }
  }
};

template <class Type>
auto test_basic = [](auto v) {
  auto val = Type{v};
  auto x = X<Type>{};
  auto r = record{{"value", val}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.value, val);
};

#define BASIC(type, v)                                                         \
  TEST(basic - type) { /* NOLINT */                                            \
    test_basic<type>(v);                                                       \
  }

BASIC(bool, true)
BASIC(integer, 42)
BASIC(count, 56u)
BASIC(real, 0.42)
BASIC(duration, std::chrono::minutes{55})
BASIC(vast::time, unbox(to<vast::time>("2012-08-12+23:55-0130")))
BASIC(std::string, "test")
BASIC(pattern, "pat")
BASIC(address, unbox(to<address>("44.0.0.1")))
BASIC(subnet, unbox(to<subnet>("44.0.0.1/20")))
#undef BASIC

template <class From, class To>
auto test_narrow = [](auto v) {
  auto x = X<From, To>{};
  auto r = record{{"value", From{v}}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.value, To(v));
};

#define NARROW(from_, to_, v)                                                  \
  TEST(narrow - from_ to to_) { /* NOLINT */                                   \
    test_narrow<from_, to_>(v);                                                \
  }

NARROW(integer, int8_t, 42)
NARROW(integer, int16_t, 42)
NARROW(integer, int32_t, 42)
NARROW(integer, int64_t, 42)
NARROW(count, uint8_t, 56u)
NARROW(count, uint16_t, 56u)
NARROW(count, uint32_t, 56u)
NARROW(real, float, 0.42)
#undef NARROW

template <class From, class To>
auto test_oob = [](auto v) {
  auto val = v;
  auto x = X<From, To>{};
  auto r = record{{"value", From{val}}};
  REQUIRE_EQUAL(convert(r, x), ec::convert_error);
};

#define OUT_OF_BOUNDS(from_, to_, v)                                           \
  TEST(oob - from_ to to_ `v`) { /* NOLINT */                                  \
    test_oob<from_, to_>(v);                                                   \
  }

OUT_OF_BOUNDS(integer, int8_t, 1 << 7)
OUT_OF_BOUNDS(integer, int8_t, -(1 << 7) - 1)
OUT_OF_BOUNDS(integer, int16_t, 1 << 15)
OUT_OF_BOUNDS(integer, int16_t, -(1 << 15) - 1)
OUT_OF_BOUNDS(integer, int32_t, 1ll << 31)
OUT_OF_BOUNDS(integer, int32_t, -(1ll << 31) - 1)
OUT_OF_BOUNDS(count, uint8_t, 1u << 8)
OUT_OF_BOUNDS(count, uint16_t, 1u << 16)
OUT_OF_BOUNDS(count, uint32_t, 1ull << 32)
#undef OUT_OF_BOUNDS

TEST(data overload) {
  auto val = integer{42};
  auto x = X<integer, int>{};
  auto d = data{record{{"value", val}}};
  CHECK_EQUAL(convert(d, x), ec::no_error);
  d = val;
  CHECK_EQUAL(convert(d, x), ec::convert_error);
}

TEST(failing) {
  auto r = record{{"value", integer{42}}};
  auto x = X<integer>{};
  x.value.value = 1337;
  r = record{{"foo", integer{42}}};
  CHECK_EQUAL(convert(r, x), ec::no_error);
  x.value.value = 1337;
  r = record{{"value", count{666}}};
  CHECK_EQUAL(convert(r, x), ec::convert_error);
  x.value.value = 1337;
  r = record{{"value", caf::none}};
  CHECK_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.value.value, 1337);
}

struct MultiMember {
  integer x;
  bool y;
  duration z;

  template <class Inspector>
  friend auto inspect(Inspector& f, MultiMember& a) {
    return vast::detail::apply_all(f, a.x, a.y, a.z);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"x", integer_type{}},
      {"y", bool_type{}},
      {"z", duration_type{}},
    };
    return result;
  };
};

TEST(multiple members) {
  using namespace std::chrono_literals;
  auto x = MultiMember{};
  auto r = record{{"x", integer{42}}, {"y", bool{true}}, {"z", duration{42ns}}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.x.value, 42);
  CHECK_EQUAL(x.y, true);
  CHECK_EQUAL(x.z, 42ns);
}

struct Nest {
  X<integer> inner;

  template <class Inspector>
  friend auto inspect(Inspector& f, Nest& b) {
    return f.apply(b.inner);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"inner", X<integer>::layout()},
    };
    return result;
  }
};

TEST(nested struct) {
  auto x = Nest{};
  auto r = record{{"inner", record{{"value", integer{23}}}}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.inner.value.value, 23);
}

struct Complex {
  std::string a;
  struct b_t {
    integer c;
    std::vector<count> d;

    friend auto inspect(auto& f, b_t& x) {
      return vast::detail::apply_all(f, x.c, x.d);
    }
  } b;
  struct e_t {
    integer f;
    std::optional<count> g;

    friend auto inspect(auto& f, e_t& x) {
      return vast::detail::apply_all(f, x.f, x.g);
    }
  } e;
  bool h;

  friend auto inspect(auto& f, Complex& x) {
    return vast::detail::apply_all(f, x.a, x.b, x.e, x.h);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"a", string_type{}},
      {"b",
       record_type{
         {"c", integer_type{}},
         {"d", list_type{count_type{}}},
       }},
      {"e",
       record_type{
         {"f", integer_type{}},
         {"g", count_type{}},
       }},
      {"h", bool_type{}},
    };
    return result;
  }
};

TEST(nested struct - single layout) {
  auto x = Complex{};
  auto r = record{{"a", "c3po"},
                  {"b", record{{"c", integer{23}}, {"d", list{1u, 2u, 3u}}}}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.a, "c3po");
  CHECK_EQUAL(x.b.c, integer{23});
  CHECK_EQUAL(x.b.d[0], count{1u});
  CHECK_EQUAL(x.b.d[1], count{2u});
  CHECK_EQUAL(x.b.d[2], count{3u});
}

struct Enum {
  enum { foo, bar, baz } value;

  template <class Inspector>
  friend auto inspect(Inspector& f, Enum& x) {
    return f.apply(x.value);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"value", enumeration_type{{"foo"}, {"bar"}, {"baz"}}},
    };
    return result;
  }
};

TEST(complex - enum) {
  auto x = Enum{};
  auto r = record{{"value", "baz"}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.value, Enum::baz);
}

TEST(parser - duration) {
  using namespace std::chrono_literals;
  auto x = duration{};
  const auto* r = "10 minutes";
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x, duration{10min});
}

TEST(parser - list<subnet>) {
  auto x = std::vector<subnet>{};
  auto layout = list_type{subnet_type{}};
  auto r = list{"10.0.0.0/8", "172.16.0.0/16"};
  REQUIRE_EQUAL(convert(r, x, layout), ec::no_error);
  auto ref = std::vector{unbox(to<subnet>("10.0.0.0/8")),
                         unbox(to<subnet>("172.16.0.0/16"))};
  CHECK_EQUAL(x, ref);
}

struct EC {
  enum class X { foo, bar, baz };
  X value;

  template <class Inspector>
  friend auto inspect(Inspector& f, EC& x) {
    return f.apply(x.value);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"value", enumeration_type{{{"foo"}, {"bar"}, {"baz"}}}},
    };
    return result;
  }
};

TEST(complex - enum class) {
  auto x = EC{};
  auto r = record{{"value", "baz"}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.value, EC::X::baz);
}

struct StdOpt {
  std::optional<integer> value;

  template <class Inspector>
  friend auto inspect(Inspector& f, StdOpt& c) {
    return f.apply(c.value);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"value", integer_type{}},
    };
    return result;
  }
};

struct CafOpt {
  caf::optional<integer> value;

  template <class Inspector>
  friend auto inspect(Inspector& f, CafOpt& c) {
    return f.apply(c.value);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"value", integer_type{}},
    };
    return result;
  }
};

TEST(std::optional member variable) {
  auto x = StdOpt{integer{42}};
  auto r = record{{"value", caf::none}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.value, integer{42});
  r = record{{"value", integer{22}}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.value->value, 22);
}

TEST(caf::optional member variable) {
  auto x = CafOpt{integer{42}};
  auto r = record{{"value", caf::none}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.value, integer{42});
  r = record{{"value", integer{22}}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK_EQUAL(x.value->value, 22);
}

struct Derived : X<integer> {};

TEST(inherited member variable) {
  auto d = Derived{};
  auto r = record{{"value", integer{42}}};
  REQUIRE_EQUAL(convert(r, d), ec::no_error);
  CHECK_EQUAL(d.value.value, 42);
}

struct Vec {
  std::vector<uint64_t> xs;

  template <class Inspector>
  friend auto inspect(Inspector& f, Vec& e) {
    return f.apply(e.xs);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"xs", list_type{count_type{}}},
    };
    return result;
  }
};

TEST(list to vector of unsigned) {
  auto x = Vec{};
  auto r
    = record{{"xs", list{1u, 2u, 3u, 4u, 5u, 6u, 7u, 8u, 9u, 10u, 11u, 12u,
                         1u, 2u, 3u, 4u, 5u, 6u, 7u, 8u, 9u, 10u, 42u, 1337u}}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  REQUIRE_EQUAL(x.xs.size(), 24u);
  CHECK_EQUAL(x.xs[1], 2ull);
  CHECK_EQUAL(x.xs[22], 42ull);
  CHECK_EQUAL(x.xs[23], 1337ull);
}

struct VecS {
  std::vector<X<integer>> xs;

  template <class Inspector>
  friend auto inspect(Inspector& fun, VecS& f) {
    return fun.apply(f.xs);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"xs", list_type{X<integer>::layout()}},
    };
    return result;
  }
};

TEST(list to vector of struct) {
  auto x = VecS{};
  auto r = record{{"xs", list{record{{"value", integer{-42}}},
                              record{{"value", integer{1337}}}}}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  REQUIRE_EQUAL(x.xs.size(), 2u);
  CHECK_EQUAL(x.xs[0].value.value, -42);
  CHECK_EQUAL(x.xs[1].value.value, 1337);
}

TEST(map to map) {
  using Map = vast::detail::flat_map<count, std::string>;
  auto x = Map{};
  auto layout = map_type{count_type{}, string_type{}};
  auto r = map{{1u, "foo"}, {12u, "bar"}, {997u, "baz"}};
  REQUIRE_EQUAL(convert(r, x, layout), ec::no_error);
  REQUIRE_EQUAL(x.size(), 3u);
  CHECK_EQUAL(x[1], "foo");
  CHECK_EQUAL(x[12], "bar");
  CHECK_EQUAL(x[997], "baz");
}

TEST(record to map) {
  using Map = vast::detail::stable_map<std::string, X<integer>>;
  auto x = Map{};
  auto layout = map_type{string_type{}, record_type{{"value", integer_type{}}}};
  auto r = record{{"foo", record{{"value", integer{-42}}}},
                  {"bar", record{{"value", integer{1337}}}},
                  {"baz", record{{"value", integer{997}}}}};
  REQUIRE_EQUAL(convert(r, x, layout), ec::no_error);
  REQUIRE_EQUAL(x.size(), 3u);
  CHECK_EQUAL(x["foo"].value.value, -42);
  CHECK_EQUAL(x["bar"].value.value, 1337);
  CHECK_EQUAL(x["baz"].value.value, 997);
}

TEST(list of record to map) {
  using T = X<integer>;
  auto x = vast::detail::stable_map<std::string, T>{};
  auto layout = map_type{
    type{string_type{}, {{"key", "outer.name"}}},
    record_type{
      {"outer",
       record_type{
         {"value", integer_type{}},
       }},
    },
  };
  auto l1 = list{
    record{
      {"outer",
       record{
         {"name", "x"},
         {"value", integer{1}},
       }},
    },
    record{
      {"outer",
       record{
         {"name", "y"},
         {"value", integer{82}},
       }},
    },
  };
  REQUIRE_EQUAL(convert(l1, x, layout), ec::no_error);
  auto l2 = list{
    record{
      {"outer",
       record{
         {"name", "z"},
         {"value", integer{-42}},
       }},
    },
  };
  REQUIRE_EQUAL(convert(l2, x, layout), ec::no_error);
  REQUIRE_EQUAL(x.size(), 3u);
  CHECK_EQUAL(x["x"].value.value, 1);
  CHECK_EQUAL(x["y"].value.value, 82);
  CHECK_EQUAL(x["z"].value.value, -42);
  // Assigning the same keys again should fail.
  REQUIRE_EQUAL(convert(l2, x, layout), ec::convert_error);
}

struct iList {
  std::vector<count> value;

  friend iList mappend(iList lhs, iList rhs) {
    lhs.value.insert(lhs.value.end(),
                     std::make_move_iterator(rhs.value.begin()),
                     std::make_move_iterator(rhs.value.end()));
    return lhs;
  }

  template <class Inspector>
  friend auto inspect(Inspector& fun, iList& x) {
    return fun.apply(x.value);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"value", list_type{count_type{}}},
    };
    return result;
  }
};

TEST(list of record to map monoid) {
  auto x = vast::detail::stable_map<std::string, iList>{};
  auto layout = map_type{
    type{string_type{}, {{"key", "outer.name"}}},
    record_type{
      {"outer", iList::layout()},
    },
  };
  auto l1 = list{
    record{
      {"outer",
       record{
         {"name", "x"},
         {"value", list{count{1}, count{3}}},
       }},
    },
    record{
      {"outer",
       record{
         {"name", "y"},
         {"value", list{count{82}}},
       }},
    },
  };
  REQUIRE_EQUAL(convert(l1, x, layout), ec::no_error);
  auto l2 = list{
    record{
      {"outer",
       record{
         {"name", "x"},
         {"value", list{count{42}}},
       }},
    },
    record{
      {"outer",
       record{
         {"name", "y"},
         {"value", list{count{121}}},
       }},
    },
  };
  REQUIRE_EQUAL(convert(l2, x, layout), ec::no_error);
  REQUIRE_EQUAL(x.size(), 2u);
  REQUIRE_EQUAL(x["x"].value.size(), 3u);
  CHECK_EQUAL(x["x"].value[0], 1u);
  CHECK_EQUAL(x["x"].value[1], 3u);
  CHECK_EQUAL(x["x"].value[2], 42u);
  REQUIRE_EQUAL(x["y"].value.size(), 2u);
  CHECK_EQUAL(x["y"].value[0], 82u);
  CHECK_EQUAL(x["y"].value[1], 121u);
}

struct OptVec {
  constexpr inline static bool use_deep_to_string_formatter = true;

  caf::optional<std::vector<std::string>> ovs = {};
  caf::optional<uint64_t> ou = 0;

  template <class Inspector>
  friend auto inspect(Inspector& f, OptVec& x) {
    return vast::detail::apply_all(f, x.ovs, x.ou);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"ovs", list_type{string_type{}}},
      {"ou", count_type{}},
    };
    return result;
  }
};

struct SMap {
  constexpr inline static bool use_deep_to_string_formatter = true;

  vast::detail::stable_map<std::string, OptVec> xs;

  template <class Inspector>
  friend auto inspect(Inspector& f, SMap& x) {
    return f.apply(x.xs);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"xs", map_type{string_type{}, OptVec::layout()}},
    };
    return result;
  }
};

TEST(record with list to optional vector) {
  auto x = SMap{};
  auto r = record{{"xs", record{{"foo", record{{"ovs", list{"a", "b", "c"}},
                                               {"ou", caf::none}}},
                                {"bar", record{{"ovs", list{"x", "y", "z"}}}},
                                {"baz", record{{"ou", integer{42}}}}}}};
  REQUIRE_EQUAL(convert(r, x), ec::no_error);
  CHECK(x.xs.contains("foo"));
  CHECK(x.xs.contains("bar"));
  CHECK(x.xs.contains("baz"));
  CHECK(x.xs["foo"].ovs);
  CHECK_EQUAL(x.xs["foo"].ovs->size(), 3u);
  CHECK_EQUAL(x.xs["foo"].ou, uint64_t{0});
  CHECK(x.xs["bar"].ovs);
  CHECK_EQUAL(x.xs["bar"].ou, uint64_t{0});
  CHECK_EQUAL(x.xs["bar"].ovs->size(), 3u);
  CHECK(!x.xs["baz"].ovs);
  CHECK_EQUAL(*x.xs["baz"].ou, 42u);
}

TEST(conversion to float) {
  float fdest = 0;
  double ddest = 0;
  CHECK_EQUAL(convert(integer{42}, fdest, real_type{}), caf::none);
  CHECK_EQUAL(convert(integer{42}, ddest, real_type{}), caf::none);
  CHECK_EQUAL(convert(42, fdest, real_type{}), caf::none);
  CHECK_EQUAL(convert(-42, ddest, real_type{}), caf::none);
  CHECK_EQUAL(convert(42u, fdest, real_type{}), caf::none);
  CHECK_EQUAL(convert(42ull, ddest, real_type{}), caf::none);
  CHECK_EQUAL(convert(42.0, fdest, real_type{}), caf::none);
  CHECK_EQUAL(convert(42.0, ddest, real_type{}), caf::none);
}
