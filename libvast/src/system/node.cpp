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

#include "vast/system/node.hpp"

#include "vast/fwd.hpp"

#include "vast/accountant/config.hpp"
#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/endpoint.hpp"
#include "vast/concept/printable/stream.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/json.hpp"
#include "vast/config.hpp"
#include "vast/data.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/process.hpp"
#include "vast/detail/settings.hpp"
#include "vast/format/csv.hpp"
#include "vast/format/json.hpp"
#include "vast/format/json/default_selector.hpp"
#include "vast/format/json/suricata_selector.hpp"
#include "vast/format/json/zeek_selector.hpp"
#include "vast/format/syslog.hpp"
#include "vast/format/test.hpp"
#include "vast/format/zeek.hpp"
#include "vast/logger.hpp"
#include "vast/system/accountant.hpp"
#include "vast/system/node.hpp"
#include "vast/system/posix_filesystem.hpp"
#include "vast/system/shutdown.hpp"
#include "vast/system/spawn_archive.hpp"
#include "vast/system/spawn_arguments.hpp"
#include "vast/system/spawn_counter.hpp"
#include "vast/system/spawn_disk_monitor.hpp"
#include "vast/system/spawn_eraser.hpp"
#include "vast/system/spawn_explorer.hpp"
#include "vast/system/spawn_exporter.hpp"
#include "vast/system/spawn_importer.hpp"
#include "vast/system/spawn_index.hpp"
#include "vast/system/spawn_node.hpp"
#include "vast/system/spawn_or_connect_to_node.hpp"
#include "vast/system/spawn_pivoter.hpp"
#include "vast/system/spawn_sink.hpp"
#include "vast/system/spawn_source.hpp"
#include "vast/system/spawn_type_registry.hpp"
#include "vast/system/terminate.hpp"
#include "vast/table_slice.hpp"
#include "vast/taxonomies.hpp"

#if VAST_ENABLE_PCAP
#  include "vast/format/pcap.hpp"
#endif

#include <caf/function_view.hpp>
#include <caf/io/middleman.hpp>
#include <caf/settings.hpp>

#include <chrono>
#include <csignal>
#include <fstream>
#include <sstream>

