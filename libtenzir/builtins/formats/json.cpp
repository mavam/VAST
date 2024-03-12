//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser.hpp>
#include <tenzir/arrow_table_slice.hpp>
#include <tenzir/cast.hpp>
#include <tenzir/concept/parseable/tenzir/data.hpp>
#include <tenzir/concept/printable/tenzir/json.hpp>
#include <tenzir/config_options.hpp>
#include <tenzir/defaults.hpp>
#include <tenzir/detail/assert.hpp>
#include <tenzir/detail/env.hpp>
#include <tenzir/detail/heterogeneous_string_hash.hpp>
#include <tenzir/detail/padded_buffer.hpp>
#include <tenzir/detail/string_literal.hpp>
#include <tenzir/diagnostics.hpp>
#include <tenzir/generator.hpp>
#include <tenzir/modules.hpp>
#include <tenzir/operator_control_plane.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/series_builder.hpp>
#include <tenzir/to_lines.hpp>
#include <tenzir/tql/parser.hpp>

#include <arrow/record_batch.h>
#include <caf/typed_event_based_actor.hpp>
#include <fmt/format.h>

#include <chrono>
#include <simdjson.h>

namespace tenzir::plugins::json {

namespace {

inline auto split_at_crlf(generator<chunk_ptr> input)
  -> generator<std::optional<simdjson::padded_string_view>> {
  auto buffer = std::string{};
  bool ended_on_carriage_return = false;
  for (auto&& chunk : input) {
    if (!chunk || chunk->size() == 0) {
      co_yield std::nullopt;
      continue;
    }
    const auto* begin = reinterpret_cast<const char*>(chunk->data());
    const auto* const end = begin + chunk->size();
    if (ended_on_carriage_return && *begin == '\n') {
      ++begin;
    };
    ended_on_carriage_return = false;
    for (const auto* current = begin; current != end; ++current) {
      if (*current != '\n' && *current != '\r') {
        continue;
      }
      const auto capacity = static_cast<size_t>(end - begin);
      const auto size = static_cast<size_t>(current - begin);
      if (buffer.empty() and capacity >= size + simdjson::SIMDJSON_PADDING) {
        co_yield simdjson::padded_string_view{begin, size, capacity};
      } else {
        buffer.append(begin, current);
        buffer.reserve(buffer.size() + simdjson::SIMDJSON_PADDING);
        co_yield simdjson::padded_string_view{buffer};
        buffer.clear();
      }
      if (*current == '\r') {
        auto next = current + 1;
        if (next == end) {
          ended_on_carriage_return = true;
        } else if (*next == '\n') {
          ++current;
        }
      }
      begin = current + 1;
    }
    buffer.append(begin, end);
    co_yield std::nullopt;
  }
  if (!buffer.empty()) {
    buffer.reserve(buffer.size() + simdjson::SIMDJSON_PADDING);
    co_yield simdjson::padded_string_view{buffer};
  }
}

inline auto split_at_null(generator<chunk_ptr> input, char split)
  -> generator<std::optional<simdjson::padded_string_view>> {
  auto buffer = std::string{};
  for (auto&& chunk : input) {
    if (!chunk || chunk->size() == 0) {
      co_yield std::nullopt;
      continue;
    }
    const auto* begin = reinterpret_cast<const char*>(chunk->data());
    const auto* const end = begin + chunk->size();
    for (const auto* current = begin; current != end; ++current) {
      if (*current != split) {
        continue;
      }
      const auto size = static_cast<size_t>(current - begin);
      if (size == 0) {
        continue;
      }
      const auto capacity = static_cast<size_t>(end - begin);
      if (buffer.empty() and capacity >= size + simdjson::SIMDJSON_PADDING) {
        co_yield simdjson::padded_string_view{begin, size, capacity};
      } else {
        buffer.append(begin, current);
        buffer.reserve(buffer.size() + simdjson::SIMDJSON_PADDING);
        co_yield simdjson::padded_string_view{buffer};
        buffer.clear();
      }
      begin = current + 1;
    }
    buffer.append(begin, end);
    co_yield std::nullopt;
  }
  if (!buffer.empty()) {
    buffer.reserve(buffer.size() + simdjson::SIMDJSON_PADDING);
    co_yield simdjson::padded_string_view{buffer};
  }
}

enum class parser_action {
  skip = 0,
  yield = 1,
  parse = 2,
};

struct selector {
  std::string prefix;
  std::vector<std::string> path;

  template <class Inspector>
  friend auto inspect(Inspector& f, selector& x) -> bool {
    return f.object(x)
      .pretty_name("selector")
      .fields(f.field("prefix", x.prefix), f.field("path", x.path));
  }
};

constexpr auto unknown_entry_name = std::string_view{};

struct entry_data {
  explicit entry_data(std::string name,
                      std::optional<std::reference_wrapper<const type>> schema)
    : name{std::move(name)},
      builder{schema},
      flushed{std::chrono::steady_clock::now()} {
  }

  auto flush() -> std::vector<table_slice> {
    flushed = std::chrono::steady_clock::now();
    return builder.finish_as_table_slice(
      name == unknown_entry_name ? "tenzir.json" : name);
  }

  std::string name;
  series_builder builder;
  std::chrono::steady_clock::time_point flushed;
};

struct parser_state {
  explicit parser_state(operator_control_plane& ctrl, bool preserve_order)
    : ctrl_{ctrl}, preserve_order{preserve_order} {
  }

