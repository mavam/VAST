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
  static auto test(diagnostic_handler& dh) -> compile_ctx {
    return compile_ctx{dh};
  }

  auto reg() const -> const registry& {
    return global_registry();
  }

  auto dh() const -> diagnostic_handler& {
    return dh_;
  }

  explicit(false) operator diagnostic_handler&() const {
    return dh();
  }

  // [[nodiscard]] auto with_empty_env() const -> compile_ctx;
  // [[nodiscard]] auto with_new_binding(std::string_view name) const
  //   -> std::pair<ir::let_id, compile_ctx>;

  // TODO: Not make this part of `compile_ctx`.
  auto let(std::string name) -> ir::let_id {
    // TODO
    last_let_id_ += 1;
    return ir::let_id{last_let_id_};
  }

  auto get(std::string_view name) const -> std::optional<ir::let_id> {
    TENZIR_TODO();
  }

private:
  explicit compile_ctx(diagnostic_handler& dh) : dh_{dh} {
  }

  uint64_t last_let_id_ = 0;
  diagnostic_handler& dh_;
};

} // namespace tenzir
