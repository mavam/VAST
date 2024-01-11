//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2019 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/query_processor.hpp"

#include "tenzir/fwd.hpp"

#include "tenzir/catalog.hpp"
#include "tenzir/concept/parseable/tenzir/expression.hpp"
#include "tenzir/concept/parseable/tenzir/uuid.hpp"
#include "tenzir/concept/parseable/to.hpp"
#include "tenzir/ids.hpp"
#include "tenzir/pipeline.hpp"
#include "tenzir/query_context.hpp"
#include "tenzir/query_cursor.hpp"
#include "tenzir/test/fixtures/actor_system.hpp"
#include "tenzir/test/test.hpp"

#include <caf/fwd.hpp>
#include <caf/typed_event_based_actor.hpp>

using namespace tenzir;

namespace {

constexpr std::string_view uuid_str = "423b45a1-c217-4f99-ba43-9e3fc3285cd3";

constexpr std::string_view query_str = ":timestamp < 1 week ago";

struct mock_index_state {
  static inline constexpr const char* name = "mock-index";

  caf::actor_addr client = {};
  std::array<uint64_t, 5> results = {2ul, 3, 6, 12, 24};
  std::array<uint64_t, 5>::iterator it = results.begin();
};

index_actor::behavior_type
mock_index(index_actor::stateful_pointer<mock_index_state> self) {
  return {
    [=](atom::done, uuid) {
      FAIL("no mock implementation available");
    },
    [=](caf::stream<table_slice>) -> caf::inbound_stream_slot<table_slice> {
      FAIL("no mock implementation available");
    },
    [=](atom::status, status_verbosity, duration) -> record {
      FAIL("no mock implementation available");
    },
    [=](atom::subscribe, atom::flush, flush_listener_actor) {
      FAIL("no mock implementation available");
    },
    [=](atom::subscribe, atom::create,
        tenzir::partition_creation_listener_actor, send_initial_dbstate) {
      FAIL("no mock implementation available");
    },
    [=](atom::apply, pipeline, std::vector<partition_info>,
        keep_original_partition) -> std::vector<partition_info> {
      FAIL("no mock implementation available");
    },
    [=](atom::resolve, tenzir::expression) -> legacy_catalog_lookup_result {
      FAIL("no mock implementation available");
    },
    [=](atom::evaluate, tenzir::query_context&) -> caf::result<query_cursor> {
      auto query_id = unbox(to<uuid>(uuid_str));
      self->state.client = self->current_sender()->address();
      self->send(self, atom::query_v, query_id, 3u);
      return query_cursor{query_id, 5u, 3u};
    },
    [=](atom::query, const uuid&, uint32_t n) {
      auto* anon_self = caf::actor_cast<caf::event_based_actor*>(self);
      auto hdl = caf::actor_cast<caf::actor>(self->state.client);
      for (uint32_t i = 0; i < n; ++i)
        anon_self->send(hdl, *self->state.it++);
      anon_self->send(hdl, atom::done_v);
    },
    [=](atom::erase, uuid) -> atom::done {
      FAIL("no mock implementation available");
    },
    [=](atom::erase, std::vector<uuid>) -> atom::done {
      FAIL("no mock implementation available");
    },
    [=](atom::flush) {
      FAIL("no mock implementation available");
    },
  };
}

class mock_processor : public query_processor {
public:
  using super = query_processor;

  mock_processor(caf::event_based_actor* self) : super(self) {
    caf::message_handler base{
      behaviors_[await_results_until_done].as_behavior_impl()};
    behaviors_[await_results_until_done] = base.or_else(
      // Forward results to the sink.
      [this](uint64_t partial_result) { //
        results += partial_result;
      });
    // nop
  }

  void transition_to(state_name x) override {
    log.emplace_back(to_string(state_) + " -> " + to_string(x));
    super::transition_to(x);
  }

  std::vector<std::string> log;
  uint64_t results = 0;
};

struct fixture : fixtures::deterministic_actor_system {
  fixture()
    : fixtures::deterministic_actor_system(TENZIR_PP_STRINGIFY(SUITE)),
      query_id(unbox(to<uuid>(uuid_str))) {
    index = sys.spawn(mock_index);
    aut = sys.spawn([=](caf::stateful_actor<mock_processor>* self) {
      return self->state.behavior();
    });
    sched.run();
  }

  mock_processor& mock_ref() {
    return deref<caf::stateful_actor<mock_processor>>(aut).state;
  }

  uuid query_id;
  index_actor index;
  caf::actor aut;
};

} // namespace

FIXTURE_SCOPE(query_processor_tests, fixture)

TEST(state transitions) {
  std::vector<std::string> expected_log{
    "idle -> await_query_id",
    "await_query_id -> await_results_until_done",
    "await_results_until_done -> idle",
  };
  self->send(aut,
             query_context::make_extract("test", self,
                                         unbox(to<expression>(query_str))),
             index);
  expect((tenzir::query_context, index_actor), from(self).to(aut));
  expect((atom::evaluate, tenzir::query_context), from(aut).to(index));
  expect((tenzir::atom::query, uuid, uint32_t), from(index).to(index));
  expect((query_cursor), from(index).to(aut));
  expect((uint64_t), from(index).to(aut));
  expect((uint64_t), from(index).to(aut));
  expect((uint64_t), from(index).to(aut));
  expect((atom::done), from(index).to(aut));
  expect((tenzir::atom::query, uuid, uint32_t), from(aut).to(index));
  expect((uint64_t), from(index).to(aut));
  expect((uint64_t), from(index).to(aut));
  expect((atom::done), from(index).to(aut));
  CHECK_EQUAL(mock_ref().log, expected_log);
  CHECK_EQUAL(mock_ref().results, unsigned{2 + 3 + 6 + 12 + 24});
  CHECK_EQUAL(mock_ref().state(), query_processor::idle);
}

FIXTURE_SCOPE_END()
