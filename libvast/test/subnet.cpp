//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/concept/parseable/vast/subnet.hpp"

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/subnet.hpp"
#include "vast/subnet.hpp"
#include "vast/test/test.hpp"

using namespace vast;
using namespace std::string_literals;

TEST(subnets) {
  subnet p;
  CHECK(p.network() == *to<ip>("::"));
  CHECK(p.length() == 0);
  CHECK(to_string(p) == "::/0");

  auto a = *to<ip>("192.168.0.1");
  subnet q{a, 24};
  CHECK(q.network() == *to<ip>("192.168.0.0"));
  CHECK(q.length() == 24);
  CHECK(to_string(q) == "192.168.0.0/24");
  CHECK(q.contains(*to<ip>("192.168.0.73")));
  CHECK(!q.contains(*to<ip>("192.168.244.73")));

  auto b = *to<ip>("2001:db8:0000:0000:0202:b3ff:fe1e:8329");
  subnet r{b, 64};
  CHECK(r.length() == 64);
  CHECK(r.network() == *to<ip>("2001:db8::"));
  CHECK(to_string(r) == "2001:db8::/64");
}

TEST(containment) {
  MESSAGE("v4");
  CHECK(to<subnet>("10.0.0.0/8")->contains(*to<ip>("10.0.0.1")));
  CHECK(to<subnet>("10.0.0.0/8")->contains(*to<subnet>("10.0.0.0/16")));
  CHECK(!to<subnet>("10.0.0.0/17")->contains(*to<subnet>("10.0.0.0/16")));
  CHECK(to<subnet>("218.89.0.0/16")->contains(*to<subnet>("218.89.167.0/24")));
  CHECK(to<subnet>("218.89.0.0/16")->contains(*to<subnet>("218.89.167.0/24")));
  CHECK(to<subnet>("218.88.0.0/14")->contains(*to<subnet>("218.89.0.0/16")));
  MESSAGE("v6");
  auto v4 = *to<subnet>("2001:db8:0000:0000:0202:b3ff:fe1e:8329/64");
  CHECK(v4.contains(*to<ip>("2001:db8::cafe:babe")));
  CHECK(!v4.contains(*to<ip>("ff00::")));
}

TEST(printable) {
  auto sn = subnet{*to<ip>("10.0.0.0"), 8};
  CHECK_EQUAL(to_string(sn), "10.0.0.0/8");
}

TEST(subnet) {
  auto p = make_parser<subnet>{};
  MESSAGE("IPv4");
  auto str = "192.168.0.0/24"s;
  auto f = str.begin();
  auto l = str.end();
  subnet s;
  CHECK(p(f, l, s));
  CHECK(f == l);
  CHECK((s == subnet{*to<ip>("192.168.0.0"), 24}));
  CHECK(s.network().is_v4());
  MESSAGE("IPv6");
  str = "beef::cafe/40";
  f = str.begin();
  l = str.end();
  CHECK(p(f, l, s));
  CHECK(f == l);
  CHECK((s == subnet{*to<ip>("beef::cafe"), 40}));
  CHECK(s.network().is_v6());
}
