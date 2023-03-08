//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/type.hpp"

#include "vast/arrow_compat.hpp"
#include "vast/concept/parseable/numeric/integral.hpp"
#include "vast/data.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/narrow.hpp"
#include "vast/detail/overload.hpp"
#include "vast/detail/zip_iterator.hpp"
#include "vast/die.hpp"
#include "vast/error.hpp"
#include "vast/fbs/type.hpp"
#include "vast/legacy_type.hpp"
#include "vast/module.hpp"

#include <arrow/array.h>
#include <arrow/type_traits.h>
#include <arrow/util/key_value_metadata.h>
#include <caf/sum_type.hpp>
#include <fmt/format.h>

#include <simdjson.h>

// -- utility functions -------------------------------------------------------

namespace vast {

namespace {

std::span<const std::byte> none_type_representation() {
  static const auto buffer = []() noexcept {
    constexpr auto reserved_size = 12;
    auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
    const auto type = fbs::CreateType(builder);
    builder.Finish(type);
    auto result = builder.Release();
    VAST_ASSERT(result.size() == reserved_size);
    return result;
  }();
  return as_bytes(buffer);
}

constexpr size_t reserved_string_size(std::string_view str) {
  // This helper function calculates the length of a string in a FlatBuffers
  // table. It adds an extra byte because strings in FlatBuffers tables are
  // always zero-terminated, and then rounds up to a full four bytes because of
  // the included padding.
  return str.empty() ? 0 : (((str.size() + 1 + 3) / 4) * 4);
}

const fbs::Type*
resolve_transparent(const fbs::Type* root, enum type::transparent transparent
                                           = type::transparent::yes) {
  VAST_ASSERT(root);
  while (transparent == type::transparent::yes) {
    switch (root->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type:
      case fbs::type::Type::record_type:
        transparent = type::transparent::no;
        break;
      case fbs::type::Type::enriched_type:
        root = root->type_as_enriched_type()->type_nested_root();
        VAST_ASSERT(root);
        break;
    }
  }
  return root;
}

template <complex_type T>
std::span<const std::byte> as_bytes_complex(const T& ct) {
  const auto& t
    = static_cast<const type&>(static_cast<const stateful_type_base&>(ct));
  const auto* root = &t.table(type::transparent::no);
  auto result = as_bytes(t);
  while (true) {
    switch (root->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type:
      case fbs::type::Type::record_type:
        return result;
      case fbs::type::Type::enriched_type: {
        const auto* enriched = root->type_as_enriched_type();
        VAST_ASSERT(enriched);
        root = enriched->type_nested_root();
        VAST_ASSERT(root);
        result = as_bytes(*enriched->type());
        break;
      }
    }
  }
  __builtin_unreachable();
}

template <class T>
  requires(std::is_same_v<T, struct enumeration_type::field> //
           || std::is_same_v<T, enumeration_type::field_view>)
void construct_enumeration_type(stateful_type_base& self, const T* begin,
                                const T* end) {
  VAST_ASSERT(begin != end, "An enumeration type must not have zero "
                            "fields");
  // Unlike for other concrete types, we do not calculate the exact amount of
  // bytes we need to allocate beforehand. This is because the individual
  // fields are stored in a flat hash map, whose size cannot trivially be
  // determined.
  auto builder = flatbuffers::FlatBufferBuilder{};
  auto field_offsets
    = std::vector<flatbuffers::Offset<fbs::type::detail::EnumerationField>>{};
  field_offsets.reserve(end - begin);
  uint32_t next_key = 0;
  for (const auto* it = begin; it != end; ++it) {
    const auto key
      = it->key != std::numeric_limits<uint32_t>::max() ? it->key : next_key;
    next_key = key + 1;
    const auto name_offset = builder.CreateString(it->name);
    field_offsets.emplace_back(
      fbs::type::detail::CreateEnumerationField(builder, key, name_offset));
  }
  const auto fields_offset = builder.CreateVectorOfSortedTables(&field_offsets);
  const auto enumeration_type_offset
    = fbs::type::CreateEnumerationType(builder, fields_offset);
  const auto type_offset
    = fbs::CreateType(builder, fbs::type::Type::enumeration_type,
                      enumeration_type_offset.Union());
  builder.Finish(type_offset);
  auto result = builder.Release();
  auto chunk = chunk::make(std::move(result));
  self = type{std::move(chunk)};
}

template <class T>
void construct_record_type(stateful_type_base& self, const T& begin,
                           const T& end) {
  VAST_ASSERT(begin != end, "A record type must not have zero fields.");
  const auto reserved_size = [&]() noexcept {
    // By default the builder allocates 1024 bytes, which is much more than
    // what we require, and since we can easily calculate the exact amount we
    // should do that. The total length is made up from the following terms:
    // - 52 bytes FlatBuffers table framing
    // - 24 bytes for each contained field.
    // - All contained string lengths, rounded up to four each.
    // - All contained nested type FlatBuffers.
    size_t size = 52;
    for (auto it = begin; it != end; ++it) {
      const auto& type_bytes = as_bytes(it->type);
      size += 24;
      VAST_ASSERT(!it->name.empty(), "Record field names must not be empty.");
      size += reserved_string_size(it->name);
      size += type_bytes.size();
    }
    return size;
  }();
  auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
  auto field_offsets
    = std::vector<flatbuffers::Offset<fbs::type::detail::RecordField>>{};
  field_offsets.reserve(end - begin);
  for (auto it = begin; it != end; ++it) {
    const auto type_bytes = as_bytes(it->type);
    const auto name_offset = builder.CreateString(it->name);
    const auto type_offset = builder.CreateVector(
      reinterpret_cast<const uint8_t*>(type_bytes.data()), type_bytes.size());
    field_offsets.emplace_back(
      fbs::type::detail::CreateRecordField(builder, name_offset, type_offset));
  }
  const auto fields_offset = builder.CreateVector(field_offsets);
  const auto record_type_offset
    = fbs::type::CreateRecordType(builder, fields_offset);
  const auto type_offset = fbs::CreateType(
    builder, fbs::type::Type::record_type, record_type_offset.Union());
  builder.Finish(type_offset);
  auto result = builder.Release();
  VAST_ASSERT(result.size() == reserved_size);
  auto chunk = chunk::make(std::move(result));
  self = type{std::move(chunk)};
}

/// Enhances a VAST type based on the metadata extracted from Arrow.
/// Metadata can be attached to both Arrow schema and an Arrow field, and VAST
/// stores metadata on either of the two, using the exact same structure.
type enrich_type_with_arrow_metadata(class type type,
                                     const arrow::KeyValueMetadata& metadata) {
  auto deserialize_attributes = [](std::string_view serialized) noexcept
    -> std::vector<std::pair<std::string, std::string>> {
    if (serialized.empty())
      return {};
    auto json = simdjson::padded_string{serialized};
    auto parser = simdjson::dom::parser{};
    auto doc = parser.parse(json);
    std::vector<std::pair<std::string, std::string>> attributes{};
    for (auto f : doc.get_object()) {
      if (!f.value.is_string()) {
        VAST_WARN("ignoring non-string Arrow metadata: {}",
                  simdjson::to_string(f));
        continue;
      }
      auto value = std::string{f.value.get_string().value()};
      attributes.push_back({std::string{f.key}, std::move(value)});
    }
    return attributes;
  };
  auto names_and_attributes = std::vector<
    std::pair<std::string, std::vector<std::pair<std::string, std::string>>>>{};
  auto name_parser = "VAST:name:" >> parsers::u32 >> parsers::eoi;
  auto attribute_parser = "VAST:attributes:" >> parsers::u32 >> parsers::eoi;
  for (const auto& [key, value] :
       detail::zip(metadata.keys(), metadata.values())) {
    if (!key.starts_with("VAST:"))
      continue;
    if (uint32_t index{}; name_parser(key, index)) {
      if (index >= names_and_attributes.size())
        names_and_attributes.resize(index + 1);
      names_and_attributes[index].first = value;
      continue;
    }
    if (uint32_t index{}; attribute_parser(key, index)) {
      if (index >= names_and_attributes.size())
        names_and_attributes.resize(index + 1);
      names_and_attributes[index].second = deserialize_attributes(value);
      continue;
    }
    VAST_WARN("unhandled Arrow metadata key '{}'", key);
  }
  for (auto it = names_and_attributes.rbegin();
       it != names_and_attributes.rend(); ++it) {
    auto attributes = std::vector<type::attribute_view>{};
    attributes.reserve(it->second.size());
    for (const auto& [key, value] : it->second)
      attributes.push_back({key, value});
    type = {it->first, type, std::move(attributes)};
  }
  return type;
}

/// Creates Arrow Metadata from a type's name and attributes.
std::shared_ptr<arrow::KeyValueMetadata> make_arrow_metadata(const type& type) {
  // Helper function for serializing attributes to a string.
  auto serialize_attributes = [](const auto& attributes) noexcept {
    auto result = std::string{};
    auto inserter = std::back_inserter(result);
    fmt::format_to(inserter, "{{ ");
    for (auto add_comma = false; const auto* attribute : attributes) {
      if (std::exchange(add_comma, true))
        fmt::format_to(inserter, ", ");
      if (attribute->value())
        fmt::format_to(inserter, R"("{}": "{}")",
                       attribute->key()->string_view(),
                       attribute->value()->string_view());
      else
        fmt::format_to(inserter, R"("{}": "")",
                       attribute->key()->string_view());
    }
    fmt::format_to(inserter, " }}");
    return result;
  };
  auto keys = std::vector<std::string>{};
  auto values = std::vector<std::string>{};
  const auto* root = &type.table(type::transparent::no);
  for (auto nesting_depth = 0; root != nullptr; ++nesting_depth) {
    switch (root->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type:
      case fbs::type::Type::record_type:
        root = nullptr;
        break;
      case fbs::type::Type::enriched_type: {
        const auto* enriched_type = root->type_as_enriched_type();
        if (enriched_type->name()) {
          keys.push_back(fmt::format("VAST:name:{}", nesting_depth));
          values.push_back(enriched_type->name()->str());
        }
        if (enriched_type->attributes()) {
          keys.push_back(fmt::format("VAST:attributes:{}", nesting_depth));
          values.push_back(serialize_attributes(*enriched_type->attributes()));
        }
        root = enriched_type->type_nested_root();
        VAST_ASSERT(root);
        break;
      }
    }
  }
  return arrow::KeyValueMetadata::Make(std::move(keys), std::move(values));
}

} // namespace

// -- type --------------------------------------------------------------------

type::type() noexcept = default;

type::type(const type& other) noexcept = default;

type& type::operator=(const type& rhs) noexcept = default;

type::type(type&& other) noexcept = default;

type& type::operator=(type&& other) noexcept = default;

type::~type() noexcept = default;

type::type(chunk_ptr&& table) noexcept {
#if VAST_ENABLE_ASSERTIONS
  VAST_ASSERT(table);
  VAST_ASSERT(table->size() > 0);
  const auto* const data = reinterpret_cast<const uint8_t*>(table->data());
  auto verifier = flatbuffers::Verifier{data, table->size()};
  VAST_ASSERT(fbs::GetType(data)->Verify(verifier),
              "Encountered invalid vast.fbs.Type FlatBuffers table.");
#  if defined(FLATBUFFERS_TRACK_VERIFIER_BUFFER_SIZE)
  VAST_ASSERT(verifier.GetComputedSize() == table->size(),
              "Encountered unexpected excess bytes in vast.fbs.Type "
              "FlatBuffers table.");
#  endif // defined(FLATBUFFERS_TRACK_VERIFIER_BUFFER_SIZE)
#endif   // VAST_ENABLE_ASSERTIONS
  table_ = std::move(table);
}

type::type(std::string_view name, const type& nested,
           std::vector<attribute_view>&& attributes) noexcept {
  if (name.empty() && attributes.empty()) {
    // This special case fbs::type::Type::exists for easier conversion of legacy
    // types, which did not require an legacy alias type wrapping to have a name.
    *this = nested;
  } else {
    auto nested_bytes = as_bytes(nested);
    // Identify the first named metadata-layer, and store all attributes we
    // encounter until then. We merge the attributes into the attributes
    // provided to this constructor, priorising the new attributes, with the
    // nested byte range being adjusted to the first named metadata-layer (or
    // the underlying concrete type).
    for (const auto* root = fbs::GetType(nested_bytes.data());
         root != nullptr;) {
      switch (root->type_type()) {
        case fbs::type::Type::pattern_type:
          __builtin_unreachable();
        case fbs::type::Type::NONE:
        case fbs::type::Type::bool_type:
        case fbs::type::Type::int64_type:
        case fbs::type::Type::uint64_type:
        case fbs::type::Type::double_type:
        case fbs::type::Type::duration_type:
        case fbs::type::Type::time_type:
        case fbs::type::Type::string_type:
        case fbs::type::Type::ip_type:
        case fbs::type::Type::subnet_type:
        case fbs::type::Type::enumeration_type:
        case fbs::type::Type::list_type:
        case fbs::type::Type::map_type:
        case fbs::type::Type::record_type:
          root = nullptr;
          break;
        case fbs::type::Type::enriched_type: {
          const auto* enriched_type = root->type_as_enriched_type();
          if (enriched_type->name()) {
            root = nullptr;
            break;
          }
          if (const auto* stripped_attributes = enriched_type->attributes()) {
            for (const auto* stripped_attribute : *stripped_attributes) {
              VAST_ASSERT(stripped_attribute->key());
              // Skip over any attributes that were already in the new list of
              // attributes.
              if (std::any_of(
                    attributes.begin(), attributes.end(),
                    [&](const auto& attribute) noexcept {
                      return attribute.key
                             == stripped_attribute->key()->string_view();
                    }))
                continue;
              if (stripped_attribute->value())
                attributes.push_back(
                  {stripped_attribute->key()->string_view(),
                   stripped_attribute->value()->string_view()});
              else
                attributes.push_back(
                  {stripped_attribute->key()->string_view()});
            }
          }
          nested_bytes = as_bytes(*enriched_type->type());
          root = enriched_type->type_nested_root();
          VAST_ASSERT(root);
          break;
        }
      }
    }
    const auto reserved_size = [&]() noexcept {
      // The total length is made up from the following terms:
      // - 52 bytes FlatBuffers table framing
      // - Nested type FlatBuffers table size
      // - All contained string lengths, rounded up to four each
      // Note that this cannot account for attributes, since they are stored in
      // hash map which makes calculating the space requirements non-trivial.
      size_t size = 52;
      size += nested_bytes.size();
      size += reserved_string_size(name);
      return size;
    };
    auto builder = attributes.empty()
                     ? flatbuffers::FlatBufferBuilder{reserved_size()}
                     : flatbuffers::FlatBufferBuilder{};
    const auto nested_type_offset = builder.CreateVector(
      reinterpret_cast<const uint8_t*>(nested_bytes.data()),
      nested_bytes.size());
    const auto name_offset = name.empty() ? 0 : builder.CreateString(name);
    const auto attributes_offset = [&]() noexcept
      -> flatbuffers::Offset<
        flatbuffers::Vector<flatbuffers::Offset<fbs::type::detail::Attribute>>> {
      if (attributes.empty())
        return 0;
      auto attributes_offsets
        = std::vector<flatbuffers::Offset<fbs::type::detail::Attribute>>{};
      attributes_offsets.reserve(attributes.size());
      auto add_attribute = [&](const auto& attribute) noexcept {
        const auto key_offset = builder.CreateString(attribute.key);
        const auto value_offset
          = attribute.value.empty() ? 0 : builder.CreateString(attribute.value);
        attributes_offsets.emplace_back(fbs::type::detail::CreateAttribute(
          builder, key_offset, value_offset));
      };
      std::sort(attributes.begin(), attributes.end(),
                [](const attribute_view& lhs,
                   const attribute_view& rhs) noexcept {
                  return lhs.key < rhs.key;
                });
      for (const auto& attribute : attributes)
        add_attribute(attribute);
      return builder.CreateVectorOfSortedTables(&attributes_offsets);
    }();
    const auto enriched_type_offset = fbs::type::detail::CreateEnrichedType(
      builder, nested_type_offset, name_offset, attributes_offset);
    const auto type_offset = fbs::CreateType(
      builder, fbs::type::Type::enriched_type, enriched_type_offset.Union());
    builder.Finish(type_offset);
    auto result = builder.Release();
    table_ = chunk::make(std::move(result));
  }
}

type::type(std::string_view name, const type& nested) noexcept
  : type(name, nested, {}) {
  // nop
}

type::type(const type& nested,
           std::vector<attribute_view>&& attributes) noexcept
  : type(std::string_view{}, nested, std::move(attributes)) {
  // nop
}

type type::infer(const data& value) noexcept {
  auto f = detail::overload{
    [](caf::none_t) noexcept -> type {
      return {};
    },
    [](const bool&) noexcept -> type {
      return type{bool_type{}};
    },
    [](const int64_t&) noexcept -> type {
      return type{int64_type{}};
    },
    [](const uint64_t&) noexcept -> type {
      return type{uint64_type{}};
    },
    [](const double&) noexcept -> type {
      return type{double_type{}};
    },
    [](const duration&) noexcept -> type {
      return type{duration_type{}};
    },
    [](const time&) noexcept -> type {
      return type{time_type{}};
    },
    [](const std::string&) noexcept -> type {
      return type{string_type{}};
    },
    [](const pattern&) noexcept -> type {
      return type{string_type{}};
    },
    [](const ip&) noexcept -> type {
      return type{ip_type{}};
    },
    [](const subnet&) noexcept -> type {
      return type{subnet_type{}};
    },
    [](const enumeration&) noexcept -> type {
      // Enumeration types cannot be inferred.
      return {};
    },
    [](const list& list) noexcept -> type {
      // List types cannot be inferred from empty lists.
      if (list.empty())
        return type{list_type{type{}}};
      // Technically lists can contain heterogeneous data, but for optimization
      // purposes we only check the first element when assertions are disabled.
      auto value_type = infer(*list.begin());
      VAST_ASSERT(std::all_of(list.begin() + 1, list.end(),
                              [&](const auto& elem) noexcept {
                                return value_type.type_index()
                                       == infer(elem).type_index();
                              }),
                  "expected a homogenous list");
      return type{list_type{value_type}};
    },
    [](const map& map) noexcept -> type {
      // Map types cannot be inferred from empty maps.
      if (map.empty())
        return type{map_type{type{}, type{}}};
      // Technically maps can contain heterogeneous data, but for optimization
      // purposes we only check the first element when assertions are disabled.
      auto key_type = infer(map.begin()->first);
      auto value_type = infer(map.begin()->second);
      VAST_ASSERT(std::all_of(map.begin() + 1, map.end(),
                              [&](const auto& elem) noexcept {
                                return key_type.type_index()
                                         == infer(elem.first).type_index()
                                       && value_type.type_index()
                                            == infer(elem.second).type_index();
                              }),
                  "expected a homogenous map");
      return type{map_type{key_type, value_type}};
    },
    [](const record& record) noexcept -> type {
      // Record types cannot be inferred from empty records.
      if (record.empty())
        return {};
      auto fields = std::vector<record_type::field_view>{};
      fields.reserve(record.size());
      for (const auto& field : record)
        fields.push_back({
          field.first,
          infer(field.second),
        });
      return type{record_type{fields}};
    },
  };
  return caf::visit(f, value);
}

type type::from_legacy_type(const legacy_type& other) noexcept {
  auto attributes = std::vector<attribute_view>{};
  attributes.reserve(other.attributes().size());
  for (const auto& attribute : other.attributes()) {
    if (attribute.value)
      attributes.push_back({attribute.key, *attribute.value});
    else
      attributes.push_back({attribute.key});
  }
  auto f = detail::overload{
    [&](const legacy_none_type&) noexcept {
      return type{other.name(), type{}, std::move(attributes)};
    },
    [&](const legacy_bool_type&) noexcept {
      return type{other.name(), bool_type{}, std::move(attributes)};
    },
    [&](const legacy_integer_type&) noexcept {
      return type{other.name(), int64_type{}, std::move(attributes)};
    },
    [&](const legacy_count_type&) noexcept {
      return type{other.name(), uint64_type{}, std::move(attributes)};
    },
    [&](const legacy_real_type&) noexcept {
      return type{other.name(), double_type{}, std::move(attributes)};
    },
    [&](const legacy_duration_type&) noexcept {
      return type{other.name(), duration_type{}, std::move(attributes)};
    },
    [&](const legacy_time_type&) noexcept {
      return type{other.name(), time_type{}, std::move(attributes)};
    },
    [&](const legacy_string_type&) noexcept {
      return type{other.name(), string_type{}, std::move(attributes)};
    },
    [&](const legacy_pattern_type&) noexcept -> type {
      die("unreachable");
    },
    [&](const legacy_address_type&) noexcept {
      return type{other.name(), ip_type{}, std::move(attributes)};
    },
    [&](const legacy_subnet_type&) noexcept {
      return type{other.name(), subnet_type{}, std::move(attributes)};
    },
    [&](const legacy_enumeration_type& enumeration) noexcept {
      auto fields = std::vector<struct enumeration_type::field>{};
      fields.reserve(enumeration.fields.size());
      for (const auto& field : enumeration.fields)
        fields.push_back({field});
      return type{other.name(), enumeration_type{fields},
                  std::move(attributes)};
    },
    [&](const legacy_list_type& list) noexcept {
      return type{other.name(), list_type{from_legacy_type(list.value_type)},
                  std::move(attributes)};
    },
    [&](const legacy_map_type& map) noexcept {
      return type{other.name(),
                  map_type{from_legacy_type(map.key_type),
                           from_legacy_type(map.value_type)},
                  std::move(attributes)};
    },
    [&](const legacy_alias_type& alias) noexcept {
      return type{other.name(), from_legacy_type(alias.value_type),
                  std::move(attributes)};
    },
    [&](const legacy_record_type& record) noexcept {
      auto fields = std::vector<struct record_type::field_view>{};
      fields.reserve(record.fields.size());
      for (const auto& field : record.fields)
        fields.push_back({field.name, from_legacy_type(field.type)});
      return type{other.name(), record_type{fields}, std::move(attributes)};
    },
  };
  return caf::visit(f, other);
}

legacy_type type::to_legacy_type() const noexcept {
  auto f = detail::overload{
    [&](const bool_type&) noexcept -> legacy_type {
      return legacy_bool_type{};
    },
    [&](const int64_type&) noexcept -> legacy_type {
      return legacy_integer_type{};
    },
    [&](const uint64_type&) noexcept -> legacy_type {
      return legacy_count_type{};
    },
    [&](const double_type&) noexcept -> legacy_type {
      return legacy_real_type{};
    },
    [&](const duration_type&) noexcept -> legacy_type {
      return legacy_duration_type{};
    },
    [&](const time_type&) noexcept -> legacy_type {
      return legacy_time_type{};
    },
    [&](const string_type&) noexcept -> legacy_type {
      return legacy_string_type{};
    },
    [&](const ip_type&) noexcept -> legacy_type {
      return legacy_address_type{};
    },
    [&](const subnet_type&) noexcept -> legacy_type {
      return legacy_subnet_type{};
    },
    [&](const enumeration_type& enumeration) noexcept -> legacy_type {
      auto result = legacy_enumeration_type{};
      for (uint32_t i = 0; const auto& field : enumeration.fields()) {
        VAST_ASSERT(i++ == field.key, "failed to convert enumeration type to "
                                      "legacy enumeration type");
        result.fields.emplace_back(std::string{field.name});
      }
      return result;
    },
    [&](const list_type& list) noexcept -> legacy_type {
      return legacy_list_type{list.value_type().to_legacy_type()};
    },
    [&](const map_type& map) noexcept -> legacy_type {
      return legacy_map_type{
        map.key_type().to_legacy_type(),
        map.value_type().to_legacy_type(),
      };
    },
    [&](const record_type& record) noexcept -> legacy_type {
      auto result = legacy_record_type{};
      for (const auto& field : record.fields())
        result.fields.push_back({
          std::string{field.name},
          field.type.to_legacy_type(),
        });
      return result;
    },
  };
  auto result = *this ? caf::visit(f, *this) : legacy_none_type{};
  if (!name().empty())
    result = legacy_alias_type{std::move(result)}.name(std::string{name()});
  for (const auto& attribute : attributes()) {
    if (attribute.value.empty())
      result.update_attributes({{std::string{attribute.key}}});
    else
      result.update_attributes({{
        std::string{attribute.key},
        std::string{attribute.value},
      }});
  }
  return result;
}

const fbs::Type& type::table(enum transparent transparent) const noexcept {
  const auto repr = as_bytes(*this);
  const auto* table = fbs::GetType(repr.data());
  VAST_ASSERT(table);
  const auto* resolved = resolve_transparent(table, transparent);
  VAST_ASSERT(resolved);
  return *resolved;
}

type::operator bool() const noexcept {
  return table(transparent::yes).type_type() != fbs::type::Type::NONE;
}

bool operator==(const type& lhs, const type& rhs) noexcept {
  const auto lhs_bytes = as_bytes(lhs);
  const auto rhs_bytes = as_bytes(rhs);
  return std::equal(lhs_bytes.begin(), lhs_bytes.end(), rhs_bytes.begin(),
                    rhs_bytes.end());
}

std::strong_ordering operator<=>(const type& lhs, const type& rhs) noexcept {
  auto lhs_bytes = as_bytes(lhs);
  auto rhs_bytes = as_bytes(rhs);
  // TODO: Replace implementation with `std::lexicographical_compare_three_way`
  // once that is implemented for all compilers we need to support. This does
  // the same thing essentially, just a lot less generic.
  if (lhs_bytes.data() == rhs_bytes.data()
      && lhs_bytes.size() == rhs_bytes.size())
    return std::strong_ordering::equal;
  while (!lhs_bytes.empty() && !rhs_bytes.empty()) {
    if (lhs_bytes[0] < rhs_bytes[0])
      return std::strong_ordering::less;
    if (lhs_bytes[0] > rhs_bytes[0])
      return std::strong_ordering::greater;
    lhs_bytes = lhs_bytes.subspan(1);
    rhs_bytes = rhs_bytes.subspan(1);
  }
  return !lhs_bytes.empty()   ? std::strong_ordering::greater
         : !rhs_bytes.empty() ? std::strong_ordering::less
                              : std::strong_ordering::equivalent;
}

uint8_t type::type_index() const noexcept {
  static_assert(
    std::is_same_v<uint8_t, std::underlying_type_t<vast::fbs::type::Type>>);
  return static_cast<uint8_t>(table(transparent::yes).type_type());
}

std::span<const std::byte> as_bytes(const type& x) noexcept {
  return x.table_ ? as_bytes(*x.table_) : none_type_representation();
}

data type::construct() const noexcept {
  auto f = []<concrete_type T>(const T& x) noexcept -> data {
    return x.construct();
  };
  return *this ? caf::visit(f, *this) : data{};
}

data type::to_definition(bool expand) const noexcept {
  VAST_ASSERT(*this);
  // Utility function for adding the attributes to a type definition, if
  // required.
  auto attributes_enriched_definition
    = [&](data type_definition) noexcept -> data {
    auto attributes_definition = record::vector_type{};
    for (const auto& [key, value] : attributes(recurse::no)) {
      if (value.empty())
        attributes_definition.emplace_back(std::string{key}, caf::none);
      else
        attributes_definition.emplace_back(std::string{key},
                                           std::string{value});
    }
    if (!expand && attributes_definition.empty())
      return type_definition;
    return record{
      {"type", std::move(type_definition)},
      {"attributes", record::make_unsafe(std::move(attributes_definition))},
    };
  };
  // Check if there is an alias, and if there is then visit then one first.
  for (const auto& alias : aliases()) {
    auto definition
      = attributes_enriched_definition(alias.to_definition(expand));
    const auto name = this->name();
    if (!expand && name.empty())
      return definition;
    return record{
      {std::string{name}, std::move(definition)},
    };
  }
  // At this point we've gone through all named aliases, but the last innermost
  // type may still have attributes.
  VAST_ASSERT(name().empty());
  auto make_type_definition = detail::overload{
    [](const basic_type auto& self) noexcept -> data {
      return fmt::to_string(self);
    },
    [](const enumeration_type& self) noexcept -> data {
      auto definition = list{};
      for (const auto& field : self.fields())
        definition.push_back(std::string{field.name});
      return record{
        {"enum", std::move(definition)},
      };
    },
    [&](const list_type& self) noexcept -> data {
      return record{
        {"list", self.value_type().to_definition(expand)},
      };
    },
    [&](const map_type& self) noexcept -> data {
      return record{
        {"map",
         record{
           {"key", self.key_type().to_definition(expand)},
           {"value", self.value_type().to_definition(expand)},
         }},
      };
    },
    [&](const record_type& self) noexcept -> data {
      auto definition = list{};
      definition.reserve(self.num_fields());
      for (const auto& [name, type] : self.fields())
        definition.push_back(
          record{{std::string{name}, type.to_definition(expand)}});
      return record{
        {"record", std::move(definition)},
      };
    },
  };
  return attributes_enriched_definition(
    caf::visit(make_type_definition, *this));
}

type type::from_arrow(const arrow::DataType& other) noexcept {
  auto f = detail::overload{
    []<class T>(const T&) noexcept -> type {
      using vast_type = type_from_arrow_t<T>;
      static_assert(basic_type<vast_type>, "unhandled complex type");
      return type{vast_type{}};
    },
    [](const duration_type::arrow_type& dt) noexcept -> type {
      VAST_ASSERT(dt.unit() == arrow::TimeUnit::NANO);
      return type{duration_type{}};
    },
    [](const time_type::arrow_type& dt) noexcept -> type {
      VAST_ASSERT(dt.unit() == arrow::TimeUnit::NANO);
      return type{time_type{}};
    },
    [](const enumeration_type::arrow_type& et) noexcept -> type {
      return type{et.vast_type_};
    },
    [](const list_type::arrow_type& lt) noexcept -> type {
      const auto value_field = lt.value_field();
      VAST_ASSERT(value_field);
      return type{list_type{from_arrow(*value_field)}};
    },
    [](const map_type::arrow_type& mt) noexcept -> type {
      const auto key_field = mt.key_field();
      const auto item_field = mt.item_field();
      VAST_ASSERT(key_field);
      VAST_ASSERT(item_field);
      return type{map_type{from_arrow(*key_field), from_arrow(*item_field)}};
    },
    [](const record_type::arrow_type& rt) noexcept -> type {
      auto fields = std::vector<record_type::field_view>{};
      fields.reserve(rt.num_fields());
      for (const auto& field : rt.fields()) {
        VAST_ASSERT(field);
        fields.emplace_back(field->name(), from_arrow(*field));
      }
      return type{record_type{fields}};
    },
  };
  return caf::visit(f, other);
}

type type::from_arrow(const arrow::Field& field) noexcept {
  VAST_ASSERT(field.type());
  auto result = from_arrow(*field.type());
  if (const auto& metadata = field.metadata())
    result = enrich_type_with_arrow_metadata(std::move(result), *metadata);
  return result;
}

type type::from_arrow(const arrow::Schema& schema) noexcept {
  auto fields = std::vector<record_type::field_view>{};
  fields.reserve(schema.num_fields());
  for (const auto& field : schema.fields()) {
    VAST_ASSERT(field);
    fields.emplace_back(field->name(), from_arrow(*field));
  }
  auto result = type{record_type{fields}};
  if (const auto& metadata = schema.metadata())
    result = enrich_type_with_arrow_metadata(std::move(result), *metadata);
  return result;
}

std::shared_ptr<arrow::DataType> type::to_arrow_type() const noexcept {
  auto f = []<concrete_type T>(
             const T& x) noexcept -> std::shared_ptr<arrow::DataType> {
    return x.to_arrow_type();
  };
  return *this ? caf::visit(f, *this) : nullptr;
}

std::shared_ptr<arrow::Field>
type::to_arrow_field(std::string_view name, bool nullable) const noexcept {
  return arrow::field(std::string{name}, to_arrow_type(), nullable,
                      make_arrow_metadata(*this));
}

std::shared_ptr<arrow::Schema> type::to_arrow_schema() const noexcept {
  VAST_ASSERT(!name().empty());
  VAST_ASSERT(caf::holds_alternative<record_type>(*this));
  return arrow::schema(caf::get<record_type>(*this).to_arrow_type()->fields(),
                       make_arrow_metadata(*this));
}

std::shared_ptr<arrow::ArrayBuilder>
type::make_arrow_builder(arrow::MemoryPool* pool) const noexcept {
  auto f = [&]<concrete_type T>(
             const T& x) noexcept -> std::shared_ptr<arrow::ArrayBuilder> {
    return x.make_arrow_builder(pool);
  };
  return *this ? caf::visit(f, *this) : nullptr;
}

auto inspect(caf::detail::stringification_inspector& f, type& x) {
  auto str = fmt::to_string(x);
  return f.apply(str);
}

void type::assign_metadata(const type& other) noexcept {
  const auto name = other.name();
  if (name.empty() && !other.has_attributes())
    return;
  const auto nested_bytes = as_bytes(table_);
  const auto reserved_size = [&]() noexcept {
    // The total length is made up from the following terms:
    // - 52 bytes FlatBuffers table framing
    // - Nested type FlatBuffers table size
    // - All contained string lengths, rounded up to four each
    // Note that this cannot account for attributes, since they are stored in
    // hash map which makes calculating the space requirements non-trivial.
    size_t size = 52;
    size += nested_bytes.size();
    size += reserved_string_size(name);
    return size;
  };
  auto builder = other.has_attributes()
                   ? flatbuffers::FlatBufferBuilder{reserved_size()}
                   : flatbuffers::FlatBufferBuilder{};
  const auto nested_type_offset = builder.CreateVector(
    reinterpret_cast<const uint8_t*>(nested_bytes.data()), nested_bytes.size());
  const auto name_offset = name.empty() ? 0 : builder.CreateString(name);
  const auto attributes_offset = [&]() noexcept
    -> flatbuffers::Offset<
      flatbuffers::Vector<flatbuffers::Offset<fbs::type::detail::Attribute>>> {
    if (!other.has_attributes())
      return 0;
    auto attributes_offsets
      = std::vector<flatbuffers::Offset<fbs::type::detail::Attribute>>{};
    for (const auto& attribute : other.attributes()) {
      const auto key_offset = builder.CreateString(attribute.key);
      const auto value_offset
        = attribute.value.empty() ? 0 : builder.CreateString(attribute.value);
      attributes_offsets.emplace_back(
        fbs::type::detail::CreateAttribute(builder, key_offset, value_offset));
    }
    return builder.CreateVectorOfSortedTables(&attributes_offsets);
  }();
  const auto enriched_type_offset = fbs::type::detail::CreateEnrichedType(
    builder, nested_type_offset, name_offset, attributes_offset);
  const auto type_offset = fbs::CreateType(
    builder, fbs::type::Type::enriched_type, enriched_type_offset.Union());
  builder.Finish(type_offset);
  auto result = builder.Release();
  table_ = chunk::make(std::move(result));
}

std::string_view type::name() const& noexcept {
  const auto* root = &table(transparent::no);
  while (true) {
    switch (root->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type:
      case fbs::type::Type::record_type:
        return std::string_view{};
      case fbs::type::Type::enriched_type: {
        const auto* enriched_type = root->type_as_enriched_type();
        if (const auto* name = enriched_type->name())
          return name->string_view();
        root = enriched_type->type_nested_root();
        VAST_ASSERT(root);
        break;
      }
    }
  }
  __builtin_unreachable();
}

generator<std::string_view> type::names() const& noexcept {
  const auto* root = &table(transparent::no);
  while (true) {
    switch (root->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type:
      case fbs::type::Type::record_type:
        co_return;
      case fbs::type::Type::enriched_type: {
        const auto* enriched_type = root->type_as_enriched_type();
        if (const auto* name = enriched_type->name())
          co_yield name->string_view();
        root = enriched_type->type_nested_root();
        VAST_ASSERT(root);
        break;
      }
    }
  }
  __builtin_unreachable();
}

std::optional<std::string_view>
type::attribute(const char* key) const& noexcept {
  const auto* root = &table(transparent::no);
  while (true) {
    switch (root->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type:
      case fbs::type::Type::record_type:
        return std::nullopt;
      case fbs::type::Type::enriched_type: {
        const auto* enriched_type = root->type_as_enriched_type();
        if (const auto* attributes = enriched_type->attributes()) {
          if (const auto* attribute = attributes->LookupByKey(key)) {
            if (const auto* value = attribute->value())
              return value->string_view();
            return std::string_view{};
          }
        }
        root = enriched_type->type_nested_root();
        VAST_ASSERT(root);
        break;
      }
    }
  }
  __builtin_unreachable();
}

bool type::has_attributes() const noexcept {
  const auto* root = &table(transparent::no);
  while (true) {
    switch (root->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type:
      case fbs::type::Type::record_type:
        return false;
      case fbs::type::Type::enriched_type: {
        const auto* enriched_type = root->type_as_enriched_type();
        if (const auto* attributes = enriched_type->attributes()) {
          if (attributes->begin() != attributes->end())
            return true;
        }
        root = enriched_type->type_nested_root();
        VAST_ASSERT(root);
        break;
      }
    }
  }
  __builtin_unreachable();
}

generator<type::attribute_view>
type::attributes(type::recurse recurse) const& noexcept {
  const auto* root = &table(transparent::no);
  while (true) {
    switch (root->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type:
      case fbs::type::Type::record_type:
        co_return;
      case fbs::type::Type::enriched_type: {
        const auto* enriched_type = root->type_as_enriched_type();
        if (const auto* attributes = enriched_type->attributes()) {
          for (const auto& attribute : *attributes) {
            if (attribute->value() != nullptr
                && attribute->value()->begin() != attribute->value()->end())
              co_yield {attribute->key()->string_view(),
                        attribute->value()->string_view()};
            else
              co_yield {attribute->key()->string_view(), std::string_view{}};
          }
        }
        if (recurse == type::recurse::no)
          co_return;
        root = enriched_type->type_nested_root();
        VAST_ASSERT(root);
        break;
      }
    }
  }
  __builtin_unreachable();
}

generator<type> type::aliases() const noexcept {
  const auto* root = &table(transparent::no);
  while (true) {
    switch (root->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type:
      case fbs::type::Type::record_type:
        co_return;
      case fbs::type::Type::enriched_type: {
        const auto* enriched_type = root->type_as_enriched_type();
        if (enriched_type->name())
          co_yield type{table_->slice(as_bytes(*enriched_type->type()))};
        root = enriched_type->type_nested_root();
        VAST_ASSERT(root);
        break;
      }
    }
  }
  __builtin_unreachable();
}

bool is_container(const type& type) noexcept {
  const auto& root = type.table(type::transparent::yes);
  switch (root.type_type()) {
    case fbs::type::Type::pattern_type:
      __builtin_unreachable();
    case fbs::type::Type::NONE:
    case fbs::type::Type::bool_type:
    case fbs::type::Type::int64_type:
    case fbs::type::Type::uint64_type:
    case fbs::type::Type::double_type:
    case fbs::type::Type::duration_type:
    case fbs::type::Type::time_type:
    case fbs::type::Type::string_type:
    case fbs::type::Type::ip_type:
    case fbs::type::Type::subnet_type:
    case fbs::type::Type::enumeration_type:
      return false;
    case fbs::type::Type::list_type:
    case fbs::type::Type::map_type:
    case fbs::type::Type::record_type:
      return true;
    case fbs::type::Type::enriched_type:
      __builtin_unreachable();
  }
  __builtin_unreachable();
}

type flatten(const type& t) noexcept {
  if (const auto* rt = caf::get_if<record_type>(&t)) {
    auto result = type{flatten(*rt)};
    result.assign_metadata(t);
    return result;
  }
  return t;
}

bool congruent(const type& x, const type& y) noexcept {
  auto f = detail::overload{
    [](const enumeration_type& x, const enumeration_type& y) noexcept {
      const auto xf = x.fields();
      const auto yf = y.fields();
      if (xf.size() != yf.size())
        return false;
      for (size_t i = 0; i < xf.size(); ++i)
        if (xf[i].key != yf[i].key)
          return false;
      return true;
    },
    [](const list_type& x, const list_type& y) noexcept {
      return congruent(x.value_type(), y.value_type());
    },
    [](const map_type& x, const map_type& y) noexcept {
      return congruent(x.key_type(), y.key_type())
             && congruent(x.value_type(), y.value_type());
    },
    [](const record_type& x, const record_type& y) noexcept {
      if (x.num_fields() != y.num_fields())
        return false;
      for (size_t i = 0; i < x.num_fields(); ++i)
        if (!congruent(x.field(i).type, y.field(i).type))
          return false;
      return true;
    },
    []<complex_type T>(const T&, const T&) noexcept {
      static_assert(detail::always_false_v<T>, "missing congruency check for "
                                               "complex type");
    },
    []<concrete_type T, concrete_type U>(const T&, const U&) noexcept {
      return std::is_same_v<T, U>;
    },
  };
  if (!x || !y)
    return true;
  return caf::visit(f, x, y);
}

bool congruent(const type& x, const data& y) noexcept {
  auto f = detail::overload{
    [](const auto&, const auto&) noexcept {
      return false;
    },
    [](const bool_type&, bool) noexcept {
      return true;
    },
    [](const int64_type&, int64_t) noexcept {
      return true;
    },
    [](const uint64_type&, uint64_t) noexcept {
      return true;
    },
    [](const double_type&, double) noexcept {
      return true;
    },
    [](const duration_type&, duration) noexcept {
      return true;
    },
    [](const time_type&, time) noexcept {
      return true;
    },
    [](const string_type&, const std::string&) noexcept {
      return true;
    },
    [](const string_type&, const pattern&) noexcept {
      return true;
    },
    [](const ip_type&, const ip&) noexcept {
      return true;
    },
    [](const subnet_type&, const subnet&) noexcept {
      return true;
    },
    [](const enumeration_type& x, const std::string& y) noexcept {
      return x.resolve(y).has_value();
    },
    [](const list_type&, const list&) noexcept {
      return true;
    },
    [](const map_type&, const map&) noexcept {
      return true;
    },
    [](const record_type& x, const list& y) noexcept {
      if (x.num_fields() != y.size())
        return false;
      for (size_t i = 0; i < x.num_fields(); ++i)
        if (!congruent(x.field(i).type, y[i]))
          return false;
      return true;
    },
    [](const record_type& x, const record& y) noexcept {
      if (x.num_fields() != y.size())
        return false;
      for (const auto& field : x.fields()) {
        if (auto it = y.find(field.name); it != y.end()) {
          if (!congruent(field.type, it->second))
            return false;
        } else {
          return false;
        }
      }
      return true;
    },
  };
  return caf::visit(f, x, y);
}

bool congruent(const data& x, const type& y) noexcept {
  return congruent(y, x);
}

bool compatible(const type& lhs, relational_operator op,
                const type& rhs) noexcept {
  return compatible(lhs, op, rhs.construct());
}

bool compatible(const type& lhs, relational_operator op,
                const data& rhs) noexcept {
  auto string_and_pattern = [](auto& x, auto& y) {
    return caf::holds_alternative<string_type>(x)
           && caf::holds_alternative<pattern>(y);
  };
  switch (op) {
    case relational_operator::equal:
    case relational_operator::not_equal:
      return !lhs || caf::holds_alternative<caf::none_t>(rhs)
             || string_and_pattern(lhs, rhs) || congruent(lhs, rhs);
    case relational_operator::less:
    case relational_operator::less_equal:
    case relational_operator::greater:
    case relational_operator::greater_equal:
      return congruent(lhs, rhs);
    case relational_operator::in:
    case relational_operator::not_in:
      if (caf::holds_alternative<string_type>(lhs))
        return caf::holds_alternative<std::string>(rhs) || is_container(rhs);
      else if (caf::holds_alternative<ip_type>(lhs)
               || caf::holds_alternative<subnet_type>(lhs))
        return caf::holds_alternative<subnet>(rhs) || is_container(rhs);
      else
        return is_container(rhs);
    case relational_operator::ni:
    case relational_operator::not_ni:
      if (caf::holds_alternative<std::string>(rhs))
        return caf::holds_alternative<string_type>(lhs) || is_container(lhs);
      else if (caf::holds_alternative<ip>(rhs)
               || caf::holds_alternative<subnet>(rhs))
        return caf::holds_alternative<subnet_type>(lhs) || is_container(lhs);
      else
        return is_container(lhs);
  }
  __builtin_unreachable();
}

bool compatible(const data& lhs, relational_operator op,
                const type& rhs) noexcept {
  return compatible(rhs, flip(op), lhs);
}

bool is_subset(const type& x, const type& y) noexcept {
  const auto* sub = caf::get_if<record_type>(&x);
  const auto* super = caf::get_if<record_type>(&y);
  // If either of the types is not a record type, check if they are
  // congruent instead.
  if (!sub || !super)
    return congruent(x, y);
  // Check whether all fields of the subset exist in the superset.
  for (const auto& sub_field : sub->fields()) {
    bool exists_in_superset = false;
    for (const auto& super_field : super->fields()) {
      if (sub_field.name == super_field.name) {
        // Perform the check recursively to support nested record types.
        if (!is_subset(sub_field.type, super_field.type))
          return false;
        exists_in_superset = true;
      }
    }
    // Not all fields of the subset exist in the superset; exit early.
    if (!exists_in_superset)
      return false;
  }
  return true;
}

// WARNING: making changes to the logic of this function requires adapting the
// companion overload in view.cpp.
bool type_check(const type& x, const data& y) noexcept {
  auto f = detail::overload{
    [&](const auto&, const caf::none_t&) {
      // Every type can be assigned nil.
      return true;
    },
    [&](const enumeration_type& t, const enumeration& u) {
      return !t.field(u).empty();
    },
    [&](const list_type& t, const list& u) {
      if (u.empty())
        return true;
      const auto vt = t.value_type();
      auto it = u.begin();
      const auto check = [&](const auto& d) noexcept {
        return type_check(vt, d);
      };
      if (check(*it)) {
        // Technically lists can contain heterogeneous data,
        // but for optimization purposes we only check the
        // first element when assertions are disabled.
        VAST_ASSERT(std::all_of(it + 1, u.end(), check), //
                    "expected a homogenous list");
        return true;
      }
      return false;
    },
    [&](const map_type& t, const map& u) {
      if (u.empty())
        return true;
      const auto kt = t.key_type();
      const auto vt = t.value_type();
      auto it = u.begin();
      const auto check = [&](const auto& d) noexcept {
        return type_check(kt, d.first) && type_check(vt, d.second);
      };
      if (check(*it)) {
        // Technically maps can contain heterogeneous data,
        // but for optimization purposes we only check the
        // first element when assertions are disabled.
        VAST_ASSERT(std::all_of(it + 1, u.end(), check), //
                    "expected a homogenous map");
        return true;
      }
      return false;
    },
    [&](const record_type& t, const record& u) {
      if (u.size() != t.num_fields())
        return false;
      for (size_t i = 0; i < u.size(); ++i) {
        const auto field = t.field(i);
        const auto& [k, v] = as_vector(u)[i];
        if (field.name != k || type_check(field.type, v))
          return false;
      }
      return true;
    },
    [&]<basic_type T, class U>(const T&, const U&) {
      // For basic types we can solely rely on the result of
      // construct.
      return std::is_same_v<type_to_data_t<T>, U>;
    },
    [&]<complex_type T, class U>(const T&, const U&) {
      // We don't have a matching overload.
      static_assert(!std::is_same_v<type_to_data_t<T>, U>, //
                    "missing type check overload");
      return false;
    },
  };
  return caf::visit(f, x, y);
}

caf::error
replace_if_congruent(std::initializer_list<type*> xs, const module& with) {
  for (auto* x : xs)
    if (const auto* t = with.find(x->name())) {
      if (!congruent(*x, *t))
        return caf::make_error(ec::type_clash,
                               fmt::format("incongruent type {}", x->name()));
      *x = *t;
    }
  return caf::none;
}

// -- bool_type ---------------------------------------------------------------

static_assert(bool_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::bool_type));

