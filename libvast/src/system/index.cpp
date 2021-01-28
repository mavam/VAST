/******************************************************************************
 *                    _   _____   __________                                  *
 *                   | | / / _ | / __/_  __/     Visibility                   *
 *                   | |/ / __ |_\ \  / /          Across                     *
 *                   |___/_/ |_/___/ /_/       Space and Time                 *
 *                                                                            *
 * This file is part of VAST. It is subject to the license terms in the       *
 * LICENSE file found in the top-level directory of this distribution and at  *
 * http://vast.io/license. No part of VAST, including this file, may be       *
 * copied, modified, propagated, or distributed except according to the terms *
 * contained in the LICENSE file.                                             *
 ******************************************************************************/

#include "vast/system/index.hpp"

#include "vast/fwd.hpp"

#include "vast/chunk.hpp"
#include "vast/concept/parseable/to.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/bitmap.hpp"
#include "vast/concept/printable/vast/error.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/concept/printable/vast/table_slice.hpp"
#include "vast/concept/printable/vast/uuid.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/cache.hpp"
#include "vast/detail/fill_status_map.hpp"
#include "vast/detail/narrow.hpp"
#include "vast/detail/notifying_stream_manager.hpp"
#include "vast/detail/settings.hpp"
#include "vast/error.hpp"
#include "vast/expression_visitors.hpp"
#include "vast/fbs/index.hpp"
#include "vast/fbs/partition.hpp"
#include "vast/fbs/utils.hpp"
#include "vast/fbs/uuid.hpp"
#include "vast/ids.hpp"
#include "vast/io/read.hpp"
#include "vast/io/save.hpp"
#include "vast/json.hpp"
#include "vast/logger.hpp"
#include "vast/meta_index.hpp"
#include "vast/system/evaluator.hpp"
#include "vast/system/partition.hpp"
#include "vast/system/query_supervisor.hpp"
#include "vast/system/shutdown.hpp"
#include "vast/system/status_verbosity.hpp"
#include "vast/table_slice.hpp"
#include "vast/uuid.hpp"
#include "vast/value_index.hpp"

#include <caf/error.hpp>
#include <caf/typed_event_based_actor.hpp>

#include <flatbuffers/flatbuffers.h>

#include <algorithm>
#include <chrono>
#include <ctime>
#include <memory>
#include <unistd.h>

using namespace std::chrono;

// clang-format off
//
// The index is implemented as a stream stage that hooks into the table slice
// stream coming from the importer, and forwards them to the current active
// partition
//
//              table slice              table slice                      table slice column
//   importer ----------------> index ---------------> active partition ------------------------> indexer
//                                                                      ------------------------> indexer
//                                                                                ...
//
// At the same time, the index is also involved in the lookup path, where it
// receives an expression and loads the partitions that might contain relevant
// results into memory.
//
//    expression                                lookup()
//   ------------>  index                  --------------------> meta_index
//                                                                 |
//     query_id,                                                   |
//     scheduled,                                                  |
//     remaining                                    [uuid]         |
//   <-----------  (creates query state)  <------------------------/
//                            |
//                            |  query_id, n_taste
//                            |
//    query_id, n             v                   expression, client
//   ------------> (spawn n partitions) --------------------------------> partition
//                                                                            |
//                                                      ids                   |
//   <------------------------------------------------------------------------/
//                                                      ids                   |
//   <------------------------------------------------------------------------/
//                                                                            |
//
//                                                                          [...]
//
//                                                      atom::done            |
//   <------------------------------------------------------------------------/
//
// clang-format on

