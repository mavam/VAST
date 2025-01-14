//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2025 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/ir.hpp"

#include "tenzir/compile_ctx.hpp"
#include "tenzir/plugin.hpp"
#include "tenzir/tql2/eval.hpp"
#include "tenzir/tql2/resolve.hpp"

namespace tenzir {

class collect_free_visitor : public ast::visitor<collect_free_visitor> {
public:
  void visit(ast::dollar_var& x) {
    if (std::ranges::find(result_, x.let) == result_.end()) {
      result_.push_back(x.let);
    }
  }

  template <class T>
  void visit(T& x) {
    enter(x);
  }

  auto result() && -> std::vector<ir::let_id> {
    return std::move(result_);
  }

private:
  std::vector<ir::let_id> result_;
};

// TODO: This should be `const&`.
auto collect_free(ast::expression& x) -> std::vector<ir::let_id> {
  auto visitor = collect_free_visitor{};
  visitor.visit(x);
  return std::move(visitor).result();
}

auto make_op_parser() -> ir::operator_ptr;

class head_plugin final : public op_parser_plugin {
public:
  auto compile(ast::invocation inv, compile_ctx ctx)
    -> failure_or<ir::operator_ptr> override {
    // Compiling into IR:
    // - Bind every expression except pipeline expressions.
    // - Compile pipeline expressions to their IR, with new names injected.
    // Should we already do some arg evaluation?
  }
};

class from_plugin final : public op_parser_plugin {
  auto compile(ast::invocation inv, compile_ctx ctx)
    -> failure_or<ir::operator_ptr> override {
    // See if first argument is a string... Sometimes we can only do that on
    // instantiation!
    //
    // from $something {
    //   foo $bar
    //       ^^^^ what is this??
    // }
    //
    // We will just disallow this for now. Every `$` needs to be name-resolved
    // at compile-time, not on instantiation.
  }
};

class group_instance final : public ir::instance {
public:
  group_instance(ast::expression over, ir::pipeline pipe, ir::let_id id)
    : over_{std::move(over)}, pipe_{std::move(pipe)}, id_{id} {
  }

  friend auto inspect(auto& f, group_instance& x) -> bool {
    return f.object(x).fields(f.field("over", x.over_),
                              f.field("pipe", x.pipe_), f.field("id", x.id_));
  }

private:
  auto make_group(data group) const -> failure_or<ir::instantiation> {
    // group test { from $group }
    auto u_ctx = substitute_ctx{
      /*id_ = group*/
    };
    auto copy = pipe_;
    TRY(copy.substitute(u_ctx));
    auto i_ctx = instantiate_ctx{};
    return std::move(copy).instantiate(i_ctx);
  }

  ast::expression over_;
  ir::pipeline pipe_;
  ir::let_id id_;
};

class group_ir final : public ir::operator_base {
public:
  group_ir(ast::expression over, ir::pipeline pipe, ir::let_id id)
    : over_{std::move(over)}, pipe_{std::move(pipe)}, id_{id} {
  }

  auto substitute(substitute_ctx ctx) -> failure_or<void> override {
    TRY(over_.substitute(ctx));
    TRY(pipe_.substitute(ctx));
    return {};
  }

  auto
  instantiate(instantiate_ctx ctx) && -> failure_or<ir::instantiation> override {
    // The inner pipeline is not instantiated here.
    (void)ctx;
    return std::make_unique<group_instance>(std::move(over_), std::move(pipe_),
                                            id_);
  }

