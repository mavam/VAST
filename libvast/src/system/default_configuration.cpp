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

#include "vast/system/default_configuration.hpp"

#include "vast/atoms.hpp"
#include "vast/defaults.hpp"

#include <caf/config_value.hpp>

namespace vast::system {

default_configuration::default_configuration() {
  // Tweak default logging options.
  using caf::atom;
  set("logger.component-blacklist",
      caf::make_config_value_list(atom("caf"), atom("caf_flow"),
                                  atom("caf_stream")));
}

} // namespace vast::system
