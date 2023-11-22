//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/execution_node.hpp"

#include "tenzir/actors.hpp"
#include "tenzir/chunk.hpp"
#include "tenzir/detail/weak_handle.hpp"
#include "tenzir/detail/weak_run_delayed.hpp"
#include "tenzir/diagnostics.hpp"
#include "tenzir/modules.hpp"
#include "tenzir/operator_control_plane.hpp"
#include "tenzir/si_literals.hpp"
#include "tenzir/table_slice.hpp"

#include <arrow/config.h>
#include <arrow/util/byte_size.h>
#include <caf/downstream.hpp>
#include <caf/exit_reason.hpp>
#include <caf/typed_event_based_actor.hpp>
#include <caf/typed_response_promise.hpp>

namespace tenzir {

namespace {

using namespace std::chrono_literals;
using namespace si_literals;

template <class Element = void>
struct defaults {
  /// Defines the lower and upper bound for the batch timeout used when
  /// requesting a batch from the the previous execution node in the pipeline.
  inline static constexpr duration min_batch_timeout = 10ms;
  inline static constexpr duration max_batch_timeout = 2s;

  /// Defines the time interval for sending metrics of the currently running
  /// pipeline operator.
  inline static constexpr auto metrics_interval
    = std::chrono::milliseconds{1000};
};

template <>
struct defaults<table_slice> : defaults<> {
  /// Defines the upper bound for the batch size used when requesting a batch
  /// from the the previous execution node in the pipeline.
  inline static constexpr uint64_t max_batch_size = 64_Ki;

  /// Defines how much free capacity must be in the inbound buffer of the
  /// execution node before it requests further data.
  inline static constexpr uint64_t min_batch_size = 8_Ki;

  /// Defines the upper bound for the inbound and outbound buffer of the
  /// execution node.
  inline static constexpr uint64_t max_buffered = 254_Ki;
};

template <>
struct defaults<chunk_ptr> : defaults<> {
  /// Defines the upper bound for the batch size used when requesting a batch
  /// from the the previous execution node in the pipeline.
  inline static constexpr uint64_t max_batch_size = 1_Mi;

  /// Defines how much free capacity must be in the inbound buffer of the
  /// execution node before it requests further data.
  inline static constexpr uint64_t min_batch_size = 128_Ki;

  /// Defines the upper bound for the inbound and outbound buffer of the
  /// execution node.
  inline static constexpr uint64_t max_buffered = 4_Mi;
};

} // namespace

namespace {

template <class... Duration>
  requires(std::is_same_v<Duration, duration> && ...)
auto make_timer_guard(Duration&... elapsed) {
  return caf::detail::make_scope_guard(
    [&, start_time = std::chrono::steady_clock::now()] {
      const auto delta = std::chrono::steady_clock::now() - start_time;
      ((void)(elapsed += delta, true), ...);
    });
}

// Return an underestimate for the total number of referenced bytes for a vector
// of table slices, excluding the schema and disregarding any overlap or custom
// information from extension types.
auto num_approx_bytes(const std::vector<table_slice>& events) {
  auto result = uint64_t{};
  for (const auto& batch : events) {
    if (batch.rows() == 0)
      continue;
    auto record_batch = to_record_batch(batch);
    TENZIR_ASSERT(record_batch);
    // Note that this function can sometimes fail. Because we ultimately want to
    // return an underestimate for the value of bytes, we silently fall back to
    // a value of zero if the referenced buffer size cannot be measured.
    //
    // As a consequence, the result of this function can be off by a large
    // margin. It never overestimates, but sometimes the result is a lot smaller
    // than you would think and also a lot smaller than it should be.
    //
    // We opted to use the built-in Arrow solution here hoping that it will be
    // improved upon in the future upsrream, rather than us having to roll our
    // own.
    //
    // We cannot feasibly warn for failure here as that would cause a lot of
    // noise.
    result += detail::narrow_cast<uint64_t>(
      arrow::util::ReferencedBufferSize(*record_batch).ValueOr(0));
  }
  return result;
}

template <class Input, class Output>
struct exec_node_state;

template <class Input, class Output>
class exec_node_diagnostic_handler final : public diagnostic_handler {
public:
  exec_node_diagnostic_handler(
    exec_node_actor::stateful_pointer<exec_node_state<Input, Output>> self,
    receiver_actor<diagnostic> diagnostic_handler)
    : self_{self}, diagnostic_handler_{std::move(diagnostic_handler)} {
  }