std::span<const std::byte> as_bytes(const bool_type&) noexcept {
  static const auto buffer = []() noexcept {
    constexpr auto reserved_size = 32;
    auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
    const auto bool_type = fbs::type::CreateBoolType(builder);
    const auto type
      = fbs::CreateType(builder, fbs::type::Type::bool_type, bool_type.Union());
    builder.Finish(type);
    auto result = builder.Release();
    VAST_ASSERT(result.size() == reserved_size);
    return result;
  }();
  return as_bytes(buffer);
}

bool bool_type::construct() noexcept {
  return {};
}

std::shared_ptr<arrow::BooleanType> bool_type::to_arrow_type() noexcept {
  return std::static_pointer_cast<arrow_type>(arrow::boolean());
}

std::shared_ptr<typename arrow::TypeTraits<bool_type::arrow_type>::BuilderType>
bool_type::make_arrow_builder(arrow::MemoryPool* pool) noexcept {
  return std::make_shared<typename arrow::TypeTraits<arrow_type>::BuilderType>(
    to_arrow_type(), pool);
}

// -- int64_type ------------------------------------------------------------

static_assert(int64_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::int64_type));

std::span<const std::byte> as_bytes(const int64_type&) noexcept {
  static const auto buffer = []() noexcept {
    constexpr auto reserved_size = 32;
    auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
    const auto int64_type = fbs::type::CreateInt64Type(builder);
    const auto type = fbs::CreateType(builder, fbs::type::Type::int64_type,
                                      int64_type.Union());
    builder.Finish(type);
    auto result = builder.Release();
    VAST_ASSERT(result.size() == reserved_size);
    return result;
  }();
  return as_bytes(buffer);
}

