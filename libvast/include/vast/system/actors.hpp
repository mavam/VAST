//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/aliases.hpp"
#include "vast/atoms.hpp"

#include <caf/inspector_access.hpp>
#include <caf/io/fwd.hpp>
#include <caf/replies_to.hpp>

#include <filesystem>

#define VAST_ADD_TYPE_ID(type) CAF_ADD_TYPE_ID(vast_actors, type)

// NOLINTNEXTLINE(cert-dcl58-cpp)
namespace caf {

template <>
struct inspector_access<std::filesystem::path> {
  template <class Inspector>
  static auto apply(Inspector& f, std::filesystem::path& x) {
    auto str = x.string();
    auto result = f.apply(str);
    if constexpr (Inspector::is_loading)
      x = {str};
    return result;
  }
};

} // namespace caf

namespace vast::system {

/// Helper utility that enables extending typed actor forward declarations
/// without including <caf/typed_actor.hpp>.
template <class... Fs>
struct typed_actor_fwd;

template <class... Fs>
struct typed_actor_fwd {
  template <class Handle>
  struct extend_with_helper;

  template <class... Gs>
  struct extend_with_helper<caf::typed_actor<Gs...>> {
    using type = typed_actor_fwd<Fs..., Gs...>;
  };

  template <class Handle>
  using extend_with = typename extend_with_helper<Handle>::type;

