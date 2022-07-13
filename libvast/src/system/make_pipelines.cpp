//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/system/make_pipelines.hpp"

#include "vast/concept/convertible/to.hpp"
#include "vast/error.hpp"
#include "vast/logger.hpp"
#include "vast/plugin.hpp"
#include "vast/si_literals.hpp"
#include "vast/system/node.hpp"
#include "vast/system/spawn_arguments.hpp"
#include "vast/system/transformer.hpp"
#include "vast/table_slice.hpp"

#include <caf/actor.hpp>
#include <caf/actor_cast.hpp>
#include <caf/config_value.hpp>
#include <caf/expected.hpp>
#include <caf/local_actor.hpp>
#include <caf/settings.hpp>
#include <caf/typed_event_based_actor.hpp>

using namespace vast::binary_byte_literals;

namespace vast::system {

namespace {

// An example of a transform with two steps:
//
// remove_action:
//   - delete:
//       field: alert.action
//   - replace:
//       field: dns.rrname
//       value: "foobar.net"
//
caf::error parse_pipeline_operators(pipeline& transform,
                                    const caf::config_value::list& operators) {
  for (auto config_operator : operators) {
    auto* dict = caf::get_if<caf::config_value::dictionary>(&config_operator);
    if (!dict)
      return caf::make_error(ec::invalid_configuration, "step is not a dict");
    if (dict->size() != 1)
      return caf::make_error(ec::invalid_configuration, "step has more than 1 "
                                                        "entry");
    auto& [name, value] = *dict->begin();
    auto* opts = caf::get_if<caf::config_value::dictionary>(&value);
    if (!opts)
      return caf::make_error(ec::invalid_configuration,
                             "expected step configuration to be a dict");
    auto rec = to<record>(*opts);
    if (!rec)
      return rec.error();
    auto step = make_pipeline_operator(name, *rec);
    if (!step)
      return step.error();
    transform.add_operator(std::move(*step));
  }
  return caf::none;
}

} // namespace

caf::expected<std::vector<pipeline>>
make_pipelines(pipelines_location loc, const caf::settings& opts) {
  std::vector<pipeline> result;
  std::string key;
  bool server = true;
  switch (loc) {
    case pipelines_location::server_import:
      key = "vast.transform-triggers.import";
      server = true;
      break;
    case pipelines_location::server_export:
      key = "vast.transform-triggers.export";
      server = true;
      break;
    case pipelines_location::client_sink:
      key = "vast.transform-triggers.export";
      server = false;
      break;
    case pipelines_location::client_source:
      key = "vast.transform-triggers.import";
      server = false;
      break;
  }
  auto pipelines_list = caf::get_if<caf::config_value::list>(&opts, key);
  if (!pipelines_list) {
    // TODO: Distinguish between the case where no pipelines were specified
    // (= return) and where there is something other than a list (= error).
    VAST_DEBUG("unable to find transformations for key {}", key);
    return result;
  }
  // (name, [event_type]), ...
  std::vector<std::pair<std::string, std::vector<std::string>>>
    transform_triggers;
  for (auto list_item : *pipelines_list) {
    auto transform = caf::get_if<caf::config_value::dictionary>(&list_item);
    if (!transform)
      return caf::make_error(ec::invalid_configuration, "transform definition "
                                                        "must be dict");
    if (transform->find("location") == transform->end())
      return caf::make_error(ec::invalid_configuration,
                             "missing 'location' key for transform trigger");
    if (transform->find("transform") == transform->end())
      return caf::make_error(ec::invalid_configuration,
                             "missing 'transform' key for transform trigger");
    if (transform->find("events") == transform->end())
      return caf::make_error(ec::invalid_configuration,
                             "missing 'events' key for transform trigger");
    auto* location = caf::get_if<std::string>(&(*transform)["location"]);
    if (!location || (*location != "server" && *location != "client"))
      return caf::make_error(ec::invalid_configuration, "transform location "
                                                        "must be either "
                                                        "'server' or 'client'");
    auto* name = caf::get_if<std::string>(&(*transform)["transform"]);
    if (!name)
      return caf::make_error(ec::invalid_configuration, "transform name must "
                                                        "be a string");
    auto events
      = caf::get_if<std::vector<std::string>>(&(*transform)["events"]);
    if (!events)
      return caf::make_error(ec::invalid_configuration,
                             "transform event types must be a list of strings");
    auto server_transform = *location == "server";
    if (server != server_transform)
      continue;
    transform_triggers.emplace_back(*name, *events);
  }
  if (transform_triggers.empty()) {
    return result;
  }
  result.reserve(transform_triggers.size());
  auto transform_definitions
    = caf::get_if<caf::config_value::dictionary>(&opts, "vast.transforms");
  if (!transform_definitions) {
    return caf::make_error(ec::invalid_configuration, "invalid");
  }
  std::map<std::string, caf::config_value::list> pipelines;
  for (auto [name, value] : *transform_definitions) {
    auto* pipeline_operators = caf::get_if<caf::config_value::list>(&value);
    if (!pipeline_operators) {
      return caf::make_error(ec::invalid_configuration,
                             "could not interpret pipeline operators as list");
    }
    pipelines[name] = *pipeline_operators;
  }
  for (auto [name, event_types] : transform_triggers) {
    if (!pipelines.contains(name)) {
      return caf::make_error(ec::invalid_configuration,
                             fmt::format("unknown transform '{}'", name));
    }
    auto& transform = result.emplace_back(name, std::move(event_types));
    if (auto err = parse_pipeline_operators(transform, pipelines.at(name)))
      return err;
  }
  return result;
}

caf::expected<pipeline_ptr>
make_pipeline(const std::string& name,
              const std::vector<std::string>& event_types,
              const caf::settings& pipelines) {
  if (!pipelines.contains(name))
    return caf::make_error(ec::invalid_configuration,
                           fmt::format("unknown transform '{}'", name));
  auto transform = std::make_shared<vast::pipeline>(
    name, std::vector<std::string>{event_types});
  auto list = caf::get_if<caf::config_value::list>(&pipelines, name);
  if (!list)
    return caf::make_error(
      ec::invalid_configuration,
      fmt::format("expected a list of steps in transform '{}'", name));
  if (auto err = parse_pipeline_operators(*transform, *list))
    return err;
  return transform;
}

} // namespace vast::system
