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

#include "vast/system/sink_command.hpp"

#include <csignal>
#include <iostream>
#include <memory>
#include <string>
#include <string_view>

#include <caf/event_based_actor.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/settings.hpp>
#include <caf/stateful_actor.hpp>
#include <caf/typed_event_based_actor.hpp>

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/expression.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/detail/assert.hpp"
#include "vast/error.hpp"
#include "vast/expression.hpp"
#include "vast/logger.hpp"
#include "vast/scope_linked.hpp"
#include "vast/system/accountant.hpp"
#include "vast/system/signal_monitor.hpp"
#include "vast/system/spawn_or_connect_to_node.hpp"
#include "vast/system/tracker.hpp"

using namespace std::chrono_literals;
using namespace caf;

namespace vast::system {

caf::message sink_command(const command::invocation& invocation,
                          actor_system& sys, caf::actor snk) {
  auto first = invocation.arguments.begin();
  auto last = invocation.arguments.end();
  // Read query from input file, STDIN or CLI arguments.
  std::string query;
  auto assign_query = [&](std::istream& in) {
    query.assign(std::istreambuf_iterator<char>{in},
                 std::istreambuf_iterator<char>{});
  };
  if (auto fname = caf::get_if<std::string>(&invocation.options, "export."
                                                                 "read")) {
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
        auto err = make_error(ec::no_such_file, "unable to read from " + *fname);
        return make_message(std::move(err));
      }
      assign_query(f);
    }
  } else if (first == last) {
    // Read query from STDIN.
    assign_query(std::cin);
  } else {
    // Assemble expression from all remaining arguments.
    query = *first;
    for (auto i = std::next(first); i != last; ++i) {
      query += ' ';
      query += *i;
    }
  }
  if (query.empty()) {
    auto err = make_error(ec::invalid_query);
    return make_message(std::move(err));
  }
  // Transform expression if needed, e.g., for PCAP sink.
  if (invocation.name() == "pcap") {
    VAST_DEBUG(invocation.full_name, "restricts expression to PCAP packets");
    // We parse the query expression first, work on the AST, and then render
    // the expression again to avoid performing brittle string manipulations.
    auto expr = to<expression>(query);
    if (!expr)
      return make_message(expr.error());
    auto attr = caf::atom_from_string("type");
    auto extractor = attribute_extractor{attr};
    auto pred = predicate{extractor, equal, data{"pcap.packet"}};
    auto ast = conjunction{std::move(pred), std::move(*expr)};
    query = to_string(ast);
    VAST_DEBUG(&invocation, "transformed expression to", query);
  }
  // Get a convenient and blocking way to interact with actors.
  scoped_actor self{sys};
  // Get VAST node.
  auto node_opt
    = spawn_or_connect_to_node(self, invocation.options, content(sys.config()));
  if (auto err = caf::get_if<caf::error>(&node_opt))
    return caf::make_message(std::move(*err));
  auto& node = caf::holds_alternative<caf::actor>(node_opt)
               ? caf::get<caf::actor>(node_opt)
               : caf::get<scope_linked_actor>(node_opt).get();
  VAST_ASSERT(node != nullptr);
  // Start signal monitor.
  std::thread sig_mon_thread;
  auto guard = signal_monitor::run_guarded(sig_mon_thread, sys, 750ms, self);
  // Spawn exporter at the node.
  actor exp;
  auto node_invocation
    = command::invocation{invocation.options, "spawn exporter", {query}};
  VAST_DEBUG(&invocation, "spawns exporter with parameters:", node_invocation);
  error err;
  self->request(node, infinite, std::move(node_invocation))
    .receive(
      [&](actor& a) {
        exp = std::move(a);
        if (!exp)
          err = make_error(ec::invalid_result, "remote spawn returned nullptr");
      },
      [&](error& e) { err = std::move(e); });
  if (err) {
    self->send_exit(snk, exit_reason::user_shutdown);
    return caf::make_message(std::move(err));
  }
  self->request(node, infinite, get_atom::value)
    .receive(
      [&](const std::string& id, system::registry& reg) {
        // Assign accountant to sink.
        VAST_DEBUG(invocation.full_name, "assigns accountant from node", id,
                   "to new sink");
        auto er = reg.components[id].find("accountant");
        if (er != reg.components[id].end()) {
          auto accountant = er->second.actor;
          self->send(snk, actor_cast<accountant_type>(accountant));
        }
      },
      [&](error& e) { err = std::move(e); });
  if (err) {
    self->send_exit(snk, exit_reason::user_shutdown);
    return caf::make_message(std::move(err));
  }
  // Start the exporter.
  self->send(exp, system::sink_atom::value, snk);
  self->send(exp, system::run_atom::value);
  self->monitor(snk);
  self->monitor(exp);
  auto stop = false;
  self
    ->do_receive(
      [&](down_msg& msg) {
        if (msg.source == node) {
          VAST_DEBUG_ANON(__func__, "received DOWN from node");
          self->send_exit(snk, exit_reason::user_shutdown);
          self->send_exit(exp, exit_reason::user_shutdown);
        } else if (msg.source == exp) {
          VAST_DEBUG(invocation.full_name, "received DOWN from exporter");
          self->send_exit(snk, exit_reason::user_shutdown);
        } else if (msg.source == snk) {
          VAST_DEBUG(invocation.full_name, "received DOWN from sink");
          self->send_exit(exp, exit_reason::user_shutdown);
        } else {
          VAST_ASSERT(!"received DOWN from inexplicable actor");
        }
        if (msg.reason) {
          VAST_WARNING(invocation.full_name, "received error message:",
                       self->system().render(msg.reason));
          err = std::move(msg.reason);
        }
        stop = true;
      },
      [&](system::signal_atom, int signal) {
        VAST_DEBUG(invocation.full_name, "got " << ::strsignal(signal));
        if (signal == SIGINT || signal == SIGTERM) {
          self->send_exit(exp, exit_reason::user_shutdown);
          self->send_exit(snk, exit_reason::user_shutdown);
        }
      })
    .until([&] { return stop; });
  if (err)
    return caf::make_message(std::move(err));
  return caf::none;
}

} // namespace vast::system