  void emit(diagnostic d) override {
    TENZIR_VERBOSE("emitting diagnostic: {}", d);
    self_->request(diagnostic_handler_, caf::infinite, std::move(d))
      .then([]() {},
            [](caf::error& e) {
              TENZIR_WARN("failed to send diagnostic: {}", e);
            });
    if (d.severity == severity::error and not has_seen_error_) {
      has_seen_error_ = true;
      self_->state.ctrl->abort(ec::silent);
    }
  }

  auto has_seen_error() const -> bool override {
    return has_seen_error_;
  }

private:
  exec_node_actor::stateful_pointer<exec_node_state<Input, Output>> self_ = {};
  receiver_actor<diagnostic> diagnostic_handler_ = {};
  bool has_seen_error_ = {};
};

template <class Input, class Output>
class exec_node_control_plane final : public operator_control_plane {
public:
  exec_node_control_plane(
    exec_node_actor::stateful_pointer<exec_node_state<Input, Output>> self,
    receiver_actor<diagnostic> diagnostic_handler, bool has_terminal)
    : state_{self->state},
      diagnostic_handler_{
        std::make_unique<exec_node_diagnostic_handler<Input, Output>>(
          self, std::move(diagnostic_handler))},
      has_terminal_{has_terminal} {
  }

  auto self() noexcept -> exec_node_actor::base& override {
    return *state_.self;
  }

  auto node() noexcept -> node_actor override {
    return state_.weak_node.lock();
  }

  auto abort(caf::error error) noexcept -> void override {
    TENZIR_ASSERT(error != caf::none);
    if (error != ec::silent) {
      diagnostic::error("{}", error)
        .note("from `{}`", state_.op->to_string())
        .emit(diagnostics());
    }
    if (not state_.abort) {
      TENZIR_VERBOSE("setting abort flag of `{}`", state_.op->name());
      state_.abort = caf::make_error(ec::silent, fmt::to_string(error));
    } else {
      TENZIR_VERBOSE("abort flag of `{}` was already set", state_.op->name());
    }
  }

  auto warn(caf::error error) noexcept -> void override {
    if (error != ec::silent) {
      diagnostic::warning("{}", error)
        .note("from `{}`", state_.op->to_string())
        .emit(diagnostics());
    }
  }

  auto emit(table_slice) noexcept -> void override {
    die("not implemented");
  }

  auto schemas() const noexcept -> const std::vector<type>& override {
    return tenzir::modules::schemas();
  }

  auto concepts() const noexcept -> const concepts_map& override {
    return tenzir::modules::concepts();
  }

  auto diagnostics() noexcept -> diagnostic_handler& override {
    return *diagnostic_handler_;
  }

  auto allow_unsafe_pipelines() const noexcept -> bool override {
    return caf::get_or(content(state_.self->config()),
                       "tenzir.allow-unsafe-pipelines", false);
  }

  auto has_terminal() const noexcept -> bool override {
    return has_terminal_;
  }

private:
  exec_node_state<Input, Output>& state_;
  std::unique_ptr<exec_node_diagnostic_handler<Input, Output>> diagnostic_handler_
    = {};
  bool has_terminal_;
};

auto size(const table_slice& slice) -> uint64_t {
  return slice.rows();
}

auto size(const chunk_ptr& chunk) -> uint64_t {
  return chunk ? chunk->size() : 0;
}

auto split(const chunk_ptr& chunk, size_t partition_point)
  -> std::pair<chunk_ptr, chunk_ptr> {
  if (partition_point == 0)
    return {{}, chunk};
  if (partition_point >= size(chunk))
    return {chunk, {}};
  return {
    chunk->slice(0, partition_point),
    chunk->slice(partition_point, size(chunk) - partition_point),
  };
}

auto split(std::vector<chunk_ptr> chunks, uint64_t partition_point)
  -> std::pair<std::vector<chunk_ptr>, std::vector<chunk_ptr>> {
  auto it = chunks.begin();
  for (; it != chunks.end(); ++it) {
    if (partition_point == size(*it)) {
      return {
        {chunks.begin(), it + 1},
        {it + 1, chunks.end()},
      };
    }
    if (partition_point < size(*it)) {
      auto lhs = std::vector<chunk_ptr>{};
      auto rhs = std::vector<chunk_ptr>{};
      lhs.reserve(std::distance(chunks.begin(), it + 1));
      rhs.reserve(std::distance(it, chunks.end()));
      lhs.insert(lhs.end(), std::make_move_iterator(chunks.begin()),
                 std::make_move_iterator(it));
      auto [split_lhs, split_rhs] = split(*it, partition_point);
      lhs.push_back(std::move(split_lhs));
      rhs.push_back(std::move(split_rhs));
      rhs.insert(rhs.end(), std::make_move_iterator(it + 1),
                 std::make_move_iterator(chunks.end()));
      return {
        std::move(lhs),
        std::move(rhs),
      };
    }
    partition_point -= size(*it);
  }
  return {
    std::move(chunks),
    {},
  };
}

struct metrics_state {
  auto emit() -> void {
    values.time_total = std::chrono::duration_cast<duration>(
      std::chrono::steady_clock::now() - start_time);
    caf::anon_send(metrics_handler, values);
  }

