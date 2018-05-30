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

#include <caf/all.hpp>

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/type.hpp"
#include "vast/concept/printable/stream.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/concept/printable/vast/filesystem.hpp"
#include "vast/concept/printable/vast/key.hpp"
#include "vast/detail/assert.hpp"
#include "vast/event.hpp"
#include "vast/expression.hpp"
#include "vast/expression_visitors.hpp"
#include "vast/filesystem.hpp"
#include "vast/load.hpp"
#include "vast/logger.hpp"
#include "vast/offset.hpp"
#include "vast/save.hpp"
#include "vast/value_index.hpp"

#include "vast/system/atoms.hpp"
#include "vast/system/indexer.hpp"

using namespace caf;

namespace vast::system {

behavior indexer(stateful_actor<indexer_state>* self, path dir,
                 type event_type) {
  auto maybe_tbl = make_table_index(std::move(dir), event_type);
  if (!maybe_tbl) {
    VAST_ERROR(self, "unable to generate table layout for", event_type);
    return {};
  }
  self->state.tbl = std::move(*maybe_tbl);
  VAST_DEBUG(self, "operates for event", event_type);
  return {
    [=](const std::vector<event>& xs) {
      for (auto& x : xs)
        if (x.type() == event_type)
          self->state.tbl.add(x);
    },
    [=](const predicate& pred) {
      VAST_DEBUG(self, "got predicate:", pred);
      return self->state.tbl.lookup(pred);
    },
    [=](shutdown_atom) { self->quit(exit_reason::user_shutdown); },
  };
}

} // namespace vast::system
