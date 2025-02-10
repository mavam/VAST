//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/arrow_utils.hpp>
#include <tenzir/concept/parseable/tenzir/time.hpp>
#include <tenzir/series_builder.hpp>
#include <tenzir/table_slice_builder.hpp>
#include <tenzir/tql2/plugin.hpp>

#include <arrow/compute/api.h>

namespace tenzir::plugins::duration {

namespace {

class duration_plugin final : public function_plugin {
public:
  auto name() const -> std::string override {
    return "duration";
  }

  auto make_function(invocation inv, session ctx) const
    -> failure_or<function_ptr> override {
    auto expr = ast::expression{};
    TRY(argument_parser2::function(name())
          .positional("x", expr, "string")
          .parse(inv, ctx));
    return function_use::make([expr = std::move(expr)](evaluator eval,
                                                       session ctx) -> series {
      auto b = duration_type::make_arrow_builder(arrow::default_memory_pool());
      check(b->Reserve(eval.length()));
      for (auto& arg : eval(expr)) {
        const auto f = detail::overload{
          [&](const arrow::NullArray& arg) {
            check(b->AppendNulls(arg.length()));
          },
          [&](const arrow::DurationArray& arg) {
            check(append_array(*b, duration_type{}, arg));
          },
          [&](const arrow::StringArray& arg) {
            for (auto i = 0; i < arg.length(); ++i) {
              if (arg.IsNull(i)) {
                check(b->AppendNull());
                continue;
              }
              auto result = tenzir::duration{};
              constexpr auto p = ignore(*parsers::space) >> parsers::duration
                                 >> ignore(*parsers::space);
              if (p(arg.GetView(i), result)) {
                check(b->Append(result.count()));
                continue;
              }
              diagnostic::warning("failed to parse string")
                .primary(expr)
                .note(fmt::format("tried to convert: {}", arg.GetView(i)))
                .emit(ctx);
              check(b->AppendNull());
            }
          },
          [&](const auto&) {
            diagnostic::warning("`duration` expected `string`, but got `{}`",
                                arg.type.kind())
              .primary(expr)
              .emit(ctx);
            check(b->AppendNulls(arg.length()));
          },
        };
        match(*arg.array, f);
      }
      return series{duration_type{}, finish(*b)};
    });
  }
};

class subduration_plugin final : public function_plugin {
public:
  subduration_plugin() = default;

  subduration_plugin(std::string name, tenzir::duration unit)
    : name_{std::move(name)}, unit_{unit} {
  }

  auto name() const -> std::string override {
    return name_;
  }

  auto make_function(invocation inv, session ctx) const
    -> failure_or<function_ptr> override {
    auto expr = ast::expression{};
    TRY(argument_parser2::function(name())
          .positional("x", expr, "duration")
          .parse(inv, ctx));
    return function_use::make([this, expr = std::move(expr)](
                                evaluator eval, session ctx) -> series {
      auto b = double_type::make_arrow_builder(arrow::default_memory_pool());
      check(b->Reserve(eval.length()));
      for (auto& arg : eval(expr)) {
        match(
          *arg.array,
          [&](const arrow::NullArray& arg) {
            check(b->AppendNulls(arg.length()));
          },
          [&](const arrow::DurationArray& arg) {
            for (auto v : values(duration_type{}, arg)) {
              if (not v) {
                check(b->AppendNull());
                continue;
              }
              check(b->Append(static_cast<double>(v->count()) / unit_.count()));
            }
          },
          [&](const auto&) {
            diagnostic::warning("`{}` expected `duration`, but got `{}`", name_,
                                arg.type.kind())
              .primary(expr)
              .emit(ctx);
            check(b->AppendNulls(arg.length()));
          });
      }
      return series{double_type{}, finish(*b)};
    });
  }

private:
  std::string name_;
  tenzir::duration unit_;
};

} // namespace

} // namespace tenzir::plugins::duration

TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::duration_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::subduration_plugin{
  "nanoseconds", std::chrono::nanoseconds{1}})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::subduration_plugin{
  "microseconds", std::chrono::microseconds{1}})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::subduration_plugin{
  "milliseconds", std::chrono::milliseconds{1}})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::subduration_plugin{
  "seconds", std::chrono::seconds{1}})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::subduration_plugin{
  "minutes", std::chrono::minutes{1}})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::subduration_plugin{
  "hours", std::chrono::hours{1}})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::subduration_plugin{
  "days", std::chrono::days{1}})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::subduration_plugin{
  "weeks", std::chrono::weeks{1}})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::subduration_plugin{
  "months", std::chrono::months{1}})
TENZIR_REGISTER_PLUGIN(tenzir::plugins::duration::subduration_plugin{
  "years", std::chrono::years{1}})