  operator_control_plane& ctrl_;
  /// Maps schema names to indices for the `entries` member.
  detail::heterogeneous_string_hashmap<size_t> entry_map;
  /// Stores the schema-specific builders and some additional metadata.
  std::vector<entry_data> entries;
  /// The index of the currently active or last used builder.
  size_t active_entry{};
  /// Used to communicate a need for a co_return in the operator coroutine from
  /// the ndjson parser/default parser coroutine.
  bool abort_requested = false;
  /// If this is false, then the JSON parser is allowed to reorder events
  /// between different schemas.
  bool preserve_order = true;

  auto get_entry(size_t idx) -> entry_data& {
    TENZIR_ASSERT(idx < entries.size());
    return entries[idx];
  }

  auto get_active_entry() -> entry_data& {
    return get_entry(active_entry);
  }

  /// Registers a new entry and returns its index.
  /// @pre An entry with this name must not exist yet.
  auto add_entry(std::string name,
                 std::optional<std::reference_wrapper<const type>> schema
                 = std::nullopt) -> size_t {
    auto index = entries.size();
    auto& entry = entries.emplace_back(std::move(name), schema);
    auto inserted = entry_map.try_emplace(entry.name, index).second;
    TENZIR_ASSERT(inserted);
    return index;
  }

  auto add_entry(std::string_view name,
                 std::optional<std::reference_wrapper<const type>> schema = {})
    -> size_t {
    return add_entry(std::string{name}, schema);
  }

  auto find_entry(std::string_view name) -> std::optional<size_t> {
    auto it = entry_map.find(name);
    if (it == entry_map.end()) {
      return std::nullopt;
    }
    return it->second;
  }

  /// Activates an entry after potentially flushing the active one.
  [[nodiscard]] auto activate(size_t entry)
    -> std::optional<std::vector<table_slice>> {
    if (entry == active_entry) {
      return std::nullopt;
    }
    auto result = std::optional<std::vector<table_slice>>{};
    if (preserve_order) {
      auto slices = get_entry(active_entry).flush();
      if (not slices.empty()) {
        result = std::move(slices);
      }
    }
    active_entry = entry;
    return result;
  }
};

class doc_parser {
public:
  doc_parser(std::string_view parsed_document, operator_control_plane& ctrl,
             bool no_infer, bool raw)
    : parsed_document_{parsed_document},
      ctrl_{ctrl},
      no_infer_{no_infer},
      raw_{raw} {
  }

  doc_parser(std::string_view parsed_document, operator_control_plane& ctrl,
             std::size_t parsed_lines, bool no_infer, bool raw)
    : parsed_document_{parsed_document},
      ctrl_{ctrl},
      parsed_lines_{parsed_lines},
      no_infer_{no_infer},
      raw_{raw} {
  }

  [[nodiscard]] auto parse_object(simdjson::ondemand::value v,
                                  record_ref builder, size_t depth = 0u)
    -> bool {
    auto obj = v.get_object();
    if (obj.error()) {
      report_parse_err(v, "object");
      return false;
    }
    for (auto pair : obj) {
      if (pair.error()) {
        report_parse_err(v, "key value pair");
        return false;
      }
      auto maybe_key = pair.unescaped_key();
      if (maybe_key.error()) {
        report_parse_err(v, "key in an object");
        return false;
      }
      auto key = maybe_key.value_unsafe();
      auto val = pair.value();
      if (val.error()) {
        report_parse_err(val, fmt::format("object value at key {}", key));
        return false;
      }
      auto field = builder.field(key);
      if (no_infer_ and not field.is_protected()) {
        // TODO: Consider whether we want to emit a diagnostic here.
        continue;
      }
      if (not parse_impl(val.value_unsafe(), field, depth + 1)) {
        return false;
      }
    }
    return true;
  }

private:
  void emit_unparsed_json_diagnostics(
    std::string description,
    simdjson::simdjson_result<const char*> document_location) {
    auto document_to_truncate = parsed_document_;
    auto note_prefix = "somewhere in";
    if (not document_location.error()) {
      document_to_truncate = std::string_view{document_location.value_unsafe(),
                                              parsed_document_.end()};
      note_prefix = "at";
    }
    constexpr auto character_limit = 50u;
    if (document_to_truncate.length() > character_limit) {
      diagnostic::warning("failed to parse {} in the JSON document",
                          std::move(description))
        .note("{} {} ...", note_prefix,
              document_to_truncate.substr(0, character_limit))
        .emit(ctrl_.diagnostics());
    }
    diagnostic::warning("failed to parse {} in the JSON document",
                        std::move(description))
      .note("{} {}", note_prefix, document_to_truncate)
      .emit(ctrl_.diagnostics());
  }

  void report_parse_err(auto& v, std::string description) {
    if (parsed_lines_) {
      report_parse_err_with_parsed_lines(v, std::move(description));
      return;
    }
    emit_unparsed_json_diagnostics(std::move(description),
                                   v.current_location());
  }

  void report_parse_err_with_parsed_lines(auto& v, std::string description) {
    if (v.current_location().error()) {
      diagnostic::warning("failed to parse {} in the JSON document",
                          std::move(description))
        .note("line {}", *parsed_lines_)
        .emit(ctrl_.diagnostics());
      return;
    }
    auto column = v.current_location().value_unsafe() - parsed_document_.data();
    diagnostic::warning("failed to parse {} in the JSON document",
                        std::move(description))
      .note("line {} column {}", *parsed_lines_, column)
      .emit(ctrl_.diagnostics());
  }