  friend auto inspect(auto& f, group_ir& x) -> bool {
    return f.object(x).fields(f.field("over", x.over_),
                              f.field("pipe", x.pipe_), f.field("id", x.id_));
  }

private:
  ast::expression over_;
  ir::pipeline pipe_;
  ir::let_id id_;
};

class group_plugin final : public op_parser_plugin {
public:
  auto compile(ast::invocation inv, compile_ctx ctx)
    -> failure_or<ir::operator_ptr> override {
    TENZIR_ASSERT(inv.args.size() == 2);
    // Here, we "know" that the operator introduces `$group`. Thus, we can
    // compile the `ast::pipeline` with an external reference.
    //
    // auto let_id = ctx.let("group");
    // auto pipe = compile(…, ctx);
    //
    // When we instantiate `pipe`, we have to provide the the missing bindings.
    // The outer `let` things were calculated and can be provided when the outer
    // pipeline was instantiated. The inner `let` bindings are evaluated during
    // instantiation of the inner pipeline. Artificial bindings are controlled
    // by the operator. In the case of `group`, we provide them when we
    // encounter a new group.
    //
    // But what *is* instantiation? Instantiation is when we take the pipeline
    // IR, calculate `let` expressions, substitute (or provide) the results
    // where the bindings are used, spawn the `operator_actor` for all
    // operators, and perform the startup sequence.
    //
    // But maybe that is a bit much, so let's just say instantiation does not
    // include the actual execution. So we can do it without side-effects. That
    // sounds reasonable. So we don't spawn the actors. We do provide all
    // bindings though and make sure that the arguments are accepted.
    //
    // What about type check? Does that rely on substitution? Maybe there is an
    // operator which changes its output type depending on an argument. Then, we
    // could try to type-check before, but maybe we don't know, so we have to
    // type-check at the end of instantiation. That also sounds reasonable.
    auto over = std::move(inv.args[0]);
    TRY(bind(over, ctx));
    ctx = ctx.with_new_scope();
    auto id = ctx.let("group");
    auto pipe = as<ast::pipeline_expr>(inv.args[1]);
    TRY(auto pipe_ir, std::move(pipe.inner).compile(ctx));
    return std::make_unique<group_ir>(std::move(over), std::move(pipe_ir), id);
  }
};

class every_instance final : public ir::instance {
public:
  every_instance(duration interval, ir::pipeline pipe)
    : interval_{interval}, pipe_{std::move(pipe)} {
  }

private:
  // TODO: This needs to be part of the actor, not the instance.
  auto start_new() const -> failure_or<ir::instantiation> {
    auto ctx = instantiate_ctx{};
    return ir::pipeline{pipe_}.instantiate(ctx);
  }

  duration interval_;
  ir::pipeline pipe_;
};

// What if this is only the fully instantiated operator?
//
// I mean, it's at least what we get after instantiation, before actually
// starting the execution... So it could make sense!
class every_ir final : public ir::operator_base {
public:
  every_ir(ast::expression interval, ir::pipeline pipe)
    : interval_{std::move(interval)}, pipe_{std::move(pipe)} {
  }

  // TODO: Are we guaranteed that `substitute` is called at least once before?
  auto
  instantiate(instantiate_ctx ctx) && -> failure_or<ir::instantiation> override {
    // TODO: Test the instantiation of the subpipeline?
    // TRY(auto pipe, tenzir::instantiate(std::move(pipe_), ctx));
    // But in general, instantiation is done later by the actor.
    auto interval = match(
      interval_,
      [](duration interval) {
        return interval;
      },
      [&](ast::expression& expr) -> duration {
        // TODO: Logically, this should not happen, because
        // we are guaranteed to substitute all bindings
        // before instantiation.
        diagnostic::error("bug: this should not happen").primary(expr).emit(ctx);
        // TODO: Find a better way to do this.
        detail::panic("bug");
      });
    return std::make_unique<every_instance>(interval, std::move(pipe_));
  }

  auto substitute(substitute_ctx ctx) -> failure_or<void> override {
    TRY(match(
      interval_,
      [&](ast::expression& expr) -> failure_or<void> {
        TRY(auto result, expr.substitute(ctx));
        // TODO: If everything is substituted, const eval it?
        if (result == ast::substitute_result::no_remaining) {
          TRY(auto value, const_eval(expr, ctx));
          auto cast = try_as<duration>(value);
          if (not cast) {
            diagnostic::error("expected `duration`, got `TODO`")
              .primary(expr)
              .emit(ctx);
            return failure::promise();
          }
          // We can also do some extended validation here...
          if (*cast <= duration::zero()) {
            diagnostic::error("expected a positive duration")
              .primary(expr)
              .emit(ctx);
            return failure::promise();
          }
          interval_ = *cast;
        }
        return {};
      },
      [&](duration&) -> failure_or<void> {
        return {};
      }));
    TRY(pipe_.substitute(ctx));
    return {};
  }

  friend auto inspect(auto& f, every_ir& x) -> bool {
    return f.object(x).fields(f.field("pipe", x.pipe_),
                              f.field("interval", x.interval_));
  }

private:
  variant<ast::expression, duration> interval_;
  ir::pipeline pipe_;
};

class every_plugin final : public op_parser_plugin {
public:
  auto compile(ast::invocation inv, compile_ctx ctx)
    -> failure_or<ir::operator_ptr> override {
    if (inv.args.size() != 2) {
      diagnostic::error("expected exactly two arguments")
        .primary(inv.op)
        .emit(ctx);
      return failure::promise();
    }
    TRY(bind(inv.args[0], ctx));
    auto pipe = as<ast::pipeline_expr>(inv.args[1]);
    TRY(auto pipe_ir, std::move(pipe.inner).compile(ctx));
    return std::make_unique<every_ir>(std::move(inv.args[0]),
                                      std::move(pipe_ir));
  }
};

class binder : public ast::visitor<binder> {
public:
  explicit binder(compile_ctx ctx) : ctx_{ctx} {
  }