namespace vast::system {

namespace {

// This is a side-channel to communicate the self pointer into the spawn- and
// send-command functions, whose interfaces are constrained by the command
// factory.
thread_local node_actor::stateful_pointer<node_state> this_node = nullptr;

// Convenience function for wrapping an error into a CAF message.
auto make_error_msg(ec code, std::string msg) {
  return caf::make_message(caf::make_error(code, std::move(msg)));
}

/// Helper function to determine whether a component can be spawned at most
/// once.
bool is_singleton(std::string_view type) {
  // TODO: All of these actor interfaces are strongly typed. The value of `type`
  // is received via the actor interface of the NODE sometimes, which means that
  // we cannot just pass arbitrary actors to it. Atoms aren't really an option
  // either, because `caf::atom_value` was removed with CAF 0.18. We can,
  // however, abuse the fact that every typed actor has a type ID assigned, and
  // change the node to work with type IDs over actor names everywhere. This
  // refactoring will be much easier once the NODE itself is a typed actor, so
  // let's hold off until then.
  const char* singletons[]
    = {"accountant", "archive", "eraser",       "filesystem",
       "importer",   "index",   "type-registry"};
  auto pred = [&](const char* x) { return x == type; };
  return std::any_of(std::begin(singletons), std::end(singletons), pred);
}

// Sends an atom to a registered actor. Blocks until the actor responds.
caf::message send_command(const invocation& inv, caf::actor_system&) {
  auto first = inv.arguments.begin();
  auto last = inv.arguments.end();
  // Expect exactly two arguments.
  if (std::distance(first, last) != 2)
    return make_error_msg(ec::syntax_error, "expected two arguments: receiver "
                                            "and message atom");
  // Get destination actor from the registry.
  auto dst = this_node->state.registry.find_by_label(*first);
  if (dst == nullptr)
    return make_error_msg(ec::syntax_error,
                          "registry contains no actor named " + *first);
  // Dispatch to destination.
  auto f = caf::make_function_view(caf::actor_cast<caf::actor>(dst));
  if (auto res = f(caf::atom_from_string(*(first + 1))))
    return std::move(*res);
  else
    return caf::make_message(std::move(res.error()));
}

void collect_component_status(node_actor::stateful_pointer<node_state> self,
                              caf::response_promise status_promise,
                              status_verbosity v) {
  // Shared state between our response handlers.
  struct req_state_t {
    // Promise to the original client request.
    caf::response_promise rp;
    // Maps nodes to a map associating components with status information.
    caf::settings content;
  };
  auto req_state = std::make_shared<req_state_t>();
  req_state->rp = std::move(status_promise);
  // Pre-fill our result with system stats.
  auto& sys = self->system();
  auto& system = put_dictionary(req_state->content, "system");
  if (v >= status_verbosity::info) {
    put(system, "in-memory-table-slices", table_slice::instances());
    put(system, "database-path", self->state.dir.str());
    detail::merge_settings(detail::get_status(), system);
  }
  if (v >= status_verbosity::debug) {
    put(system, "running-actors", sys.registry().running());
    put(system, "detached-actors", sys.detached_actors());
    put(system, "worker-threads", sys.scheduler().num_workers());
  }
  auto deliver = [](auto&& req_state) {
    detail::strip_settings(req_state->content);
    req_state->rp.deliver(
      to_string(to_data(req_state->content), print_rendering::json));
  };
  // The overload for 'request(...)' taking a 'std::chrono::duration' does not
  // respect the specified message priority, so we convert to 'caf::duration' by
  // hand.
  const auto timeout = caf::duration{defaults::system::initial_request_timeout};
  // Send out requests and collects answers.
  for (auto& [label, component] : self->state.registry.components()) {
    // Requests to busy sources and sinks can easily delay the combined response
    // because the status requests don't get scheduled soon enough.
    if (component.type == "source" || component.type == "sink")
      continue;
    self
      ->request<caf::message_priority::high>(component.actor, timeout,
                                             atom::status_v, v)
      .then(
        [=, lab = label](caf::config_value::dictionary& xs) mutable {
          detail::merge_settings(xs, req_state->content, policy::merge_lists);
          // Both handlers have a copy of req_state.
          if (req_state.use_count() == 2)
            deliver(std::move(req_state));
        },
        [=, lab = label](caf::error& err) mutable {
          VAST_WARN("{} failed to retrieve {} status: {}", self, lab,
                    to_string(err));
          auto& dict = req_state->content[self->state.name].as_dictionary();
          dict.emplace(std::move(lab), to_string(err));
          // Both handlers have a copy of req_state.
          if (req_state.use_count() == 2)
            deliver(std::move(req_state));
        });
  }
}

} // namespace

caf::message dump_command(const invocation& inv, caf::actor_system&) {
  auto as_yaml = caf::get_or(inv.options, "vast.dump.yaml", false);
  auto self = this_node;
  auto [type_registry] = self->state.registry.find<type_registry_actor>();
  if (!type_registry)
    return caf::make_message(caf::make_error(ec::missing_component, //
                                             "type-registry"));
  caf::error request_error = caf::none;
  auto rp = self->make_response_promise();
  // The overload for 'request(...)' taking a 'std::chrono::duration' does not
  // respect the specified message priority, so we convert to 'caf::duration'
  // by hand.
  const auto timeout = caf::duration{defaults::system::initial_request_timeout};
  self
    ->request<caf::message_priority::high>(type_registry, timeout, atom::get_v,
                                           atom::taxonomies_v)
    .then(
      [=](struct taxonomies taxonomies) mutable {
        auto result = list{};
        result.reserve(taxonomies.concepts.size());
        if (inv.full_name == "dump" || inv.full_name == "dump concepts") {
          for (auto& [name, concept] : taxonomies.concepts) {
            auto fields = list{};
            fields.reserve(concept.fields.size());
            for (auto& field : concept.fields)
              fields.push_back(std::move(field));
            auto concepts = list{};
            concepts.reserve(concept.concepts.size());
            for (auto& concept : concept.concepts)
              concepts.push_back(std::move(concept));
            auto entry = record{
              {"concept",
               record{
                 {"name", std::move(name)},
                 {"description", std::move(concept.description)},
                 {"fields", std::move(fields)},
                 {"concepts", std::move(concepts)},
               }},
            };
            result.push_back(std::move(entry));
          }
        }
        if (inv.full_name == "dump" || inv.full_name == "dump models") {
          for (auto& [name, model] : taxonomies.models) {
            auto definition = list{};
            definition.reserve(model.definition.size());
            for (auto& definition_entry : model.definition)
              definition.push_back(std::move(definition_entry));
            auto entry = record{
              {"model",
               record{
                 {"name", std::move(name)},
                 {"description", std::move(model.description)},
                 {"definition", std::move(definition)},
               }},
            };
            result.push_back(std::move(entry));
          }
        }
        if (as_yaml) {
          if (auto yaml = to_yaml(data{std::move(result)}))
            rp.deliver(to_string(std::move(*yaml)));
          else
            request_error = std::move(yaml.error());
        } else {
          rp.deliver(to_string(data{std::move(result)}, print_rendering::json));
        }
      },
      [=](caf::error& err) mutable { request_error = std::move(err); });
  if (request_error)
    return caf::make_message(std::move(request_error));
  return caf::none;
}

caf::message status_command(const invocation& inv, caf::actor_system&) {
  auto self = this_node;
  auto verbosity = status_verbosity::info;
  if (caf::get_or(inv.options, "vast.status.detailed", false))
    verbosity = status_verbosity::detailed;
  if (caf::get_or(inv.options, "vast.status.debug", false))
    verbosity = status_verbosity::debug;
  collect_component_status(self, self->make_response_promise(), verbosity);
  return caf::none;
}

caf::expected<caf::actor>
spawn_accountant(node_actor::stateful_pointer<node_state> self,
                 spawn_arguments& args) {
  auto& options = args.inv.options;
  auto metrics_opts = caf::get_or(options, "vast.metrics", caf::settings{});
  auto cfg = to_accountant_config(metrics_opts);
  if (!cfg)
    return cfg.error();
  return caf::actor_cast<caf::actor>(self->spawn(accountant, std::move(*cfg)));
}

caf::expected<caf::actor>
spawn_component(node_actor::stateful_pointer<node_state> self,
                const invocation& inv, spawn_arguments& args) {
  VAST_TRACE_SCOPE("{} {}", VAST_ARG(inv), VAST_ARG(args));
  using caf::atom_uint;
  auto i = node_state::component_factory.find(inv.full_name);
  if (i == node_state::component_factory.end())
    return caf::make_error(ec::unspecified, "invalid spawn component");
  return i->second(self, args);
}

caf::message kill_command(const invocation& inv, caf::actor_system&) {
  auto self = this_node;
  auto first = inv.arguments.begin();
  auto last = inv.arguments.end();
  if (std::distance(first, last) != 1)
    return make_error_msg(ec::syntax_error, "expected exactly one component "
                                            "argument");
  auto rp = self->make_response_promise();
  auto& label = *first;
  auto component = self->state.registry.find_by_label(label);
  if (!component) {
    rp.deliver(caf::make_error(ec::unspecified, "no such component: " + label));
  } else {
    self->demonitor(component);
    terminate<policy::parallel>(self, component)
      .then(
        [=](atom::done) mutable {
          VAST_DEBUG("{} terminated component {}", self, label);
          rp.deliver(atom::ok_v);
        },
        [=](const caf::error& err) mutable {
          VAST_DEBUG("{} terminated component {}", self, label);
          rp.deliver(err);
        });
  }
  return caf::none;
}

/// Lifts a factory function that accepts `local_actor*` as first argument
/// to a function accpeting `node_actor::stateful_pointer<node_state>` instead.
template <caf::expected<caf::actor> (*Fun)(caf::local_actor*, spawn_arguments&)>
node_state::component_factory_fun lift_component_factory() {
  return
    [](node_actor::stateful_pointer<node_state> self, spawn_arguments& args) {
      // Delegate to lifted function.
      return Fun(self, args);
    };
}

template <caf::expected<caf::actor> (*Fun)(
  node_actor::stateful_pointer<node_state>, spawn_arguments&)>
node_state::component_factory_fun lift_component_factory() {
  return Fun;
}

auto make_component_factory() {
  return node_state::named_component_factory {
    {"spawn accountant", lift_component_factory<spawn_accountant>()},
      {"spawn archive", lift_component_factory<spawn_archive>()},
      {"spawn counter", lift_component_factory<spawn_counter>()},
      {"spawn disk_monitor", lift_component_factory<spawn_disk_monitor>()},
      {"spawn eraser", lift_component_factory<spawn_eraser>()},
      {"spawn exporter", lift_component_factory<spawn_exporter>()},
      {"spawn explorer", lift_component_factory<spawn_explorer>()},
      {"spawn importer", lift_component_factory<spawn_importer>()},
      {"spawn type-registry", lift_component_factory<spawn_type_registry>()},
      {"spawn index", lift_component_factory<spawn_index>()},
      {"spawn pivoter", lift_component_factory<spawn_pivoter>()},
      {"spawn source csv",
       lift_component_factory<
         spawn_source<format::csv::reader, defaults::import::csv>>()},
      {"spawn source json",
       lift_component_factory<
         spawn_source<format::json::reader<format::json::default_selector>,
                      defaults::import::json>>()},
#if VAST_ENABLE_PCAP
      {"spawn source pcap",
       lift_component_factory<
         spawn_source<format::pcap::reader, defaults::import::pcap>>()},
#endif
      {"spawn source suricata",
       lift_component_factory<
         spawn_source<format::json::reader<format::json::suricata_selector>,
                      defaults::import::suricata>>()},
      {"spawn source syslog",
       lift_component_factory<
         spawn_source<format::syslog::reader, defaults::import::syslog>>()},
      {"spawn source test",
       lift_component_factory<
         spawn_source<format::test::reader, defaults::import::test>>()},
      {"spawn source zeek",
       lift_component_factory<
         spawn_source<format::zeek::reader, defaults::import::zeek>>()},
      {"spawn source zeek-json",
       lift_component_factory<
         spawn_source<format::json::reader<format::json::zeek_selector>,
                      defaults::import::zeek>>()},
      {"spawn sink pcap", lift_component_factory<spawn_pcap_sink>()},
      {"spawn sink zeek", lift_component_factory<spawn_zeek_sink>()},
      {"spawn sink csv", lift_component_factory<spawn_csv_sink>()},
      {"spawn sink ascii", lift_component_factory<spawn_ascii_sink>()},
      {"spawn sink json", lift_component_factory<spawn_json_sink>()},
  };
}

auto make_command_factory() {
  // When updating this list, remember to update its counterpart in
  // application.cpp as well iff necessary
  return command::factory{
    {"dump", dump_command},
    {"dump concepts", dump_command},
    {"dump models", dump_command},
    {"kill", kill_command},
    {"send", send_command},
    {"spawn accountant", node_state::spawn_command},
    {"spawn archive", node_state::spawn_command},
    {"spawn counter", node_state::spawn_command},
    {"spawn disk_monitor", node_state::spawn_command},
    {"spawn eraser", node_state::spawn_command},
    {"spawn explorer", node_state::spawn_command},
    {"spawn exporter", node_state::spawn_command},
    {"spawn importer", node_state::spawn_command},
    {"spawn type-registry", node_state::spawn_command},
    {"spawn index", node_state::spawn_command},
    {"spawn pivoter", node_state::spawn_command},
    {"spawn sink ascii", node_state::spawn_command},
    {"spawn sink csv", node_state::spawn_command},
    {"spawn sink json", node_state::spawn_command},
    {"spawn sink pcap", node_state::spawn_command},
    {"spawn sink zeek", node_state::spawn_command},
    {"spawn source csv", node_state::spawn_command},
    {"spawn source json", node_state::spawn_command},
    {"spawn source pcap", node_state::spawn_command},
    {"spawn source suricata", node_state::spawn_command},
    {"spawn source syslog", node_state::spawn_command},
    {"spawn source test", node_state::spawn_command},
    {"spawn source zeek", node_state::spawn_command},
    {"spawn source zeek-json", node_state::spawn_command},
    {"status", status_command},
  };
}

std::string generate_label(node_actor::stateful_pointer<node_state> self,
                           std::string_view component) {
  // C++20: remove the indirection through std::string.
  auto n = self->state.label_counters[std::string{component}]++;
  return std::string{component} + '-' + std::to_string(n);
}

caf::message
node_state::spawn_command(const invocation& inv,
                          [[maybe_unused]] caf::actor_system& sys) {
  VAST_TRACE_SCOPE("{}", inv);
  using std::begin;
  using std::end;
  auto self = this_node;
  auto rp = self->make_response_promise();
  // We configured the command to have the name of the component.
  auto inv_name_split = detail::split(inv.full_name, " ");
  VAST_ASSERT(inv_name_split.size() > 1);
  std::string comp_type{inv_name_split[1]};
  // Auto-generate label if none given.
  std::string label;
  if (auto label_ptr = caf::get_if<std::string>(&inv.options, "vast.spawn."
                                                              "label")) {
    label = *label_ptr;
    if (self->state.registry.find_by_label(label)) {
      auto err = caf::make_error(ec::unspecified, "duplicate component label");
      rp.deliver(err);
      return caf::make_message(std::move(err));
    }
  } else {
    label = comp_type;
    if (!is_singleton(comp_type)) {
      label = generate_label(self, comp_type);
      VAST_DEBUG("{} auto-generated new label: {}", self, label);
    }
  }
  VAST_DEBUG("{} spawns a {} with the label {}", self, comp_type, label);
  auto spawn_inv = inv;
  if (comp_type == "source") {
    auto spawn_opt
      = caf::get_or(spawn_inv.options, "vast.spawn", caf::settings{});
    auto source_opt = caf::get_or(spawn_opt, "source", caf::settings{});
    auto import_opt
      = caf::get_or(spawn_inv.options, "vast.import", caf::settings{});
    detail::merge_settings(source_opt, import_opt);
    spawn_inv.options["import"] = import_opt;
    caf::put(spawn_inv.options, "vast.import", import_opt);
  }
  auto spawn_actually = [=](spawn_arguments& args) mutable {
    // Spawn our new VAST component.
    auto component = spawn_component(self, args.inv, args);
    if (!component) {
      if (component.error())
        VAST_WARN("{} failed to spawn component: {}", __func__,
                  render(component.error()));
      rp.deliver(component.error());
      return caf::make_message(std::move(component.error()));
    }
    self->monitor(*component);
    auto okay = self->state.registry.add(*component, std::move(comp_type),
                                         std::move(label));
    VAST_ASSERT(okay);
    rp.deliver(*component);
    return caf::make_message(*component);
  };
  auto handle_taxonomies = [=](expression e) mutable {
    VAST_DEBUG("{} received the substituted expression {}", self, to_string(e));
    spawn_arguments args{spawn_inv, self->state.dir, label, std::move(e)};
    spawn_actually(args);
  };
  // Retrieve taxonomies and delay spawning until the response arrives if we're
  // dealing with a query...
  auto query_handlers = std::set<std::string>{"counter", "exporter"};
  if (query_handlers.count(comp_type) > 0u
      && !caf::get_or(spawn_inv.options,
                      "vast." + comp_type + ".disable-taxonomies", false)) {
    if (auto [type_registry] = self->state.registry.find<type_registry_actor>();
        type_registry) {
      auto expr = normalized_and_validated(spawn_inv.arguments);
      if (!expr) {
        rp.deliver(expr.error());
        return make_message(expr.error());
      }
      self
        ->request(type_registry, defaults::system::initial_request_timeout,
                  atom::resolve_v, std::move(*expr))
        .then(handle_taxonomies, [=](caf::error err) mutable {
          rp.deliver(err);
          return make_message(err);
        });
      return caf::none;
    }
  }
  // ... or spawn the component right away if not.
  spawn_arguments args{spawn_inv, self->state.dir, label, std::nullopt};
  return spawn_actually(args);
}

node_actor::behavior_type
node(node_actor::stateful_pointer<node_state> self, std::string name, path dir,
     std::chrono::milliseconds shutdown_grace_period) {
  self->state.name = std::move(name);
  self->state.dir = std::move(dir);
  // Initialize component and command factories.
  node_state::component_factory = make_component_factory();
  node_state::command_factory = make_command_factory();
  // Initialize the file system with the node directory as root.
  auto fs = self->spawn<caf::linked + caf::detached>(posix_filesystem,
                                                     self->state.dir);
  self->state.registry.add(caf::actor_cast<caf::actor>(fs), "filesystem");
  // Remove monitored components.
  self->set_down_handler([=](const caf::down_msg& msg) {
    VAST_DEBUG("{} got DOWN from {}", self, msg.source);
    auto component = caf::actor_cast<caf::actor>(msg.source);
    auto type = self->state.registry.find_type_for(component);
    // All monitored components are in the registry.
    VAST_ASSERT(type != nullptr);
    if (is_singleton(*type)) {
      auto label = self->state.registry.find_label_for(component);
      VAST_ASSERT(label != nullptr); // Per the above assertion.
      VAST_ERROR("{} got DOWN from {} ; initiating shutdown", self, *label);
      self->send_exit(self, caf::exit_reason::user_shutdown);
    }
    self->state.registry.remove(component);
  });
  // Terminate deterministically on shutdown.
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    VAST_DEBUG("{} got EXIT from {}", self, msg.source);
    auto& registry = self->state.registry;
    std::vector<caf::actor> actors;
    auto schedule_teardown = [&](caf::actor actor) {
      self->demonitor(actor);
      registry.remove(actor);
      actors.push_back(std::move(actor));
    };
    // Terminate the accountant first because it acts like a source and may
    // hold buffered data.
    if (auto [accountant] = registry.find<accountant_actor>(); accountant)
      schedule_teardown(caf::actor_cast<caf::actor>(std::move(accountant)));
    // Take out the filesystem, which we terminate at the very end.
    auto [filesystem] = registry.find<filesystem_actor>();
    VAST_ASSERT(filesystem);
    self->unlink_from(filesystem); // avoid receiving an unneeded EXIT
    registry.remove(caf::actor_cast<caf::actor>(filesystem));
    // Tear down the ingestion pipeline from source to sink.
    auto pipeline = {"source", "importer", "index", "archive", "exporter"};
    for (auto component : pipeline)
      for (auto actor : registry.find_by_type(component)) {
        schedule_teardown(std::move(actor));
      }
    // Now terminate everything else.
    std::vector<caf::actor> remaining;
    for ([[maybe_unused]] auto& [label, comp] : registry.components()) {
      remaining.push_back(comp.actor);
    }
    for (auto& actor : remaining)
      schedule_teardown(actor);
    // Finally, bring down the filesystem.
    // FIXME: there's a super-annoying bug that makes it impossible to receive a
    // DOWN message from the filesystem during shutdown, but *only* when the
    // filesystem is detached! This might be related to a bug we experienced
    // earlier: https://github.com/actor-framework/actor-framework/issues/1110.
    // Until it gets fixed, we cannot add the filesystem to the set of
    // sequentially terminated actors but instead let it implicitly terminate
    // after the node exits when the filesystem ref count goes to 0. (A
    // shutdown after the node won't be an issue because the filesystem is
    // currently stateless, but this needs to be reconsidered when it changes.)
    // // TODO: uncomment when we get a DOWN from detached actors.
    // actors.push_back(std::move(filesystem));
    auto shutdown_kill_timeout = shutdown_grace_period / 5;
    shutdown<policy::sequential>(self, std::move(actors), shutdown_grace_period,
                                 shutdown_kill_timeout);
  });
  // Define the node behavior.
  return {
    [self](atom::run, const invocation& inv) -> caf::result<caf::message> {
      VAST_DEBUG("{} got command {} with options {} and arguments {}", self,
                 inv.full_name, inv.options, inv.arguments);
      // Run the command.
      this_node = self;
      return run(inv, self->system(), node_state::command_factory);
    },
    [self](atom::spawn, const invocation& inv) {
      VAST_DEBUG("{} got spawn command {} with options {} and arguments {}",
                 self, inv.full_name, inv.options, inv.arguments);
      // Run the command.
      this_node = self;
      auto msg = run(inv, self->system(), node_state::command_factory);
      auto result = caf::expected<caf::actor>{caf::no_error};
      if (!msg) {
        result = std::move(msg.error());
      } else if (msg->empty()) {
        VAST_VERBOSE("{} encountered empty invocation response", self);
      } else {
        msg->apply({
          [&](caf::error& x) { result = std::move(x); },
          [&](caf::actor& x) { result = std::move(x); },
          [&](caf::message& x) {
            VAST_ERROR("{} encountered invalid invocation response: {}", self,
                       deep_to_string(x));
            result = caf::make_error(ec::invalid_result,
                                     "invalid spawn invocation response",
                                     std::move(x));
          },
        });
      }
      return result;
    },
    [self](atom::put, const caf::actor& component,
           const std::string& type) -> caf::result<atom::ok> {
      VAST_DEBUG("{} got new {}", self, type);
      // Check if the new component is a singleton.
      auto& registry = self->state.registry;
      if (is_singleton(type) && registry.find_by_label(type))
        return caf::make_error(ec::unspecified, "component already exists");
      // Generate label
      auto label = generate_label(self, type);
      VAST_DEBUG("{} generated new component label {}", self, label);
      if (!registry.add(component, type, label))
        return caf::make_error(ec::unspecified, "failed to add component");
      self->monitor(component);
      return atom::ok_v;
    },
    [self](atom::get, atom::type, const std::string& type) {
      VAST_DEBUG("{} got a request for a component of type {}", self, type);
      auto result = self->state.registry.find_by_type(type);
      VAST_DEBUG("{} responds to the request for {} with {}", self, type,
                 result);
      return result;
    },
    [self](atom::get, atom::label, const std::string& label) {
      VAST_DEBUG("{} got a request for the component {}", self, label);
      auto result = self->state.registry.find_by_label(label);
      VAST_DEBUG("{} responds to the request for {} with {}", self, label,
                 result);
      return result;
    },
    [self](atom::get, atom::label, const std::vector<std::string>& labels) {
      VAST_DEBUG("{} got a request for the components {}", self, labels);
      std::vector<caf::actor> result;
      result.reserve(labels.size());
      for (const auto& label : labels)
        result.push_back(self->state.registry.find_by_label(label));
      VAST_DEBUG("{} responds to the request for {} with {}", self, labels,
                 result);
      return result;
    },
    [](atom::get, atom::version) -> std::string { //
      return VAST_VERSION;
    },
    [self](atom::signal, int signal) {
      VAST_WARN("{} got signal {}", self, ::strsignal(signal));
    },
  };
}

} // namespace vast::system
