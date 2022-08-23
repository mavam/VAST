//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/concept/parseable/to.hpp>
#include <vast/concept/parseable/vast/expression.hpp>
#include <vast/data.hpp>
#include <vast/detail/fanout_counter.hpp>
#include <vast/detail/narrow.hpp>
#include <vast/fwd.hpp>
#include <vast/partition_synopsis.hpp>
#include <vast/pipeline.hpp>
#include <vast/plugin.hpp>
#include <vast/query_context.hpp>
#include <vast/system/catalog.hpp>
#include <vast/system/index.hpp>
#include <vast/system/node.hpp>
#include <vast/system/node_control.hpp>
#include <vast/system/query_cursor.hpp>
#include <vast/system/read_query.hpp>
#include <vast/system/report.hpp>
#include <vast/system/spawn_or_connect_to_node.hpp>
#include <vast/system/status.hpp>
#include <vast/table_slice.hpp>
#include <vast/uuid.hpp>

#include <caf/expected.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/type_id.hpp>
#include <caf/typed_event_based_actor.hpp>
#include <fmt/format.h>

namespace vast::plugins::rebuild {

namespace {

/// The threshold at which to consider a partition undersized, relative to the
/// configured 'vast.max-partition-size'.
inline constexpr auto undersized_threshold = 0.8;

/// The parsed options of the `vast rebuild start` command.
struct start_options {
  bool all = false;
  bool undersized = false;
  size_t parallel = 1;
  size_t max_partitions = std::numeric_limits<size_t>::max();
  class expression expression = {};
  bool detached = false;
  bool automatic = false;

  friend auto inspect(auto& f, start_options& x) {
    return f(x.all, x.undersized, x.parallel, x.max_partitions, x.expression,
             x.detached, x.automatic);
  }
};

/// The parsed options of the `vast rebuild stop` command.
struct stop_options {
  bool detached = false;

  friend auto inspect(auto& f, stop_options& x) {
    return f(x.detached);
  }
};

/// Statistics for an ongoing rebuild. Numbers are partitions.
struct statistics {
  size_t num_total = {};
  size_t num_rebuilding = {};
  size_t num_completed = {};
  size_t num_results = {};
  size_t num_heterogeneous = {};
};

/// The state of an in-progress rebuild.
struct run {
  std::vector<partition_info> remaining_partitions = {};
  struct statistics statistics = {};
  start_options options = {};
};

/// The interface of the REBUILDER actor.
using rebuilder_actor = system::typed_actor_fwd<
  // Start a rebuild.
  caf::reacts_to<atom::start, start_options>,
  // Stop a rebuild.
  caf::reacts_to<atom::stop, stop_options>,
  // INTERNAL: Continue working on the currently in-progress rebuild.
  caf::reacts_to<atom::internal, atom::rebuild>,
  // INTERNAL: Continue working on the currently in-progress rebuild.
  caf::reacts_to<atom::internal, atom::schedule>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<system::component_plugin_actor>::unwrap;

/// The state of the REBUILDER actor.
struct rebuilder_state {
  /// The actor name as shown in logs.
  [[maybe_unused]] static constexpr const char* name = "rebuilder";

  /// The constructor of the state.
  /// NOTE: gcc-11 requires that we have this explicitly defaulted. :shrug: -- DL
  rebuilder_state() = default;

  /// Actor handles required for the rebuilder.
  rebuilder_actor::pointer self = {};
  system::catalog_actor catalog = {};
  system::index_actor index = {};
  system::accountant_actor accountant = {};

  /// Constants read once from the system configuration.
  size_t max_partition_size = 0u;
  size_t automatic_rebuild = 0u;
  duration rebuild_interval = {};

  /// The state of the ongoing rebuild.
  std::optional<struct run> run = {};
  bool stopping = false;

