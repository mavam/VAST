//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/pipeline_operator.hpp"

#include "vast/error.hpp"
#include "vast/plugin.hpp"

#include <fmt/format.h>

namespace vast {

// TODO: It would be more consistent with the rest of the code base to have a
// `pipeline_operator_factory` to create the steps. All pipeline operators from
// plugins would be registered at startup. However, that will require some more
// refactoring since `plugins::get()` only gives us unique pointers, so we can't
// really store the plugin anywhere to later create a step from it.
caf::expected<std::unique_ptr<pipeline_operator>>
make_pipeline_operator(const std::string& name, const vast::record& options) {
  for (const auto& plugin : plugins::get()) {
    if (name != plugin->name())
      continue;
    const auto* t = plugin.as<pipeline_operator_plugin>();
    if (!t)
      return caf::make_error(
        ec::invalid_configuration,
        fmt::format("step '{}' does not refer to a transform plugin", name));
    return t->make_pipeline_operator(options);
  }
  return caf::make_error(ec::invalid_configuration,
                         fmt::format("unknown step '{}'", name));
}

} // namespace vast
