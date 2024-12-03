//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/arrow_time_utils.hpp"
#include "tenzir/arrow_utils.hpp"
#include "tenzir/cast.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/detail/enumerate.hpp"
#include "tenzir/detail/zip_iterator.hpp"
#include "tenzir/series_builder.hpp"
#include "tenzir/tql2/ast.hpp"
#include "tenzir/tql2/eval.hpp"
#include "tenzir/tql2/plugin.hpp"
#include "tenzir/tql2/resolve.hpp"

namespace tenzir::plugins::chart {

TENZIR_ENUM(chart_type, area, bar, line, pie);

namespace {

using bucket = std::vector<std::unique_ptr<aggregation_instance>>;
// Will point to valid strings, as `std::unordered_set` does not invalidate
// pointers on insertion
using grouped_bucket = detail::stable_map<std::string_view, bucket>;
using group_map = std::map<data, grouped_bucket>;
using call_map = detail::stable_map<std::string, ast::function_call>;
using plugins_map
  = std::unordered_multimap<const aggregation_plugin*, ast::function_call>;

struct chart_args {
  chart_type ty;
  ast::simple_selector x;
  call_map y;
  std::optional<ast::expression> group;
  std::optional<std::tuple<data, expression, ast::expression>> xmin;
  std::optional<std::tuple<data, expression, ast::expression>> xmax;
  std::optional<located<duration>> res;
  std::optional<location> x_log;
  std::optional<location> y_log;
  located<std::string> position{"grouped", location::unknown};
  location yloc;
  location oploc;

  friend auto inspect(auto& f, chart_args& x) -> bool {
    return f.object(x)
      .pretty_name("chart_args")
      .fields(f.field("ty", x.ty), f.field("x", x.x), f.field("y", x.y),
              f.field("group", x.group), f.field("xmin", x.xmin),
              f.field("xmax", x.xmax), f.field("res", x.res),
              f.field("x_log", x.x_log), f.field("y_log", x.y_log),
              f.field("position", x.position), f.field("yloc", x.yloc),
              f.field("oploc", x.oploc));
  }

  auto validate(diagnostic_handler& dh, location xmin_loc,
                location xmax_loc) const -> failure_or<void> {
    if (position.inner != "stacked" and position.inner != "grouped") {
      diagnostic::error("unsupported `position`")
        .primary(position)
        .hint("available positions: `grouped` (default) or `stacked`")
        .emit(dh);
      return failure::promise();
    }
    if (xmin and xmax) {
      const auto min_idx = std::get<0>(*xmin).get_data().index();
      const auto max_idx = std::get<0>(*xmax).get_data().index();
      if (min_idx != max_idx) {
        diagnostic::error("`x_min` and `x_max` must have the same type")
          .primary(xmin_loc)
          .primary(xmax_loc)
          .emit(dh);
        return failure::promise();
      }
    }
    return {};
  }

  auto find_plugins(session ctx) const -> plugins_map {
    auto plugins = plugins_map{};
    auto ident = ast::identifier{"once", location::unknown};
    const auto entity = ast::entity{std::vector{std::move(ident)}};
    for (const auto& [_, call] : y) {
      if (auto ptr
          = dynamic_cast<const aggregation_plugin*>(&ctx.reg().get(call))) {
        plugins.emplace(ptr, call);
        continue;
      }
      auto wrapped_call = ast::function_call{entity, {call}, call.rpar, false};
      TENZIR_ASSERT(resolve_entities(wrapped_call, ctx));
      auto ptr
        = dynamic_cast<const aggregation_plugin*>(&ctx.reg().get(wrapped_call));
      TENZIR_ASSERT(ptr);
      plugins.emplace(ptr, std::move(wrapped_call));
    }
    return plugins;
  }

  auto make_bucket(const plugins_map& plugins, session ctx) const -> bucket {
    auto b = bucket{};
    for (const auto& [plugin, arg] : plugins) {
      auto inv = aggregation_plugin::invocation{arg};
      auto instance = plugin->make_aggregation(std::move(inv), ctx);
      TENZIR_ASSERT(instance);
      b.push_back(std::move(instance).unwrap());
    }
    return b;
  }
};

class chart_operator2 final : public crtp_operator<chart_operator2> {
public:
  chart_operator2() = default;