int64_t int64_type::construct() noexcept {
  return {};
}

std::shared_ptr<int64_type::arrow_type> int64_type::to_arrow_type() noexcept {
  return std::static_pointer_cast<arrow_type>(arrow::int64());
}

std::shared_ptr<typename arrow::TypeTraits<int64_type::arrow_type>::BuilderType>
int64_type::make_arrow_builder(arrow::MemoryPool* pool) noexcept {
  return std::make_shared<typename arrow::TypeTraits<arrow_type>::BuilderType>(
    to_arrow_type(), pool);
}

// -- uint64_type --------------------------------------------------------------

static_assert(uint64_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::uint64_type));

std::span<const std::byte> as_bytes(const uint64_type&) noexcept {
  static const auto buffer = []() noexcept {
    constexpr auto reserved_size = 32;
    auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
    const auto uint64_type = fbs::type::CreateUInt64Type(builder);
    const auto type = fbs::CreateType(builder, fbs::type::Type::uint64_type,
                                      uint64_type.Union());
    builder.Finish(type);
    auto result = builder.Release();
    VAST_ASSERT(result.size() == reserved_size);
    return result;
  }();
  return as_bytes(buffer);
}

uint64_t uint64_type::construct() noexcept {
  return {};
}

std::shared_ptr<uint64_type::arrow_type> uint64_type::to_arrow_type() noexcept {
  return std::static_pointer_cast<arrow_type>(arrow::uint64());
}