  using unwrap = caf::typed_actor<Fs...>;
  using unwrap_as_broker = caf::io::typed_broker<Fs...>;
};

/// The STREAM SINK actor interface.
/// @tparam Unit The stream unit.
/// @tparam Args... Additional parameters passed using
/// `caf::stream_source::add_outbound_path`.
template <class Unit, class... Args>
using stream_sink_actor = typename typed_actor_fwd<
  // Add a new source.
  typename caf::replies_to<caf::stream<Unit>, Args...>::template with< //
    caf::inbound_stream_slot<Unit>>>::unwrap;

/// The FLUSH LISTENER actor interface.
using flush_listener_actor = typed_actor_fwd<
  // Reacts to the requested flush message.
  caf::reacts_to<atom::flush>>::unwrap;

/// The RECEIVER SINK actor interface.
/// This can be used to avoid defining an opaque alias for a single-handler
/// interface.
/// @tparam T The type of first parameter of the message handler the the actor
///           handle must implement.
/// @tparam Ts... The types of additional parameters for the message handler.
template <class T, class... Ts>
using receiver_actor = typename typed_actor_fwd<
  // Add a new source.
  typename caf::reacts_to<T, Ts...>>::unwrap;

/// The STATUS CLIENT actor interface.
using status_client_actor = typed_actor_fwd<
  // Reply to a status request from the NODE.
  caf::replies_to<atom::status, status_verbosity>::with<record>>::unwrap;

/// The ERASER actor interface.
using eraser_actor = typed_actor_fwd<
  /// The periodic loop of the ERASER.
  caf::reacts_to<atom::ping>,
  // Trigger a new eraser cycle.
  caf::replies_to<atom::run>::with<atom::ok>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The STORE actor interface.
using store_actor = typed_actor_fwd<
  // Handles an extraction for the given expression.
  // TODO: It's a bit weird that the store plugin implementation needs to
  // implement query handling. It may be better to have an API that exposes
  // an mmapped view of the contained table slices; or to provide an opaque
  // callback that the store can use for that.
  caf::replies_to<atom::query, query_context>::with<uint64_t>,
  // TODO: Replace usage of `atom::erase` with `query::erase` in call sites.
  caf::replies_to<atom::erase, ids>::with<uint64_t>>::unwrap;

/// Passive store default implementation actor interface.
using default_passive_store_actor = typed_actor_fwd<
  // Proceed with a previously received `extract` query.
  caf::reacts_to<atom::internal, atom::extract, uuid>,
  // Proceed with a previously received `count` query.
  caf::reacts_to<atom::internal, atom::count, uuid>>
  // Based on the store_actor interface.
  ::extend_with<store_actor>::unwrap;

/// The STORE BUILDER actor interface.
using store_builder_actor = typed_actor_fwd<>::extend_with<store_actor>
  // Conform to the protocol of the STREAM SINK actor for table slices.
  ::extend_with<stream_sink_actor<table_slice>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// Active store default implementation actor interface.
using default_active_store_actor = typed_actor_fwd<
  // Proceed with a previously received `extract` query.
  caf::reacts_to<atom::internal, atom::extract, uuid>,
  // Proceed with a previously received `count` query.
  caf::reacts_to<atom::internal, atom::count, uuid>>
  // Based on the store_builder_actor interface.
  ::extend_with<store_builder_actor>::unwrap;

/// The PARTITION actor interface.
using partition_actor = typed_actor_fwd<
  // Evaluate the given expression and send the matching events to the receiver.
  caf::replies_to<atom::query, query_context>::with<uint64_t>,
  // Delete the whole partition from disk and from the archive
  caf::replies_to<atom::erase>::with<atom::done>>
  // Conform to the procol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The EVALUATOR actor interface.
using evaluator_actor = typed_actor_fwd<
  // Evaluates the expression and responds with matching ids.
  caf::replies_to<atom::run>::with<ids>>::unwrap;

/// The INDEXER actor interface.
using indexer_actor = typed_actor_fwd<
  // Returns the ids for the given predicate.
  caf::replies_to<atom::evaluate, curried_predicate>::with<ids>,
  // Requests the INDEXER to shut down.
  caf::reacts_to<atom::shutdown>>::unwrap;

/// The ACTIVE INDEXER actor interface.
using active_indexer_actor = typed_actor_fwd<
  // Hooks into the table slice column stream.
  caf::replies_to<caf::stream<table_slice_column>>::with<
    caf::inbound_stream_slot<table_slice_column>>,
  // Finalizes the ACTIVE INDEXER into a chunk, which containes an INDEXER.
  caf::replies_to<atom::snapshot>::with<chunk_ptr>>
  // Conform the the INDEXER ACTOR interface.
  ::extend_with<indexer_actor>
  // Conform to the procol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The ACCOUNTANT actor interface.
using accountant_actor = typed_actor_fwd<
  // Update the configuration of the ACCOUNTANT.
  caf::replies_to<atom::config, accountant_config>::with< //
    atom::ok>,
  // Registers the sender with the ACCOUNTANT.
  caf::reacts_to<atom::announce, std::string>,
  // Record duration metric.
  caf::reacts_to<atom::metrics, std::string, duration, metrics_metadata>,
  // Record time metric.
  caf::reacts_to<atom::metrics, std::string, time, metrics_metadata>,
  // Record integer metric.
  caf::reacts_to<atom::metrics, std::string, integer, metrics_metadata>,
  // Record count metric.
  caf::reacts_to<atom::metrics, std::string, count, metrics_metadata>,
  // Record real metric.
  caf::reacts_to<atom::metrics, std::string, real, metrics_metadata>,
  // Record a metrics report.
  caf::reacts_to<atom::metrics, report>,
  // Record a performance report.
  caf::reacts_to<atom::metrics, performance_report>,
  // The internal telemetry loop of the ACCOUNTANT.
  caf::reacts_to<atom::telemetry>>
  // Conform to the procotol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The PARTITION CREATION LISTENER actor interface.
using partition_creation_listener_actor = typed_actor_fwd<
  caf::reacts_to<atom::update, partition_synopsis_pair>,
  caf::reacts_to<atom::update, std::vector<partition_synopsis_pair>>>::unwrap;

/// The CATALOG actor interface.
using catalog_actor = typed_actor_fwd<
  // Reinitialize the catalog from a set of partition synopses. Used at
  // startup, so the map is expected to be huge and we use a shared_ptr
  // to be sure it's not accidentally copied.
  caf::replies_to<
    atom::merge,
    std::shared_ptr<std::map<uuid, partition_synopsis_ptr>>>::with<atom::ok>,
  // Merge a single partition synopsis.
  caf::replies_to<atom::merge, uuid, partition_synopsis_ptr>::with<atom::ok>,
  // Merge a set of partition synopsis.
  caf::replies_to<atom::merge,
                  std::vector<augmented_partition_synopsis>>::with<atom::ok>,
  // Get *ALL* partition synopses stored in the catalog.
  caf::replies_to<atom::get>::with<std::vector<partition_synopsis_pair>>,
  // Erase a single partition synopsis.
  caf::replies_to<atom::erase, uuid>::with<atom::ok>,
  // Atomatically replace a set of partititon synopses with another.
  caf::replies_to<atom::replace, std::vector<uuid>,
                  std::vector<augmented_partition_synopsis>>::with<atom::ok>,
  // Return the candidate partitions for a query.
  caf::replies_to<atom::candidates, vast::query_context>::with<catalog_result>,
  // Internal telemetry loop.
  caf::reacts_to<atom::telemetry>>
  // Conform to the procotol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The interface of an IMPORTER actor.
using importer_actor = typed_actor_fwd<
  // Register the ACCOUNTANT actor.
  caf::reacts_to<accountant_actor>,
  // Add a new sink.
  caf::replies_to<stream_sink_actor<table_slice>>::with< //
    caf::outbound_stream_slot<table_slice>>,
  // Register a FLUSH LISTENER actor.
  caf::reacts_to<atom::subscribe, atom::flush, flush_listener_actor>,
  // The internal telemetry loop of the IMPORTER.
  caf::reacts_to<atom::telemetry>>
  // Conform to the protocol of the STREAM SINK actor for table slices.
  ::extend_with<stream_sink_actor<table_slice>>
  // Conform to the protocol of the STREAM SINK actor for table slices with a
  // description.
  ::extend_with<stream_sink_actor<table_slice, std::string>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The INDEX actor interface.
using index_actor = typed_actor_fwd<
  // Triggered when the INDEX finished querying a PARTITION.
  caf::reacts_to<atom::done, uuid>,
  // INTERNAL: Telemetry loop handler.
  caf::reacts_to<atom::telemetry>,
  // Subscribes a FLUSH LISTENER to the INDEX.
  caf::reacts_to<atom::subscribe, atom::flush, flush_listener_actor>,
  // Subscribes a PARTITION CREATION LISTENER to the INDEX.
  caf::reacts_to<atom::subscribe, atom::create,
                 partition_creation_listener_actor, send_initial_dbstate>,
  // Evaluates a query, ie. sends matching events to the caller.
  caf::replies_to<atom::evaluate, query_context>::with<query_cursor>,
  // Resolves a query to its candidate partitions.
  // TODO: Expose the catalog as a system component so this
  // handler can go directly to the catalog.
  caf::replies_to<atom::resolve, expression>::with<catalog_result>,
  // Queries PARTITION actors for a given query id.
  caf::reacts_to<atom::query, uuid, uint32_t>,
  // Erases the given partition from the INDEX.
  caf::replies_to<atom::erase, uuid>::with<atom::done>,
  // Erases the given set of partitions from the INDEX.
  caf::replies_to<atom::erase, std::vector<uuid>>::with<atom::done>,
  // Applies the given pipelineation to the partition.
  // When keep_original_partition is yes: erases the existing partition and
  // returns the synopsis of the new partition. If the partition is completely
  // erased, returns the nil uuid. When keep_original_partition is no: does an
  // in-place pipeline keeping the old ids, and makes a new partition
  // preserving the old one(s).
  caf::replies_to<atom::apply, pipeline_ptr, std::vector<uuid>,
                  keep_original_partition>::with<std::vector<partition_info>>,
  // Decomissions all active partitions, effectively flushing them to disk.
  caf::reacts_to<atom::flush>>
  // Conform to the protocol of the STREAM SINK actor for table slices.
  ::extend_with<stream_sink_actor<table_slice>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The ARCHIVE actor interface.
using archive_actor = typed_actor_fwd<
  // Registers the ARCHIVE with the ACCOUNTANT.
  caf::reacts_to<atom::set, accountant_actor>,
  // INTERNAL: Handles a query for the given ids, and sends the table slices
  // back to the client.
  caf::reacts_to<atom::internal, atom::resume>,
  // The internal telemetry loop of the ARCHIVE.
  caf::reacts_to<atom::telemetry>>
  // Conform to the protocol of the STORE BUILDER actor.
  ::extend_with<store_builder_actor>::unwrap;

/// The TYPE REGISTRY actor interface.
using type_registry_actor = typed_actor_fwd<
  // The internal telemetry loop of the TYPE REGISTRY.
  caf::reacts_to<atom::telemetry>,
  // Retrieves all known types.
  caf::replies_to<atom::get>::with<type_set>,
  // Registers the given taxonomies.
  caf::reacts_to<atom::put, taxonomies>,
  // Registers a given layout.
  caf::reacts_to<atom::put, vast::type>,
  // Retrieves the known taxonomies.
  caf::replies_to<atom::get, atom::taxonomies>::with< //
    taxonomies>,
  // Loads the taxonomies on disk.
  caf::replies_to<atom::load>::with< //
    atom::ok>,
  // Resolves an expression in terms of the known taxonomies.
  caf::replies_to<atom::resolve, expression>::with< //
    expression>,
  // Registers the TYPE REGISTRY with the ACCOUNTANT.
  caf::reacts_to<atom::set, accountant_actor>>
  // Conform to the procotol of the STREAM SINK actor for table slices,
  ::extend_with<stream_sink_actor<table_slice>>
  // Conform to the procotol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The DISK MONITOR actor interface.
using disk_monitor_actor = typed_actor_fwd<
  // Checks the monitoring requirements.
  caf::reacts_to<atom::ping>,
  // Purge events as required for the monitoring requirements.
  caf::reacts_to<atom::erase>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The interface for file system I/O. The filesystem actor implementation
/// must interpret all operations that contain paths *relative* to its own
/// root directory.
using filesystem_actor = typed_actor_fwd<
  // Writes a chunk of data to a given path. Creates intermediate directories
  // if needed.
  caf::replies_to<atom::write, std::filesystem::path, chunk_ptr>::with< //
    atom::ok>,
  // Reads a chunk of data from a given path and returns the chunk.
  caf::replies_to<atom::read, std::filesystem::path>::with< //
    chunk_ptr>,
  // Moves a file on the fielsystem.
  caf::replies_to<atom::move, std::filesystem::path,
                  std::filesystem::path>::with< //
    atom::done>,
  // Moves a file on the fielsystem.
  caf::replies_to<
    atom::move,
    std::vector<std::pair<std::filesystem::path, std::filesystem::path>>>::with< //
    atom::done>,
  // Memory-maps a file.
  caf::replies_to<atom::mmap, std::filesystem::path>::with< //
    chunk_ptr>,
  // Deletes a file.
  caf::replies_to<atom::erase, std::filesystem::path>::with< //
    atom::done>,
  // The internal telemetry loop of the filesystem.
  caf::reacts_to<atom::telemetry>>
  // Conform to the procotol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The interface of an BULK PARTITION actor.
using partition_transformer_actor = typed_actor_fwd<
  // Persist the transformed partitions and return the generated
  // partition synopses.
  caf::replies_to<atom::persist>::with<std::vector<augmented_partition_synopsis>>,
  // INTERNAL: Continuation handler for `atom::done`.
  caf::reacts_to<atom::internal, atom::resume, atom::done>>
  // extract_query_context API
  ::extend_with<receiver_actor<table_slice>>
  // Receive a completion signal for the input stream.
  ::extend_with<receiver_actor<atom::done>>::unwrap;

/// The interface of an ACTIVE PARTITION actor.
using active_partition_actor = typed_actor_fwd<
  caf::reacts_to<atom::subscribe, atom::flush, flush_listener_actor>,
  // Persists the active partition at the specified path.
  caf::replies_to<atom::persist, std::filesystem::path,
                  std::filesystem::path> //
  ::with<partition_synopsis_ptr>,
  // INTERNAL: A repeatedly called continuation of the persist request.
  caf::reacts_to<atom::internal, atom::persist, atom::resume>>
  // Conform to the protocol of the STREAM SINK actor for table slices.
  ::extend_with<stream_sink_actor<table_slice>>
  // Conform to the protocol of the PARTITION actor.
  ::extend_with<partition_actor>::unwrap;

/// The interface of the EXPORTER actor.
using exporter_actor = typed_actor_fwd<
  // Request extraction of all events.
  caf::reacts_to<atom::extract>,
  // Request extraction of the given number of events.
  caf::reacts_to<atom::extract, uint64_t>,
  // Register the ACCOUNTANT actor.
  caf::reacts_to<atom::set, accountant_actor>,
  // Register the INDEX actor.
  caf::reacts_to<atom::set, index_actor>,
  // Register the SINK actor.
  caf::reacts_to<atom::sink, caf::actor>,
  // Execute previously registered query.
  caf::reacts_to<atom::run>,
  // Execute previously registered query.
  caf::reacts_to<atom::done>,
  // Register a STATISTICS SUBSCRIBER actor.
  caf::reacts_to<atom::statistics, caf::actor>>
  // Receive a table slice that belongs to a query.
  ::extend_with<receiver_actor<table_slice>>
  // Conform to the protocol of the STREAM SINK actor for table slices.
  ::extend_with<stream_sink_actor<table_slice>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The interface of a REST HANDLER actor.
using rest_handler_actor = system::typed_actor_fwd<
  // Receive an incoming HTTP request.
  caf::reacts_to<atom::http_request, uint64_t, http_request>>::unwrap;

/// The interface of a COMPONENT PLUGIN actor.
using component_plugin_actor = typed_actor_fwd<>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The interface of an ANALYZER PLUGIN actor.
using analyzer_plugin_actor = typed_actor_fwd<>
  // Conform to the protocol of the STREAM SINK actor for table slices.
  ::extend_with<stream_sink_actor<table_slice>>
  // Conform to the protocol of the COMPONENT PLUGIN actor.
  ::extend_with<component_plugin_actor>::unwrap;

/// The interface of a SOURCE actor.
using source_actor = typed_actor_fwd<
  // INTERNAL: Progress.
  caf::reacts_to<atom::internal, atom::run, uint64_t>,
  // Retrieve the currently used module of the SOURCE.
  caf::replies_to<atom::get, atom::module>::with<module>,
  // Update the currently used module of the SOURCE.
  caf::reacts_to<atom::put, module>,
  // Update the expression used for filtering data in the SOURCE.
  caf::reacts_to<atom::normalize, expression>,
  // Set up a new stream sink for the generated data.
  caf::reacts_to<stream_sink_actor<table_slice, std::string>>,
  // INTERNAL: Cause the source to wake up.
  caf::reacts_to<atom::wakeup>,
  // INTERNAL: Telemetry loop handler.
  caf::reacts_to<atom::telemetry>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The interface of a DATAGRAM SOURCE actor.
using datagram_source_actor
  // Reacts to datagram messages.
  = typed_actor_fwd<caf::reacts_to<caf::io::new_datagram_msg>>
  // Conform to the protocol of the SOURCE actor.
  ::extend_with<source_actor>::unwrap_as_broker;

/// The interface of an TRANSFORMER actor.
using transformer_actor = typed_actor_fwd<
  // Send transformed slices to this sink.
  caf::replies_to<stream_sink_actor<table_slice>>::with< //
    caf::outbound_stream_slot<table_slice>>,
  // Send transformed slices to this sink; pass the string through along with
  // the stream handshake.
  caf::reacts_to<stream_sink_actor<table_slice, std::string>, std::string>>
  // Conform to the protocol of the STREAM SINK actor for framed table slices
  ::extend_with<stream_sink_actor<detail::framed<table_slice>>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The interface of the NODE actor.
using node_actor = typed_actor_fwd<
  // Run an invocation in the node.
  caf::replies_to<atom::run, invocation>::with< //
    caf::message>,
  // INTERNAL: Spawn component plugins.
  caf::reacts_to<atom::internal, atom::spawn, atom::plugin>,
  // Run an invocation in the node that spawns an actor.
  caf::replies_to<atom::spawn, invocation>::with< //
    caf::actor>,
  // Add a component to the component registry.
  caf::replies_to<atom::put, caf::actor, std::string>::with< //
    atom::ok>,
  // Retrieve components by their type from the component registry.
  caf::replies_to<atom::get, atom::type, std::string>::with< //
    std::vector<caf::actor>>,
  // Retrieve a component by its label from the component registry.
  caf::replies_to<atom::get, atom::label, std::string>::with< //
    caf::actor>,
  // Retrieve components by their label from the component registry.
  caf::replies_to<atom::get, atom::label, std::vector<std::string>>::with< //
    std::vector<caf::actor>>,
  // Retrieve the version of the process running the NODE.
  caf::replies_to<atom::get, atom::version>::with<record>,
  // Retrieve the configuration of the NODE.
  caf::replies_to<atom::config>::with<record>,
  // Handle a signal.
  // TODO: Make this a signal_monitor_client_actor
  caf::reacts_to<atom::signal, int>>::unwrap;

using terminator_actor = typed_actor_fwd<
  // Shut down the given actors.
  caf::replies_to<atom::shutdown,
                  std::vector<caf::actor>>::with<atom::done>>::unwrap;

} // namespace vast::system

