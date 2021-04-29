//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2020 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/system/actors.hpp"
#include "vast/system/transformer.hpp"

#include <caf/expected.hpp>
#include <caf/fwd.hpp>

namespace vast::system {

/// Tries to spawn a new SOURCE for the specified format.
/// @param sys The actor system to spawn the source in.
/// @param format The input format.
/// @param inv The invocation that prompted the actor to be spawned.
/// @param accountant A handle to the accountant component.
/// @param type_registry A handle to the type registry component.
/// @param importer A handle to the importer component.
/// @returns a handle to the spawned actor on success, an error otherwise.
caf::expected<caf::actor>
make_source(caf::actor_system& sys, const std::string& format,
            const invocation& inv, accountant_actor accountant,
            type_registry_actor type_registry, importer_actor importer,
            std::vector<transform>&& transforms, bool detached = false);

} // namespace vast::system