  [[nodiscard]] auto
  parse_number(simdjson::ondemand::value val, builder_ref builder) -> bool {
    auto kind = simdjson::ondemand::number_type{};
    if (raw_) {
      kind = simdjson::ondemand::number_type::floating_point_number;
    } else {
      auto result = val.get_number_type();
      if (result.error()) {
        report_parse_err(val, "a number");
        return false;
      }
      kind = result.value_unsafe();
    }
    switch (kind) {
      case simdjson::ondemand::number_type::floating_point_number: {
        auto result = val.get_double();
        if (result.error()) {
          report_parse_err(val, "a number");
          return false;
        }
        return add_value(builder, result.value_unsafe());
      }
      case simdjson::ondemand::number_type::signed_integer: {
        auto result = val.get_int64();
        if (result.error()) {
          report_parse_err(val, "a number");
          return false;
        }
        return add_value(builder, result.value_unsafe());
      }
      case simdjson::ondemand::number_type::unsigned_integer: {
        auto result = val.get_uint64();
        if (result.error()) {
          report_parse_err(val, "a number");
          return false;
        }
        return add_value(builder, result.value_unsafe());
      }
      case simdjson::ondemand::number_type::big_integer: {
        // this can fail if the number is too big for a double
        auto result = val.get_double();
        if (result.error()) {
          report_parse_err(val, "a number");
          return false;
        }
        return add_value(builder, result.value_unsafe());
      }
    }
    TENZIR_UNREACHABLE();
  }

  [[nodiscard]] auto
  parse_string(simdjson::ondemand::value val, builder_ref builder) -> bool {
    auto maybe_str = val.get_string();
    if (maybe_str.error()) {
      report_parse_err(val, "a string");
      return false;
    }
    auto str = maybe_str.value_unsafe();
    if (not raw_ and not builder.is_protected()) {
      // Attempt to parse it as data.
      static constexpr auto parser
        = parsers::time | parsers::duration | parsers::net | parsers::ip;
      auto result = std::variant<time, duration, subnet, ip>{};
      if (parser(str, result)) {
        return std::visit(
          [&](auto& value) {
            return add_value(builder, std::move(value));
          },
          result);
      }
    }
    // If this doesn't work, we fall back to a string.
    return add_value(builder, std::string{str});
  }

  [[nodiscard]] auto parse_array(simdjson::ondemand::array arr,
                                 builder_ref builder, size_t depth) -> bool {
    for (auto element : arr) {
      if (element.error()) {
        report_parse_err(element, "an array element");
        return false;
      }
      if (not parse_impl(element.value_unsafe(), builder, depth + 1)) {
        return false;
      }
    }
    return true;
  }

  [[nodiscard]] auto parse_impl(simdjson::ondemand::value val,
                                builder_ref builder, size_t depth) -> bool {
    if (depth > defaults::max_recursion) {
      die("nesting too deep in json_parser parse");
    }
    auto type = val.type();
    if (type.error()) {
      report_parse_err(val, "a value");
      return false;
    }
    switch (type.value_unsafe()) {
      case simdjson::ondemand::json_type::null:
        builder.null();
        return true;
      case simdjson::ondemand::json_type::number:
        return parse_number(val, builder);
      case simdjson::ondemand::json_type::boolean: {
        auto result = val.get_bool();
        if (result.error()) {
          report_parse_err(val, "a boolean value");
          return false;
        }
        return add_value(builder, result.value_unsafe());
      }
      case simdjson::ondemand::json_type::string:
        return parse_string(val, builder);
      case simdjson::ondemand::json_type::array:
        if (builder.is_protected() and builder.kind().is_not<list_type>()) {
          report_parse_err(val, fmt::format("a {}", builder.kind()));
          return false;
        }
        return parse_array(val.get_array().value_unsafe(), builder.list(),
                           depth + 1);
      case simdjson::ondemand::json_type::object:
        if (builder.is_protected() and builder.kind().is_not<record_type>()) {
          report_parse_err(val, fmt::format("a {}", builder.kind()));
          return false;
        }
        return parse_object(val, builder.record(), depth + 1);
    }
    TENZIR_UNREACHABLE();
  }

  [[nodiscard]] auto add_value(builder_ref builder, const data_view2& value)
    -> bool {
    auto result = builder.try_data(value);
    if (not result) {
      diagnostic::warning(result.error()).emit(ctrl_.diagnostics());
      return false;
    }
    return true;
  }

