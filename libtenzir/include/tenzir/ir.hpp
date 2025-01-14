//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2025 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/diagnostics.hpp"
#include "tenzir/plugin.hpp"
#include "tenzir/tql2/ast.hpp"

#include <vector>

namespace tenzir {

using operator_actor = int;

class instantiate_ctx {
public:
  explicit(false) operator diagnostic_handler&() const {
    TENZIR_TODO();
  }
};

class substitute_ctx {
public:
  auto get(ir::let_id id) const -> std::optional<ast::constant::kind> {
    TENZIR_TODO();
  }

  explicit(false) operator diagnostic_handler&() const {
    TENZIR_TODO();
  }
};

namespace ir {

class instance {
public:
  virtual ~instance() = default;

  // The instance already knows its own configuration. The arguments are just
  // for establishing streams, etc.
  virtual auto spawn(/*args*/) const -> operator_actor {
    TENZIR_TODO();
  }
};

// TODO: Can we inspect this? We probably need to.
using instance_ptr = std::unique_ptr<instance>;

// TODO: Check and reconsider.
class instantiation {
public:
  explicit(false) instantiation(std::vector<instance_ptr> operators)
    : operators_{std::move(operators)} {
  }

  template <std::derived_from<ir::instance> T>
  explicit(false) instantiation(std::unique_ptr<T> ptr) {
    operators_.push_back(std::move(ptr));
  }

  auto begin() {
    return operators_.begin();
  }

  auto end() {
    return operators_.end();
  }

  auto unwrap() && -> std::vector<instance_ptr> {
    return std::move(operators_);
  }

  friend auto inspect(auto& f, instantiation& x) -> bool {
    // TODO: Make `instance_ptr` inspectable.
    return f.apply(x.operators_);
  }

private:
  std::vector<instance_ptr> operators_;
};

class operator_base {
public:
  virtual ~operator_base() = default;

  // There needs to be a matching plugin registered for it, right?
  // Only need this for serialization...
  virtual auto name() const -> std::string {
    TENZIR_TODO();
  }

  virtual auto substitute(substitute_ctx ctx) -> failure_or<void> = 0;

  // TODO: Should this get the type of the input?
  // Or do we get it earlier? Or later?
  virtual auto instantiate(instantiate_ctx ctx) && -> failure_or<instantiation>
    = 0;

  // TODO: Or can we give the optimizer a more global view?
  // virtual auto optimize(/*args*/) -> std::monostate;
};

// Just like `std::unique_ptr`, but copyable!
class operator_ptr {
public:
  ~operator_ptr() = default;
  operator_ptr(const operator_ptr&);
  operator_ptr(operator_ptr&&) = default;
  auto operator=(const operator_ptr&) -> operator_ptr&;
  auto operator=(operator_ptr&&) -> operator_ptr& = default;

  operator_ptr(std::nullptr_t) {
  }

  template <std::derived_from<operator_base> T>
  explicit(false) operator_ptr(std::unique_ptr<T> ptr) : ptr_{std::move(ptr)} {
  }

  operator bool() const {
    return static_cast<bool>(ptr_);
  }

  auto operator->() const -> operator_base* {
    TENZIR_ASSERT(ptr_);
    return ptr_.get();
  }

  auto operator*() const -> operator_base& {
    TENZIR_ASSERT(ptr_);
    return *ptr_;
  }

  friend auto inspect(auto& f, operator_ptr& x) -> bool {
    return plugin_inspect(f, x.ptr_);
  }

private:
  std::unique_ptr<operator_base> ptr_;
};

struct let {
  let(ast::identifier ident, ast::expression expr, let_id id)
    : ident{std::move(ident)}, expr{std::move(expr)}, id{id} {
  }

  friend auto inspect(auto& f, let& x) -> bool {
    return f.object(x).fields(f.field("ident", x.ident),
                              f.field("expr", x.expr), f.field("id", x.id));
  }

  ast::identifier ident;
  ast::expression expr;
  let_id id;
};

struct pipeline_instance {
  std::vector<ir::instance_ptr> operators;
};

// Pre typecheck? We should typecheck the original because of optimizations.
// Let's say we do this:
//
// byte_source
// pass
// where foo == $bar
// ---
// error: operator expected events, but got bytes
//  --> input.tql
//   |
// 3 | where foo == $bar
//   | ^^^^^
//
//
// byte_source
// udo_that_expects_events
//
// error: operator expected events, but got bytes
//  --> udo.tql
//   |
// 7 | where foo == $bar
//   | ^^^^^
//  --> main.tql
//   |
// 2 | udo_that_expects_events
//   | ----------------------- in this UDO
//
// The moment we can store subpipelines in bindings, we run into this, for
// example with `from`.
struct pipeline {
  std::vector<let> lets;
  std::vector<operator_ptr> operators;

  // TODO: Interface superset of `ir::operator_base`?
  auto substitute(substitute_ctx ctx) -> failure_or<void>;

  auto instantiate(instantiate_ctx ctx) && -> failure_or<instantiation>;

  friend auto inspect(auto& f, pipeline& x) -> bool {
    return f.object(x).fields(f.field("lets", x.lets),
                              f.field("operators", x.operators));
  }
};

} // namespace ir

template <>
inline constexpr auto enable_default_formatter<ir::pipeline> = true;

// Plugin name matches `ir::operator_base` above.
class op_thingy_plugin : public plugin {
public:
  // Serialize + Deserialize will be derived from `inspect` of `operator_base`.
  virtual auto serialize(serializer f, ir::operator_base& x) -> bool = 0;

  virtual void
  deserialize(deserializer f, std::unique_ptr<ir::operator_base>& x)
    = 0;

  // This will be derived from `inspect` of `operator_actor`.
  // TODO: Args only ID to fetch from rollback manager?
  virtual auto restore(chunk_ptr data) -> operator_actor = 0;
};

class op_parser_plugin : public plugin {
public:
  // TODO: There are two ways to get early errors:
  // (1) Call this once (with potentially incomplete info), and inform the
  //     partially-parsed operator when something is updated.
  // (2) Call this multiple times, where final one will have complete info.
  //     What happens for something like `head random()`?
  virtual auto compile(ast::invocation inv, compile_ctx ctx)
    -> failure_or<ir::operator_ptr>
    = 0;
};

auto bind(ast::expression& x, compile_ctx ctx) -> failure_or<void>;

/*
def my_custom_operator() {
  let $foo = 42
  custom $foo
}

let $foo = now()

export
where $foo == bar
my_custom_operator
group x {
  // assume operators can inject random variables
  y = $group.x + $foo
}
discard
------------------
Let bindings are hoisted.
- let($foo, now())
- let($foo', 42)

Operators are parsed as far as possible.
- export
- where($foo == bar)
- custom($foo')
- group(x, <ast::pipeline>)
- discard()

For legacy operators: If all constants are resolved (or resolvable?), parse
it. Otherwise keep it as-is and wait for completion of constants.
*/

} // namespace tenzir