  /// Shows the status of a currently ongoing rebuild.
  auto status(system::status_verbosity) -> record {
    if (!run)
      return {};
    return {
      {"partitions",
       record{
         {"total", run->statistics.num_total},
         {"transforming", run->statistics.num_rebuilding},
         {"transformed", run->statistics.num_completed},
         {"remaining", run->remaining_partitions.size()},
         {"results", run->statistics.num_results},
         {"heterogeneous", run->statistics.num_heterogeneous},
       }},
      {"options",
       record{
         {"all", run->options.all},
         {"undersized", run->options.undersized},
         {"parallel", run->options.parallel},
         {"max-partitions", run->options.max_partitions},
         {"expression", fmt::to_string(run->options.expression)},
         {"detached", run->options.detached},
         {"automatic", run->options.automatic},
       }},
    };
  }

  /// Start a new rebuild.
  auto start(start_options options) -> caf::result<void> {
    if (options.parallel == 0)
      return caf::make_error(ec::invalid_configuration,
                             "rebuild requires a non-zero parallel level");
    if (options.undersized)
      options.all = true;
    if (options.automatic && run)
      return {};
    if (run && !run->options.automatic)
      return caf::make_error(
        ec::invalid_argument,
        fmt::format("{} refuses to start rebuild while a rebuild is still "
                    "ongoing ({}/{} done); consider running 'vast rebuild "
                    "stop'",
                    *self, run->statistics.num_completed,
                    run->statistics.num_total));
    if (!options.automatic && run && run->options.automatic) {
      auto rp = self->make_response_promise<void>();
      self
        ->request(static_cast<rebuilder_actor>(self), caf::infinite,
                  atom::stop_v, stop_options{.detached = false})
        .then(
          [this, rp, options = std::move(options)]() mutable {
            rp.delegate(static_cast<rebuilder_actor>(self), atom::start_v,
                        std::move(options));
          },
          [rp](caf::error& err) mutable {
            rp.deliver(std::move(err));
          });
      return rp;
    }
    run.emplace();
    run->options = std::move(options);
    VAST_DEBUG("{} requests {}{} partitions matching the expression {}", *self,
               run->options.all ? "all" : "outdated",
               run->options.undersized ? " undersized" : "",
               run->options.expression);
    auto rp = self->make_response_promise<void>();
    auto finish = [this, rp](caf::error err, bool silent = false) mutable {
      if (!silent) {
        if (run->statistics.num_completed == 0)
          VAST_INFO("{} had nothing to do", *self);
        else
          VAST_INFO("{} rebuilt {} into {} partitions", *self,
                    run->statistics.num_completed, run->statistics.num_results);
      }
      run.reset();
      emit_telemetry();
      if (run->options.detached)
        return;
      if (err) {
        rp.deliver(std::move(err));
        return;
      }
      static_cast<caf::response_promise&>(rp).deliver(caf::unit);
    };
    if (run->options.detached)
      static_cast<caf::response_promise&>(rp).deliver(caf::unit);
    auto query_context
      = query_context::make_extract("rebuild", self, run->options.expression);
    query_context.id = uuid::random();
    self
      ->request(catalog, caf::infinite, atom::candidates_v,
                std::move(query_context))
      .then(
        [this, finish](system::catalog_result& result) mutable {
          if (!run->options.all) {
            std::erase_if(
              result.partitions, [&](const partition_info& partition) {
                return partition.version >= version::partition_version;
              });
          }
          if (result.partitions.empty())
            return finish({}, true);
          if (run->options.undersized)
            std::erase_if(
              result.partitions, [this](const partition_info& partition) {
                return static_cast<bool>(partition.schema)
                       && partition.events > detail::narrow_cast<size_t>(
                            detail::narrow_cast<double>(max_partition_size)
                            * undersized_threshold);
              });
          if (run->options.max_partitions < result.partitions.size()) {
            std::stable_sort(result.partitions.begin(), result.partitions.end(),
                             [](const auto& lhs, const auto& rhs) {
                               return lhs.schema < rhs.schema;
                             });
            result.partitions.erase(
              result.partitions.begin()
                + detail::narrow_cast<ptrdiff_t>(run->options.max_partitions),
              result.partitions.end());
          }
          if (result.partitions.empty())
            return finish({});
          run->statistics.num_total = result.partitions.size();
          run->statistics.num_heterogeneous
            = std::count_if(result.partitions.begin(), result.partitions.end(),
                            [](const partition_info& partition) {
                              return !partition.schema;
                            });
          run->remaining_partitions = std::move(result.partitions);
          auto counter = detail::make_fanout_counter(
            run->options.parallel,
            [finish]() mutable {
              finish({});
            },
            [finish](caf::error error) mutable {
              finish(std::move(error));
            });
          VAST_INFO(
            "{} triggered {} for {} candidate partitions with {} threads",
            *self, run->options.automatic ? "an automatic run" : "a run",
            run->statistics.num_total, run->options.parallel);
          for (size_t i = 0; i < run->options.parallel; ++i) {
            self
              ->request(static_cast<rebuilder_actor>(self), caf::infinite,
                        atom::internal_v, atom::rebuild_v)
              .then(
                [counter]() {
                  counter->receive_success();
                },
                [counter](caf::error& error) {
                  counter->receive_error(std::move(error));
                });
          }
        },
        [finish](caf::error& error) mutable {
          finish(std::move(error));
        });
    return rp;
  }

