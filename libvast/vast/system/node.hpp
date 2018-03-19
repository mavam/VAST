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

#ifndef VAST_SYSTEM_NODE_HPP
#define VAST_SYSTEM_NODE_HPP

#include <string>

#include "vast/filesystem.hpp"

#include "vast/system/node_state.hpp"

#include "vast/system/format_factory.hpp"

namespace vast::system {

using run_import_atom = caf::atom_constant<caf::atom("runimport")>;

/// Spawns a node.
/// @param self The actor handle
/// @param id The unique ID of the node.
/// @param dir The directory where to store persistent state.
caf::behavior node(caf::stateful_actor<node_state>* self, std::string id, path dir, format_factory formats);

} // namespace vast::system

#endif
