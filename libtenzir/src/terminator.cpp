//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2020 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/terminator.hpp"

#include "tenzir/fwd.hpp"

#include "tenzir/atoms.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/error.hpp"
#include "tenzir/logger.hpp"

namespace tenzir {

template <class Policy>
terminator_actor::behavior_type
terminator(terminator_actor::stateful_pointer<terminator_state> self) {
  TENZIR_TRACE("terminator {}", TENZIR_ARG(self->id()));
  self->set_down_handler([=](const caf::down_msg& msg) {
    // Remove actor from list of remaining actors.
    TENZIR_DEBUG("{} received DOWN from actor {}", *self, msg.source);
    auto& remaining = self->state().remaining_actors;
    auto pred = [=](auto& actor) { return actor == msg.source; };
    auto i = std::find_if(remaining.begin(), remaining.end(), pred);
    TENZIR_ASSERT(i != remaining.end());
    remaining.erase(i);
    // Perform next action based on policy.
    if constexpr (std::is_same_v<Policy, policy::sequential>) {
      if (!remaining.empty()) {
        auto& next = remaining.back();
        TENZIR_DEBUG("{} terminates next actor {}", *self, next);
        self->monitor(next);
        self->send_exit(next, caf::exit_reason::user_shutdown);
        return;
      }
    } else if constexpr (std::is_same_v<Policy, policy::parallel>) {
      // nothing to do, all EXIT messages are in flight.
      TENZIR_DEBUG("{} has {} actors remaining", *self, remaining.size());
    } else {
      static_assert(detail::always_false_v<Policy>, "unsupported policy");
    }
    if (remaining.empty()) {
      TENZIR_DEBUG("{} terminated all actors", *self);
      self->state().promise.deliver(atom::done_v);
      self->quit(caf::exit_reason::user_shutdown);
    }
  });
  return {
    [self](atom::shutdown, const std::vector<caf::actor>& xs) {
      TENZIR_DEBUG("{} got request to terminate {} actors", *self, xs.size());
      TENZIR_ASSERT(!self->state().promise.pending());
      self->state().promise = self->make_response_promise<atom::done>();
      auto& remaining = self->state().remaining_actors;
      remaining.reserve(xs.size());
      for (auto i = xs.rbegin(); i != xs.rend(); ++i)
        if (!*i)
          TENZIR_DEBUG("{} skips termination of already exited actor at "
                       "position "
                       "{}",
                       *self, std::distance(xs.begin(), i.base()));
        else
          remaining.push_back(*i);
      if (remaining.size() < xs.size())
        TENZIR_DEBUG("{} only needs to terminate {} actors", *self,
                     remaining.size());
      // Terminate early if there's nothing to do.
      if (remaining.empty()) {
        TENZIR_DEBUG("{} quits prematurely because all actors have "
                     "exited",
                     *self);
        self->state().promise.deliver(atom::done_v);
        self->send_exit(self, caf::exit_reason::user_shutdown);
        return self->state().promise;
      }
      if constexpr (std::is_same_v<Policy, policy::sequential>) {
        // Track actors in reverse order because the user provides the actors in
        // the order of shutdown, but we use a stack internally that stores the
        // first actor to be terminated at the end. In sequential operation, we
        // monitor the next actor, send it an EXIT, wait for the DOWN, and then
        // move to the next. This ensures that we'll always process the DOWN
        // that corresponds to our EXIT message. (When monitoring an already
        // terminated actor, CAF dispatches the DOWN immediately.)
        auto& next = remaining.back();
        TENZIR_DEBUG("{} sends exit to {}", *self, next->id());
        self->monitor(next);
        self->send_exit(next, caf::exit_reason::user_shutdown);
      } else if constexpr (std::is_same_v<Policy, policy::parallel>) {
        // Terminate all actors.
        for (auto& x : xs) {
          if (!x)
            continue;
          self->monitor(x);
          self->send_exit(x, caf::exit_reason::user_shutdown);
        }
      } else {
        static_assert(detail::always_false_v<Policy>, "unsupported policy");
      }
      return self->state().promise;
    },
  };
}

template terminator_actor::behavior_type terminator<policy::sequential>(
  terminator_actor::stateful_pointer<terminator_state>);

template terminator_actor::behavior_type terminator<policy::parallel>(
  terminator_actor::stateful_pointer<terminator_state>);

} // namespace tenzir