  std::string_view parsed_document_;
  operator_control_plane& ctrl_;
  std::optional<std::size_t> parsed_lines_;
  bool no_infer_;
  bool raw_;
};

auto get_schema_name(simdjson::ondemand::document_reference doc,
                     const selector& selector) -> caf::expected<std::string> {
  auto object = doc.get_value();
  for (const auto& field : selector.path) {
    object = object[field];
  }
  doc.rewind();
  if (auto err = object.error()) {
    if (err != simdjson::error_code::NO_SUCH_FIELD) {
      return caf::make_error(ec::parse_error, error_message(err));
    }
    return std::string{unknown_entry_name};
  }
  auto name = std::string{};
  auto value = object.value_unsafe();
  if (auto string = value.get_string(); string.error() == simdjson::SUCCESS) {
    name = string.value_unsafe();
  } else if (auto int64 = value.get_int64();
             int64.error() == simdjson::SUCCESS) {
    name = fmt::to_string(int64.value_unsafe());
  } else if (auto uint64 = value.get_uint64();
             uint64.error() == simdjson::SUCCESS) {
    name = fmt::to_string(uint64.value_unsafe());
  } else {
    return caf::make_error(ec::parse_error,
                           "expected string or integer for schema name");
  }
  if (selector.prefix.empty()) {
    return name;
  }
  return fmt::format("{}.{}", selector.prefix, name);
}

auto non_empty_entries(parser_state& state)
  -> generator<std::reference_wrapper<entry_data>> {
  if (state.preserve_order) {
    // In that case, only the active builder can be non-empty.
    if (state.get_active_entry().builder.length() > 0) {
      co_yield std::ref(state.get_active_entry());
    }
  } else {
    // Otherwise, builders are not flushed when changing schema. Thus, we have
    // to take a look at every entry.
    for (auto& entry : state.entries) {
      if (entry.builder.length() > 0) {
        co_yield std::ref(entry);
      }
    }
  }
}

auto get_schemas(bool try_find_schema, bool unflatten) -> std::vector<type> {
  if (not try_find_schema) {
    return {};
  }
  if (not unflatten) {
    return modules::schemas();
  }
  auto schemas = modules::schemas();
  std::vector<type> ret;
  std::transform(schemas.begin(), schemas.end(), std::back_inserter(ret),
                 [](const auto& schema) {
                   return flatten(schema);
                 });
  return ret;
}

auto unflatten_if_needed(std::string_view separator, table_slice slice)
  -> table_slice {
  if (separator.empty()) {
    return slice;
  }
  return unflatten(slice, separator);
}

[[nodiscard]] auto activate_unknown_entry(parser_state& state)
  -> std::optional<std::vector<table_slice>> {
  if (auto idx = state.find_entry(unknown_entry_name)) {
    return state.activate(*idx);
  }
  return state.activate(state.add_entry(unknown_entry_name));
}

class parser_base {
public:
  parser_base(operator_control_plane& ctrl, std::optional<selector> selector,
              std::optional<type> schema, std::vector<type> schemas,
              bool no_infer, bool preserve_order, bool raw,
              bool arrays_of_objects)
    : ctrl_{ctrl},
      selector_{std::move(selector)},
      schema_{std::move(schema)},
      schemas_{std::move(schemas)},
      no_infer_{no_infer},
      preserve_order{preserve_order},
      raw_{raw},
      arrays_of_objects_{arrays_of_objects} {
  }

protected:
  auto handle_schema_found(parser_state& state, const type& schema) const
    -> std::optional<std::vector<table_slice>> {
    // The case where this schema exists is already handled before.
    // TODO: infer_types_?
    return state.activate(state.add_entry(schema.name(), schema));
  }

  auto handle_no_matching_schema_found(parser_state& state,
                                       std::string_view schema_name,
                                       std::string_view parsed_doc) const
    -> caf::expected<std::optional<std::vector<table_slice>>> {
    if (no_infer_) {
      return caf::make_error(
        ec::parse_error, fmt::format("json parser failed to find schema for "
                                     "'{}' and skips the "
                                     "JSON object '{}'",
                                     schema_name, parsed_doc));
    }
    // The case where this schema exists is already handled before.
    return state.activate(state.add_entry(schema_name));
  }

  auto handle_schema_name_found(std::string_view schema_name,
                                std::string_view json_source,
                                parser_state& state) const
    -> caf::expected<std::optional<std::vector<table_slice>>> {
    if (auto idx = state.find_entry(schema_name)) {
      return state.activate(*idx);
    }
    auto schema_it
      = std::find_if(schemas_.begin(), schemas_.end(), [&](const auto& schema) {
          return schema.name() == schema_name;
        });
    if (schema_it == schemas_.end()) {
      return handle_no_matching_schema_found(state, schema_name, json_source);
    }
    return {handle_schema_found(state, *schema_it)};
  }

  auto
  handle_with_selector(simdjson::ondemand::document_reference doc_ref,
                       std::string_view json_source, parser_state& state) const
    -> std::pair<parser_action, std::optional<std::vector<table_slice>>> {
    TENZIR_ASSERT(not schema_);
    TENZIR_ASSERT(selector_);
    auto maybe_schema_name = get_schema_name(doc_ref, *selector_);
    if (not maybe_schema_name) {
      diagnostic::warning(maybe_schema_name.error()).emit(ctrl_.diagnostics());
      if (no_infer_) {
        return {parser_action::skip, std::nullopt};
      }
      auto maybe_slice_to_yield = activate_unknown_entry(state);
      if (maybe_slice_to_yield) {
        return {parser_action::yield, std::move(maybe_slice_to_yield)};
      }
      return {parser_action::parse, std::nullopt};
    }
    if (no_infer_ and maybe_schema_name == unknown_entry_name) {
      // TODO: This conflicts with an empty selector field.
      return {parser_action::skip, std::nullopt};
    }
    auto maybe_slice_to_yield
      = handle_schema_name_found(*maybe_schema_name, json_source, state);
    if (maybe_slice_to_yield) {
      if (auto slice = *maybe_slice_to_yield) {
        return {parser_action::yield, std::move(slice)};
      }
      return {parser_action::parse, std::nullopt};
    }
    diagnostic::warning(maybe_slice_to_yield.error()).emit(ctrl_.diagnostics());
    return {parser_action::skip, std::nullopt};
  }

