//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/multi_series_builder.hpp"

#include <tenzir/arrow_utils.hpp>
#include <tenzir/checked_math.hpp>
#include <tenzir/collect.hpp>
#include <tenzir/detail/enumerate.hpp>
#include <tenzir/detail/zip_iterator.hpp>
#include <tenzir/series_builder.hpp>
#include <tenzir/table_slice_builder.hpp>
#include <tenzir/tql2/eval_impl.hpp>

#include <ranges>

namespace tenzir {

auto evaluator::eval(const ast::record& x) -> multi_series {
  auto arrays = std::vector<multi_series>{};
  for (auto& item : x.items) {
    arrays.push_back(eval(item.match(
      [&](const ast::record::field& field) {
        return field.expr;
      },
      [&](const ast::spread& spread) {
        return spread.expr;
      })));
  }
  return map_series(arrays, [&](std::span<series> arrays) {
    auto fields = detail::stable_map<std::string, series>{};
    for (auto [array, item] : detail::zip_equal(arrays, x.items)) {
      match(
        item,
        [&](const ast::record::field& field) {
          fields[field.name.name] = std::move(array);
        },
        [&](const ast::spread& spread) {
          auto records = array.as<record_type>();
          if (not records) {
            diagnostic::warning("expected record, got {}", array.type.kind())
              .primary(spread.expr)
              .emit(ctx_);
            return;
          }
          for (auto [i, field_array] :
               detail::enumerate(records->array->fields())) {
            auto field = records->type.field(i);
            fields[field.name] = series{field.type, field_array};
          }
        });
    }
    auto field_names = fields | std::views::transform([](auto& x) {
                         return x.first;
                       });
    auto field_arrays = fields | std::views::transform([](auto& x) {
                          return x.second.array;
                        });
    auto field_types = fields | std::views::transform([](auto& x) {
                         return record_type::field_view{x.first, x.second.type};
                       });
    auto result = make_struct_array(
      length_, nullptr, std::vector(field_names.begin(), field_names.end()),
      std::vector(field_arrays.begin(), field_arrays.end()));
    return series{
      type{record_type{std::vector(field_types.begin(), field_types.end())}},
      std::move(result),
    };
  });
}

auto evaluator::eval(const ast::list& x) -> multi_series {
  auto arrays = std::vector<multi_series>{};
  for (auto& item : x.items) {
    arrays.push_back(match(
      item,
      [&](const ast::expression& expr) {
        return eval(expr);
      },
      [&](const ast::spread& spread) {
        return eval(spread.expr);
      }));
  }
  return map_series(arrays, [&](std::span<series> arrays) -> series {
    using result_t = variant<series, basic_series<list_type>>;
    auto results = std::vector<result_t>{};
    auto value_type = type{null_type{}};
    for (auto [array, item] : detail::zip_equal(arrays, x.items)) {
      item.match(
        [&](const ast::expression& expr) {
          auto unified = unify(value_type, array.type);
          if (unified) {
            value_type = std::move(*unified);
            results.emplace_back(std::move(array));
          } else {
            auto diag
              = diagnostic::warning("type clash in list, using `null` instead")
                  .primary(expr);
            if (value_type.kind() != array.type.kind()) {
              diag = std::move(diag).note("expected `{}` but got `{}`",
                                          value_type.kind(), array.type.kind());
            }
            std::move(diag).emit(ctx_);
            results.emplace_back(series::null(null_type{}, length_));
          }
        },
        [&](const ast::spread& spread) {
          auto list = array.as<list_type>();
          if (not list) {
            diagnostic::warning("expected list, got `{}` instead",
                                array.type.kind())
              .primary(spread.expr)
              .emit(ctx_);
            return;
          }
          auto value_ty = list->type.value_type();
          auto unified = unify(value_type, value_ty);
          if (unified) {
            value_type = std::move(*unified);
            results.emplace_back(std::move(*list));
          } else {
            auto diag
              = diagnostic::warning("type clash in list, discarding items")
                  .primary(spread.expr);
            if (value_type.kind() != value_ty.kind()) {
              diag = std::move(diag).note("expected `{}` but got `{}`",
                                          value_type.kind(), value_ty.kind());
            }
            std::move(diag).emit(ctx_);
          }
        });
    }
    // TODO: Rewrite this, `series_builder` is probably not the right tool.
    auto b = series_builder{type{list_type{value_type}}};
    for (auto row = int64_t{0}; row < length_; ++row) {
      auto l = b.list();
      for (auto& result : results) {
        // TODO: This is not very performant.
        result.match(
          [&](const series& s) {
            l.data(value_at(s.type, *s.array, row));
          },
          [&](const basic_series<list_type>& s) {
            auto& values = s.array->values();
            auto value_ty = s.type.value_type();
            auto begin = s.array->value_offset(row);
            auto end = s.array->value_offset(row + 1);
            for (auto i = begin; i < end; ++i) {
              l.data(value_at(value_ty, *values, i));
            }
          });
      }
    }
    return b.finish_assert_one_array();
  });
}

auto evaluator::eval(const ast::field_access& x) -> multi_series {
  return map_series(eval(x.left), [&](series l) -> series {
    if (auto null = l.as<null_type>()) {
      return std::move(*null);
    }
    auto rec_ty = try_as<record_type>(l.type);
    if (not rec_ty) {
      diagnostic::warning("cannot access field of non-record type")
        .primary(x.name)
        .secondary(x.left, "type `{}`", l.type.kind())
        .emit(ctx_);
      return null();
    }
    auto& s = as<arrow::StructArray>(*l.array);
    for (auto [i, field] : detail::enumerate<int>(rec_ty->fields())) {
      if (field.name == x.name.name) {
        auto has_null = s.null_count() != 0;
        if (has_null) {
          // TODO: It's not 100% obvious that we want to have this warning, but
          // we went with it for now. Note that this can create cascading
          // warnings.
          diagnostic::warning("tried to access field of `null`")
            .primary(x.name)
            .emit(ctx_);
          return series{field.type, check(s.GetFlattenedField(i))};
        }
        return series{field.type, s.field(i)};
      }
    }
    diagnostic::warning("record does not have this field")
      .primary(x.name)
      .emit(ctx_);
    return null();
  });
}

auto evaluator::eval(const ast::function_call& x) -> multi_series {
  // TODO: We parse the function call every time we get a new batch here. We
  // could store the result in the AST if that becomes a problem, but that is
  // also not an optimal solution.
  auto func
    = ctx_.reg().get(x).make_function(function_plugin::invocation{x}, ctx_);
  if (not func) {
    return series::null(null_type{}, length_);
  }
  auto result = (*func)->run(function_use::evaluator{this}, ctx_);
  TENZIR_ASSERT(result.length() == length_);
  return result;
}

auto evaluator::eval(const ast::this_& x) -> multi_series {
  auto& input = input_or_throw(x);
  return series{input.schema(),
                to_record_batch(input)->ToStructArray().ValueOrDie()};
}

auto evaluator::eval(const ast::root_field& x) -> multi_series {
  auto& input = input_or_throw(x);
  auto& rec_ty = as<record_type>(input.schema());
  for (auto [i, field] : detail::enumerate<int>(rec_ty.fields())) {
    if (field.name == x.ident.name) {
      // TODO: Is this correct?
      return series{field.type, to_record_batch(input)->column(i)};
    }
  }
  diagnostic::warning("field `{}` not found", x.ident.name)
    .primary(x.ident)
    .emit(ctx_);
  return null();
}

auto evaluator::eval(const ast::index_expr& x) -> multi_series {
  if (auto constant = try_as<ast::constant>(x.index)) {
    if (auto string = try_as<std::string>(constant->value)) {
      return eval(ast::field_access{
        x.expr,
        x.lbracket,
        ast::identifier{*string, constant->source},
      });
    }
  }
  return map_series(
    eval(x.expr), eval(x.index),
    [&](series value, series index) -> multi_series {
      TENZIR_ASSERT(value.length() == index.length());
      if (auto null = value.as<null_type>()) {
        return std::move(*null);
      }
      if (auto null = index.as<null_type>()) {
        return std::move(*null);
      }
      if (auto str = index.as<string_type>()) {
        auto ty = try_as<record_type>(value.type);
        if (not ty) {
          diagnostic::warning("cannot access field of non-record type")
            .primary(x.index)
            .secondary(x.expr, "type `{}`", value.type.kind())
            .emit(ctx_);
          return null();
        }
        auto& s = as<arrow::StructArray>(*value.array);
        auto b = series_builder{};
        auto result = std::vector<series>{};
        auto last_type = type{null_type{}};
        auto not_found = std::vector<std::string>{};
        auto field_map = detail::heterogeneous_string_hashmap<series>{};
        auto warn_null_record = false;
        auto warn_null_index = false;
        for (auto [i, field] : detail::enumerate<int>(ty->fields())) {
          auto [_, inserted] = field_map.try_emplace(std::string{field.name},
                                                     field.type, s.field(i));
          TENZIR_ASSERT(inserted);
        }
        for (auto i = int64_t{}; i < s.length(); ++i) {
          if (s.IsNull(i)) {
            b.null();
            warn_null_record = true;
            continue;
          }
          if (str->array->IsNull(i)) {
            warn_null_index = true;
            b.null();
            continue;
          }
          auto name = value_at(string_type{}, *str->array, i);
          if (auto it = field_map.find(name); it != field_map.end()) {
            auto& field = it->second;
            if (field.type.kind().is_not<null_type>()
                and field.type != last_type) {
              if (last_type.kind().is_not<null_type>()) {
                // Sad case :(
                result.push_back(b.finish_assert_one_array());
              }
              last_type = field.type;
            }
            auto v = value_at(field.type, *field.array, i);
            b.data(v);
          } else {
            if (std::ranges::find(not_found, name) != not_found.end()) {
              diagnostic::warning("record does not have field '{}'", name)
                .primary(x.index)
                .emit(ctx_);
              not_found.emplace_back(name);
            }
            b.null();
          }
        }
        if (warn_null_record) {
          diagnostic::warning("tried to access field of `null`")
            .primary(x.expr)
            .emit(ctx_);
        }
        if (warn_null_index) {
          diagnostic::warning("cannot use `null` as index")
            .primary(x.index)
            .emit(ctx_);
        }
        result.push_back(b.finish_assert_one_array());
        return multi_series{result};
      }
      if (auto number = index.as<int64_type>()) {
        auto list = value.as<list_type>();
        if (not list) {
          diagnostic::warning("cannot index into `{}` with `{}`",
                              value.type.kind(), index.type.kind())
            .primary(x.index)
            .emit(ctx_);
          return null();
        }
        auto list_values = list->array->values();
        auto value_type = list->type.value_type();
        auto b = value_type.make_arrow_builder(arrow::default_memory_pool());
        check(b->Reserve(list->length()));
        auto out_of_bounds = false;
        auto list_null = false;
        auto number_null = false;
        for (auto i = int64_t{0}; i < list->length(); ++i) {
          if (not list->array->IsValid(i)) {
            list_null = true;
            check(b->AppendNull());
            continue;
          }
          if (not number->array->IsValid(i)) {
            number_null = true;
            check(b->AppendNull());
            continue;
          }
          auto target = number->array->Value(i);
          auto length = list->array->value_length(i);
          if (target < 0) {
            target = length + target;
          }
          if (target < 0 || target >= length) {
            out_of_bounds = true;
            check(b->AppendNull());
            continue;
          }
          auto offset = list->array->value_offset(i);
          auto value_index = offset + target;
          check(
            append_array_slice(*b, value_type, *list_values, value_index, 1));
        }
        if (out_of_bounds) {
          diagnostic::warning("list index out of bounds")
            .primary(x.index)
            .emit(ctx_);
        }
        if (list_null) {
          diagnostic::warning("cannot index into `null`")
            .primary(x.expr)
            .emit(ctx_);
        }
        if (number_null) {
          diagnostic::warning("cannot use `null` as index")
            .primary(x.index)
            .emit(ctx_);
        }
        return series{value_type, finish(*b)};
      }
      return not_implemented(x);
    });
}

auto evaluator::eval(const ast::meta& x) -> multi_series {
  auto& input = input_or_throw(x);
  switch (x.kind) {
    case ast::meta::name:
      return to_series(std::string{input.schema().name()});
    case ast::meta::import_time: {
      auto result = input.import_time();
      if (result == time{}) {
        return series::null(time_type{}, length_);
      }
      return to_series(result);
    }
    case ast::meta::internal:
      return to_series(input.schema().attribute("internal").has_value());
  }
  TENZIR_UNREACHABLE();
}

auto evaluator::eval(const ast::assignment& x) -> multi_series {
  // TODO: What shall happen if we hit this in const eval mode?
  diagnostic::warning("unexpected assignment").primary(x).emit(ctx_);
  return null();
}

auto evaluator::eval(const ast::constant& x) -> multi_series {
  return to_series(x.as_data());
}

auto evaluator::eval(const ast::expression& x) -> multi_series {
  return x.match([&](auto& y) {
    return eval(y);
  });
}

auto evaluator::input_or_throw(into_location location) -> const table_slice& {
  if (not input_) {
    diagnostic::error("expected a constant expression")
      .primary(location)
      .emit(ctx_);
    throw failure::promise();
  }
  return *input_;
}

auto evaluator::to_series(const data& x) const -> series {
  auto b = series_builder{};
  b.data(x);
  auto s = b.finish_assert_one_array();
  return series{
    std::move(s.type),
    check(arrow::MakeArrayFromScalar(*check(s.array->GetScalar(0)), length_)),
  };
}

} // namespace tenzir
