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

#include "vast/format/single_layout_reader.hpp"

#include "vast/error.hpp"
#include "vast/factory.hpp"
#include "vast/logger.hpp"
#include "vast/table_slice_builder.hpp"
#include "vast/table_slice_builder_factory.hpp"

#include <chrono>

namespace vast::format {

single_layout_reader::single_layout_reader(const caf::settings& options)
  : reader(options) {
  // nop
}

single_layout_reader::~single_layout_reader() {
  // nop
}

caf::error single_layout_reader::finish(consumer& f, caf::error result) {
  last_batch_sent_ = reader_clock::now();
  batch_events_ = 0;
  if (builder_ != nullptr && builder_->rows() > 0) {
    auto slice = builder_->finish();
    // Override error in case we encounter an error in the builder.
    if (slice.encoding() == table_slice_encoding::none)
      return caf::make_error(ec::parse_error, "unable to finish current slice");
    f(std::move(slice));
  }
  return result;
}

bool single_layout_reader::reset_builder(record_type layout) {
  VAST_LOG_SPD_TRACE("{}  {}", detail::id_or_name(VAST_ARG(table_slice_type_)),
                     VAST_ARG(layout));
  builder_ = factory<table_slice_builder>::make(table_slice_type_,
                                                std::move(layout));
  last_batch_sent_ = reader_clock::now();
  batch_events_ = 0;
  return builder_ != nullptr;
}

} // namespace vast::format