  /// Stop a rebuild.
  auto stop(const stop_options& options) -> caf::result<void> {
    if (!run) {
      if (!stopping)
        VAST_DEBUG("{} got request to stop rebuild but no rebuild is running",
                   *self);
      else
        VAST_INFO("{} stopped ongoing rebuild", *self);
      stopping = false;
      return {};
    }
    stopping = true;
    if (!run->remaining_partitions.empty()) {
      VAST_ASSERT(run->remaining_partitions.size()
                  == run->statistics.num_total
                       - run->statistics.num_rebuilding);
      VAST_INFO("{} schedules stop after rebuild of {} partitions currently "
                "in rebuilding, and will not touch remaining {} partitions",
                *self, run->statistics.num_rebuilding,
                run->remaining_partitions.size());
      run->statistics.num_total -= run->remaining_partitions.size();
      run->remaining_partitions.clear();
      emit_telemetry();
    }
    if (options.detached)
      return {};
    return caf::skip;
  }

  /// Make progress on the ongoing rebuild.
  auto rebuild() -> caf::result<void> {
    if (run->remaining_partitions.empty())
      return {}; // We're done!
    auto current_run_partitions = std::vector<partition_info>{};
    auto current_run_events = size_t{0};
    bool is_heterogeneous = false;
    bool is_oversized = false;
    if (run->statistics.num_heterogeneous > 0) {
      // If there's any partition that has no homogenous schema we want to
      // take it first and split it up into heterogeneous partitions.
      const auto heterogenenous_partition
        = std::find_if(run->remaining_partitions.begin(),
                       run->remaining_partitions.end(),
                       [](const partition_info& partition) {
                         return !partition.schema;
                       });
      if (heterogenenous_partition != run->remaining_partitions.end()) {
        is_heterogeneous = true;
        current_run_partitions.push_back(*heterogenenous_partition);
        run->remaining_partitions.erase(heterogenenous_partition);
      } else {
        // Wait until we have all heterogeneous partitions transformed into
        // homogenous partitions before starting to work on the homogenous
        // parittions. In practice, this leads to less undeful partitions.
        return caf::skip;
      }
    } else {
      // Take the first homogenous partition and collect as many of the same
      // type as possible to create new paritions. The approach used may
      // collects too many partitions if there is no exact match, but that is
      // usually better than conservatively undersizing the number of
      // partitions for the current run. For oversized runs we move the last
      // transformed partition back to the list of remaining partitions if it
      // is less than some percentage of the desired size.
      const auto schema = run->remaining_partitions[0].schema;
      const auto first_removed = std::remove_if(
        run->remaining_partitions.begin(), run->remaining_partitions.end(),
        [&](const partition_info& partition) {
          if (schema == partition.schema
              && current_run_events < max_partition_size) {
            current_run_events += partition.events;
            current_run_partitions.push_back(partition);
            VAST_TRACE("{} selects partition {} (v{}, {}) with "
                       "{} events (total: {})",
                       *self, partition.uuid, partition.version,
                       partition.schema, partition.events, current_run_events);
            return true;
          }
          return false;
        });
      run->remaining_partitions.erase(first_removed,
                                      run->remaining_partitions.end());
      is_oversized = current_run_events > max_partition_size;
    }
    run->statistics.num_rebuilding += current_run_partitions.size();
    // If we have just a single partition then we shouldn't rebuild if our
    // intent was to merge undersized partitions, unless the partition is
    // oversized or not of the latest partition version.
    const auto skip_rebuild
      = run->options.undersized && current_run_partitions.size() == 1
        && current_run_partitions[0].version == version::partition_version
        && current_run_partitions[0].events <= max_partition_size;
    if (skip_rebuild) {
      VAST_DEBUG("{} skips rebuilding of undersized partition {} because no "
                 "other partition of schema {} exists",
                 *self, current_run_partitions[0].uuid,
                 current_run_partitions[0].schema);
      run->statistics.num_rebuilding -= 1;
      run->statistics.num_total -= 1;
      // Pick up new work until we run out of remainig partitions.
      emit_telemetry();
      return self->delegate(static_cast<rebuilder_actor>(self),
                            atom::internal_v, atom::rebuild_v);
    }
    // Ask the index to rebuild the partitions we selected.
    auto rp = self->make_response_promise<void>();
    auto pipeline
      = std::make_shared<vast::pipeline>("rebuild", std::vector<std::string>{});
    auto identity_operator = make_pipeline_operator("identity", {});
    if (!identity_operator)
      return identity_operator.error();
    pipeline->add_operator(std::move(*identity_operator));
    auto current_run_partition_ids = std::vector<uuid>{};
    current_run_partition_ids.reserve(current_run_partitions.size());
    emit_telemetry();
    for (const auto& partition : current_run_partitions)
      current_run_partition_ids.push_back(partition.uuid);
    self
      ->request(index, caf::infinite, atom::apply_v, std::move(pipeline),
                std::move(current_run_partition_ids),
                system::keep_original_partition::no)
      .then(
        [this, rp, current_run_events,
         num_partitions = current_run_partitions.size(), is_heterogeneous,
         is_oversized](std::vector<partition_info>& result) mutable {
          if (result.empty()) {
            VAST_DEBUG("{} skipped {} partitions as they are already being "
                       "transformed by another actor",
                       *self, num_partitions);
            run->statistics.num_total -= num_partitions;
            run->statistics.num_rebuilding -= num_partitions;
            if (is_heterogeneous)
              run->statistics.num_heterogeneous -= 1;
            // Pick up new work until we run out of remainig partitions.
            emit_telemetry();
            rp.delegate(static_cast<rebuilder_actor>(self), atom::internal_v,
                        atom::rebuild_v);
            return;
          }
          VAST_DEBUG("{} rebuilt {} into {} partitions", *self, num_partitions,
                     result.size());
          // Determines whether we moved partitions back.
          bool needs_second_stage = false;
          // If the number of events in the resulting partitions does not
          // match the number of events in the partitions that went in we ran
          // into a conflict with other partition transformations on an
          // overlapping set.
          const auto result_events
            = std::transform_reduce(result.begin(), result.end(), size_t{},
                                    std::plus<>{},
                                    [](const partition_info& partition) {
                                      return partition.events;
                                    });
          if (current_run_events != result_events)
            VAST_WARN("{} detected a mismatch: rebuilt {} events from {} "
                      "partitions into {} events in {} partitions",
                      *self, current_run_events, num_partitions, result_events,
                      result.size());
          // Adjust the counters, update the indicator, and move back
          // undersized transformed partitions to the list of remainig
          // partitions as desired.
          VAST_ASSERT(!result.empty());
          if (is_heterogeneous) {
            VAST_ASSERT(num_partitions == 1);
            run->statistics.num_heterogeneous -= 1;
            if (result.size() > 1
                || result[0].events <= detail::narrow_cast<size_t>(
                     detail::narrow_cast<double>(max_partition_size)
                     * undersized_threshold)) {
              run->statistics.num_total += result.size();
              std::copy(result.begin(), result.end(),
                        std::back_inserter(run->remaining_partitions));
              needs_second_stage = true;
            } else {
              run->statistics.num_completed += 1;
            }
          } else {
            run->statistics.num_completed += num_partitions;
            run->statistics.num_results += result.size();
          }
          if (is_oversized) {
            VAST_ASSERT(result.size() > 1);
            if (result.back().events <= detail::narrow_cast<size_t>(
                  detail::narrow_cast<double>(max_partition_size)
                  * undersized_threshold)) {
              needs_second_stage = true;
              run->remaining_partitions.push_back(std::move(result.back()));
              run->statistics.num_completed -= 1;
              run->statistics.num_results -= 1;
              run->statistics.num_total += 1;
            }
          }
          if (needs_second_stage)
            std::sort(run->remaining_partitions.begin(),
                      run->remaining_partitions.end(),
                      [](const partition_info& lhs, const partition_info& rhs) {
                        return lhs.max_import_time > rhs.max_import_time;
                      });
          run->statistics.num_rebuilding -= num_partitions;
          // Pick up new work until we run out of remainig partitions.
          emit_telemetry();
          rp.delegate(static_cast<rebuilder_actor>(self), atom::internal_v,
                      atom::rebuild_v);
        },
        [this, num_partitions = current_run_partitions.size(),
         rp](caf::error& error) mutable {
          VAST_WARN("{} failed to rebuild partititons: {}", *self, error);
          run->statistics.num_rebuilding -= num_partitions;
          // Pick up new work until we run out of remainig partitions.
          emit_telemetry();
          rp.delegate(static_cast<rebuilder_actor>(self), atom::internal_v,
                      atom::rebuild_v);
        });
    return rp;
  }

