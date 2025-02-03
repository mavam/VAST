//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2025 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/exec.hpp"
#include "tenzir/finalize_ctx.hpp"
#include "tenzir/ir.hpp"
#include "tenzir/substitute_ctx.hpp"
#include "tenzir/tql2/eval.hpp"

namespace tenzir {

// This shows that we can have the operator spawning logic into the operator
// implementation. However, we can see the problem that the state of the
// operator still needs to account for the partial evaluation of arguments.
// Thus, this is probably not what we actually want.
class easy_operator : public ir::operator_base {
public:
  virtual auto spawn(/*args*/) && -> operator_actor = 0;

  auto finalize(finalize_ctx ctx) && -> failure_or<exec::pipeline> override;
};

class easy_exec final : public exec::operator_base {
public:
  easy_exec() = default;

  auto name() const -> std::string override {
    return "easy_exec";
  }

  explicit easy_exec(ir::operator_ptr impl) : impl_{std::move(impl)} {
    TENZIR_ASSERT(dynamic_cast<easy_operator*>(impl_.get()));
  }

  auto spawn(/*args*/) const -> operator_actor override {
    auto ptr = dynamic_cast<easy_operator*>(&*impl_);
    TENZIR_ASSERT(ptr);
    return std::move(*ptr).spawn(/*args*/);
  }

  friend auto inspect(auto& f, easy_exec& x) -> bool {
    return f.apply(x.impl_);
  }

private:
  // TODO: We store the type-erased version here because of `inspect`.
  ir::operator_ptr impl_;
};

inline auto
easy_operator::finalize(finalize_ctx ctx) && -> failure_or<exec::pipeline> {
  (void)ctx;
  return std::make_unique<easy_exec>(std::move(*this).move());
}

class head_operator final : public easy_operator {
public:
  head_operator() = default;

  explicit head_operator(ast::expression count) : count_{std::move(count)} {
  }

  auto name() const -> std::string override {
    return "head_ir";
  }

  auto substitute(substitute_ctx ctx, bool instantiate)
    -> failure_or<void> override {
    auto expr = try_as<ast::expression>(count_);
    if (not expr) {
      return {};
    }
    TRY(expr->substitute(ctx));
    if (instantiate or expr->is_deterministic(ctx)) {
      TRY(auto value, const_eval(*expr, ctx));
      TRY(count_, match(
                    value,
                    [&](int64_t& x) -> failure_or<int64_t> {
                      return x;
                    },
                    [&](auto&) -> failure_or<int64_t> {
                      diagnostic::error("bad type").primary(*expr).emit(ctx);
                      return failure::promise();
                      // TODO: Handle other numbers.
                    }));
    }
    return {};
  }

  auto spawn() && -> operator_actor override {
    auto count = as<int64_t>(count_);
    TENZIR_WARN("spawning head {}", count);
    TENZIR_TODO();
  }

private:
  variant<ast::expression, int64_t> count_;
};

} // namespace tenzir
