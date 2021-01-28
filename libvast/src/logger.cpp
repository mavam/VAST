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

#include "vast/logger.hpp"

#include "vast/atoms.hpp"
#include "vast/config.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/assert.hpp"
#include "vast/si_literals.hpp"
#include "vast/system/configuration.hpp"

#include <caf/local_actor.hpp>

#include <cassert>
#include <memory>

#include <spdlog/async.h>
#include <spdlog/common.h>
#include <spdlog/sinks/ansicolor_sink.h>
#include <spdlog/sinks/null_sink.h>
#include <spdlog/sinks/rotating_file_sink.h>

namespace vast {

caf::expected<caf::detail::scope_guard<void (*)()>>
create_log_context(const vast::invocation& cmd_invocation,
                   const caf::settings& cfg_file) {
  if (!vast::detail::setup_spdlog(cmd_invocation, cfg_file))
    return caf::make_error(vast::ec::unspecified);
  return {caf::detail::make_scope_guard(
    std::addressof(vast::detail::shutdown_spdlog))};
}

int loglevel_to_int(caf::atom_value x, int default_value) {
  switch (caf::atom_uint(to_lowercase(x))) {
    case caf::atom_uint("quiet"):
      return VAST_LOG_LEVEL_QUIET;
    case caf::atom_uint("error"):
      return VAST_LOG_LEVEL_ERROR;
    case caf::atom_uint("warning"):
      return VAST_LOG_LEVEL_WARNING;
    case caf::atom_uint("info"):
      return VAST_LOG_LEVEL_INFO;
    case caf::atom_uint("verbose"):
      return VAST_LOG_LEVEL_VERBOSE;
    case caf::atom_uint("debug"):
      return VAST_LOG_LEVEL_DEBUG;
    case caf::atom_uint("trace"):
      return VAST_LOG_LEVEL_TRACE;
    default:
      return default_value;
  }
}

namespace {

constexpr bool is_vast_loglevel(const int value) {
  switch (value) {
    case VAST_LOG_LEVEL_QUIET:
    case VAST_LOG_LEVEL_ERROR:
    case VAST_LOG_LEVEL_WARNING:
    case VAST_LOG_LEVEL_INFO:
    case VAST_LOG_LEVEL_VERBOSE:
    case VAST_LOG_LEVEL_DEBUG:
    case VAST_LOG_LEVEL_TRACE:
      return true;
  }
  return false;
}

/// Converts a vast log level to spdlog level
spdlog::level::level_enum vast_loglevel_to_spd(const int value) {
  VAST_ASSERT(is_vast_loglevel(value));
  spdlog::level::level_enum level = spdlog::level::off;
  switch (value) {
    case VAST_LOG_LEVEL_QUIET:
      break;
    case VAST_LOG_LEVEL_ERROR:
      level = spdlog::level::err;
      break;
    case VAST_LOG_LEVEL_WARNING:
      level = spdlog::level::warn;
      break;
    case VAST_LOG_LEVEL_INFO:
      level = spdlog::level::info;
      break;
    case VAST_LOG_LEVEL_VERBOSE:
      level = spdlog::level::debug;
      break;
    case VAST_LOG_LEVEL_DEBUG:
      level = spdlog::level::debug;
      break;
    case VAST_LOG_LEVEL_TRACE:
      level = spdlog::level::trace;
      break;
  }
  return level;
}

} // namespace

namespace detail {

bool setup_spdlog(const vast::invocation& cmd_invocation,
                  const caf::settings& cfg_file) {
  if (vast::detail::logger()->name() != "/dev/null") {
    VAST_ERROR("Log already up");
    return false;
  }
  bool is_server = cmd_invocation.name() == "start"
                   || caf::get_or(cmd_invocation.options, "vast.node", false);
  const auto& cfg_cmd = cmd_invocation.options;
  auto console_verbosity = vast::defaults::logger::console_verbosity;
  auto cfg_console_verbosity
    = caf::get_if<std::string>(&cfg_file, "vast.console-verbosity");
  if (cfg_console_verbosity) {
    auto atom_cv = caf::atom_from_string(*cfg_console_verbosity);
    if (loglevel_to_int(atom_cv, -1) < 0) {
      std::cerr << "Illegal vast.console-verbosity " << *cfg_console_verbosity
                << "\n";
      return false;
    } else {
      console_verbosity = atom_cv;
    }
  }
  // Allow `vast.verbosity` from the command-line to overwrite
  // the `vast.console-verbosity` setting from the config file.
  auto verbosity = caf::get_if<caf::atom_value>(&cfg_cmd, "vast.verbosity");
  if (verbosity) {
    if (loglevel_to_int(*verbosity, -1) < 0) {
      std::cerr << "Illegal vast.verbosity " << to_string(*verbosity) << "\n";
      return false;
    }
    console_verbosity = *verbosity;
  }
  auto file_verbosity = vast::defaults::logger::file_verbosity;
  auto cfg_file_verbosity
    = caf::get_if<std::string>(&cfg_file, "vast.file-verbosity");
  if (cfg_file_verbosity) {
    auto atom_cv = caf::atom_from_string(*cfg_file_verbosity);
    if (loglevel_to_int(atom_cv, -1) < 0) {
      std::cerr << "Illegal vast.file-verbosity " << *cfg_file_verbosity
                << "\n";
      return false;
    } else {
      file_verbosity = atom_cv;
    }
  }
  auto vast_file_verbosity = loglevel_to_int(file_verbosity);
  auto vast_console_verbosity = loglevel_to_int(console_verbosity);
  auto vast_verbosity = std::max(vast_file_verbosity, vast_console_verbosity);
  // Helper to set the color mode
  spdlog::color_mode log_color = [&]() -> spdlog::color_mode {
    auto config_value = caf::get_or(cfg_file, "vast.console", "automatic");
    if (config_value == "automatic")
      return spdlog::color_mode::automatic;
    if (config_value == "always")
      return spdlog::color_mode::always;

    return spdlog::color_mode::never;
  }();
  auto log_file = caf::get_or(cfg_file, "vast.log-file",
                              std::string{defaults::logger::log_file});
  auto cmdline_log_file = caf::get_if<std::string>(&cfg_cmd, "vast.log-file");
  if (cmdline_log_file)
    log_file = *cmdline_log_file;
  if (is_server) {
    if (log_file == defaults::logger::log_file
        && vast_file_verbosity != VAST_LOG_LEVEL_QUIET) {
      path log_dir = caf::get_or(cfg_file, "vast.db-directory",
                                 defaults::system::db_directory);
      if (!exists(log_dir)) {
        if (auto err = mkdir(log_dir)) {
          std::cerr << "unable to create directory: " << log_dir.str() << ' '
                    << vast::render(err) << '\n';
          return false;
        }
        log_file = (log_dir / log_file).str();
      }
    }
  } else {
    // Please note, client file does not go to db_directory!
    auto client_log_file
      = caf::get_if<std::string>(&cfg_cmd, "vast.client-log-file");
    if (!client_log_file)
      client_log_file
        = caf::get_if<std::string>(&cfg_file, "vast.client-log-file");
    if (client_log_file)
      log_file = *client_log_file;
    else // If there is no client log file, turn off file logging
      vast_file_verbosity = VAST_LOG_LEVEL_QUIET;
  }
  spdlog::init_thread_pool(defaults::logger::queue_size,
                           defaults::logger::logger_threads);
  std::vector<spdlog::sink_ptr> sinks;
  auto stderr_sink
    = std::make_shared<spdlog::sinks::ansicolor_stderr_sink_mt>(log_color);
  stderr_sink->set_level(vast_loglevel_to_spd(vast_console_verbosity));
  auto console_format
    = caf::get_or(cfg_file, "vast.console-format",
                  std::string{defaults::logger::console_format});
  stderr_sink->set_pattern(console_format);
  sinks.push_back(stderr_sink);
  if (vast_file_verbosity != VAST_LOG_LEVEL_QUIET) {
    // Arguments are max file size and the max number of files.
    auto file_sink = std::make_shared<spdlog::sinks::rotating_file_sink_mt>(
      log_file, defaults::logger::rotate_threshold,
      defaults::logger::rotate_files);
    file_sink->set_level(vast_loglevel_to_spd(vast_file_verbosity));
    auto file_format = caf::get_or(cfg_file, "vast.file-format",
                                   std::string{defaults::logger::file_format});
    file_sink->set_pattern(file_format);
    sinks.push_back(file_sink);
  }
  // Replace the /dev/null logger that was created during init.
  logger() = std::make_shared<spdlog::async_logger>(
    "vast", sinks.begin(), sinks.end(), spdlog::thread_pool(),
    spdlog::async_overflow_policy::block);
  logger()->set_level(vast_loglevel_to_spd(vast_verbosity));
  spdlog::register_logger(logger());
  return true;
}

void shutdown_spdlog() {
  VAST_DEBUG("shut down logging");
  spdlog::shutdown();
}

std::shared_ptr<spdlog::logger>& logger() {
  static std::shared_ptr<spdlog::logger> vast_logger
    = spdlog::async_factory::template create<spdlog::sinks::null_sink_mt>(
      "/dev/null");
  return vast_logger;
}

} // namespace detail
} // namespace vast
