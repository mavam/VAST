//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2018 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/aliases.hpp"

#include <caf/fwd.hpp>

namespace tenzir::detail {

/// Fills `xs` state from `self`.
void fill_status_map(record& xs, caf::scheduled_actor* self);

} // namespace tenzir::detail