// -- type announcements -------------------------------------------------------

CAF_BEGIN_TYPE_ID_BLOCK(vast_actors, caf::id_block::vast_atoms::end)

  VAST_ADD_TYPE_ID((std::filesystem::path))
  VAST_ADD_TYPE_ID(
    (std::vector<std::pair<std::filesystem::path, std::filesystem::path>>))

  VAST_ADD_TYPE_ID((vast::system::accountant_actor))
  VAST_ADD_TYPE_ID((vast::system::active_indexer_actor))
  VAST_ADD_TYPE_ID((vast::system::active_partition_actor))
  VAST_ADD_TYPE_ID((vast::system::analyzer_plugin_actor))
  VAST_ADD_TYPE_ID((vast::system::archive_actor))
  VAST_ADD_TYPE_ID((vast::system::catalog_actor))
  VAST_ADD_TYPE_ID((vast::system::default_active_store_actor))
  VAST_ADD_TYPE_ID((vast::system::default_passive_store_actor))
  VAST_ADD_TYPE_ID((vast::system::disk_monitor_actor))
  VAST_ADD_TYPE_ID((vast::system::evaluator_actor))
  VAST_ADD_TYPE_ID((vast::system::exporter_actor))
  VAST_ADD_TYPE_ID((vast::system::filesystem_actor))
  VAST_ADD_TYPE_ID((vast::system::flush_listener_actor))
  VAST_ADD_TYPE_ID((vast::system::importer_actor))
  VAST_ADD_TYPE_ID((vast::system::index_actor))
  VAST_ADD_TYPE_ID((vast::system::indexer_actor))
  VAST_ADD_TYPE_ID((vast::system::node_actor))
  VAST_ADD_TYPE_ID((vast::system::partition_actor))
  VAST_ADD_TYPE_ID((vast::system::partition_creation_listener_actor))
  VAST_ADD_TYPE_ID((vast::system::receiver_actor<vast::atom::done>))
  VAST_ADD_TYPE_ID((vast::system::rest_handler_actor))
  VAST_ADD_TYPE_ID((vast::system::status_client_actor))
  VAST_ADD_TYPE_ID((vast::system::stream_sink_actor<vast::table_slice>))
  VAST_ADD_TYPE_ID(
    (vast::system::stream_sink_actor<vast::table_slice, std::string>))
  VAST_ADD_TYPE_ID((vast::system::type_registry_actor))

