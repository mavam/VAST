//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2019 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/counter.hpp"

#include "tenzir/fwd.hpp"

#include "tenzir/concept/parseable/tenzir/expression.hpp"
#include "tenzir/concept/parseable/tenzir/uuid.hpp"
#include "tenzir/concept/parseable/to.hpp"
#include "tenzir/defaults.hpp"
#include "tenzir/detail/spawn_container_source.hpp"
#include "tenzir/ids.hpp"
#include "tenzir/index.hpp"
#include "tenzir/posix_filesystem.hpp"
#include "tenzir/table_slice.hpp"
#include "tenzir/test/fixtures/actor_system_and_events.hpp"
#include "tenzir/test/test.hpp"
#include "tenzir/uuid.hpp"

#include <caf/actor_system.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/stateful_actor.hpp>

#include <filesystem>

using namespace tenzir;

using tenzir::expression;
using tenzir::ids;

namespace {

struct mock_client_state {
  uint64_t count = 0;
  bool received_done = false;
  static inline constexpr const char* name = "mock-client";
};

using mock_client_actor = caf::stateful_actor<mock_client_state>;

caf::behavior mock_client(mock_client_actor* self) {
  return {
    [=](uint64_t x) {
      CHECK(!self->state.received_done);
      self->state.count += x;
    },
    [=](atom::done) {
      self->state.received_done = true;
    },
  };
}

struct fixture : fixtures::deterministic_actor_system_and_events {
  fixture()
    : fixtures::deterministic_actor_system_and_events(
      TENZIR_PP_STRINGIFY(SUITE)) {
    // Spawn INDEX and a mock client.
    MESSAGE("spawn INDEX ingest 4 slices with 100 rows (= 1 partition) each");
    fs = self->spawn(tenzir::posix_filesystem, directory,
                     tenzir::accountant_actor{});
    auto indexdir = directory / "index";
    catalog = self->spawn(tenzir::catalog, accountant_actor{});
    client = sys.spawn(mock_client);
    run();
  }

  ~fixture() {
    self->send_exit(catalog, caf::exit_reason::user_shutdown);
    self->send_exit(index, caf::exit_reason::user_shutdown);
  }

  filesystem_actor fs;
  index_actor index;
  // Type registry should only be used for partition transforms, so it's
  // safe to pass a nullptr in this test.
  catalog_actor catalog = {};
  caf::actor client;
};

} // namespace

FIXTURE_SCOPE(counter_tests, fixture)

TEST(count IP point query with partition - local stores) {
  auto indexdir = directory / "index";
  auto index
    = self->spawn(tenzir::index, accountant_actor{}, fs, catalog, indexdir,
                  defaults::store_backend, defaults::import::table_slice_size,
                  duration{}, 100, 3, 1, indexdir, tenzir::index_config{});
  // Fill the INDEX with 400 rows from the Zeek conn log.
  detail::spawn_container_source(sys, take(zeek_conn_log_full, 4), index);
  MESSAGE("spawn the COUNTER for query ':ip == 192.168.1.104'");
  auto counter = sys.spawn(tenzir::counter,
                           unbox(to<expression>(":ip == 192.168.1.104")), index,
                           /*skip_candidate_check = */ false);
  run();
  anon_send(counter, atom::run_v, client);
  sched.run_once();
  // Once started, the COUNTER reaches out to the INDEX.
  expect((atom::evaluate, query_context), from(counter).to(index));
  run();
  auto& client_state = deref<mock_client_actor>(client).state;
  // The magic number 133 was taken from the first unit test.
  CHECK_EQUAL(client_state.count, 133u);
  CHECK_EQUAL(client_state.received_done, true);
  self->send_exit(index, caf::exit_reason::user_shutdown);
  self->send_exit(counter, caf::exit_reason::user_shutdown);
}

TEST(count meta extractor import time 1) {
  // Create an index with partition-local store backend.
  auto indexdir = directory / "index";
  auto index
    = self->spawn(tenzir::index, accountant_actor{}, fs, catalog, indexdir,
                  defaults::store_backend, defaults::import::table_slice_size,
                  duration{}, 100, 3, 1, indexdir, tenzir::index_config{});
  // Fill the INDEX with 400 rows from the Zeek conn log.
  auto slices = take(zeek_conn_log_full, 4);
  for (auto& slice : slices) {
    slice = slice.unshare();
    slice.import_time(time::clock::now());
  }
  detail::spawn_container_source(sys, slices, index);
  auto counter = sys.spawn(
    tenzir::counter,
    expression{predicate{meta_extractor{meta_extractor::import_time},
                         relational_operator::less,
                         data{tenzir::time{time::clock::now()}}}},
    index,
    /*skip_candidate_check = */ false);
  run();
  anon_send(counter, atom::run_v, client);
  sched.run_once();
  // Once started, the COUNTER reaches out to the INDEX.
  expect((atom::evaluate, query_context), from(counter).to(index));
  run();
  auto& client_state = deref<mock_client_actor>(client).state;
  // We're expecting the full 400 events here; import time must be lower than
  // current time.
  CHECK_EQUAL(client_state.count, 400u);
  CHECK_EQUAL(client_state.received_done, true);
  self->send_exit(index, caf::exit_reason::user_shutdown);
  self->send_exit(counter, caf::exit_reason::user_shutdown);
}

TEST(count meta extractor import time 2) {
  // Create an index with partition-local store backend.
  auto indexdir = directory / "index";
  auto index
    = self->spawn(tenzir::index, accountant_actor{}, fs, catalog, indexdir,
                  defaults::store_backend, defaults::import::table_slice_size,
                  duration{}, 100, 3, 1, indexdir, tenzir::index_config{});
  // Fill the INDEX with 400 rows from the Zeek conn log.
  auto slices = take(zeek_conn_log_full, 4);
  for (auto& slice : slices) {
    slice = slice.unshare();
    slice.import_time(time::clock::now());
  }
  detail::spawn_container_source(sys, slices, index);
  auto counter = sys.spawn(
    tenzir::counter,
    expression{predicate{
      meta_extractor{meta_extractor::import_time}, relational_operator::less,
      data{tenzir::time{time::clock::now()} - std::chrono::hours{2}}}},
    index,
    /*skip_candidate_check = */ false);
  run();
  anon_send(counter, atom::run_v, client);
  sched.run_once();
  // Once started, the COUNTER reaches out to the INDEX.
  expect((atom::evaluate, query_context), from(counter).to(index));
  run();
  auto& client_state = deref<mock_client_actor>(client).state;
  // We're expecting the zero events here, because all data was imported
  // more recently than 2 hours before current time.
  CHECK_EQUAL(client_state.count, 0u);
  CHECK_EQUAL(client_state.received_done, true);
  self->send_exit(index, caf::exit_reason::user_shutdown);
  self->send_exit(counter, caf::exit_reason::user_shutdown);
}

FIXTURE_SCOPE_END()
