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

#include "vast/system/partition.hpp"

#include "vast/fwd.hpp"

#include "vast/address_synopsis.hpp"
#include "vast/aliases.hpp"
#include "vast/chunk.hpp"
#include "vast/concept/hashable/xxhash.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/concept/printable/vast/table_slice.hpp"
#include "vast/concept/printable/vast/uuid.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/settings.hpp"
#include "vast/expression.hpp"
#include "vast/expression_visitors.hpp"
#include "vast/fbs/partition.hpp"
#include "vast/fbs/utils.hpp"
#include "vast/fbs/uuid.hpp"
#include "vast/ids.hpp"
#include "vast/logger.hpp"
#include "vast/qualified_record_field.hpp"
#include "vast/synopsis.hpp"
#include "vast/system/indexer.hpp"
#include "vast/system/shutdown.hpp"
#include "vast/system/status_verbosity.hpp"
#include "vast/system/terminate.hpp"
#include "vast/table_slice.hpp"
#include "vast/table_slice_column.hpp"
#include "vast/time.hpp"
#include "vast/type.hpp"
#include "vast/value_index.hpp"

#include <caf/attach_continuous_stream_stage.hpp>
#include <caf/broadcast_downstream_manager.hpp>
#include <caf/deserializer.hpp>
#include <caf/error.hpp>
#include <caf/sec.hpp>

#include <flatbuffers/base.h> // FLATBUFFERS_MAX_BUFFER_SIZE
#include <flatbuffers/flatbuffers.h>

#include <memory>

using namespace std::chrono;
using namespace caf;

CAF_ALLOW_UNSAFE_MESSAGE_TYPE(std::shared_ptr<vast::partition_synopsis>)

