//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#define SUITE index

#include "vast/system/index.hpp"

#include "vast/fwd.hpp"

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/expression.hpp"
#include "vast/concept/printable/std/chrono.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/detail/spawn_container_source.hpp"
#include "vast/detail/spawn_generator_source.hpp"
#include "vast/ids.hpp"
#include "vast/query_options.hpp"
#include "vast/system/archive.hpp"
#include "vast/system/posix_filesystem.hpp"
#include "vast/table_slice.hpp"
#include "vast/table_slice_builder.hpp"
#include "vast/test/fixtures/actor_system_and_events.hpp"
#include "vast/test/test.hpp"

#include <filesystem>

using caf::after;
using std::chrono_literals::operator""s;

using namespace vast;
using namespace std::chrono;

namespace {

struct fixture : fixtures::deterministic_actor_system_and_events {
  static constexpr uint32_t in_mem_partitions = 8;
  static constexpr uint32_t taste_count = 4;
  static constexpr size_t num_query_supervisors = 1;
  static constexpr size_t segments = 1;
  static constexpr size_t max_segment_size = 8192;

  struct scheduled_query_cursor {
    uuid id = {};
    uint32_t candidate_partitions = {};
    uint32_t scheduled_partitions = {};
  };

  fixture()
    : fixtures::deterministic_actor_system_and_events(
      VAST_PP_STRINGIFY(SUITE)) {
    auto fs = self->spawn(system::posix_filesystem, directory);
    auto archive_dir = directory / "archive";
    auto index_dir = directory / "index";
    archive
      = self->spawn(system::archive, archive_dir, segments, max_segment_size);
    catalog = self->spawn(system::catalog, system::accountant_actor{});
    index = self->spawn(system::index, system::accountant_actor{}, fs, archive,
                        catalog, type_registry, index_dir,
                        defaults::system::store_backend, slice_size,
                        vast::duration{}, in_mem_partitions, taste_count,
                        num_query_supervisors, index_dir, vast::index_config{});
  }

  ~fixture() override {
    anon_send_exit(index, caf::exit_reason::user_shutdown);
  }

  // Returns the state of the `index`.
  system::index_state& state() {
    return deref<caf::stateful_actor<system::index_state>>(index).state;
  }

  scheduled_query_cursor query(std::string_view expr) {
    self->send(index, atom::evaluate_v,
               vast::query_context::make_extract(self,
                                                 unbox(to<expression>(expr))));
    run();
    scheduled_query_cursor result;
    self->receive(
      [&](atom::ping, const system::query_cursor& cursor) {
        result.id = cursor.id;
        result.candidate_partitions = cursor.candidate_partitions;
        result.scheduled_partitions = 5u;
        self->response(result.scheduled_partitions);
        run();
      },
      after(0s) >>
        [&] {
          FAIL("INDEX did not respond to query");
        });
    return result;
  }

  size_t
  receive_result(const uuid& query_id, uint32_t hits, uint32_t scheduled) {
    size_t result = 0;
    uint32_t collected = 0;
    auto fetch = [&](size_t batch) {
      auto done = false;
      while (!done)
        self->receive(
          [&](table_slice& slice) {
            // test
            result += slice.rows();
          },
          [&](atom::done) {
            done = true;
          },
          caf::others >>
            [](caf::message_view& msg) -> caf::result<caf::message> {
            FAIL("unexpected message: " << msg.content());
            return caf::none;
          },
          after(0s) >>
            [&] {
              FAIL("ran out of messages");
            });
      if (!self->mailbox().empty())
        FAIL("mailbox not empty after receiving the 'done' for a batch: "
             << to_string(*self->mailbox().peek()));
      collected += batch;
    };
    fetch(scheduled);
    while (collected < hits) {
      auto batch = std::min(hits - collected, taste_count);
      self->send(index, query_id, batch);
      run();
      fetch(batch);
    }
    return result;
  }

  template <class T>
  T first_n(T xs, size_t n) {
    T result;
    result.insert(result.end(), xs.begin(), xs.begin() + n);
    return result;
  }

  /// Rebases offsets of table slices, i.e., the offsets of the first
  /// table slice is 0, the offset of the second table slice is 0 + rows in the
  /// first slice, and so on.
  auto rebase(std::vector<table_slice> xs) {
    id offset = 0;
    for (auto& x : xs) {
      x.offset(offset);
      offset += x.rows();
    }
    return xs;
  }

  // Handle to the INDEX actor.
  system::index_actor index;
  system::archive_actor archive;
  system::catalog_actor catalog;
  // Type registry should only be used for partition transforms, so it's
  // safe to pass a nullptr in this test.
  system::type_registry_actor type_registry = {};
};

} // namespace

FIXTURE_SCOPE(index_tests, fixture)

TEST(one - shot integer query result) {
  MESSAGE("fill first " << taste_count << " partitions");
  auto slices = rebase(first_n(alternating_integers, taste_count));
  REQUIRE_EQUAL(rows(slices), slice_size * taste_count);
  auto src = detail::spawn_container_source(sys, slices, archive, index);
  run();
  MESSAGE("query half of the values");
  auto [query_id, hits, scheduled] = query(":int == +1");
  CHECK_EQUAL(hits, taste_count);
  CHECK_EQUAL(scheduled, taste_count);
  size_t expected_result = rows(slices) / 2;
  auto result = receive_result(query_id, hits, scheduled);
  CHECK_EQUAL(result, expected_result);
}

TEST(iterable integer query result) {
  auto partitions = taste_count * 3;
  MESSAGE("fill first " << partitions << " partitions");
  auto slices = first_n(alternating_integers, partitions);
  auto src = detail::spawn_container_source(sys, slices, archive, index);
  run();
  MESSAGE("query half of the values");
  auto [query_id, hits, scheduled] = query(":int == +1");
  CHECK_NOT_EQUAL(query_id, uuid::nil());
  CHECK_EQUAL(hits, partitions);
  CHECK_EQUAL(scheduled, taste_count);
  size_t expected_result = slice_size * partitions / 2;
  MESSAGE("collect results");
  auto result = receive_result(query_id, hits, scheduled);
  CHECK_EQUAL(result, expected_result);
}

TEST(iterable zeek conn log query result) {
  MESSAGE("ingest conn.log slices");
  detail::spawn_container_source(sys, zeek_conn_log, archive, index);
  run();
  MESSAGE("issue field type query");
  {
    auto expected_result = 4u;
    auto [query_id, hits, scheduled] = query(":addr == 192.168.1.104");
    auto result = receive_result(query_id, hits, scheduled);
    CHECK_EQUAL(result, expected_result);
  }
  MESSAGE("issue field name queries");
  {
    auto expected_result = 4u;
    auto [query_id, hits, scheduled] = query("id.orig_h == 192.168.1.104");
    auto result = receive_result(query_id, hits, scheduled);
    CHECK_EQUAL(result, expected_result);
  }
  {
    auto [query_id, hits, scheduled] = query("service == \"dns\"");
    auto result = receive_result(query_id, hits, scheduled);
    CHECK_EQUAL(result, 11u);
  }
  MESSAGE("issue historical point query with conjunction");
  {
    auto expected_result = 2u;
    auto [query_id, hits, scheduled] = query("service == \"dns\" "
                                             "&& :addr == 192.168.1.103");
    auto result = receive_result(query_id, hits, scheduled);
    CHECK_EQUAL(result, expected_result);
  }
}

FIXTURE_SCOPE_END()