namespace vast::system {

vast::path index_state::partition_path(const uuid& id) const {
  return dir / to_string(id);
}

partition_actor partition_factory::operator()(const uuid& id) const {
  // Load partition from disk.
  VAST_ASSERT(std::find(state_.persisted_partitions.begin(),
                        state_.persisted_partitions.end(), id)
              != state_.persisted_partitions.end());
  auto path = state_.partition_path(id);
  VAST_LOG_SPD_DEBUG("{} loads partition {} for path {}",
                     detail::id_or_name(state_.self), id, path);
  return state_.self->spawn(passive_partition, id, filesystem_, path);
}

filesystem_actor& partition_factory::filesystem() {
  return filesystem_;
}

partition_factory::partition_factory(index_state& state) : state_{state} {
  // nop
}

index_state::index_state(index_actor::pointer self)
  : self{self}, inmem_partitions{0, partition_factory{*this}} {
}

caf::error index_state::load_from_disk() {
  // We dont use the filesystem actor here because this function is only
  // called once during startup, when no other actors exist yet.
  if (!exists(dir)) {
    VAST_LOG_SPD_VERBOSE("{} found no prior state, starting with a clean slate",
                         detail::id_or_name(self));
    return caf::none;
  }
  if (auto fname = index_filename(); exists(fname)) {
    VAST_VERBOSE(self, "loads state from", fname);
    auto buffer = io::read(fname);
    if (!buffer) {
      VAST_ERROR(self, "failed to read index file:", render(buffer.error()));
      return buffer.error();
    }
    // TODO: Create a `index_ondisk_state` struct and move this part of the
    // code into an `unpack()` function.
    auto index = fbs::GetIndex(buffer->data());
    if (index->index_type() != fbs::index::Index::v0)
      return caf::make_error(ec::format_error, "invalid index version");
    auto index_v0 = index->index_as_v0();
    auto partition_uuids = index_v0->partitions();
    VAST_ASSERT(partition_uuids);
    for (auto uuid_fb : *partition_uuids) {
      VAST_ASSERT(uuid_fb);
      vast::uuid partition_uuid;
      unpack(*uuid_fb, partition_uuid);
      auto partition_path = dir / to_string(partition_uuid);
      if (exists(partition_path)) {
        persisted_partitions.insert(partition_uuid);
        // Use blocking operations here since this is part of the startup.
        auto chunk = chunk::mmap(partition_path);
        if (!chunk) {
          VAST_WARNING(self, "could not mmap partition at", partition_path);
          continue;
        }
        auto partition = fbs::GetPartition(chunk->data());
        if (partition->partition_type() != fbs::partition::Partition::v0) {
          VAST_WARNING(self, "found unsupported version for partition",
                       partition_uuid);
          continue;
        }
        auto partition_v0 = partition->partition_as_v0();
        VAST_ASSERT(partition_v0);
        partition_synopsis ps;
        unpack(*partition_v0, ps);
        VAST_LOG_SPD_DEBUG("{} merging partition synopsis from {}",
                           detail::id_or_name(self), partition_uuid);
        meta_idx.merge(partition_uuid, std::move(ps));
      } else {
        VAST_WARNING(self, "found partition", partition_uuid,
                     "in the index state but not on disk; this may have been "
                     "caused by an unclean shutdown");
      }
    }
    auto stats = index_v0->stats();
    if (!stats)
      return caf::make_error(ec::format_error, "no stats in persisted index "
                                               "state");
    for (const auto stat : *stats) {
      this->stats.layouts[stat->name()->str()]
        = layout_statistics{stat->count()};
    }
  } else {
    VAST_LOG_SPD_WARN("{} found existing database dir {} without index statefile, "
                      "will start with fresh state",
                      detail::id_or_name(self), dir);
  }
  return caf::none;
}

bool index_state::worker_available() {
  return !idle_workers.empty();
}

std::optional<query_supervisor_actor> index_state::next_worker() {
  if (!worker_available()) {
    VAST_VERBOSE(self, "waits for query supervisors to become available to "
                       "delegate work; consider increasing 'vast.max-queries'");
    return std::nullopt;
  }
  auto result = std::move(idle_workers.back());
  idle_workers.pop_back();
  return result;
}

void index_state::add_flush_listener(flush_listener_actor listener) {
  VAST_LOG_SPD_DEBUG("{} adds a new 'flush' subscriber: {}",
                     detail::id_or_name(self), listener);
  flush_listeners.emplace_back(std::move(listener));
  detail::notify_listeners_if_clean(*this, *stage);
}

void index_state::notify_flush_listeners() {
  VAST_LOG_SPD_DEBUG("{} sends 'flush' messages to {} listeners",
                     detail::id_or_name(self), flush_listeners.size());
  for (auto& listener : flush_listeners)
    self->send(listener, atom::flush_v);
  flush_listeners.clear();
}

void index_state::create_active_partition() {
  auto id = uuid::random();
  caf::settings index_opts;
  index_opts["cardinality"] = partition_capacity;
  // These options must be kept in sync with vast/address_synopsis.hpp and
  // vast/string_synopsis.hpp respectively.
  auto synopsis_options = caf::settings{};
  put(synopsis_options, "max-partition-size", partition_capacity);
  put(synopsis_options, "address-synopsis-fp-rate", meta_index_fp_rate);
  put(synopsis_options, "string-synopsis-fp-rate", meta_index_fp_rate);
  active_partition.actor
    = self->spawn(::vast::system::active_partition, id, filesystem, index_opts,
                  synopsis_options);
  active_partition.stream_slot
    = stage->add_outbound_path(active_partition.actor);
  active_partition.capacity = partition_capacity;
  active_partition.id = id;
  VAST_LOG_SPD_DEBUG("{} created new partition {}", detail::id_or_name(self),
                     id);
}

void index_state::decomission_active_partition() {
  auto id = active_partition.id;
  auto actor = std::exchange(active_partition.actor, {});
  unpersisted[id] = actor;
  // Send buffered batches.
  stage->out().fan_out_flush();
  stage->out().force_emit_batches();
  // Remove active partition from the stream.
  stage->out().close(active_partition.stream_slot);
  // Persist active partition asynchronously.
  auto part_dir = dir / to_string(id);
  VAST_LOG_SPD_DEBUG("{} persists active partition to {}",
                     detail::id_or_name(self), part_dir);
  self->request(actor, caf::infinite, atom::persist_v, part_dir)
    .then(
      [=](std::shared_ptr<partition_synopsis>& ps) {
        VAST_LOG_SPD_DEBUG("{} successfully persisted partition {}",
                           detail::id_or_name(self), id);
        // Semantically ps is a unique_ptr, and the partition releases its
        // copy before sending. We use shared_ptr for the transport because
        // CAF message types must be copy-constructible.
        VAST_ASSERT(ps.use_count() == 1);
        meta_idx.merge(id, std::move(*ps));
        unpersisted.erase(id);
        persisted_partitions.insert(id);
      },
      [=](const caf::error& err) {
        VAST_ERROR(self, "failed to persist partition", id,
                   "with error:", render(err));
        self->quit(err);
      });
}

caf::typed_response_promise<caf::settings>
index_state::status(status_verbosity v) const {
  using caf::put;
  using caf::put_dictionary;
  using caf::put_list;
  struct req_state_t {
    // Promise to the original client request.
    caf::typed_response_promise<caf::settings> rp;
    // Maps nodes to a map associating components with status information.
    caf::settings content;
    size_t memory_usage = 0;
  };
  auto req_state = std::make_shared<req_state_t>();
  req_state->rp = self->make_response_promise<caf::settings>();
  auto& index_status = put_dictionary(req_state->content, "index");
  auto deliver = [&index_status](auto&& req_state) {
    put(index_status, "sum-partition-bytes", req_state.memory_usage);
    req_state.rp.deliver(req_state.content);
  };
  bool deferred = false;
  if (v >= status_verbosity::info) {
    // nop
  }
  if (v >= status_verbosity::detailed) {
    auto& stats_object = put_dictionary(index_status, "statistics");
    auto& layout_object = put_dictionary(stats_object, "layouts");
    for (auto& [name, layout_stats] : stats.layouts) {
      auto xs = caf::dictionary<caf::config_value>{};
      xs.emplace("count", layout_stats.count);
      // We cannot use put_dictionary(layout_object, name) here, because this
      // function splits the key at '.', which occurs in every layout name.
      // Hence the fallback to low-level primitives.
      layout_object.insert_or_assign(name, std::move(xs));
    }
    put(index_status, "meta-index-bytes", meta_idx.memusage());
    put(index_status, "num-active-partitions",
        active_partition.actor == nullptr ? 0 : 1);
    put(index_status, "num-cached-partitions", inmem_partitions.size());
    put(index_status, "num-unpersisted-partitions", unpersisted.size());
    auto& partitions = put_dictionary(index_status, "partitions");
    auto partition_status = [&](const uuid& id, const partition_actor& pa,
                                caf::config_value::list& xs) {
      deferred = true;
      self
        ->request<caf::message_priority::high>(pa, caf::infinite,
                                               atom::status_v, v)
        .then(
          [=, &xs](const caf::settings& part_status) {
            auto& ps = xs.emplace_back().as_dictionary();
            put(ps, "id", to_string(id));
            if (auto s = caf::get_if<caf::config_value::integer>(
                  &part_status, "memory-usage"))
              req_state->memory_usage += *s;
            if (v >= status_verbosity::debug)
              detail::merge_settings(part_status, ps);
            // Both handlers have a copy of req_state.
            if (req_state.use_count() == 2)
              deliver(std::move(*req_state));
          },
          [=, &xs](const caf::error& err) {
            VAST_WARNING(self, "failed to retrieve status from", id, ":",
                         render(err));
            auto& ps = xs.emplace_back().as_dictionary();
            put(ps, "id", to_string(id));
            put(ps, "error", render(err));
            // Both handlers have a copy of req_state.
            if (req_state.use_count() == 2)
              deliver(std::move(*req_state));
          });
    };
    // Resident partitions.
    auto& active = caf::put_list(partitions, "active");
    active.reserve(1);
    if (active_partition.actor != nullptr)
      partition_status(active_partition.id, active_partition.actor, active);
    auto& cached = put_list(partitions, "cached");
    cached.reserve(inmem_partitions.size());
    for (auto& [id, actor] : inmem_partitions)
      partition_status(id, actor, cached);
    auto& unpersisted = put_list(partitions, "unpersisted");
    unpersisted.reserve(this->unpersisted.size());
    for (auto& [id, actor] : this->unpersisted)
      partition_status(id, actor, unpersisted);
    // General state such as open streams.
    detail::fill_status_map(index_status, self);
  }
  if (!deferred)
    deliver(std::move(*req_state));
  return req_state->rp;
}

std::vector<std::pair<uuid, partition_actor>>
index_state::collect_query_actors(query_state& lookup,
                                  uint32_t num_partitions) {
  VAST_TRACE(VAST_ARG(lookup), VAST_ARG(num_partitions));
  std::vector<std::pair<uuid, partition_actor>> result;
  if (num_partitions == 0 || lookup.partitions.empty())
    return result;
  // Prefer partitions that are already available in RAM.
  auto partition_is_loaded = [&](const uuid& candidate) {
    return (active_partition.actor != nullptr
            && active_partition.id == candidate)
           || unpersisted.count(candidate)
           || inmem_partitions.contains(candidate);
  };
  std::partition(lookup.partitions.begin(), lookup.partitions.end(),
                 partition_is_loaded);
  // Helper function to spin up EVALUATOR actors for a single partition.
  auto spin_up = [&](const uuid& partition_id) -> partition_actor {
    // We need to first check whether the ID is the active partition or one
    // of our unpersisted ones. Only then can we dispatch to our LRU cache.
    partition_actor part;
    if (active_partition.actor != nullptr
        && active_partition.id == partition_id)
      part = active_partition.actor;
    else if (auto it = unpersisted.find(partition_id); it != unpersisted.end())
      part = it->second;
    else if (auto it = persisted_partitions.find(partition_id);
             it != persisted_partitions.end())
      part = inmem_partitions.get_or_load(partition_id);
    if (!part)
      VAST_ERROR(self, "could not load partition", partition_id,
                 "that was part of a query");
    return part;
  };
  // Loop over the candidate set until we either successfully scheduled
  // num_partitions partitions or run out of candidates.
  auto it = lookup.partitions.begin();
  auto last = lookup.partitions.end();
  while (it != last && result.size() < num_partitions) {
    auto partition_id = *it++;
    if (auto partition_actor = spin_up(partition_id))
      result.push_back(std::make_pair(partition_id, partition_actor));
  }
  lookup.partitions.erase(lookup.partitions.begin(), it);
  VAST_LOG_SPD_DEBUG("{} launched {} partition actors to evaluate query",
                     detail::id_or_name(self), result.size());
  return result;
}

path index_state::index_filename(path basename) const {
  return basename / dir / "index.bin";
}

caf::expected<flatbuffers::Offset<fbs::Index>>
pack(flatbuffers::FlatBufferBuilder& builder, const index_state& state) {
  VAST_LOG_SPD_DEBUG("{} persists {} uuids of definitely persisted and {}"
                     "uuids of maybe persisted partitions",
                     detail::id_or_name(state.self),
                     state.persisted_partitions.size(),
                     state.unpersisted.size());
  std::vector<flatbuffers::Offset<fbs::uuid::v0>> partition_offsets;
  for (auto uuid : state.persisted_partitions) {
    if (auto uuid_fb = pack(builder, uuid))
      partition_offsets.push_back(*uuid_fb);
    else
      return uuid_fb.error();
  }
  // We don't know if these will make it to disk before the index and the rest
  // of the system is shut down (in case of a hard/dirty shutdown), so we just
  // store everything and throw out the missing partitions when loading the
  // index.
  for (auto& kv : state.unpersisted) {
    if (auto uuid_fb = pack(builder, kv.first))
      partition_offsets.push_back(*uuid_fb);
    else
      return uuid_fb.error();
  }
  auto partitions = builder.CreateVector(partition_offsets);
  std::vector<flatbuffers::Offset<fbs::layout_statistics::v0>> stats_offsets;
  for (auto& [name, layout_stats] : state.stats.layouts) {
    auto name_fb = builder.CreateString(name);
    fbs::layout_statistics::v0Builder stats_builder(builder);
    stats_builder.add_name(name_fb);
    stats_builder.add_count(layout_stats.count);
    auto offset = stats_builder.Finish();
    stats_offsets.push_back(offset);
  }
  auto stats = builder.CreateVector(stats_offsets);
  fbs::index::v0Builder v0_builder(builder);
  v0_builder.add_partitions(partitions);
  v0_builder.add_stats(stats);
  auto index_v0 = v0_builder.Finish();
  fbs::IndexBuilder index_builder(builder);
  index_builder.add_index_type(vast::fbs::index::Index::v0);
  index_builder.add_index(index_v0.Union());
  auto index = index_builder.Finish();
  fbs::FinishIndexBuffer(builder, index);
  return index;
}

/// Persists the state to disk.
void index_state::flush_to_disk() {
  auto builder = flatbuffers::FlatBufferBuilder{};
  auto index = pack(builder, *this);
  if (!index) {
    VAST_WARNING(self, "failed to pack index:", render(index.error()));
    return;
  }
  auto chunk = fbs::release(builder);
  self
    ->request(caf::actor_cast<caf::actor>(filesystem), caf::infinite,
              atom::write_v, index_filename(), chunk)
    .then(
      [=](atom::ok) {
        VAST_LOG_SPD_DEBUG("{} successfully persisted index state",
                           detail::id_or_name(self));
      },
      [=](const caf::error& err) {
        VAST_WARNING(self, "failed to persist index state:", render(err));
      });
}

index_actor::behavior_type
index(index_actor::stateful_pointer<index_state> self,
      filesystem_actor filesystem, path dir, size_t partition_capacity,
      size_t max_inmem_partitions, size_t taste_partitions, size_t num_workers,
      double meta_index_fp_rate) {
  VAST_TRACE(VAST_ARG(filesystem), VAST_ARG(dir), VAST_ARG(partition_capacity),
             VAST_ARG(max_inmem_partitions), VAST_ARG(taste_partitions),
             VAST_ARG(num_workers), VAST_ARG(meta_index_fp_rate));
  VAST_VERBOSE(self, "initializes index in", dir,
               "with a maximum partition size of", partition_capacity,
               "events and", max_inmem_partitions, "resident partitions");
  // Set members.
  self->state.self = self;
  self->state.filesystem = std::move(filesystem);
  self->state.dir = dir;
  self->state.partition_capacity = partition_capacity;
  self->state.taste_partitions = taste_partitions;
  self->state.inmem_partitions.factory().filesystem() = self->state.filesystem;
  self->state.inmem_partitions.resize(max_inmem_partitions);
  self->state.meta_index_fp_rate = meta_index_fp_rate;
  // Read persistent state.
  if (auto err = self->state.load_from_disk()) {
    VAST_ERROR(self, "failed to load index state from disk:", render(err));
    self->quit(err);
    return index_actor::behavior_type::make_empty_behavior();
  }
  // Setup stream manager.
  self->state.stage = detail::attach_notifying_stream_stage(
    self,
    /* continuous = */ true, [=](caf::unit_t&) {},
    [=](caf::unit_t&, caf::downstream<table_slice>& out, table_slice x) {
      VAST_ASSERT(x.encoding() != table_slice_encoding::none);
      auto&& layout = x.layout();
      self->state.stats.layouts[layout.name()].count += x.rows();
      auto& active = self->state.active_partition;
      if (!active.actor) {
        self->state.create_active_partition();
      } else if (x.rows() > active.capacity) {
        VAST_LOG_SPD_DEBUG("{} exceeds active capacity by {} rows",
                           detail::id_or_name(self),
                           x.rows() - active.capacity);
        self->state.decomission_active_partition();
        self->state.flush_to_disk();
        self->state.create_active_partition();
      }
      out.push(x);
      if (active.capacity == self->state.partition_capacity
          && x.rows() > active.capacity) {
        VAST_WARNING(self, "got table slice with", x.rows(),
                     "rows that exceeds the default partition capacity of",
                     self->state.partition_capacity, "rows");
        active.capacity = 0;
      } else {
        VAST_ASSERT(active.capacity >= x.rows());
        active.capacity -= x.rows();
      }
    },
    [=](caf::unit_t&, const caf::error& err) {
      // We get an 'unreachable' error when the stream becomes unreachable
      // because the actor was destroyed; in this case we can't use `self`
      // anymore.
      if (err && err != caf::exit_reason::unreachable) {
        if (err != caf::exit_reason::user_shutdown)
          VAST_ERROR(self, "got a stream error:", render(err));
        else
          VAST_LOG_SPD_DEBUG("{} got a user shutdown error: {}",
                             detail::id_or_name(self), render(err));
        // We can shutdown now because we only get a single stream from the
        // importer.
        self->send_exit(self, err);
      }
      VAST_LOG_SPD_DEBUG("index finalized streaming");
    });
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    VAST_LOG_SPD_DEBUG("{} received EXIT from {} with reason: {}",
                       detail::id_or_name(self), msg.source, msg.reason);
    // Flush buffered batches and end stream.
    self->state.stage->out().fan_out_flush();
    self->state.stage->out().force_emit_batches();
    self->state.stage->out().close();
    self->state.stage->shutdown();
    // Bring down active partition.
    if (self->state.active_partition.actor)
      self->state.decomission_active_partition();
    // Collect partitions for termination.
    // TODO: We must actor_cast to caf::actor here because 'shutdown' operates
    // on 'std::vector<caf::actor>' only. That should probably be generalized in
    // the future.
    std::vector<caf::actor> partitions;
    partitions.reserve(self->state.inmem_partitions.size() + 1);
    for ([[maybe_unused]] auto& [_, part] : self->state.unpersisted)
      partitions.push_back(caf::actor_cast<caf::actor>(part));
    for ([[maybe_unused]] auto& [_, part] : self->state.inmem_partitions)
      partitions.push_back(caf::actor_cast<caf::actor>(part));
    self->state.flush_to_disk();
    // Receiving an EXIT message does not need to coincide with the state being
    // destructed, so we explicitly clear the tables to release the references.
    self->state.unpersisted.clear();
    self->state.inmem_partitions.clear();
    // Terminate partition actors.
    VAST_LOG_SPD_DEBUG("{} brings down {} partitions", detail::id_or_name(self),
                       partitions.size());
    shutdown<policy::parallel>(self, std::move(partitions));
  });
  // Launch workers for resolving queries.
  for (size_t i = 0; i < num_workers; ++i)
    self->spawn(query_supervisor,
                caf::actor_cast<query_supervisor_master_actor>(self));
  return {
    [=](atom::done, uuid partition_id) {
      VAST_LOG_SPD_DEBUG("{} queried partition {} successfully",
                         detail::id_or_name(self), partition_id);
    },
    [=](caf::stream<table_slice> in) -> caf::inbound_stream_slot<table_slice> {
      VAST_LOG_SPD_DEBUG("{} got a new stream source",
                         detail::id_or_name(self));
      return self->state.stage->add_inbound_path(in);
    },
    [=](accountant_actor accountant) {
      self->state.accountant = std::move(accountant);
    },
    [=](atom::subscribe, atom::flush, flush_listener_actor listener) {
      self->state.add_flush_listener(std::move(listener));
    },
    [=](vast::expression expr) -> caf::result<void> {
      // TODO: This check is not required technically, but we use the query
      // supervisor availability to rate-limit meta-index lookups. Do we really
      // need this?
      if (!self->state.worker_available())
        return caf::skip;
      // Query handling
      auto mid = self->current_message_id();
      auto sender = self->current_sender();
      auto client = caf::actor_cast<caf::actor>(sender);
      // TODO: This is used in order to "respond" to the message and to still
      // continue with the function afterwards. At some point this should be
      // changed to a proper solution for that problem, e.g., streaming.
      auto respond = [=](auto&&... xs) {
        unsafe_response(self, sender, {}, mid.response_id(),
                        std::forward<decltype(xs)>(xs)...);
      };
      // Convenience function for dropping out without producing hits.
      // Makes sure that clients always receive a 'done' message.
      auto no_result = [=] {
        respond(uuid::nil(), uint32_t{0}, uint32_t{0});
        caf::anon_send(client, atom::done_v);
      };
      // Sanity check.
      if (!sender) {
        VAST_WARNING(self, "ignores an anonymous query");
        respond(caf::sec::invalid_argument);
        return {};
      }
      // Get all potentially matching partitions.
      auto candidates = self->state.meta_idx.lookup(expr);
      if (self->state.active_partition.actor)
        candidates.push_back(self->state.active_partition.id);
      for (const auto& [id, _] : self->state.unpersisted)
        candidates.push_back(id);
      if (candidates.empty()) {
        VAST_LOG_SPD_DEBUG("{} returns without result: no partitions qualify",
                           detail::id_or_name(self));
        no_result();
        return {};
      }
      // Allows the client to query further results after initial taste.
      auto query_id = uuid::random();
      // Ensure the query id is unique.
      while (self->state.pending.find(query_id) != self->state.pending.end()
             || query_id == uuid::nil())
        query_id = uuid::random();
      auto total = candidates.size();
      auto scheduled = detail::narrow<uint32_t>(
        std::min(candidates.size(), self->state.taste_partitions));
      auto lookup = query_state{query_id, expr, std::move(candidates)};
      auto result = self->state.pending.emplace(query_id, std::move(lookup));
      VAST_ASSERT(result.second);
      respond(query_id, detail::narrow<uint32_t>(total), scheduled);
      self->delegate(caf::actor_cast<caf::actor>(self), query_id, scheduled);
      return {};
    },
    [=](const uuid& query_id, uint32_t num_partitions) -> caf::result<void> {
      auto sender = self->current_sender();
      auto client = caf::actor_cast<index_client_actor>(sender);
      // Sanity checks.
      if (!sender) {
        VAST_ERROR(self, "ignores an anonymous query");
        return {};
      }
      // A zero as second argument means the client drops further results.
      if (num_partitions == 0) {
        VAST_LOG_SPD_DEBUG("{} drops remaining results for query id {}",
                           detail::id_or_name(self), query_id);
        self->state.pending.erase(query_id);
        return {};
      }
      auto iter = self->state.pending.find(query_id);
      if (iter == self->state.pending.end()) {
        VAST_WARNING(self, "drops query for unknown query id", query_id);
        self->send(client, atom::done_v);
        return {};
      }
      auto& query_state = iter->second;
      auto worker = self->state.next_worker();
      if (!worker)
        return caf::skip;
      // Get partition actors, spawning new ones if needed.
      auto actors
        = self->state.collect_query_actors(query_state, num_partitions);
      // Delegate to query supervisor (uses up this worker) and report
      // query ID + some stats to the client.
      VAST_LOG_SPD_DEBUG("{} schedules {} more partition(s) for query id {}"
                         "with {} partitions remaining",
                         detail::id_or_name(self), actors.size(), query_id,
                         query_state.partitions.size());
      self->send(*worker, query_state.expression, std::move(actors), client);
      // Cleanup if we exhausted all candidates.
      if (query_state.partitions.empty())
        self->state.pending.erase(iter);
      return {};
    },
    [=](atom::erase, uuid partition_id) -> caf::result<ids> {
      VAST_VERBOSE(self, "erases partition", partition_id);
      auto rp = self->make_response_promise<ids>();
      auto path = self->state.partition_path(partition_id);
      bool adjust_stats = true;
      if (!self->state.persisted_partitions.count(partition_id)) {
        if (!exists(path)) {
          rp.deliver(caf::make_error(ec::logic_error, "unknown partition"));
          return rp;
        }
        // As a special case, if the partition exists on disk we just continue
        // normally here, since this indicates a previous erasure did not go
        // through cleanly.
        adjust_stats = false;
      }
      self->state.inmem_partitions.drop(partition_id);
      self->state.persisted_partitions.erase(partition_id);
      self->request(self->state.filesystem, caf::infinite, atom::mmap_v, path)
        .then(
          [=](chunk_ptr chunk) mutable {
            // Adjust layout stats by subtracting the events of the removed
            // partition.
            auto partition = fbs::GetPartition(chunk->data());
            if (partition->partition_type() != fbs::partition::Partition::v0) {
              rp.deliver(caf::make_error(ec::format_error, "unexpected format "
                                                           "version"));
              return;
            }
            vast::ids all_ids;
            auto partition_v0 = partition->partition_as_v0();
            for (auto partition_stats : *partition_v0->type_ids()) {
              auto name = partition_stats->name();
              vast::ids ids;
              if (auto error
                  = fbs::deserialize_bytes(partition_stats->ids(), ids)) {
                rp.deliver(
                  caf::make_error(ec::format_error, "could not deserialize "
                                                    "ids: "
                                                      + render(error)));
                return;
              }
              all_ids |= ids;
              if (adjust_stats)
                self->state.stats.layouts[name->str()].count -= rank(ids);
            }
            // Note that mmap's will increase the reference count of a file, so
            // unlinking should not affect indexers that are currently loaded
            // and answering a query.
            if (!rm(path))
              VAST_WARNING(self, "could not unlink partition at", path);
            rp.deliver(std::move(all_ids));
          },
          [=](caf::error e) mutable { rp.deliver(e); });
      return rp;
    },
    // -- query_supervisor_master_actor ----------------------------------------
    [=](atom::worker, query_supervisor_actor worker) {
      if (!self->state.worker_available())
        VAST_LOG_SPD_DEBUG("{} delegates work to query supervisors",
                           detail::id_or_name(self));
      self->state.idle_workers.emplace_back(std::move(worker));
    },
    // -- status_client_actor --------------------------------------------------
    [=](atom::status, status_verbosity v) { //
      return self->state.status(v);
    },
  };
}

} // namespace vast::system