std::shared_ptr<typename arrow::TypeTraits<uint64_type::arrow_type>::BuilderType>
uint64_type::make_arrow_builder(arrow::MemoryPool* pool) noexcept {
  return std::make_shared<typename arrow::TypeTraits<arrow_type>::BuilderType>(
    to_arrow_type(), pool);
}

// -- double_type ---------------------------------------------------------------

static_assert(double_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::double_type));

std::span<const std::byte> as_bytes(const double_type&) noexcept {
  static const auto buffer = []() noexcept {
    constexpr auto reserved_size = 32;
    auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
    const auto double_type = fbs::type::CreateDoubleType(builder);
    const auto type = fbs::CreateType(builder, fbs::type::Type::double_type,
                                      double_type.Union());
    builder.Finish(type);
    auto result = builder.Release();

    VAST_ASSERT(result.size() == reserved_size);
    return result;
  }();
  return as_bytes(buffer);
}

double double_type::construct() noexcept {
  return {};
}

std::shared_ptr<double_type::arrow_type> double_type::to_arrow_type() noexcept {
  return std::static_pointer_cast<arrow_type>(arrow::float64());
}

std::shared_ptr<typename arrow::TypeTraits<double_type::arrow_type>::BuilderType>
double_type::make_arrow_builder(arrow::MemoryPool* pool) noexcept {
  return std::make_shared<typename arrow::TypeTraits<arrow_type>::BuilderType>(
    to_arrow_type(), pool);
}

// -- duration_type -----------------------------------------------------------

static_assert(duration_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::duration_type));

std::span<const std::byte> as_bytes(const duration_type&) noexcept {
  static const auto buffer = []() noexcept {
    constexpr auto reserved_size = 32;
    auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
    const auto duration_type = fbs::type::CreateDurationType(builder);
    const auto type = fbs::CreateType(builder, fbs::type::Type::duration_type,
                                      duration_type.Union());
    builder.Finish(type);
    auto result = builder.Release();

    VAST_ASSERT(result.size() == reserved_size);
    return result;
  }();
  return as_bytes(buffer);
}

duration duration_type::construct() noexcept {
  return {};
}

