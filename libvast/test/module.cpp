//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2022 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#define SUITE module

#include "vast/module.hpp"

#include "vast/aliases.hpp"
#include "vast/concept/convertible/data.hpp"
#include "vast/data.hpp"
#include "vast/legacy_type.hpp"
#include "vast/test/test.hpp"
#include "vast/type.hpp"

#include <caf/error.hpp>
#include <caf/sum_type.hpp>
#include <caf/test/dsl.hpp>
#include <fmt/format.h>

#include <optional>
#include <string_view>

using namespace vast;

caf::expected<type>
to_type(const std::vector<type>& known_types, const data& declaration,
        std::string_view name = "");

caf::expected<record_type>
to_record(const std::vector<type>& known_types,
          const std::vector<vast::data>& record_list) {
  if (record_list.empty())
    return caf::make_error(ec::parse_error, "parses an empty record");
  auto record_fields = std::vector<record_type::field_view>{};
  for (const auto& record_value : record_list) {
    const auto* record_record_ptr = caf::get_if<record>(&record_value);
    if (record_record_ptr == nullptr)
      return caf::make_error(ec::parse_error, "parses an record with invalid "
                                              "format");
    const auto& record_record = *record_record_ptr;
    if (record_record.size() != 1)
      return caf::make_error(ec::parse_error, "parses an record field with an "
                                              "invalid format");
    auto type_or_error = to_type(known_types, record_record.begin()->second);
    if (!type_or_error)
      return type_or_error.error();
    record_fields.emplace_back(record_record.begin()->first, *type_or_error);
  }
  return record_type{record_fields};
}

type get_known_type(const std::vector<type>& known_types,
                    std::string_view name) {
  for (const auto& known_type : known_types) {
    if (name == known_type.name()) {
      return known_type;
    }
  }
  return {}; // none type
}

std::vector<std::string> reserved_names
  = {"bool",   "integer", "count",   "real",   "duration", "time",
     "string", "pattern", "address", "subnet", "type",     "attributes",
     "enum",   "list",    "map",     "record", "base",     "implant",
     "extend", "fields",  "key",     "value"};

