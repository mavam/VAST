//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/argument_parser2.hpp"

#include "tenzir/detail/assert.hpp"
#include "tenzir/detail/enumerate.hpp"
#include "tenzir/tql2/eval.hpp"
#include "tenzir/tql2/exec.hpp"

namespace tenzir {

namespace {

template <class T>
concept data_type = detail::tl_contains_v<data::types, T>;

} // namespace

auto argument_parser2::parse(const operator_factory_plugin::invocation& inv,
                             session ctx) -> failure_or<void> {
  TENZIR_ASSERT(kind_ == kind::op);
  return parse(inv.self, inv.args, ctx);
}

auto argument_parser2::parse(const function_plugin::invocation& inv,
                             session ctx) -> failure_or<void> {
  TENZIR_ASSERT(kind_ != kind::op);
  if (inv.call.subject) {
    auto args = std::vector<ast::expression>{};
    args.reserve(1 + inv.call.args.size());
    args.push_back(*inv.call.subject);
    args.insert(args.end(), inv.call.args.begin(), inv.call.args.end());
    return parse(inv.call.fn, args, ctx);
  }
  return parse(inv.call.fn, inv.call.args, ctx);
}

auto argument_parser2::parse(const ast::function_call& call,
                             session ctx) -> failure_or<void> {
  TENZIR_ASSERT(kind_ != kind::op);
  return parse(call.fn, call.args, ctx);
}

auto argument_parser2::parse(const ast::entity& self,
                             std::span<ast::expression const> args,
                             session ctx) -> failure_or<void> {
  // TODO: Simplify and deduplicate everything in this function.
  auto result = failure_or<void>{};
  auto emit = [&](diagnostic_builder d) {
    if (d.inner().severity == severity::error) {
      result = failure::promise();
    }
    std::move(d).usage(usage()).docs(docs()).emit(ctx);
  };
  auto kind = [](const data& x) -> std::string_view {
    // TODO: Refactor this.
    return caf::visit(
      []<class Data>(const Data&) -> std::string_view {
        if constexpr (caf::detail::is_one_of<Data, pattern>::value) {
          TENZIR_UNREACHABLE();
        } else {
          return to_string(type_kind::of<data_to_type_t<Data>>);
        }
      },
      x);
  };
  auto arg = args.begin();
  auto positional_idx = size_t{0};
  for (auto it = positional_.begin(); it != positional_.end();
       ++it, ++positional_idx) {
    auto& positional = *it;
    if (arg == args.end()) {
      if (first_optional_ && positional_idx >= *first_optional_) {
        break;
      }
      emit(diagnostic::error("expected additional positional argument `{}`",
                             positional.meta)
             .primary(self));
      break;
    }
    auto& expr = *arg;
    if (std::holds_alternative<ast::assignment>(*expr.kind)) {
      break;
    }
    positional.set.match(
      [&]<data_type T>(setter<located<T>>& set) {
        auto value = const_eval(expr, ctx);
        if (not value) {
          result = value.error();
          return;
        }
        // TODO: Make this more beautiful.
        auto storage = T{};
        auto cast = caf::get_if<T>(&*value);
        if constexpr (std::same_as<T, uint64_t>) {
          if (not cast) {
            auto other = caf::get_if<int64_t>(&*value);
            if (other) {
              if (*other < 0) {
                emit(diagnostic::error("expected positive integer, got `{}`",
                                       *other)
                       .primary(expr));
                return;
              }
              storage = *other;
              cast = &storage;
            }
          }
        }
        if (not cast) {
          emit(diagnostic::error("expected argument of type `{}`, but got `{}`",
                                 type_kind::of<data_to_type_t<T>>, kind(*value))
                 .primary(expr));
          return;
        }
        set(located{std::move(*cast), expr.get_location()});
      },
      [&](setter<ast::expression>& set) {
        set(expr);
      },
      [&](setter<ast::simple_selector>& set) {
        auto sel = ast::simple_selector::try_from(expr);
        if (not sel) {
          emit(diagnostic::error("expected a selector").primary(expr));
          return;
        }
        set(std::move(*sel));
      },
      [&](setter<located<pipeline>>& set) {
        auto pipe_expr = std::get_if<ast::pipeline_expr>(&*expr.kind);
        if (not pipe_expr) {
          emit(
            diagnostic::error("expected a pipeline expression").primary(expr));
          return;
        }
        auto pipe = compile(std::move(pipe_expr->inner), ctx);
        if (pipe.is_error()) {
          result = pipe.error();
          return;
        }
        set(located{std::move(pipe).unwrap(), expr.get_location()});
      });
    ++arg;
  }
  for (; arg != args.end(); ++arg) {
    arg->match(
      [&](ast::assignment assignment) {
        auto sel = std::get_if<ast::simple_selector>(&assignment.left);
        if (not sel || sel->has_this() || sel->path().size() != 1) {
          emit(diagnostic::error("invalid name").primary(assignment.left));
          return;
        }
        auto& name = sel->path()[0].name;
        auto it = std::ranges::find(named_, name, &named::name);
        if (it == named_.end()) {
          emit(diagnostic::error("named argument `{}` does not exist", name)
                 .primary(assignment.left));
          return;
        }
        if (it->found) {
          emit(diagnostic::error("duplicate named argument `{}`", name)
                 .primary(*it->found)
                 .primary(arg->get_location()));
          return;
        }
        it->found = arg->get_location();
        auto& expr = assignment.right;
        it->set.match(
          [&]<data_type T>(setter<located<T>>& set) {
            auto value = const_eval(expr, ctx);
            if (not value) {
              result = value.error();
              return;
            }
            auto cast = caf::get_if<T>(&*value);
            if constexpr (std::same_as<T, uint64_t>) {
              if (not cast) {
                auto other = caf::get_if<int64_t>(&*value);
                if (other) {
                  if (*other < 0) {
                    emit(diagnostic::error(
                           "expected positive integer, got `{}`", *other)
                           .primary(expr));
                    return;
                  }
                  value = static_cast<uint64_t>(*other);
                  cast = caf::get_if<T>(&*value);
                }
              }
            }
            if (not cast) {
              // TODO: Attempt conversion.
              emit(diagnostic::error(
                     "expected argument of type `{}`, but got `{}`",
                     type_kind::of<data_to_type_t<T>>, kind(*value))
                     .primary(expr));
              return;
            }
            set(located{std::move(*cast), expr.get_location()});
          },
          [&](setter<ast::expression>& set) {
            set(expr);
          },
          [&](setter<ast::simple_selector>& set) {
            auto sel = ast::simple_selector::try_from(expr);
            if (not sel) {
              emit(diagnostic::error("expected a selector").primary(expr));
              return;
            }
            set(std::move(*sel));
          },
          [&](setter<located<pipeline>>& set) {
            auto pipe_expr = std::get_if<ast::pipeline_expr>(&*expr.kind);
            if (not pipe_expr) {
              emit(diagnostic::error("expected a pipeline expression")
                     .primary(expr));
              return;
            }
            auto pipe = compile(std::move(pipe_expr->inner), ctx);
            if (pipe.is_error()) {
              result = pipe.error();
              return;
            }
            set(located{std::move(pipe).unwrap(), expr.get_location()});
          });
      },
      [&](ast::pipeline_expr pipe_expr) {
        if (positional_idx == positional_.size()) {
          emit(diagnostic::error("did not expect more positional arguments")
                 .primary(*arg));
        }
        positional_[positional_idx].set.match(
          [&](setter<located<pipeline>>& set) {
            auto pipe = compile(std::move(pipe_expr.inner), ctx);
            if (pipe.is_error()) {
              result = pipe.error();
              return;
            }
            set(located{std::move(pipe).unwrap(), pipe_expr.get_location()});
          },
          [&](auto&) {
            TENZIR_UNREACHABLE();
          });
        ++positional_idx;
      },
      [&](auto&) {
        if (positional_idx == positional_.size()) {
          emit(diagnostic::error("unexpected argument").primary(*arg));
        }
      });
  }
  for (const auto& arg : named_) {
    if (arg.required and not arg.found) {
      emit(
        diagnostic::error("required argument `{}` was not provided", arg.name)
          .primary(self.get_location()));
    }
  }
  return result;
}

auto argument_parser2::usage() const -> std::string {
  if (usage_cache_.empty()) {
    if (kind_ == kind::method) {
      TENZIR_ASSERT(not positional_.empty());
      usage_cache_ += positional_[0].meta;
      usage_cache_ += '.';
    }
    usage_cache_ += name_;
    usage_cache_ += kind_ == kind::op ? ' ' : '(';
    auto helps = help();
    auto has_previous = false;
    for (const auto& [idx, opt] : detail::enumerate(helps)) {
      if (idx == 0 and kind_ == kind::method) {
        usage_cache_ += ' ';
        continue;
      }
      if (not opt.name.empty()) {
        if (std::exchange(has_previous, true)) {
          usage_cache_ += ", ";
        }
        usage_cache_ += opt.name + "=";
      }
      usage_cache_ += opt.meta;
      if (not opt.name.empty() and not opt.required) {
        usage_cache_ += "?";
      }
    };

    if (kind_ != kind::op) {
      usage_cache_ += ')';
    }
  }
  return usage_cache_;
}

auto argument_parser2::docs() const -> std::string {
  auto category = std::invoke([&] {
    switch (kind_) {
      case kind::op:
        return "operators";
      case kind::function:
        return "functions";
      case kind::method:
        return "methods";
    }
    TENZIR_UNREACHABLE();
  });
  return fmt::format("https://docs.tenzir.com/{}/{}", category, name_);
}

auto argument_parser2::help() const
  -> std::vector<argument_parser2::help_entry> {
  auto res = std::vector<help_entry>{};

  for (const auto& positional : positional_) {
    res.emplace_back("", positional.meta, *positional.docs, true);
  }
  for (const auto& named : named_) {
    auto meta = named.set.match(
      []<data_type T>(const setter<located<T>>&) {
        return fmt::format("<{}>", type_kind::of<data_to_type_t<T>>);
      },
      [](const setter<ast::expression>&) -> std::string {
        return "<expr>";
      },
      [](const setter<ast::simple_selector>&) -> std::string {
        return "<selector>";
      },
      [](const setter<located<pipeline>>&) -> std::string {
        return "{ ... }";
      });
    res.emplace_back(named.name, std::move(meta), *named.docs, named.required);
  }
  return res;
}

template <argument_parser_type T>
auto argument_parser2::add(T& x, std::string meta) -> argument_parser2& {
  TENZIR_ASSERT(not first_optional_, "encountered required positional after "
                                     "optional positional argument");
  if constexpr (argument_parser_bare_type<T>) {
    positional_.emplace_back(setter<located<T>>{[&x](located<T> y) {
                               x = std::move(y.inner);
                             }},
                             std::move(meta));
  } else {
    positional_.emplace_back(setter<T>{[&x](T y) {
                               x = std::move(y);
                             }},
                             std::move(meta));
  }
  return *this;
}

template <argument_parser_type T>
auto argument_parser2::add(std::optional<T>& x,
                           std::string meta) -> argument_parser2& {
  if (not first_optional_) {
    first_optional_ = positional_.size();
  }
  if constexpr (argument_parser_bare_type<T>) {
    positional_.emplace_back(setter<located<T>>{[&x](located<T> y) {
                               x = std::move(y.inner);
                             }},
                             std::move(meta));
  } else {
    positional_.emplace_back(setter<T>{[&x](T y) {
                               x = std::move(y);
                             }},
                             std::move(meta));
  }
  return *this;
}

template <argument_parser_type T>
auto argument_parser2::add(std::string name, T& x) -> argument_parser2& {
  if constexpr (argument_parser_bare_type<T>) {
    named_.emplace_back(std::move(name), setter<located<T>>{[&x](located<T> y) {
                          x = std::move(y.inner);
                        }},
                        true);
  } else {
    named_.emplace_back(std::move(name), setter<T>{[&x](T y) {
                          x = std::move(y);
                        }},
                        true);
  }
  return *this;
}

template <argument_parser_type T>
auto argument_parser2::add(std::string name,
                           std::optional<T>& x) -> argument_parser2& {
  if constexpr (argument_parser_bare_type<T>) {
    named_.emplace_back(std::move(name), setter<located<T>>{[&x](located<T> y) {
                          x = std::move(y.inner);
                        }});
  } else {
    named_.emplace_back(std::move(name), setter<T>{[&x](T y) {
                          x = std::move(y);
                        }});
  }
  return *this;
}

auto argument_parser2::add(std::string name,
                           std::optional<location>& x) -> add_sentinel {
  named_.emplace_back(std::move(name),
                      setter<located<bool>>{[&x](located<bool> y) {
                        if (y.inner) {
                          x = y.source;
                        } else {
                          x = std::nullopt;
                        }
                      }});
  return {*this, named_.back()};
}

auto argument_parser2::add(std::string name,
                           bool& x) -> argument_parser2::add_sentinel {
  named_.emplace_back(std::move(name),
                      setter<located<bool>>{[&x](located<bool> y) {
                        x = y.inner;
                      }});
  return {*this, named_.back()};
}

argument_parser2::add_sentinel::add_sentinel(argument_parser2& parser,
                                             argument_parser2::positional& p)
  : parser_{parser}, doc_string_{*p.docs} {
}
argument_parser2::add_sentinel::add_sentinel(argument_parser2& parser,
                                             argument_parser2::named& n)
  : parser_{parser}, doc_string_{*n.docs} {
}

template <std::monostate>
struct instantiate_argument_parser_add {
  template <class T>
  using positional
    = auto (argument_parser2::*)(T&, std::string) -> argument_parser2&;

  template <class T>
  using named
    = auto (argument_parser2::*)(std::string, T&) -> argument_parser2&;

  template <class... T>
  struct inner {
    static constexpr auto value = std::tuple{
      static_cast<positional<T>>(&argument_parser2::add)...,
      static_cast<positional<std::optional<T>>>(&argument_parser2::add)...,
      static_cast<named<T>>(&argument_parser2::add)...,
      static_cast<named<std::optional<T>>>(&argument_parser2::add)...,
    };
  };

  static constexpr auto value
    = detail::tl_apply_t<argument_parser_types, inner>::value;
};

template struct instantiate_argument_parser_add<std::monostate{}>;

} // namespace tenzir