std::shared_ptr<duration_type::arrow_type>
duration_type::to_arrow_type() noexcept {
  return std::static_pointer_cast<arrow_type>(
    arrow::duration(arrow::TimeUnit::NANO));
}

std::shared_ptr<
  typename arrow::TypeTraits<duration_type::arrow_type>::BuilderType>
duration_type::make_arrow_builder(arrow::MemoryPool* pool) noexcept {
  return std::make_shared<typename arrow::TypeTraits<arrow_type>::BuilderType>(
    to_arrow_type(), pool);
}

// -- time_type ---------------------------------------------------------------

static_assert(time_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::time_type));

std::span<const std::byte> as_bytes(const time_type&) noexcept {
  static const auto buffer = []() noexcept {
    constexpr auto reserved_size = 32;
    auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
    const auto time_type = fbs::type::CreateDurationType(builder);
    const auto type
      = fbs::CreateType(builder, fbs::type::Type::time_type, time_type.Union());
    builder.Finish(type);
    auto result = builder.Release();

    VAST_ASSERT(result.size() == reserved_size);
    return result;
  }();
  return as_bytes(buffer);
}

time time_type::construct() noexcept {
  return {};
}

std::shared_ptr<time_type::arrow_type> time_type::to_arrow_type() noexcept {
  return std::static_pointer_cast<arrow_type>(
    arrow::timestamp(arrow::TimeUnit::NANO));
}

std::shared_ptr<typename arrow::TypeTraits<time_type::arrow_type>::BuilderType>
time_type::make_arrow_builder(arrow::MemoryPool* pool) noexcept {
  return std::make_shared<typename arrow::TypeTraits<arrow_type>::BuilderType>(
    to_arrow_type(), pool);
}

// -- string_type --------------------------------------------------------------

static_assert(string_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::string_type));

std::span<const std::byte> as_bytes(const string_type&) noexcept {
  static const auto buffer = []() noexcept {
    constexpr auto reserved_size = 32;
    auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
    const auto string_type = fbs::type::CreateStringType(builder);
    const auto type = fbs::CreateType(builder, fbs::type::Type::string_type,
                                      string_type.Union());
    builder.Finish(type);
    auto result = builder.Release();

    VAST_ASSERT(result.size() == reserved_size);
    return result;
  }();
  return as_bytes(buffer);
}

std::string string_type::construct() noexcept {
  return {};
}

std::shared_ptr<string_type::arrow_type> string_type::to_arrow_type() noexcept {
  return std::static_pointer_cast<arrow_type>(arrow::utf8());
}

std::shared_ptr<typename arrow::TypeTraits<string_type::arrow_type>::BuilderType>
string_type::make_arrow_builder(arrow::MemoryPool* pool) noexcept {
  return std::make_shared<typename arrow::TypeTraits<arrow_type>::BuilderType>(
    to_arrow_type(), pool);
}

// -- ip_type ------------------------------------------------------------

static_assert(ip_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::ip_type));

std::span<const std::byte> as_bytes(const ip_type&) noexcept {
  static const auto buffer = []() noexcept {
    constexpr auto reserved_size = 32;
    auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
    const auto ip_type = fbs::type::CreateIPType(builder);
    const auto type
      = fbs::CreateType(builder, fbs::type::Type::ip_type, ip_type.Union());
    builder.Finish(type);
    auto result = builder.Release();
    VAST_ASSERT(result.size() == reserved_size);
    return result;
  }();
  return as_bytes(buffer);
}

ip ip_type::construct() noexcept {
  return {};
}

std::shared_ptr<ip_type::arrow_type> ip_type::to_arrow_type() noexcept {
  return std::make_shared<arrow_type>();
}

std::shared_ptr<ip_type::builder_type>
ip_type::make_arrow_builder(arrow::MemoryPool* pool) noexcept {
  return std::make_shared<builder_type>(pool);
}

void ip_type::arrow_type::register_extension() noexcept {
  if (arrow::GetExtensionType(name))
    return;
  auto status = arrow::RegisterExtensionType(std::make_shared<arrow_type>());
  VAST_ASSERT(status.ok());
}

ip_type::builder_type::builder_type(arrow::MemoryPool* pool)
  : arrow::FixedSizeBinaryBuilder(ip_type::to_arrow_type()->storage_type(),
                                  pool) {
  // nop
}

std::shared_ptr<arrow::DataType> ip_type::builder_type::type() const {
  return ip_type::to_arrow_type();
}

arrow::Status
ip_type::builder_type::FinishInternal(std::shared_ptr<arrow::ArrayData>* out) {
  if (auto status = arrow::FixedSizeBinaryBuilder::FinishInternal(out);
      !status.ok())
    return status;
  auto result = caf::get<arrow_type>(*type()).MakeArray(*out);
  *out = result->data();
  return arrow::Status::OK();
}

ip_type::arrow_type::arrow_type() noexcept
  : arrow::ExtensionType(arrow::fixed_size_binary(16)) {
  // nop
}

std::string ip_type::arrow_type::extension_name() const {
  return name;
}

bool ip_type::arrow_type::ExtensionEquals(
  const arrow::ExtensionType& other) const {
  return other.extension_name() == name;
}

std::shared_ptr<arrow::Array>
ip_type::arrow_type::MakeArray(std::shared_ptr<arrow::ArrayData> data) const {
  return std::make_shared<array_type>(std::move(data));
}

arrow::Result<std::shared_ptr<arrow::DataType>>
ip_type::arrow_type::Deserialize(std::shared_ptr<arrow::DataType> storage_type,
                                 const std::string& serialized) const {
  if (serialized != name)
    return arrow::Status::Invalid("type identifier does not match");
  if (!storage_type->Equals(storage_type_))
    return arrow::Status::Invalid("storage type does not match");
  return std::make_shared<arrow_type>();
}

std::string ip_type::arrow_type::Serialize() const {
  return name;
}

std::shared_ptr<arrow::FixedSizeBinaryArray>
ip_type::array_type::storage() const {
  return std::static_pointer_cast<arrow::FixedSizeBinaryArray>(
    arrow::ExtensionArray::storage());
}

// -- subnet_type -------------------------------------------------------------

static_assert(subnet_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::subnet_type));

std::span<const std::byte> as_bytes(const subnet_type&) noexcept {
  static const auto buffer = []() noexcept {
    constexpr auto reserved_size = 32;
    auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
    const auto subnet_type = fbs::type::CreateSubnetType(builder);
    const auto type = fbs::CreateType(builder, fbs::type::Type::subnet_type,
                                      subnet_type.Union());
    builder.Finish(type);
    auto result = builder.Release();

    VAST_ASSERT(result.size() == reserved_size);
    return result;
  }();
  return as_bytes(buffer);
}

subnet subnet_type::construct() noexcept {
  return {};
}

std::shared_ptr<subnet_type::arrow_type> subnet_type::to_arrow_type() noexcept {
  return std::make_shared<arrow_type>();
}

std::shared_ptr<subnet_type::builder_type>
subnet_type::make_arrow_builder(arrow::MemoryPool* pool) noexcept {
  return std::make_shared<builder_type>(pool);
}

subnet_type::builder_type::builder_type(arrow::MemoryPool* pool)
  : arrow::StructBuilder(subnet_type::to_arrow_type()->storage_type(), pool,
                         {std::make_shared<ip_type::builder_type>(),
                          std::make_shared<arrow::UInt8Builder>()}) {
  // nop
}

std::shared_ptr<arrow::DataType> subnet_type::builder_type::type() const {
  return subnet_type::to_arrow_type();
}

ip_type::builder_type& subnet_type::builder_type::ip_builder() noexcept {
  return static_cast<ip_type::builder_type&>(*field_builder(0));
}

arrow::UInt8Builder& subnet_type::builder_type::length_builder() noexcept {
  return static_cast<arrow::UInt8Builder&>(*field_builder(1));
}

void subnet_type::arrow_type::register_extension() noexcept {
  if (arrow::GetExtensionType(name))
    return;
  auto status = arrow::RegisterExtensionType(std::make_shared<arrow_type>());
  VAST_ASSERT(status.ok());
}

subnet_type::arrow_type::arrow_type() noexcept
  : arrow::ExtensionType(
    arrow::struct_({arrow::field("address", ip_type::to_arrow_type()),
                    arrow::field("length", arrow::uint8())})) {
  // nop
}

std::string subnet_type::arrow_type::extension_name() const {
  return name;
}

bool subnet_type::arrow_type::ExtensionEquals(
  const arrow::ExtensionType& other) const {
  return other.extension_name() == name;
}

std::shared_ptr<arrow::Array> subnet_type::arrow_type::MakeArray(
  std::shared_ptr<arrow::ArrayData> data) const {
  return std::make_shared<array_type>(std::move(data));
}

arrow::Result<std::shared_ptr<arrow::DataType>>
subnet_type::arrow_type::Deserialize(
  std::shared_ptr<arrow::DataType> storage_type,
  const std::string& serialized) const {
  if (serialized != name)
    return arrow::Status::Invalid("type identifier does not match");
  if (!storage_type->Equals(storage_type_))
    return arrow::Status::Invalid("storage type does not match");
  return std::make_shared<arrow_type>();
}

std::string subnet_type::arrow_type::Serialize() const {
  return name;
}

std::shared_ptr<arrow::StructArray> subnet_type::array_type::storage() const {
  return std::static_pointer_cast<arrow::StructArray>(
    arrow::ExtensionArray::storage());
}

// -- enumeration_type --------------------------------------------------------

enumeration_type::enumeration_type(const enumeration_type& other) noexcept
  = default;

enumeration_type&
enumeration_type::operator=(const enumeration_type& rhs) noexcept
  = default;

enumeration_type::enumeration_type(enumeration_type&& other) noexcept = default;

enumeration_type& enumeration_type::operator=(enumeration_type&& other) noexcept
  = default;

enumeration_type::~enumeration_type() noexcept = default;

enumeration_type::enumeration_type(
  const std::vector<field_view>& fields) noexcept {
  construct_enumeration_type(*this, fields.data(),
                             fields.data() + fields.size());
}

enumeration_type::enumeration_type(
  std::initializer_list<field_view> fields) noexcept
  : enumeration_type{std::vector<field_view>{fields}} {
  // nop
}

enumeration_type::enumeration_type(
  const std::vector<struct field>& fields) noexcept {
  construct_enumeration_type(*this, fields.data(),
                             fields.data() + fields.size());
}

const fbs::Type& enumeration_type::table() const noexcept {
  const auto repr = as_bytes(*this);
  const auto* table = fbs::GetType(repr.data());
  VAST_ASSERT(table);
  VAST_ASSERT(table == resolve_transparent(table));
  VAST_ASSERT(table->type_type() == fbs::type::Type::enumeration_type);
  return *table;
}

static_assert(enumeration_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::enumeration_type));

std::span<const std::byte> as_bytes(const enumeration_type& x) noexcept {
  return as_bytes_complex(x);
}

enumeration enumeration_type::construct() const noexcept {
  const auto* fields = table().type_as_enumeration_type()->fields();
  VAST_ASSERT(fields);
  VAST_ASSERT(fields->size() > 0);
  const auto value = fields->Get(0)->key();
  // TODO: Currently, enumeration can not holds keys that don't fit a uint8_t;
  // when switching to a strong typedef for enumeration we should change that.
  // An example use case fbs::type::Type::is NetFlow, where many enumeration
  // values require usage of a uint16_t, which for now we would need to model as
  // strings in schemas.
  VAST_ASSERT(value <= std::numeric_limits<enumeration>::max());
  return static_cast<enumeration>(value);
}

std::shared_ptr<enumeration_type::arrow_type>
enumeration_type::to_arrow_type() const noexcept {
  return std::make_shared<arrow_type>(*this);
}

std::shared_ptr<enumeration_type::builder_type>
enumeration_type::make_arrow_builder(arrow::MemoryPool* pool) const noexcept {
  return std::make_shared<builder_type>(to_arrow_type(), pool);
}

std::string_view enumeration_type::field(uint32_t key) const& noexcept {
  const auto* fields = table().type_as_enumeration_type()->fields();
  VAST_ASSERT(fields);
  if (const auto* field = fields->LookupByKey(key))
    return field->name()->string_view();
  return std::string_view{};
}

std::vector<enumeration_type::field_view>
enumeration_type::fields() const& noexcept {
  const auto* fields = table().type_as_enumeration_type()->fields();
  VAST_ASSERT(fields);
  auto result = std::vector<field_view>{};
  result.reserve(fields->size());
  for (const auto& field : *fields)
    result.push_back({field->name()->string_view(), field->key()});
  return result;
}

std::optional<uint32_t>
enumeration_type::resolve(std::string_view key) const noexcept {
  const auto* fields = table().type_as_enumeration_type()->fields();
  VAST_ASSERT(fields);
  for (const auto& field : *fields)
    if (field->name()->string_view() == key)
      return field->key();
  return std::nullopt;
}

void enumeration_type::arrow_type::register_extension() noexcept {
  if (arrow::GetExtensionType(name))
    return;
  auto status = arrow::RegisterExtensionType(
    std::make_shared<arrow_type>(enumeration_type{{"stub"}}));
  VAST_ASSERT(status.ok());
}

