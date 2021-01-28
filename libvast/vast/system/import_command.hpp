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

#pragma once

#include "vast/fwd.hpp"

#include "vast/command.hpp"
#include "vast/defaults.hpp"
#include "vast/error.hpp"
#include "vast/logger.hpp"
#include "vast/scope_linked.hpp"
#include "vast/system/actors.hpp"
#include "vast/system/make_source.hpp"
#include "vast/system/node_control.hpp"
#include "vast/system/signal_monitor.hpp"
#include "vast/system/spawn_or_connect_to_node.hpp"

#include <caf/make_message.hpp>

#include <csignal>
#include <string>
#include <utility>

namespace vast::system {

template <class Reader, class Defaults>
caf::message import_command(const invocation& inv, caf::actor_system& sys) {
  VAST_TRACE(inv.full_name, VAST_ARG("options", inv.options), VAST_ARG(sys));
  auto self = caf::scoped_actor{sys};
  // Get VAST node.
  auto node_opt
    = spawn_or_connect_to_node(self, inv.options, content(sys.config()));
  if (auto err = caf::get_if<caf::error>(&node_opt))
    return caf::make_message(std::move(*err));
  auto& node = caf::holds_alternative<caf::actor>(node_opt)
                 ? caf::get<caf::actor>(node_opt)
                 : caf::get<scope_linked_actor>(node_opt).get();
  VAST_LOG_SPD_DEBUG("{} got node", detail::id_or_name(inv.full_name));
  // Get node components.
  auto components = get_typed_node_components< //
    accountant_actor, type_registry_actor, importer_actor>(self, node);
  if (!components)
    return caf::make_message(std::move(components.error()));
  auto& [accountant, type_registry, importer] = *components;
  if (!type_registry)
    return caf::make_message(caf::make_error( //
      ec::missing_component, "type-registry"));
  if (!importer)
    return caf::make_message(caf::make_error( //
      ec::missing_component, "importer"));
  // Start signal monitor.
  std::thread sig_mon_thread;
  auto guard = system::signal_monitor::run_guarded(
    sig_mon_thread, sys, defaults::system::signal_monitoring_interval, self);
  // Start the source.
  auto src_result = make_source<Reader, Defaults>(self, sys, inv, accountant,
                                                  type_registry, importer);
  if (!src_result)
    return caf::make_message(std::move(src_result.error()));
  auto src = std::move(src_result->src);
  auto name = std::move(src_result->name);
  bool stop = false;
  caf::error err;
  self->request(node, caf::infinite, atom::put_v, src, "source")
    .receive(
      [&](atom::ok) {
        VAST_LOG_SPD_DEBUG("{} registered source at node",
                           detail::id_or_name(name));
      },
      [&](caf::error error) { err = std::move(error); });
  if (err) {
    self->send_exit(src, caf::exit_reason::user_shutdown);
    return caf::make_message(std::move(err));
  }
  self->monitor(src);
  self->monitor(importer);
  self
    ->do_receive(
      // C++20: remove explicit 'importer' parameter passing.
      [&, importer = importer](const caf::down_msg& msg) {
        if (msg.source == importer) {
          VAST_LOG_SPD_DEBUG("{} received DOWN from node importer",
                             detail::id_or_name(name));
          self->send_exit(src, caf::exit_reason::user_shutdown);
          err = ec::remote_node_down;
          stop = true;
        } else if (msg.source == src) {
          VAST_LOG_SPD_DEBUG("{} received DOWN from source",
                             detail::id_or_name(name));
          if (caf::get_or(inv.options, "vast.import.blocking", false))
            self->send(importer, atom::subscribe_v, atom::flush::value,
                       caf::actor_cast<flush_listener_actor>(self));
          else
            stop = true;
        } else {
          VAST_LOG_SPD_DEBUG("{} received unexpected DOWN from {}",
                             detail::id_or_name(name), msg.source);
          VAST_ASSERT(!"unexpected DOWN message");
        }
      },
      [&](atom::flush) {
        VAST_LOG_SPD_DEBUG("{} received flush from IMPORTER",
                           detail::id_or_name(name));
        stop = true;
      },
      [&](atom::signal, int signal) {
        VAST_LOG_SPD_DEBUG("{} received signal {}", detail::id_or_name(name),
                           ::strsignal(signal));
        if (signal == SIGINT || signal == SIGTERM)
          self->send_exit(src, caf::exit_reason::user_shutdown);
      })
    .until(stop);
  if (err)
    return caf::make_message(std::move(err));
  return caf::none;
}

template <class Reader, class SimdjsonReader, class Defaults>
caf::message
import_command_json(const invocation& inv, caf::actor_system& sys) {
  auto use_simdjson = caf::get_or(
    inv.options, Defaults::category + std::string{".simdjson"}, false);
  if (use_simdjson)
    return import_command<SimdjsonReader, Defaults>(inv, sys);
  return import_command<Reader, Defaults>(inv, sys);
}

} // namespace vast::system
