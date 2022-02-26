//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/experimental_table_slice_builder.hpp"

#include "vast/arrow_extension_types.hpp"
#include "vast/concept/parseable/core.hpp"
#include "vast/concept/parseable/numeric.hpp"
#include "vast/config.hpp"
#include "vast/detail/byte_swap.hpp"
#include "vast/detail/narrow.hpp"
#include "vast/detail/overload.hpp"
#include "vast/detail/zip_iterator.hpp"
#include "vast/die.hpp"
#include "vast/fbs/table_slice.hpp"
#include "vast/fbs/utils.hpp"
#include "vast/logger.hpp"
#include "vast/type.hpp"

#include <arrow/api.h>
#include <arrow/io/api.h>
#include <arrow/ipc/writer.h>

#include <simdjson.h>

namespace vast {

// -- column builder implementations ------------------------------------------

namespace {

template <class VastType, class ArrowType>
struct column_builder_trait_base : arrow::TypeTraits<ArrowType> {
  using data_type = type_to_data_t<VastType>;
  using view_type = view<data_type>;
  using meta_type = VastType;
};

template <class VastType, class ArrowType>
struct primitive_column_builder_trait_base
  : column_builder_trait_base<VastType, ArrowType> {
  using super = column_builder_trait_base<VastType, ArrowType>;

  static auto make_arrow_type() {
    return super::type_singleton();
  }

  static bool
  append(typename super::BuilderType& builder, typename super::view_type x) {
    return builder.Append(x).ok();
  }
};

template <class T>
struct column_builder_trait;

#define PRIMITIVE_COLUMN_BUILDER_TRAIT(VastType, ArrowType)                    \
  template <>                                                                  \
  struct column_builder_trait<VastType>                                        \
    : primitive_column_builder_trait_base<VastType, ArrowType> {}

PRIMITIVE_COLUMN_BUILDER_TRAIT(bool_type, arrow::BooleanType);
PRIMITIVE_COLUMN_BUILDER_TRAIT(count_type, arrow::UInt64Type);
PRIMITIVE_COLUMN_BUILDER_TRAIT(real_type, arrow::DoubleType);

#undef PRIMITIVE_COLUMN_BUILDER_TRAIT

template <>
struct column_builder_trait<integer_type>
  : column_builder_trait_base<integer_type, arrow::Int64Type> {
  using super = column_builder_trait_base<integer_type, arrow::Int64Type>;

  static auto make_arrow_type() {
    return super::type_singleton();
  }

  static bool
  append(typename super::BuilderType& builder, typename super::view_type x) {
    return builder.Append(x.value).ok();
  }
};

template <>
struct column_builder_trait<time_type>
  : column_builder_trait_base<time_type, arrow::TimestampType> {
  using super = column_builder_trait_base<time_type, arrow::TimestampType>;

  static auto make_arrow_type() {
    return arrow::timestamp(arrow::TimeUnit::NANO);
  }

  static bool
  append(typename super::BuilderType& builder, typename super::view_type x) {
    return builder.Append(x.time_since_epoch().count()).ok();
  }
};

template <>
struct column_builder_trait<duration_type>
  : column_builder_trait_base<duration_type, arrow::DurationType> {
  using super = column_builder_trait_base<duration_type, arrow::DurationType>;

  static auto make_arrow_type() {
    return arrow::duration(arrow::TimeUnit::NANO);
  }

  static bool
  append(typename super::BuilderType& builder, typename super::view_type x) {
    return builder.Append(x.count()).ok();
  }
};

template <>
struct column_builder_trait<string_type>
  : column_builder_trait_base<string_type, arrow::StringType> {
  using super = column_builder_trait_base<string_type, arrow::StringType>;

  static auto make_arrow_type() {
    return super::type_singleton();
  }

  static bool
  append(typename super::BuilderType& builder, typename super::view_type x) {
    auto str = arrow::util::string_view(x.data(), x.size());
    return builder.Append(str).ok();
  }
};

template <>
struct column_builder_trait<pattern_type>
  : column_builder_trait_base<pattern_type, arrow::StringType> {
  using super = column_builder_trait_base<pattern_type, arrow::StringType>;

  static auto make_arrow_type() {
    return super::type_singleton();
  }

  static bool
  append(typename super::BuilderType& builder, typename super::view_type x) {
    auto str = arrow::util::string_view(x.string().data(), x.string().size());
    return builder.Append(str).ok();
  }
};

class enum_column_builder
  : public experimental_table_slice_builder::column_builder {
public:
  // arrow::StringDictionaryBuilder would be appropriate, but requires data
  // to be appended as string, however the table slice only receives the uint8
  using arrow_builder_type = arrow::Int16Builder;

  explicit enum_column_builder(enumeration_type enum_type,
                               arrow::MemoryPool* pool)
    : enum_type_{std::move(enum_type)},
      arr_builder_{std::make_shared<arrow::Int16Builder>(pool)},
      dict_builder_{pool} {
  }

  bool add(data_view x) override {
    if (auto* xptr = caf::get_if<view<enumeration>>(&x))
      return arr_builder_->Append(*xptr).ok();
    if (caf::holds_alternative<view<caf::none_t>>(x))
      return arr_builder_->AppendNull().ok();
    return false;
  }

  std::shared_ptr<arrow::Array> finish() override {
    if (auto index_array = arr_builder_->Finish(); index_array.ok())
      return std::make_shared<arrow::DictionaryArray>(
        arrow::dictionary(arrow::int16(), arrow::utf8()),
        index_array.ValueUnsafe(), make_field_array());
    die("failed to finish Arrow enum builders");
  }

  [[nodiscard]] std::shared_ptr<arrow::ArrayBuilder>
  arrow_builder() const override {
    return arr_builder_;
  }

private:
  enumeration_type enum_type_;
  std::shared_ptr<arrow::Int16Builder> arr_builder_;
  arrow::StringBuilder dict_builder_;

  [[nodiscard]] std::shared_ptr<arrow::Array> make_field_array() {
    for (const auto& f : enum_type_.fields())
      if (!dict_builder_.Append(std::string{f.name}).ok())
        die("failed to build Arrow enum field array");
    if (auto array = dict_builder_.Finish(); array.ok()) {
      return *array;
    }
    die("failed to finish Arrow enum field array");
  }
};

template <>
struct column_builder_trait<none_type> : arrow::TypeTraits<arrow::NullType> {
  // -- member types -----------------------------------------------------------

