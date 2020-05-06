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

#include "vast/segment_builder.hpp"

#include "vast/detail/assert.hpp"
#include "vast/detail/byte_swap.hpp"
#include "vast/detail/narrow.hpp"
#include "vast/error.hpp"
#include "vast/fbs/utils.hpp"
#include "vast/ids.hpp"
#include "vast/logger.hpp"
#include "vast/segment.hpp"
#include "vast/table_slice.hpp"

#include <caf/binary_serializer.hpp>

namespace vast {

segment_builder::segment_builder() {
  reset();
}

caf::error segment_builder::add(table_slice_ptr x) {
  if (x->offset() < min_table_slice_offset_)
    return make_error(ec::unspecified, "slice offsets not increasing");
  auto slice = fbs::pack(builder_, x);
  if (!slice)
    return slice.error();
  flat_slices_.push_back(*slice);
  // This works only with monotonically increasing IDs.
  if (!intervals_.empty() && intervals_.back().end() == x->offset())
    intervals_.back()
      = {intervals_.back().begin(), intervals_.back().end() + x->rows()};
  else
    intervals_.emplace_back(x->offset(), x->offset() + x->rows());
  num_events_ += x->rows();
  slices_.push_back(x);
  return caf::none;
}

segment segment_builder::finish() {
  auto table_slices_offset = builder_.CreateVector(flat_slices_);
  auto uuid_offset = fbs::pack_bytes(builder_, id_);
  auto ids_offset = builder_.CreateVectorOfStructs(intervals_);
  fbs::SegmentBuilder segment_builder{builder_};
  segment_builder.add_version(fbs::Version::v0);
  segment_builder.add_slices(table_slices_offset);
  segment_builder.add_uuid(uuid_offset);
  segment_builder.add_ids(ids_offset);
  segment_builder.add_events(num_events_);
  auto segment_offset = segment_builder.Finish();
  fbs::FinishSegmentBuffer(builder_, segment_offset);
  auto chk = fbs::release(builder_);
  reset();
  return segment{std::move(chk)};
}

caf::expected<std::vector<table_slice_ptr>>
segment_builder::lookup(const vast::ids& xs) const {
  std::vector<table_slice_ptr> result;
  auto f = [](auto& slice) {
    return std::pair{slice->offset(), slice->offset() + slice->rows()};
  };
  auto g = [&](auto& slice) {
    result.push_back(slice);
    return caf::none;
  };
  if (auto error = select_with(xs, slices_.begin(), slices_.end(), f, g))
    return error;
  return result;
}

const uuid& segment_builder::id() const {
  return id_;
}

vast::ids segment_builder::ids() const {
  vast::ids result;
  for (auto x : slices_) {
    result.append_bits(false, x->offset() - result.size());
    result.append_bits(true, x->rows());
  }
  return result;
}

size_t segment_builder::table_slice_bytes() const {
  return builder_.GetSize();
}

const std::vector<table_slice_ptr>& segment_builder::table_slices() const {
  return slices_;
}

void segment_builder::reset() {
  id_ = uuid::random();
  min_table_slice_offset_ = 0;
  num_events_ = 0;
  builder_.Clear();
  flat_slices_.clear();
  intervals_.clear();
  slices_.clear();
}

} // namespace vast
