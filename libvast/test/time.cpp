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

#include "vast/concept/parseable/vast/time.hpp"

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/printable/std/chrono.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/time.hpp"

#include <chrono>
#include <cstdlib>
#include <ctime>

#define SUITE time
#include "vast/test/test.hpp"

using namespace vast;
using namespace std::chrono;
using namespace std::chrono_literals;

namespace {

template <class Input, class T>
void check_duration(const Input& str, T x) {
  vast::duration t;
  CHECK(parsers::duration(str, t));
  CHECK_EQUAL(t, duration_cast<vast::duration>(x));
}

} // namespace <anonymous>

TEST(positive durations) {
  MESSAGE("nanoseconds");
  check_duration("42 nsecs", 42ns);
  check_duration("42nsec", 42ns);
  check_duration("42ns", 42ns);
  check_duration("42ns", 42ns);
  MESSAGE("microseconds");
  check_duration("42 usecs", 42us);
  check_duration("42usec", 42us);
  check_duration("42us", 42us);
  MESSAGE("milliseconds");
  check_duration("42 msecs", 42ms);
  check_duration("42msec", 42ms);
  check_duration("42ms", 42ms);
  MESSAGE("seconds");
  check_duration("42 secs", 42s);
  check_duration("42sec", 42s);
  check_duration("42s", 42s);
  MESSAGE("minutes");
  check_duration("42 mins", 42min);
  check_duration("42min", 42min);
  check_duration("42m", 42min);
  MESSAGE("hours");
  check_duration("42 hours", 42h);
  check_duration("42hour", 42h);
  check_duration("42h", 42h);
}

TEST(negative durations) {
  check_duration("-42ns", -42ns);
  check_duration("-42h", -42h);
}

TEST(fractional durations) {
  check_duration("3.54s", 3540ms);
  check_duration("-42.001ms", -42001us);
}

TEST(compound durations) {
  check_duration("3m42s10ms", 3min + 42s + 10ms);
  check_duration("3s42s10ms", 3s + 42s + 10ms);
  check_duration("42s3m10ms", 3min + 42s + 10ms);
  check_duration("-10m8ms1ns", -10min + 8ms + 1ns);
  MESSAGE("no intermediate signs");
  auto p = parsers::duration >> parsers::eoi;
  CHECK(!p("-10m-8ms1ns"));
}

bool verify_date(vast::time ts, int y, int m, int d) {
  auto time = system_clock::to_time_t(
    std::chrono::time_point_cast<system_clock::duration>(ts));
  std::tm tm = {};
  if (nullptr == gmtime_r(&time, &tm))
    return false;
  return tm.tm_year + 1900 == y && tm.tm_mon + 1 == m && tm.tm_mday == d;
}

vast::duration to_hours(vast::duration ts) {
  return duration_cast<hours>(ts) % 24;
}

vast::duration to_minutes(vast::duration ts) {
  return duration_cast<minutes>(ts) % 60;
}

vast::duration to_seconds(vast::duration ts) {
  return duration_cast<seconds>(ts) % 60;
}

vast::duration to_microseconds(vast::duration ts) {
  return duration_cast<microseconds>(ts) % 1'000'000;
}