  using super = arrow::TypeTraits<arrow::NullType>;

  using data_type = caf::none_t;

  using view_type = view<data_type>;

  using meta_type = none_type;

  // -- static member functions ------------------------------------------------

  static auto make_arrow_type() {
    return super::type_singleton();
  }

  static bool append(typename super::BuilderType& builder, view_type) {
    return builder.AppendNull().ok();
  }
};

template <>
struct column_builder_trait<address_type>
  : arrow::TypeTraits<arrow::FixedSizeBinaryType> {
  // -- member types -----------------------------------------------------------

  using super = arrow::TypeTraits<arrow::FixedSizeBinaryType>;

  using data_type = address;

  using view_type = view<data_type>;

  using meta_type = address_type;

  // -- static member functions ------------------------------------------------

  static auto make_arrow_type() {
    return std::make_shared<arrow::FixedSizeBinaryType>(16);
  }

  static bool append(typename super::BuilderType& builder, view_type x) {
    auto bytes = as_bytes(x);
    auto ptr = reinterpret_cast<const char*>(bytes.data());
    auto str = arrow::util::string_view{ptr, bytes.size()};
    return builder.Append(str).ok();
  }
};

template <class Trait>
class column_builder_impl final
  : public experimental_table_slice_builder::column_builder {
public:
  using arrow_builder_type = typename Trait::BuilderType;

  explicit column_builder_impl(arrow::MemoryPool* pool) {
    if constexpr (Trait::is_parameter_free)
      reset(pool);
    else
      reset(Trait::make_arrow_type(), pool);
  }

  bool add(data_view x) override {
    if (auto xptr = caf::get_if<typename Trait::view_type>(&x))
      return Trait::append(*arrow_builder_, *xptr);
    else if (caf::holds_alternative<view<caf::none_t>>(x))
      return arrow_builder_->AppendNull().ok();
    else
      return false;
  }

  std::shared_ptr<arrow::Array> finish() override {
    std::shared_ptr<arrow::Array> result;
    if (!arrow_builder_->Finish(&result).ok())
      die("failed to finish Arrow column builder");
    return result;
  }

  [[nodiscard]] std::shared_ptr<arrow::ArrayBuilder>
  arrow_builder() const override {
    return arrow_builder_;
  }

private:
  template <class... Ts>
  void reset(Ts&&... xs) {
    arrow_builder_
      = std::make_shared<arrow_builder_type>(std::forward<Ts>(xs)...);
  }

  std::shared_ptr<arrow_builder_type> arrow_builder_;
};

class list_column_builder
  : public experimental_table_slice_builder::column_builder {
public:
  using arrow_builder_type = arrow::ListBuilder;

  using data_type = type_to_data_t<list_type>;

  list_column_builder(arrow::MemoryPool* pool,
                      std::unique_ptr<column_builder> nested)
    : nested_(std::move(nested)) {
    reset(pool, nested_->arrow_builder());
  }

  bool add(data_view x) override {
    if (caf::holds_alternative<view<caf::none_t>>(x))
      return arrow_builder_->AppendNull().ok();
    if (!arrow_builder_->Append().ok())
      return false;
    if (auto xptr = caf::get_if<view<data_type>>(&x)) {
      auto n = (*xptr)->size();
      for (size_t i = 0; i < n; ++i)
        if (!nested_->add((*xptr)->at(i)))
          return false;
      return true;
    } else {
      return false;
    }
  }

  std::shared_ptr<arrow::Array> finish() override {
    std::shared_ptr<arrow::Array> result;
    if (!arrow_builder_->Finish(&result).ok())
      die("failed to finish Arrow column builder");
    return result;
  }

  [[nodiscard]] std::shared_ptr<arrow::ArrayBuilder>
  arrow_builder() const override {
    return arrow_builder_;
  }

private:
  template <class... Ts>
  void reset(Ts&&... xs) {
    arrow_builder_
      = std::make_shared<arrow_builder_type>(std::forward<Ts>(xs)...);
  }

  std::shared_ptr<arrow::ListBuilder> arrow_builder_;

  std::unique_ptr<column_builder> nested_;
};

template <class VastType>
using column_builder_impl_t
  = column_builder_impl<column_builder_trait<VastType>>;

class map_column_builder
  : public experimental_table_slice_builder::column_builder {
public:
  using arrow_builder_type = arrow::MapBuilder;

  map_column_builder(arrow::MemoryPool* pool,
                     std::unique_ptr<column_builder> key_builder,
                     std::unique_ptr<column_builder> item_builder)
    : key_builder_(std::move(key_builder)),
      item_builder_(std::move(item_builder)) {
    map_builder_ = std::make_shared<arrow::MapBuilder>(
      pool, key_builder_->arrow_builder(), item_builder_->arrow_builder());
  }

  bool add(data_view x) override {
    if (caf::holds_alternative<view<caf::none_t>>(x))
      return map_builder_->AppendNull().ok();
    VAST_ASSERT(caf::holds_alternative<view<map>>(x));
    auto m = caf::get<view<map>>(x);
    if (!map_builder_->Append().ok())
      return false;
    for (auto entry : *m) {
      if (!key_builder_->add(entry.first) || !item_builder_->add(entry.second))
        return false;
    }
    return true;
  }

  std::shared_ptr<arrow::Array> finish() override {
    auto res = map_builder_->Finish();
    return res.ValueOrDie();
  }

  [[nodiscard]] std::shared_ptr<arrow::ArrayBuilder>
  arrow_builder() const override {
    return map_builder_;
  }

private:
  std::shared_ptr<arrow::MapBuilder> map_builder_;

  std::unique_ptr<column_builder> key_builder_;
  std::unique_ptr<column_builder> item_builder_;
};

class record_column_builder
  : public experimental_table_slice_builder::column_builder {
public:
  using data_type = view<record>;

  record_column_builder(
    arrow::MemoryPool* pool, std::shared_ptr<arrow::DataType> struct_type,
    std::vector<std::unique_ptr<column_builder>>&& field_builders)
    : field_builders_{std::move(field_builders)} {
    auto fields = std::vector<std::shared_ptr<arrow::ArrayBuilder>>{};
    fields.reserve(field_builders_.size());
    for (auto& field_builder : field_builders_) {
      auto underlying_builder = field_builder->arrow_builder();
      VAST_ASSERT(underlying_builder);
      fields.push_back(std::move(underlying_builder));
    }
    struct_builder_ = std::make_shared<arrow::StructBuilder>(struct_type, pool,
                                                             std::move(fields));
  }

  bool add(data_view x) override {
    if (caf::holds_alternative<view<caf::none_t>>(x)) {
      auto status = struct_builder_->AppendNull();
      return status.ok();
    }
    // Verify that we're actually holding a record.
    auto* xptr = caf::get_if<data_type>(&x);
    if (!xptr)
      return false;
    if (auto status = struct_builder_->Append(); !status.ok())
      return false;
    const auto& r = **xptr;
    VAST_ASSERT(r.size() == field_builders_.size(), "record size mismatch");
    for (size_t i = 0; i < r.size(); ++i) {
      VAST_ASSERT(struct_builder_->type()->field(i)->name() == r.at(i).first,
                  "field name mismatch");
      if (!field_builders_[i]->add(r.at(i).second))
        return false;
    }
    return true;
  }

  std::shared_ptr<arrow::Array> finish() override {
    std::shared_ptr<arrow::Array> result;
    if (!struct_builder_->Finish(&result).ok())
      die("failed to finish Arrow column builder");
    return result;
  }

  [[nodiscard]] std::shared_ptr<arrow::ArrayBuilder>
  arrow_builder() const override {
    return struct_builder_;
  }

private:
  std::shared_ptr<arrow::StructBuilder> struct_builder_;

  std::vector<std::unique_ptr<column_builder>> field_builders_;
};

class subnet_column_builder
  : public experimental_table_slice_builder::column_builder {
public:
  using data_type = view<subnet>;
  using view_type = view<data_type>;

  subnet_column_builder(arrow::MemoryPool* pool)
    : address_builder_(std::make_shared<arrow::FixedSizeBinaryBuilder>(
      address_extension_type::arrow_type, pool)),
      length_builder_(std::make_shared<arrow::UInt8Builder>()) {
    std::vector<std::shared_ptr<arrow::ArrayBuilder>> fields{address_builder_,
                                                             length_builder_};
    subnet_builder_ = std::make_shared<arrow::StructBuilder>(
      subnet_extension_type::arrow_type, pool, fields);
  }

  bool add(data_view data) override {
    if (caf::holds_alternative<view<caf::none_t>>(data))
      return subnet_builder_->AppendNull().ok();
    if (auto* dataptr = caf::get_if<view_type>(&data)) {
      const auto* addr_ptr
        = reinterpret_cast<const char*>(as_bytes(dataptr->network()).data());
      return subnet_builder_->Append().ok()
             && length_builder_->Append(dataptr->length()).ok()
             && address_builder_->Append(addr_ptr).ok();
    }
    return false;
  }

  std::shared_ptr<arrow::Array> finish() override {
    if (auto result = subnet_builder_->Finish(); result.ok())
      return *result;
    die("failed to finish Arrow subnet column builder");
  }

  [[nodiscard]] std::shared_ptr<arrow::ArrayBuilder>
  arrow_builder() const override {
    return subnet_builder_;
  }

private:
  std::shared_ptr<arrow::FixedSizeBinaryBuilder> address_builder_;
  std::shared_ptr<arrow::UInt8Builder> length_builder_;
  std::shared_ptr<arrow::StructBuilder> subnet_builder_;
};

/// Consumes arrow arrays and builds up the appropriate array based on the
/// provided data type.
/// @param array_iterator An iterator to consume column arrays.
/// @param arrow_type the data type we're building the array for.
std::shared_ptr<arrow::Array>
make_arrow_array(arrow::ArrayVector::const_iterator& array_iterator,
                 std::shared_ptr<arrow::DataType> arrow_type) {
  auto f = detail::overload{
    // TODO: catch-all is bad, but implementing 15 code paths for standard
    // arrays ain't any better
    [&](const std::shared_ptr<arrow::DataType>&)
      -> std::shared_ptr<arrow::Array> {
      return *array_iterator++;
    },
    [&](const std::shared_ptr<arrow::StructType>& st)
      -> std::shared_ptr<arrow::Array> {
      arrow::ArrayVector children{};
      std::vector<std::string> field_names{};
      children.reserve(st->num_fields());
      field_names.reserve(st->num_fields());
      for (const auto& field : st->fields()) {
        children.push_back(make_arrow_array(array_iterator, field->type()));
        field_names.push_back(field->name());
      }
      auto res = arrow::StructArray::Make(children, field_names);
      return res.ValueOrDie();
    }};
  return caf::visit(f, arrow_type);
}

auto make_record_batch(const arrow::ArrayVector& columns, size_t rows,
                       const std::shared_ptr<arrow::Schema>& schema) {
  auto it = columns.begin();
  auto output_columns = arrow::ArrayVector{};
  output_columns.reserve(schema->num_fields());
  for (const auto& field : schema->fields())
    output_columns.push_back(make_arrow_array(it, field->type()));
  return arrow::RecordBatch::Make(schema, detail::narrow_cast<int64_t>(rows),
                                  std::move(output_columns));
}

} // namespace

// -- member types -------------------------------------------------------------

experimental_table_slice_builder::column_builder::~column_builder() noexcept {
  // nop
}

std::unique_ptr<experimental_table_slice_builder::column_builder>
experimental_table_slice_builder::column_builder::make(
  const type& t, arrow::MemoryPool* pool) {
  auto f = detail::overload{
    [=](const auto& x) -> std::unique_ptr<column_builder> {
      return std::make_unique<column_builder_impl_t<std::decay_t<decltype(x)>>>(
        pool);
    },
    [=](const list_type& x) -> std::unique_ptr<column_builder> {
      auto nested = column_builder::make(x.value_type(), pool);
      return std::make_unique<list_column_builder>(pool, std::move(nested));
    },
    [=](const map_type& x) -> std::unique_ptr<column_builder> {
      auto key_builder = column_builder::make(x.key_type(), pool);
      auto value_builder = column_builder::make(x.value_type(), pool);
      record_type fields{{"key", x.key_type()}, {"value", x.value_type()}};
      return std::make_unique<map_column_builder>(pool, std::move(key_builder),
                                                  std::move(value_builder));
    },
    [&](const subnet_type&) -> std::unique_ptr<column_builder> {
      return std::make_unique<subnet_column_builder>(pool);
    },
    [&](const enumeration_type& x) -> std::unique_ptr<column_builder> {
      return std::make_unique<enum_column_builder>(x, pool);
    },
    [=](const record_type& x) -> std::unique_ptr<column_builder> {
      auto field_builders = std::vector<std::unique_ptr<column_builder>>{};
      field_builders.reserve(x.num_fields());
      for (const auto& field : x.fields())
        field_builders.push_back(column_builder::make(field.type, pool));
      return std::make_unique<record_column_builder>(
        pool, make_experimental_type(type{x}), std::move(field_builders));
    },
  };
  return caf::visit(f, t);
}

// -- constructors, destructors, and assignment operators ----------------------

table_slice_builder_ptr
experimental_table_slice_builder::make(type layout,
                                       size_t initial_buffer_size) {
  return table_slice_builder_ptr{new experimental_table_slice_builder{
                                   std::move(layout), initial_buffer_size},
                                 false};
}

experimental_table_slice_builder::~experimental_table_slice_builder() noexcept {
  // nop
}

// -- properties ---------------------------------------------------------------

size_t experimental_table_slice_builder::columns() const noexcept {
  auto result = schema_->num_fields();
  VAST_ASSERT(result >= 0);
  return detail::narrow_cast<size_t>(result);
}

namespace {

/// Create a table slice from a record batch.
/// @param record_batch The record batch to encode.
/// @param builder The flatbuffers builder to use.
table_slice create_table_slice(const arrow::RecordBatch& record_batch,
                               flatbuffers::FlatBufferBuilder& builder) {
  auto ipc_ostream = arrow::io::BufferOutputStream::Create().ValueOrDie();
  auto stream_writer
    = arrow::ipc::MakeStreamWriter(ipc_ostream, record_batch.schema())
        .ValueOrDie();
  auto status = stream_writer->WriteRecordBatch(record_batch);
  if (!status.ok())
    VAST_ERROR("failed to write record batch: {}", status);
  auto arrow_ipc_buffer = ipc_ostream->Finish().ValueOrDie();
  auto fbs_ipc_buffer
    = builder.CreateVector(arrow_ipc_buffer->data(), arrow_ipc_buffer->size());
  // Create Arrow-encoded table slices. We need to set the import time to
  // something other than 0, as it cannot be modified otherwise. We then later
  // reset it to the clock's epoch.
  constexpr int64_t stub_ns_since_epoch = 1337;
  auto arrow_table_slice_buffer = fbs::table_slice::arrow::Createexperimental(
    builder, fbs_ipc_buffer, stub_ns_since_epoch);
  // Create and finish table slice.
  auto table_slice_buffer
    = fbs::CreateTableSlice(builder,
                            fbs::table_slice::TableSlice::arrow_experimental,
                            arrow_table_slice_buffer.Union());
  fbs::FinishTableSliceBuffer(builder, table_slice_buffer);
  // Create the table slice from the chunk.
  auto chunk = fbs::release(builder);
  auto result = table_slice{std::move(chunk), table_slice::verify::no};
  result.import_time(time{});
  return result;
}

void verify_record_batch(const arrow::RecordBatch& record_batch) {
  auto check_col
    = [](auto&& check_col, const arrow::Array& column) noexcept -> void {
    auto f = detail::overload{
      [&](const arrow::StructArray& sa) noexcept {
        for (const auto& column : sa.fields())
          check_col(check_col, *column);
      },
      [&](const arrow::ListArray& la) noexcept {
        check_col(check_col, *la.values());
      },
      [&](const arrow::MapArray& ma) noexcept {
        check_col(check_col, *ma.keys());
        check_col(check_col, *ma.items());
      },
      [](const arrow::Array&) noexcept {},
    };
    caf::visit(f, column);
  };
  for (const auto& column : record_batch.columns())
    check_col(check_col, *column);
}

} // namespace

table_slice experimental_table_slice_builder::finish() {
  // Sanity check: If this triggers, the calls to add() did not match the number
  // of fields in the layout.
  VAST_ASSERT(column_ == 0);
  // Pack record batch.
  auto columns = arrow::ArrayVector{};
  columns.reserve(column_builders_.size());
  for (auto&& builder : column_builders_)
    columns.emplace_back(builder->finish());
  auto record_batch = make_record_batch(columns, rows_, schema_);
  // Reset the builder state.
  rows_ = {};
  return create_table_slice(*record_batch, this->builder_);
}

table_slice experimental_table_slice_builder::create(
  const std::shared_ptr<arrow::RecordBatch>& record_batch,
  size_t initial_buffer_size) {
  verify_record_batch(*record_batch);
  auto builder = flatbuffers::FlatBufferBuilder{initial_buffer_size};
  return create_table_slice(*record_batch, builder);
}

size_t experimental_table_slice_builder::rows() const noexcept {
  return rows_;
}

table_slice_encoding
experimental_table_slice_builder::implementation_id() const noexcept {
  return table_slice_encoding::experimental;
}

void experimental_table_slice_builder::reserve(
  [[maybe_unused]] size_t num_rows) {
  // nop
}

// -- implementation details ---------------------------------------------------

experimental_table_slice_builder::experimental_table_slice_builder(
  type layout, size_t initial_buffer_size)
  : table_slice_builder{std::move(layout)},
    schema_{make_experimental_schema(this->layout())},
    builder_{initial_buffer_size} {
  VAST_ASSERT(schema_);
  const auto& rt = caf::get<record_type>(this->layout());
  num_leaves_ = rt.num_leaves();
  column_builders_.reserve(num_leaves_);
  auto* pool = arrow::default_memory_pool();
  for (const auto& [field, _] : rt.leaves())
    column_builders_.emplace_back(column_builder::make(field.type, pool));
}

bool experimental_table_slice_builder::add_impl(data_view x) {
  if (!column_builders_[column_]->add(x))
    return false;
  if (++column_ == num_leaves_) {
    ++rows_;
    column_ = 0;
  }
  return true;
}

// -- utility functions --------------------------------------------------------

namespace {

std::vector<struct type::attribute>
deserialize_attributes(std::string_view serialized) {
  simdjson::padded_string json{serialized};
  simdjson::dom::parser parser;
  auto doc = parser.parse(json);
  std::vector<struct type::attribute> attrs{};
  for (auto f : doc.get_object()) {
    auto value = std::string{f.value.get_string().value()};
    if (!f.value.is_string()) {
      VAST_ERROR("Unexpected Arrow metadata content in json parser: {} -> {}",
                 f.key, f.value);
      continue;
    }
    std::optional<std::string> value_opt
      = value.empty() ? std::optional<std::string>() : value;
    attrs.push_back({std::string{f.key}, value_opt});
  }
  return attrs;
}

std::string
serialize_attributes(const std::vector<type::attribute_view>& attrs) {
  auto result = std::string{};
  auto inserter = std::back_inserter(result);
  fmt::format_to(inserter, "{{ ");
  bool first = true;
  for (const auto& [key, value] : attrs) {
    if (first)
      first = false;
    else
      fmt::format_to(inserter, ", ");
    fmt::format_to(inserter, R"("{}": "{}")", key, value);
  }
  fmt::format_to(inserter, "}}");
  return result;
}

std::shared_ptr<const arrow::KeyValueMetadata>
make_arrow_metadata(const type& t) {
  auto keys = std::vector<std::string>{};
  auto values = std::vector<std::string>{};
  int nesting_depth = 0;
  for (const auto& [name, attrs] : t.names_and_attributes()) {
    if (!name.empty()) {
      keys.emplace_back(fmt::format("VAST:name:{}", nesting_depth));
      values.emplace_back(std::string{name});
    }
    if (!attrs.empty()) {
      keys.emplace_back(fmt::format("VAST:attributes:{}", nesting_depth));
      values.emplace_back(serialize_attributes(attrs));
    }
    ++nesting_depth;
  }
  VAST_ASSERT(nesting_depth > 0);
  if (nesting_depth == 1)
    return nullptr;
  if (nesting_depth == 0)
    return nullptr;
  // Strip the last layer of metadata again, as that is guaranteed to be the
  // type's kind.
  VAST_ASSERT(keys.back() == fmt::format("VAST:name:{}", nesting_depth - 1));
  keys.pop_back();
  values.pop_back();
  return arrow::KeyValueMetadata::Make(std::move(keys), std::move(values));
}

} // namespace

std::shared_ptr<arrow::Schema> make_experimental_schema(const type& t) {
  VAST_ASSERT(caf::holds_alternative<record_type>(t));
  const auto& rt = caf::get<record_type>(t);
  std::vector<std::shared_ptr<arrow::Field>> arrow_fields;
  arrow_fields.reserve(rt.num_leaves());
  for (const auto& field : rt.fields())
    arrow_fields.emplace_back(make_experimental_field(field));
  const auto& metadata = make_arrow_metadata(t);
  return std::make_shared<arrow::Schema>(arrow_fields, metadata);
}

std::shared_ptr<arrow::Field>
make_experimental_field(const record_type::field_view& field,
                        const bool nullable) {
  const auto& arrow_type = make_experimental_type(field.type);
  return arrow::field(std::string{field.name}, arrow_type, nullable,
                      make_arrow_metadata(field.type));
}

std::shared_ptr<arrow::DataType> make_experimental_type(const type& t) {
  using data_type_ptr = std::shared_ptr<arrow::DataType>;
  auto f = detail::overload{
    [](const auto& x) -> data_type_ptr {
      using trait = column_builder_trait<std::decay_t<decltype(x)>>;
      return trait::make_arrow_type();
    },
    [](const enumeration_type& x) {
      return make_arrow_enum(x);
    },
    [](const address_type&) {
      return make_arrow_address();
    },
    [](const subnet_type&) {
      return make_arrow_subnet();
    },
    [](const pattern_type&) {
      return make_arrow_pattern();
    },
    [](const list_type& x) -> data_type_ptr {
      return arrow::list(make_experimental_field({"item", x.value_type()}));
    },
    [](const map_type& x) -> data_type_ptr {
      return std::make_shared<arrow::MapType>(
        make_experimental_field({"key", x.key_type()}, false),
        make_experimental_field({"item", x.value_type()}));
    },
    [](const record_type& x) -> data_type_ptr {
      std::vector<std::shared_ptr<arrow::Field>> fields;
      fields.reserve(x.num_fields());
      for (const auto& field : x.fields())
        fields.push_back(make_experimental_field(field));
      return arrow::struct_(fields);
    },
  };
  return caf::visit(f, t);
}

namespace {

/// Takes an Arrow data type and converts it to its according VAST
/// representation. As metadata is handled at the field level on the field
/// level in Arrow, the type at this point is incomplete, as it's lacking the
/// enriched type information (alias names and attributes).
type make_vast_type_int(const arrow::DataType& arrow_type) {
  auto f = detail::overload{
    [](const arrow::NullType&) -> type {
      return type{none_type{}};
    },
    [](const arrow::BooleanType&) -> type {
      return type{bool_type{}};
    },
    [](const arrow::Int64Type&) -> type {
      return type{integer_type{}};
    },
    [](const arrow::UInt64Type&) -> type {
      return type{count_type{}};
    },
    [](const arrow::DoubleType&) -> type {
      return type{real_type{}};
    },
    [](const arrow::StringType&) -> type {
      return type{string_type{}};
    },
    [](const arrow::DurationType& t) -> type {
      if (t.unit() != arrow::TimeUnit::NANO)
        die(fmt::format("unhandled Arrow type: Duration[{}]", t.unit()));
      return type{duration_type{}};
    },
    [](const arrow::TimestampType& t) -> type {
      if (t.unit() != arrow::TimeUnit::NANO)
        die(fmt::format("unhandled Arrow type: Timestamp[{}]", t.unit()));
      return type{time_type{}};
    },
    [](const arrow::MapType& mt) {
      return type{map_type{
        make_vast_type(*mt.key_field()),
        make_vast_type(*mt.item_field()),
      }};
    },
    [](const arrow::ListType& lt) {
      const auto& embedded_type = make_vast_type(*lt.value_field());
      return type{list_type{embedded_type}};
    },
    [](const arrow::StructType& st) {
      std::vector<record_type::field_view> field_types;
      field_types.reserve(st.num_fields());
      for (const auto& f : st.fields())
        field_types.emplace_back(f->name(), make_vast_type(*f));
      return type{record_type{field_types}};
    },
    [](const pattern_extension_type&) -> type {
      return type{pattern_type{}};
    },
    [](const address_extension_type&) -> type {
      return type{address_type{}};
    },
    [](const subnet_extension_type&) -> type {
      return type{subnet_type{}};
    },
    [](const enum_extension_type& et) -> type {
      return type{et.get_enum_type()};
    },
    [](const arrow::FixedSizeBinaryType&) -> type {
      die("only used in old arrow encoding; remove from sum type access when "
          "making the experimental encoding the default");
    },
  };
  return caf::visit(f, arrow_type);
}

/// Enhances a VAST type based on the metadata extracted from Arrow.
/// Metadata can be attached to both Arrow schema and an Arrow field, and VAST
/// stores metadata on either of the two, using the exact same structure.
type enrich_type_with_metadata(
  type t, const std::shared_ptr<const arrow::KeyValueMetadata>& metadata) {
  if (!metadata)
    return t;
  auto names_and_attrs
    = std::vector<std::pair<std::string, std::vector<struct type::attribute>>>{};
  auto name_parser = "VAST:name:" >> parsers::u32 >> parsers::eoi;
  auto attr_parser = "VAST:attributes:" >> parsers::u32 >> parsers::eoi;
  for (const auto& [key, value] :
       detail::zip(metadata->keys(), metadata->values())) {
    if (!key.starts_with("VAST:"))
      continue;
    if (uint32_t index{}; name_parser(key, index)) {
      if (index >= names_and_attrs.size())
        names_and_attrs.resize(index + 1);
      names_and_attrs[index].first = value;
      continue;
    }
    if (uint32_t index{}; attr_parser(key, index)) {
      if (index >= names_and_attrs.size())
        names_and_attrs.resize(index + 1);
      names_and_attrs[index].second = deserialize_attributes(value);
      continue;
    }
    VAST_WARN("Unhandled VAST metadata key '{}'", key);
  }
  for (auto it = names_and_attrs.rbegin(); it != names_and_attrs.rend(); ++it)
    t = type{it->first, t, it->second};
  return t;
}

} // namespace

type make_vast_type(const arrow::Field& field) {
  auto vast_type = make_vast_type_int(*field.type());
  return enrich_type_with_metadata(std::move(vast_type), field.metadata());
}

type make_vast_type(const arrow::Schema& arrow_schema) {
  std::vector<record_type::field_view> field_types;
  field_types.reserve(arrow_schema.num_fields());
  for (const auto& f : arrow_schema.fields())
    field_types.emplace_back(f->name(), make_vast_type(*f));
  return enrich_type_with_metadata(type{record_type{field_types}},
                                   arrow_schema.metadata());
}

} // namespace vast