  // Metrics that track the total number of inbound and outbound elements that
  // passed through this operator.
  std::chrono::steady_clock::time_point start_time
    = std::chrono::steady_clock::now();
  receiver_actor<metric> metrics_handler = {};
  metric values = {};
};

template <class Input>
struct inbound_state_mixin {
  /// A handle to the previous execution node.
  exec_node_actor previous = {};
  uint64_t signaled_demand = {};
  uint64_t fulfilled_demand = {};

  std::vector<Input> inbound_buffer = {};
  uint64_t inbound_buffer_size = {};
};

template <>
struct inbound_state_mixin<std::monostate> {};

template <class Output>
struct outbound_state_mixin {
  /// The outbound buffer of the operator contains elements ready to be
  /// transported to the next operator's execution node.
  std::vector<Output> outbound_buffer = {};
  uint64_t outbound_buffer_size = {};

  /// The currently open demand.
  struct demand {
    caf::typed_response_promise<void> rp = {};
    exec_node_sink_actor sink = {};
    const uint64_t batch_size = {};
    const std::chrono::steady_clock::time_point batch_timeout = {};
    bool ongoing = {};
  };
  std::optional<demand> current_demand = {};
  bool reject_demand = {};
};

template <>
struct outbound_state_mixin<std::monostate> {};

template <class Input, class Output>
struct exec_node_state : inbound_state_mixin<Input>,
                         outbound_state_mixin<Output> {
  static constexpr auto name = "exec-node";

  /// A pointer to the parent actor.
  exec_node_actor::pointer self = {};

  /// The operator owned by this execution node.
  operator_ptr op = {};

  /// The instance created by the operator. Must be created at most once.
  struct resumable_generator {
    generator<Output> gen = {};
    generator<Output>::iterator it = {};
  };
  std::optional<resumable_generator> instance = {};

  /// State required for keeping and sending metrics. Stored in a separate
  /// shared pointer to allow safe usage from an attached functor to send out
  /// metrics after this actor has quit.
  std::shared_ptr<metrics_state> metrics = {};

  // Indicates whether the operator input has stalled, i.e., the generator
  // should not be advanced.
  bool input_stalled = {};
  duration batch_timeout = defaults<>::min_batch_timeout;

  /// A pointer to te operator control plane passed to this operator during
  /// execution, which acts as an escape hatch to this actor.
  std::unique_ptr<exec_node_control_plane<Input, Output>> ctrl = {};

  /// A weak handle to the node actor.
  detail::weak_handle<node_actor> weak_node = {};

  /// Whether the next run of the internal run loop for this execution node has
  /// already been scheduled.
  bool run_scheduled = {};

  /// Whether this execution node is paused.
  bool paused = {};

  /// Set by `ctrl.abort(...)`, to be checked by `start()` and `run()`.
  caf::error abort;

  auto start(std::vector<caf::actor> previous) -> caf::result<void> {
    auto time_starting_guard = make_timer_guard(metrics->values.time_scheduled,
                                                metrics->values.time_starting);
    TENZIR_DEBUG("{} received start request for `{}`", *self, op->to_string());
    detail::weak_run_delayed_loop(self, defaults<>::metrics_interval, [this] {
      auto time_scheduled_guard
        = make_timer_guard(metrics->values.time_scheduled);
      metrics->emit();
    });
    if (instance.has_value()) {
      return caf::make_error(ec::logic_error,
                             fmt::format("{} was already started", *self));
    }
    if constexpr (std::is_same_v<Input, std::monostate>) {
      if (not previous.empty()) {
        return caf::make_error(ec::logic_error,
                               fmt::format("{} runs a source operator and must "
                                           "not have a previous exec-node",
                                           *self));
      }
    } else {
      // The previous exec-node must be set when the operator is not a source.
      if (previous.empty()) {
        return caf::make_error(
          ec::logic_error, fmt::format("{} runs a transformation/sink operator "
                                       "and must have a previous exec-node",
                                       *self));
      }
      this->previous
        = caf::actor_cast<exec_node_actor>(std::move(previous.back()));
      previous.pop_back();
      self->monitor(this->previous);
      self->set_exit_handler([this](const caf::exit_msg& msg) {
        TENZIR_DEBUG("{} emitting last metrics before exiting", op->name());
        auto time_scheduled_guard
          = make_timer_guard(metrics->values.time_scheduled);
        metrics->emit();
        self->quit(msg.reason);
      });
      self->set_down_handler([this](const caf::down_msg& msg) {
        auto time_scheduled_guard
          = make_timer_guard(metrics->values.time_scheduled);
        if (msg.source != this->previous.address()) {
          TENZIR_DEBUG("ignores down msg `{}` from unknown source: {}",
                       msg.reason, msg.source);
          return;
        }
        TENZIR_DEBUG("{} got down from previous execution node: {}", op->name(),
                     msg.reason);
        this->previous = nullptr;
        // We empirically noticed that sometimes, we get a down message from a
        // previous execution node in a different actor system, but do not get
        // an error response to our demand request. To be able to shutdown
        // correctly, we must set `signaled_demand` to false as a workaround.
        this->signaled_demand = 0;
        this->fulfilled_demand = 0;
        batch_timeout = defaults<>::min_batch_timeout;
        schedule_run();
        if (msg.reason) {
          auto category
            = msg.reason == ec::silent ? ec::silent : ec::unspecified;
          ctrl->abort(caf::make_error(
            category, fmt::format("{} shuts down because of irregular "
                                  "exit of previous operator: {}",
                                  op, msg.reason)));
        }
      });
    }
    // Instantiate the operator with its input type.
    {
      auto time_scheduled_guard
        = make_timer_guard(metrics->values.time_processing);
      auto output_generator = op->instantiate(make_input_adapter(), *ctrl);
      if (not output_generator) {
        TENZIR_VERBOSE("{} could not instantiate operator: {}", *self,
                       output_generator.error());
        return add_context(output_generator.error(),
                           "{} failed to instantiate operator", *self);
      }
      if (not std::holds_alternative<generator<Output>>(*output_generator)) {
        return caf::make_error(
          ec::logic_error, fmt::format("{} expected {}, but got {}", *self,
                                       operator_type_name<Output>(),
                                       operator_type_name(*output_generator)));
      }
      instance.emplace();
      instance->gen = std::get<generator<Output>>(std::move(*output_generator));
      TENZIR_TRACE("{} calls begin on instantiated operator", *self);
      instance->it = instance->gen.begin();
      if (abort) {
        TENZIR_DEBUG("{} was aborted during begin: {}", *self, op->to_string(),
                     abort);
        return abort;
      }
    }
    if constexpr (std::is_same_v<Output, std::monostate>) {
      TENZIR_TRACE("{} is the sink and requests start from {}", *self,
                   this->previous);
      auto rp = self->make_response_promise<void>();
      self
        ->request(this->previous, caf::infinite, atom::start_v,
                  std::move(previous))
        .then(
          [this, rp]() mutable {
            auto time_starting_guard = make_timer_guard(
              metrics->values.time_scheduled, metrics->values.time_starting);
            TENZIR_DEBUG("{} schedules run of sink after successful startup",
                         *self);
            schedule_run();
            rp.deliver();
          },
          [this, rp](caf::error& error) mutable {
            auto time_starting_guard = make_timer_guard(
              metrics->values.time_scheduled, metrics->values.time_starting);
            TENZIR_DEBUG("{} forwards error during startup: {}", *self, error);
            rp.deliver(std::move(error));
          });
      return rp;
    }
    if constexpr (not std::is_same_v<Input, std::monostate>) {
      TENZIR_DEBUG("{} delegates start to {}", *self, this->previous);
      return self->delegate(this->previous, atom::start_v, std::move(previous));
    }
    return {};
  }

  auto pause() -> caf::result<void> {
    auto time_scheduled_guard
      = make_timer_guard(metrics->values.time_scheduled);
    paused = true;
    return {};
  }

  auto resume() -> caf::result<void> {
    auto time_scheduled_guard
      = make_timer_guard(metrics->values.time_scheduled);
    paused = false;
    batch_timeout = defaults<>::min_batch_timeout;
    schedule_run();
    return {};
  }

  auto request_more_input() -> void
    requires(not std::is_same_v<Input, std::monostate>)
  {
    // There are a few reasons why we would not be able to request more input:
    // 1. The space in our inbound buffer is below the minimum batch size.
    // 2. The previous execution node is down.
    // 3. We already have an open request for more input.
    TENZIR_ASSERT(this->inbound_buffer_size <= defaults<Input>::max_buffered);
    const auto batch_size
      = std::min(defaults<Input>::max_buffered - this->inbound_buffer_size,
                 defaults<Input>::max_batch_size);
    if (not this->previous or this->signaled_demand > 0
        or batch_size < defaults<Input>::min_batch_size) {
      return;
    }
    /// Issue the actual request. If the inbound buffer is empty, we await the
    /// response, causing this actor to be suspended until the events have
    /// arrived.
    auto handle_result_or_error = [this]() {
      auto time_scheduled_guard
        = make_timer_guard(metrics->values.time_scheduled);
      if (this->signaled_demand > this->fulfilled_demand) {
        batch_timeout
          = std::min(batch_timeout * 2, defaults<>::max_batch_timeout);
      } else {
        batch_timeout = defaults<>::min_batch_timeout;
      }
      this->signaled_demand = 0;
      this->fulfilled_demand = 0;
      schedule_run();
    };
    auto handle_error = [handle_result_or_error, this](caf::error& error) {
      handle_result_or_error();
      // TODO: We currently have to use `caf::exit_reason::kill` in
      // `pipeline_executor.cpp` to work around a CAF bug. However, this implies
      // that we might receive a `caf::sec::broken_promise` error here.
      if (error == caf::sec::request_receiver_down
          || error == caf::sec::broken_promise) {
        this->previous = nullptr;
        return;
      }
      // We failed to get results from the previous; let's emit a diagnostic
      // instead.
      if (this->previous) {
        diagnostic::warning("{}", error)
          .note("`{}` failed to pull from previous execution node",
                op->to_string())
          .emit(ctrl->diagnostics());
      }
    };
    this->signaled_demand = batch_size;
    TENZIR_TRACE("sending pull from {}", op->name());
    auto response_handle
      = self->request(this->previous, caf::infinite, atom::pull_v,
                      static_cast<exec_node_sink_actor>(self), batch_size,
                      batch_timeout);
    std::move(response_handle)
      .then(std::move(handle_result_or_error), std::move(handle_error));
  }

  auto advance_generator() -> bool {
    auto time_running_guard = make_timer_guard(metrics->values.time_processing);
    TENZIR_ASSERT(instance);
    TENZIR_ASSERT(instance->it != instance->gen.end());
    if constexpr (not std::is_same_v<Output, std::monostate>) {
      if (this->outbound_buffer_size >= defaults<Output>::max_buffered) {
        return false;
      }
      auto next = std::move(*instance->it);
      ++instance->it;
      if (size(next) == 0) {
        return this->current_demand.has_value();
      }
      this->outbound_buffer_size += size(next);
      this->outbound_buffer.push_back(std::move(next));
    } else {
      ++instance->it;
    }
    return true;
  }

  auto make_input_adapter() -> std::monostate
    requires std::is_same_v<Input, std::monostate>
  {
    return {};
  }

  auto make_input_adapter() -> generator<Input>
    requires(not std::is_same_v<Input, std::monostate>)
  {
    auto stall_guard = caf::detail::make_scope_guard([this] {
      TENZIR_TRACE("{} exhausted input", op->name());
      input_stalled = false;
      schedule_run();
    });
    while (this->previous or this->inbound_buffer_size > 0
           or this->signaled_demand) {
      if (this->inbound_buffer_size == 0) {
        TENZIR_ASSERT(this->inbound_buffer.empty());
        // TODO: Some operators (most notably `shell`) may produce events from
        // side effects, which means that their input can never be consider
        // stalled. We need to add an option to the operator API that controls
        // whether the operator can ever be considered stalled.
        input_stalled = true;
        co_yield {};
        continue;
      }
      while (not this->inbound_buffer.empty()) {
        auto next = std::move(this->inbound_buffer.front());
        TENZIR_ASSERT(size(next) != 0);
        this->inbound_buffer_size -= size(next);
        this->inbound_buffer.erase(this->inbound_buffer.begin());
        input_stalled = false;
        co_yield std::move(next);
      }
    }
  }

  auto schedule_run() -> void {
    // Check whether we're already scheduled to run, or are no longer allowed to
    // rum.
    // TODO: We can make pausing more efficient by pausing execution nodes from
    // left-to-right, and only pausing the next one after the current one's
    // outbound buffer has emptied. However, that's a lot of code to write
    // compared to this single check, so let's stick has an issue with a paused
    // pipeline's memory usage.
    if (paused or run_scheduled or not instance) {
      return;
    }
    run_scheduled = true;
    self->send(self, atom::internal_v, atom::run_v);
  }

  auto internal_run() -> caf::result<void> {
    auto time_scheduled_guard
      = make_timer_guard(metrics->values.time_scheduled);
    run_scheduled = false;
    run();
    return {};
  }

  auto deliver_batches(std::chrono::steady_clock::time_point now, bool force)
    -> void
    requires(not std::is_same_v<Output, std::monostate>)
  {
    if (not this->current_demand or this->current_demand->ongoing) {
      return;
    }
    TENZIR_ASSERT(instance);
    if (not force
        and ((instance->it == instance->gen.end()
              or this->outbound_buffer_size < this->current_demand->batch_size)
             and (this->current_demand->batch_timeout > now))) {
      return;
    }
    this->current_demand->ongoing = true;
    const auto capped_demand
      = std::min(this->outbound_buffer_size, this->current_demand->batch_size);
    if (capped_demand == 0) {
      TENZIR_DEBUG("{} short-circuits delivery of zero batches", op->name());
      this->current_demand->rp.deliver();
      this->current_demand.reset();
      schedule_run();
      return;
    }
    auto [lhs, _] = split(this->outbound_buffer, capped_demand);
    auto handle_result = [this, capped_demand]() {
      auto time_scheduled_guard
        = make_timer_guard(metrics->values.time_scheduled);
      TENZIR_TRACE("{} pushed successfully", op->name());
      metrics->values.outbound_measurement.num_elements += capped_demand;
      auto [lhs, rhs] = split(this->outbound_buffer, capped_demand);
      metrics->values.outbound_measurement.num_batches += lhs.size();
      if constexpr (std::is_same_v<Output, chunk_ptr>) {
        metrics->values.outbound_measurement.num_approx_bytes
          = metrics->values.outbound_measurement.num_elements;
      } else {
        metrics->values.outbound_measurement.num_approx_bytes
          = num_approx_bytes(lhs);
      }
      this->outbound_buffer = std::move(rhs);
      this->outbound_buffer_size
        = std::transform_reduce(this->outbound_buffer.begin(),
                                this->outbound_buffer.end(), uint64_t{},
                                std::plus{}, [](const Output& x) {
                                  return size(x);
                                });
      this->current_demand->rp.deliver();
      this->current_demand.reset();
      schedule_run();
    };
    auto handle_error = [this](caf::error& error) {
      auto time_scheduled_guard
        = make_timer_guard(metrics->values.time_scheduled);
      TENZIR_DEBUG("{} failed to push", op->name());
      this->current_demand->rp.deliver(std::move(error));
      this->current_demand.reset();
      schedule_run();
    };
    auto response_handle = self->request(
      this->current_demand->sink, caf::infinite, atom::push_v, std::move(lhs));
    if (force or this->outbound_buffer_size >= defaults<Output>::max_buffered) {
      TENZIR_TRACE("{} pushes {}/{} buffered elements and suspends execution",
                   op->name(), capped_demand, this->outbound_buffer_size);
      std::move(response_handle)
        .await(std::move(handle_result), std::move(handle_error));
    } else {
      TENZIR_TRACE("{} pushes {}/{} buffered elements", op->name(),
                   capped_demand, this->outbound_buffer_size);
      std::move(response_handle)
        .then(std::move(handle_result), std::move(handle_error));
    }
  };

  auto run() -> void {
    TENZIR_TRACE("{} enters run loop", op->name());
    TENZIR_ASSERT(instance);
    const auto now = std::chrono::steady_clock::now();
    // Check if we're done.
    if (instance->it == instance->gen.end()) {
      TENZIR_DEBUG("{} is at the end of its generator", op->name());
      // Shut down the previous execution node immediately if we're done.
      // We send an unreachable error here slightly before this execution
      // node shuts down. This is merely an optimization; we call self->quit
      // a tiny bit later anyways, which would send the same exit reason
      // upstream implicitly. However, doing this early is nice because we
      // can prevent the upstream operators from running unnecessarily.
      if constexpr (not std::is_same_v<Input, std::monostate>) {
        if (this->previous) {
          TENZIR_DEBUG("{} shuts down previous operator", op->name());
          self->send_exit(this->previous, caf::exit_reason::normal);
        }
      }
      // When we're done, we must make sure that we have delivered all results
      // to the next operator. This has the following pre-requisites:
      // - The generator must be completed (already checked here).
      // - There must not be any outstanding demand.
      // - There must not be anything remaining in the buffer.
      if constexpr (not std::is_same_v<Output, std::monostate>) {
        if (this->current_demand and this->outbound_buffer_size == 0) {
          TENZIR_DEBUG("{} rejects further demand from next operator",
                       op->name());
          this->reject_demand = true;
        }
        if (this->current_demand or this->outbound_buffer_size > 0) {
          TENZIR_DEBUG("{} forcibly delivers batches", op->name());
          deliver_batches(now, true);
          return;
        }
        TENZIR_ASSERT(not this->current_demand);
        TENZIR_ASSERT(this->outbound_buffer_size == 0);
      }
      TENZIR_VERBOSE("{} is done", op);
      metrics->emit();
      self->quit();
      return;
    }
    // Try to deliver.
    if constexpr (not std::is_same_v<Output, std::monostate>) {
      deliver_batches(now, false);
    }
    // Request more input if there's more to be retrieved.
    if constexpr (not std::is_same_v<Input, std::monostate>) {
      request_more_input();
    }
    // Produce more output if there's more to be produced, then schedule the
    // next run. For sinks, this happens delayed when there is no input. For
    // everything else, it needs to happen only when there's enough space in the
    // outbound buffer.
    const auto output_stalled = not advance_generator();
    // Check if we need to quit.
    if (abort) {
      self->quit(abort);
    }
    // Check whether we should eagerly schedule the operator again. We usually
    // consider this the case when neither the input nor the output have
    // stalled, i.e., when there is more input to be consumed and room for
    // output to be produced or further output desired.
    if (not input_stalled or not output_stalled) {
      schedule_run();
    }
    // Adjust performance counters for this run.
    metrics->values.num_runs += 1;
    metrics->values.num_runs_processing
      += input_stalled and output_stalled ? 0 : 1;
    metrics->values.num_runs_processing_input += input_stalled ? 0 : 1;
    metrics->values.num_runs_processing_output += output_stalled ? 0 : 1;
  }

  auto
  pull(exec_node_sink_actor sink, uint64_t batch_size, duration batch_timeout)
    -> caf::result<void>
    requires(not std::is_same_v<Output, std::monostate>)
  {
    auto time_scheduled_guard
      = make_timer_guard(metrics->values.time_scheduled);
    if (this->reject_demand) {
      auto rp = self->make_response_promise<void>();
      detail::weak_run_delayed(self, batch_timeout, [rp]() mutable {
        rp.deliver();
      });
      return {};
    }
    schedule_run();
    if (this->current_demand) {
      return caf::make_error(ec::logic_error, "concurrent pull");
    }
    auto& pr = this->current_demand.emplace(
      self->make_response_promise<void>(), std::move(sink), batch_size,
      std::chrono::steady_clock::now() + batch_timeout);
    return pr.rp;
  }

  auto push(std::vector<Input> input) -> caf::result<void>
    requires(not std::is_same_v<Input, std::monostate>)
  {
    if (this->signaled_demand == 0) {
      return caf::make_error(ec::logic_error,
                             "received batches without demand");
    }
    auto time_scheduled_guard
      = make_timer_guard(metrics->values.time_scheduled);
    schedule_run();
    const auto input_size = std::transform_reduce(
      input.begin(), input.end(), uint64_t{}, std::plus{}, [](const Input& x) {
        return size(x);
      });
    metrics->values.inbound_measurement.num_batches += input.size();
    if (input_size == 0) {
      return caf::make_error(ec::logic_error, "received empty batch");
    }
    this->fulfilled_demand = input_size;
    if (this->inbound_buffer_size + input_size
        > defaults<Input>::max_buffered) {
      return caf::make_error(ec::logic_error, "inbound buffer full");
    }
    this->inbound_buffer_size += input_size;
    metrics->values.inbound_measurement.num_elements += input_size;
    if constexpr (std::is_same_v<Input, chunk_ptr>) {
      metrics->values.inbound_measurement.num_approx_bytes
        = metrics->values.inbound_measurement.num_elements;
    } else {
      metrics->values.inbound_measurement.num_approx_bytes
        = num_approx_bytes(input);
    }
    this->inbound_buffer.insert(this->inbound_buffer.end(),
                                std::make_move_iterator(input.begin()),
                                std::make_move_iterator(input.end()));
    schedule_run();
    return {};
  }
};

template <class Input, class Output>
auto exec_node(
  exec_node_actor::stateful_pointer<exec_node_state<Input, Output>> self,
  operator_ptr op, node_actor node,
  receiver_actor<diagnostic> diagnostic_handler,
  receiver_actor<metric> metrics_handler, int index, bool has_terminal)
  -> exec_node_actor::behavior_type {
  self->state.self = self;
  self->state.op = std::move(op);
  self->state.metrics = std::make_shared<metrics_state>();
  auto time_starting_guard
    = make_timer_guard(self->state.metrics->values.time_scheduled,
                       self->state.metrics->values.time_starting);
  self->state.metrics->metrics_handler = std::move(metrics_handler);
  self->state.metrics->values.operator_index = index;
  self->state.metrics->values.operator_name = self->state.op->name();
  self->state.metrics->values.inbound_measurement.unit
    = operator_type_name<Input>();
  self->state.metrics->values.inbound_measurement.internal
    = std::is_void_v<Input> and self->state.op->internal();
  self->state.metrics->values.outbound_measurement.unit
    = operator_type_name<Output>();
  self->state.metrics->values.outbound_measurement.internal
    = std::is_void_v<Output> and self->state.op->internal();
  self->state.ctrl = std::make_unique<exec_node_control_plane<Input, Output>>(
    self, std::move(diagnostic_handler), has_terminal);
  // The node actor must be set when the operator is not a source.
  if (self->state.op->location() == operator_location::remote and not node) {
    self->quit(caf::make_error(
      ec::logic_error,
      fmt::format("{} runs a remote operator and must have a node", *self)));
    return exec_node_actor::behavior_type::make_empty_behavior();
  }
  self->state.weak_node = node;
  self->attach_functor(
    [name = self->state.op->name(), metrics = self->state.metrics] {
      TENZIR_DEBUG("exec-node for {} shut down", name);
      metrics->emit();
    });
  return {
    [self](atom::internal, atom::run) -> caf::result<void> {
      return self->state.internal_run();
    },
    [self](atom::start,
           std::vector<caf::actor>& previous) -> caf::result<void> {
      return self->state.start(std::move(previous));
    },
    [self](atom::pause) -> caf::result<void> {
      return self->state.pause();
    },
    [self](atom::resume) -> caf::result<void> {
      return self->state.resume();
    },
    [self](atom::push, std::vector<table_slice>& events) -> caf::result<void> {
      if constexpr (std::is_same_v<Input, table_slice>) {
        return self->state.push(std::move(events));
      } else {
        return caf::make_error(ec::logic_error,
                               fmt::format("{} does not accept events as input",
                                           *self));
      }
    },
    [self](atom::push, std::vector<chunk_ptr>& bytes) -> caf::result<void> {
      if constexpr (std::is_same_v<Input, chunk_ptr>) {
        return self->state.push(std::move(bytes));
      } else {
        return caf::make_error(ec::logic_error,
                               fmt::format("{} does not accept bytes as input",
                                           *self));
      }
    },
    [self](atom::pull, exec_node_sink_actor& sink, uint64_t batch_size,
           duration batch_timeout) -> caf::result<void> {
      if constexpr (not std::is_same_v<Output, std::monostate>) {
        return self->state.pull(std::move(sink), batch_size, batch_timeout);
      } else {
        return caf::make_error(
          ec::logic_error,
          fmt::format("{} is a sink and must not be pulled from", *self));
      }
    },
  };
}

} // namespace

auto spawn_exec_node(caf::scheduled_actor* self, operator_ptr op,
                     operator_type input_type, node_actor node,
                     receiver_actor<diagnostic> diagnostics_handler,
                     receiver_actor<metric> metrics_handler, int index,
                     bool has_terminal)
  -> caf::expected<std::pair<exec_node_actor, operator_type>> {
  TENZIR_ASSERT(self);
  TENZIR_ASSERT(op != nullptr);
  TENZIR_ASSERT(node != nullptr
                or not(op->location() == operator_location::remote));
  TENZIR_ASSERT(diagnostics_handler != nullptr);
  auto output_type = op->infer_type(input_type);
  if (not output_type) {
    return caf::make_error(ec::logic_error,
                           fmt::format("failed to spawn exec-node for '{}': {}",
                                       op->to_string(), output_type.error()));
  }
  auto f = [&]<caf::spawn_options SpawnOptions>() {
    return [&]<class Input, class Output>(tag<Input>,
                                          tag<Output>) -> exec_node_actor {
      using input_type
        = std::conditional_t<std::is_void_v<Input>, std::monostate, Input>;
      using output_type
        = std::conditional_t<std::is_void_v<Output>, std::monostate, Output>;
      if constexpr (std::is_void_v<Input> and std::is_void_v<Output>) {
        die("unimplemented");
      } else {
        auto result = self->spawn<SpawnOptions>(
          exec_node<input_type, output_type>, std::move(op), std::move(node),
          std::move(diagnostics_handler), std::move(metrics_handler), index,
          has_terminal);
        return result;
      }
    };
  };
  return std::pair{
    op->detached() ? std::visit(f.template operator()<caf::detached>(),
                                input_type, *output_type)
                   : std::visit(f.template operator()<caf::no_spawn_options>(),
                                input_type, *output_type),
    *output_type,
  };
};

} // namespace tenzir
