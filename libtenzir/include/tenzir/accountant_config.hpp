//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2020 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/defaults.hpp"
#include "tenzir/detail/posix.hpp"

#include <caf/expected.hpp>

#include <string>

namespace tenzir {

struct accountant_config {
  struct self_sink {
    bool enable = true;
    // TODO: Switch to unsigned when moving to tenzir::record for transmitting.
    int64_t slice_size = 128;
  };

  struct file_sink {
    bool enable = false;
    bool real_time = false;
    std::string path;
  };

  struct uds_sink {
    bool enable = false;
    bool real_time = false;
    std::string path;
    detail::uds_socket_type type;
  };

  self_sink self_sink;
  file_sink file_sink;
  uds_sink uds_sink;

  template <class Inspector>
  friend auto inspect(Inspector& f, accountant_config& x) {
    return f.object(x)
      .pretty_name("tenzir.system.accountant_config")
      .fields(f.field("self-sink.enable", x.self_sink.enable),
              f.field("self-sink.slice-size", x.self_sink.slice_size),
              f.field("file-sink.enable", x.file_sink.enable),
              f.field("file-sink.path", x.file_sink.path),
              f.field("uds-sink.enable", x.uds_sink.enable),
              f.field("uds-sink.path", x.uds_sink.path));
  }
};

caf::expected<accountant_config>
to_accountant_config(const caf::settings& opts);

} // namespace tenzir
