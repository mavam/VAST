#include "vast/transform_steps/replace.hpp"

#include "vast/arrow_table_slice_builder.hpp"
#include "vast/concept/parseable/vast/data.hpp"
#include "vast/error.hpp"
#include "vast/plugin.hpp"
#include "vast/table_slice_builder_factory.hpp"

#include <fmt/format.h>

namespace vast {

replace_step::replace_step(const std::string& fieldname,
                           const vast::data& value)
  : field_(fieldname), value_(value) {
  VAST_ASSERT(is_basic(value_));
}

caf::expected<table_slice> replace_step::operator()(table_slice&& slice) const {
  const auto& layout = slice.layout();
  auto offset = layout.resolve(field_);
  if (!offset)
    return std::move(slice);
  // We just got the offset from `layout`, so we can safely dereference.
  auto column_index = *layout.flat_index_at(*offset);
  vast::data anonymized_value;
  auto type = layout.fields.at(column_index).type;
  auto builder_ptr
    = factory<table_slice_builder>::make(slice.encoding(), slice.layout());
  for (size_t i = 0; i < slice.rows(); ++i) {
    for (size_t j = 0; j < slice.columns(); ++j) {
      const auto& item = slice.at(i, j);
      auto success
        = j == column_index ? builder_ptr->add(value_) : builder_ptr->add(item);
      if (!success)
        return caf::make_error(ec::unspecified, "anonymize step: unknown error "
                                                "in table slice builder");
    }
  }
  return builder_ptr->finish();
}

#if VAST_ENABLE_ARROW > 0

[[nodiscard]] std::pair<vast::record_type, std::shared_ptr<arrow::RecordBatch>>
replace_step::operator()(vast::record_type layout,
                         std::shared_ptr<arrow::RecordBatch> batch) const {
  auto offset = layout.resolve(field_);
  if (!offset)
    return std::make_pair(std::move(layout), std::move(batch));
  auto flat_index = layout.flat_index_at(*offset);
  VAST_ASSERT(flat_index); // We just got this from `layout`.
  auto column_index = static_cast<int>(*flat_index);
  // Compute the hash values.
  auto cb = arrow_table_slice_builder::column_builder::make(
    value_.basic_type(), arrow::default_memory_pool());
  for (int i = 0; i < batch->num_rows(); ++i) {
    cb->add(make_view(value_));
  }
  auto values_column = cb->finish();
  auto removed = batch->RemoveColumn(column_index);
  if (!removed.ok())
    return std::make_pair(std::move(layout), nullptr);
  batch = removed.ValueOrDie();
  // SetColumn inserts *before* the element at the given index.
  auto added = batch->AddColumn(column_index, field_, values_column);
  if (!added.ok())
    return std::make_pair(std::move(layout), nullptr);
  batch = added.ValueOrDie();
  // Adjust layout.
  layout.fields[column_index].type = value_.basic_type();
  return std::make_pair(std::move(layout), std::move(batch));
}

#endif

class replace_step_plugin final : public virtual transform_plugin {
public:
  // Plugin API
  caf::error initialize(data) override {
    return {};
  }

  [[nodiscard]] const char* name() const override {
    return "replace";
  };

  // Transform Plugin API
  [[nodiscard]] caf::expected<transform_step_ptr>
  make_transform_step(const caf::settings& opts) const override {
    auto field = caf::get_if<std::string>(&opts, "field");
    if (!field)
      return caf::make_error(ec::invalid_configuration,
                             "key 'field' is missing or not a string in "
                             "configuration for delete step");
    auto value = caf::get_if<std::string>(&opts, "value");
    if (!value)
      return caf::make_error(ec::invalid_configuration,
                             "key 'value' is missing or not a string in "
                             "configuration for delete step");
    auto data = from_yaml(*value);
    if (!data)
      return caf::make_error(ec::invalid_configuration,
                             fmt::format("could not parse '{}' as valid data "
                                         "object: {}",
                                         *value, render(data.error())));
    if (!is_basic(*data))
      return caf::make_error(ec::invalid_configuration, "only basic types are "
                                                        "allowed for 'replace' "
                                                        "transform");
    return std::make_unique<replace_step>(*field, std::move(*data));
  }
};

} // namespace vast

VAST_REGISTER_PLUGIN(vast::replace_step_plugin)
