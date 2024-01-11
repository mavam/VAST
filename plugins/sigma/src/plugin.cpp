//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2022 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "sigma/parse.hpp"

#include <tenzir/argument_parser.hpp>
#include <tenzir/arrow_table_slice.hpp>
#include <tenzir/bitmap.hpp>
#include <tenzir/concept/convertible/data.hpp>
#include <tenzir/concept/convertible/to.hpp>
#include <tenzir/concept/parseable/string/char_class.hpp>
#include <tenzir/concept/parseable/tenzir/pipeline.hpp>
#include <tenzir/concept/parseable/to.hpp>
#include <tenzir/data.hpp>
#include <tenzir/error.hpp>
#include <tenzir/io/read.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/table_slice_builder.hpp>

#include <arrow/record_batch.h>
#include <caf/error.hpp>
#include <caf/expected.hpp>
#include <caf/typed_event_based_actor.hpp>
#include <fmt/format.h>

#include <thread>

namespace tenzir::plugins::sigma {

class sigma_operator final : public crtp_operator<sigma_operator> {
public:
  sigma_operator() = default;

  explicit sigma_operator(duration refresh_interval, std::string path)
    : refresh_interval_{refresh_interval}, path_{std::move(path)} {
  }

  struct monitor_state {
    auto update(const std::filesystem::path& path, operator_control_plane& ctrl)
      -> void {
      auto old_rules = std::exchange(rules, {});
      if (std::filesystem::is_directory(path)) {
        for (const auto& entry : std::filesystem::directory_iterator(path)) {
          update(entry.path(), ctrl);
        }
        return;
      }
      if (path.extension() != ".yml" && path.extension() != ".yaml") {
        // We silently ignore non-yaml files.
        return;
      }
      auto query = tenzir::io::read(path);
      if (not query) {
        diagnostic::warning("sigma operator ignores rule '{}'", path.string())
          .note("failed to read file: {}", query.error())
          .emit(ctrl.diagnostics());
      }
      auto query_str = std::string_view{
        reinterpret_cast<const char*>(query->data()),
        reinterpret_cast<const char*>(query->data() + query->size())}; // NOLINT
      auto yaml = from_yaml(query_str);
      if (not yaml) {
        diagnostic::warning("sigma operator ignores rule '{}'", path.string())
          .note("failed to parse yaml: {}", yaml.error())
          .emit(ctrl.diagnostics());
        return;
      }
      auto rule = parse_rule(*yaml);
      if (not rule) {
        diagnostic::warning("sigma operator ignores rule '{}'", path.string())
          .note("failed to parse sigma rule: {}", rule.error())
          .emit(ctrl.diagnostics());
        return;
      }
      rules[path.string()] = {std::move(*yaml), std::move(*rule)};
      for (const auto& [path, rule] : rules) {
        const auto old_rule = old_rules.find(path);
        if (old_rule == old_rules.end()) {
          TENZIR_VERBOSE("added Sigma rule {}", path);
        } else if (old_rule->second != rule) {
          TENZIR_VERBOSE("updated Sigma rule {}", path);
        }
      }
      for (const auto& [path, _] : old_rules) {
        if (not rules.contains(path)) {
          TENZIR_VERBOSE("removed Sigma rule {}", path);
        }
      }
      return;
    }

    std::filesystem::path path;
    std::unordered_map<std::string, std::pair<data, expression>> rules = {};
  };

  auto
  operator()(generator<table_slice> input, operator_control_plane& ctrl) const
    -> generator<table_slice> {
    auto state = monitor_state{};
    state.path = path_;
    state.update(state.path, ctrl);
    auto last_update = std::chrono::steady_clock::now();
    co_yield {}; // signal that we're done initializing
    for (auto&& slice : input) {
      if (slice.rows() == 0) {
        co_yield {};
        continue;
      }
      if (last_update + refresh_interval_ < std::chrono::steady_clock::now()) {
        state.update(state.path, ctrl);
        last_update = std::chrono::steady_clock::now();
      }
      for (const auto& [path, entry] : state.rules) {
        const auto& [yaml, rule] = entry;
        auto expr = bind(rule, slice.schema());
        if (not expr) {
          continue;
        }
        if (auto event = filter(slice, *expr)) {
          const auto rule_schema
            = caf::get<record_type>(type::infer(yaml).value_or(type{}));
          const auto result_schema = type{
            "tenzir.sigma",
            record_type{
              {"event", event->schema()},
              {"rule", rule_schema},
            },
          };
          auto result_builder
            = result_schema.make_arrow_builder(arrow::default_memory_pool());
          auto array = to_record_batch(*event)->ToStructArray().ValueOrDie();
          for (const auto& row :
               values(caf::get<record_type>(slice.schema()), *array)) {
            const auto append_row_result
              = caf::get<arrow::StructBuilder>(*result_builder).Append();
            TENZIR_ASSERT(append_row_result.ok());
            const auto append_event_result = append_builder(
              caf::get<record_type>(event->schema()),
              caf::get<arrow::StructBuilder>(
                *caf::get<arrow::StructBuilder>(*result_builder)
                   .field_builder(0)),
              *row);
            TENZIR_ASSERT(append_event_result.ok());
            const auto append_rule_result = append_builder(
              rule_schema,
              caf::get<arrow::StructBuilder>(
                *caf::get<arrow::StructBuilder>(*result_builder)
                   .field_builder(1)),
              caf::get<view<record>>(make_view(yaml)));
            TENZIR_ASSERT(append_rule_result.ok());
          }
          auto result = result_builder->Finish().ValueOrDie();
          auto rb = arrow::RecordBatch::Make(
            result_schema.to_arrow_schema(), event->rows(),
            caf::get<arrow::StructArray>(*result).fields());
          co_yield table_slice{rb, result_schema};
        }
      }
    }
  }

  auto name() const -> std::string override {
    return "sigma";
  }

  auto location() const -> operator_location override {
    // The operator is referring to files, and the user likely assumes that to
    // be relative to the current process, so we default to local here.
    return operator_location::local;
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)order;
    (void)filter;
    return do_not_optimize(*this);
  }

  friend auto inspect(auto& f, sigma_operator& x) -> bool {
    return f.object(x)
      .pretty_name("sigma_operator")
      .fields(f.field("refresh_interval", x.refresh_interval_),
              f.field("path", x.path_));
  }

private:
  duration refresh_interval_ = {};
  std::string path_ = {};
};

class plugin final : public virtual operator_plugin<sigma_operator> {
  auto signature() const -> operator_signature override {
    return {.transformation = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"sigma", "https://docs.tenzir.com/next/"
                                           "operators/transformations/batch"};
    auto refresh_interval = duration{std::chrono::seconds{5}};
    auto refresh_interval_arg = std::optional<located<std::string>>{};
    auto path = std::string{};
    parser.add("--refresh-interval", refresh_interval_arg,
               "<refresh-interval>");
    parser.add(path, "<rule-or-directory>");
    parser.parse(p);
    if (refresh_interval_arg) {
      if (not parsers::duration(refresh_interval_arg->inner,
                                refresh_interval)) {
        diagnostic::error("refresh interval is not a valid duration")
          .primary(refresh_interval_arg->source)
          .throw_();
      }
    }
    return std::make_unique<sigma_operator>(refresh_interval, std::move(path));
  }
};

} // namespace tenzir::plugins::sigma

TENZIR_REGISTER_PLUGIN(tenzir::plugins::sigma::plugin)