namespace vast::system {

/// Gets the ACTIVE INDEXER at a certain position.
active_indexer_actor active_partition_state::indexer_at(size_t position) const {
  VAST_ASSERT(position < indexers.size());
  return as_vector(indexers)[position].second;
}

/// Gets the INDEXER at a certain position.
indexer_actor passive_partition_state::indexer_at(size_t position) const {
  VAST_ASSERT(position < indexers.size());
  auto& indexer = indexers[position];
  // Deserialize the value index and spawn a passive_indexer lazily when it is
  // requested for the first time.
  if (!indexer) {
    auto qualified_index = flatbuffer->indexes()->Get(position);
    auto index = qualified_index->index();
    auto data = index->data();
    value_index_ptr state_ptr;
    if (auto error = fbs::deserialize_bytes(data, state_ptr)) {
      VAST_ERROR(self, "failed to deserialize indexer at", position,
                 "with error:", render(error));
      return {};
    }
    indexer = self->spawn(passive_indexer, id, std::move(state_ptr));
  }
  return indexer;
}

namespace {

// The functions in this namespace take PartitionState as template argument
// because the impelementation is the same for passive and active partitions.

/// Gets the INDEXER at position in the layout.
/// @relates active_partition_state
/// @relates passive_partition_state
template <typename PartitionState>
indexer_actor
fetch_indexer(const PartitionState& state, const data_extractor& dx,
              relational_operator op, const data& x) {
  VAST_TRACE(VAST_ARG(dx), VAST_ARG(op), VAST_ARG(x));
  // Sanity check.
  if (dx.offset.empty())
    return {};
  if (auto index = state.combined_layout.flat_index_at(dx.offset))
    return state.indexer_at(*index);
  VAST_WARNING(state.self, "got invalid offset for the combined layout",
               state.combined_layout);
  return {};
}

/// Retrieves an INDEXER for a predicate with a data extractor.
/// @param dx The extractor.
/// @param op The operator (only used to precompute ids for type queries.
/// @param x The literal side of the predicate.
/// @relates active_partition_state
/// @relates passive_partition_state
template <typename PartitionState>
indexer_actor
fetch_indexer(const PartitionState& state, const attribute_extractor& ex,
              relational_operator op, const data& x) {
  VAST_TRACE(VAST_ARG(ex), VAST_ARG(op), VAST_ARG(x));
  ids row_ids;
  if (ex.attr == atom::type_v) {
    // We know the answer immediately: all IDs that are part of the table.
    // However, we still have to "lift" this result into an actor for the
    // EVALUATOR.
    for (auto& [name, ids] : state.type_ids)
      if (evaluate(name, op, x))
        row_ids |= ids;
  } else if (ex.attr == atom::field_v) {
    auto s = caf::get_if<std::string>(&x);
    if (!s) {
      VAST_WARNING(state.self, "#field meta queries only support string "
                               "comparisons");
      return {};
    }
    auto neg = is_negated(op);
    for (const auto& field : record_type::each{state.combined_layout}) {
      // As long as the combined layout is flattened, this must rely on
      // a heuristic. We use the substring after the last dot for the
      // field name.
      // const auto& name = field.trace.back()->name;
      auto fqn = field.key();
      if (detail::ends_with(fqn, *s)) {
        // Get ids.
        for (const auto& [layout_name, ids] : state.type_ids)
          if (detail::starts_with(field.key(), layout_name))
            row_ids |= ids;
      }
    }
    if (neg) {
      auto partition_ids = std::accumulate(
        state.type_ids.begin(), state.type_ids.end(), ids{},
        [](ids acc, const auto& x) { return acc | x.second; });
      row_ids = partition_ids ^ row_ids;
    }
  } else {
    VAST_WARNING(state.self, "got unsupported attribute:", ex.attr);
    return {};
  }
  // TODO: Spawning a one-shot actor is quite expensive. Maybe the
  //       partition could instead maintain this actor lazily.
  return state.self->spawn([row_ids]() -> indexer_actor::behavior_type {
    return {
      [=](const curried_predicate&) { return row_ids; },
      [](atom::shutdown) {
        VAST_LOG_SPD_DEBUG("one-shot indexer received shutdown request");
      },
    };
  });
}

/// Returns all INDEXERs that are involved in evaluating the expression.
/// @relates active_partition_state
/// @relates passive_partition_state
template <typename PartitionState>
std::vector<evaluation_triple>
evaluate(const PartitionState& state, const expression& expr) {
  std::vector<evaluation_triple> result;
  // Pretend the partition is a table, and return fitted predicates for the
  // partitions layout.
  auto resolved = resolve(expr, state.combined_layout);
  for (auto& kvp : resolved) {
    // For each fitted predicate, look up the corresponding INDEXER
    // according to the specified type of extractor.
    auto& pred = kvp.second;
    auto get_indexer_handle = [&](const auto& ext, const data& x) {
      return fetch_indexer(state, ext, pred.op, x);
    };
    auto v = detail::overload{
      [&](const attribute_extractor& ex, const data& x) {
        return get_indexer_handle(ex, x);
      },
      [&](const data_extractor& dx, const data& x) {
        return get_indexer_handle(dx, x);
      },
      [](const auto&, const auto&) {
        return indexer_actor{}; // clang-format fix
      },
    };
    // Package the predicate, its position in the query and the required
    // INDEXER as a "job description".
    if (auto hdl = caf::visit(v, pred.lhs, pred.rhs))
      result.emplace_back(kvp.first, curried(pred), std::move(hdl));
  }
  // Return the list of jobs, to be used by the EVALUATOR.
  return result;
}

} // namespace

bool partition_selector::operator()(const qualified_record_field& filter,
                                    const table_slice_column& column) const {
  auto&& layout = flatten(column.slice().layout());
  // We don't create a temporary qualified_record_field here to avoid copying
  // a string and a record field on the heap. Instead, we compare each part
  // manually.
  if (filter.layout_name != layout.name())
    return false;
  auto& field = layout.fields.at(column.index());
  if (filter.field_name != field.name)
    return false;
  return filter.type == field.type;
}

caf::expected<flatbuffers::Offset<fbs::Partition>>
pack(flatbuffers::FlatBufferBuilder& builder, const active_partition_state& x) {
  auto uuid = pack(builder, x.id);
  if (!uuid)
    return uuid.error();
  std::vector<flatbuffers::Offset<fbs::qualified_value_index::v0>> indices;
  // Note that the deserialization code relies on the order of indexers within
  // the flatbuffers being preserved.
  for (auto& [qf, actor] : x.indexers) {
    auto actor_id = actor.id();
    auto chunk_it = x.chunks.find(actor_id);
    if (chunk_it == x.chunks.end())
      return caf::make_error(ec::logic_error, "no chunk for for actor id "
                                                + to_string(actor_id));
    auto& chunk = chunk_it->second;
    auto data = builder.CreateVector(
      reinterpret_cast<const uint8_t*>(chunk->data()), chunk->size());
    auto fieldname = builder.CreateString(qf.field_name);
    fbs::value_index::v0Builder vbuilder(builder);
    vbuilder.add_data(data);
    auto vindex = vbuilder.Finish();
    fbs::qualified_value_index::v0Builder qbuilder(builder);
    qbuilder.add_field_name(fieldname);
    qbuilder.add_index(vindex);
    auto qindex = qbuilder.Finish();
    indices.push_back(qindex);
  }
  auto indexes = builder.CreateVector(indices);
  // Serialize layout.
  auto combined_layout = fbs::serialize_bytes(builder, x.combined_layout);
  if (!combined_layout)
    return combined_layout.error();
  std::vector<flatbuffers::Offset<fbs::type_ids::v0>> tids;
  for (const auto& kv : x.type_ids) {
    auto name = builder.CreateString(kv.first);
    auto ids = fbs::serialize_bytes(builder, kv.second);
    if (!ids)
      return ids.error();
    fbs::type_ids::v0Builder tids_builder(builder);
    tids_builder.add_name(name);
    tids_builder.add_ids(*ids);
    tids.push_back(tids_builder.Finish());
  }
  auto type_ids = builder.CreateVector(tids);
  // Serialize synopses.
  auto maybe_ps = pack(builder, *x.synopsis);
  if (!maybe_ps)
    return maybe_ps.error();
  fbs::partition::v0Builder v0_builder(builder);
  v0_builder.add_uuid(*uuid);
  v0_builder.add_offset(x.offset);
  v0_builder.add_events(x.events);
  v0_builder.add_indexes(indexes);
  v0_builder.add_partition_synopsis(*maybe_ps);
  v0_builder.add_combined_layout(*combined_layout);
  v0_builder.add_type_ids(type_ids);
  auto partition_v0 = v0_builder.Finish();
  fbs::PartitionBuilder partition_builder(builder);
  partition_builder.add_partition_type(fbs::partition::Partition::v0);
  partition_builder.add_partition(partition_v0.Union());
  auto partition = partition_builder.Finish();
  fbs::FinishPartitionBuffer(builder, partition);
  return partition;
}

caf::error
unpack(const fbs::partition::v0& partition, passive_partition_state& state) {
  // Check that all fields exist.
  if (!partition.uuid())
    return caf::make_error(ec::format_error,
                           "missing 'uuid' field in partition "
                           "flatbuffer");
  auto combined_layout = partition.combined_layout();
  if (!combined_layout)
    return caf::make_error(ec::format_error,
                           "missing 'layouts' field in partition "
                           "flatbuffer");
  auto indexes = partition.indexes();
  if (!indexes)
    return caf::make_error(ec::format_error,
                           "missing 'indexes' field in partition "
                           "flatbuffer");
  for (auto qualified_index : *indexes) {
    if (!qualified_index->field_name())
      return caf::make_error(ec::format_error,
                             "missing field name in qualified "
                             "index");
    auto index = qualified_index->index();
    if (!index)
      return caf::make_error(ec::format_error,
                             "missing index name in qualified "
                             "index");
    if (!index->data())
      return caf::make_error(ec::format_error, "missing data in index");
  }
  if (auto error = unpack(*partition.uuid(), state.id))
    return error;
  state.events = partition.events();
  state.offset = partition.offset();
  state.name = "partition-" + to_string(state.id);
  if (auto error
      = fbs::deserialize_bytes(combined_layout, state.combined_layout))
    return error;
  // This condition should be '!=', but then we cant deserialize in unit tests
  // anymore without creating a bunch of index actors first. :/
  if (state.combined_layout.fields.size() < indexes->size()) {
    VAST_ERROR(state.self,
               "found incoherent number of indexers in deserialized state;",
               state.combined_layout.fields.size(), "fields for",
               indexes->size(), "indexes");
    return caf::make_error(ec::format_error, "incoherent number of indexers");
  }
  // We only create dummy entries here, since the positions of the `indexers`
  // vector must be the same as in `combined_layout`. The actual indexers are
  // deserialized and spawned lazily on demand.
  state.indexers.resize(indexes->size());
  VAST_LOG_SPD_DEBUG("{} found {} indexers for partition {}",
                     detail::id_or_name(state.self), indexes->size(), state.id);
  auto type_ids = partition.type_ids();
  for (size_t i = 0; i < type_ids->size(); ++i) {
    auto type_ids_tuple = type_ids->Get(i);
    auto name = type_ids_tuple->name();
    auto ids_data = type_ids_tuple->ids();
    auto& ids = state.type_ids[name->str()];
    if (auto error = fbs::deserialize_bytes(ids_data, ids))
      return error;
  }
  VAST_LOG_SPD_DEBUG("{} restored {} type-to-ids mapping for partition {}",
                     detail::id_or_name(state.self), state.type_ids.size(),
                     state.id);
  return caf::none;
}

caf::error unpack(const fbs::partition::v0& x, partition_synopsis& ps) {
  if (!x.partition_synopsis())
    return caf::make_error(ec::format_error, "missing partition synopsis");
  if (!x.type_ids())
    return caf::make_error(ec::format_error, "missing type_ids");
  return unpack(*x.partition_synopsis(), ps);
}

active_partition_actor::behavior_type active_partition(
  active_partition_actor::stateful_pointer<active_partition_state> self,
  uuid id, filesystem_actor filesystem, caf::settings index_opts,
  caf::settings synopsis_opts) {
  self->state.self = self;
  self->state.name = "partition-" + to_string(id);
  self->state.id = id;
  self->state.offset = invalid_id;
  self->state.events = 0;
  self->state.filesystem = std::move(filesystem);
  self->state.streaming_initiated = false;
  self->state.synopsis = std::make_shared<partition_synopsis>();
  self->state.synopsis_opts = std::move(synopsis_opts);
  put(self->state.synopsis_opts, "buffer-input-data", true);
  // The active partition stage is a caf stream stage that takes
  // a stream of `table_slice` as input and produces several
  // streams of `table_slice_column` as output.
  self->state.stage = caf::attach_continuous_stream_stage(
    self,
    [=](caf::unit_t&) {
      // nop
    },
    [=](caf::unit_t&, caf::downstream<table_slice_column>& out, table_slice x) {
      VAST_TRACE(VAST_ARG(out), VAST_ARG(x));
      // We rely on `invalid_id` actually being the highest possible id
      // when using `min()` below.
      static_assert(invalid_id == std::numeric_limits<vast::id>::max());
      auto first = x.offset();
      auto last = x.offset() + x.rows();
      auto layout = flatten(x.layout());
      auto it = self->state.type_ids.emplace(layout.name(), ids{}).first;
      auto& ids = it->second;
      VAST_ASSERT(first >= ids.size());
      // Mark the ids of this table slice for the current type.
      ids.append_bits(false, first - ids.size());
      ids.append_bits(true, last - first);
      self->state.offset = std::min(x.offset(), self->state.offset);
      self->state.events += x.rows();
      self->state.synopsis->add(x, self->state.synopsis_opts);
      size_t col = 0;
      VAST_ASSERT(!layout.fields.empty());
      for (auto& field : layout.fields) {
        auto qf = qualified_record_field{layout.name(), field};
        auto& idx = self->state.indexers[qf];
        if (!idx) {
          self->state.combined_layout.fields.push_back(as_record_field(qf));
          idx = self->spawn(active_indexer, field.type, index_opts);
          auto slot = self->state.stage->add_outbound_path(idx);
          self->state.stage->out().set_filter(slot, qf);
          VAST_LOG_SPD_DEBUG("{} spawned new indexer for field {} at slot {}",
                             detail::id_or_name(self), field.name, slot);
        }
        out.push(table_slice_column{x, col++});
      }
    },
    [=](caf::unit_t&, const caf::error& err) {
      // We get an 'unreachable' error when the stream becomes unreachable
      // because the actor was destroyed; in this case we can't use `self`
      // anymore.
      if (err && err != caf::exit_reason::unreachable) {
        VAST_ERROR(self, "aborts with error:", render(err));
        // We don't exit here, since there might be outstanding evaluators who
        // still need our indexers.
        return;
      }
      VAST_LOG_SPD_DEBUG("partition {} finalized streaming", id);
    },
    // Every "outbound path" has a path_state, which consists of a "Filter"
    // and a vector of "T", the output buffer. In the case of a partition,
    // we have:
    //
    //   T:      vast::table_slice_column
    //   Filter: vast::qualified_record_field
    //   Select: vast::system::partition_selector
    //
    // NOTE: The broadcast_downstream_manager has to iterate over all
    // indexers, and compute the qualified record field name for each. A
    // specialized downstream manager could optimize this by using e.g. a map
    // from qualified record fields to downstream indexers.
    caf::policy::arg<broadcast_downstream_manager<
      table_slice_column, vast::qualified_record_field, partition_selector>>{});
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    VAST_LOG_SPD_DEBUG("{} received EXIT from {} with reason: {}",
                       detail::id_or_name(self), msg.source, msg.reason);
    if (self->state.stage->idle()) {
      self->state.stage->out().fan_out_flush();
      self->state.stage->out().force_emit_batches();
      self->state.stage->out().close();
    }
    // Delay shutdown if we're currently in the process of persisting.
    if (self->state.persistence_promise.pending()) {
      std::call_once(self->state.shutdown_once, [=] {
        VAST_LOG_SPD_DEBUG("{} delays partition shutdown because it is still "
                           "writing to disk",
                           detail::id_or_name(self));
      });
      using namespace std::chrono_literals;
      // Ideally, we would use a self->delayed_delegate(self, ...) here, but CAF
      // does not have this functionality. Since we do not care about the return
      // value of the partition outselves, and the handler we delegate to
      // already uses a response promise, we send the message anonymously. We
      // also need to actor_cast self, since sending an exit message to a typed
      // actor without using self->send_exit is not supported.
      caf::delayed_anon_send(caf::actor_cast<caf::actor>(self), 100ms, msg);
      return;
    }
    VAST_LOG_SPD_VERBOSE("{} shuts down after persisting partition state",
                         detail::id_or_name(self));
    // TODO: We must actor_cast to caf::actor here because 'shutdown' operates
    // on 'std::vector<caf::actor>' only. That should probably be generalized
    // in the future.
    auto indexers = std::vector<caf::actor>{};
    indexers.reserve(self->state.indexers.size());
    auto copy = std::exchange(self->state.indexers, {});
    for ([[maybe_unused]] auto&& [qf, indexer] : std::move(copy))
      indexers.push_back(caf::actor_cast<caf::actor>(std::move(indexer)));
    shutdown<policy::parallel>(self, std::move(indexers));
  });
  return {
    [=](caf::stream<table_slice> in) {
      self->state.streaming_initiated = true;
      return self->state.stage->add_inbound_path(in);
    },
    [=](atom::persist, const path& part_dir) {
      // Ensure that the response promise has not already been initialized.
      VAST_ASSERT(
        !static_cast<caf::response_promise&>(self->state.persistence_promise)
           .source());
      self->state.persist_path = part_dir;
      self->state.persisted_indexers = 0;
      self->state.persistence_promise
        = self->make_response_promise<std::shared_ptr<partition_synopsis>>();
      // We use a high message priority here because we want to start persisting
      // as soon as possible in order to avoid shutdown delay.
      self->send<caf::message_priority::high>(self, atom::persist_v,
                                              atom::resume_v);
      return self->state.persistence_promise;
    },
    [=](atom::persist, atom::resume) {
      // Wait for outstanding data to avoid data loss.
      if (!self->state.streaming_initiated
          || !self->state.stage->inbound_paths().empty()
          || !self->state.stage->idle()) {
        VAST_LOG_SPD_DEBUG("{} waits for stream before persisting",
                           detail::id_or_name(self));
        self->delayed_send(self, 50ms, atom::persist_v, atom::resume_v);
        return;
      }
      self->state.stage->out().fan_out_flush();
      self->state.stage->out().force_emit_batches();
      self->state.stage->out().close();
      if (self->state.indexers.empty()) {
        self->state.persistence_promise.deliver(
          caf::make_error(ec::logic_error, "partition has no indexers"));
        return;
      }
      VAST_LOG_SPD_DEBUG("{} sends 'snapshot' to {} indexers",
                         detail::id_or_name(self), self->state.indexers.size());
      for (auto& kv : self->state.indexers) {
        self->request(kv.second, caf::infinite, atom::snapshot_v)
          .then(
            [=](chunk_ptr chunk) {
              ++self->state.persisted_indexers;
              if (!self->state.persistence_promise.pending()) {
                VAST_WARNING(self, "ignores persisted indexer because the "
                                   "persistence promise is already fulfilled");
                return;
              }
              auto sender = self->current_sender()->id();
              if (!chunk) {
                VAST_ERROR(self, "failed to persist indexer", sender);
                self->state.persistence_promise.deliver(caf::make_error(
                  ec::unspecified, "failed to persist indexer", sender));
                return;
              }
              VAST_LOG_SPD_DEBUG("{} got chunk from {}",
                                 detail::id_or_name(self), sender);
              self->state.chunks.emplace(sender, chunk);
              if (self->state.persisted_indexers
                  < self->state.indexers.size()) {
                VAST_LOG_SPD_DEBUG(
                  "{} waits for more chunks after receiving {} out of {}",
                  detail::id_or_name(self), self->state.persisted_indexers,
                  self->state.indexers.size());
                return;
              }
              // Shrink synopses for addr fields to optimal size.
              self->state.synopsis->shrink();
              // Create the partition flatbuffer.
              flatbuffers::FlatBufferBuilder builder;
              auto partition = pack(builder, self->state);
              if (!partition) {
                VAST_ERROR(self, "failed to serialize", self->state.name,
                           "with error:", render(partition.error()));
                self->state.persistence_promise.deliver(partition.error());
                return;
              }
              VAST_ASSERT(self->state.persist_path);
              auto fbchunk = fbs::release(builder);
              VAST_LOG_SPD_DEBUG("{} persists partition with a total size of "
                                 "{} bytes",
                                 detail::id_or_name(self), fbchunk->size());
              // TODO: Add a proper timeout.
              self
                ->request(self->state.filesystem, caf::infinite, atom::write_v,
                          *self->state.persist_path, fbchunk)
                .then(
                  [=](atom::ok) {
                    // Relinquish ownership and send the shrunken synopsis to
                    // the index.
                    self->state.persistence_promise.deliver(
                      self->state.synopsis);
                    self->state.synopsis.reset();
                  },
                  [=](caf::error e) {
                    self->state.persistence_promise.deliver(std::move(e));
                  });
              return;
            },
            [=](caf::error err) {
              VAST_ERROR(self, "failed to persist indexer for", kv.first.fqn(),
                         "with error:", render(err));
              ++self->state.persisted_indexers;
              if (!self->state.persistence_promise.pending())
                self->state.persistence_promise.deliver(std::move(err));
            });
      }
    },
    [=](const expression& expr,
        partition_client_actor client) -> caf::result<atom::done> {
      // TODO: We should do a candidate check using `self->state.synopsis` and
      // return early if that doesn't yield any results.
      auto triples = evaluate(self->state, expr);
      if (triples.empty())
        return atom::done_v;
      auto eval = self->spawn(evaluator, expr, self, triples);
      return self->delegate(eval, client);
    },
    [=](atom::status,
        status_verbosity v) -> caf::typed_response_promise<caf::settings> {
      struct req_state_t {
        // Promise to the original client request.
        caf::typed_response_promise<caf::settings> rp;
        // Maps nodes to a map associating components with status information.
        caf::settings content;
        size_t memory_usage = 0;
      };
      auto req_state = std::make_shared<req_state_t>();
      req_state->rp = self->make_response_promise<caf::settings>();
      auto deliver = [](auto&& req_state) {
        put(req_state.content, "memory-usage", req_state.memory_usage);
        req_state.rp.deliver(req_state.content);
      };
      bool deferred = false;
      auto& indexer_states = put_list(req_state->content, "indexers");
      for (auto& i : self->state.indexers) {
        deferred = true;
        self
          ->request<caf::message_priority::high>(i.second, caf::infinite,
                                                 atom::status_v, v)
          .then(
            [=, &indexer_states](const caf::settings& indexer_status) {
              auto& ps = indexer_states.emplace_back().as_dictionary();
              put(ps, "field", i.first.fqn());
              if (auto s = caf::get_if<caf::config_value::integer>(
                    &indexer_status, "memory-usage"))
                req_state->memory_usage += *s;
              if (v >= status_verbosity::debug)
                detail::merge_settings(indexer_status, ps);
              // Both handlers have a copy of req_state.
              if (req_state.use_count() == 2)
                deliver(std::move(*req_state));
            },
            [=, &indexer_states](const caf::error& err) {
              VAST_WARNING(self, "failed to retrieve status from",
                           i.first.fqn(), ":", render(err));
              auto& ps = indexer_states.emplace_back().as_dictionary();
              put(ps, "id", to_string(id));
              put(ps, "error", render(err));
              // Both handlers have a copy of req_state.
              if (req_state.use_count() == 2)
                deliver(std::move(*req_state));
            });
      }
      if (!deferred)
        deliver(std::move(*req_state));
      return req_state->rp;
    },
  };
}