  explicit chart_operator2(chart_args args) : args_{std::move(args)} {
  }

  auto name() const -> std::string override {
    return "tql2.chart";
  }

  auto optimize(const expression& filter, event_order) const
    -> optimize_result override {
    // FIXME: Handle this properly
    auto expr = filter;
    if (args_.xmin) {
      expr = conjunction{std::get<1>(*args_.xmin), std::move(expr)};
    }
    if (args_.xmax) {
      expr = conjunction{std::get<1>(*args_.xmax), std::move(expr)};
    }
    auto combined = normalize_and_validate(expr);
    TENZIR_ASSERT(combined);
    // NOTE: This should technically be `ordered` but since most of our useful
    // aggregations currently are commutative, we can get away with this.
    return {std::move(combined).value(), event_order::unordered, copy()};
  }

  auto
  operator()(generator<table_slice> input, operator_control_plane& ctrl) const
    -> generator<table_slice> {
    // Using a `deque` to guarantee reference validity after growing
    auto ynums = std::deque<std::string>{"y"};
    auto gnames = std::unordered_set<std::string>{};
    auto xpath = args_.x.path()[0].name;
    for (auto i = size_t{1}; i < args_.x.path().size(); ++i) {
      xpath += ".";
      xpath += args_.x.path()[i].name;
    }
    auto& dh = ctrl.diagnostics();
    auto sp = session_provider::make(dh);
    auto s = sp.as_session();
    auto xty = std::optional<type>{};
    auto groups = group_map{};
    const auto plugins = args_.find_plugins(s);
    const auto* null_group = get_groups(groups, caf::none, s);
    if (args_.xmin or args_.xmax) {
      input = filter(std::move(input), dh);
    }
    for (auto&& slice : input) {
      if (slice.rows() == 0) {
        co_yield {};
        continue;
      }
      auto consumed = size_t{};
      auto xs = eval(args_.x, slice, dh);
      auto gs = get_group_strings(slice, dh);
      TENZIR_ASSERT(gs.type.kind().is<string_type>());
      if (not xty) {
        if (not validate_xtype(xs.type, dh)) {
          consumed += xs.length();
          continue;
        }
        xty = xs.type;
      }
      if (xs.type != xty.value()) {
        diagnostic::warning("cannot plot different types `{}` and `{}` on "
                            "the X-axis",
                            xty.value().kind(), xs.type.kind())
          .primary(args_.x)
          .note("skipping invalid events")
          .emit(dh);
        consumed += xs.length();
        continue;
      }
      if (args_.res) {
        xs = floor(xs);
      }
      bucket* b = nullptr;
      for (auto i = size_t{};
           auto&& [idx, x] : detail::enumerate(xs.values())) {
        const auto group_name = std::invoke([&]() -> std::string_view {
          if (gs.array->IsNull(idx)) {
            if (args_.group) {
              diagnostic::warning("got group name `null`")
                .primary(args_.group.value())
                .note("using `\"null\"` instead")
                .emit(dh);
              return "null";
            }
            return "";
          }
          auto&& [it, _]
            = gnames.emplace(value_at(string_type{}, *gs.array, idx));
          return *it;
        });
        auto* newb = get_bucket(groups, plugins, x, group_name, s);
        if (b != newb) {
          if (b) {
            for (auto&& instance : *b) {
              instance->update(subslice(slice, consumed, consumed + i), s);
            }
          }
          b = newb;
          consumed += i;
          i = 0;
        }
        ++i;
      }
      if (b) {
        for (auto&& instance : *b) {
          if (consumed != slice.rows()) {
            instance->update(subslice(slice, consumed, slice.rows()), s);
          }
        }
      }
    }
    if (groups.size() == 1) {
      diagnostic::warning("chart_{} received no valid data",
                          to_string(args_.ty))
        .primary(args_.oploc)
        .emit(dh);
      co_yield {};
      co_return;
    }
    auto ynames = std::unordered_map<std::string, bool>{};
    auto b = series_builder{};
    const data* prev = nullptr;
    const auto add_y = [&](std::string_view group, std::string_view y,
                           bool valid) -> const std::string& {
      auto yname = std::invoke([&] {
        if (not args_.group) {
          return std::string{y};
        }
        if (args_.y.size() == 1) {
          return std::string{group};
        }
        return fmt::format("{}_{}", group, y);
      });
      auto [it, _] = ynames.try_emplace(std::move(yname), valid);
      it->second &= valid;
      return it->first;
    };
    const auto insert = [&](data x, const grouped_bucket& groups) {
      auto r = b.record();
      r.field(xpath).data(std::move(x));
      for (auto&& [name, bucket] : groups) {
        for (auto&& [y, instance] : detail::zip_equal(args_.y, bucket)) {
          auto value = to_double(instance->get());
          auto valid = validate_y(value, y.second.get_location(), dh);
          r.field(add_y(name, y.first, valid)).data(std::move(value));
        }
      }
    };
    if (args_.ty == chart_type::line and args_.xmin) {
      if (auto min = std::get<0>(*args_.xmin); groups.begin()->first != min) {
        insert(min, *null_group);
      }
    }
    for (const auto& [x, gb] : groups) {
      if (null_group == &gb) {
        continue;
      }
      if (args_.ty == chart_type::line and args_.res) {
        if (auto gap = find_gap(x, prev)) {
          insert(std::move(gap).value(), *null_group);
        }
      }
      insert(x, gb);
      prev = &x;
    }
    if (args_.ty == chart_type::line and args_.xmax) {
      if (auto max = std::get<0>(*args_.xmax); groups.end()->first != max) {
        insert(max, *null_group);
      }
    }
    auto slices = b.finish_as_table_slice();
    if (slices.size() > 1) {
      diagnostic::warning("got type conflicts, emitting multiple schemas")
        .emit(dh);
    }
    const auto attrs = make_attributes(xpath, ynums, ynames);
    for (auto&& slice : slices) {
      auto schema = type{slice.schema(), std::vector{attrs}};
      co_yield cast(std::move(slice), schema);
    }
  }

