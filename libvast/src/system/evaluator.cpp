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

#include "vast/system/evaluator.hpp"

#include "vast/expression_visitors.hpp"
#include "vast/fwd.hpp"
#include "vast/logger.hpp"

#include <caf/behavior.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/stateful_actor.hpp>

namespace vast::system {

namespace {

/// Concatenates IDs according to given predicates. In paticular, resolves
/// conjunctions, disjunctions, and negations.
class ids_evaluator {
public:
  ids_evaluator(const evaluator_state::predicate_hits_map& xs) : hits_(xs) {
    push();
  }

  ids operator()(caf::none_t) {
    return {};
  }

  template <class Connective>
  ids operator()(const Connective& xs) {
    VAST_ASSERT(xs.size() > 0);
    push();
    auto result = caf::visit(*this, xs[0]);
    for (size_t index = 1; index < xs.size(); ++index) {
      next();
      if constexpr (std::is_same_v<Connective, conjunction>) {
        result &= caf::visit(*this, xs[index]);
      } else {
        static_assert(std::is_same_v<Connective, disjunction>);
        result |= caf::visit(*this, xs[index]);
      }
    }
    pop();
    return result;
  }

  ids operator()(const negation& n) {
    push();
    auto result = caf::visit(*this, n.expr());
    pop();
    result.flip();
    return result;
  }

  ids operator()(const predicate&) {
    auto i = hits_.find(position_);
    return i != hits_.end() ? i->second.second : ids{};
  }

private:
  void push() {
    position_.emplace_back(0);
  }

  void pop() {
    position_.pop_back();
  }

  void next() {
    VAST_ASSERT(!position_.empty());
    ++position_.back();
  }

  const evaluator_state::predicate_hits_map& hits_;
  offset position_;
};

} // namespace

evaluator_state::evaluator_state(
  evaluator_actor::stateful_pointer<evaluator_state> self)
  : self{self} {
  // nop
}

void evaluator_state::handle_result(const offset& position, const ids& result) {
  VAST_LOG_SPD_DEBUG("{} got {} new hits for predicate at position {}",
                     detail::id_or_name(self), rank(result), position);
  auto ptr = hits_for(position);
  VAST_ASSERT(ptr != nullptr);
  auto& [missing, accumulated_hits] = *ptr;
  accumulated_hits |= result;
  if (--missing == 0) {
    VAST_LOG_SPD_DEBUG("{} collected all results at position {}",
                       detail::id_or_name(self), position);
    evaluate();
  }
  decrement_pending();
}

void evaluator_state::handle_missing_result(const offset& position,
                                            const caf::error& err) {
  VAST_IGNORE_UNUSED(err);
  VAST_LOG_SPD_WARN("{} received {} instead of a result for predicate at "
                    "position {}",
                    detail::id_or_name(self), render(err), position);
  auto ptr = hits_for(position);
  VAST_ASSERT(ptr != nullptr);
  if (--ptr->first == 0) {
    VAST_LOG_SPD_DEBUG("{} collected all results at position {}",
                       detail::id_or_name(self), position);
    evaluate();
  }
  decrement_pending();
}

void evaluator_state::evaluate() {
  auto expr_hits = caf::visit(ids_evaluator{predicate_hits}, expr);
  VAST_LOG_SPD_DEBUG("{} got predicate_hits: {} expr_hits: {}",
                     detail::id_or_name(self), predicate_hits, expr_hits);
  auto delta = expr_hits - hits;
  if (any<1>(delta)) {
    hits |= delta;
    self->send(client, std::move(delta));
  }
}

void evaluator_state::decrement_pending() {
  // We're done evaluating if all INDEXER actors have reported their hits.
  if (--pending_responses == 0) {
    VAST_LOG_SPD_DEBUG("{} completed expression evaluation",
                       detail::id_or_name(self));
    promise.deliver(atom::done_v);
  }
}

evaluator_state::predicate_hits_map::mapped_type*
evaluator_state::hits_for(const offset& position) {
  auto i = predicate_hits.find(position);
  return i != predicate_hits.end() ? &i->second : nullptr;
}

evaluator_actor::behavior_type
evaluator(evaluator_actor::stateful_pointer<evaluator_state> self,
          expression expr, partition_actor partition,
          std::vector<evaluation_triple> eval) {
  VAST_TRACE(VAST_ARG(expr), VAST_ARG(eval));
  VAST_ASSERT(!eval.empty());
  self->state.partition = partition;
  return {
    [=, expr = std::move(expr),
     eval = std::move(eval)](partition_client_actor client) {
      auto& st = self->state;
      st.client = client;
      st.expr = std::move(expr);
      st.promise = self->make_response_promise<atom::done>();
      st.pending_responses += eval.size();
      for (auto& triple : eval) {
        // No strucutured bindings available due to subsequent lambda. :-/
        // TODO: C++20
        auto& pos = std::get<0>(triple);
        auto& curried_pred = std::get<1>(triple);
        auto& indexer = std::get<2>(triple);
        ++st.predicate_hits[pos].first;
        self->request(indexer, caf::infinite, curried_pred)
          .then([=](const ids& hits) { self->state.handle_result(pos, hits); },
                [=](const caf::error& err) {
                  self->state.handle_missing_result(pos, err);
                });
      }
      if (st.pending_responses == 0) {
        VAST_LOG_SPD_DEBUG("{} has nothing to evaluate for expression",
                           detail::id_or_name(self));
        st.promise.deliver(atom::done_v);
      }
      // We can only deal with exactly one expression/client at the moment.
      self->unbecome();
      return st.promise;
    },
  };
}

} // namespace vast::system