arrow::Result<std::shared_ptr<enumeration_type::array_type>>
enumeration_type::array_type::make(
  const std::shared_ptr<enumeration_type::arrow_type>& type,
  const std::shared_ptr<arrow::UInt8Array>& indices) {
  auto dict_builder
    = string_type::make_arrow_builder(arrow::default_memory_pool());
  for (const auto& [canonical, internal] : type->vast_type_.fields()) {
    const auto append_status = dict_builder->Append(
      arrow_compat::string_view{canonical.data(), canonical.size()});
    VAST_ASSERT(append_status.ok(), append_status.ToString().c_str());
  }
  ARROW_ASSIGN_OR_RAISE(auto dict, dict_builder->Finish());
  ARROW_ASSIGN_OR_RAISE(auto storage, arrow::DictionaryArray::FromArrays(
                                        type->storage_type(), indices, dict));
  return std::make_shared<enumeration_type::array_type>(type, storage);
}

enumeration_type::builder_type::builder_type(std::shared_ptr<arrow_type> type,
                                             arrow::MemoryPool* pool)
  : arrow::StringDictionaryBuilder(string_type::to_arrow_type(), pool),
    type_{std::move(type)} {
  for (auto memo_index = int32_t{-1};
       const auto& [canonical, internal] : type_->vast_type_.fields()) {
    // TODO: If we want to support gaps in the enumeration type, we need to have
    // a second stage integer -> integer lookup table.
    const auto memo_table_status
      = memo_table_->GetOrInsert<type_to_arrow_type_t<string_type>>(
        arrow_compat::string_view{canonical.data(), canonical.size()},
        &memo_index);
    VAST_ASSERT(memo_table_status.ok(), memo_table_status.ToString().c_str());
    VAST_ASSERT(memo_index == detail::narrow_cast<int32_t>(internal));
  }
}

std::shared_ptr<arrow::DataType> enumeration_type::builder_type::type() const {
  return type_;
}

arrow::Status enumeration_type::builder_type::Append(enumeration index) {
#if VAST_ENABLE_ASSERTIONS
  // In builds with assertions, we additionally check that the index was already
  // in the prepopulated memo table.
  const auto canonical = type_->vast_type_.field(index);
  VAST_ASSERT(!canonical.empty());
  auto memo_index = int32_t{-1};
  const auto memo_table_status
    = memo_table_->GetOrInsert<type_to_arrow_type_t<string_type>>(
      arrow_compat::string_view{canonical.data(), canonical.size()},
      &memo_index);
  VAST_ASSERT(memo_table_status.ok(), memo_table_status.ToString().c_str());
  VAST_ASSERT(memo_index == index);
#endif // VAST_ENABLE_ASSERTIONS
  ARROW_RETURN_NOT_OK(Reserve(1));
  ARROW_RETURN_NOT_OK(indices_builder_.Append(index));
  length_ += 1;
  return arrow::Status::OK();
}

enumeration_type::arrow_type::arrow_type(const enumeration_type& type) noexcept
  : arrow::ExtensionType(
    arrow::dictionary(arrow::uint8(), string_type::to_arrow_type())),
    vast_type_{caf::get<enumeration_type>(vast::type{chunk::copy(type)})} {
  // nop
  static_assert(std::is_same_v<enumeration, arrow::UInt8Type::c_type>,
                "mismatch between dictionary index and enumeration type");
}

std::string enumeration_type::arrow_type::extension_name() const {
  return name;
}

bool enumeration_type::arrow_type::ExtensionEquals(
  const arrow::ExtensionType& other) const {
  return other.extension_name() == name
         && static_cast<const arrow_type&>(other).vast_type_ == vast_type_;
}

std::shared_ptr<arrow::Array> enumeration_type::arrow_type::MakeArray(
  std::shared_ptr<arrow::ArrayData> data) const {
  return std::make_shared<array_type>(std::move(data));
}

arrow::Result<std::shared_ptr<arrow::DataType>>
enumeration_type::arrow_type::Deserialize(
  std::shared_ptr<arrow::DataType> storage_type,
  const std::string& serialized) const {
  if (!storage_type->Equals(storage_type_))
    return arrow::Status::Invalid("storage type does not match");
  // Parse the JSON-serialized enumeration_type content.
  const auto json = simdjson::padded_string{serialized};
  auto parser = simdjson::dom::parser{};
  auto doc = parser.parse(json);
  // TODO: use field_view once we can use simdjson::ondemand hits to avoid a
  // copy of the field name.
  auto fields = std::vector<struct enumeration_type::field>{};
  for (const auto& [key, value] : doc.get_object()) {
    if (!value.is<uint64_t>())
      return arrow::Status::SerializationError(value, " is not an uint64_t");
    fields.push_back({
      std::string{key},
      detail::narrow_cast<uint32_t>(value.get_uint64()),
    });
  }
  return std::make_shared<arrow_type>(enumeration_type{fields});
}

std::string enumeration_type::arrow_type::Serialize() const {
  auto result = std::string{};
  auto inserter = std::back_inserter(result);
  fmt::format_to(inserter, "{{ ");
  for (auto first = true; const auto& f : vast_type_.fields()) {
    if (first)
      first = false;
    else
      fmt::format_to(inserter, ", ");
    fmt::format_to(inserter, "\"{}\": {}", f.name, f.key);
  }
  fmt::format_to(inserter, " }}");
  return result;
}

std::shared_ptr<arrow::DictionaryArray>
enumeration_type::array_type::storage() const {
  return std::static_pointer_cast<arrow::DictionaryArray>(
    arrow::ExtensionArray::storage());
}

// -- list_type ---------------------------------------------------------------

list_type::list_type(const list_type& other) noexcept = default;

list_type& list_type::operator=(const list_type& rhs) noexcept = default;

list_type::list_type(list_type&& other) noexcept = default;

list_type& list_type::operator=(list_type&& other) noexcept = default;

list_type::~list_type() noexcept = default;

list_type::list_type(const type& value_type) noexcept {
  const auto value_type_bytes = as_bytes(value_type);
  const auto reserved_size = 44 + value_type_bytes.size();
  auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
  const auto list_type_offset = fbs::type::CreateListType(
    builder, builder.CreateVector(
               reinterpret_cast<const uint8_t*>(value_type_bytes.data()),
               value_type_bytes.size()));
  const auto type_offset = fbs::CreateType(builder, fbs::type::Type::list_type,
                                           list_type_offset.Union());
  builder.Finish(type_offset);
  auto result = builder.Release();
  VAST_ASSERT(result.size() == reserved_size);
  table_ = chunk::make(std::move(result));
}

const fbs::Type& list_type::table() const noexcept {
  const auto repr = as_bytes(*this);
  const auto* table = fbs::GetType(repr.data());
  VAST_ASSERT(table);
  VAST_ASSERT(table == resolve_transparent(table));
  VAST_ASSERT(table->type_type() == fbs::type::Type::list_type);
  return *table;
}

static_assert(list_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::list_type));

std::span<const std::byte> as_bytes(const list_type& x) noexcept {
  return as_bytes_complex(x);
}

list list_type::construct() noexcept {
  return {};
}

std::shared_ptr<list_type::arrow_type>
list_type::to_arrow_type() const noexcept {
  return std::static_pointer_cast<arrow_type>(
    arrow::list(value_type().to_arrow_field("item")));
}

std::shared_ptr<typename arrow::TypeTraits<list_type::arrow_type>::BuilderType>
list_type::make_arrow_builder(arrow::MemoryPool* pool) const noexcept {
  return std::make_shared<typename arrow::TypeTraits<arrow_type>::BuilderType>(
    pool, value_type().make_arrow_builder(pool), to_arrow_type());
}

type list_type::value_type() const noexcept {
  const auto* view = table().type_as_list_type()->type();
  VAST_ASSERT(view);
  return type{table_->slice(as_bytes(*view))};
}

// -- map_type ----------------------------------------------------------------

map_type::map_type(const map_type& other) noexcept = default;

map_type& map_type::operator=(const map_type& rhs) noexcept = default;

map_type::map_type(map_type&& other) noexcept = default;

map_type& map_type::operator=(map_type&& other) noexcept = default;

map_type::~map_type() noexcept = default;

map_type::map_type(const type& key_type, const type& value_type) noexcept {
  const auto key_type_bytes = as_bytes(key_type);
  const auto value_type_bytes = as_bytes(value_type);
  const auto reserved_size
    = 52 + key_type_bytes.size() + value_type_bytes.size();
  auto builder = flatbuffers::FlatBufferBuilder{reserved_size};
  const auto key_type_offset = builder.CreateVector(
    reinterpret_cast<const uint8_t*>(key_type_bytes.data()),
    key_type_bytes.size());
  const auto value_type_offset = builder.CreateVector(
    reinterpret_cast<const uint8_t*>(value_type_bytes.data()),
    value_type_bytes.size());
  const auto map_type_offset
    = fbs::type::CreateMapType(builder, key_type_offset, value_type_offset);
  const auto type_offset = fbs::CreateType(builder, fbs::type::Type::map_type,
                                           map_type_offset.Union());
  builder.Finish(type_offset);
  auto result = builder.Release();
  VAST_ASSERT(result.size() == reserved_size);
  table_ = chunk::make(std::move(result));
}

const fbs::Type& map_type::table() const noexcept {
  const auto repr = as_bytes(*this);
  const auto* table = fbs::GetType(repr.data());
  VAST_ASSERT(table);
  VAST_ASSERT(table == resolve_transparent(table));
  VAST_ASSERT(table->type_type() == fbs::type::Type::map_type);
  return *table;
}

static_assert(map_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::map_type));

std::span<const std::byte> as_bytes(const map_type& x) noexcept {
  return as_bytes_complex(x);
}

map map_type::construct() noexcept {
  return {};
}

std::shared_ptr<map_type::arrow_type> map_type::to_arrow_type() const noexcept {
  return std::make_shared<arrow_type>(key_type().to_arrow_field("key", false),
                                      value_type().to_arrow_field("item"));
}

std::shared_ptr<typename arrow::TypeTraits<map_type::arrow_type>::BuilderType>
map_type::make_arrow_builder(arrow::MemoryPool* pool) const noexcept {
  return std::make_shared<typename arrow::TypeTraits<arrow_type>::BuilderType>(
    pool, key_type().make_arrow_builder(pool),
    value_type().make_arrow_builder(pool), to_arrow_type());
}

type map_type::key_type() const noexcept {
  const auto* view = table().type_as_map_type()->key_type();
  VAST_ASSERT(view);
  return type{table_->slice(as_bytes(*view))};
}

type map_type::value_type() const noexcept {
  const auto* view = table().type_as_map_type()->value_type();
  VAST_ASSERT(view);
  return type{table_->slice(as_bytes(*view))};
}

// -- record_type -------------------------------------------------------------

std::strong_ordering
operator<=>(const record_type::transformation& lhs,
            const record_type::transformation& rhs) noexcept {
  return lhs.index <=> rhs.index;
}

record_type::record_type(const record_type& other) noexcept = default;

record_type& record_type::operator=(const record_type& rhs) noexcept = default;

record_type::record_type(record_type&& other) noexcept = default;

record_type& record_type::operator=(record_type&& other) noexcept = default;

record_type::~record_type() noexcept = default;

record_type::record_type(const std::vector<field_view>& fields) noexcept {
  construct_record_type(*this, fields.data(), fields.data() + fields.size());
}

record_type::record_type(std::initializer_list<field_view> fields) noexcept
  : record_type{std::vector<field_view>{fields}} {
  // nop
}

record_type::record_type(const std::vector<struct field>& fields) noexcept {
  construct_record_type(*this, fields.data(), fields.data() + fields.size());
}

const fbs::Type& record_type::table() const noexcept {
  const auto repr = as_bytes(*this);
  const auto* table = fbs::GetType(repr.data());
  VAST_ASSERT(table);
  VAST_ASSERT(table == resolve_transparent(table));
  VAST_ASSERT(table->type_type() == fbs::type::Type::record_type);
  return *table;
}

static_assert(record_type::type_index
              == static_cast<uint8_t>(fbs::type::Type::record_type));

std::span<const std::byte> as_bytes(const record_type& x) noexcept {
  return as_bytes_complex(x);
}

record record_type::construct() const noexcept {
  // A record is a stable map under the hood, and we construct its underlying
  // vector directly here as that is slightly more efficient, and as an added
  // benefit(?) allows for creating records with duplicate fields, so if this
  // record type happens to break its contract we can still create a fitting
  // record from it. Known occurences of such record types are:
  // - test.full blueprint record type for the test generator.
  // - Combined schema of the partition v0.
  // We should consider getting rid of vector_map::make_unsafe in the future.
  auto result = record::vector_type{};
  result.reserve(num_fields());
  for (const auto& field : fields())
    result.emplace_back(field.name, field.type.construct());
  return record::make_unsafe(std::move(result));
}

std::shared_ptr<record_type::arrow_type>
record_type::to_arrow_type() const noexcept {
  auto arrow_fields = arrow::FieldVector{};
  arrow_fields.reserve(num_fields());
  for (const auto& [name, type] : fields())
    arrow_fields.push_back(type.to_arrow_field(name));
  return std::static_pointer_cast<arrow_type>(arrow::struct_(arrow_fields));
}

std::shared_ptr<typename arrow::TypeTraits<record_type::arrow_type>::BuilderType>
record_type::make_arrow_builder(arrow::MemoryPool* pool) const noexcept {
  auto field_builders = std::vector<std::shared_ptr<arrow::ArrayBuilder>>{};
  for (auto&& field : fields())
    field_builders.push_back(field.type.make_arrow_builder(pool));
  return std::make_shared<typename arrow::TypeTraits<arrow_type>::BuilderType>(
    to_arrow_type(), pool, std::move(field_builders));
}