partition_actor::behavior_type passive_partition(
  partition_actor::stateful_pointer<passive_partition_state> self, uuid id,
  filesystem_actor filesystem, class path path) {
  self->state.self = self;
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    VAST_LOG_SPD_DEBUG("{} received EXIT from {} with reason: {}",
                       detail::id_or_name(self), msg.source, msg.reason);
    // Receiving an EXIT message does not need to coincide with the state
    // being destructed, so we explicitly clear the vector to release the
    // references.
    // TODO: We must actor_cast to caf::actor here because 'terminate'
    // operates on 'std::vector<caf::actor>' only. That should probably be
    // generalized in the future.
    auto indexers = std::vector<caf::actor>{};
    indexers.reserve(self->state.indexers.size());
    for (auto&& indexer : std::exchange(self->state.indexers, {}))
      indexers.push_back(caf::actor_cast<caf::actor>(std::move(indexer)));
    if (msg.reason != caf::exit_reason::user_shutdown) {
      self->quit(msg.reason);
      return;
    }
    // When the shutdown was requested by the user (as opposed to the partition
    // just dropping out of the LRU cache), pro-actively remove the indexers.
    terminate<policy::parallel>(self, std::move(indexers))
      .then(
        [=](atom::done) {
          VAST_LOG_SPD_DEBUG("{} shut down all indexers successfully",
                             detail::id_or_name(self));
          self->quit();
        },
        [=](const caf::error& err) {
          VAST_ERROR(self, "failed to shut down all indexers:", render(err));
          self->quit(err);
        });
  });
  // We send a "read" to the fs actor and upon receiving the result deserialize
  // the flatbuffer and switch to the "normal" partition behavior for responding
  // to queries.
  self->request(filesystem, caf::infinite, atom::mmap_v, path)
    .then(
      [=](chunk_ptr chunk) {
        VAST_TRACE(self, VAST_ARG(chunk));
        if (self->state.partition_chunk) {
          VAST_WARNING(self, "ignores duplicate chunk");
          return;
        }
        if (!chunk) {
          VAST_ERROR(self, "got invalid chunk");
          self->quit();
          return;
        }
        // FlatBuffers <= 1.11 does not correctly use '::flatbuffers::soffset_t'
        // over 'soffset_t' in FLATBUFFERS_MAX_BUFFER_SIZE.
        using ::flatbuffers::soffset_t;
        if (chunk->size() >= FLATBUFFERS_MAX_BUFFER_SIZE) {
          VAST_ERROR("failed to load partition at", path, "because its size of",
                     chunk->size(), "exceeds the maximum allowed size of",
                     FLATBUFFERS_MAX_BUFFER_SIZE);
          return self->quit();
        }
        // Deserialize chunk from the filesystem actor
        auto partition = fbs::GetPartition(chunk->data());
        if (partition->partition_type() != fbs::partition::Partition::v0) {
          VAST_ERROR(self, "found partition with invalid version of type:",
                     partition->GetFullyQualifiedName());
          self->quit();
          return;
        }
        auto partition_v0 = partition->partition_as_v0();
        self->state.partition_chunk = chunk;
        self->state.flatbuffer = partition_v0;
        if (auto error = unpack(*self->state.flatbuffer, self->state)) {
          VAST_ERROR(self, "failed to unpack partition:", render(error));
          self->quit(std::move(error));
          return;
        }
        if (id != self->state.id)
          VAST_LOG_SPD_WARN("{} encountered partition id mismatch: restored {} "
                            "from disk, expected {}",
                            detail::id_or_name(self), self->state.id, id);
        // Delegate all deferred evaluations now that we have the partition chunk.
        VAST_LOG_SPD_DEBUG("{} delegates {} deferred evaluations",
                           detail::id_or_name(self),
                           self->state.deferred_evaluations.size());
        for (auto&& [expr, client, rp] :
             std::exchange(self->state.deferred_evaluations, {}))
          rp.delegate(static_cast<partition_actor>(self), std::move(expr),
                      client);
      },
      [=](caf::error err) {
        VAST_ERROR(self, "failed to load partition:", render(err));
        // Deliver the error for all deferred evaluations.
        for (auto&& [expr, client, rp] :
             std::exchange(self->state.deferred_evaluations, {})) {
          // Because of a deficiency in the typed_response_promise API, we must
          // access the underlying response_promise to deliver the error.
          caf::response_promise& untyped_rp = rp;
          untyped_rp.deliver(static_cast<partition_actor>(self), err);
        }
        // Quit the partition.
        self->quit(std::move(err));
      });
  return {
    [=](const expression& expr,
        partition_client_actor client) -> caf::result<atom::done> {
      VAST_TRACE(self, VAST_ARG(expr));
      if (!self->state.partition_chunk)
        return get<2>(self->state.deferred_evaluations.emplace_back(
          expr, client, self->make_response_promise<atom::done>()));
      // We can safely assert that if we have the partition chunk already, all
      // deferred evaluations were taken care of.
      VAST_ASSERT(self->state.deferred_evaluations.empty());
      auto triples = evaluate(self->state, expr);
      if (triples.empty())
        return atom::done_v;
      auto eval = self->spawn(evaluator, expr, self, triples);
      return self->delegate(eval, client);
    },
    [=](atom::status, status_verbosity /*v*/) -> caf::config_value::dictionary {
      const auto& st = self->state;
      caf::settings result;
      caf::put(result, "size", st.partition_chunk->size());
      size_t mem_indexers = 0;
      for (size_t i = 0; i < st.indexers.size(); ++i) {
        if (st.indexers[i])
          mem_indexers
            += sizeof(indexer_state)
               + st.flatbuffer->indexes()->Get(i)->index()->data()->size();
      }
      caf::put(result, "memory-usage-indexers", mem_indexers);
      auto x = st.partition_chunk->incore();
      if (!x) {
        caf::put(result, "memory-usage-incore", render(x.error()));
        caf::put(result, "memory-usage",
                 st.partition_chunk->size() + mem_indexers + sizeof(st));
      } else {
        caf::put(result, "memory-usage-incore", *x);
        caf::put(result, "memory-usage", *x + mem_indexers + sizeof(st));
      }
      return result;
    },
  };
}

} // namespace vast::system
