//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/plugin.hpp"
#include "tenzir/session.hpp"
#include "tenzir/tql2/ast.hpp"

namespace tenzir {

class operator_factory_plugin : public virtual plugin {
public:
  // Separate from `ast::expression` in case we want to add things.
  struct invocation {
    ast::entity self;
    std::vector<ast::expression> args;
  };

  virtual auto make_operator(invocation inv, session ctx) const -> operator_ptr
    = 0;
};

} // namespace tenzir

namespace tenzir::tql2 {

template <class Operator>
class operator_plugin : public virtual operator_factory_plugin,
                        public virtual operator_inspection_plugin<Operator> {};

class function_plugin : public virtual plugin {
public:
  virtual auto eval(const ast::function_call& self, size_t length,
                    std::vector<series> args, diagnostic_handler& dh) const
    -> series
    = 0;
};

} // namespace tenzir::tql2
