//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2025 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/diagnostics.hpp"

namespace tenzir {

/// Context when transforming `ir::operator_ptr` to `exec::operator_ptr`.
///
/// TODO: At the moment, this is only a diagnostic handler?
class finalize_ctx {
public:
  explicit finalize_ctx(diagnostic_handler& dh) : dh_{dh} {
  }

  auto dh() const -> diagnostic_handler& {
    return dh_;
  }

  explicit(false) operator diagnostic_handler&() const {
    return dh();
  }

private:
  diagnostic_handler& dh_;
};

} // namespace tenzir
