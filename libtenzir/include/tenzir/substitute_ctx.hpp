//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2025 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/diagnostics.hpp"
#include "tenzir/tql2/ast.hpp"

#include <unordered_map>

namespace tenzir {

/// Context when substituting let bindings with a constant.
class substitute_ctx {
public:
  /// Construct a new context with the given environment.
  ///
  /// If `env == nullptr`, then an empty environment is assumed.
  substitute_ctx(diagnostic_handler& dh,
                 const std::unordered_map<ir::let_id, ast::constant::kind>* env);

  /// Return the constant stored for the given `let`, if already known.
  auto get(ir::let_id id) const -> std::optional<ast::constant::kind>;

  /// Returns all constants that can be substituted with this context.
  auto env() const -> std::unordered_map<ir::let_id, ast::constant::kind>;

  auto dh() -> diagnostic_handler& {
    return dh_;
  }

  explicit(false) operator diagnostic_handler&() {
    return dh();
  }

private:
  diagnostic_handler& dh_;
  const std::unordered_map<ir::let_id, ast::constant::kind>* env_;
};

} // namespace tenzir