generator<record_type::field_view> record_type::fields() const noexcept {
  const auto* record = table().type_as_record_type();
  VAST_ASSERT(record);
  const auto* fields = record->fields();
  VAST_ASSERT(fields);
  for (const auto* field : *fields) {
    co_yield {
      field->name()->string_view(),
      type{table_->slice(as_bytes(*field->type()))},
    };
  }
  co_return;
}

generator<record_type::leaf_view> record_type::leaves() const noexcept {
  auto index = offset{0};
  auto history = detail::stack_vector<const fbs::type::RecordType*, 64>{
    table().type_as_record_type()};
  while (!index.empty()) {
    const auto* record = history.back();
    VAST_ASSERT(record);
    const auto* fields = record->fields();
    VAST_ASSERT(fields);
    // This is our exit condition: If we arrived at the end of a record, we need
    // to step out one layer. We must also reset the target key at this point.
    if (index.back() >= fields->size()) {
      history.pop_back();
      index.pop_back();
      if (!index.empty())
        ++index.back();
      continue;
    }
    const auto* field = record->fields()->Get(index.back());
    VAST_ASSERT(field);
    const auto* field_type = resolve_transparent(field->type_nested_root());
    VAST_ASSERT(field_type);
    switch (field_type->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type: {
        auto leaf = leaf_view{
          {
            field->name()->string_view(),
            type{table_->slice(as_bytes(*field->type()))},
          },
          index,
        };
        co_yield std::move(leaf);
        ++index.back();
        break;
      }
      case fbs::type::Type::record_type: {
        history.emplace_back(field_type->type_as_record_type());
        index.push_back(0);
        break;
      }
      case fbs::type::Type::enriched_type:
        __builtin_unreachable();
        break;
    }
  }
  co_return;
}

size_t record_type::num_fields() const noexcept {
  const auto* record = table().type_as_record_type();
  VAST_ASSERT(record);
  return record->fields()->size();
}

size_t record_type::num_leaves() const noexcept {
  auto num_leaves = size_t{0};
  auto index = offset{0};
  auto history = detail::stack_vector<const fbs::type::RecordType*, 64>{
    table().type_as_record_type()};
  while (!index.empty()) {
    const auto* record = history.back();
    VAST_ASSERT(record);
    const auto* fields = record->fields();
    VAST_ASSERT(fields);
    // This is our exit condition: If we arrived at the end of a record, we need
    // to step out one layer. We must also reset the target key at this point.
    if (index.back() >= fields->size()) {
      history.pop_back();
      index.pop_back();
      if (!index.empty())
        ++index.back();
      continue;
    }
    const auto* field = record->fields()->Get(index.back());
    VAST_ASSERT(field);
    const auto* field_type = resolve_transparent(field->type_nested_root());
    VAST_ASSERT(field_type);
    switch (field_type->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type: {
        ++index.back();
        ++num_leaves;
        break;
      }
      case fbs::type::Type::record_type: {
        history.emplace_back(field_type->type_as_record_type());
        index.push_back(0);
        break;
      }
      case fbs::type::Type::enriched_type:
        __builtin_unreachable();
        break;
    }
  }
  return num_leaves;
}

offset record_type::resolve_flat_index(size_t flat_index) const noexcept {
  size_t current_flat_index = 0;
  auto index = offset{0};
  auto history = detail::stack_vector<const fbs::type::RecordType*, 64>{
    table().type_as_record_type()};
  while (!index.empty()) {
    const auto* record = history.back();
    VAST_ASSERT(record);
    const auto* fields = record->fields();
    VAST_ASSERT(fields);
    // This is our exit condition: If we arrived at the end of a record, we need
    // to step out one layer. We must also reset the target key at this point.
    if (index.back() >= fields->size()) {
      history.pop_back();
      index.pop_back();
      if (!index.empty())
        ++index.back();
      continue;
    }
    const auto* field = record->fields()->Get(index.back());
    VAST_ASSERT(field);
    const auto* field_type = resolve_transparent(field->type_nested_root());
    VAST_ASSERT(field_type);
    switch (field_type->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type: {
        if (current_flat_index == flat_index)
          return index;
        ++current_flat_index;
        ++index.back();
        break;
      }
      case fbs::type::Type::record_type: {
        history.emplace_back(field_type->type_as_record_type());
        index.push_back(0);
        break;
      }
      case fbs::type::Type::enriched_type:
        __builtin_unreachable();
        break;
    }
  }
  die("index out of bounds");
}

std::optional<offset>
record_type::resolve_key(std::string_view key) const noexcept {
  auto index = offset{0};
  auto history = std::vector{std::pair{
    table().type_as_record_type(),
    key,
  }};
  while (!index.empty()) {
    const auto& [record, remaining_key] = history.back();
    VAST_ASSERT(record);
    const auto* fields = record->fields();
    VAST_ASSERT(fields);
    // This is our exit condition: If we arrived at the end of a record, we need
    // to step out one layer. We must also reset the target key at this point.
    if (index.back() >= fields->size() || remaining_key.empty()) {
      history.pop_back();
      index.pop_back();
      if (!index.empty())
        ++index.back();
      continue;
    }
    const auto* field = record->fields()->Get(index.back());
    VAST_ASSERT(field);
    const auto* field_name = field->name();
    VAST_ASSERT(field_name);
    const auto* field_type = resolve_transparent(field->type_nested_root());
    VAST_ASSERT(field_type);
    switch (field_type->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type: {
        if (remaining_key == field_name->string_view())
          return index;
        ++index.back();
        break;
      }
      case fbs::type::Type::record_type: {
        auto [remaining_key_mismatch, field_name_mismatch]
          = std::mismatch(remaining_key.begin(), remaining_key.end(),
                          field_name->begin(), field_name->end());
        if (field_name_mismatch == field_name->end()
            && remaining_key_mismatch == remaining_key.end())
          return index;
        if (field_name_mismatch == field_name->end()
            && remaining_key_mismatch != remaining_key.end()
            && *remaining_key_mismatch == '.') {
          history.emplace_back(field_type->type_as_record_type(),
                               remaining_key.substr(1 + remaining_key_mismatch
                                                    - remaining_key.begin()));
          index.push_back(0);
        } else {
          ++index.back();
        }
        break;
      }
      case fbs::type::Type::enriched_type:
        __builtin_unreachable();
        break;
    }
  }
  return {};
}

generator<offset>
record_type::resolve_key_suffix(std::string_view key,
                                std::string_view prefix) const noexcept {
  if (key.empty())
    co_return;
  auto index = offset{0};
  auto history = std::vector{
    std::pair{
      table().type_as_record_type(),
      std::vector{key},
    },
  };
  const auto* prefix_begin = prefix.begin();
  while (prefix_begin != prefix.end()) {
    const auto [prefix_mismatch, key_mismatch]
      = std::mismatch(prefix_begin, prefix.end(), key.begin(), key.end());
    if (prefix_mismatch == prefix.end() && key_mismatch != key.end()
        && *key_mismatch == '.')
      history[0].second.push_back(key.substr(1 + key_mismatch - key.begin()));
    prefix_begin = std::find(prefix_begin, prefix.end(), '.');
    if (prefix_begin == prefix.end())
      break;
    ++prefix_begin;
  }
  while (!index.empty()) {
    auto& [record, remaining_keys] = history.back();
    VAST_ASSERT(record);
    const auto* fields = record->fields();
    VAST_ASSERT(fields);
    // This is our exit condition: If we arrived at the end of a record, we
    // need to step out one layer. We must also reset the target key at this
    // point.
    if (index.back() >= fields->size()) {
      history.pop_back();
      index.pop_back();
      if (!index.empty())
        ++index.back();
      continue;
    }
    const auto* field = record->fields()->Get(index.back());
    VAST_ASSERT(field);
    const auto* field_name = field->name();
    VAST_ASSERT(field_name);
    const auto* field_type = resolve_transparent(field->type_nested_root());
    VAST_ASSERT(field_type);
    switch (field_type->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type: {
        for (const auto& remaining_key : remaining_keys) {
          // TODO: Once we no longer support flattening types, we can switch to
          // an equality comparison between field_name and remaining_key here.
          const auto [field_name_mismatch, remaining_key_mismatch]
            = std::mismatch(field_name->rbegin(), field_name->rend(),
                            remaining_key.rbegin(), remaining_key.rend());
          if (remaining_key_mismatch == remaining_key.rend()
              && (field_name_mismatch == field_name->rend()
                  || *field_name_mismatch == '.')) {
            co_yield index;
            break;
          }
        }
        ++index.back();
        break;
      }
      case fbs::type::Type::record_type: {
        using history_entry = decltype(history)::value_type;
        auto next = history_entry{
          field_type->type_as_record_type(),
          history[0].second,
        };
        for (const auto& remaining_key : remaining_keys) {
          auto [remaining_key_mismatch, field_name_mismatch]
            = std::mismatch(remaining_key.begin(), remaining_key.end(),
                            field_name->begin(), field_name->end());
          if (field_name_mismatch == field_name->end()
              && remaining_key_mismatch != remaining_key.end()
              && *remaining_key_mismatch == '.') {
            next.second.emplace_back(remaining_key.substr(
              1 + remaining_key_mismatch - remaining_key.begin()));
          }
        }
        history.push_back(std::move(next));
        index.push_back(0);
        break;
      }
      case fbs::type::Type::enriched_type:
        __builtin_unreachable();
        break;
    }
  }
  co_return;
}

std::string_view record_type::key(size_t index) const& noexcept {
  const auto* record = table().type_as_record_type();
  VAST_ASSERT(record);
  VAST_ASSERT(index < record->fields()->size(), "index out of bounds");
  const auto* field = record->fields()->Get(index);
  VAST_ASSERT(field);
  return field->name()->string_view();
}

std::string record_type::key(const offset& index) const noexcept {
  auto result = std::string{};
  const auto* record = table().type_as_record_type();
  VAST_ASSERT(record);
  for (size_t i = 0; i < index.size() - 1; ++i) {
    VAST_ASSERT(index[i] < record->fields()->size());
    const auto* field = record->fields()->Get(index[i]);
    VAST_ASSERT(field);
    fmt::format_to(std::back_inserter(result), "{}.",
                   field->name()->string_view());
    record
      = resolve_transparent(field->type_nested_root())->type_as_record_type();
    VAST_ASSERT(record);
  }
  VAST_ASSERT(index.back() < record->fields()->size());
  const auto* field = record->fields()->Get(index.back());
  VAST_ASSERT(field);
  fmt::format_to(std::back_inserter(result), "{}",
                 field->name()->string_view());
  return result;
}

record_type::field_view record_type::field(size_t index) const noexcept {
  const auto* record = table().type_as_record_type();
  VAST_ASSERT(record);
  VAST_ASSERT(index < record->fields()->size(), "index out of bounds");
  const auto* field = record->fields()->Get(index);
  VAST_ASSERT(field);
  VAST_ASSERT(field->type());
  return {
    field->name()->string_view(),
    type{table_->slice(as_bytes(*field->type()))},
  };
}

record_type::field_view record_type::field(const offset& index) const noexcept {
  VAST_ASSERT(!index.empty(), "offset must not be empty");
  const auto* record = table().type_as_record_type();
  VAST_ASSERT(record);
  for (size_t i = 0; i < index.size() - 1; ++i) {
    VAST_ASSERT(index[i] < record->fields()->size(), "index out of bounds");
    record
      = resolve_transparent(record->fields()->Get(index[i])->type_nested_root())
          ->type_as_record_type();
    VAST_ASSERT(record, "offset contains excess indices");
  }
  VAST_ASSERT(index.back() < record->fields()->size(), "index out of bounds");
  const auto* field = record->fields()->Get(index.back());
  VAST_ASSERT(field);
  return {
    field->name()->string_view(),
    type{table_->slice(as_bytes(*field->type()))},
  };
}

size_t record_type::flat_index(const offset& index) const noexcept {
  VAST_ASSERT(!index.empty(), "index must not be empty");
  auto flat_index = size_t{0};
  auto current_index = offset{0};
  auto history = detail::stack_vector<const fbs::type::RecordType*, 64>{
    table().type_as_record_type()};
  while (true) {
    VAST_ASSERT(current_index <= index, "index out of bounds");
    const auto* record = history.back();
    VAST_ASSERT(record);
    const auto* fields = record->fields();
    VAST_ASSERT(fields);
    // This is our exit condition: If we arrived at the end of a record, we need
    // to step out one layer.
    if (current_index.back() >= fields->size()) {
      history.pop_back();
      current_index.pop_back();
      VAST_ASSERT(!current_index.empty());
      ++current_index.back();
      continue;
    }
    const auto* field = record->fields()->Get(current_index.back());
    VAST_ASSERT(field);
    const auto* field_type = resolve_transparent(field->type_nested_root());
    VAST_ASSERT(field_type);
    switch (field_type->type_type()) {
      case fbs::type::Type::pattern_type:
        __builtin_unreachable();
      case fbs::type::Type::NONE:
      case fbs::type::Type::bool_type:
      case fbs::type::Type::int64_type:
      case fbs::type::Type::uint64_type:
      case fbs::type::Type::double_type:
      case fbs::type::Type::duration_type:
      case fbs::type::Type::time_type:
      case fbs::type::Type::string_type:
      case fbs::type::Type::ip_type:
      case fbs::type::Type::subnet_type:
      case fbs::type::Type::enumeration_type:
      case fbs::type::Type::list_type:
      case fbs::type::Type::map_type: {
        if (index == current_index)
          return flat_index;
        ++current_index.back();
        ++flat_index;
        break;
      }
      case fbs::type::Type::record_type: {
        VAST_ASSERT(index != current_index);
        history.emplace_back(field_type->type_as_record_type());
        current_index.push_back(0);
        break;
      }
      case fbs::type::Type::enriched_type:
        __builtin_unreachable();
        break;
    }
  }
}

