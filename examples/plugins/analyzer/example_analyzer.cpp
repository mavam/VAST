//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/data.hpp>
#include <tenzir/detail/inspection_common.hpp>
#include <tenzir/error.hpp>
#include <tenzir/logger.hpp>
#include <tenzir/node.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/table_slice.hpp>

#include <caf/actor_cast.hpp>
#include <caf/actor_system_config.hpp>
#include <caf/attach_stream_sink.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/settings.hpp>
#include <caf/typed_event_based_actor.hpp>

#include <iostream>

namespace tenzir::plugins {

/// The EXAMPLE actor interface.
using example_actor = caf::typed_actor<
  // Update the configuration of the EXAMPLE actor.
  auto(atom::config, record)->caf::result<void>>
  // Conform to the protocol of the STREAM SINK ACTOR actor.
  ::extend_with<stream_sink_actor<table_slice>>
  // Conform to the protocol of the COMPONENT PLUGIN actor.
  ::extend_with<component_plugin_actor>::unwrap;

/// The state of the EXAMPLE actor.
struct example_actor_state;

} // namespace tenzir::plugins

// Assign type IDs to types that we intend to use with CAF's messaging system.
// Every type that is either implicitly or explicitly wrapped in a caf::message,
// e.g., because it is part of an actor's messaging interface, must have a
// unique type ID assigned. Only the declaration of types must be available when
// defining the type ID block. Their definition must only be available in the
// translation unit that contains TENZIR_REGISTER_PLUGIN_TYPE_ID_BLOCK.
// NOTE: For plugins to be used at the same time, their type ID ranges must not
// have overlap. The selected value of 1000 is just one possible starting value.
// Please use a unique range for your plugins.
CAF_BEGIN_TYPE_ID_BLOCK(tenzir_example_plugin, 1000)
  CAF_ADD_TYPE_ID(tenzir_example_plugin, (tenzir::plugins::example_actor))
  CAF_ADD_TYPE_ID(tenzir_example_plugin, (tenzir::plugins::example_actor_state))
CAF_END_TYPE_ID_BLOCK(tenzir_example_plugin)

namespace tenzir::plugins {

struct example_actor_state {
  uint64_t max_events = std::numeric_limits<uint64_t>::max();
  bool done = false;

  /// The name of the EXAMPLE actor in logs.
  constexpr static inline auto name = "example-analyzer";

  /// Support CAF type-inspection.
  template <class Inspector>
  friend bool inspect(Inspector& f, example_actor_state& x) {
    return detail::apply_all(f, x.max_events, x.done);
  }
};

example_actor::behavior_type
example(example_actor::stateful_pointer<example_actor_state> self) {
  return {
    [self](atom::config, record config) {
      TENZIR_TRACE_SCOPE("{} sets configuration {}", *self, config);
      for (auto& [key, value] : config) {
        if (key == "max-events") {
          if (auto max_events = caf::get_if<uint64_t>(&value)) {
            TENZIR_VERBOSE("{} sets max-events to {}", *self, *max_events);
            self->state.max_events = *max_events;
          }
        }
      }
    },
    [self](
      caf::stream<table_slice> in) -> caf::inbound_stream_slot<table_slice> {
      TENZIR_TRACE_SCOPE("{} hooks into stream {}", *self, in);
      return caf::attach_stream_sink(
               self, in,
               // Initialization hook for CAF stream.
               [=](uint64_t& counter) { // reset state
                 TENZIR_VERBOSE("{} initialized stream", *self);
                 counter = 0;
               },
               // Process one stream element at a time.
               [=](uint64_t& counter, table_slice slice) {
                 // If we're already done, discard the remaining table slices in
                 // the stream.
                 if (self->state.done)
                   return;
                 // Accumulate the rows in our table slices.
                 counter += slice.rows();
                 if (counter >= self->state.max_events) {
                   TENZIR_INFO("{} terminates stream after {} events", *self,
                               counter);
                   self->state.done = true;
                   self->quit();
                 }
               },
               // Teardown hook for CAF stream.
               [=](uint64_t&, const caf::error& err) {
                 if (err && err != caf::exit_reason::user_shutdown) {
                   TENZIR_ERROR("{} finished stream with error: {}", *self,
                                render(err));
                   return;
                 }
               })
        .inbound_slot();
    },
    [](atom::status, status_verbosity, duration) -> record {
      // Return an arbitrary record here for use in the status command.
      auto result = record{};
      result["answer"] = uint64_t{42};
      return result;
    },
  };
}

/// An example plugin.
class example_plugin final : public virtual command_plugin {
public:
  /// Loading logic.
  example_plugin() {
    // nop
  }

  /// Teardown logic.
  ~example_plugin() override {
    // nop
  }

  /// Initializes a plugin with its respective entries from the YAML config
  /// file, i.e., `plugin.<NAME>`.
  /// @param plugin_config The relevant subsection of the configuration.
  /// @param global_config The entire Tenzir configuration for potential access
  /// to global options.
  caf::error initialize(const record& plugin_config,
                        [[maybe_unused]] const record& global_config) override {
    config_ = plugin_config;
    return caf::none;
  }

  /// Returns the unique name of the plugin.
  std::string name() const override {
    return "example-analyzer";
  }

  /// Creates additional commands.
  std::pair<std::unique_ptr<command>, command::factory>
  make_command() const override {
    auto example = std::make_unique<command>(
      "example", "help for the example plugin command", command::opts());
    auto example_command
      = [](const invocation&, caf::actor_system&) -> caf::message {
      std::cout << "Hello, world!" << std::endl;
      return {};
    };
    auto factory = command::factory{
      {"example", example_command},
    };
    return {std::move(example), std::move(factory)};
  };

private:
  record config_ = {};
};

} // namespace tenzir::plugins

// Register the example_plugin with version 0.1.0-0.
TENZIR_REGISTER_PLUGIN(tenzir::plugins::example_plugin)

// Register the type IDs in our type ID block with Tenzir. This can be omitted
// when not adding additional type IDs. The macro supports up to two type ID
// blocks.
TENZIR_REGISTER_PLUGIN_TYPE_ID_BLOCK(tenzir_example_plugin)
