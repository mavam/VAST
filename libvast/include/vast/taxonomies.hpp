//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2020 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/detail/stable_map.hpp"
#include "vast/type_set.hpp"

#include <fmt/format.h>

#include <memory>
#include <string>
#include <vector>

namespace vast {

/// The definition of a concept.
struct concept_ {
  /// The description of the concept.
  std::string description;

  /// The fields that the concept maps to.
  std::vector<std::string> fields;

  /// Other concepts that are referenced. Their fields are also considered
  /// during substitution.
  std::vector<std::string> concepts;

  friend bool operator==(const concept_& lhs, const concept_& rhs);

  /// A concept is a Monoid.
  friend concept_ mappend(concept_ lhs, concept_ rhs);

  template <class Inspector>
  friend auto inspect(Inspector& f, concept_& c) {
    return f.object(c).pretty_name("concept").fields(
      f.field("description", c.description), f.field("fields", c.fields),
      f.field("concepts", c.concepts));
  }

  inline static const record_type& schema() noexcept {
    static const auto result = record_type{
      {"description", string_type{}},
      {"fields", list_type{string_type{}}},
      {"concepts", list_type{string_type{}}},
    };
    return result;
  }
};

/// Maps concept names to their definitions.
using concepts_map = detail::stable_map<std::string, concept_>;

/// Describes the schema of a vast::list of concepts for automatic conversion to
/// a `concepts_map`.
extern const type concepts_data_schema;

/// The definition of a model.
struct model {
  /// The description of the model.
  std::string description;

  /// The ordered concepts and models that the model is composed of.
  /// If an entry is another model, its concepts must also be represented  for
  /// a schema to be considered.
  std::vector<std::string> definition;

  friend bool operator==(const model& lhs, const model& rhs);

  template <class Inspector>
  friend auto inspect(Inspector& f, model& m) {
    return f.object(m).pretty_name("model").fields(
      f.field("description", m.description),
      f.field("definition", m.definition));
  }

  inline static const record_type& schema() noexcept {
    static const auto result = record_type{
      {"description", string_type{}},
      {"definition", list_type{string_type{}}},
    };
    return result;
  }
};

/// Maps model names to their definitions.
using models_map = detail::stable_map<std::string, model>;

/// Describes the schema of a vast::list of models for automatic conversion to
/// a `models_map`.
extern const type models_data_schema;

/// A taxonomy is a combination of concepts and models. VAST stores all
/// configured taxonomies in memory together, hence the plural naming.
struct taxonomies {
  concepts_map concepts;
  models_map models;

  friend bool operator==(const taxonomies& lhs, const taxonomies& rhs);

  template <class Inspector>
  friend auto inspect(Inspector& f, taxonomies& t) {
    return f.object(t)
      .pretty_name("taxonomies")
      .fields(f.field("concepts", t.concepts), f.field("models", t.models));
  }
};

/// Resolve a concept or field name to a list of field names.
/// @param concepts The concepts map to apply.
/// @param fields_or_concepts The fields or concepts to resolve.
/// @returns The resolved fields.
/// @note The resolved fields may contain duplicates if concepts or nested
/// concepts resolve to duplicate fields.
std::vector<std::string>
resolve_concepts(const concepts_map& concepts,
                 std::vector<std::string> fields_or_concepts);

/// Substitutes concept and model identifiers in field extractors with
/// replacement expressions containing only concrete field names.
/// @param t The set of taxonomies to apply.
/// @param e The original expression.
/// @param schema An optional schema to restrict taxonomy resolution by.
/// @returns The sustitute expression.
caf::expected<expression>
resolve(const taxonomies& t, const expression& e, const type& schema = {});

} // namespace vast

namespace fmt {

template <>
struct formatter<vast::model> {
  template <class ParseContext>
  constexpr auto parse(ParseContext& ctx) -> decltype(ctx.begin()) {
    return ctx.begin();
  }

  template <class FormatContext>
  auto format(const vast::model& value, FormatContext& ctx)
    -> decltype(ctx.out()) {
    return format_to(ctx.out(), "model {{description: {}, definition: [{}]}}",
                     value.description, fmt::join(value.definition, ", "));
  }
};

template <>
struct formatter<vast::concept_> {
  template <class ParseContext>
  constexpr auto parse(ParseContext& ctx) -> decltype(ctx.begin()) {
    return ctx.begin();
  }

  template <class FormatContext>
  auto format(const vast::concept_& value, FormatContext& ctx)
    -> decltype(ctx.out()) {
    return format_to(
      ctx.out(), "concept {{description: {}, fields: [{}], concepts: [{}]}}",
      value.description, fmt::join(value.fields, ", "),
      fmt::join(value.concepts, ", "));
  }
};

} // namespace fmt
