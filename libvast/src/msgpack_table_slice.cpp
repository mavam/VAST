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

#include "vast/msgpack_table_slice.hpp"

#include "vast/detail/narrow.hpp"
#include "vast/detail/overload.hpp"
#include "vast/detail/type_traits.hpp"
#include "vast/die.hpp"
#include "vast/logger.hpp"
#include "vast/msgpack.hpp"
#include "vast/value_index.hpp"

#include <caf/binary_deserializer.hpp>
#include <caf/deserializer.hpp>
#include <caf/serializer.hpp>
#include <caf/streambuf.hpp>

#include <type_traits>

using namespace vast;

namespace vast {

legacy_table_slice_ptr msgpack_table_slice::make(table_slice_header header) {
  auto ptr = new msgpack_table_slice{std::move(header)};
  return legacy_table_slice_ptr{ptr, false};
}

msgpack_table_slice* msgpack_table_slice::copy() const {
  return new msgpack_table_slice{*this};
}

caf::error msgpack_table_slice::serialize(caf::serializer& sink) const {
  return sink(offset_table_, chunk_);
}

caf::error msgpack_table_slice::deserialize(caf::deserializer& source) {
  if (auto err = source(offset_table_, chunk_))
    return err;
  buffer_ = as_bytes(span{chunk_->data(), chunk_->size()});
  return caf::none;
}

caf::error msgpack_table_slice::load(chunk_ptr chunk) {
  VAST_ASSERT(chunk != nullptr);
  // Setup a CAF deserializer.
  caf::binary_deserializer source{nullptr, chunk->data(), chunk->size()};
  // Deserialize offset table.
  if (auto err = source(offset_table_))
    return err;
  // Assign buffer to msgpack data following the offset table. Since the buffer
  // was previously serialized as chunk pointer (uint32_t size + data), we have
  // to add add sizeof(uint32_t) bytes after deserializing the offset table to
  // jump to directly jump to the msgpack data.
  auto remaining_bytes = source.remaining();
  auto deserializer_position = chunk->size() - remaining_bytes;
  chunk_ = chunk->slice(deserializer_position + sizeof(uint32_t));
  buffer_ = as_bytes(span{chunk_->data(), chunk_->size()});
  return caf::none;
}

namespace {

class msgpack_array_view : public container_view<data_view>,
                           detail::totally_ordered<msgpack_array_view> {
public:
  msgpack_array_view(type value_type, msgpack::array_view xs)
    : size_{xs.size()}, value_type_{std::move(value_type)}, data_{xs.data()} {
    // nop
  }

  // implemented out-of-line below due to dependency on decode
  value_type at(size_type i) const override;

  size_type size() const noexcept override {
    return size_;
  }

private:
  size_t size_;
  type value_type_;
  msgpack::overlay data_;
};

class msgpack_map_view : public container_view<std::pair<data_view, data_view>>,
                         detail::totally_ordered<msgpack_map_view> {
public:
  msgpack_map_view(type key_type, type value_type, msgpack::array_view xs)
    : size_{xs.size() / 2},
      key_type_{std::move(key_type)},
      value_type_{std::move(value_type)},
      data_{xs.data()} {
    using namespace msgpack;
    VAST_ASSERT(is_fixmap(xs.format()) || xs.format() == map16
                || xs.format() == map32);
  }

  // implemented out-of-line below due to dependency on decode
  value_type at(size_type i) const override;

  size_type size() const noexcept override {
    return size_;
  }

private:
  size_t size_;
  type key_type_;
  type value_type_;
  msgpack::overlay data_;
};

// Helper utilities for decoding.

struct identity {
  template <class T>
  auto operator()(T x) const {
    return x;
  }
};

template <class To>
struct converter {
  template <class T>
  auto operator()(T x) const {
    return To{x};
  }
};

template <class T, class F = identity>
auto make_data_view_lambda(F f = {}) {
  return [=](T x) { return make_data_view(f(x)); };
}

auto make_none_view() {
  return [](auto) { return data_view{}; };
}

template <class F = identity>
auto make_signed_visitor(F f = {}) {
  auto g = [=](auto x) {
    using signed_type = std::make_signed_t<decltype(x)>;
    return f(static_cast<signed_type>(x));
  };
  return detail::overload{
    make_data_view_lambda<uint8_t>(g), // for 0
    make_data_view_lambda<int8_t>(g),
    make_data_view_lambda<int16_t>(g),
    make_data_view_lambda<int32_t>(g),
    make_data_view_lambda<int64_t>(g),
    make_none_view(),
  };
}

template <class F = identity>
auto make_unsigned_visitor(F f = {}) {
  return detail::overload{
    make_data_view_lambda<uint8_t>(f),
    make_data_view_lambda<uint16_t>(f),
    make_data_view_lambda<uint32_t>(f),
    make_data_view_lambda<uint64_t>(f),
    make_none_view(),
  };
}

// Decodes a data view from one or more objects.
data_view decode(msgpack::overlay& objects, const type& t);

template <class T>
data_view decode(msgpack::overlay& objects, const T& t) {
  using namespace msgpack;
  auto o = objects.get();
  if (o.format() == nil)
    return {};
  if constexpr (std::is_same_v<T, none_type>) {
    // This branch should never get triggered because an object with format
    // 'nil' is handled already above.
    VAST_ASSERT(!"null check too late");
    return {};
  } else if constexpr (std::is_same_v<T, bool_type>) {
    if (auto x = get<bool>(o))
      return make_data_view(*x);
  } else if constexpr (std::is_same_v<T, integer_type>) {
    auto f = make_signed_visitor();
    return visit(f, o);
  } else if constexpr (std::is_same_v<T, count_type>) {
    auto f = make_unsigned_visitor<converter<count>>();
    return visit(f, o);
  } else if constexpr (std::is_same_v<T, real_type>) {
    if (auto x = get<double>(o))
      return make_data_view(*x);
  } else if constexpr (std::is_same_v<T, duration_type>) {
    using namespace std::chrono;
    auto to_ns = [](auto x) { return duration{nanoseconds{x}}; };
    auto f = make_signed_visitor(to_ns);
    return visit(f, o);
  } else if constexpr (std::is_same_v<T, time_type>) {
    using namespace std::chrono;
    auto to_ts = [](auto x) { return time{duration{nanoseconds{x}}}; };
    auto f = make_signed_visitor(to_ts);
    return visit(f, o);
  } else if constexpr (std::is_same_v<T, string_type>) {
    if (auto x = get<std::string_view>(o))
      return make_data_view(*x);
  } else if constexpr (std::is_same_v<T, pattern_type>) {
    if (auto x = get<std::string_view>(o))
      return data_view{pattern_view{*x}};
  } else if constexpr (std::is_same_v<T, address_type>) {
    if (auto x = get<std::string_view>(o)) {
      VAST_ASSERT(x->size() == 4 || x->size() == 16);
      auto family = x->size() == 4 ? address::ipv4 : address::ipv6;
      auto addr = address{x->data(), family, address::byte_order::network};
      return make_data_view(addr);
    }
  } else if constexpr (std::is_same_v<T, subnet_type>) {
    if (auto xs = get<array_view>(o)) {
      VAST_ASSERT(xs->size() == 2);
      auto inner = xs->data();
      auto str = *get<std::string_view>(inner.get());
      auto family = str.size() == 4 ? address::ipv4 : address::ipv6;
      auto addr = address{str.data(), family, address::byte_order::network};
      inner.next();
      auto length = *get<uint8_t>(inner.get());
      return data_view{view<subnet>{make_view(addr), length}};
    }
  } else if constexpr (std::is_same_v<T, port_type>) {
    if (auto xs = get<array_view>(o)) {
      VAST_ASSERT(xs->size() == 2);
      auto inner = xs->data();
      auto n = *get<uint16_t>(inner.get());
      inner.next();
      auto t = static_cast<port::port_type>(*get<uint8_t>(inner.get()));
      return make_data_view(port{n, t});
    }
  } else if constexpr (std::is_same_v<T, enumeration_type>) {
    if (auto x = get<uint8_t>(o))
      return make_data_view(enumeration{*x});
  } else if constexpr (std::is_same_v<T, list_type>) {
    if (auto xs = get<array_view>(o)) {
      auto ptr = caf::make_counted<msgpack_array_view>(t.value_type, *xs);
      return list_view_handle{list_view_ptr{std::move(ptr)}};
    }
  } else if constexpr (std::is_same_v<T, map_type>) {
    if (auto xs = get<array_view>(o)) {
      auto ptr
        = caf::make_counted<msgpack_map_view>(t.key_type, t.value_type, *xs);
      return map_view_handle{map_view_ptr{std::move(ptr)}};
    }
  } else if constexpr (std::is_same_v<T, record_type>) {
    VAST_ASSERT(!"records are unrolled");
    return {};
  } else if constexpr (std::is_same_v<T, alias_type>) {
    return decode(objects, t.value_type);
  } else {
    static_assert(detail::always_false_v<T>, "missing type");
  }
  // The end of this function is unreachable.
  vast::die("unreachable");
}

data_view decode(msgpack::overlay& objects, const type& t) {
  // Dispatch to the more specific decode.
  return caf::visit(
    [&](auto&& x) { return decode(objects, std::forward<decltype(x)>(x)); }, t);
}

msgpack_array_view::value_type msgpack_array_view::at(size_type i) const {
  VAST_ASSERT(i < size());
  auto xs = data_;
  xs.next(i);
  return decode(xs, value_type_);
}

msgpack_map_view::value_type msgpack_map_view::at(size_type i) const {
  VAST_ASSERT(i < size());
  auto xs = data_;
  xs.next(i * 2);
  auto key = decode(xs, key_type_);
  auto n = xs.next();
  VAST_ASSERT(n > 0);
  auto value = decode(xs, value_type_);
  return {std::move(key), std::move(value)};
}

} // namespace

// There are only small gains we can get here from doing this manually since
// MsgPack is a row-oriented format.
void msgpack_table_slice::append_column_to_index(size_type col,
                                                 value_index& idx) const {
  for (size_t row = 0; row < rows(); ++row) {
    auto row_offset = offset_table_[row];
    auto xs = msgpack::overlay{buffer_.subspan(row_offset)};
    xs.next(col);
    auto x = decode(xs, layout().fields[col].type);
    idx.append(x, offset() + row);
  }
}

caf::atom_value msgpack_table_slice::implementation_id() const noexcept {
  return class_id;
}

data_view msgpack_table_slice::at(size_type row, size_type col) const {
  // First find the desired row...
  VAST_ASSERT(row < offset_table_.size());
  auto offset = offset_table_[row];
  VAST_ASSERT(offset < static_cast<size_t>(buffer_.size()));
  auto xs = msgpack::overlay{buffer_.subspan(offset)};
  // ...then skip (decode) up to the desired column.
  xs.next(col);
  return decode(xs, layout().fields[col].type);
}

} // namespace vast
