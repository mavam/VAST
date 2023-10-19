//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/actors.hpp>
#include <tenzir/argument_parser.hpp>
#include <tenzir/atoms.hpp>
#include <tenzir/catalog.hpp>
#include <tenzir/concept/parseable/string/char_class.hpp>
#include <tenzir/concept/parseable/tenzir/pipeline.hpp>
#include <tenzir/error.hpp>
#include <tenzir/logger.hpp>
#include <tenzir/node_control.hpp>
#include <tenzir/passive_partition.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/query_context.hpp>
#include <tenzir/table_slice.hpp>
#include <tenzir/uuid.hpp>

#include <arrow/type.h>
#include <caf/attach_stream_source.hpp>
#include <caf/scheduled_actor.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/timespan.hpp>
#include <caf/typed_event_based_actor.hpp>

namespace tenzir::plugins::export_ {

class export_operator final : public crtp_operator<export_operator> {
public:
  export_operator() = default;

  explicit export_operator(expression expr) : expr_{std::move(expr)} {
  }

  auto operator()(operator_control_plane& ctrl) const
    -> generator<table_slice> {
    // TODO: Some of the the requests this operator makes are blocking, so we
    // have to create a scoped actor here; once the operator API uses async we
    // can offer a better mechanism here.
    auto blocking_self = caf::scoped_actor(ctrl.self().system());
    auto components
      = get_node_components<catalog_actor, accountant_actor, filesystem_actor>(
        blocking_self, ctrl.node());
    if (!components) {
      ctrl.abort(std::move(components.error()));
      co_return;
    }
    co_yield {};
    auto [catalog, accountant, fs] = std::move(*components);
    auto current_slice = std::optional<table_slice>{};
    auto query_context
      = tenzir::query_context::make_extract("export", blocking_self, expr_);
    query_context.id = uuid::random();
    TENZIR_DEBUG("export operator starts catalog lookup with id {} and "
                 "expression {}",
                 query_context.id, expr_);
    auto current_result = catalog_lookup_result{};
    auto current_error = caf::error{};
    ctrl.self()
      .request(catalog, caf::infinite, atom::candidates_v, query_context)
      .await(
        [&current_result](catalog_lookup_result result) {
          current_result = std::move(result);
        },
        [&current_error](caf::error e) {
          current_error = std::move(e);
        });
    co_yield {};
    if (current_error) {
      ctrl.abort(std::move(current_error));
      co_return;
    }
    for (const auto& [type, info] : current_result.candidate_infos) {
      for (const auto& partition_info : info.partition_infos) {
        const auto& uuid = partition_info.uuid;
        auto partition = blocking_self->spawn(
          passive_partition, uuid, accountant, fs,
          std::filesystem::path{"index"} / fmt::format("{:l}", uuid));
        auto recieving_slices = true;
        blocking_self->send(partition, atom::query_v, query_context);
        while (recieving_slices) {
          blocking_self->receive(
            [&current_slice](table_slice slice) {
              current_slice = std::move(slice);
            },
            [&recieving_slices](uint64_t) {
              recieving_slices = false;
            },
            [&recieving_slices, &current_error](caf::error e) {
              recieving_slices = false;
              current_error = std::move(e);
            });
          if (current_error) {
            ctrl.warn(std::move(current_error));
            continue;
          }
          if (current_slice) {
            co_yield *current_slice;
            current_slice.reset();
          } else {
            co_yield {};
          }
        }
      }
    }
  }

  auto name() const -> std::string override {
    return "export";
  }

  auto detached() const -> bool override {
    return true;
  }

  auto location() const -> operator_location override {
    return operator_location::remote;
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)order;
    auto clauses = std::vector<expression>{};
    if (expr_ != caf::none and expr_ != trivially_true_expression()) {
      clauses.push_back(expr_);
    }
    if (filter != caf::none and filter != trivially_true_expression()) {
      clauses.push_back(filter);
    }
    auto expr = clauses.empty() ? expression{}
                                : expression{conjunction{std::move(clauses)}};
    return optimize_result{trivially_true_expression(), event_order::ordered,
                           std::make_unique<export_operator>(std::move(expr))};
  }

  friend auto inspect(auto& f, export_operator& x) -> bool {
    return f.apply(x.expr_);
  }

private:
  expression expr_;
};

class plugin final : public virtual operator_plugin<export_operator> {
public:
  auto signature() const -> operator_signature override {
    return {.source = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"export", "https://docs.tenzir.com/next/"
                                            "operators/sources/export"};
    parser.parse(p);
    return std::make_unique<export_operator>(trivially_true_expression());
  }
};

} // namespace tenzir::plugins::export_

TENZIR_REGISTER_PLUGIN(tenzir::plugins::export_::plugin)