  void visit(ast::dollar_var& x) {
    if (auto let = ctx_.get(x.name)) {
      x.let = *let;
    } else {
      diagnostic::error("unknown variable").primary(x).emit(ctx_);
      result_ = failure::promise();
    }
  }

  void visit(ast::pipeline_expr& x) {
    // TODO: What should happen? If `ast::constant` would allow `ir::pipeline`,
    // then we could compile it here. However, what environment do we take?
    diagnostic::error("cannot have pipeline here").primary(x).emit(ctx_);
    result_ = failure::promise();
  }

  template <class T>
  void visit(T& x) {
    enter(x);
  }

  auto result() -> failure_or<void> {
    return result_;
  }

private:
  failure_or<void> result_;
  compile_ctx ctx_;
};

auto bind(ast::expression& x, compile_ctx ctx) -> failure_or<void> {
  auto b = binder{ctx};
  b.visit(x);
  return b.result();
}

class if_instance final : public ir::instance {
public:
  if_instance(ast::expression condition, ir::instantiation then_,
              ir::instantiation else_)
    : condition_{std::move(condition)},
      then_{std::move(then_)},
      else_{std::move(else_)} {
  }

  auto spawn() const -> operator_actor override {
    // TODO
  }

  friend auto inspect(auto& f, if_instance& x) -> bool {
    return f.object(x).fields(f.field("condition", x.condition_),
                              f.field("then", x.then_),
                              f.field("else", x.else_));
  }

private:
  ast::expression condition_;
  ir::instantiation then_;
  ir::instantiation else_;
};

class if_operator final : public ir::operator_base {
public:
  if_operator(ast::expression condition, ir::pipeline then, ir::pipeline else_)
    : condition_{std::move(condition)},
      then_{std::move(then)},
      else_{std::move(else_)} {
  }

  auto substitute(substitute_ctx ctx) -> failure_or<void> override {
    TRY(condition_.substitute(ctx));
    TRY(then_.substitute(ctx));
    TRY(else_.substitute(ctx));
    return {};
  }