  static auto to_double(data&& d) -> data {
    return match(
      d,
      [](std::integral auto& d) -> data {
        return static_cast<double>(d);
      },
      [](auto& v) -> data {
        return std::move(v);
      });
  }

  auto get_group_strings(const table_slice& slice, diagnostic_handler& dh) const
    -> series {
    if (not args_.group) {
      return series::null(string_type{}, slice.rows());
    }
    auto b = string_type::make_arrow_builder(arrow::default_memory_pool());
    auto gss = eval(args_.group.value(), slice, dh);
    for (auto&& gs : gss) {
      if (gs.type.kind().is<null_type>()) {
        check(b->AppendNulls(gs.length()));
        continue;
      }
      if (auto str = try_as<arrow::StringArray>(*gs.array)) {
        if (gss.parts().size() == 1) {
          return std::move(gs);
        }
        check(append_array(*b, string_type{}, *str));
        continue;
      }
      if (not gs.type.kind()
                .is_any<int64_type, uint64_type, double_type,
                        enumeration_type>()) {
        diagnostic::warning("cannot group type `{}`", gs.type.kind())
          .primary(args_.group.value())
          .emit(dh);
        check(b->AppendNulls(gs.length()));
        continue;
      }
      for (auto&& value : gs.values()) {
        if (is<caf::none_t>(value)) {
          check(b->AppendNull());
          continue;
        }
        const auto f = detail::overload{
          [&](enumeration x) {
            return std::string{as<enumeration_type>(gs.type).field(x)};
          },
          [&](const auto&) {
            return fmt::to_string(value);
          },
        };
        check(b->Append(match(value, f)));
      }
    }
    return series{string_type{}, finish(*b)};
  }

  auto get_groups(group_map& map, const data_view x, session ctx) const
    -> grouped_bucket* {
    // PERF: Maybe we only need to materialize when inserting new
    const auto xv = materialize(x);
    if (auto it = map.find(xv); it != map.end()) {
      return &it->second;
    }
    if (map.size() == 10'000) {
      diagnostic::warning("got more than 10,000 data points")
        .primary(args_.x)
        .note("skipping excess data points")
        .hint(
          "consider filtering data or aggregating over a bigger `resolution`")
        .emit(ctx);
      return nullptr;
    }
    return &map[xv];
  }

  auto get_bucket(group_map& map, const plugins_map& plugins, const data_view x,
                  const std::string_view group, session ctx) const -> bucket* {
    auto gs = get_groups(map, x, ctx);
    if (not gs) {
      return nullptr;
    }
    if (auto it = gs->find(group); it != gs->end()) {
      return &it->second;
    }
    auto [it, _] = gs->emplace(group, args_.make_bucket(plugins, ctx));
    return &it->second;
  }

