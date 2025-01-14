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
  static auto create_root(diagnostic_handler& dh) -> compile_ctx {
    return compile_ctx{
      std::make_shared<state>(std::make_shared<shared>(dh),
                              std::unordered_map<std::string, ir::let_id>{})};
  }

  auto reg() const -> const registry& {
    return global_registry();
  }

  auto dh() const -> diagnostic_handler& {
    return state_->shared->dh;
  }

  explicit(false) operator diagnostic_handler&() const {
    return dh();
  }

  [[nodiscard]] auto with_empty_env() const -> compile_ctx {
    return compile_ctx{std::make_shared<state>(
      state_->shared, std::unordered_map<std::string, ir::let_id>{})};
  }

  [[nodiscard]] auto with_new_scope() const -> compile_ctx {
    return compile_ctx{std::make_shared<state>(*state_)};
  }

  // [[nodiscard]] auto with_new_binding(std::string_view name) const
  //   -> std::pair<ir::let_id, compile_ctx>;

  // TODO: Not make this part of `compile_ctx`??
  auto let(std::string name) -> ir::let_id {
    auto id = new_let_id();
    // TODO: Overwrite?
    state_->env[std::move(name)] = id;
    return id;
  }

  auto get(std::string_view name) const -> std::optional<ir::let_id> {
    // TODO
    auto it = state_->env.find(std::string{name});
    if (it == state_->env.end()) {
      return {};
    }
    return it->second;
  }

private:
  auto new_let_id() -> ir::let_id {
    state_->shared->last_let_id += 1;
    return ir::let_id{state_->shared->last_let_id};
  }

  struct shared {
    explicit shared(diagnostic_handler& dh) : dh{dh} {
    }

    diagnostic_handler& dh;
    uint64_t last_let_id = 0;
  };

  struct state {
    state(std::shared_ptr<shared> shared,
          std::unordered_map<std::string, ir::let_id> env)
      : shared{std::move(shared)}, env{std::move(env)} {
    }

    std::shared_ptr<shared> shared;
    std::unordered_map<std::string, ir::let_id> env;
  };

  explicit compile_ctx(std::shared_ptr<state> state)
    : state_{std::move(state)} {
  }

  std::shared_ptr<state> state_;
};

} // namespace tenzir
