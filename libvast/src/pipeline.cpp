//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/pipeline.hpp"

#include "vast/logger.hpp"
#include "vast/table_slice_builder.hpp"
#include "vast/table_slice_builder_factory.hpp"
#include "vast/table_slice_encoding.hpp"

#include <arrow/type.h>
#include <caf/expected.hpp>
#include <caf/none.hpp>
#include <caf/type_id.hpp>

#include <algorithm>

namespace vast {

pipeline::pipeline(std::string name, std::vector<std::string>&& schema_names)
  : name_(std::move(name)), schema_names_(std::move(schema_names)) {
}

void pipeline::add_operator(std::unique_ptr<pipeline_operator> step) {
  steps_.emplace_back(std::move(step));
}

const std::string& pipeline::name() const {
  return name_;
}

const std::vector<std::string>& pipeline::schema_names() const {
  return schema_names_;
}

bool pipeline::is_aggregate() const {
  return std::any_of(steps_.begin(), steps_.end(), [](const auto& step) {
    return step->is_aggregate();
  });
}

bool pipeline::applies_to(std::string_view event_name) const {
  return schema_names_.empty()
         || std::find(schema_names_.begin(), schema_names_.end(), event_name)
              != schema_names_.end();
}

caf::error pipeline::add(table_slice&& x) {
  VAST_DEBUG("transform {} adds a slice", name_);
  import_timestamps_.push_back(x.import_time());
  auto batch = to_record_batch(x);
  return add_batch(x.layout(), batch);
}

caf::expected<std::vector<table_slice>> pipeline::finish() {
  VAST_DEBUG("transform {} retrieves results from {} steps", name_,
             steps_.size());
  auto guard = caf::detail::make_scope_guard([this]() {
    this->to_transform_.clear();
    this->import_timestamps_.clear();
  });
  std::vector<table_slice> result{};
  auto finished = finish_batch();
  if (!finished)
    return std::move(finished.error());
  if (finished->empty())
    return result;
  result.reserve(finished->size());
  // Wrap the batches into table slices and assign import timestamps.
  // In case the numbers of input and output batches differ we use the
  // maximum of the input timestamps, otherwise we assume the input and output
  // streams are aligned.
  if (is_aggregate() || finished->size() != import_timestamps_.size()) {
    VAST_ASSERT_CHEAP(!import_timestamps_.empty());
    auto max_import_timestamp
      = *std::max_element(import_timestamps_.begin(), import_timestamps_.end());
    for (auto& [layout, batch] : *finished) {
      auto& slice = result.emplace_back(batch);
      slice.import_time(max_import_timestamp);
    }
  } else {
    for (size_t i = 0; auto& [layout, batch] : *finished) {
      auto& slice = result.emplace_back(batch);
      slice.import_time(import_timestamps_[i++]);
    }
  }
  return result;
}

caf::error pipeline::add_batch(vast::type layout,
                               std::shared_ptr<arrow::RecordBatch> batch) {
  VAST_TRACE("add arrow data to transform {}", name_);
  to_transform_.emplace_back(std::move(layout), std::move(batch));
  return caf::none;
}

caf::error
pipeline::process_queue(const std::unique_ptr<pipeline_operator>& step,
                        std::vector<pipeline_batch>& result,
                        bool check_layout) {
  caf::error failed{};
  const auto size = to_transform_.size();
  for (size_t i = 0; i < size; ++i) {
    auto [layout, batch] = std::move(to_transform_.front());
    to_transform_.pop_front();
    if (check_layout && !applies_to(layout.name())) {
      // The transform does not change slices of unconfigured event types.
      VAST_TRACE("{} transform skips a '{}' layout slice with {} event(s)",
                 this->name(), std::string{layout.name()}, batch->num_rows());
      result.emplace_back(std::move(layout), std::move(batch));
      continue;
    }
    if (auto err = step->add(std::move(layout), std::move(batch))) {
      failed = caf::make_error(
        static_cast<vast::ec>(err.code()),
        fmt::format("transform aborts because of an error: {}", err));
      to_transform_.clear();
      break;
    }
  }
  // Finish frees up resource inside the plugin.
  auto finished = step->finish();
  if (!finished && !failed)
    failed = std::move(finished.error());
  if (failed) {
    to_transform_.clear();
    return failed;
  }
  for (const auto& b : *finished)
    to_transform_.push_back(b);
  return caf::none;
}

caf::expected<std::vector<pipeline_batch>> pipeline::finish_batch() {
  VAST_DEBUG("applying {} transform {}", steps_.size(), name_);
  bool first_run = true;
  std::vector<pipeline_batch> result{};
  for (const auto& step : steps_) {
    auto failed = process_queue(step, result, first_run);
    first_run = false;
    if (failed) {
      to_transform_.clear();
      return failed;
    }
  }
  while (!to_transform_.empty()) {
    result.emplace_back(std::move(to_transform_.front()));
    to_transform_.pop_front();
  }
  to_transform_.clear();
  return result;
}

pipeline_engine::pipeline_engine(std::vector<pipeline>&& pipelines)
  : pipelines_(std::move(pipelines)) {
  for (size_t i = 0; i < pipelines_.size(); ++i) {
    auto const& schema_names = pipelines_[i].schema_names();
    if (!schema_names.empty())
      for (const auto& type : schema_names)
        layout_mapping_[type].push_back(i);
    else
      general_pipelines_.push_back(i);
  }
}

caf::error
pipeline_engine::validate(enum allow_aggregate_pipelines allow_aggregates) {
  const auto first_aggregate = std::find_if(
    pipelines_.begin(), pipelines_.end(), [](const auto& transform) {
      return transform.is_aggregate();
    });
  bool is_aggregate = first_aggregate != pipelines_.end();
  auto is_aggregate_allowed
    = allow_aggregates == allow_aggregate_pipelines::yes;
  if (is_aggregate && !is_aggregate_allowed) {
    return caf::make_error(ec::invalid_configuration,
                           fmt::format("the transform {} is an aggregate",
                                       first_aggregate->name()));
  }
  return caf::none;
}

/// Apply relevant pipelines to the table slice.
caf::error pipeline_engine::add(table_slice&& x) {
  VAST_TRACE("pipeline engine adds a slice");
  auto layout = x.layout();
  to_transform_[layout].emplace_back(std::move(x));
  return caf::none;
}

caf::error pipeline_engine::process_queue(pipeline& transform,
                                          std::deque<pipeline_batch>& queue) {
  caf::error failed{};
  const auto size = queue.size();
  for (size_t i = 0; i < size; ++i) {
    auto [layout, batch] = std::move(queue.front());
    queue.pop_front();
    if (auto err = transform.add_batch(layout, batch)) {
      failed = err;
      while (!queue.empty())
        queue.pop_front();
      break;
    }
  }
  // Finish frees up resource inside the plugin.
  auto finished = transform.finish_batch();
  if (!finished && !failed)
    failed = std::move(finished.error());
  if (failed)
    return failed;
  for (const auto& b : *finished)
    queue.push_back(b);
  return caf::none;
}

/// Apply relevant pipelines to the table slice.
caf::expected<std::vector<table_slice>> pipeline_engine::finish() {
  VAST_TRACE("pipeline engine retrieves results");
  auto to_transform = std::exchange(to_transform_, {});
  std::unordered_map<vast::type, std::deque<pipeline_batch>> batches{};
  std::vector<table_slice> result{};
  for (auto& [layout, queue] : to_transform) {
    // TODO: Consider using a tsl robin map instead for transparent key lookup.
    const auto& matching = layout_mapping_.find(std::string{layout.name()});
    if (matching == layout_mapping_.end() && general_pipelines_.empty()) {
      if (!layout_mapping_.empty())
        VAST_TRACE("transform_engine cannot find a transform for layout {}",
                   layout);
      for (auto& s : queue)
        result.emplace_back(std::move(s));
      queue.clear();
      continue;
    }
    auto& bq = batches[layout];
    for (auto& s : queue) {
      auto b = to_record_batch(s);
      bq.emplace_back(layout, b);
    }
    queue.clear();
    auto indices = matching == layout_mapping_.end() ? std::vector<size_t>{}
                                                     : matching->second;
    // If we have pipelines that always apply, make some effort
    // to apply them in the same order as they appear in the
    // configuration. While we do not officially guarantee this
    // currently, some kind of rule is required so the user is
    // able to reason about the behavior.
    if (!general_pipelines_.empty()) {
      std::vector<size_t> all_indices;
      all_indices.reserve(indices.size() + general_pipelines_.size());
      std::merge(indices.begin(), indices.end(), general_pipelines_.begin(),
                 general_pipelines_.end(), std::back_inserter(all_indices));
      indices = std::move(all_indices);
    }
    VAST_DEBUG("pipeline engine applies {} pipelines on received table "
               "slices with layout {}",
               indices.size(), layout);
    for (auto idx : indices) {
      auto& t = pipelines_.at(idx);
      auto failed = process_queue(t, bq);
      if (failed)
        return failed;
    }
  }
  for (auto& [layout, queue] : batches) {
    for (auto& [layout, batch] : queue)
      result.emplace_back(batch);
    queue.clear();
  }
  return result;
}

const std::vector<pipeline>& pipeline_engine::pipelines() {
  return pipelines_;
}

} // namespace vast