  auto
  instantiate(instantiate_ctx ctx) && -> failure_or<ir::instantiation> override {
    TRY(auto then_instance, std::move(then_).instantiate(ctx));
    TRY(auto else_instance, std::move(else_).instantiate(ctx));
    return std::make_unique<if_instance>(std::move(condition_),
                                         std::move(then_instance),
                                         std::move(else_instance));
  }

private:
  ast::expression condition_;
  ir::pipeline then_;
  ir::pipeline else_;
};

auto ast::pipeline::compile(compile_ctx ctx) && -> failure_or<ir::pipeline> {
  // TODO: Or do we assume that entities are already resolved?
  TRY(resolve_entities(*this, ctx));
  auto lets = std::vector<ir::let>{};
  auto operators = std::vector<ir::operator_ptr>{};
  for (auto& stmt : body) {
    auto result = match(
      stmt,
      [&](ast::invocation& x) -> failure_or<void> {
        // If there is a pipeline argument, we can't resolve `let`s before
        // asking the operator what names it exposes. This is also an argument
        // for not resolving names in general before... Or is it?
        // Let's say we don't do name-resolution. Then the operator will receive
        // a non-resolved `ast::dollar_var` somewhere.
        auto udo = false;
        if (udo) {
          // TODO: What about diagnostics that end up here?
          // We need to provide a context that does not feature any outer
          // variables. Maybe if there were arguments.
          auto udo_ctx = ctx.with_empty_env();
          // What if we don't get its IR, but use the AST instead? That would
          // mean that we would have to compile its AST again and again. But
          // that's okay. So we get by with random let ids?
          auto definition = ast::pipeline{};
          TRY(auto pipe, std::move(definition).compile(udo_ctx));
          // If it would have arguments, we need to create appropriate bindings
          // now. For constant arguments, we could bind the parameters to a new
          // `let` that stores that value. For non-constant arguments, if we
          // want to use the same `let` mechanism, then we could introduce a new
          // constant that can store expressions that will be evaluated later.
          lets.insert(lets.end(), std::move_iterator{pipe.lets.begin()},
                      std::move_iterator{pipe.lets.end()});
          operators.insert(operators.begin(),
                           std::move_iterator{pipe.operators.begin()},
                           std::move_iterator{pipe.operators.end()});
        } else {
          auto plugin = static_cast<op_parser_plugin*>(nullptr);
          TRY(auto op, plugin->compile(x, ctx));
          TENZIR_ASSERT(op);
          operators.push_back(std::move(op));
        }
        return {};
      },
      [&](ast::assignment& x) -> failure_or<void> {
        diagnostic::error("assignment is not implemented yet")
          .primary(x)
          .emit(ctx);
        return failure::promise();
      },
      [&](ast::let_stmt& x) -> failure_or<void> {
        TRY(bind(x.expr, ctx));
        ctx = ctx.with_new_scope();
        auto id = ctx.let(x.name.name);
        lets.emplace_back(std::move(x.name), std::move(x.expr), id);
        return {};
      },
      [&](ast::if_stmt& x) -> failure_or<void> {
        TRY(bind(x.condition, ctx));
        TRY(auto then, std::move(x.then).compile(ctx));
        // We just use an empty pipeline if none is given. This has the same
        // behavior as when there is no `else` branch.
        auto else_ = ir::pipeline{};
        if (x.else_) {
          TRY(else_, std::move(*x.else_).compile(ctx));
        }
        operators.emplace_back(std::make_unique<if_operator>(
          std::move(x.condition), std::move(then), std::move(else_)));
        return {};
      },
      [&](ast::match_stmt& x) -> failure_or<void> {
        diagnostic::error("`match` is not implemented yet").primary(x).emit(ctx);
        return failure::promise();
      });
    TRY(result);
  }
  return ir::pipeline{std::move(lets), std::move(operators)};
}

auto ir::pipeline::substitute(substitute_ctx ctx) -> failure_or<void> {
  for (auto& let : lets) {
    TRY(let.expr.substitute(ctx));
  }
  for (auto& op : operators) {
    TRY(op->substitute(ctx));
  }
  return {};
}

auto ir::pipeline::instantiate(
  instantiate_ctx ctx) && -> failure_or<ir::instantiation> {
  // TODO: Does this make sense?
  auto env = std::unordered_map<ir::let_id, ast::constant::kind>{};
  for (auto& let : lets) {
    // We have to update every expression as we evaluate `let`s because later
    // bindings might reference earlier ones.
    auto sub_ctx = substitute_ctx{/*env*/};
    TRY(auto subst, let.expr.substitute(sub_ctx));
    TENZIR_ASSERT(subst == ast::substitute_result::no_remaining);
    TRY(auto value, const_eval(let.expr, ctx));
    // TODO: Clean this up.
    auto converted = match(
      value,
      [](auto& x) -> ast::constant::kind {
        return std::move(x);
      },
      [](pattern&) -> ast::constant::kind {
        TENZIR_UNREACHABLE();
      });
    auto inserted = env.try_emplace(let.id, std::move(converted)).second;
    TENZIR_ASSERT(inserted);
  }
  // Now we first have to update each operator with the produced bindings, and
  // then instantiate it.
  auto result = std::vector<ir::instance_ptr>{};
  for (auto& op : operators) {
    auto sub_ctx = substitute_ctx{/*env*/};
    TRY(op->substitute(sub_ctx));
    TRY(auto ops, std::move(*op).instantiate(ctx));
    result.insert(result.end(), std::move_iterator{ops.begin()},
                  std::move_iterator{ops.end()});
  }
  return std::move(result);
}

class substitutor : ast::visitor<substitutor> {
public:
  explicit substitutor(substitute_ctx ctx) : ctx_{ctx} {
  }

  void visit(ast::expression& x) {
    if (auto var = try_as<ast::dollar_var>(x)) {
      if (auto value = ctx_.get(var->let)) {
        x = ast::constant{std::move(*value), var->get_location()};
      } else {
        result_ = ast::substitute_result::some_remaining;
      }
    }
  }

  // This is handled by the `ast::expression` case.
  void visit(ast::dollar_var&) = delete;

  void visit(ast::pipeline_expr&) {
    // TODO: ?????
    // If `ast::expression` allowed `ir::pipeline`, we could compile the inner
    // pipeline here (or before) and update it. But what would that mean? What
    // would constant evaluation of a pipeline expression return?
  }

  template <class T>
  void visit(T& x) {
    enter(x);
  }

  auto result() const -> ast::substitute_result {
    return result_;
  }

private:
  ast::substitute_result result_ = ast::substitute_result::no_remaining;
  substitute_ctx ctx_;
};

// TODO: Where to put this?
auto ast::expression::substitute(substitute_ctx ctx)
  -> failure_or<substitute_result> {
  auto visitor = substitutor{ctx};
  visitor.visit(*this);
  return visitor.result();
}

} // namespace tenzir
