//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/arrow_utils.hpp>
#include <tenzir/tql2/eval.hpp>
#include <tenzir/tql2/plugin.hpp>

#include <arrow/compute/api.h>

namespace tenzir::plugins::string {

namespace {

class starts_or_ends_with : public virtual method_plugin {
public:
  explicit starts_or_ends_with(bool starts_with) : starts_with_{starts_with} {
  }

  auto name() const -> std::string override {
    return starts_with_ ? "starts_with" : "ends_with";
  }

  auto make_function(invocation inv, session ctx) const
    -> failure_or<function_ptr> override {
    auto subject_expr = ast::expression{};
    auto arg_expr = ast::expression{};
    TRY(argument_parser2::method(name())
          .add(subject_expr, "<string>")
          .add(arg_expr, "<string>")
          .parse(inv, ctx));
    // TODO: This shows the need for some abstraction.
    return function_use::make([subject_expr = std::move(subject_expr),
                               arg_expr = std::move(arg_expr),
                               this](evaluator eval, session ctx) -> series {
      auto subject = eval(subject_expr);
      auto arg = eval(arg_expr);
      TENZIR_ASSERT(subject.length() == arg.length());
      auto f = detail::overload{
        [&](const arrow::StringArray& subject, const arrow::StringArray& arg) {
          auto b = arrow::BooleanBuilder{};
          check(b.Reserve(arg.length()));
          for (auto i = int64_t{0}; i < subject.length(); ++i) {
            if (subject.IsNull(i) || arg.IsNull(i)) {
              check(b.AppendNull());
              continue;
            }
            auto result = bool{};
            if (starts_with_) {
              result = subject.Value(i).starts_with(arg.Value(i));
            } else {
              result = subject.Value(i).ends_with(arg.Value(i));
            }
            check(b.Append(result));
          }
          return series{bool_type{}, finish(b)};
        },
        [&](const auto&, const auto&) {
          // TODO: Handle null array. Emit warning.
          TENZIR_UNUSED(ctx);
          return series::null(bool_type{}, subject.length());
        },
      };
      return caf::visit(f, *subject.array, *arg.array);
    });
  }

private:
  bool starts_with_;
};

class trim : public virtual method_plugin {
public:
  explicit trim(std::string name, std::string fn_name)
    : name_{std::move(name)}, fn_name_{std::move(fn_name)} {
  }

  auto name() const -> std::string override {
    return name_;
  }

  auto make_function(invocation inv, session ctx) const
    -> failure_or<function_ptr> override {
    auto subject_expr = ast::expression{};
    auto characters = std::optional<std::string>{};
    TRY(argument_parser2::method(name())
          .add(subject_expr, "<string>")
          .add(characters, "<characters>")
          .parse(inv, ctx));
    auto options = std::optional<arrow::compute::TrimOptions>{};
    if (characters) {
      options.emplace(std::move(*characters));
    }
    auto fn_name = options ? fn_name_ : fmt::format("{}_whitespace", fn_name_);
    return function_use::make(
      [subject_expr = std::move(subject_expr), options = std::move(options),
       fn_name = std::move(fn_name)](evaluator eval, session ctx) -> series {
        auto subject = eval(subject_expr);
        auto f = detail::overload{
          [&](const arrow::StringArray& array) {
            auto trimmed_array = arrow::compute::CallFunction(
              fn_name, {array}, options ? &*options : nullptr);
            if (not trimmed_array.ok()) {
              diagnostic::warning("{}", trimmed_array.status().ToString())
                .primary(subject_expr)
                .emit(ctx);
              return series::null(string_type{}, subject.length());
            }
            return series{string_type{},
                          trimmed_array.MoveValueUnsafe().make_array()};
          },
          [&](const auto&) {
            diagnostic::warning("`trim` expected `string`, but got `{}`",
                                subject.type.kind())
              .primary(subject_expr)
              .emit(ctx);
            return series::null(string_type{}, subject.length());
          },
        };
        return caf::visit(f, *subject.array);
      });
  }

private:
  std::string name_;
  std::string fn_name_;
};

} // namespace

} // namespace tenzir::plugins::string

TENZIR_REGISTER_PLUGIN(tenzir::plugins::string::starts_or_ends_with{true})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::string::starts_or_ends_with{false})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::string::trim{"trim", "utf8_trim"})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::string::trim{"trim_start",
                                                     "utf8_ltrim"})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::string::trim{"trim_end", "utf8_rtrim"})
