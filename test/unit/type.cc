#include "test.h"

#include "vast/value.h"
#include "vast/util/convert.h"

using namespace vast;

BOOST_AUTO_TEST_CASE(type_creation_and_display)
{
  BOOST_CHECK_EQUAL(to_string(*type::make<invalid_type>()), "<invalid>");
  BOOST_CHECK_EQUAL(to_string(*type::make<bool_type>()), "bool");
  BOOST_CHECK_EQUAL(to_string(*type::make<int_type>()), "int");
  BOOST_CHECK_EQUAL(to_string(*type::make<uint_type>()), "count");
  BOOST_CHECK_EQUAL(to_string(*type::make<double_type>()), "double");
  BOOST_CHECK_EQUAL(to_string(*type::make<time_range_type>()), "interval");
  BOOST_CHECK_EQUAL(to_string(*type::make<time_point_type>()), "time");
  BOOST_CHECK_EQUAL(to_string(*type::make<string_type>()), "string");
  BOOST_CHECK_EQUAL(to_string(*type::make<regex_type>()), "pattern");
  BOOST_CHECK_EQUAL(to_string(*type::make<address_type>()), "addr");
  BOOST_CHECK_EQUAL(to_string(*type::make<prefix_type>()), "subnet");
  BOOST_CHECK_EQUAL(to_string(*type::make<port_type>()), "port");

  std::vector<string> f;
  f.emplace_back("foo");
  f.emplace_back("bar");
  BOOST_CHECK_EQUAL(to_string(*type::make<enum_type>("", f)),
                    "enum {foo, bar}");

  auto b = type::make<bool_type>();
  BOOST_CHECK_EQUAL(to_string(*b), "bool");

  auto s = type::make<set_type>("", b);
  BOOST_CHECK_EQUAL(to_string(*s), "set[bool]");

  auto v = type::make<vector_type>("", b);
  BOOST_CHECK_EQUAL(to_string(*v), "vector of bool");

  auto t = type::make<table_type>("", b, s);
  BOOST_CHECK_EQUAL(to_string(*t), "table[bool] of set[bool]");

  std::vector<argument> args;
  args.emplace_back("foo", b);
  args.emplace_back("bar", s);
  auto r = type::make<record_type>("", args);
  BOOST_CHECK_EQUAL(to_string(*r), "record {foo: bool, bar: set[bool]}");

  // Clone a type to give it a new name.
  s = s->clone("bool_set");
  BOOST_CHECK_EQUAL(to_string(*s), "bool_set");
  BOOST_CHECK_EQUAL(to_string(*t), "table[bool] of set[bool]");
}

BOOST_AUTO_TEST_CASE(type_construction)
{
  auto b = type::make<bool_type>();
  BOOST_CHECK_EQUAL(b->tag(), bool_value);

  auto e = type::make<enum_type>();
  BOOST_CHECK_EQUAL(e->tag(), invalid_value);
}

BOOST_AUTO_TEST_CASE(type_mapping)
{
  BOOST_CHECK_EQUAL(to_value_type<invalid_type>::value, invalid_value);
  BOOST_CHECK_EQUAL(to_value_type<bool_type>::value, bool_value);
  BOOST_CHECK_EQUAL(to_value_type<int_type>::value, int_value);
  BOOST_CHECK_EQUAL(to_value_type<uint_type>::value, uint_value);
  // ...
  BOOST_CHECK_EQUAL(to_value_type<record_type>::value, record_value);
}

BOOST_AUTO_TEST_CASE(record_resolving)
{
  std::vector<argument> args0;
  args0.emplace_back("x", type::make<int_type>());
  args0.emplace_back("y", type::make<address_type>());
  args0.emplace_back("z", type::make<double_type>());

  std::vector<argument> args1;
  args1.emplace_back("a", type::make<int_type>());
  args1.emplace_back("b", type::make<uint_type>());
  args1.emplace_back("c", type::make<record_type>("", std::move(args0)));

  record_type rt{std::move(args1)};

  auto o = rt.resolve({"c"});
  BOOST_REQUIRE(o);
  BOOST_CHECK_EQUAL(o->size(), 1);
  BOOST_CHECK_EQUAL(o->front(), 2);

  o = rt.resolve({"c", "x"});
  BOOST_REQUIRE(o);
  BOOST_CHECK_EQUAL(o->size(), 2);
  BOOST_CHECK_EQUAL(o->front(), 2);
  BOOST_CHECK_EQUAL(o->back(), 0);
}