caf::expected<type> to_type(const std::vector<type>& known_types,
                            const data& declaration, std::string_view name) {
  const auto* known_type_name_ptr = caf::get_if<std::string>(&declaration);
  if (std::any_of(reserved_names.begin(), reserved_names.end(),
                  [&](const auto& reserved_name) {
                    return name == reserved_name;
                  }))
    return caf::make_error(
      ec::parse_error,
      fmt::format("parses a new type with a reserved name: {}", name));
  if (known_type_name_ptr != nullptr) {
    const auto& known_type_name = *known_type_name_ptr;
    // Check built-in types first
    if (known_type_name == "bool")
      return type{name, bool_type{}};
    if (known_type_name == "integer")
      return type{name, integer_type{}};
    if (known_type_name == "count")
      return type{name, count_type{}};
    if (known_type_name == "real")
      return type{name, real_type{}};
    if (known_type_name == "duration")
      return type{name, duration_type{}};
    if (known_type_name == "time")
      return type{name, time_type{}};
    if (known_type_name == "string")
      return type{name, string_type{}};
    if (known_type_name == "pattern")
      return type{name, pattern_type{}};
    if (known_type_name == "address")
      return type{name, address_type{}};
    if (known_type_name == "subnet")
      return type{name, subnet_type{}};
    // Check type aliases aka. known types
    const auto& known_type = get_known_type(known_types, known_type_name);
    if (!known_type)
      return caf::make_error(ec::parse_error, fmt::format("found unknown type: "
                                                          "{}",
                                                          known_type_name));
    return type{name, known_type};
  }
  const auto* decl_ptr = caf::get_if<record>(&declaration);
  if (decl_ptr == nullptr)
    return caf::make_error(ec::parse_error, "parses type alias with invalid "
                                            "format");
  const auto& decl = *decl_ptr;
  // Get the optional attributes
  auto attributes = std::vector<type::attribute_view>{};
  auto found_attributes = decl.find("attributes");
  if (found_attributes != decl.end()) {
    const auto* attribute_list = caf::get_if<list>(&found_attributes->second);
    if (attribute_list == nullptr)
      return caf::make_error(ec::parse_error, "parses an attribute list with "
                                              "an invalid format");
    for (const auto& attribute : *attribute_list) {
      const auto* attribute_string_ptr = caf::get_if<std::string>(&attribute);
      if (attribute_string_ptr != nullptr)
        attributes.push_back({*attribute_string_ptr});
      else {
        const auto* attribute_record_ptr = caf::get_if<record>(&attribute);
        if (attribute_record_ptr == nullptr)
          return caf::make_error(ec::parse_error, "parses an attribute with an "
                                                  "invalid format");
        const auto& attribute_record = *attribute_record_ptr;
        if (attribute_record.size() != 1)
          return caf::make_error(ec::parse_error, "parses an attribute not "
                                                  "having one and only one "
                                                  "field");
        const auto& attribute_key = attribute_record.begin()->first;
        const auto* attribute_value_ptr
          = caf::get_if<std::string>(&attribute_record.begin()->second);
        if (attribute_value_ptr == nullptr)
          return caf::make_error(ec::parse_error, "parses an attribute with a "
                                                  "non-string value");
        const auto& attribute_value = *attribute_value_ptr;
        attributes.push_back({attribute_key, attribute_value});
      }
    }
  }
  // Check that only one of type, enum, list, map and record is specified
  // by the user
  auto found_type = decl.find("type");
  auto found_enum = decl.find("enum");
  auto found_list = decl.find("list");
  auto found_map = decl.find("map");
  auto found_record = decl.find("record");
  auto is_type_found = found_type != decl.end();
  auto is_enum_found = found_enum != decl.end();
  auto is_list_found = found_list != decl.end();
  auto is_map_found = found_map != decl.end();
  auto is_record_found = found_record != decl.end();
  int type_selector_cnt = 0;
  if (is_type_found)
    type_selector_cnt++;
  if (is_enum_found)
    type_selector_cnt++;
  if (is_list_found)
    type_selector_cnt++;
  if (is_map_found)
    type_selector_cnt++;
  if (is_record_found)
    type_selector_cnt++;
  if (type_selector_cnt != 1)
    return caf::make_error(ec::parse_error, "expects one of type, enum, list, "
                                            "map, record");
  // Type alias
  if (is_type_found) {
    auto type_expected = to_type(known_types, found_type->second);
    if (!type_expected)
      return type_expected.error();
    return type{name, *type_expected, std::move(attributes)};
  }
  // Enumeration
  if (is_enum_found) {
    const auto* enum_list_ptr = caf::get_if<list>(&found_enum->second);
    if (enum_list_ptr == nullptr)
      return caf::make_error(ec::parse_error, "parses an enum with an invalid "
                                              "format");
    const auto& enum_list = *enum_list_ptr;
    if (enum_list.empty())
      return caf::make_error(ec::parse_error, "parses an empty enum");
    auto enum_fields = std::vector<enumeration_type::field_view>{};
    for (const auto& enum_value : enum_list) {
      const auto* enum_string_ptr = caf::get_if<std::string>(&enum_value);
      if (enum_string_ptr == nullptr)
        return caf::make_error(ec::parse_error, "parses an enum value with an "
                                                "invalid format");
      enum_fields.push_back({*enum_string_ptr});
    }
    return type{name, enumeration_type{enum_fields}, std::move(attributes)};
  }
  // List
  if (is_list_found) {
    auto type_expected = to_type(known_types, found_list->second);
    if (!type_expected)
      return type_expected.error();
    return type{name, list_type{*type_expected}, std::move(attributes)};
  }
  // Map
  if (is_map_found) {
    const auto* map_record_ptr = caf::get_if<record>(&found_map->second);
    if (map_record_ptr == nullptr)
      return caf::make_error(ec::parse_error, "parses a map with an invalid "
                                              "format");
    const auto& map_record = *map_record_ptr;
    auto found_key = map_record.find("key");
    auto found_value = map_record.find("value");
    if (found_key == map_record.end() || found_value == map_record.end())
      return caf::make_error(ec::parse_error, "parses a map without a key or a "
                                              "value");
    auto key_type_expected = to_type(known_types, found_key->second);
    if (!key_type_expected)
      return key_type_expected.error();
    auto value_type_expected = to_type(known_types, found_value->second);
    if (!value_type_expected)
      return value_type_expected.error();
    return type{name, map_type{*key_type_expected, *value_type_expected},
                std::move(attributes)};
  }
  // Record or Record algebra
  if (is_record_found) {
    const auto* record_list_ptr = caf::get_if<list>(&found_record->second);
    if (record_list_ptr != nullptr) {
      // Record
      const auto& new_record = to_record(known_types, *record_list_ptr);
      if (!new_record)
        return new_record.error();
      return type{name, *new_record, std::move(attributes)};
    }
    // Record algebra
    const auto* record_algebra_record_ptr
      = caf::get_if<record>(&found_record->second);
    if (record_algebra_record_ptr == nullptr)
      return caf::make_error(ec::parse_error, "parses a record with an "
                                              "invalid format");
    const auto& record_algebra_record = *record_algebra_record_ptr;
    auto found_base = record_algebra_record.find("base");
    auto found_implant = record_algebra_record.find("implant");
    auto found_extend = record_algebra_record.find("extend");
    auto is_base_found = found_base != record_algebra_record.end();
    auto is_implant_found = found_implant != record_algebra_record.end();
    auto is_extend_found = found_extend != record_algebra_record.end();
    int name_clash_specifier_cnt = 0;
    record_type::merge_conflict merge_conflict_handling
      = record_type::merge_conflict::fail;
    if (is_base_found)
      name_clash_specifier_cnt++;
    if (is_implant_found) {
      name_clash_specifier_cnt++;
      // right is the new record type
      merge_conflict_handling = record_type::merge_conflict::prefer_left;
    }
    if (is_extend_found) {
      name_clash_specifier_cnt++;
      merge_conflict_handling = record_type::merge_conflict::prefer_right;
    }
    if (name_clash_specifier_cnt >= 2)
      return caf::make_error(ec::parse_error,
                             "expects at most one of base, implant, "
                             "extend");
    // create new record type
    auto found_fields = record_algebra_record.find("fields");
    if (found_fields == record_algebra_record.end())
      return caf::make_error(ec::parse_error, "expects a fields in record "
                                              "algebra");
    const auto* fields_list_ptr = caf::get_if<list>(&found_fields->second);
    if (fields_list_ptr == nullptr)
      return caf::make_error(ec::parse_error, "parses a record algebra with "
                                              "invalid fields");
    auto new_record_or_error = to_record(known_types, *fields_list_ptr);
    if (!new_record_or_error)
      return new_record_or_error.error();
    auto new_record = new_record_or_error.value();
    // retrive records (base, implant or extend)
    if (name_clash_specifier_cnt == 0)
      return type{name, new_record, std::move(attributes)};
    const auto& records = is_base_found      ? found_base->second
                          : is_implant_found ? found_implant->second
                                             : found_extend->second;
    const auto* records_list_ptr = caf::get_if<list>(&records);
    if (records_list_ptr == nullptr)
      return caf::make_error(ec::parse_error,
                             "parses a record algebra with "
                             "invalid base, implant or extend");
    const auto& record_list = *records_list_ptr;
    if (record_list.empty())
      return caf::make_error(ec::parse_error, "parses a record algebra with "
                                              "empty base, implant or extend");
    std::optional<record_type> merged_base_record{};
    for (const auto& record : record_list) {
      const auto* record_name_ptr = caf::get_if<std::string>(&record);
      if (record_name_ptr == nullptr)
        return caf::make_error(ec::parse_error,
                               "parses a record algebra base, implant or "
                               "extend with invalid content");
      const auto& record_name = *record_name_ptr;
      const auto& base_type = get_known_type( // base or implant or extend
        known_types, record_name);
      if (!base_type)
        return caf::make_error(ec::parse_error,
                               "parses unknown record type when parsing a "
                               "record algebra base, implant or extend");
      for (const auto& attribute : base_type.attributes())
        attributes.push_back(attribute);
      const auto* base_record_ptr = caf::get_if<record_type>(&base_type);
      if (base_record_ptr == nullptr)
        return caf::make_error(ec::parse_error,
                               "parses a record algebra base, implant or "
                               "extend with invalid format");
      if (!merged_base_record) {
        merged_base_record = *base_record_ptr;
        continue;
      }
      const auto new_merged_base_record
        = merge(*merged_base_record, *base_record_ptr,
                record_type::merge_conflict::fail);
      if (!new_merged_base_record)
        return caf::make_error(ec::parse_error,
                               "parses conflicting record types when parsing a "
                               "record algebra base, implant or extend");
      merged_base_record = *new_merged_base_record;
    }
    auto final_merged_record
      = merge(*merged_base_record, new_record, merge_conflict_handling);
    if (!final_merged_record)
      return final_merged_record.error();
    return type{name, *final_merged_record, std::move(attributes)};
  }
  return caf::make_error(ec::parse_error, "parses unknown type");
}

