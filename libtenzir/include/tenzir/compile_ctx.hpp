//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2025 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/tql2/registry.hpp"

namespace tenzir {

class compile_ctx {
public:
  auto reg() const -> const registry&;

  auto dh() const -> diagnostic_handler&;

  explicit(false) operator diagnostic_handler&() const;

  [[nodiscard]] auto with_empty_env() const -> compile_ctx;
  [[nodiscard]] auto with_new_binding(std::string_view name) const
    -> std::pair<ir::let_id, compile_ctx>;

  // TODO: Not make this part of `compile_ctx`.
  auto let(std::string name) -> ir::let_id;

  auto get(std::string_view name) const -> std::optional<ir::let_id>;
};

} // namespace tenzir
