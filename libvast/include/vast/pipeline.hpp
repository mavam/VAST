//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/ids.hpp"
#include "vast/pipeline_operator.hpp"
#include "vast/type.hpp"

#include <queue>

namespace vast {

class pipeline {
public:
  pipeline(std::string name, std::vector<std::string>&& schema_names);

  ~pipeline() = default;

  pipeline(const pipeline&) = delete;
  pipeline(pipeline&&) = default;

  pipeline& operator=(const pipeline&) = delete;
  pipeline& operator=(pipeline&&) = default;

  void add_operator(std::unique_ptr<pipeline_operator> step);

  /// Returns true if any of the pipeline operators is aggregate.
  [[nodiscard]] bool is_aggregate() const;

  /// Tests whether the transform applies to events of the given type.
  [[nodiscard]] bool applies_to(std::string_view event_name) const;

  /// Adds the table to the internal queue of batches to be transformed.
  [[nodiscard]] caf::error add(table_slice&&);

  /// Applies pipelines to the batches in the internal queue.
  /// @note The offsets of the slices may not be preserved.
  [[nodiscard]] caf::expected<std::vector<table_slice>> finish();

  [[nodiscard]] const std::string& name() const;

private:
  // Returns the list of schemas that the transform should apply to.
  // An empty vector means that the transform should apply to everything.
  [[nodiscard]] const std::vector<std::string>& schema_names() const;

  /// Add the batch to the internal queue of batches to be transformed.
  [[nodiscard]] caf::error
  add_batch(vast::type layout, std::shared_ptr<arrow::RecordBatch> batch);

  /// Applies pipelines to the batches in the internal queue.
  /// @note The offsets of the slices may not be preserved.
  [[nodiscard]] caf::expected<std::vector<pipeline_batch>> finish_batch();

  /// Applies the pipeline operator to every batch in the queue.
  caf::error
  process_queue(const std::unique_ptr<pipeline_operator>& step,
                std::vector<pipeline_batch>& result, bool check_layout);

  /// Grant access to the pipelines engine so it can call
  /// add_batch/finsih_batch.
  friend class pipeline_engine;

  /// Name assigned to this pipelines.
  std::string name_;

  /// Sequence of pipelines steps
  std::vector<std::unique_ptr<pipeline_operator>> steps_;

  /// Triggers for this transform
  std::vector<std::string> schema_names_;

  /// The slices being transformed.
  std::deque<pipeline_batch> to_transform_;

  /// The import timestamps collected since the last call to finish.
  std::vector<time> import_timestamps_ = {};
};

class pipeline_engine {
public:
  /// Controls the validation of the pipelines Engine.
  enum class allow_aggregate_pipelines {
    yes, /// Allows the usage of aggregate pipeline operators.
    no,  /// Forbids using aggregate pipeline operators.
  };

  // member functions

  /// Constructor.
  pipeline_engine() = default;
  explicit pipeline_engine(std::vector<pipeline>&&);

  /// Returns an error if any of the pipelines is an aggregate and
  /// aggregates are not allowed.
  caf::error validate(enum allow_aggregate_pipelines);

  /// Starts applying relevant pipelines to the table.
  caf::error add(table_slice&&);

  /// Finishes applying pipelines to the added tables.
  /// @note The offsets of the slices may not be preserved.
  caf::expected<std::vector<table_slice>> finish();

  /// Get a list of the pipelines.
  const std::vector<pipeline>& pipelines();

private:
  static caf::error
  process_queue(pipeline& transform, std::deque<pipeline_batch>& queue);

  /// Apply relevant pipelines to the table slice.
  caf::expected<table_slice> transform_slice(table_slice&& x);

  /// The set of pipelines.
  std::vector<pipeline> pipelines_;

  /// Mapping from event type to applicable pipelines.
  std::unordered_map<std::string, std::vector<size_t>> layout_mapping_;

  /// The pipelines that will be applied to *all* types.
  std::vector<size_t> general_pipelines_;

  /// The slices being transformed.
  std::unordered_map<vast::type, std::deque<table_slice>> to_transform_;
};

} // namespace vast
