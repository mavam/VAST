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

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/expression.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/assert.hpp"
#include "vast/error.hpp"
#include "vast/expression.hpp"
#include "vast/logger.hpp"
#include "vast/scope_linked.hpp"
#include "vast/system/actors.hpp"
#include "vast/system/node_control.hpp"
#include "vast/system/query_status.hpp"
#include "vast/system/read_query.hpp"
#include "vast/system/report.hpp"
#include "vast/system/signal_monitor.hpp"
#include "vast/system/spawn_or_connect_to_node.hpp"
#include "vast/uuid.hpp"

#include <caf/event_based_actor.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/settings.hpp>
#include <caf/stateful_actor.hpp>
#include <caf/typed_event_based_actor.hpp>

#include <csignal>
#include <iostream>
#include <memory>
#include <string>

using namespace std::chrono_literals;

namespace vast::system {

caf::message
sink_command(const invocation& inv, caf::actor_system& sys, caf::actor snk) {
  // Get a convenient and blocking way to interact with actors.
  caf::scoped_actor self{sys};
  auto guard = caf::detail::make_scope_guard(
    [&] { self->send_exit(snk, caf::exit_reason::user_shutdown); });
  // Read query from input file, STDIN or CLI arguments.
  auto query = read_query(inv, "vast.export.read");
  if (!query)
    return caf::make_message(std::move(query.error()));
  // Transform expression if needed, e.g., for PCAP sink.
  if (inv.name() == "pcap") {
    VAST_LOG_SPD_DEBUG("{} restricts expression to PCAP packets",
                       detail::id_or_name(inv.full_name));
    // We parse the query expression first, work on the AST, and then render
    // the expression again to avoid performing brittle string manipulations.
    auto expr = to<expression>(*query);
    if (!expr)
      return make_message(expr.error());
    auto pred = predicate{attribute_extractor{atom::type_v}, equal,
                          data{"pcap.packet"}};
    auto ast = conjunction{std::move(pred), std::move(*expr)};
    *query = to_string(ast);
    VAST_LOG_SPD_DEBUG("{} transformed expression to {}",
                       detail::id_or_name(&inv), *query);
  }
  // Get VAST node.
  auto node_opt
    = spawn_or_connect_to_node(self, inv.options, content(sys.config()));
  if (auto err = caf::get_if<caf::error>(&node_opt))
    return caf::make_message(std::move(*err));
  auto& node = caf::holds_alternative<caf::actor>(node_opt)
                 ? caf::get<caf::actor>(node_opt)
                 : caf::get<scope_linked_actor>(node_opt).get();
  VAST_ASSERT(node != nullptr);
  // Start signal monitor.
  std::thread sig_mon_thread;
  auto signal_guard = system::signal_monitor::run_guarded(
    sig_mon_thread, sys, defaults::system::signal_monitoring_interval, self);
  auto spawn_exporter = invocation{inv.options, "spawn exporter", {*query}};
  VAST_LOG_SPD_DEBUG("{} spawns exporter with parameters: {}",
                     detail::id_or_name(&inv), spawn_exporter);
  auto maybe_exporter = spawn_at_node(self, node, spawn_exporter);
  if (!maybe_exporter)
    return caf::make_message(std::move(maybe_exporter.error()));
  auto exporter = caf::actor_cast<exporter_actor>(std::move(*maybe_exporter));
  // Register the accountant at the sink.
  auto components = get_node_components(self, node, "accountant");
  if (!components)
    return caf::make_message(std::move(components.error()));
  auto& [accountant] = *components;
  if (accountant) {
    VAST_LOG_SPD_DEBUG("{} assigns accountant to new sink",
                       detail::id_or_name(inv.full_name));
    self->send(snk, caf::actor_cast<accountant_actor>(accountant));
  }
  // Register sink at the node.
  self->send(node, atom::put_v, snk, "sink");
  // Register self as the statistics actor.
  self->send(exporter, atom::statistics_v, self);
  self->send(snk, atom::statistics_v, self);
  // Start the exporter.
  self->send(exporter, atom::sink_v, snk);
  self->send(exporter, atom::run_v);
  self->monitor(snk);
  self->monitor(exporter);
  guard.disable();
  caf::error err;
  auto waiting_for_final_report = false;
  auto stop = false;
  self
    ->do_receive(
      [&](caf::down_msg& msg) {
        stop = true;
        if (msg.source == node) {
          VAST_LOG_SPD_DEBUG("{} received DOWN from node",
                             detail::id_or_name(inv.full_name));
          self->send_exit(snk, caf::exit_reason::user_shutdown);
        } else if (msg.source == exporter) {
          VAST_LOG_SPD_DEBUG("{} received DOWN from exporter",
                             detail::id_or_name(inv.full_name));
          self->send_exit(snk, caf::exit_reason::user_shutdown);
        } else if (msg.source == snk) {
          VAST_LOG_SPD_DEBUG("{} received DOWN from sink",
                             detail::id_or_name(inv.full_name));
          self->send_exit(exporter, caf::exit_reason::user_shutdown);
          stop = false;
          waiting_for_final_report = true;
        } else {
          VAST_ASSERT(!"received DOWN from inexplicable actor");
        }
        if (msg.reason && msg.reason != caf::exit_reason::user_shutdown) {
          VAST_WARNING(inv.full_name, "received error message:",
                       self->system().render(msg.reason));
          err = std::move(msg.reason);
        }
      },
      [&]([[maybe_unused]] performance_report report) {
#if VAST_LOG_LEVEL >= VAST_LOG_LEVEL_INFO
        // Log a set of named measurements.
        for (const auto& [name, measurement] : report) {
          if (auto rate = measurement.rate_per_sec(); std::isfinite(rate))
            VAST_LOG_SPD_INFO(
              "{} processed {} events at a rate of {} events/sec in {}",
              detail::id_or_name(name), measurement.events,
              static_cast<uint64_t>(rate), to_string(measurement.duration));
          else
            VAST_LOG_SPD_INFO("{} processed {} events",
                              detail::id_or_name(name), measurement.events);
        }
#endif
      },
      [&]([[maybe_unused]] std::string name,
          [[maybe_unused]] query_status query) {
#if VAST_LOG_LEVEL >= VAST_LOG_LEVEL_INFO
        if (auto rate
            = measurement{query.runtime, query.processed}.rate_per_sec();
            std::isfinite(rate))
          VAST_LOG_SPD_INFO("{} processed {} candidates at a rate of {} "
                            "candidates/sec and shipped {} results in {}",
                            detail::id_or_name(name), query.processed,
                            static_cast<uint64_t>(rate), query.shipped,
                            to_string(query.runtime));
        else
          VAST_LOG_SPD_INFO("{} processed {} candidatesand shipped {} results "
                            "in {}",
                            detail::id_or_name(name), query.processed,
                            query.shipped, to_string(query.runtime));
#endif
        if (waiting_for_final_report)
          stop = true;
      },
      [&](atom::signal, int signal) {
        VAST_LOG_SPD_DEBUG("{} got {}", detail::id_or_name(inv.full_name),
                           ::strsignal(signal));
        if (signal == SIGINT || signal == SIGTERM) {
          self->send_exit(exporter, caf::exit_reason::user_shutdown);
          self->send_exit(snk, caf::exit_reason::user_shutdown);
        }
      })
    .until([&] { return stop; });
  if (err)
    return caf::make_message(std::move(err));
  return caf::none;
}

} // namespace vast::system
