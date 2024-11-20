//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/fwd.hpp"

#include <caf/scheduled_actor.hpp>

namespace tenzir::detail {

/// Runs an action after a given delay without keeping the actor alive.
/// @param self The hosting actor pointer.
/// @param delay The delay after which to run the action.
/// @param function The action to run with the signature () -> void.
/// @returns A disposable that allows for cancelling the action.
/// See also: https://gitter.im/actor-framework/chat?at=63b03e24be2c3c20c727a443
template <class Function>
  requires std::is_invocable_r_v<void, Function&&>
auto weak_run_delayed(caf::scheduled_actor* self, caf::timespan delay,
                      Function&& function) {
  return self->clock().schedule(
    self->clock().now() + delay,
    // FIXME: double check if this is correct.
    caf::make_action(std::forward<Function>(function)));
}

/// Runs an action in a loop with a given delay without keeping the actor alive.
/// @param self The hosting actor pointer.
/// @param delay The delay after which to repeat the action.
/// @param function The action to run with the signature () -> void.
/// @param run_immediately Whether to run the function immediately.
template <class Function>
  requires std::is_invocable_r_v<void, std::remove_reference_t<Function>&>
void weak_run_delayed_loop(caf::scheduled_actor* self, caf::timespan delay,
                           Function&& function, bool run_immediately = true) {
  if (run_immediately) {
    std::invoke(function);
  }
  weak_run_delayed(self, delay,
                   [self, delay,
                    function = std::forward<Function>(function)]() mutable {
                     std::invoke(function);
                     weak_run_delayed_loop(self, delay, std::move(function),
                                           false);
                   });
}

} // namespace tenzir::detail
