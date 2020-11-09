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

#pragma once

#include "vast/fwd.hpp"

#include <caf/fwd.hpp>

#include <memory>
#include <string>

namespace vast::format {

/// @relates writer
using writer_ptr = std::unique_ptr<writer>;

/// The base class for writers.
class writer {
public:
  /// Produces a writer for the specified format.
  /// @param output_format The output format.
  /// @param options Config options for the concrete writer.
  /// @returns An owning pointer to the writer or an error.
  static caf::expected<std::unique_ptr<format::writer>>
  make(std::string output_format, const caf::settings& options);

  virtual ~writer();

  /// Processes a single batch of events.
  /// @param x The events to write wrapped in a table slice.
  /// @returns `caf::none` on success.
  virtual caf::error write(const table_slice_ptr& x) = 0;

  /// Called periodically to flush state.
  /// @returns `caf::none` on success.
  /// The default implementation does nothing.
  virtual caf::expected<void> flush();

  /// @returns The name of the writer type.
  virtual const char* name() const = 0;
};

} // namespace vast::format