  auto handle_selector(simdjson::ondemand::document_reference doc_ref,
                       std::string_view json_source, parser_state& state) const
    -> std::pair<parser_action, std::optional<std::vector<table_slice>>> {
    if (not selector_) {
      return {parser_action::parse, std::nullopt};
    }
    return handle_with_selector(doc_ref, json_source, state);
  }

  auto handle_max_rows(parser_state& state) const
    -> std::optional<std::vector<table_slice>> {
    if (state.get_active_entry().builder.length() < max_table_slice_rows_) {
      return std::nullopt;
    }
    return state.get_active_entry().flush();
  }

  operator_control_plane& ctrl_;
  std::optional<selector> selector_;
  std::optional<type> schema_;
  std::vector<type> schemas_;
  bool no_infer_ = false;
  bool preserve_order = true;
  bool raw_ = false;
  bool arrays_of_objects_ = false;
  simdjson::ondemand::parser parser_;
  // TODO: change max table slice size to be fetched from options.
  int64_t max_table_slice_rows_ = defaults::import::table_slice_size;
};

class ndjson_parser final : public parser_base {
public:
  using parser_base::parser_base;

  auto parse(simdjson::padded_string_view json_line, parser_state& state)
    -> generator<table_slice> {
    ++lines_processed_;
    auto maybe_doc = this->parser_.iterate(json_line);
    auto val = maybe_doc.get_value();
    // val.error() will inherit all errors from maybe_doc. No need to check
    // for error after each operation.
    if (auto err = val.error()) {
      diagnostic::warning("{}", error_message(err))
        .note("skips invalid JSON `{}`", json_line)
        .emit(this->ctrl_.diagnostics());
      co_return;
    }
    auto& doc = maybe_doc.value_unsafe();
    auto [action, slices] = this->handle_selector(doc, json_line, state);
    switch (action) {
      case parser_action::parse:
        break;
      case parser_action::skip:
        co_return;
      case parser_action::yield:
        TENZIR_ASSERT(slices);
        for (auto& slice : *slices) {
          co_yield std::move(slice);
        }
    }
    auto& builder = state.get_active_entry().builder;
    auto success
      = doc_parser{json_line, this->ctrl_, lines_processed_, no_infer_, raw_}
          .parse_object(val.value_unsafe(), builder.record());
    // After parsing one JSON object it is expected for the result to be at
    // the end. If it's otherwise then it means that a line contains more than
    // one object in which case we don't add any data and emit a warning.
    // It is also possible for a parsing failure to occurr in doc_parser. the
    // is_alive() call ensures that the first object was parsed without
    // errors. Calling at_end() when is_alive() returns false is unsafe and
    // resulted in crashes.
    if (success and not doc.at_end()) {
      diagnostic::warning(
        "encountered more than one JSON object in a single NDJSON line")
        .note("skips remaining objects in line `{}`", json_line)
        .emit(this->ctrl_.diagnostics());
      success = false;
    }
    if (not success) {
      // We already reported the issue.
      builder.remove_last();
      co_return;
    }
    if (auto slices = this->handle_max_rows(state)) {
      for (auto& slice : *slices) {
        co_yield std::move(slice);
      }
    }
  }

  void finish(parser_state&) {
    // Nothing to validate here.
  }

private:
  std::size_t lines_processed_ = 0u;
};

class default_parser final : public parser_base {
public:
  using parser_base::parser_base;

  auto parse(const chunk& json_chunk, parser_state& state)
    -> generator<table_slice> {
    buffer_.append(
      {reinterpret_cast<const char*>(json_chunk.data()), json_chunk.size()});
    auto view = buffer_.view();
    auto err = this->parser_
                 .iterate_many(view.data(), view.length(),
                               simdjson::ondemand::DEFAULT_BATCH_SIZE)
                 .get(stream_);
    if (err) {
      // For the simdjson 3.1 it seems impossible to have an error
      // returned here so it is hard to understand if we can recover from
      // it somehow.
      buffer_.reset();
      diagnostic::warning("{}", error_message(err))
        .note("failed to parse")
        .emit(this->ctrl_.diagnostics());
      co_return;
    }
    for (auto doc_it = stream_.begin(); doc_it != stream_.end(); ++doc_it) {
      // doc.error() will inherit all errors from *doc_it and get_value.
      // No need to check after each operation.
      auto doc = (*doc_it).get_value();
      if (auto err = doc.error()) {
        state.abort_requested = true;
        diagnostic::error("{}", error_message(err))
          .note("skips invalid JSON '{}'", view)
          .emit(this->ctrl_.diagnostics());
        co_return;
      }
      auto [action, slices]
        = this->handle_selector(*doc_it, doc_it.source(), state);
      switch (action) {
        case parser_action::skip:
          continue;
        case parser_action::parse:
          break;
        case parser_action::yield:
          TENZIR_ASSERT(slices);
          for (auto& slice : *slices) {
            co_yield std::move(slice);
          }
      }
      auto& builder = state.get_active_entry().builder;
      if (arrays_of_objects_) {
        auto arr = doc.value_unsafe().get_array();
        if (arr.error()) {
          state.abort_requested = true;
          diagnostic::error("{}", error_message(err))
            .note("expected an array of objects")
            .emit(this->ctrl_.diagnostics());
          co_return;
        }
        for (auto&& elem : arr.value_unsafe()) {
          auto row = builder.record();
          auto success
            = doc_parser{doc_it.source(), this->ctrl_, no_infer_, raw_}
                .parse_object(elem.value_unsafe(), row);
          if (not success) {
            // We already reported the issue.
            builder.remove_last();
            continue;
          }
        }
      } else {
        auto row = builder.record();
        auto success = doc_parser{doc_it.source(), this->ctrl_, no_infer_, raw_}
                         .parse_object(doc.value_unsafe(), row);
        if (not success) {
          // We already reported the issue.
          builder.remove_last();
          continue;
        }
      }
      if (auto slices = this->handle_max_rows(state)) {
        for (auto& slice : *slices) {
          co_yield std::move(slice);
        }
      }
    }
    handle_truncated_bytes(state);
  }