caf::expected<type> to_type(const std::vector<type>& known_types,
                            const record::value_type& variable_declaration) {
  return to_type(known_types, variable_declaration.second,
                 variable_declaration.first);
}

TEST(YAML Type - parsing string with attributs and parsing a known type) {
  std::vector<type> known_types;
  auto string_type_with_attrs = record::value_type{
    "string_field",
    record{{"type", "string"},
           {"attributes", list{"ioc", record{{"index", "hash"}}}}},
  };
  auto result = unbox(to_type(known_types, string_type_with_attrs));
  known_types.emplace_back(result);
  auto expected_type = type{
    "string_field",
    string_type{},
    {{"ioc"}, {"index", "hash"}},
  };
  CHECK_EQUAL(result, expected_type);
  // Parsing a known_type
  auto string_field_type = record::value_type{
    "string_field_alias",
    record{{"type", "string_field"}},
  };
  result = unbox(to_type(known_types, string_field_type));
  expected_type = type{"string_field_alias", type{expected_type}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - parsing bool type) {
  std::vector<type> known_types;
  auto bool_type_wo_attrs = record::value_type{
    "bool_field",
    record{{"type", "bool"}},
  };
  auto result = unbox(to_type(known_types, bool_type_wo_attrs));
  auto expected_type = type{"bool_field", bool_type{}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing integer type) {
  std::vector<type> known_types;
  auto integer_type_wo_attrs = record::value_type{
    "int_field",
    record{{"type", "integer"}},
  };
  auto result = unbox(to_type(known_types, integer_type_wo_attrs));
  auto expected_type = type{"int_field", integer_type{}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing count_type) {
  std::vector<type> known_types;
  auto count_type_wo_attrs = record::value_type{
    "count_field",
    record{{"type", "count"}},
  };
  auto result = unbox(to_type(known_types, count_type_wo_attrs));
  auto expected_type = type{"count_field", count_type{}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing real_type) {
  std::vector<type> known_types;
  auto real_type_wo_attrs = record::value_type{
    "real_field",
    record{{"type", "real"}},
  };
  auto result = unbox(to_type(known_types, real_type_wo_attrs));
  auto expected_type = type{"real_field", real_type{}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing duration_type) {
  std::vector<type> known_types;
  auto duration_type_wo_attrs = record::value_type{
    "duration_field",
    record{{"type", "duration"}},
  };
  auto result = unbox(to_type(known_types, duration_type_wo_attrs));
  auto expected_type = type{"duration_field", duration_type{}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing time_type) {
  std::vector<type> known_types;
  auto time_type_wo_attrs = record::value_type{
    "time_field",
    record{{"type", "time"}},
  };
  auto result = unbox(to_type(known_types, time_type_wo_attrs));
  auto expected_type = type{"time_field", time_type{}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing string_type without attributes) {
  std::vector<type> known_types;
  auto string_type_wo_attrs = record::value_type{
    "string_field",
    record{{"type", "string"}},
  };
  auto result = unbox(to_type(known_types, string_type_wo_attrs));
  auto expected_type = type{"string_field", string_type{}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing pattern_type) {
  std::vector<type> known_types;
  auto pattern_type_wo_attrs = record::value_type{
    "pattern_field",
    record{{"type", "pattern"}},
  };
  auto result = unbox(to_type(known_types, pattern_type_wo_attrs));
  auto expected_type = type{"pattern_field", pattern_type{}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing address_type) {
  std::vector<type> known_types;
  auto address_type_wo_attrs = record::value_type{
    "address_field",
    record{{"type", "address"}},
  };
  auto result = unbox(to_type(known_types, address_type_wo_attrs));
  auto expected_type = type{"address_field", address_type{}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing subnet_type) {
  std::vector<type> known_types;
  auto subnet_type_wo_attrs = record::value_type{
    "subnet_field",
    record{{"type", "subnet"}},
  };
  auto result = unbox(to_type(known_types, subnet_type_wo_attrs));
  auto expected_type = type{"subnet_field", subnet_type{}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing enumeration_type) {
  std::vector<type> known_types;
  auto enum_type_wo_attrs = record::value_type{
    "enum_field",
    record{{"enum", list{"on", "off", "unknown"}}},
  };
  auto result = unbox(to_type(known_types, enum_type_wo_attrs));
  auto expected_type
    = type{"enum_field", enumeration_type{{"on"}, {"off"}, {"unknown"}}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing list_type) {
  std::vector<type> known_types;
  auto list_type_wo_attrs = record::value_type{
    "list_field",
    record{{"list", "count"}},
  };
  auto result = unbox(to_type(known_types, list_type_wo_attrs));
  auto expected_type = type{"list_field", list_type{count_type{}}};
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing map_type) {
  std::vector<type> known_types;
  auto map_type_wo_attrs = record::value_type{
    "map_field",
    record{
      {"map", record{{"key", "count"}, {"value", "string"}}},
    },
  };
  auto result = unbox(to_type(known_types, map_type_wo_attrs));
  auto expected_type = type{
    "map_field",
    map_type{count_type{}, string_type{}},
  };
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing record_type) {
  std::vector<type> known_types;
  auto record_type_wo_attrs = record::value_type{
    "record_field",
    record{{
      "record",
      list{
        record{{"src_ip", "string"}},
        record{{"dst_ip", "string"}},
      },
    }},
  };
  auto result = unbox(to_type(known_types, record_type_wo_attrs));
  auto expected_type = type{
    "record_field",
    record_type{
      {"src_ip", string_type{}},
      {"dst_ip", string_type{}},
    },
  };
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing inline record_type) {
  std::vector<type> known_types;
  auto inline_record_type = record::value_type{
    "record_field",
    record{{"record",
            list{
              record{{"source", record{{"type", "string"}}}},
              record{{"destination", record{{"type", "string"}}}},
            }}},
  };
  auto result = unbox(to_type(known_types, inline_record_type));
  auto expected_type = type{
    "record_field",
    record_type{
      {"source", string_type{}},
      {"destination", string_type{}},
    },
  };
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing inline record_type with attributes) {
  std::vector<type> known_types;
  auto inline_record_type_with_attr = record::value_type{
    "record_field",
    record{{
      "record",
      list{record{
             {"source",
              record{
                {"type", "string"},
                {"attributes", list{"originator"}},
              }},
           },
           record{
             {"destination",
              record{
                {"type", "string"},
                {"attributes", list{"responder"}},
              }},
           }},
    }},
  };
  auto result = unbox(to_type(known_types, inline_record_type_with_attr));
  auto expected_type = type{
    "record_field",
    record_type{
      {"source", type{string_type{}, {{"originator"}}}},
      {"destination", type{string_type{}, {{"responder"}}}},
    },
  };
  CHECK_EQUAL(result, expected_type);
}

TEST(YAML Type - Parsing record algebra) {
  std::vector<type> known_types;
  // Creating a base record for later Record Algebra tests.
  auto base_record_type_from_yaml = record::value_type{
    "common",
    record{{"record", list{record{{"field", record{{"type", "bool"}}}}}}}};
  auto base_record_type
    = unbox(to_type(known_types, base_record_type_from_yaml));
  auto expected_base_record_type
    = type{"common", record_type{{"field", bool_type{}}}};
  CHECK_EQUAL(base_record_type, expected_base_record_type);
  known_types.push_back(base_record_type);
  // Base Record Algebra test
  auto record_algebra_from_yaml = record::value_type{
    "record_algebra_field",
    record{{
      "record",
      record{
        {"base", list{"common"}},
        {"fields", list{record{{"msg", "string"}}}},
      },
    }},
  };
  auto record_algebra = unbox(to_type(known_types, record_algebra_from_yaml));
  auto expected_record_algebra = type{
    "record_algebra_field",
    record_type{
      {"field", type{bool_type{}}},
      {"msg", type{string_type{}}},
    },
  };
  CHECK_EQUAL(record_algebra, expected_record_algebra);
  // Base Record Algebra test with name clash
  auto clashing_record_algebra_from_yaml = record::value_type{
    "record_algebra_field",
    record{{
      "record",
      record{
        {"base", list{"common"}},
        {"fields", list{record{{"field", "string"}}}},
      },
    }},
  };
  auto clashing_record_algebra
    = to_type(known_types, clashing_record_algebra_from_yaml);
  CHECK_ERROR(clashing_record_algebra);
  // Extend Record Algebra test with name clash
  auto clashing_extend_record_algebra_from_yaml = record::value_type{
    "record_algebra_field",
    record{{
      "record",
      record{
        {"extend", list{"common"}},
        {"fields", list{record{{"field", "string"}}}},
      },
    }},
  };
  auto extended_record_algebra
    = to_type(known_types, clashing_extend_record_algebra_from_yaml);
  auto expected_extended_record_algebra = type{
    "record_algebra_field",
    record_type{
      {"field", type{string_type{}}},
    },
  };
  CHECK_EQUAL(unbox(extended_record_algebra), expected_extended_record_algebra);
  // Implant Record Algebra test with name clash
  auto clashing_implant_record_algebra_from_yaml = record::value_type{
    "record_algebra_field",
    record{{
      "record",
      record{
        {"implant", list{"common"}},
        {"fields", list{record{{"field", "string"}}}},
      },
    }},
  };
  auto implanted_record_algebra
    = to_type(known_types, clashing_implant_record_algebra_from_yaml);
  auto expected_implanted_record_algebra = type{
    "record_algebra_field",
    record_type{
      {"field", type{bool_type{}}},
    },
  };
  CHECK_EQUAL(unbox(implanted_record_algebra),
              expected_implanted_record_algebra);
}
