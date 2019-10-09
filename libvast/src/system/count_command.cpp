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

#include "vast/system/count_command.hpp"

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/expression.hpp"
#include "vast/defaults.hpp"
#include "vast/error.hpp"
#include "vast/logger.hpp"
#include "vast/scope_linked.hpp"
#include "vast/system/atoms.hpp"
#include "vast/system/signal_monitor.hpp"
#include "vast/system/spawn_or_connect_to_node.hpp"
#include "vast/system/start_command.hpp"
#include "vast/system/tracker.hpp"

#include <caf/actor.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/settings.hpp>
#include <caf/stateful_actor.hpp>

#include <chrono>

using namespace std::chrono_literals;

namespace vast::system {

caf::message
count_command(const command::invocation& invocation, caf::actor_system& sys) {
  VAST_TRACE(invocation);
  auto first = invocation.arguments.begin();
  auto last = invocation.arguments.end();
  const auto& options = invocation.options;
  // Read query from input file, STDIN or CLI arguments.
  std::string query;
  auto assign_query = [&](std::istream& in) {
    query.assign(std::istreambuf_iterator<char>{in},
                 std::istreambuf_iterator<char>{});
  };
  if (auto fname = caf::get_if<std::string>(&options, "count.read")) {
    // Sanity check.
    if (first != last) {
      auto err = make_error(ec::parse_error, "got a query on the command line "
                                             "but --read option is defined");
      return make_message(std::move(err));
    }
    // Read query from STDIN if file name is '-'.
    if (*fname == "-") {
      assign_query(std::cin);
    } else {
      std::ifstream f{*fname};
      if (!f) {
        auto err
          = make_error(ec::no_such_file, "unable to read from " + *fname);
        return make_message(std::move(err));
      }
      assign_query(f);
    }
  } else if (first == last) {
    // Read query from STDIN.
    assign_query(std::cin);
  } else {
    query = detail::join(first, last, " ");
  }
  if (query.empty()) {
    auto err = make_error(ec::invalid_query);
    return make_message(std::move(err));
  }
  // Get a convenient and blocking way to interact with actors.
  caf::scoped_actor self{sys};
  // Get VAST node.
  auto node_opt
    = system::spawn_or_connect_to_node(self, options, content(sys.config()));
  if (auto err = caf::get_if<caf::error>(&node_opt))
    return caf::make_message(std::move(*err));
  auto& node = caf::holds_alternative<caf::actor>(node_opt)
                 ? caf::get<caf::actor>(node_opt)
                 : caf::get<scope_linked_actor>(node_opt).get();
  VAST_ASSERT(node != nullptr);
  // Start signal monitor.
  std::thread sig_mon_thread;
  auto guard
    = system::signal_monitor::run_guarded(sig_mon_thread, sys, 750ms, self);
  // Spawn COUNTER at the node.
  caf::actor cnt;
  auto args = command::invocation{options, "spawn counter", {query}};
  VAST_DEBUG(invocation.full_name, "spawns counter with parameters:", query);
  caf::error err;
  self->request(node, caf::infinite, std::move(args))
    .receive(
      [&](caf::actor& a) {
        cnt = std::move(a);
        if (!cnt)
          err = make_error(ec::invalid_result, "remote spawn returned nullptr");
      },
      [&](caf::error& e) { err = std::move(e); });
  if (err)
    return caf::make_message(std::move(err));
  self->send(cnt, system::run_atom::value, self);
  bool counting = true;
  uint64_t result = 0;
  self->receive_while
    // Loop until false.
    (counting)
    // Message handlers.
    ([&](uint64_t x) { result += x; },
     [&](system::done_atom) { counting = false; });
  std::cout << result << std::endl;
  return caf::none;
}

} // namespace vast::system