TEST(ymdshms time parser) {
  vast::time ts;
  MESSAGE("YYYY-MM-DD+HH:MM:SS.ssss+HH");
  CHECK(parsers::time("2012-08-12+23:55:04.001234+01", ts));
  auto sd = floor<days>(ts);
  auto t = ts - sd;
  CHECK(verify_date(sd, 2012, 8, 13));
  CHECK(to_hours(t) == hours{0});
  CHECK(to_minutes(t) == minutes{55});
  CHECK(to_seconds(t) == seconds{4});
  CHECK(to_microseconds(t) == microseconds{1234});
  MESSAGE("YYYY-MM-DD+HH:MM:SS.ssss");
  CHECK(parsers::time("2012-08-12+23:55:04.001234", ts));
  sd = floor<days>(ts);
  t = ts - sd;
  CHECK(verify_date(sd, 2012, 8, 12));
  CHECK(to_hours(t) == hours{23});
  CHECK(to_minutes(t) == minutes{55});
  CHECK(to_seconds(t) == seconds{4});
  CHECK(to_microseconds(t) == microseconds{1234});
  MESSAGE("YYYY-MM-DD+HH:MM:SS-HH:MM");
  CHECK(parsers::time("2012-08-12+23:55:04-00:30", ts));
  sd = floor<days>(ts);
  t = ts - sd;
  CHECK(verify_date(sd, 2012, 8, 12));
  CHECK_EQUAL(to_hours(t), hours{23});
  CHECK_EQUAL(to_minutes(t), minutes{25});
  CHECK(to_seconds(t) == seconds{4});
  MESSAGE("YYYY-MM-DD+HH:MM:SS");
  CHECK(parsers::time("2012-08-12+23:55:04", ts));
  sd = floor<days>(ts);
  t = ts - sd;
  CHECK(verify_date(sd, 2012, 8, 12));
  CHECK(to_hours(t) == hours{23});
  CHECK(to_minutes(t) == minutes{55});
  CHECK(to_seconds(t) == seconds{4});
  // TODO: Fix timezone offset without divider
  MESSAGE("YYYY-MM-DD+HH:MM+HHMM");
  CHECK(parsers::time("2012-08-12+23:55+0130", ts));
  sd = floor<days>(ts);
  t = ts - sd;
  CHECK(verify_date(sd, 2012, 8, 13));
  CHECK_EQUAL(to_hours(t), hours{1});
  CHECK_EQUAL(to_minutes(t), minutes{25});
  CHECK(to_seconds(t) == seconds{0});
  MESSAGE("YYYY-MM-DD+HH:MM");
  CHECK(parsers::time("2012-08-12+23:55", ts));
  sd = floor<days>(ts);
  t = ts - sd;
  CHECK(verify_date(sd, 2012, 8, 12));
  CHECK(to_hours(t) == hours{23});
  CHECK(to_minutes(t) == minutes{55});
  CHECK(to_seconds(t) == seconds{0});
  MESSAGE("YYYY-MM-DD+HH");
  CHECK(parsers::time("2012-08-12+23", ts));
  sd = floor<days>(ts);
  t = ts - sd;
  CHECK(verify_date(sd, 2012, 8, 12));
  CHECK(to_hours(t) == hours{23});
  CHECK(to_minutes(t) == minutes{0});
  CHECK(to_seconds(t) == seconds{0});
  MESSAGE("YYYY-MM-DD");
  CHECK(parsers::time("2012-08-12", ts));
  sd = floor<days>(ts);
  t = ts - sd;
  CHECK(verify_date(sd, 2012, 8, 12));
  CHECK(to_hours(t) == hours{0});
  CHECK(to_minutes(t) == minutes{0});
  CHECK(to_seconds(t) == seconds{0});
  MESSAGE("YYYY-MM");
  CHECK(parsers::time("2012-08", ts));
  sd = floor<days>(ts);
  t = ts - sd;
  CHECK(verify_date(sd, 2012, 8, 1));
  CHECK(to_hours(t) == hours{0});
  CHECK(to_minutes(t) == minutes{0});
  CHECK(to_seconds(t) == seconds{0});
}

TEST(unix epoch time parser) {
  vast::time ts;
  CHECK(parsers::time("@1444040673", ts));
  CHECK(ts.time_since_epoch() == 1444040673s);
  CHECK(parsers::time("@1398933902.686337", ts));
  CHECK(ts.time_since_epoch() == double_seconds{1398933902.686337});
}

TEST(now time parser) {
  vast::time ts;
  CHECK(parsers::time("now", ts));
  CHECK(ts > time::clock::now() - minutes{1});
  CHECK(ts < time::clock::now() + minutes{1});
  CHECK(parsers::time("now - 1m", ts));
  CHECK(ts < time::clock::now());
  CHECK(parsers::time("now + 1m", ts));
  CHECK(ts > time::clock::now());
}

TEST(ago time parser) {
  vast::time ts;
  CHECK(parsers::time("10 days ago", ts));
  CHECK(ts < time::clock::now());
}

TEST(in time parser) {
  vast::time ts;
  CHECK(parsers::time("in 1 year", ts));
  CHECK(ts > time::clock::now());
}