  auto filter(generator<table_slice> input, diagnostic_handler& dh) const
    -> generator<table_slice> {
    const auto expr = std::invoke([&]() -> ast::expression {
      if (args_.xmin and args_.xmax) {
        return ast::binary_expr{
          std::get<2>(*args_.xmin),
          {ast::binary_op::and_, location::unknown},
          std::get<2>(*args_.xmax),
        };
      }
      if (args_.xmin) {
        return std::get<2>(*args_.xmin);
      }
      TENZIR_ASSERT(args_.xmax);
      return std::get<2>(*args_.xmax);
    });
    for (auto&& slice : input) {
      if (slice.rows() == 0) {
        co_yield {};
        continue;
      }
      const auto fs = eval(expr, slice, dh);
      // Modified from `where`
      auto offset = int64_t{0};
      for (auto& filter : eval(expr, slice, dh)) {
        const auto array = try_as<arrow::BooleanArray>(&*filter.array);
        TENZIR_ASSERT(array);
        const auto len = array->length();
        if (array->true_count() == 0) {
          co_yield {};
          offset += len;
          continue;
        }
        if (array->true_count() == len) {
          co_yield subslice(slice, offset, offset + len);
          offset += len;
          continue;
        }
        auto curr = array->Value(0);
        auto begin = int64_t{0};
        // We add an artificial `false` at index `length` to flush.
        auto results = std::vector<table_slice>{};
        for (auto i = int64_t{1}; i < len + 1; ++i) {
          const auto next = i != len && array->IsValid(i) && array->Value(i);
          if (curr == next) {
            continue;
          }
          if (curr) {
            results.push_back(subslice(slice, offset + begin, offset + i));
          }
          curr = next;
          begin = i;
        }
        co_yield concatenate(std::move(results));
        offset += len;
      }
    }
  }

  auto find_gap(const data& curr, const data* prev) const
    -> std::optional<data> {
    if (not prev) {
      return std::nullopt;
    }
    return match(
      std::tie(curr, *prev),
      [&](const duration& c, const duration& p) -> std::optional<data> {
        if (c - p > args_.res->inner) {
          return p + args_.res->inner;
        }
        return std::nullopt;
      },
      [&](const time& c, const time& p) -> std::optional<data> {
        if (c - p > args_.res->inner) {
          return p + args_.res->inner;
        }
        return std::nullopt;
      },
      [](const auto&, const auto&) -> std::optional<data> {
        TENZIR_UNREACHABLE();
      });
  }

  auto make_attributes(const std::string& xpath, std::deque<std::string>& ynums,
                       std::unordered_map<std::string, bool>& ynames) const
    -> std::vector<type::attribute_view> {
    auto attrs = std::vector<type::attribute_view>{
      {"chart", to_string(args_.ty)},
      {"position", args_.position.inner},
      {"x_axis_type", args_.x_log ? "log" : "linear"},
      {"y_axis_type", args_.y_log ? "log" : "linear"},
      {"x", xpath},
    };
    for (auto i = ynums.size(); i < args_.y.size() or i < ynames.size(); ++i) {
      ynums.emplace_back(fmt::format("y{}", i));
    }
    auto names = std::views::filter(ynames, [](auto&& x) {
      return x.second;
    });
    for (const auto& [num, field] : detail::zip(ynums, names)) {
      attrs.emplace_back(num, field.first);
    }
    return attrs;
    return attrs;
  }

  auto validate_xtype(const type& ty, diagnostic_handler& dh) const -> bool {
    auto valid = ty.kind()
                   .is_any<null_type, int64_type, uint64_type, double_type,
                           duration_type, time_type>();
    if (args_.ty == chart_type::bar or args_.ty == chart_type::pie) {
      valid = valid or ty.kind().is_any<ip_type, subnet_type, string_type>();
    }
    if (not valid) {
      diagnostic::warning("X-axis cannot have type `{}`", ty.kind())
        .note("skipping invalid events")
        .primary(args_.x)
        .emit(dh);
      return false;
    }
    if (args_.res and not ty.kind().is_any<time_type, duration_type>()) {
      diagnostic::warning("cannot group type `{}` with resolution", ty.kind())
        .note("skipping invalid events")
        .primary(args_.x)
        .primary(args_.res->source)
        .emit(dh);
      return false;
    }
    return true;
  }

