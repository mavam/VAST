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

#include "vast/system/start_command.hpp"

#include "vast/config.hpp"
#include "vast/systemd.hpp"

#include <caf/actor_system_config.hpp>
#include <caf/io/middleman.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/settings.hpp>

#include <csignal>
#include <thread>
#if VAST_ENABLE_OPENSSL
#  include <caf/openssl/all.hpp>
#endif // VAST_ENABLE_OPENSSL

#include "vast/concept/parseable/vast/endpoint.hpp"
#include "vast/defaults.hpp"
#include "vast/endpoint.hpp"
#include "vast/error.hpp"
#include "vast/fwd.hpp"
#include "vast/logger.hpp"
#include "vast/scope_linked.hpp"
#include "vast/system/signal_monitor.hpp"
#include "vast/system/spawn_node.hpp"

namespace vast::system {

using namespace std::chrono_literals;

caf::message start_command_impl(start_command_extra_steps extra_steps,
                                const invocation& inv, caf::actor_system& sys) {
  VAST_TRACE(inv);
  // Bail out early for bogus invocations.
  if (caf::get_or(inv.options, "vast.node", false))
    return caf::make_message(caf::make_error(ec::parse_error, "cannot start a "
                                                              "local "
                                                              "node"));
  // Fetch SSL settings from config.
  auto& sys_cfg = sys.config();
  auto use_encryption = !sys_cfg.openssl_certificate.empty()
                        || !sys_cfg.openssl_key.empty()
                        || !sys_cfg.openssl_passphrase.empty()
                        || !sys_cfg.openssl_capath.empty()
                        || !sys_cfg.openssl_cafile.empty();
  // Construct an endpoint.
  endpoint node_endpoint;
  auto str = get_or(inv.options, "vast.endpoint", defaults::system::endpoint);
  if (!parsers::endpoint(str, node_endpoint))
    return caf::make_message(
      caf::make_error(ec::parse_error, "invalid endpoint", str));
  // Default to port 42000/tcp if none is set.
  if (!node_endpoint.port)
    node_endpoint.port = port{defaults::system::endpoint_port, port_type::tcp};
  // Get a convenient and blocking way to interact with actors.
  caf::scoped_actor self{sys};
  // Spawn our node.
  auto node_opt = spawn_node(self, content(sys.config()));
  if (!node_opt)
    return caf::make_message(std::move(node_opt.error()));
  auto& node = node_opt->get();
  // Publish our node.
  auto host = node_endpoint.host.empty() ? "localhost" : node_endpoint.host.c_str();
  auto publish = [&]() -> caf::expected<uint16_t> {
    if (use_encryption)
#if VAST_ENABLE_OPENSSL
      return caf::openssl::publish(node, node_endpoint.port->number(), host);
#else
      return caf::make_error(ec::unspecified, "not compiled with OpenSSL "
                                              "support");
#endif
    auto& mm = sys.middleman();
    auto reuse_address = true;
    return mm.publish(node, node_endpoint.port->number(), host, reuse_address);
  };
  auto bound_port = publish();
  if (!bound_port)
    return caf::make_message(std::move(bound_port.error()));
  auto listen_addr = std::string{host} + ':' + std::to_string(*bound_port);
  VAST_INFO_ANON("VAST node is listening on", listen_addr);
  // Run user-defined extra code.
  if (extra_steps != nullptr)
    if (auto err = extra_steps(self, inv.options, node))
      return caf::make_message(std::move(err));
  // Start signal monitor.
  std::thread sig_mon_thread;
  auto guard = system::signal_monitor::run_guarded(
    sig_mon_thread, sys, defaults::system::signal_monitoring_interval, self);
  // Notify the service manager if it expects an update.
  if (auto error = systemd::notify_ready())
    return caf::make_message(std::move(error));
  // Run main loop.
  caf::error err;
  auto stop = false;
  self->monitor(node);
  // A single line of output to publish out address for scripts.
  if (caf::get_or(inv.options, "vast.start.print-endpoint", false))
    std::cout << listen_addr << std::endl;
  self
    ->do_receive(
      [&](caf::down_msg& msg) {
        VAST_ASSERT(msg.source == node);
        VAST_LOG_SPD_DEBUG("{} received DOWN from node",
                           detail::id_or_name(self));
        stop = true;
        if (msg.reason != caf::exit_reason::user_shutdown)
          err = std::move(msg.reason);
      },
      [&](atom::signal, int signal) {
        VAST_LOG_SPD_DEBUG("{} got {}", detail::id_or_name(self),
                           ::strsignal(signal));
        if (signal == SIGINT || signal == SIGTERM)
          self->send_exit(node, caf::exit_reason::user_shutdown);
        else
          self->send(node, atom::signal_v, signal);
      })
    .until([&] { return stop; });
  return caf::make_message(std::move(err));
}

caf::message start_command(const invocation& inv, caf::actor_system& sys) {
  VAST_TRACE(VAST_ARG(inv.options),
             VAST_ARG("args", inv.arguments.begin(), inv.arguments.end()));
  return start_command_impl(nullptr, inv, sys);
}

} // namespace vast::system
