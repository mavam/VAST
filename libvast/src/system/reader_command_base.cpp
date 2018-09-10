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

#include "vast/system/reader_command_base.hpp"

#include <csignal>

#include <caf/scoped_actor.hpp>
#include <caf/typed_event_based_actor.hpp>

#include "vast/logger.hpp"

#include "vast/system/node_command.hpp"
#include "vast/system/signal_monitor.hpp"
#include "vast/system/source.hpp"
#include "vast/system/tracker.hpp"

namespace vast::system {

reader_command_base::reader_command_base(command* parent, std::string_view name)
  : super(parent, name) {
  // nop
}

int reader_command_base::run_impl(caf::actor_system& sys,
                                  const caf::config_value_map& options,
                                  argument_iterator begin,
                                  argument_iterator end) {
  using namespace caf;
  using namespace std::chrono_literals;
  // Helper for blocking actor communication.
  scoped_actor self{sys};
  // Spawn the source.
  auto src_opt = make_source(self, options, begin, end);
  if (!src_opt) {
    std::cerr << "unable to spawn source: " << sys.render(src_opt.error())
              << std::endl;
    return EXIT_FAILURE;
  }
  auto src = std::move(*src_opt);
  // Get VAST node.
  auto node_opt = spawn_or_connect_to_node(self, options);
  if (!node_opt)
    return EXIT_FAILURE;
  auto node = std::move(*node_opt);
  VAST_INFO(this, "got node");
  /// Spawn an actor that takes care of CTRL+C and friends.
  auto sig_mon = self->spawn<detached>(system::signal_monitor, 750ms,
                                       actor{self});
  auto guard = caf::detail::make_scope_guard([&] {
    self->send_exit(sig_mon, exit_reason::user_shutdown);
  });
  // Set defaults.
  int rc = EXIT_FAILURE;
  auto stop = false;
  // Connect source to importers.
  caf::actor importer;
  self->request(node, infinite, get_atom::value).receive(
    [&](const std::string& id, system::registry& reg) {
      auto er = reg.components[id].equal_range("importer");
      if (er.first == er.second) {
        VAST_ERROR(this, "did not receive any importers from node", id);
        stop = true;
      } else if (reg.components[id].count("importer") > 1) {
        VAST_ERROR(this, "does not support multiple IMPORTER actors yet");
        stop = true;
      } else {
        VAST_DEBUG(this, "connecting to importer");
        importer = er.first->second.actor;
        self->send(src, system::sink_atom::value, importer);
      }
    },
    [&](const error& e) {
      VAST_IGNORE_UNUSED(e);
      VAST_ERROR(this, self->system().render(e));
      stop = true;
    }
  );
  if (stop) {
    cleanup(node);
    return rc;
  }
  // Start the source.
  rc = EXIT_SUCCESS;
  self->send(src, system::run_atom::value);
  self->monitor(src);
  self->do_receive(
    [&](const down_msg& msg) {
      if (msg.source == node)  {
        VAST_DEBUG(this, "received DOWN from node");
        self->send_exit(src, exit_reason::user_shutdown);
        rc = EXIT_FAILURE;
        stop = true;
      } else if (msg.source == src) {
        VAST_DEBUG(this, "received DOWN from source");
        if (caf::get_or(options, "blocking", false))
          self->send(importer, subscribe_atom::value, flush_atom::value, self);
        else
          stop = true;
      }
    },
    [&](flush_atom) {
      VAST_DEBUG(this, "received flush from IMPORTER");
      stop = true;
    },
    [&](system::signal_atom, int signal) {
      VAST_DEBUG(this, "got " << ::strsignal(signal));
      if (signal == SIGINT || signal == SIGTERM)
        self->send_exit(src, exit_reason::user_shutdown);
    }
  ).until(stop);
  cleanup(node);
  return rc;
}

} // namespace vast::system