  void finish(parser_state& state) {
    if (not buffer_.view().empty()) {
      diagnostic::error("parser input ended with incomplete object")
        .emit(ctrl_.diagnostics());
      state.abort_requested = true;
    }
  }

private:
  auto handle_truncated_bytes(parser_state& state) -> void {
    auto truncated_bytes = stream_.truncated_bytes();
    if (truncated_bytes == 0) {
      buffer_.reset();
      return;
    }
    // Likely not needed, but should be harmless. Needs additional
    // investigation in the future.
    if (truncated_bytes > buffer_.view().size()) {
      state.abort_requested = true;
      diagnostic::error("detected malformed JSON")
        .note("in input '{}'", buffer_.view())
        .emit(this->ctrl_.diagnostics());
      return;
    }
    buffer_.truncate(truncated_bytes);
  }

  // The simdjson suggests to initialize the padding part to either 0s or
  // spaces.
  detail::padded_buffer<simdjson::SIMDJSON_PADDING, '\0'> buffer_;
  simdjson::ondemand::document_stream stream_;
};

template <class GeneratorValue>
auto make_parser(generator<GeneratorValue> json_chunk_generator,
                 operator_control_plane& ctrl, std::string separator,
                 std::optional<type> schema, bool preserve_order,
                 auto parser_impl) -> generator<table_slice> {
  auto state = parser_state{ctrl, preserve_order};
  if (schema) {
    // TODO: What about `infer_types`?
    state.active_entry = state.add_entry(schema->name(), *schema);
  } else {
    state.active_entry = state.add_entry(unknown_entry_name);
  }
  // After this point, we always have an active entry.
  for (auto chnk : json_chunk_generator) {
    // Flush builders if their timeout has expired.
    auto now = std::chrono::steady_clock::now();
    for (auto&& entry_ref : non_empty_entries(state)) {
      auto& entry = entry_ref.get();
      if (now > entry.flushed + defaults::import::batch_timeout) {
        for (auto& slice : entry.flush()) {
          co_yield unflatten_if_needed(separator, std::move(slice));
        }
      }
    }
    if (not chnk or chnk->size() == 0u) {
      co_yield {};
      continue;
    }
    // This also flushes the builder if they grow over the threshold.
    for (auto slice : parser_impl.parse(*chnk, state)) {
      co_yield unflatten_if_needed(separator, std::move(slice));
    }
    if (state.abort_requested) {
      co_return;
    }
  }
  parser_impl.finish(state);
  if (state.abort_requested) {
    co_return;
  }
  // Flush all entries.
  for (auto&& entry : non_empty_entries(state)) {
    for (auto& slice : entry.get().flush()) {
      co_yield unflatten_if_needed(separator, std::move(slice));
    }
  }
}

auto parse_selector(std::string_view x, location source) -> selector {
  auto split = detail::split(x, ":");
  TENZIR_ASSERT(!x.empty());
  if (split.size() > 2 or split[0].empty()) {
    diagnostic::error("invalid selector `{}`: must contain at most "
                      "one `:` and field name must "
                      "not be empty",
                      x)
      .primary(source)
      .throw_();
  }
  auto path = std::vector<std::string>{};
  for (auto field : detail::split(split[0], ".")) {
    path.emplace_back(field);
  }
  auto prefix = split.size() == 2 ? std::string{split[1]} : "";
  return selector{std::move(prefix), std::move(path)};
}

struct parser_args {
  std::optional<struct selector> selector;
  std::optional<located<std::string>> schema;
  std::string unnest_separator;
  std::optional<location> no_infer;
  bool use_gelf_mode = false;
  bool use_ndjson_mode = false;
  bool preserve_order = true;
  bool raw = false;
  bool arrays_of_objects = false;

  template <class Inspector>
  friend auto inspect(Inspector& f, parser_args& x) -> bool {
    return f.object(x)
      .pretty_name("parser_args")
      .fields(f.field("selector", x.selector), f.field("schema", x.schema),
              f.field("unnest_separator", x.unnest_separator),
              f.field("no_infer", x.no_infer),
              f.field("use_gelf_mode", x.use_gelf_mode),
              f.field("use_ndjson_mode", x.use_ndjson_mode),
              f.field("preserve_order", x.preserve_order),
              f.field("raw", x.raw),
              f.field("arrays_of_objects", x.arrays_of_objects));
  }
};

void add_common_options_to_parser(argument_parser& parser, parser_args& args) {
  // TODO: Rename this option.
  parser.add("--no-infer", args.no_infer);
}

class json_parser final : public plugin_parser {
public:
  json_parser() = default;