  auto validate_y(const data& d, tenzir::location loc,
                  diagnostic_handler& dh) const -> bool {
    if (args_.ty == chart_type::line and is<caf::none_t>(d)) {
      return true;
    }
    const auto ty = type::infer(d);
    TENZIR_ASSERT(ty);
    if (not ty->kind()
              .is_any<int64_type, uint64_type, double_type, duration_type>()) {
      diagnostic::warning("Y-axis cannot have type `{}`", ty->kind())
        .primary(std::move(loc))
        .emit(dh);
      return false;
    }
    return true;
  }

  // Modified from `floor()`
  auto floor(const series& xs) const -> series {
    return match(
      *xs.array,
      [&](const arrow::DurationArray& array) -> series {
        auto b
          = duration_type::make_arrow_builder(arrow::default_memory_pool());
        check(b->Reserve(array.length()));
        for (auto i = int64_t{0}; i < array.length(); i++) {
          if (array.IsNull(i)) {
            check(b->AppendNull());
            continue;
          }
          const auto val = array.Value(i);
          const auto count = std::abs(args_.res->inner.count());
          const auto rem = std::abs(val % count);
          if (rem == 0) {
            check(b->Append(val));
            continue;
          }
          const auto floor = val >= 0 ? -rem : rem - count;
          check(b->Append(val + floor));
        }
        return {duration_type{}, finish(*b)};
      },
      [&](const arrow::TimestampArray& array) -> series {
        auto opts = make_round_temporal_options(args_.res->inner);
        return {time_type{},
                check(arrow::compute::FloorTemporal(array, std::move(opts)))
                  .array_as<arrow::TimestampArray>()};
      },
      [&](const auto&) -> series {
        TENZIR_UNREACHABLE();
      });
  }

  friend auto inspect(auto& f, chart_operator2& x) -> bool {
    return f.object(x)
      .pretty_name("chart_operator2")
      .fields(f.field("args_", x.args_));
  }

private:
  chart_args args_;
};

template <chart_type Ty>
class chart_plugin : public virtual operator_plugin2<chart_operator2> {
  auto name() const -> std::string override {
    return fmt::format("chart_{}", to_string(Ty));
  }

  auto make(invocation inv, session ctx) const
    -> failure_or<operator_ptr> override {
    auto args = chart_args{};
    args.ty = Ty;
    args.oploc = inv.self.get_location();
    auto y = ast::expression{};
    auto xmin = std::optional<ast::expression>{};
    auto xmax = std::optional<ast::expression>{};
    auto p = argument_parser2::operator_(name());
    p.named(Ty == chart_type::pie ? "label" : "x", args.x);
    p.named(Ty == chart_type::pie ? "value" : "y", y, "any");
    if constexpr (Ty != chart_type::pie) {
      p.named("x_min", xmin, "constant");
      p.named("x_max", xmax, "constant");
      p.named("resolution", args.res);
      p.named("x_log", args.x_log);
      p.named("y_log", args.y_log);
    }
    p.named("group", args.group, "any");
    if constexpr (Ty == chart_type::area and Ty == chart_type::bar) {
      p.named_optional("position", args.position);
    }
    TRY(p.parse(inv, ctx));
    TRY(handle_y(args, y, ctx));
    if (xmin) {
      TRY(args.xmin, handle_limit(args, ast::binary_op::geq, *xmin, ctx));
    }
    if (xmax) {
      TRY(args.xmax, handle_limit(args, ast::binary_op::leq, *xmax, ctx));
    }
    TRY(args.validate(ctx, xmin ? xmin->get_location() : location::unknown,
                      xmax ? xmax->get_location() : location::unknown));
    return std::make_unique<chart_operator2>(std::move(args));
  }