CAF_END_TYPE_ID_BLOCK(vast_actors)

// Used in the interface of the catalog actor.
// We can't provide a meaningful implementation of `inspect()` for a shared_ptr,
// so so we add these as `UNSAFE_MESSAGE_TYPE` to assure caf that they will
// never be sent over the network.
#define vast_uuid_synopsis_map                                                 \
  std::map<vast::uuid, vast::partition_synopsis_ptr>
CAF_ALLOW_UNSAFE_MESSAGE_TYPE(std::shared_ptr<vast_uuid_synopsis_map>)
CAF_ALLOW_UNSAFE_MESSAGE_TYPE(vast::partition_synopsis_ptr)
CAF_ALLOW_UNSAFE_MESSAGE_TYPE(vast::partition_synopsis_pair)
CAF_ALLOW_UNSAFE_MESSAGE_TYPE(std::vector<vast::partition_synopsis_pair>)
CAF_ALLOW_UNSAFE_MESSAGE_TYPE(vast::augmented_partition_synopsis)
CAF_ALLOW_UNSAFE_MESSAGE_TYPE(std::vector<vast::augmented_partition_synopsis>)
CAF_ALLOW_UNSAFE_MESSAGE_TYPE(vast::pipeline_ptr)
CAF_ALLOW_UNSAFE_MESSAGE_TYPE(vast::http_request)
#undef vast_uuid_synopsis_map

#undef VAST_ADD_TYPE_ID