BOOST_AUTO_TEST_CASE(symbol_finding)
{
  std::vector<argument> args0;
  args0.emplace_back("x", type::make<int_type>());
  args0.emplace_back("y", type::make<address_type>());
  args0.emplace_back("z", type::make<double_type>());

  std::vector<argument> args1;
  args1.emplace_back("a", type::make<int_type>());
  args1.emplace_back("b", type::make<uint_type>());
  args1.emplace_back("c", type::make<record_type>("", std::move(args0)));

  std::vector<argument> args2;
  args2.emplace_back("a", type::make<int_type>());
  args2.emplace_back("b", type::make<record_type>("", std::move(args1)));
  args2.emplace_back("c", type::make<uint_type>());

  record_type rt{std::move(args2)};

  // Record access by key.
  auto first = rt.at(key{"a"});
  BOOST_REQUIRE(first);
  BOOST_CHECK_EQUAL(first->tag(), int_value);

  auto deep = rt.at(key{"b", "c", "y"});
  BOOST_REQUIRE(deep);
  BOOST_CHECK_EQUAL(deep->tag(), address_value);

  // Prefix finding.
  auto o = rt.find_prefix({"a"});
  offset a{0};
  BOOST_REQUIRE(o.size() == 1);
  BOOST_CHECK_EQUAL(o[0].first, a);

  o = rt.find_prefix({"b", "a"});
  offset ba{1, 0};
  BOOST_REQUIRE(o.size() == 1);
  BOOST_CHECK_EQUAL(o[0].first, ba);

  // Suffix finding.
  o = rt.find_suffix({"z"});
  offset z{1, 2, 2};
  BOOST_REQUIRE(o.size() == 1);
  BOOST_CHECK_EQUAL(o[0].first, z);

  o = rt.find_suffix({"c", "y"});
  offset cy{1, 2, 1};
  BOOST_REQUIRE(o.size() == 1);
  BOOST_CHECK_EQUAL(o[0].first, cy);

  o = rt.find_suffix({"a"});
  offset a0{0}, a1{1, 0};
  BOOST_REQUIRE(o.size() == 2);
  BOOST_CHECK_EQUAL(o[0].first, a0);
  BOOST_CHECK_EQUAL(o[1].first, a1);

  o = rt.find_suffix({"c", "*"});
  offset c0{1, 2, 0}, c1{1, 2, 1}, c2{1, 2, 2};
  BOOST_REQUIRE(o.size() == 3);
  BOOST_CHECK_EQUAL(o[0].first, c0);
  BOOST_CHECK_EQUAL(o[1].first, c1);
  BOOST_CHECK_EQUAL(o[2].first, c2);

  //
  // Types
  //

  auto t = type::make<record_type>("foo", std::move(rt));

  // Type access by key.
  first = t->at(key{"foo", "a"});
  BOOST_REQUIRE(first);
  BOOST_CHECK_EQUAL(first->tag(), int_value);

  auto deep_key = key{"foo", "b", "c", "y"};
  deep = t->at(deep_key);
  BOOST_REQUIRE(deep);
  BOOST_CHECK_EQUAL(deep->tag(), address_value);

  auto cast = t->cast(deep_key);
  BOOST_REQUIRE(cast);
  BOOST_CHECK_EQUAL(*cast, cy);

  // Prefix finding.
  o = t->find_prefix({"foo", "a"});
  BOOST_REQUIRE(o.size() == 1);
  BOOST_CHECK_EQUAL(o[0].first, a0);

  // Matches everything.
  o = t->find_prefix({"foo", "*"});
  BOOST_REQUIRE(o.size() == 7);

  // Same as finding the suffix for "a".
  o = t->find_suffix({"*", "a"});
  BOOST_REQUIRE(o.size() == 2);
  BOOST_CHECK_EQUAL(o[0].first, a0);
  BOOST_CHECK_EQUAL(o[1].first, a1);

  //for (auto& p : o)
  //  std::cout << p.first << "\t\t" << p.second << std::endl;
}

BOOST_AUTO_TEST_CASE(type_compatibility)
{
  auto i = type::make<int_type>();
  auto u = type::make<uint_type>();

  BOOST_CHECK(i->represents(i));
  BOOST_CHECK(! i->represents(u));

  auto s = type::make<set_type>("jiggle", i);
  BOOST_CHECK(s->represents(type::make<set_type>("foozen", i)));
  BOOST_CHECK(! s->represents(type::make<set_type>("barzen", u)));

  std::vector<argument> args0;
  args0.emplace_back("x", type::make<int_type>());
  args0.emplace_back("y", type::make<address_type>());
  args0.emplace_back("z", type::make<double_type>());

  std::vector<argument> args1;
  args1.emplace_back("a", type::make<int_type>());
  args1.emplace_back("b", type::make<address_type>());
  args1.emplace_back("c", type::make<double_type>());

  auto t0 = type::make<record_type>("foo", std::move(args0));
  auto t1 = type::make<record_type>("bar", std::move(args1));

  BOOST_CHECK(t0->represents(t1));
  BOOST_CHECK(t1->represents(t0));
}
