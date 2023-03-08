//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2019 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/system/version_command.hpp"

#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/data.hpp"
#include "vast/config.hpp"
#include "vast/data.hpp"
#include "vast/logger.hpp"
#include "vast/plugin.hpp"

#include <arrow/util/config.h>

#if VAST_ENABLE_JEMALLOC
#  include <jemalloc/jemalloc.h>
#endif

#include <iostream>
#include <sstream>

namespace vast::system {

namespace {

record combine(const record& lhs, const record& rhs) {
  auto result = lhs;
  for (const auto& field : rhs)
    result.insert(field);
  return result;
}

} // namespace

record retrieve_versions() {
  record result;
  result["VAST"] = version::version;
  result["Build Configuration"] = record{
    {"Type", version::build::type},
    {"Tree Hash", version::build::tree_hash},
    {"Assertions", version::build::has_assertions},
    {"Address Sanitizer", version::build::has_address_santiizer},
    {"Undefined Behavior Sanitizer",
     version::build::has_undefined_behavior_sanitizer},
  };
  std::ostringstream caf_version;
  caf_version << CAF_MAJOR_VERSION << '.' << CAF_MINOR_VERSION << '.'
              << CAF_PATCH_VERSION;
  result["CAF"] = caf_version.str();
  std::ostringstream arrow_version;
  arrow_version << ARROW_VERSION_MAJOR << '.' << ARROW_VERSION_MINOR << '.'
                << ARROW_VERSION_PATCH;
  result["Apache Arrow"] = arrow_version.str();
#if VAST_ENABLE_JEMALLOC
  result["jemalloc"] = JEMALLOC_VERSION;
#else
  result["jemalloc"] = data{};
#endif
  list plugin_names;
  for (const auto& plugin : plugins::get()) {
    if (plugin.type() == plugin_ptr::type::builtin)
      continue;
    if (auto v = plugin.version())
      plugin_names.push_back(fmt::format("{}-{}", plugin->name(), v));
    else
      plugin_names.push_back(fmt::format("{}", plugin->name()));
  }
  result["plugins"] = std::move(plugin_names);
  return result;
}

void print_version(const record& extra_content) {
  auto version = retrieve_versions();
  std::cout << to_json(combine(extra_content, version)) << std::endl;
}

caf::message
version_command([[maybe_unused]] const invocation& inv, caf::actor_system&) {
  VAST_TRACE_SCOPE("{}", inv);
  print_version();
  return {};
}

} // namespace vast::system
