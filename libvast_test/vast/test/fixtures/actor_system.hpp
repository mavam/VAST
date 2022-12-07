//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2018 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/detail/inspection_common.hpp"
#include "vast/detail/legacy_deserialize.hpp"
#include "vast/error.hpp"
#include "vast/system/configuration.hpp"
#include "vast/test/fixtures/filesystem.hpp"
#include "vast/test/test.hpp"

#include <caf/actor.hpp>
#include <caf/actor_system.hpp>
#include <caf/binary_serializer.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/test/dsl.hpp>
#include <caf/test/io_dsl.hpp>

// Defined in dsl.hpp and clashes with range_map::inject
#undef inject

namespace fixtures {

/// Configures the actor system of a fixture with default settings for unit
/// testing.
struct test_configuration : vast::system::configuration {
  using super = vast::system::configuration;

  test_configuration();
  caf::error parse(int argc, char** argv);
};

/// A fixture with an actor system that uses the default work-stealing
/// scheduler.
struct actor_system : filesystem {
  explicit actor_system(std::string_view suite);

  ~actor_system();

  auto error_handler() {
    return [&](const caf::error& e) { FAIL(vast::render(e)); };
  }

  test_configuration config;
  caf::actor_system sys;
  caf::scoped_actor self;
};

using test_node_base_fixture = test_coordinator_fixture<test_configuration>;

/// A fixture with an actor system that uses the test coordinator for
/// determinstic testing of actors.
struct deterministic_actor_system : test_node_fixture<test_node_base_fixture>,
                                    filesystem {
  explicit deterministic_actor_system(std::string_view suite);

  auto error_handler() {
    return [&](const caf::error& e) { FAIL(vast::render(e)); };
  }

  template <class... Ts>
  auto serialize(const Ts&... xs) {
    caf::byte_buffer buf;
    caf::binary_serializer bs{sys.dummy_execution_unit(), buf};
    if (!vast::detail::apply_all(bs, xs...))
      FAIL("error during serialization: ");
    return buf;
  }

  template <class... Ts>
  void deserialize(const caf::byte_buffer& buf, Ts&... xs) {
    if (!(vast::detail::legacy_deserialize(buf, xs) && ...))
      FAIL("error during deserialization");
  }

  template <class T>
  T roundtrip(const T& x) {
    T y;
    deserialize(serialize(x), y);
    return y;
  }
};

} // namespace fixtures
