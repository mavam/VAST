//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2020 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/aliases.hpp"
#include "vast/type.hpp"

#include <string>

namespace vast {

/// A standalone field of an event type, used to uniquely address an index
/// column that may have the same field name across different event types.
struct qualified_record_field {
  // Required for serialization/deserialization.
  qualified_record_field() noexcept = default;

  /// Constructs a qualified record field by prepending the layout name to a
  /// record field.
  /// @pre `!layout.name().empty()`
  /// @pre `caf::holds_alternative<record_type>(layout)`
  qualified_record_field(const class type& layout,
                         const offset& index) noexcept;

  /// Constructs a qualified record field from the legacy specification. Use
  /// carefully!
  qualified_record_field(std::string_view layout_name,
                         std::string_view field_name,
                         const class type& field_type) noexcept;

  /// Retrieves the layout name.
  [[nodiscard]] std::string_view layout_name() const noexcept;

  /// Retrieves the field name.
  [[nodiscard]] std::string_view field_name() const noexcept;

  /// Retrieves the full-qualified name, i.e., the record typename concatenated
  /// with the field name.
  [[nodiscard]] std::string name() const noexcept;

  /// @note This function exists for backwards compatibility. While internally a
  /// qualified record field is modelled as a record type with an index to a
  /// known field, the partition synopsis used this data structure for both
  /// field synopses as intended, and for type synopses which may be considered
  /// a bad design decision. As a consequence, we need to be able to distinguish
  /// whether a qualified record field is actually just a type as used for type
  /// synopses.
  [[nodiscard]] bool is_standalone_type() const noexcept;

  /// Retrieves the fields type.
  [[nodiscard]] class type type() const noexcept;

  friend bool operator==(const qualified_record_field& x,
                         const qualified_record_field& y) noexcept;

  friend bool operator<(const qualified_record_field& x,
                        const qualified_record_field& y) noexcept;

  template <class Inspector>
  friend auto inspect(Inspector& f, qualified_record_field& x) {
    auto layout_name = std::string{};
    if constexpr (Inspector::is_loading) {
      auto result = f.object(x)
                      .pretty_name("vast.qualified_record_field")
                      .fields(f.field("field.name", x.field_.name),
                              f.field("field.type", x.field_.type),
                              f.field("layout-name", layout_name));
      x = qualified_record_field{layout_name, x.field_.name, x.field_.type};
      return result;
    } else {
      layout_name = x.layout_name_;
      return f.object(x)
        .pretty_name("vast.qualified_record_field")
        .fields(f.field("field.name", x.field_.name),
                f.field("field.type", x.field_.type),
                f.field("layout-name", layout_name));
    }
  }

  // These overloads exists for backwards compatibility. In some cases, we
  // used to serialize qualified record fields using CAF. Back then, the
  // qualified record field had these three members:
  // - std::string layout_name
  // - std::string field_name
  // - legacy_type field_type
  friend bool inspect(caf::binary_serializer& f, qualified_record_field& x);
  friend bool inspect(caf::deserializer& f, qualified_record_field& x);
  friend bool
  inspect(detail::legacy_deserializer& f, qualified_record_field& x);

private:
  /// The pointed-at field.
  struct record_type::field field_ = {};

  /// The name of the layout we're using.
  std::string_view layout_name_ = {};
};

} // namespace vast

namespace std {

template <>
struct hash<vast::qualified_record_field> {
  size_t operator()(const vast::qualified_record_field& f) const noexcept;
};

} // namespace std
