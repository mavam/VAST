//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/system/passive_partition.hpp"

#include "vast/fwd.hpp"

#include "vast/address_synopsis.hpp"
#include "vast/aliases.hpp"
#include "vast/chunk.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/concept/printable/vast/table_slice.hpp"
#include "vast/concept/printable/vast/uuid.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/notifying_stream_manager.hpp"
#include "vast/detail/partition_common.hpp"
#include "vast/detail/settings.hpp"
#include "vast/detail/tracepoint.hpp"
#include "vast/expression_visitors.hpp"
#include "vast/fbs/partition.hpp"
#include "vast/fbs/utils.hpp"
#include "vast/fbs/uuid.hpp"
#include "vast/hash/xxhash.hpp"
#include "vast/ids.hpp"
#include "vast/logger.hpp"
#include "vast/plugin.hpp"
#include "vast/qualified_record_field.hpp"
#include "vast/synopsis.hpp"
#include "vast/system/indexer.hpp"
#include "vast/system/report.hpp"
#include "vast/system/shutdown.hpp"
#include "vast/system/status.hpp"
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

#include <filesystem>
#include <memory>
#include <span>

namespace vast::system {

namespace {
void delegate_deferred_requests(passive_partition_state& state) {
  for (auto&& [expr, rp] : std::exchange(state.deferred_evaluations, {}))
    rp.delegate(static_cast<partition_actor>(state.self), atom::query_v,
                std::move(expr));
  for (auto&& rp : std::exchange(state.deferred_erasures, {}))
    rp.delegate(static_cast<partition_actor>(state.self), atom::erase_v);
}

void deliver_error_to_deferred_requests(passive_partition_state& state,
                                        const caf::error& err) {
  for (auto&& [expr, rp] : std::exchange(state.deferred_evaluations, {})) {
    // Because of a deficiency in the typed_response_promise API, we must
    // access the underlying response_promise to deliver the error.
    rp.deliver(err);
  }
  for (auto&& rp : std::exchange(state.deferred_erasures, {})) {
    rp.deliver(err);
  }
}

caf::expected<vast::record_type>
unpack_schema(const fbs::partition::LegacyPartition& partition) {
  if (auto const* data = partition.combined_layout_caf_0_17()) {
    auto lrt = legacy_record_type{};
    if (auto error = fbs::deserialize_bytes(data, lrt))
      return error;
    return caf::get<record_type>(type::from_legacy_type(lrt));
  }
  if (auto const* data = partition.schema()) {
    auto chunk = chunk::copy(as_bytes(*data));
    auto t = type{std::move(chunk)};
    auto* layout = caf::get_if<record_type>(&t);
    if (!layout)
      return caf::make_error(ec::format_error, "schema field contained "
                                               "unexpected type");
    return std::move(*layout);
  }
  return caf::make_error(ec::format_error, "missing 'layouts' field in "
                                           "partition flatbuffer");
}

value_index_ptr
unpack_value_index(const fbs::value_index::detail::LegacyValueIndex& index_fbs,
                   const fbs::flatbuffer_container& container) {
  // If an external idx was specified, the data is not stored inline in
  // the flatbuffer but in a separate segment of this file.
  auto uncompress = [&index_fbs]<class T>(T&& index_data) {
    auto data_view = as_bytes(std::forward<T>(index_data));
    auto uncompressed_data
      = index_fbs.decompressed_size() != 0
          ? chunk::decompress(data_view, index_fbs.decompressed_size())
          : chunk::make(data_view, []() noexcept {});
    VAST_ASSERT(uncompressed_data);
    return uncompressed_data;
  };
  if (auto* data = index_fbs.caf_0_18_data()) {
    auto uncompressed_data = uncompress(*data);
    auto bytes = as_bytes(*uncompressed_data);
    caf::binary_deserializer sink{nullptr, bytes.data(), bytes.size()};
    value_index_ptr state_ptr;
    if (!sink.apply(state_ptr) || !state_ptr) {
      VAST_ERROR("failed to deserialize value index using CAF 0.18");
      return {};
    }
    return state_ptr;
  }
  if (auto* data = index_fbs.caf_0_17_data()) {
    auto uncompressed_data = uncompress(*data);
    detail::legacy_deserializer sink(as_bytes(*uncompressed_data));
    value_index_ptr state_ptr;
    if (!sink(state_ptr) || !state_ptr) {
      VAST_ERROR("failed to deserialize value index using CAF 0.17");
      return {};
    }
    return state_ptr;
  }
  if (auto ext_index = index_fbs.external_container_idx_caf_0_17()) {
    auto uncompressed_data = uncompress(container.get_raw(ext_index));
    detail::legacy_deserializer sink(as_bytes(*uncompressed_data));
    value_index_ptr state_ptr;
    if (!sink(state_ptr) || !state_ptr) {
      VAST_ERROR("failed to deserialize value index with CAF 0.17 external "
                 "container idx");
      return {};
    }
    return state_ptr;
  }
  if (auto ext_index = index_fbs.external_container_idx_caf_0_18()) {
    auto uncompressed_data = uncompress(container.get_raw(ext_index));
    auto bytes = as_bytes(*uncompressed_data);
    caf::binary_deserializer sink{nullptr, bytes.data(), bytes.size()};
    value_index_ptr state_ptr;
    if (!sink.apply(state_ptr) || !state_ptr) {
      VAST_ERROR("failed to deserialize value index with CAF 0.18 external "
                 "container idx");
      return {};
    }
    return state_ptr;
  }
  return {};
}

} // namespace

/// Gets the INDEXER at a certain position.
indexer_actor passive_partition_state::indexer_at(size_t position) const {
  VAST_ASSERT(position < indexers.size());
  auto& indexer = indexers[position];
  if (indexer)
    return indexer;
  // Deserialize the value index and spawn a passive_indexer lazily when it is
  // requested for the first time.
  const auto* qualified_index = flatbuffer->indexes()->Get(position);
  if (auto value_index
      = unpack_value_index(*qualified_index->index(), *container)) {
    indexer = self->spawn(passive_indexer, id, std::move(value_index));
    return indexer;
  }
  VAST_ERROR("{} failed to deserialize value index at {}", *self, position);
  return {};
}

const std::optional<vast::record_type>&
passive_partition_state::combined_layout() const {
  return combined_layout_;
}

const std::unordered_map<std::string, ids>&
passive_partition_state::type_ids() const {
  return type_ids_;
}

caf::error unpack(const fbs::partition::LegacyPartition& partition,
                  passive_partition_state& state) {
  // Check that all fields exist.
  if (!partition.uuid())
    return caf::make_error(ec::format_error, //
                           "missing 'uuid' field in partition flatbuffer");
  auto const* store_header = partition.store();
  // If no store_id is set, use the global store for backwards compatibility.
  if (store_header && !store_header->id())
    return caf::make_error(ec::format_error, //
                           "missing 'id' field in partition store header");
  if (store_header && !store_header->data())
    return caf::make_error(ec::format_error, //
                           "missing 'data' field in partition store header");
  state.store_id
    = store_header ? store_header->id()->str() : std::string{"legacy_archive"};
  if (store_header && store_header->data())
    state.store_header = std::span{
      reinterpret_cast<const std::byte*>(store_header->data()->data()),
      store_header->data()->size()};
  auto const* indexes = partition.indexes();
  if (!indexes)
    return caf::make_error(ec::format_error, //
                           "missing 'indexes' field in partition flatbuffer");
  for (auto const* qualified_index : *indexes) {
    if (!qualified_index->field_name())
      return caf::make_error(ec::format_error, //
                             "missing field name in qualified index");
    auto const* index = qualified_index->index();
    if (!index)
      return caf::make_error(ec::format_error, //
                             "missing index field in qualified index");
  }
  if (auto error = unpack(*partition.uuid(), state.id))
    return error;
  state.events = partition.events();
  state.offset = partition.offset();
  state.name = "partition-" + to_string(state.id);
  if (auto schema = unpack_schema(partition))
    state.combined_layout_ = std::move(*schema);
  else
    return schema.error();
  // This condition should be '!=', but then we cant deserialize in unit tests
  // anymore without creating a bunch of index actors first. :/
  if (state.combined_layout_->num_fields() < indexes->size()) {
    VAST_ERROR("{} found incoherent number of indexers in deserialized state; "
               "{} fields for {} indexes",
               state.name, state.combined_layout_->num_fields(),
               indexes->size());
    return caf::make_error(ec::format_error, "incoherent number of indexers");
  }
  // We only create dummy entries here, since the positions of the `indexers`
  // vector must be the same as in `combined_layout`. The actual indexers are
  // deserialized and spawned lazily on demand.
  state.indexers.resize(indexes->size());
  VAST_DEBUG("{} found {} indexers for partition {}", state.name,
             indexes->size(), state.id);
  auto const* type_ids = partition.type_ids();
  for (size_t i = 0; i < type_ids->size(); ++i) {
    auto const* type_ids_tuple = type_ids->Get(i);
    auto const* name = type_ids_tuple->name();
    auto const* ids_data = type_ids_tuple->ids();
    auto& ids = state.type_ids_[name->str()];
    if (auto error = fbs::deserialize_bytes(ids_data, ids))
      return error;
  }
  VAST_DEBUG("{} restored {} type-to-ids mapping for partition {}", state.name,
             state.type_ids_.size(), state.id);
  return caf::none;
}

caf::error
unpack(const fbs::partition::LegacyPartition& x, partition_synopsis& ps) {
  if (!x.partition_synopsis())
    return caf::make_error(ec::format_error, "missing partition synopsis");
  if (!x.type_ids())
    return caf::make_error(ec::format_error, "missing type_ids");
  // The id_range was only added in VAST 2021.08.26, so we fill it
  // from the data in the partition if it does not exist.
  if (!x.partition_synopsis()->id_range())
    return unpack(*x.partition_synopsis(), ps, x.offset(), x.events());
  return unpack(*x.partition_synopsis(), ps);
}

caf::expected<index_statistics>
partition_chunk::get_statistics(vast::chunk_ptr chunk) {
  auto result = index_statistics{};
  if (flatbuffers::BufferHasIdentifier(chunk->data(),
                                       fbs::PartitionIdentifier())) {
    // For partitions written prior to VAST 2.3, the chunk contains the
    // partition as top-level flatbuffer. For very old ones, it may also
    // happen that it has multiple layouts.
    using ::flatbuffers::soffset_t;
    if (chunk->size() >= FLATBUFFERS_MAX_BUFFER_SIZE)
      return caf::make_error(ec::format_error, "chunk exceeds max buffer size");
    const auto* partition = fbs::GetPartition(chunk->data());
    if (partition->partition_type() != fbs::partition::Partition::legacy) {
      return caf::make_error(ec::format_error, "unexpected format version");
    }
    vast::ids all_ids;
    const auto* partition_legacy = partition->partition_as_legacy();
    for (const auto* partition_stats : *partition_legacy->type_ids()) {
      const auto* name = partition_stats->name();
      vast::ids ids;
      if (auto error = fbs::deserialize_bytes(partition_stats->ids(), ids)) {
        VAST_WARN("could not deserialize ids to adjust "
                  "statistics: {}",
                  error);
        continue;
      }
      all_ids |= ids;
      result.layouts[name->str()].count += rank(ids);
    }
  } else if (flatbuffers::BufferHasIdentifier(
               chunk->data(), fbs::SegmentedFileHeaderIdentifier())) {
    // For partitions with a SegmentedFileHeader at the root, we know
    // they must be at least version 1 and thus have a fixed schema.
    auto const* header = fbs::GetSegmentedFileHeader(chunk->data());
    if (header->header_type() != fbs::segmented_file::SegmentedFileHeader::v0)
      return caf::make_error(
        ec::format_error,
        fmt::format("unsupported version {}",
                    static_cast<uint8_t>(header->header_type())));
    auto container = fbs::flatbuffer_container(chunk);
    if (!container)
      return caf::make_error(ec::format_error, "could not read container");
    if (container.size() == 0)
      return caf::make_error(ec::format_error, "no container");
    auto const* partition = container.as_flatbuffer<fbs::Partition>(0);
    if (!partition)
      return caf::make_error(ec::format_error, "initial flatbuffer not a "
                                               "container");
    if (partition->partition_type() != vast::fbs::partition::Partition::legacy)
      return caf::make_error(ec::format_error, "initial flatbuffer not a "
                                               "container");
    auto const* partition_legacy = partition->partition_as_legacy();
    VAST_ASSERT_CHEAP(partition_legacy);
    auto const* synopsis = partition_legacy->partition_synopsis();
    if (!synopsis || !synopsis->schema())
      return caf::make_error(ec::format_error, "could not get schema from "
                                               "synopsis");
    auto type = vast::type{chunk::copy(as_bytes(*synopsis->schema()))};
    result.layouts[std::string{type.name()}].count
      += partition_legacy->events();
  } else {
    return caf::make_error(ec::format_error, "unknown header");
  }
  return result;
}

caf::expected<const vast::fbs::Partition*>
partition_chunk::get_flatbuffer(vast::chunk_ptr chunk) {
  if (flatbuffers::BufferHasIdentifier(chunk->data(),
                                       fbs::PartitionIdentifier())) {
    // FlatBuffers <= 1.11 does not correctly use '::flatbuffers::soffset_t'
    // over 'soffset_t' in FLATBUFFERS_MAX_BUFFER_SIZE.
    using ::flatbuffers::soffset_t;
    if (chunk->size() >= FLATBUFFERS_MAX_BUFFER_SIZE) {
      return caf::make_error(ec::format_error, "partition exceeds the maximum "
                                               "flatbuffer size");
    }
    return fbs::GetPartition(chunk->data());
  } else if (flatbuffers::BufferHasIdentifier(
               chunk->data(), fbs::SegmentedFileHeaderIdentifier())) {
    auto container = fbs::flatbuffer_container(chunk);
    if (!container)
      return caf::make_error(ec::format_error, "invalid flatbuffer container");
    return container.as_flatbuffer<fbs::Partition>(0);
  } else {
    return caf::make_error(ec::format_error, "unknown identifier {}",
                           flatbuffers::GetBufferIdentifier(chunk->data()));
  }
}

caf::error
passive_partition_state::initialize_from_chunk(const vast::chunk_ptr& chunk) {
  // For partitions written prior to VAST 2.3, the chunk contains the partition
  // as top-level flatbuffer.
  if (flatbuffers::BufferHasIdentifier(chunk->data(),
                                       fbs::PartitionIdentifier())) {
    // FlatBuffers <= 1.11 does not correctly use '::flatbuffers::soffset_t'
    // over 'soffset_t' in FLATBUFFERS_MAX_BUFFER_SIZE.
    using ::flatbuffers::soffset_t;
    if (chunk->size() >= FLATBUFFERS_MAX_BUFFER_SIZE) {
      return caf::make_error(
        ec::format_error,
        fmt::format("failed to load partition because its size of {} "
                    "exceeds the "
                    "maximum allowed size of {}",
                    chunk->size(), FLATBUFFERS_MAX_BUFFER_SIZE));
    }
    auto partition = fbs::GetPartition(chunk->data());
    if (partition->partition_type() != fbs::partition::Partition::legacy) {
      return caf::make_error(
        ec::format_error,
        fmt::format("unknown partition version {}",
                    static_cast<uint8_t>(partition->partition_type())));
    }
    this->partition_chunk = chunk;
    this->flatbuffer = partition->partition_as_legacy();
  } else if (flatbuffers::BufferHasIdentifier(
               chunk->data(), fbs::SegmentedFileHeaderIdentifier())) {
    this->partition_chunk = chunk;
    this->container = fbs::flatbuffer_container(chunk);
    if (!this->container)
      return caf::make_error(ec::format_error, "invalid flatbuffer container");
    auto partition = container->as_flatbuffer<fbs::Partition>(0);
    if (partition->partition_type() != fbs::partition::Partition::legacy)
      return caf::make_error(
        ec::format_error,
        fmt::format("unknown partition version {}",
                    static_cast<uint8_t>(partition->partition_type())));
    this->flatbuffer = partition->partition_as_legacy();
  } else {
    return caf::make_error(ec::format_error,
                           "partition at contains unknown identifier {}",
                           flatbuffers::GetBufferIdentifier(chunk->data()));
  }
  if (auto error = unpack(*flatbuffer, *this))
    return caf::make_error(
      ec::format_error, fmt::format("failed to unpack partition: {}", error));
  return {};
}

partition_actor::behavior_type passive_partition(
  partition_actor::stateful_pointer<passive_partition_state> self, uuid id,
  accountant_actor accountant, store_actor legacy_archive,
  filesystem_actor filesystem, const std::filesystem::path& path) {
  auto id_string = to_string(id);
  self->state.self = self;
  self->state.path = path;
  self->state.accountant = std::move(accountant);
  self->state.archive = std::move(legacy_archive);
  self->state.filesystem = std::move(filesystem);
  self->state.name = "partition-" + id_string;
  VAST_TRACEPOINT(passive_partition_spawned, id_string.c_str());
  self->set_down_handler([=](const caf::down_msg& msg) {
    if (msg.source != self->state.store.address()) {
      VAST_WARN("{} ignores DOWN from unexpected sender: {}", *self,
                msg.reason);
      return;
    }
    VAST_ERROR("{} shuts down after DOWN from {} store: {}", *self,
               self->state.store_id, msg.reason);
    self->quit(msg.reason);
  });
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    VAST_DEBUG("{} received EXIT from {} with reason: {}", *self, msg.source,
               msg.reason);
    self->demonitor(self->state.store->address());
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
          VAST_DEBUG("{} shut down all indexers successfully", *self);
          self->quit();
        },
        [=](const caf::error& err) {
          VAST_ERROR("{} failed to shut down all indexers: {}", *self, err);
          self->quit(err);
        });
  });
  // We send a "read" to the fs actor and upon receiving the result deserialize
  // the flatbuffer and switch to the "normal" partition behavior for responding
  // to queries.
  self->request(self->state.filesystem, caf::infinite, atom::mmap_v, path)
    .then(
      [=](chunk_ptr chunk) {
        VAST_TRACE_SCOPE("{} {}", *self, VAST_ARG(chunk));
        VAST_TRACEPOINT(passive_partition_loaded, id_string.c_str());
        VAST_ASSERT(!self->state.partition_chunk);
        if (!chunk) {
          VAST_ERROR("{} got invalid chunk", *self);
          self->quit();
          return;
        }
        if (auto err = self->state.initialize_from_chunk(chunk)) {
          VAST_ERROR("{} failed to initialize passive partition from file {}: "
                     "{}",
                     *self, path, err);
          self->quit();
          return;
        }
        if (self->state.id != id) {
          VAST_ERROR("unexpected ID for passive partition: expected {}, got {}",
                     id, self->state.id);
          self->quit();
          return;
        }
        if (self->state.store_id == "legacy_archive") {
          self->state.store = self->state.archive;
        } else {
          const auto* plugin
            = plugins::find<store_actor_plugin>(self->state.store_id);
          if (!plugin) {
            auto error = caf::make_error(ec::format_error,
                                         "encountered unhandled store backend");
            VAST_ERROR("{} encountered unknown store backend '{}'", *self,
                       self->state.store_id);
            self->quit(std::move(error));
            return;
          }
          auto store
            = plugin->make_store(self->state.accountant, self->state.filesystem,
                                 self->state.store_header);
          if (!store) {
            VAST_ERROR("{} failed to spawn store: {}", *self, store.error());
            self->quit(caf::make_error(ec::system_error, "failed to spawn "
                                                         "store"));
            return;
          }
          self->state.store = *store;
          self->monitor(self->state.store);
        }
        // Delegate all deferred evaluations now that we have the partition chunk.
        VAST_DEBUG("{} delegates {} deferred evaluations", *self,
                   self->state.deferred_evaluations.size());
        delegate_deferred_requests(self->state);
      },
      [=](caf::error err) {
        VAST_ERROR("{} failed to load partition: {}", *self, err);
        deliver_error_to_deferred_requests(self->state, err);
        // Quit the partition.
        self->quit(std::move(err));
      });
  return {
    [self](atom::query,
           vast::query_context query_context) -> caf::result<uint64_t> {
      VAST_DEBUG("{} received query {}", *self, query_context);
      if (!self->state.partition_chunk) {
        VAST_DEBUG("{} waits for its state", *self);
        return std::get<1>(self->state.deferred_evaluations.emplace_back(
          std::move(query_context), self->make_response_promise<uint64_t>()));
      }
      // We can safely assert that if we have the partition chunk already, all
      // deferred evaluations were taken care of.
      VAST_ASSERT(self->state.deferred_evaluations.empty());
      // Don't handle queries after we already received an exit message, while
      // the terminator is running. Since we require every partition to have at
      // least one indexer, we can use this to check.
      if (self->state.indexers.empty())
        return caf::make_error(ec::system_error, "can not handle query because "
                                                 "shutdown was requested");
      auto rp = self->make_response_promise<uint64_t>();
      // Don't bother with the indexers etc. if we already know the ids
      // we want to retrieve.
      if (!query_context.ids.empty()) {
        if (query_context.expr != vast::expression{})
          return caf::make_error(ec::invalid_argument, "query may only contain "
                                                       "either expression or "
                                                       "ids");
        rp.delegate(self->state.store, atom::query_v, query_context);
        return rp;
      }
      auto start = std::chrono::steady_clock::now();
      auto triples = detail::evaluate(self->state, query_context.expr);
      if (triples.empty()) {
        rp.deliver(uint64_t{0});
        return rp;
      }
      auto ids_for_evaluation
        = detail::get_ids_for_evaluation(self->state.type_ids(), triples);
      auto eval = self->spawn(evaluator, query_context.expr, std::move(triples),
                              std::move(ids_for_evaluation));
      self->request(eval, caf::infinite, atom::run_v)
        .then(
          [self, rp, start,
           query_context = std::move(query_context)](const ids& hits) mutable {
            VAST_DEBUG("{} received results from the evaluator", *self);
            duration runtime = std::chrono::steady_clock::now() - start;
            auto id_str = fmt::to_string(query_context.id);
            self->send(self->state.accountant, atom::metrics_v,
                       "partition.lookup.runtime", runtime,
                       metrics_metadata{
                         {"query", id_str},
                         {"issuer", query_context.issuer},
                         {"partition-type", "passive"},
                       });
            self->send(self->state.accountant, atom::metrics_v,
                       "partition.lookup.hits", rank(hits),
                       metrics_metadata{
                         {"query", std::move(id_str)},
                         {"issuer", query_context.issuer},
                         {"partition-type", "passive"},
                       });
            // TODO: Use the first path if the expression can be evaluated
            // exactly.
            auto* count = caf::get_if<count_query_context>(&query_context.cmd);
            if (count && count->mode == count_query_context::estimate) {
              self->send(count->sink, rank(hits));
              rp.deliver(rank(hits));
            } else {
              query_context.ids = hits;
              rp.delegate(self->state.store, atom::query_v,
                          std::move(query_context));
            }
          },
          [rp](caf::error& err) mutable {
            rp.deliver(std::move(err));
          });
      return rp;
    },
    [self](atom::erase) -> caf::result<atom::done> {
      auto rp = self->make_response_promise<atom::done>();
      if (!self->state.partition_chunk) {
        VAST_DEBUG("{} skips an erase request", *self);
        return self->state.deferred_erasures.emplace_back(std::move(rp));
      }
      VAST_DEBUG("{} received an erase message and deletes {}", *self,
                 self->state.path);
      self
        ->request(self->state.filesystem, caf::infinite, atom::erase_v,
                  self->state.path)
        .then([](atom::done) {},
              [self](const caf::error& err) {
                VAST_WARN("{} failed to delete {}: {}; try deleting manually",
                          *self, self->state.path, err);
              });
      vast::ids all_ids;
      for (const auto& kv : self->state.type_ids_) {
        all_ids |= kv.second;
      }
      self
        ->request(self->state.store, caf::infinite, atom::erase_v,
                  std::move(all_ids))
        .then(
          [rp](uint64_t) mutable {
            rp.deliver(atom::done_v);
          },
          [rp](caf::error& err) mutable {
            rp.deliver(std::move(err));
          });
      return rp;
    },
    [self](atom::status, status_verbosity) -> record {
      record result;
      if (!self->state.partition_chunk) {
        result["state"] = "waiting for chunk";
        return result;
      }
      result["size"] = self->state.partition_chunk->size();
      size_t mem_indexers = 0;
      for (size_t i = 0; i < self->state.indexers.size(); ++i)
        if (self->state.indexers[i])
          mem_indexers += sizeof(indexer_state)
                          + self->state.flatbuffer->indexes()
                              ->Get(i)
                              ->index()
                              ->decompressed_size();
      result["memory-usage-indexers"] = mem_indexers;
      auto x = self->state.partition_chunk->incore();
      if (!x) {
        result["memory-usage-incore"] = fmt::to_string(x.error());
        result["memory-usage"] = self->state.partition_chunk->size()
                                 + mem_indexers + sizeof(self->state);
      } else {
        result["memory-usage-incore"] = *x;
        result["memory-usage"] = *x + mem_indexers + sizeof(self->state);
      }
      return result;
    },
  };
}

} // namespace vast::system
