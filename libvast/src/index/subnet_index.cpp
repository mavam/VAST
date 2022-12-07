//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2020 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/index/subnet_index.hpp"

#include "vast/detail/legacy_deserialize.hpp"
#include "vast/detail/overload.hpp"
#include "vast/fbs/value_index.hpp"
#include "vast/index/address_index.hpp"
#include "vast/index/container_lookup.hpp"
#include "vast/type.hpp"
#include "vast/value_index_factory.hpp"

#include <caf/binary_serializer.hpp>
#include <caf/serializer.hpp>
#include <caf/settings.hpp>

#include <memory>

namespace vast {

namespace {

bool serialize(auto& serializer, value_index& network,
               subnet_index::prefix_index& length) {
  auto* network_as_address = dynamic_cast<address_index*>(&network);
  VAST_ASSERT(network_as_address);
  return serializer.apply(*network_as_address) && serializer.apply(length);
}

bool deserialize(auto& deserializer, value_index_ptr& network,
                 subnet_index::prefix_index& length) {
  network
    = factory<value_index>::make(vast::type{address_type{}}, caf::settings{});
  auto* network_as_address = dynamic_cast<address_index*>(network.get());
  VAST_ASSERT(network_as_address);
  return deserializer.apply(*network_as_address) && deserializer.apply(length);
}

} // namespace

subnet_index::subnet_index(vast::type x, caf::settings opts)
  : value_index{std::move(x), std::move(opts)},
    network_{
      factory<value_index>::make(vast::type{address_type{}}, caf::settings{})},
    length_{128 + 1} {
  // nop
}

bool subnet_index::inspect_impl(supported_inspectors& inspector) {
  return value_index::inspect_impl(inspector)
         && std::visit(
           [this]<class Inspector>(std::reference_wrapper<Inspector> visitor) {
             if constexpr (Inspector::is_loading) {
               return deserialize(visitor.get(), network_, length_);
             } else {
               return serialize(visitor.get(), *network_, length_);
             }
           },
           inspector);
}

bool subnet_index::append_impl(data_view x, id pos) {
  if (auto sn = caf::get_if<view<subnet>>(&x)) {
    length_.skip(pos - length_.size());
    length_.append(sn->length());
    return static_cast<bool>(network_->append(sn->network(), pos));
  }
  return false;
}

caf::expected<ids>
subnet_index::lookup_impl(relational_operator op, data_view d) const {
  return caf::visit(
    detail::overload{
      [&](auto x) -> caf::expected<ids> {
        return caf::make_error(ec::type_clash, materialize(x));
      },
      [&](view<address> x) -> caf::expected<ids> {
        if (!(op == relational_operator::ni
              || op == relational_operator::not_ni))
          return caf::make_error(ec::unsupported_operator, op);
        auto result = ids{offset(), false};
        uint8_t bits = x.is_v4() ? 32 : 128;
        for (uint8_t i = 0; i <= bits; ++i) { // not an off-by-one
          auto masked = x;
          masked.mask(128 - bits + i);
          ids len = length_.lookup(relational_operator::equal, i);
          auto net = network_->lookup(relational_operator::equal, masked);
          if (!net)
            return net;
          len &= *net;
          result |= len;
        }
        if (op == relational_operator::not_ni)
          result.flip();
        return result;
      },
      [&](view<subnet> x) -> caf::expected<ids> {
        switch (op) {
          default:
            return caf::make_error(ec::unsupported_operator, op);
          case relational_operator::equal:
          case relational_operator::not_equal: {
            auto result
              = network_->lookup(relational_operator::equal, x.network());
            if (!result)
              return result;
            auto n = length_.lookup(relational_operator::equal, x.length());
            *result &= n;
            if (op == relational_operator::not_equal)
              result->flip();
            return result;
          }
          case relational_operator::in:
          case relational_operator::not_in: {
            // For a subnet index U and subnet x, the in operator signifies a
            // subset relationship such that `U in x` translates to U ⊆ x, i.e.,
            // the lookup returns all subnets in U that are a subset of x.
            auto result = network_->lookup(relational_operator::in, x);
            if (!result)
              return result;
            *result
              &= length_.lookup(relational_operator::greater_equal, x.length());
            if (op == relational_operator::not_in)
              result->flip();
            return result;
          }
          case relational_operator::ni:
          case relational_operator::not_ni: {
            // For a subnet index U and subnet x, the ni operator signifies a
            // subset relationship such that `U ni x` translates to U ⊇ x, i.e.,
            // the lookup returns all subnets in U that include x.
            ids result;
            for (auto i = uint8_t{1}; i <= x.length(); ++i) {
              auto xs = network_->lookup(relational_operator::in,
                                         subnet{x.network(), i});
              if (!xs)
                return xs;
              *xs &= length_.lookup(relational_operator::equal, i);
              result |= *xs;
            }
            if (op == relational_operator::not_ni)
              result.flip();
            return result;
          }
        }
      },
      [&](view<list> xs) {
        return detail::container_lookup(*this, op, xs);
      },
    },
    d);
}

size_t subnet_index::memusage_impl() const {
  return network_->memusage() + length_.memusage();
}

flatbuffers::Offset<fbs::ValueIndex> subnet_index::pack_impl(
  flatbuffers::FlatBufferBuilder& builder,
  flatbuffers::Offset<fbs::value_index::detail::ValueIndexBase> base_offset) {
  const auto address_index_offset = pack(builder, network_);
  const auto prefix_index_offset = pack(builder, length_);
  const auto subnet_index_offset = fbs::value_index::CreateSubnetIndex(
    builder, base_offset, address_index_offset, prefix_index_offset);
  return fbs::CreateValueIndex(builder, fbs::value_index::ValueIndex::subnet,
                               subnet_index_offset.Union());
}

caf::error subnet_index::unpack_impl(const fbs::ValueIndex& from) {
  const auto* from_subnet = from.value_index_as_subnet();
  VAST_ASSERT(from_subnet);
  if (auto err = unpack(*from_subnet->address_index(), network_))
    return err;
  return unpack(*from_subnet->prefix_index(), length_);
}

} // namespace vast