  explicit json_parser(parser_args args) : args_{std::move(args)} {
  }

  auto name() const -> std::string override {
    return "json";
  }

  auto optimize(event_order order) -> std::unique_ptr<plugin_parser> override {
    auto args = args_;
    args.preserve_order = order == event_order::ordered;
    return std::make_unique<json_parser>(std::move(args));
  }

  auto
  instantiate(generator<chunk_ptr> input, operator_control_plane& ctrl) const
    -> std::optional<generator<table_slice>> override {
    auto schemas
      = get_schemas(args_.schema.has_value() or args_.selector.has_value(),
                    not args_.unnest_separator.empty());
    auto schema = std::optional<type>{};
    if (args_.schema) {
      const auto found
        = std::find_if(schemas.begin(), schemas.end(), [&](const type& schema) {
            for (const auto& name : schema.names()) {
              if (name == args_.schema->inner) {
                return true;
              }
            }
            return false;
          });
      if (found == schemas.end()) {
        diagnostic::error("failed to find schema `{}`", args_.schema->inner)
          .primary(args_.schema->source)
          // TODO: Refer to the show operator once we have that.
          .note("use `tenzir show schemas` to show all available schemas")
          .emit(ctrl.diagnostics());
        return {};
      }
      schema = *found;
    }
    if (args_.use_ndjson_mode and args_.use_gelf_mode) {
      diagnostic::error("options `--ndjson` and `--gelf` are incompatible")
        .emit(ctrl.diagnostics());
      return {};
    }
    if (args_.use_ndjson_mode and args_.arrays_of_objects) {
      diagnostic::error(
        "options `--ndjson` and `--arrays-of-objects` are incompatible")
        .emit(ctrl.diagnostics());
      return {};
    }
    if (args_.use_gelf_mode and args_.arrays_of_objects) {
      diagnostic::error(
        "options `--gelf` and `--arrays-of-objects` are incompatible")
        .emit(ctrl.diagnostics());
      return {};
    }
    if (args_.use_ndjson_mode) {
      return make_parser(split_at_crlf(std::move(input)), ctrl,
                         args_.unnest_separator, schema, args_.preserve_order,
                         ndjson_parser{
                           ctrl,
                           args_.selector,
                           schema,
                           std::move(schemas),
                           args_.no_infer.has_value(),
                           args_.preserve_order,
                           args_.raw,
                           args_.arrays_of_objects,
                         });
    }
    if (args_.use_gelf_mode) {
      return make_parser(split_at_null(std::move(input), '\0'), ctrl,
                         args_.unnest_separator, schema, args_.preserve_order,
                         ndjson_parser{
                           ctrl,
                           args_.selector,
                           schema,
                           std::move(schemas),
                           args_.no_infer.has_value(),
                           args_.preserve_order,
                           args_.raw,
                           args_.arrays_of_objects,
                         });
    }
    return make_parser(std::move(input), ctrl, args_.unnest_separator, schema,
                       args_.preserve_order,
                       default_parser{
                         ctrl,
                         args_.selector,
                         schema,
                         std::move(schemas),
                         args_.no_infer.has_value(),
                         args_.preserve_order,
                         args_.raw,
                         args_.arrays_of_objects,
                       });
  }

  friend auto inspect(auto& f, json_parser& x) -> bool {
    return f.apply(x.args_);
  }

private:
  parser_args args_;
};

struct printer_args {
  std::optional<location> compact_output;
  std::optional<location> color_output;
  std::optional<location> monochrome_output;
  std::optional<location> omit_empty;
  std::optional<location> omit_nulls;
  std::optional<location> omit_empty_objects;
  std::optional<location> omit_empty_lists;

  template <class Inspector>
  friend auto inspect(Inspector& f, printer_args& x) -> bool {
    return f.object(x)
      .pretty_name("printer_args")
      .fields(f.field("compact_output", x.compact_output),
              f.field("color_output", x.color_output),
              f.field("monochrome_output", x.monochrome_output),
              f.field("omit_empty", x.omit_empty),
              f.field("omit_nulls", x.omit_nulls),
              f.field("omit_empty_objects", x.omit_empty_objects),
              f.field("omit_empty_lists", x.omit_empty_lists));
  }
};

class json_printer final : public plugin_printer {
public:
  json_printer() = default;

  explicit json_printer(printer_args args) : args_{std::move(args)} {
  }

  auto name() const -> std::string override {
    return "json";
  }

