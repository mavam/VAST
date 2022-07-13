//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/pipeline_operator.hpp>
#include <vast/plugin.hpp>

namespace vast::plugins {

// This example transform shows the necessary scaffolding in order to
// use the `transform_plugin` API.

// The main job of a transform plugin is to create a `transform_step`
// when required. A transform step is a function that gets a table
// slice and returns the slice with a transformation applied.
class example_transform_step : public transform_step {
public:
  example_transform_step() = default;

  /// Applies the transformation to an Arrow Record Batch with a corresponding
  /// VAST layout.
  [[nodiscard]] caf::error
  add(type layout, std::shared_ptr<arrow::RecordBatch> batch) override {
    // Transform the table slice here.
    transformed_.emplace_back(std::move(layout), std::move(batch));
    return caf::none;
  }

  /// Retrieves the result of the transformation.
  [[nodiscard]] caf::expected<std::vector<transform_batch>> finish() override {
    return std::exchange(transformed_, {});
  }

private:
  /// The slices being transformed.
  std::vector<transform_batch> transformed_;
};

// The plugin definition itself is below.
class example_transform_plugin final : public virtual transform_plugin {
public:
  caf::error initialize(data) override {
    return {};
  }

  // The name is how the transform step is addressed in a transform
  // definition, for example:
  //
  //     vast:
  //       transforms:
  //         transform1:
  //           - step1:
  //           - example-transform:
  //              setting: value
  //           - step3:
  //
  [[nodiscard]] const char* name() const override {
    return "example-transform";
  };

  // This is called once for every time this transform step appears in a
  // transform definition. The configuration for the step is opaquely
  // passed as the first argument.
  [[nodiscard]] caf::expected<std::unique_ptr<transform_step>>
  make_pipeline_operator(const vast::record&) const override {
    return std::make_unique<vast::plugins::example_transform_step>();
  }
};

} // namespace vast::plugins

// Finally, register our plugin.
VAST_REGISTER_PLUGIN(vast::plugins::example_transform_plugin)
