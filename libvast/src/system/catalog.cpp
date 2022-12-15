//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2018 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/system/catalog.hpp"

#include "vast/as_bytes.hpp"
#include "vast/concept/convertible/data.hpp"
#include "vast/data.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/fill_status_map.hpp"
#include "vast/detail/legacy_deserialize.hpp"
#include "vast/detail/overload.hpp"
#include "vast/detail/set_operations.hpp"
#include "vast/detail/stable_set.hpp"
#include "vast/detail/tracepoint.hpp"
#include "vast/error.hpp"
#include "vast/event_types.hpp"
#include "vast/expression.hpp"
#include "vast/fbs/type_registry.hpp"
#include "vast/flatbuffer.hpp"
#include "vast/io/read.hpp"
#include "vast/io/save.hpp"
#include "vast/legacy_type.hpp"
#include "vast/logger.hpp"
#include "vast/partition_synopsis.hpp"
#include "vast/prune.hpp"
#include "vast/query_context.hpp"
#include "vast/synopsis.hpp"
#include "vast/system/actors.hpp"
#include "vast/system/instrumentation.hpp"
#include "vast/system/report.hpp"
#include "vast/system/status.hpp"
#include "vast/taxonomies.hpp"

#include <caf/binary_serializer.hpp>
#include <caf/detail/set_thread_name.hpp>
#include <caf/expected.hpp>

#include <type_traits>