  auto instantiate(type, operator_control_plane&) const
    -> caf::expected<std::unique_ptr<printer_instance>> override {
    const auto compact = !!args_.compact_output;
    auto style = default_style();
    if (args_.monochrome_output) {
      style = no_style();
    } else if (args_.color_output) {
      style = jq_style();
    }
    const auto omit_nulls
      = args_.omit_nulls.has_value() or args_.omit_empty.has_value();
    const auto omit_empty_objects
      = args_.omit_empty_objects.has_value() or args_.omit_empty.has_value();
    const auto omit_empty_lists
      = args_.omit_empty_lists.has_value() or args_.omit_empty.has_value();
    auto meta = chunk_metadata{.content_type = compact ? "application/x-ndjson"
                                                       : "application/json"};
    return printer_instance::make(
      [compact, style, omit_nulls, omit_empty_objects, omit_empty_lists,
       meta = std::move(meta)](table_slice slice) -> generator<chunk_ptr> {
        if (slice.rows() == 0) {
          co_yield {};
          co_return;
        }
        auto printer = tenzir::json_printer{{
          .style = style,
          .oneline = compact,
          .omit_nulls = omit_nulls,
          .omit_empty_records = omit_empty_objects,
          .omit_empty_lists = omit_empty_lists,
        }};
        // TODO: Since this printer is per-schema we can write an optimized
        // version of it that gets the schema ahead of time and only expects
        // data corresponding to exactly that schema.
        auto buffer = std::vector<char>{};
        auto resolved_slice = resolve_enumerations(slice);
        auto out_iter = std::back_inserter(buffer);
        for (const auto& row : resolved_slice.values()) {
          const auto ok = printer.print(out_iter, row);
          TENZIR_ASSERT(ok);
          out_iter = fmt::format_to(out_iter, "\n");
        }
        auto chunk = chunk::make(std::move(buffer), meta);
        co_yield std::move(chunk);
      });
  }

  auto allows_joining() const -> bool override {
    return true;
  };

  friend auto inspect(auto& f, json_printer& x) -> bool {
    return f.apply(x.args_);
  }

private:
  printer_args args_;
};

class plugin final : public virtual parser_plugin<json_parser>,
                     public virtual printer_plugin<json_printer> {
public:
  auto name() const -> std::string override {
    return "json";
  }

  auto parse_parser(parser_interface& p) const
    -> std::unique_ptr<plugin_parser> override {
    auto args = parser_args{};
    auto selector = std::optional<located<std::string>>{};
    auto parser
      = argument_parser{name(), "https://docs.tenzir.com/next/formats/json"};
    parser.add("--selector", selector, "<selector>");
    parser.add("--schema", args.schema, "<schema>");
    parser.add("--unnest-separator", args.unnest_separator, "<separator>");
    add_common_options_to_parser(parser, args);
    parser.add("--ndjson", args.use_ndjson_mode);
    parser.add("--gelf", args.use_gelf_mode);
    parser.add("--raw", args.raw);
    parser.add("--arrays-of-objects", args.arrays_of_objects);
    parser.parse(p);
    if (selector) {
      args.selector = parse_selector(selector->inner, selector->source);
    }
    if (args.schema and selector) {
      diagnostic::error("cannot use both `--selector` and `--schema`")
        .primary(args.schema->source)
        .primary(selector->source)
        .throw_();
    }
    if (args.no_infer and not(args.schema or args.selector)) {
      diagnostic::error(
        "`--no-infer` requires either `--schema` or `--selector`")
        .primary(*args.no_infer)
        .throw_();
    }
    return std::make_unique<json_parser>(std::move(args));
  }

  auto parse_printer(parser_interface& p) const
    -> std::unique_ptr<plugin_printer> override {
    auto args = printer_args{};
    auto parser
      = argument_parser{name(), "https://docs.tenzir.com/next/formats/json"};
    // We try to follow 'jq' option naming.
    parser.add("-c,--compact-output", args.compact_output);
    parser.add("-C,--color-output", args.color_output);
    parser.add("-M,--monochrome-output", args.color_output);
    parser.add("--omit-empty", args.omit_empty);
    parser.add("--omit-nulls", args.omit_nulls);
    parser.add("--omit-empty-objects", args.omit_empty_objects);
    parser.add("--omit-empty-lists", args.omit_empty_lists);
    parser.parse(p);
    return std::make_unique<json_printer>(std::move(args));
  }
};

class gelf_parser final : public virtual parser_parser_plugin {
public:
  auto name() const -> std::string override {
    return "gelf";
  }

  auto parse_parser(parser_interface& p) const
    -> std::unique_ptr<plugin_parser> override {
    auto parser = argument_parser{
      name(), fmt::format("https://docs.tenzir.com/next/formats/{}", name())};
    auto args = parser_args{};
    add_common_options_to_parser(parser, args);
    parser.parse(p);
    args.use_gelf_mode = true;
    return std::make_unique<json_parser>(std::move(args));
  }
};

template <detail::string_literal Name, detail::string_literal Selector,
          detail::string_literal Separator = "">
class selector_parser final : public virtual parser_parser_plugin {
public:
  auto name() const -> std::string override {
    return std::string{Name.str()};
  }

  auto parse_parser(parser_interface& p) const
    -> std::unique_ptr<plugin_parser> override {
    auto parser = argument_parser{
      name(), fmt::format("https://docs.tenzir.com/next/formats/{}", name())};
    auto args = parser_args{};
    add_common_options_to_parser(parser, args);
    parser.parse(p);
    args.use_ndjson_mode = true;
    args.selector = parse_selector(Selector.str(), location::unknown);
    args.unnest_separator = Separator.str();
    return std::make_unique<json_parser>(std::move(args));
  }
};

using suricata_parser = selector_parser<"suricata", "event_type:suricata">;
using zeek_parser = selector_parser<"zeek-json", "_path:zeek", ".">;

} // namespace

} // namespace tenzir::plugins::json

TENZIR_REGISTER_PLUGIN(tenzir::plugins::json::plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::json::gelf_parser)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::json::suricata_parser)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::json::zeek_parser)