  /// Schedule a rebuild run.
  auto schedule() -> void {
    auto match_everything = predicate{
      meta_extractor{meta_extractor::kind::type},
      relational_operator::not_equal,
      data{"this expression matches everything"},
    };
    auto options = start_options{
      .all = true,
      .undersized = true,
      .parallel = automatic_rebuild,
      .max_partitions = std::numeric_limits<size_t>::max(),
      .expression = std::move(match_everything),
      .detached = true,
      .automatic = true,
    };
    self->delayed_send(self, rebuild_interval, atom::internal_v,
                       atom::schedule_v);
    self
      ->request(static_cast<rebuilder_actor>(self), caf::infinite,
                atom::start_v, std::move(options))
      .then(
        [this] {
          VAST_DEBUG("{} finished automatic rebuild", *self);
        },
        [this](const caf::error& err) {
          VAST_WARN("{} failed during automatic rebuild: {}", *self, err);
        });
  }

private:
  /// Send metrics to the accountant for live monitoring.
  void emit_telemetry() {
    if (!accountant)
      return;
    auto report = system::report {
      .data = {
        {"rebuilder.partitions.remaining", run ? run->remaining_partitions.size() : 0u},
        {"rebuilder.partitions.rebuilding", run ? run->statistics.num_rebuilding : 0u},
        {"rebuilder.partitions.completed", run ? run->statistics.num_completed : 0u},
      },
      .metadata = {
      },
    };
    self->send(accountant, std::move(report));
  }
};

/// Defines the behavior of the REBUILDER actor.
/// @param self A pointer to this actor.
/// @param catalog A handle to the CATALOG actor.
/// @param index A handle to the INDEX actor.
/// @param accountant A handle to the ACCOUNTANT actor.
rebuilder_actor::behavior_type
rebuilder(rebuilder_actor::stateful_pointer<rebuilder_state> self,
          system::catalog_actor catalog, system::index_actor index,
          system::accountant_actor accountant) {
  self->state.self = self;
  self->state.catalog = std::move(catalog);
  self->state.index = std::move(index);
  self->state.accountant = std::move(accountant);
  self->state.max_partition_size
    = caf::get_or(self->system().config(), "vast.max-partition-size",
                  defaults::system::max_partition_size);
  self->state.automatic_rebuild
    = caf::get_or(self->system().config(), "vast.automatic-rebuild", size_t{1});
  if (self->state.automatic_rebuild > 0) {
    self->state.rebuild_interval
      = caf::get_or(self->system().config(), "vast.active-partition-timeout",
                    defaults::system::active_partition_timeout);
    self->state.schedule();
  }
  return {
    [self](atom::status, system::status_verbosity verbosity) {
      return self->state.status(verbosity);
    },
    [self](atom::start, start_options& options) {
      return self->state.start(std::move(options));
    },
    [self](atom::stop, const stop_options& options) {
      return self->state.stop(options);
    },
    [self](atom::internal, atom::rebuild) {
      return self->state.rebuild();
    },
    [self](atom::internal, atom::schedule) {
      return self->state.schedule();
    },
  };
}

/// A helper function to get a handle to the REBUILDER actor from a client
/// process.
caf::expected<rebuilder_actor>
get_rebuilder(caf::actor_system& sys, const caf::settings& config) {
  auto self = caf::scoped_actor{sys};
  if (caf::get_or(config, "vast.node", false)
      && caf::get_or(config, "vast.rebuild.detached", false))
    return caf::make_error(ec::invalid_configuration,
                           "the options 'vast.node' and "
                           "'vast.rebuild.detached' "
                           "are incompatible");
  auto node_opt
    = system::spawn_or_connect_to_node(self, config, content(sys.config()));
  if (auto* err = std::get_if<caf::error>(&node_opt))
    return std::move(*err);
  const auto& node
    = std::holds_alternative<system::node_actor>(node_opt)
        ? std::get<system::node_actor>(node_opt)
        : std::get<scope_linked<system::node_actor>>(node_opt).get();
  const auto timeout = system::node_connection_timeout(config);
  auto result = caf::expected<caf::actor>{caf::no_error};
  self->request(node, timeout, atom::get_v, atom::type_v, "rebuild")
    .receive(
      [&](std::vector<caf::actor>& actors) {
        if (actors.empty()) {
          result = caf::make_error(ec::logic_error,
                                   "rebuilder is not in component "
                                   "registry; the server process may be "
                                   "running without the rebuilder plugin");
        } else {
          // There should always only be one MATCHER SUPERVISOR at a given time.
          // We cannot, however, assign a specific label when adding to the
          // registry, and lookup by label only works reliably for singleton
          // components, and we cannot make the MATCHER SUPERVISOR a singleton
          // component from outside libvast.
          VAST_ASSERT(actors.size() == 1);
          result = std::move(actors[0]);
        }
      },
      [&](caf::error& err) { //
        result = std::move(err);
      });
  if (!result)
    return std::move(result.error());
  return caf::actor_cast<rebuilder_actor>(std::move(*result));
}

caf::message
rebuild_start_command(const invocation& inv, caf::actor_system& sys) {
  // Create a scoped actor for interaction with the actor system and connect to
  // the node.
  auto self = caf::scoped_actor{sys};
  auto rebuilder = get_rebuilder(sys, inv.options);
  if (!rebuilder)
    return caf::make_message(std::move(rebuilder.error()));
  // Parse the query expression, iff it exists.
  auto query = system::read_query(inv, "vast.rebuild.read",
                                  system::must_provide_query::no);
  if (!query)
    return caf::make_message(std::move(query.error()));
  auto expr = to<expression>(*query);
  if (!expr)
    return caf::make_message(std::move(expr.error()));
  auto options = start_options{
    .all = caf::get_or(inv.options, "vast.rebuild.all", false),
    .undersized = caf::get_or(inv.options, "vast.rebuild.undersized", false),
    .parallel = caf::get_or(inv.options, "vast.rebuild.parallel", size_t{1}),
    .max_partitions = caf::get_or(inv.options, "vast.rebuild.max-partitions",
                                  std::numeric_limits<size_t>::max()),
    .expression = std::move(*expr),
    .detached = caf::get_or(inv.options, "vast.rebuild.detached", false),
    .automatic = false,
  };
  auto result = caf::message{};
  self->request(*rebuilder, caf::infinite, atom::start_v, std::move(options))
    .receive(
      [] {
        // nop
      },
      [&](caf::error& err) {
        result = caf::make_message(std::move(err));
      });
  return result;
}

caf::message
rebuild_stop_command(const invocation& inv, caf::actor_system& sys) {
  // Create a scoped actor for interaction with the actor system and connect to
  // the node.
  auto self = caf::scoped_actor{sys};
  auto rebuilder = get_rebuilder(sys, inv.options);
  if (!rebuilder)
    return caf::make_message(std::move(rebuilder.error()));
  auto result = caf::message{};
  auto options = stop_options{
    .detached = caf::get_or(inv.options, "vast.rebuild.detached", false),
  };
  self->request(*rebuilder, caf::infinite, atom::stop_v, std::move(options))
    .receive(
      [] {
        // nop
      },
      [&](caf::error& err) {
        result = caf::make_message(std::move(err));
      });
  return result;
}

/// An example plugin.
class plugin final : public virtual command_plugin,
                     public virtual component_plugin {
public:
  /// Loading logic.
  plugin() = default;

  /// Teardown logic.
  ~plugin() override = default;

  /// Initializes a plugin with its respective entries from the YAML config
  /// file, i.e., `plugin.<NAME>`.
  /// @param config The relevant subsection of the configuration.
  caf::error initialize(data) override {
    return caf::none;
  }

  /// Returns the unique name of the plugin.
  [[nodiscard]] const char* name() const override {
    return "rebuild";
  }

  /// Creates additional commands.
  [[nodiscard]] std::pair<std::unique_ptr<command>, command::factory>
  make_command() const override {
    auto rebuild = std::make_unique<command>(
      "rebuild",
      "rebuilds outdated partitions matching the "
      "(optional) query expression",
      command::opts("?vast.rebuild")
        .add<bool>("all", "consider all (rather than outdated) partitions")
        .add<bool>("undersized", "consider only undersized partitions (implies "
                                 "--all)")
        .add<bool>("detached,d", "exit immediately instead of waiting for the "
                                 "rebuild to finish")
        .add<std::string>("read,r", "path for reading the (optional) query")
        .add<size_t>("max-partitions,n", "number of partitions to rebuild at "
                                         "most (default: unlimited)")
        .add<size_t>("parallel,j", "number of runs to start in parallel "
                                   "(default: 1)"));
    rebuild->add_subcommand("start",
                            "rebuilds outdated partitions matching the "
                            "(optional) query qexpression",
                            rebuild->options);
    rebuild->add_subcommand(
      "stop", "stop an ongoing rebuild process",
      command::opts("?vast.rebuild")
        .add<bool>("detached,d", "exit immediately instead of waiting for the "
                                 "rebuild to be stopped"));
    auto factory = command::factory{
      {"rebuild start", rebuild_start_command},
      // Make 'vast rebuild' an alias for 'vast rebuild start'.
      {"rebuild", rebuild_start_command},
      {"rebuild stop", rebuild_stop_command},
    };
    return {std::move(rebuild), std::move(factory)};
  }

  system::component_plugin_actor
  make_component(system::node_actor::stateful_pointer<system::node_state> node)
    const override {
    auto [catalog, index, accountant]
      = node->state.registry.find<system::catalog_actor, system::index_actor,
                                  system::accountant_actor>();
    return node->spawn(rebuilder, std::move(catalog), std::move(index),
                       std::move(accountant));
  }
};

} // namespace

} // namespace vast::plugins::rebuild

CAF_BEGIN_TYPE_ID_BLOCK(vast_rebuild_plugin_types, 1400)
  CAF_ADD_TYPE_ID(vast_rebuild_plugin_types,
                  (vast::plugins::rebuild::start_options))
  CAF_ADD_TYPE_ID(vast_rebuild_plugin_types,
                  (vast::plugins::rebuild::stop_options))
CAF_END_TYPE_ID_BLOCK(vast_rebuild_plugin_types)

VAST_REGISTER_PLUGIN(vast::plugins::rebuild::plugin)
VAST_REGISTER_PLUGIN_TYPE_ID_BLOCK(vast_rebuild_plugin_types)
