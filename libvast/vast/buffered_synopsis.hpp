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

#include "vast/bloom_filter_parameters.hpp"
#include "vast/bloom_filter_synopsis.hpp"
#include "vast/synopsis.hpp"

#include <vast/error.hpp>

namespace vast {

// TODO: Turn this into a concept when we support C++20.
template <typename T>
struct buffered_synopsis_traits {
  // Create a new bloom filter synopsis from the given parameters
  template <typename HashFunction>
  static synopsis_ptr make(vast::type type, bloom_filter_parameters p,
                           std::vector<size_t> seeds = {})
    = delete;

  // Estimate the size in bytes for an unordered_set of T.
  static size_t memusage(const std::unordered_set<T>&) = delete;
};

/// A synopsis that stores a full copy of the input in a hash table to be able
/// to construct a smaller bloom filter synopsis for this data at a later
/// point in time using the `shrink` function.
/// @note This is currently used for the active partition: The input is buffered
/// and converted to a bloom filter when the partition is converted to a passive
/// partition and no more entries are expected to be added.
template <class T, class HashFunction>
class buffered_synopsis final : public synopsis {
public:
  using element_type = T;
  using view_type = view<T>;

  buffered_synopsis(vast::type x, double p) : synopsis{std::move(x)}, p_{p} {
    // nop
  }

  synopsis_ptr shrink() const override {
    size_t next_power_of_two = 1ull;
    while (data_.size() > next_power_of_two)
      next_power_of_two *= 2;
    bloom_filter_parameters params;
    params.p = p_;
    params.n = next_power_of_two;
    VAST_DEBUG("shrinks buffered synopsis to {} elements", params.n);
    auto type = annotate_parameters(this->type(), params);
    // TODO: If we can get rid completely of the `address_synopsis` and
    // `string_synopsis` types, we could also call the correct constructor here.
    auto shrunk_synopsis
      = buffered_synopsis_traits<T>::template make<HashFunction>(
        type, std::move(params));
    if (!shrunk_synopsis)
      return nullptr;
    for (auto& s : data_)
      shrunk_synopsis->add(make_view(s));
    return shrunk_synopsis;
  }

  // Implementation of the remainder of the `synopsis` API.
  void add(data_view x) override {
    auto v = caf::get_if<view_type>(&x);
    VAST_ASSERT(v);
    data_.insert(materialize(*v));
  }

  size_t memusage() const override {
    return sizeof(p_) + buffered_synopsis_traits<T>::memusage(data_);
  }

  caf::optional<bool>
  lookup(relational_operator op, data_view rhs) const override {
    switch (op) {
      default:
        return caf::none;
      case equal:
        // TODO: Switch to tsl::robin_set here for heterogenous lookup.
        return data_.count(materialize(caf::get<view_type>(rhs)));
      case in: {
        if (auto xs = caf::get_if<view<list>>(&rhs)) {
          for (auto x : **xs)
            if (data_.count(materialize(caf::get<view_type>(x))))
              return true;
          return false;
        }
        return caf::none;
      }
    }
  }

  caf::error serialize(caf::serializer&) const override {
    return caf::make_error(ec::logic_error, "attempted to serialize a "
                                            "buffered_string_synopsis; did you "
                                            "forget to shrink?");
  }

  caf::error deserialize(caf::deserializer&) override {
    return caf::make_error(ec::logic_error, "attempted to deserialize a "
                                            "buffered_string_synopsis");
  }

  bool equals(const synopsis& other) const noexcept override {
    if (auto* p = dynamic_cast<const buffered_synopsis*>(&other))
      return data_ == p->data_;
    return false;
  }

private:
  double p_;
  std::unordered_set<T> data_;
};

} // namespace vast