  auto handle_y(chart_args& args, ast::expression& y, session ctx) const
    -> failure_or<void> {
    auto ident = ast::identifier{"once", location::unknown};
    const auto entity = ast::entity{std::vector{std::move(ident)}};
    args.yloc = y.get_location();
    return match(
      y,
      [&](ast::record& rec) -> failure_or<void> {
        for (auto& i : rec.items) {
          auto* field = try_as<ast::record::field>(i);
          if (not field) {
            diagnostic::error("cannot use `...` here").primary(y).emit(ctx);
            return failure::promise();
          }
          const auto loc = field->expr.get_location();
          TRY(match(
            field->expr,
            [&](ast::function_call& call) -> failure_or<void> {
              args.y[field->name.name] = std::move(call);
              return {};
            },
            [&](auto& expr) -> failure_or<void> {
              if (args.res) {
                diagnostic::error("an aggregation is required")
                  .primary(field->expr)
                  .emit(ctx);
                return failure::promise();
              }
              auto result
                = ast::function_call{entity, {std::move(expr)}, loc, false};
              TENZIR_ASSERT(resolve_entities(result, ctx));
              args.y[field->name.name] = std::move(result);
              return {};
            }));
        }
        return {};
      },
      [&](ast::function_call& call) -> failure_or<void> {
        args.y["y"] = std::move(call);
        return {};
      },
      [&](auto&) -> failure_or<void> {
        if (args.res) {
          diagnostic::error("an aggregation is required").primary(y).emit(ctx);
          return failure::promise();
        }
        const auto loc = y.get_location();
        auto result = ast::function_call{entity, {std::move(y)}, loc, false};
        TENZIR_ASSERT(resolve_entities(result, ctx));
        args.y["y"] = std::move(result);
        return {};
      });
  }

  auto handle_limit(const chart_args& args, ast::binary_op op,
                    const ast::expression& limit, diagnostic_handler& dh) const
    -> failure_or<std::tuple<data, expression, ast::expression>> {
    auto val = const_eval(limit, dh);
    if (not val) {
      return failure::promise();
    }
    auto loc = limit.get_location();
    auto result = match(
      *val,
      [&](const caf::none_t&) -> failure_or<ast::constant> {
        diagnostic::error("limit cannot be `null`").primary(limit).emit(dh);
        return failure::promise();
      },
      [&](const pattern&) -> failure_or<ast::constant> {
        diagnostic::error("limit cannot be a pattern").primary(limit).emit(dh);
        return failure::promise();
      },
      [&](const duration& d) -> failure_or<ast::constant> {
        if (args.res) {
          const auto val = d.count();
          const auto count = std::abs(args.res->inner.count());
          const auto rem = std::abs(val % count);
          if (rem) {
            const auto ceil = val >= 0 ? count - rem : rem;
            const auto floor = val >= 0 ? -rem : rem - count;
            return ast::constant{
              duration{val + (op == ast::binary_op::leq ? floor : ceil)},
              loc,
            };
          }
        }
        return ast::constant{d, loc};
      },
      [&](const time& t) -> failure_or<ast::constant> {
        if (not args.res) {
          return ast::constant{t, loc};
        }
        auto b = time_type::make_arrow_builder(arrow::default_memory_pool());
        check(append_builder(time_type{}, *b, t));
        auto array = finish(*b);
        auto opts = make_round_temporal_options(args.res->inner);
        auto result
          = op == ast::binary_op::leq
              ? check(arrow::compute::FloorTemporal(array, std::move(opts)))
                  .array_as<arrow::TimestampArray>()
              : check(arrow::compute::CeilTemporal(array, std::move(opts)))
                  .array_as<arrow::TimestampArray>();
        TENZIR_ASSERT(result->length() == 1);
        return ast::constant{value_at(time_type{}, *result, 0), loc};
      },
      [&](const auto& d) -> failure_or<ast::constant> {
        return ast::constant{d, loc};
      });
    TRY(auto c, result);
    auto expr = ast::binary_expr{args.x.inner(), {op, loc}, c};
    auto&& [legacy, remainder] = split_legacy_expression(expr);
    return std::tuple{std::move(c).as_data(), std::move(legacy),
                      std::move(remainder)};
  }
};

using chart_area = chart_plugin<chart_type::area>;
using chart_bar = chart_plugin<chart_type::bar>;
using chart_line = chart_plugin<chart_type::line>;
using chart_pie = chart_plugin<chart_type::pie>;

} // namespace

} // namespace tenzir::plugins::chart

TENZIR_REGISTER_PLUGIN(tenzir::plugins::chart::chart_area)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::chart::chart_bar)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::chart::chart_line)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::chart::chart_pie)