namespace vast::system {
void catalog_state::create_from(std::map<uuid, partition_synopsis_ptr>&& ps) {
  std::vector<std::pair<uuid, partition_synopsis_ptr>> flat_data;
  for (auto&& [uuid, synopsis] : std::move(ps)) {
    VAST_ASSERT(synopsis->get_reference_count() == 1ull);
    flat_data.emplace_back(uuid, std::move(synopsis));
  }
  std::sort(flat_data.begin(), flat_data.end(),
            [](const std::pair<uuid, partition_synopsis_ptr>& lhs,
               const std::pair<uuid, partition_synopsis_ptr>& rhs) {
              return lhs.first < rhs.first;
            });
  synopses = decltype(synopses)::make_unsafe(std::move(flat_data));
  for (auto const& [_, synopsis] : synopses)
    update_unprunable_fields(*synopsis);
}

void catalog_state::merge(const uuid& partition, partition_synopsis_ptr ps) {
  update_unprunable_fields(*ps);
  synopses.emplace(partition, std::move(ps));
}

partition_synopsis_ptr& catalog_state::at(const uuid& partition) {
  return synopses.at(partition);
}

void catalog_state::erase(const uuid& partition) {
  synopses.erase(partition);
}

catalog_result catalog_state::lookup(const expression& expr) const {
  auto start = system::stopwatch::now();
  auto pruned = prune(expr, unprunable_fields);
  auto result = lookup_impl(pruned);
  // Sort partitions by their max import time, returning the most recent
  // partitions first.
  std::sort(result.begin(), result.end(),
            [&](const partition_info& lhs, const partition_info& rhs) {
              return lhs.max_import_time > rhs.max_import_time;
            });
  auto delta = std::chrono::duration_cast<std::chrono::microseconds>(
    system::stopwatch::now() - start);
  VAST_DEBUG("catalog lookup found {} candidates in {} microseconds",
             result.size(), delta.count());
  VAST_TRACEPOINT(catalog_lookup, delta.count(), result.size());
  // TODO: This is correct because every exact result can be regarded as a
  // probabilistic result with zero false positives, but it is a
  // pessimization.
  // We should analyze the query here to see whether it's probabilistic or
  // exact. An exact query consists of a disjunction of exact synopses or
  // an explicit set of ids.
  return catalog_result{catalog_result::probabilistic, std::move(result)};
}

std::vector<partition_info>
catalog_state::lookup_impl(const expression& expr) const {
  VAST_ASSERT(!caf::holds_alternative<caf::none_t>(expr));
  // The partition UUIDs must be sorted, otherwise the invariants of the
  // inplace union and intersection algorithms are violated, leading to
  // wrong results. So all places where we return an assembled set must
  // ensure the post-condition of returning a sorted list. We currently
  // rely on `flat_map` already traversing them in the correct order, so
  // no separate sorting step is required.
  using result_type = std::vector<partition_info>;
  result_type memoized_partitions = {};
  auto all_partitions = [&] {
    if (!memoized_partitions.empty() || synopses.empty())
      return memoized_partitions;
    memoized_partitions.reserve(synopses.size());
    for (const auto& [partition, synopsis] : synopses) {
      memoized_partitions.emplace_back(partition, synopsis->events,
                                       synopsis->max_import_time,
                                       synopsis->schema, synopsis->version);
    }
    return memoized_partitions;
  };
  auto f = detail::overload{
    [&](const conjunction& x) -> result_type {
      VAST_ASSERT(!x.empty());
      auto i = x.begin();
      auto result = lookup_impl(*i);
      if (!result.empty())
        for (++i; i != x.end(); ++i) {
          // TODO: A conjunction means that we can restrict the lookup to the
          // remaining candidates. This could be achived by passing the `result`
          // set to `lookup` along with the child expression.
          auto xs = lookup_impl(*i);
          if (xs.empty())
            return xs; // short-circuit
          detail::inplace_intersect(result, xs);
          VAST_ASSERT(std::is_sorted(result.begin(), result.end()));
        }
      return result;
    },
    [&](const disjunction& x) -> result_type {
      result_type result;
      auto string_synopsis_memo = detail::stable_set<std::string>{};
      for (const auto& op : x) {
        // TODO: A disjunction means that we can restrict the lookup to the
        // set of partitions that are outside of the current result set.
        auto xs = lookup_impl(op);
        VAST_ASSERT(std::is_sorted(xs.begin(), xs.end()));
        if (xs.size() == synopses.size())
          return xs; // short-circuit
        detail::inplace_unify(result, xs);
        VAST_ASSERT(std::is_sorted(result.begin(), result.end()));
      }
      return result;
    },
    [&](const negation&) -> result_type {
      // We cannot handle negations, because a synopsis may return false
      // positives, and negating such a result may cause false
      // negatives.
      // TODO: The above statement seems to only apply to bloom filter
      // synopses, but it should be possible to handle time or bool synopses.
      return all_partitions();
    },
    [&](const predicate& x) -> result_type {
      // Performs a lookup on all *matching* synopses with operator and
      // data from the predicate of the expression. The match function
      // uses a qualified_record_field to determine whether the synopsis
      // should be queried.
      auto search = [&](auto match) {
        VAST_ASSERT(caf::holds_alternative<data>(x.rhs));
        const auto& rhs = caf::get<data>(x.rhs);
        result_type result;
        for (const auto& [part_id, part_syn] : synopses) {
          for (const auto& [field, syn] : part_syn->field_synopses_) {
            if (match(field)) {
              // We need to prune the type's metadata here by converting it to a
              // concrete type and back, because the type synopses are looked up
              // independent from names and attributes.
              auto prune = [&]<concrete_type T>(const T& x) {
                return type{x};
              };
              auto cleaned_type = caf::visit(prune, field.type());
              // We rely on having a field -> nullptr mapping here for the
              // fields that don't have their own synopsis.
              if (syn) {
                auto opt = syn->lookup(x.op, make_view(rhs));
                if (!opt || *opt) {
                  VAST_TRACE("{} selects {} at predicate {}",
                             detail::pretty_type_name(this), part_id, x);
                  result.emplace_back(part_id, part_syn->events,
                                      part_syn->max_import_time,
                                      part_syn->schema, part_syn->version);
                  break;
                }
                // The field has no dedicated synopsis. Check if there is one
                // for the type in general.
              } else if (auto it = part_syn->type_synopses_.find(cleaned_type);
                         it != part_syn->type_synopses_.end() && it->second) {
                auto opt = it->second->lookup(x.op, make_view(rhs));
                if (!opt || *opt) {
                  VAST_TRACE("{} selects {} at predicate {}",
                             detail::pretty_type_name(this), part_id, x);
                  result.emplace_back(part_id, part_syn->events,
                                      part_syn->max_import_time,
                                      part_syn->schema, part_syn->version);
                  break;
                }
              } else {
                // The catalog couldn't rule out this partition, so we have
                // to include it in the result set.
                result.emplace_back(part_id, part_syn->events,
                                    part_syn->max_import_time, part_syn->schema,
                                    part_syn->version);
                break;
              }
            }
          }
        }
        VAST_DEBUG(
          "{} checked {} partitions for predicate {} and got {} results",
          detail::pretty_type_name(this), synopses.size(), x, result.size());
        // Some calling paths require the result to be sorted.
        VAST_ASSERT(std::is_sorted(result.begin(), result.end()));
        return result;
      };
      auto extract_expr = detail::overload{
        [&](const meta_extractor& lhs, const data& d) -> result_type {
          if (lhs.kind == meta_extractor::type) {
            // We don't have to look into the synopses for type queries, just
            // at the layout names.
            result_type result;
            for (const auto& [part_id, part_syn] : synopses) {
              for (const auto& [fqf, _] : part_syn->field_synopses_) {
                // TODO: provide an overload for view of evaluate() so that
                // we can use string_view here. Fortunately type names are
                // short, so we're probably not hitting the allocator due to
                // SSO.
                if (evaluate(std::string{fqf.layout_name()}, x.op, d)) {
                  result.emplace_back(part_id, part_syn->events,
                                      part_syn->max_import_time,
                                      part_syn->schema, part_syn->version);
                  break;
                }
              }
            }
            VAST_ASSERT(std::is_sorted(result.begin(), result.end()));
            return result;
          }
          if (lhs.kind == meta_extractor::import_time) {
            result_type result;
            for (const auto& [part_id, part_syn] : synopses) {
              VAST_ASSERT(part_syn->min_import_time
                            <= part_syn->max_import_time,
                          "encountered empty or moved-from partition synopsis");
              auto ts = time_synopsis{
                part_syn->min_import_time,
                part_syn->max_import_time,
              };
              auto add = ts.lookup(x.op, caf::get<vast::time>(d));
              if (!add || *add) {
                result.emplace_back(part_id, part_syn->events,
                                    part_syn->max_import_time, part_syn->schema,
                                    part_syn->version);
              }
            }
            VAST_ASSERT(std::is_sorted(result.begin(), result.end()));
            return result;
          }
          VAST_WARN("{} cannot process meta extractor: {}",
                    detail::pretty_type_name(this), lhs.kind);
          return all_partitions();
        },
        [&](const field_extractor& lhs, const data& d) -> result_type {
          auto pred = [&](const auto& field) {
            auto match_name = [&] {
              auto field_name = field.field_name();
              auto key = std::string_view{lhs.field};
              if (field_name.length() >= key.length()) {
                auto pos = field_name.length() - key.length();
                auto sub = field_name.substr(pos);
                return sub == key && (pos == 0 || field_name[pos - 1] == '.');
              }
              auto layout_name = field.layout_name();
              if (key.length() > layout_name.length() + 1 + field_name.length())
                return false;
              auto pos = key.length() - field_name.length();
              auto second = key.substr(pos);
              if (second != field_name)
                return false;
              if (key[pos - 1] != '.')
                return false;
              auto fpos = layout_name.length() - (pos - 1);
              return key.substr(0, pos - 1) == layout_name.substr(fpos)
                     && (fpos == 0 || layout_name[fpos - 1] == '.');
            };
            if (!match_name())
              return false;
            VAST_ASSERT(!field.is_standalone_type());
            return compatible(field.type(), x.op, d);
          };
          return search(pred);
        },
        [&](const type_extractor& lhs, const data& d) -> result_type {
          auto result = [&] {
            if (!lhs.type) {
              auto pred = [&](auto& field) {
                const auto type = field.type();
                for (const auto& name : type.names())
                  if (name == lhs.type.name())
                    return compatible(type, x.op, d);
                return false;
              };
              return search(pred);
            }
            auto pred = [&](auto& field) {
              return congruent(field.type(), lhs.type);
            };
            return search(pred);
          }();
          // Preserve compatibility with databases that were created beore
          // the #timestamp attribute was removed.
          if (lhs.type.name() == "timestamp") {
            auto pred = [](auto& field) {
              const auto type = field.type();
              return type.attribute("timestamp").has_value();
            };
            detail::inplace_unify(result, search(pred));
          }
          return result;
        },
        [&](const auto&, const auto&) -> result_type {
          VAST_WARN("{} cannot process predicate: {}",
                    detail::pretty_type_name(this), x);
          return all_partitions();
        },
      };
      return caf::visit(extract_expr, x.lhs, x.rhs);
    },
    [&](caf::none_t) -> result_type {
      VAST_ERROR("{} received an empty expression",
                 detail::pretty_type_name(this));
      VAST_ASSERT(!"invalid expression");
      return all_partitions();
    },
  };
  return caf::visit(f, expr);
}

size_t catalog_state::memusage() const {
  size_t result = 0;
  for (const auto& [id, partition_synopsis] : synopses)
    result += partition_synopsis->memusage();
  return result;
}

void catalog_state::update_unprunable_fields(const partition_synopsis& ps) {
  for (auto const& [field, synopsis] : ps.field_synopses_)
    if (synopsis != nullptr && field.type() == string_type{})
      unprunable_fields.insert(std::string{field.name()});
  // TODO/BUG: We also need to prevent pruning for enum types,
  // which also use string literals for lookup. We must be even
  // more strict here than with string fields, because incorrectly
  // pruning string fields will only cause false positives, but
  // incorrectly pruning enum fields can actually cause false negatives.
  //
  // else if (field.type() == enumeration_type{}) {
  //   auto full_name = field.name();
  //   for (auto suffix : detail::all_suffixes(full_name, "."))
  //     unprunable_fields.insert(suffix);
  // }
}

std::filesystem::path catalog_state::type_registry_filename() const {
  return type_registry_dir / fmt::format("type-registry.reg", name);
}

caf::error catalog_state::save_type_registry_to_disk() const {
  auto builder = flatbuffers::FlatBufferBuilder{};
  auto entry_offsets
    = std::vector<flatbuffers::Offset<fbs::type_registry::Entry>>{};
  for (const auto& [key, types] : type_data) {
    const auto key_offset = builder.CreateString(key);
    auto type_offsets = std::vector<flatbuffers::Offset<fbs::TypeBuffer>>{};
    type_offsets.reserve(types.size());
    for (const auto& type : types) {
      const auto type_bytes = as_bytes(type);
      const auto type_offset = fbs::CreateTypeBuffer(
        builder, builder.CreateVector(
                   reinterpret_cast<const uint8_t*>(type_bytes.data()),
                   type_bytes.size()));
      type_offsets.push_back(type_offset);
    }
    const auto types_offset = builder.CreateVector(type_offsets);
    const auto entry_offset
      = fbs::type_registry::CreateEntry(builder, key_offset, types_offset);
    entry_offsets.push_back(entry_offset);
  }
  const auto entries_offset = builder.CreateVector(entry_offsets);
  const auto type_registry_v0_offset
    = fbs::type_registry::Createv0(builder, entries_offset);
  const auto type_registry_offset = fbs::CreateTypeRegistry(
    builder, fbs::type_registry::TypeRegistry::type_registry_v0,
    type_registry_v0_offset.Union());
  fbs::FinishTypeRegistryBuffer(builder, type_registry_offset);
  auto buffer = builder.Release();
  return io::save(type_registry_filename(), as_bytes(buffer));
}

caf::error catalog_state::load_type_registry_from_disk() {
  // Nothing to load is not an error.
  std::error_code err{};
  const auto dir_exists = std::filesystem::exists(type_registry_dir, err);
  if (err)
    return caf::make_error(ec::filesystem_error,
                           fmt::format("failed to find directory {}: {}",
                                       type_registry_dir, err.message()));
  if (!dir_exists) {
    VAST_DEBUG("{} found no directory to load from", *self);
    return caf::none;
  }
  // Support the legacy CAF-serialized state, and delete it afterwards.
  {
    const auto fname = type_registry_dir / name;
    const auto file_exists = std::filesystem::exists(fname, err);
    if (err)
      return caf::make_error(ec::filesystem_error,
                             fmt::format("failed while trying to find file {}: "
                                         "{}",
                                         fname, err.message()));
    if (file_exists) {
      auto buffer = io::read(fname);
      if (!buffer)
        return buffer.error();
      std::map<std::string, detail::stable_set<legacy_type>> intermediate = {};
      if (!detail::legacy_deserialize(*buffer, intermediate))
        return caf::make_error(ec::parse_error, "failed to load legacy "
                                                "type-registry state");
      for (const auto& [k, vs] : intermediate) {
        auto entry = type_set{};
        for (const auto& v : vs)
          entry.emplace(type::from_legacy_type(v));
        type_data.emplace(k, entry);
      }
      VAST_DEBUG("{} loaded state from disk", *self);
      // We save the new state already now before removing the old state just to
      // be save against crashes.
      if (auto err = save_type_registry_to_disk())
        return err;
      if (!std::filesystem::remove(fname, err) || err)
        VAST_DEBUG("failed to delete legacy type-registry state");
      return caf::none;
    }
  }
  // Support the new FlatBuffers state.
  {
    const auto fname = type_registry_filename();
    const auto file_exists = std::filesystem::exists(fname, err);
    if (err)
      return caf::make_error(ec::filesystem_error,
                             fmt::format("failed while trying to find file {}: "
                                         "{}",
                                         fname, err.message()));
    if (file_exists) {
      auto buffer = io::read(fname);
      if (!buffer)
        return buffer.error();
      auto maybe_flatbuffer
        = flatbuffer<fbs::TypeRegistry>::make(chunk::make(std::move(*buffer)));
      if (!maybe_flatbuffer)
        return maybe_flatbuffer.error();
      const auto flatbuffer = std::move(*maybe_flatbuffer);
      for (const auto& entry :
           *flatbuffer->type_as_type_registry_v0()->entries()) {
        auto types = type_set{};
        for (const auto& value : *entry->values())
          types.emplace(
            type{flatbuffer.chunk()->slice(as_bytes(*value->buffer()))});
        type_data.emplace(entry->key()->string_view(), std::move(types));
      }
      VAST_DEBUG("{} loaded state from disk", *self);
    }
  }
  return caf::none;
}

void catalog_state::insert(vast::type layout) {
  auto& old_layouts = type_data[std::string{layout.name()}];
  // Insert into the existing bucket.
  auto [hint, success] = old_layouts.insert(std::move(layout));
  if (success) {
    // Check whether the new layout is compatible with the latest, i.e., whether
    // the new layout is a superset of it.
    if (old_layouts.begin() != hint) {
      if (!is_subset(*old_layouts.begin(), *hint))
        VAST_WARN("{} detected an incompatible layout change for {}", *self,
                  hint->name());
      else
        VAST_INFO("{} detected a layout change for {}", *self, hint->name());
    }
    VAST_DEBUG("{} registered {}", *self, hint->name());
  }
  // Move the newly inserted layout to the front.
  std::rotate(old_layouts.begin(), hint, std::next(hint));
}

type_set catalog_state::types() const {
  auto result = type_set{};
  for (const auto& x : configuration_module)
    result.insert(x);
  return result;
}

catalog_actor::behavior_type
catalog(catalog_actor::stateful_pointer<catalog_state> self,
        accountant_actor accountant,
        const std::filesystem::path& type_reg_dir) {
  if (self->getf(caf::local_actor::is_detached_flag))
    caf::detail::set_thread_name("vast.catalog");
  self->state.self = self;
  self->state.type_registry_dir = type_reg_dir;
  // Register the exit handler.
  self->set_exit_handler([self](const caf::exit_msg& msg) {
    VAST_DEBUG("{} got EXIT from {}", *self, msg.source);
    if (auto err = self->state.save_type_registry_to_disk())
      VAST_ERROR("{} failed to persist state to disk: {}", *self, err);
    self->quit(msg.reason);
  });
  // Load existing state from disk if possible.
  if (auto err = self->state.load_type_registry_from_disk()) {
    self->quit(std::move(err));
    return catalog_actor::behavior_type::make_empty_behavior();
  }
  // Load loaded schema types from the singleton.
  // TODO: Move to the load handler and re-parse the files.
  if (const auto* module = vast::event_types::get())
    self->state.configuration_module = *module;
  if (accountant) {
    self->state.accountant = std::move(accountant);
    self->send(self->state.accountant, atom::announce_v, self->name());
    self->delayed_send(self, defaults::system::telemetry_rate,
                       atom::telemetry_v);
  }
  return {
    [self](atom::merge,
           std::shared_ptr<std::map<uuid, partition_synopsis_ptr>>& ps)
      -> caf::result<atom::ok> {
      auto unsupported_partitions = std::vector<uuid>{};
      for (const auto& [uuid, synopsis] : *ps) {
        auto supported
          = version::support_for_partition_version(synopsis->version);
        if (supported.end_of_life)
          unsupported_partitions.push_back(uuid);
      }
      if (!unsupported_partitions.empty()) {
        return caf::make_error(
          ec::version_error,
          fmt::format("{} cannot load unsupported partitions; please run 'vast "
                      "rebuild' with at least {} to rebuild the following "
                      "partitions, or delete them from the database directory: "
                      "{}",
                      *self,
                      version::support_for_partition_version(
                        version::current_partition_version)
                        .introduced,
                      fmt::join(unsupported_partitions, ", ")));
      }
      self->state.create_from(std::move(*ps));
      return atom::ok_v;
    },
    [self](atom::merge, uuid partition,
           partition_synopsis_ptr& synopsis) -> atom::ok {
      VAST_TRACE_SCOPE("{} {}", *self, VAST_ARG(partition));
      self->state.merge(partition, std::move(synopsis));
      return atom::ok_v;
    },
    [self](atom::merge,
           std::vector<augmented_partition_synopsis> v) -> atom::ok {
      for (auto& aps : v)
        self->state.merge(aps.uuid, aps.synopsis);
      return atom::ok_v;
    },
    [self](atom::get) -> std::vector<partition_synopsis_pair> {
      std::vector<partition_synopsis_pair> result;
      result.reserve(self->state.synopses.size());
      for (const auto& synopsis : self->state.synopses)
        result.push_back({synopsis.first, synopsis.second});
      return result;
    },
    [self](atom::get, atom::type) {
      VAST_TRACE_SCOPE("{} retrieves a list of all known types", *self);
      // TODO: We can generate this list out of partition_synopses
      // when we drop partition version 0 support.
      return self->state.types();
    },
    [self](atom::erase, uuid partition) {
      self->state.erase(partition);
      return atom::ok_v;
    },
    [self](atom::replace, std::vector<uuid> old_uuids,
           std::vector<augmented_partition_synopsis> new_synopses) -> atom::ok {
      for (auto const& uuid : old_uuids)
        self->state.erase(uuid);
      for (auto& aps : new_synopses)
        self->state.merge(aps.uuid, aps.synopsis);
      return atom::ok_v;
    },
    [self](atom::load) -> caf::result<atom::ok> {
      VAST_DEBUG("{} loads taxonomies", *self);
      std::error_code err{};
      auto dirs = get_module_dirs(self->system().config());
      concepts_map concepts;
      models_map models;
      for (const auto& dir : dirs) {
        const auto dir_exists = std::filesystem::exists(dir, err);
        if (err)
          VAST_WARN("{} failed to open directory {}: {}", *self, dir,
                    err.message());
        if (!dir_exists)
          continue;
        auto yamls = load_yaml_dir(dir);
        if (!yamls)
          return yamls.error();
        for (auto& [file, yaml] : *yamls) {
          VAST_DEBUG("{} extracts taxonomies from {}", *self, file.string());
          if (auto err = convert(yaml, concepts, concepts_data_layout))
            return caf::make_error(ec::parse_error,
                                   "failed to extract concepts from file",
                                   file.string(), err.context());
          for (auto& [name, definition] : concepts)
            VAST_DEBUG("{} extracted concept {} with {} fields", *self, name,
                       definition.fields.size());
          if (auto err = convert(yaml, models, models_data_layout))
            return caf::make_error(ec::parse_error,
                                   "failed to extract models from file",
                                   file.string(), err.context());
          for (auto& [name, definition] : models) {
            VAST_DEBUG("{} extracted model {} with {} fields", *self, name,
                       definition.definition.size());
            VAST_TRACE("{} uses model mapping {} -> {}", *self, name,
                       definition.definition);
          }
        }
      }
      self->state.taxonomies
        = taxonomies{std::move(concepts), std::move(models)};
      return atom::ok_v;
    },
    [self](atom::candidates, const vast::query_context& query_context)
      -> caf::result<catalog_result> {
      VAST_TRACE_SCOPE("{} {}", *self, VAST_ARG(query_context));
      bool has_expression = query_context.expr != vast::expression{};
      bool has_ids = !query_context.ids.empty();
      if (has_ids)
        return caf::make_error(ec::invalid_argument, "catalog expects queries "
                                                     "not to have ids");
      if (!has_expression)
        return caf::make_error(ec::invalid_argument, "catalog expects queries "
                                                     "to have an expression");
      auto start = std::chrono::steady_clock::now();
      auto result = self->state.lookup(query_context.expr);
      duration runtime = std::chrono::steady_clock::now() - start;
      auto id_str = fmt::to_string(query_context.id);
      self->send(self->state.accountant, atom::metrics_v,
                 "catalog.lookup.runtime", runtime,
                 metrics_metadata{
                   {"query", id_str},
                   {"issuer", query_context.issuer},
                 });
      self->send(self->state.accountant, atom::metrics_v,
                 "catalog.lookup.candidates", result.partitions.size(),
                 metrics_metadata{
                   {"query", std::move(id_str)},
                   {"issuer", query_context.issuer},
                 });
      return result;
    },
    [self](atom::resolve,
           const expression& e) -> caf::result<vast::expression> {
      return resolve(self->state.taxonomies, e, self->state.type_data);
    },
    [self](atom::status, status_verbosity v) {
      record result;
      result["memory-usage"] = count{self->state.memusage()};
      result["num-partitions"] = count{self->state.synopses.size()};
      if (v >= status_verbosity::detailed) {
        auto partitions = list{};
        partitions.reserve(self->state.synopses.size());
        for (const auto& [id, synopsis] : self->state.synopses) {
          VAST_ASSERT(synopsis);
          auto partition = record{
            {"id", fmt::to_string(id)},
            {"schema", synopsis->schema
                         ? data{std::string{synopsis->schema.name()}}
                         : data{}},
            {"num-events", synopsis->events},
            {"import-time",
             record{
               {"min", synopsis->min_import_time},
               {"max", synopsis->max_import_time},
             }},
          };
          if (v >= status_verbosity::debug)
            partition["version"] = synopsis->version;
          partitions.emplace_back(std::move(partition));
        }
        result["partitions"] = std::move(partitions);
      }
      if (v >= status_verbosity::debug)
        detail::fill_status_map(result, self);
      return result;
    },
    [self](atom::put, taxonomies t) {
      VAST_TRACE_SCOPE("");
      self->state.taxonomies = std::move(t);
    },
    [self](atom::put, vast::type layout) {
      VAST_TRACE_SCOPE("");
      self->state.insert(std::move(layout));
    },
    [self](atom::get, atom::taxonomies) {
      VAST_TRACE_SCOPE("");
      return self->state.taxonomies;
    },
    [self](atom::telemetry) {
      VAST_ASSERT(self->state.accountant);
      auto num_partitions_and_events_per_schema_and_version
        = detail::stable_map<std::pair<std::string_view, count>,
                             std::pair<count, count>>{};
      for (const auto& [_, synopsis] : self->state.synopses) {
        VAST_ASSERT(synopsis);
        auto& [num_partitions, num_events]
          = num_partitions_and_events_per_schema_and_version[std::pair{
            synopsis->schema.name(), synopsis->version}];
        num_partitions += 1;
        num_events += synopsis->events;
      }
      auto total_num_partitions = count{0};
      auto total_num_events = count{0};
      auto r = report{};
      r.data.reserve(num_partitions_and_events_per_schema_and_version.size());
      for (const auto& [schema_and_version, num_partitions_and_events] :
           num_partitions_and_events_per_schema_and_version) {
        auto [schema_num_partitions, schema_num_events]
          = num_partitions_and_events;
        total_num_partitions += schema_num_partitions;
        total_num_events += schema_num_events;
        r.data.push_back(data_point{
          .key = "catalog.num-partitions",
          .value = schema_num_partitions,
          .metadata = {
            {"schema", std::string{schema_and_version.first}},
            {"partition-version", fmt::to_string(schema_and_version.second)},
          },
        });
        r.data.push_back(data_point{
          .key = "catalog.num-events",
          .value = schema_num_events,
          .metadata = {
            {"schema", std::string{schema_and_version.first}},
            {"partition-version", fmt::to_string(schema_and_version.second)},
          },
        });
      }
      r.data.push_back(data_point{
        .key = "catalog.num-partitions-total",
        .value = total_num_partitions,
      });
      r.data.push_back(data_point{
        .key = "catalog.num-events-total",
        .value = total_num_events,
      });
      r.data.push_back(data_point{
          .key = "memory-usage",
          .value = self->state.memusage(),
          .metadata = {
            {"component", std::string{self->state.name}},
          },
        });
      self->send(self->state.accountant, atom::metrics_v, std::move(r));
      self->delayed_send(self, defaults::system::telemetry_rate,
                         atom::telemetry_v);
    }};
}

} // namespace vast::system
