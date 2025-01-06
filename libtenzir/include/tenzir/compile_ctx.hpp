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

// - Emit diagnostics
// - Read access to environment
// - Create new (mutable) environment
class compile_ctx {
public:
  using env_t = std::unordered_map<std::string, ir::let_id>;

  class root {
  public:
    ~root() = default;
    root(const root&) = delete;
    auto operator=(const root&) -> root& = delete;
    root(root&&) = default;
    auto operator=(root&&) -> root& = default;

    operator compile_ctx();

  private:
    friend class compile_ctx;

    explicit root(diagnostic_handler& dh) : dh_{dh} {
    }

    std::reference_wrapper<diagnostic_handler> dh_;
    uint64_t last_let_id_ = 0;
  };

  class scope {
  public:
    auto let(std::string name) -> ir::let_id {
      auto id = new_let_id();
      // TODO: Overwrite?
      (*env_)[std::move(name)] = id;
      return id;
    }

  private:
    friend class compile_ctx;

    scope(std::unique_ptr<env_t> env, root& provider)
      : env_{std::move(env)}, provider_{provider} {
      TENZIR_ASSERT(env_);
    }

    auto new_let_id() -> ir::let_id {
      provider_.last_let_id_ += 1;
      return ir::let_id{provider_.last_let_id_};
    }

    std::unique_ptr<env_t> env_;
    root& provider_;
  };

  static auto make_root(diagnostic_handler& dh) -> root {
    return root{dh};
  }

  auto reg() const -> const registry& {
    return global_registry();
  }

  auto dh() const -> diagnostic_handler& {
    return provider_.dh_;
  }

  explicit(false) operator diagnostic_handler&() const {
    return dh();
  }

  [[nodiscard]] auto without_env() const -> compile_ctx {
    return compile_ctx{provider_, nullptr};
  }

  /// The returned object must be kept alive while `this` is used.
  [[nodiscard]] auto open_scope() -> scope {
    auto new_env = std::make_unique<env_t>(env());
    env_ = new_env.get();
    return scope{std::move(new_env), provider_};
  }

  auto get(std::string_view name) const -> std::optional<ir::let_id> {
    if (not env_) {
      return std::nullopt;
    }
    auto it = env_->find(std::string{name});
    if (it == env_->end()) {
      return {};
    }
    return it->second;
  }

  auto env() const -> std::unordered_map<std::string, ir::let_id> {
    if (not env_) {
      return {};
    }
    return *env_;
  }

private:
  compile_ctx(root& provider,
              const std::unordered_map<std::string, ir::let_id>* env)
    : provider_{provider}, env_{env} {
  }

  root& provider_;
  const std::unordered_map<std::string, ir::let_id>* env_;
};

inline compile_ctx::root::operator compile_ctx() {
  return compile_ctx{*this, nullptr};
}

} // namespace tenzir