record_type::transformation::function_type record_type::drop() noexcept {
  return [](const field_view&) noexcept -> std::vector<struct field> {
    return {};
  };
}

record_type::transformation::function_type
record_type::assign(std::vector<struct field> fields) noexcept {
  return [fields = std::move(fields)](
           const field_view&) noexcept -> std::vector<struct field> {
    return fields;
  };
}

record_type::transformation::function_type
record_type::insert_before(std::vector<struct field> fields) noexcept {
  return [fields = std::move(fields)](const field_view& field) mutable noexcept
         -> std::vector<struct field> {
    fields.reserve(fields.size() + 1);
    fields.push_back({std::string{field.name}, field.type});
    return fields;
  };
}

record_type::transformation::function_type
record_type::insert_after(std::vector<struct field> fields) noexcept {
  return [fields = std::move(fields)](const field_view& field) mutable noexcept
         -> std::vector<struct field> {
    fields.reserve(fields.size() + 1);
    fields.insert(fields.begin(), {std::string{field.name}, field.type});
    return fields;
  };
}

std::optional<record_type> record_type::transform(
  std::vector<transformation> transformations) const noexcept {
  VAST_ASSERT(std::is_sorted(transformations.begin(), transformations.end()),
              "transformations must be sorted by index");
  VAST_ASSERT(transformations.end()
                == std::adjacent_find(
                  transformations.begin(), transformations.end(),
                  [](const auto& lhs, const auto& rhs) noexcept {
                    const auto [lhs_mismatch, rhs_mismatch]
                      = std::mismatch(lhs.index.begin(), lhs.index.end(),
                                      rhs.index.begin(), rhs.index.end());
                    return lhs_mismatch == lhs.index.end();
                  }),
              "transformation indices must not be a subset of the following "
              "transformation's index");
  // The current unpacked layer of the transformation, i.e., the pieces required
  // to re-assemble the current layer of both the record type and the record
  // batch.
  struct unpacked_layer : std::vector<struct record_type::field> {
    using vector::vector;
  };
  const auto impl
    = [](const auto& impl, unpacked_layer layer, offset index, auto& current,
         const auto sentinel) noexcept -> unpacked_layer {
    VAST_ASSERT(!index.empty());
    auto result = unpacked_layer{};
    // Iterate over the current layer. For every entry in the current layer, we
    // need to do one of three things:
    // 1. Apply the transformation if the index matches the transformation
    //    index.
    // 2. Recurse to the next layer if the index is a prefix of the
    //    transformation index.
    // 3. Leave the elements untouched.
    for (; index.back() < layer.size(); ++index.back()) {
      const auto [is_prefix_match, is_exact_match]
        = [&]() noexcept -> std::pair<bool, bool> {
        if (current == sentinel)
          return {false, false};
        const auto [index_mismatch, current_index_mismatch]
          = std::mismatch(index.begin(), index.end(), current->index.begin(),
                          current->index.end());
        const auto is_prefix_match = index_mismatch == index.end();
        const auto is_exact_match
          = is_prefix_match && current_index_mismatch == current->index.end();
        return {is_prefix_match, is_exact_match};
      }();
      if (is_exact_match) {
        VAST_ASSERT(current != sentinel);
        auto new_fields
          = std::invoke(std::move(current->fun), record_type::field_view{
                                                   layer[index.back()].name,
                                                   layer[index.back()].type,
                                                 });
        for (auto&& field : std::move(new_fields))
          result.push_back(std::move(field));
        ++current;
      } else if (is_prefix_match) {
        auto nested_layer = unpacked_layer{};
        nested_layer.reserve(
          caf::get<record_type>(layer[index.back()].type).num_fields());
        for (auto&& [name, type] :
             caf::get<record_type>(layer[index.back()].type).fields())
          nested_layer.push_back({std::string{name}, type});
        auto nested_index = index;
        nested_index.push_back(0);
        nested_layer = impl(impl, std::move(nested_layer),
                            std::move(nested_index), current, sentinel);
        if (!nested_layer.empty()) {
          auto nested_schema = type{record_type{nested_layer}};
          nested_schema.assign_metadata(layer[index.back()].type);
          result.emplace_back(layer[index.back()].name, nested_schema);
        }
      } else {
        result.push_back(std::move(layer[index.back()]));
      }
    }
    return result;
  };
  if (transformations.empty())
    return *this;
  auto current = transformations.begin();
  const auto sentinel = transformations.end();
  auto layer = unpacked_layer{};
  layer.reserve(num_fields());
  for (auto&& [name, type] : fields())
    layer.push_back({std::string{name}, type});
  // Run the possibly recursive implementation.
  layer = impl(impl, std::move(layer), {0}, current, sentinel);
  VAST_ASSERT(current == sentinel, "index out of bounds");
  // Re-assemble the record type after the transformation.
  if (layer.empty())
    return {};
  return record_type{layer};
}

caf::expected<record_type>
merge(const record_type& lhs, const record_type& rhs,
      enum record_type::merge_conflict merge_conflict) noexcept {
  auto do_merge = [&](const record_type::field_view& lfield,
                      const record_type::field_view& rfield) noexcept {
    return detail::overload{
      [&](const record_type& lhs,
          const record_type& rhs) noexcept -> caf::expected<type> {
        if (auto result = merge(lhs, rhs, merge_conflict))
          return type{*result};
        else
          return result.error();
      },
      [&]<concrete_type T, concrete_type U>(
        const T& lhs, const U& rhs) noexcept -> caf::expected<type> {
        switch (merge_conflict) {
          case record_type::merge_conflict::fail: {
            if (congruent(type{lhs}, type{rhs})) {
              if (lfield.type.name() != rfield.type.name())
                return caf::make_error(
                  ec::logic_error,
                  fmt::format("conflicting alias types {} and {} for "
                              "field {}; failed to merge {} and {}",
                              lfield.type.name(), rfield.type.name(),
                              rfield.name, lhs, rhs));
              auto to_vector = [](generator<type::attribute_view>&& rng) {
                auto result = std::vector<type::attribute_view>{};
                for (auto&& elem : std::move(rng))
                  result.push_back(std::move(elem));
                return result;
              };
              auto lhs_attributes = to_vector(lfield.type.attributes());
              const auto rhs_attributes = to_vector(rfield.type.attributes());
              const auto conflicting_attribute = std::any_of(
                lhs_attributes.begin(), lhs_attributes.end(),
                [&](const auto& lhs_attribute) noexcept {
                  return rfield.type.attribute(lhs_attribute.key.data())
                         != lhs_attribute.value;
                });
              if (conflicting_attribute)
                return caf::make_error(ec::logic_error,
                                       fmt::format("conflicting attributes for "
                                                   "field {}; failed to "
                                                   "merge {} and {}",
                                                   rfield.name, lhs, rhs));
              lhs_attributes.reserve(lhs_attributes.size()
                                     + rhs_attributes.size());
              lhs_attributes.insert(lhs_attributes.end(),
                                    rhs_attributes.begin(),
                                    rhs_attributes.end());
              return type{lfield.type.name(), lfield.type,
                          std::move(lhs_attributes)};
            }
            return caf::make_error(ec::logic_error,
                                   fmt::format("conflicting field {}; "
                                               "failed to "
                                               "merge {} and {}",
                                               rfield.name, lhs, rhs));
          }
          case record_type::merge_conflict::prefer_left:
            return lfield.type;
          case record_type::merge_conflict::prefer_right:
            return rfield.type;
        }
        __builtin_unreachable();
      },
    };
  };
  auto transformations = std::vector<record_type::transformation>{};
  auto additions = std::vector<struct record_type::field>{};
  transformations.reserve(rhs.num_fields());
  auto err = caf::error{};
  for (auto rfield : rhs.fields()) {
    if (const auto& lindex = lhs.resolve_key(rfield.name)) {
      transformations.push_back({
        *lindex,
        ([&, rfield = std::move(rfield)](
           const record_type::field_view& lfield) mutable noexcept
         -> std::vector<struct record_type::field> {
          if (auto result = caf::visit(do_merge(lfield, rfield), lfield.type,
                                       rfield.type)) {
            return {{
              std::string{rfield.name},
              *result,
            }};
          } else {
            err = std::move(result.error());
            return {};
          }
        }),
      });
    } else {
      additions.push_back({std::string{rfield.name}, rfield.type});
    }
  }
  auto result = lhs.transform(std::move(transformations));
  if (err)
    return err;
  VAST_ASSERT(result);
  result = result->transform({{
    {result->num_fields() - 1},
    record_type::insert_after(std::move(additions)),
  }});
  VAST_ASSERT(result);
  return std::move(*result);
}

record_type flatten(const record_type& type) noexcept {
  auto fields = std::vector<struct record_type::field>{};
  for (const auto& [field, offset] : type.leaves())
    fields.push_back({
      type.key(offset),
      field.type,
    });
  return record_type{fields};
}

} // namespace vast

// -- sum_type_access ---------------------------------------------------------

namespace caf {

/// Sanity-check whether all the type lists are set up correctly.
static_assert(detail::tl_is_distinct<sum_type_access<vast::type>::types>::value);
static_assert(
  detail::tl_is_distinct<sum_type_access<arrow::DataType>::types>::value);
static_assert(
  detail::tl_is_distinct<sum_type_access<arrow::Array>::types>::value);
static_assert(
  detail::tl_is_distinct<sum_type_access<arrow::Scalar>::types>::value);
static_assert(
  detail::tl_is_distinct<sum_type_access<arrow::ArrayBuilder>::types>::value);

uint8_t
sum_type_access<vast::type>::index_from_type(const vast::type& x) noexcept {
  static const auto table = []<vast::concrete_type... Ts, uint8_t... Indices>(
    caf::detail::type_list<Ts...>,
    std::integer_sequence<uint8_t, Indices...>) noexcept {
    std::array<uint8_t, std::numeric_limits<uint8_t>::max()> tbl{};
    tbl.fill(std::numeric_limits<uint8_t>::max());
    (static_cast<void>(tbl[Ts::type_index] = Indices), ...);
    return tbl;
  }
  (types{},
   std::make_integer_sequence<uint8_t, caf::detail::tl_size<types>::value>());
  // NOLINTNEXTLINE(cppcoreguidelines-pro-bounds-constant-array-index)
  auto result = table[x.type_index()];
  VAST_ASSERT(result != std::numeric_limits<uint8_t>::max());
  return result;
}

int sum_type_access<arrow::DataType>::index_from_type(
  const arrow::DataType& x) noexcept {
  using extension_types = detail::tl_filter_t<types, arrow::is_extension_type>;
  static constexpr int extension_id = -1;
  static constexpr int unknown_id = -2;
  // The first-stage O(1) lookup table from arrow::DataType id to the sum type
  // variant index defined by the type list. Returns unknown_id if the DataType
  // is not in the type list, and extension_id if the type is an extension type.
  static const auto table =
    []<class... Ts, int... Indices>(
      caf::detail::type_list<Ts...>,
      std::integer_sequence<int, Indices...>) noexcept {
      std::array<int, arrow::Type::type::MAX_ID> tbl{};
      tbl.fill(unknown_id);
      (static_cast<void>(tbl[Ts::type_id] = arrow::is_extension_type<Ts>::value
                                              ? extension_id
                                              : Indices),
       ...);
      return tbl;
    }(sum_type_access<arrow::DataType>::types{},
      std::make_integer_sequence<int, caf::detail::tl_size<types>::value>());
  // The second-stage O(n) lookup table for extension types that identifies the
  // types by their unique identifier string.
  static const auto extension_table =
    []<class... Ts, int... Indices>(caf::detail::type_list<Ts...>,
                                    std::integer_sequence<int, Indices...>) {
      std::array<std::pair<std::string_view, int>,
                 detail::tl_size<extension_types>::value>
        tbl{};
      (static_cast<void>(
         tbl[Indices]
         = {Ts::name,
            detail::tl_index_of<sum_type_access<arrow::DataType>::types,
                                Ts>::value}),
       ...);
      return tbl;
    }(extension_types{},
      std::make_integer_sequence<
        int, caf::detail::tl_size<extension_types>::value>());
  // NOLINTNEXTLINE(cppcoreguidelines-pro-bounds-constant-array-index)
  auto result = table[x.id()];
  VAST_ASSERT(result != unknown_id,
              fmt::format(VAST_FMT_RUNTIME("unexpected Arrow type id '{}' "
                                           "for type '{}' is not in "
                                           "caf::sum_type_access<arrow::"
                                           "DataType>::types"),
                          x.id(), x.ToString())
                .c_str());
  if (result == extension_id) {
    for (const auto& [id, index] : extension_table) {
      if (id == static_cast<const arrow::ExtensionType&>(x).extension_name())
        return index;
    }
    vast::die("unexpected Arrow extension type");
  }
  return result;
}

/// Explicit template instantiations for all defined sum type access
/// specializations.
template struct sum_type_access<vast::type>;
template struct sum_type_access<arrow::DataType>;
template struct sum_type_access<arrow::Array>;
template struct sum_type_access<arrow::Scalar>;
template struct sum_type_access<arrow::ArrayBuilder>;

} // namespace caf
