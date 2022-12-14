//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/as_bytes.hpp"
#include "vast/detail/function.hpp"
#include "vast/detail/legacy_deserialize.hpp"
#include "vast/detail/narrow.hpp"

#include <caf/deserializer.hpp>
#include <caf/intrusive_ptr.hpp>
#include <caf/ref_counted.hpp>

#include <cstddef>
#include <cstring>
#include <filesystem>
#include <span>
#include <utility>

namespace vast {

/// A reference-counted contiguous block of memory. A chunk supports custom
/// deleters for custom deallocations when the last instance goes out of scope.
class chunk final : public caf::ref_counted {
public:
  // -- member types -----------------------------------------------------------

  using value_type = std::byte;
  using view_type = std::span<const value_type>;
  using pointer = typename view_type::pointer;
  using size_type = typename view_type::size_type;
  using iterator = typename view_type::iterator;
  using deleter_type = detail::unique_function<void() noexcept>;

  // -- constructors, destructors, and assignment operators --------------------

  /// Forbid all means of construction explicitly.
  chunk() noexcept = delete;
  chunk(const chunk&) noexcept = delete;
  chunk& operator=(const chunk&) noexcept = delete;
  chunk(chunk&&) noexcept = delete;
  chunk& operator=(chunk&&) noexcept = delete;

  /// Destroys the chunk and releases owned memory via the deleter.
  ~chunk() noexcept override;

  // -- factory functions ------------------------------------------------------

  /// Constructs a chunk of particular size and pointer to data.
  /// @param data The raw byte data.
  /// @param size The number of bytes *data* points to.
  /// @param deleter The function to delete the data.
  /// @returns A chunk pointer or `nullptr` on failure.
  static chunk_ptr
  make(const void* data, size_type size, deleter_type&& deleter) noexcept;

  /// Constructs a chunk of particular size and pointer to data.
  /// @param view The span holding the raw data.
  /// @param deleter The function to delete the data.
  /// @returns A chunk pointer or `nullptr` on failure.
  static chunk_ptr make(view_type view, deleter_type&& deleter) noexcept;

  /// Constructs an empty chunk
  static chunk_ptr make_empty() noexcept;

  /// Construct a chunk from a byte buffer, and bind the lifetime of the chunk
  /// to the buffer.
  /// @param buffer The byte buffer.
  /// @note This overload can only be selected if the buffer is an
  /// rvalue-reference, and an overload of *as_bytes* exists for the buffer. This
  /// is intended to guard against accidental copies when calling this function.
  /// @returns A chunk pointer or `nullptr` on failure.
  template <class Buffer>
    requires(!std::is_lvalue_reference_v<Buffer> && //
             requires(const Buffer& buffer) {
               { as_bytes(buffer) } -> std::convertible_to<view_type>;
             })
  static auto make(Buffer&& buffer) -> chunk_ptr {
    // Move the buffer into a unique pointer; otherwise, we might run into
    // issues when moving the buffer invalidates the span, e.g., for strings
    // with small buffer optimizations.
    auto movable_buffer = std::make_unique<Buffer>(std::exchange(buffer, {}));
    const auto view = static_cast<view_type>(as_bytes(*movable_buffer));
    return make(view, [buffer = std::move(movable_buffer)]() noexcept {
      static_cast<void>(buffer);
    });
  }

  /// Construct a chunk from an Arrow buffer, and bind the lifetime of the chunk
  /// to the buffer.
  /// @param buffer The Arrow buffer.
  /// @returns A chunk pointer or `nullptr` on failure.
  static chunk_ptr make(std::shared_ptr<arrow::Buffer> buffer) noexcept;

  /// Avoid the common mistake of binding ownership to a span.
  template <class Byte, size_t Extent>
  static auto make(std::span<Byte, Extent>&&) = delete;

  /// Avoid the common mistake of binding ownership to a string view.
  static auto make(std::string_view&&) = delete;

  /// Construct a chunk from a byte buffer by copying it.
  /// @param buffer The byte buffer.
  /// @returns A chunk pointer or `nullptr` on failure.
  template <class Buffer>
    requires requires(const Buffer& buffer) {
      { as_bytes(buffer) } -> std::convertible_to<view_type>;
    }
  static auto copy(const Buffer& buffer) -> chunk_ptr {
    const auto view = static_cast<view_type>(as_bytes(buffer));
    auto copy = std::make_unique<value_type[]>(view.size());
    const auto data = copy.get();
    std::memcpy(data, view.data(), view.size());
    return make(data, view.size(), [copy = std::move(copy)]() noexcept {
      static_cast<void>(copy);
    });
  }

  /// Memory-maps a chunk from a read-only file.
  /// @param filename The name of the file to memory-map.
  /// @param size The number of bytes to map. If 0, map the entire file.
  /// @param offset Where to start in terms of number of bytes from the start.
  /// @returns A chunk pointer or an error on failure. The returned chunk
  /// pointer is never `nullptr`.
  static caf::expected<chunk_ptr>
  mmap(const std::filesystem::path& filename, size_type size = 0,
       size_type offset = 0);

  /// Compresses a view of bytes into a chunk.
  /// @param bytes The bytes to compress.
  /// @note For later decompression, store the size of the chunk before
  /// compression alongside the resulting compressed chunk.
  /// @returns A compressed chunk, or an error.
  /// @relates decompress
  static caf::expected<chunk_ptr> compress(view_type bytes) noexcept;

  /// Decompress a view of bytes into a chunk.
  /// @param The bytes to decompress.
  /// @param decompressed_size The initial buffer size for the resulting
  /// chunk. Must exactly match the buffer size before compression.
  /// @returns A decompressed chunk, or an error.
  /// @relates compress
  static caf::expected<chunk_ptr>
  decompress(view_type bytes, size_t decompressed_size) noexcept;

  // -- container facade -------------------------------------------------------

  /// @returns The pointer to the chunk.
  pointer data() const noexcept;

  /// @returns The size of the chunk.
  size_type size() const noexcept;

  /// @returns The amount of bytes that are currently reciding in active memory,
  ///          i.e. how much of the chunk is "paged-in".
  caf::expected<chunk::size_type> incore() const noexcept;

  /// @returns A pointer to the first byte in the chunk.
  iterator begin() const noexcept;

  /// @returns A pointer to one past the last byte in the chunk.
  iterator end() const noexcept;

  // -- accessors --------------------------------------------------------------

  /// Creates a new chunk that structurally shares the data of this chunk.
  /// @param start The offset from the beginning where to begin the new chunk.
  /// @param length The length of the slice, beginning at *start*.
  /// @returns A new chunk over the subset.
  /// @pre `start < size()`
  chunk_ptr
  slice(size_type start, size_type length
                         = std::numeric_limits<size_type>::max()) const;

  /// Creates a new chunk that structurally shares the data of this chunk.
  /// @param view A view of the to-be sliced chunk.
  /// @returns A new chunk over the subset.
  /// @pre `view.begin() >= begin()`
  /// @pre `view.end() <= end()`
  chunk_ptr slice(view_type view) const;

  /// Adds an additional step for deleting this chunk.
  /// @param step Function object that gets called after all previous deletion
  /// steps ran. It must be nothrow-invocable, as it gets called during the
  /// destructor of chunk.
  template <class Step>
  void add_deletion_step(Step&& step) noexcept {
    static_assert(std::is_nothrow_invocable_r_v<void, Step>,
                  "'Step' must have the signature 'void () noexcept'");
    if (deleter_) {
      auto g = [first = std::move(deleter_),
                second = std::forward<Step>(step)]() mutable noexcept {
        std::invoke(std::move(first));
        std::invoke(std::move(second));
      };
      deleter_ = std::move(g);
    } else {
      deleter_ = std::forward<Step>(step);
    }
  }

  // -- free functions --------------------------------------------------------

  /// Create an Arrow Buffer that structurally shares the lifetime of the chunk.
  friend std::shared_ptr<arrow::Buffer>
  as_arrow_buffer(chunk_ptr chunk) noexcept;

  /// Create an Arrow RandomAccessFile with zero-copy support that structurally
  /// shares the lifetime of the chunk.
  friend std::shared_ptr<arrow::io::RandomAccessFile>
  as_arrow_file(chunk_ptr chunk) noexcept;

  // -- concepts --------------------------------------------------------------

  friend std::span<const std::byte> as_bytes(const chunk_ptr& x) noexcept;
  friend caf::error
  write(const std::filesystem::path& filename, const chunk_ptr& x);
  friend caf::error read(const std::filesystem::path& filename, chunk_ptr& x);

private:
  // -- implementation details -------------------------------------------------

  /// The size of an invalid chunk when serialized.
  static constexpr auto invalid_size = int64_t{-1};

  /// Constructs a chunk from a span and a deleter.
  /// @param view The span holding the raw data.
  /// @param deleter The function to delete the data.
  chunk(view_type view, deleter_type&& deleter) noexcept;

  template <class Inspector>
  friend bool load_impl(Inspector& f, chunk_ptr& x) {
    int64_t size = 0;
    if (!f.apply(size))
      return false;
    if (size == chunk::invalid_size) {
      x = nullptr;
      return true;
    }
    if (size == 0) {
      x = chunk::make_empty();
      return true;
    }
    auto buffer = std::make_unique<chunk::value_type[]>(size);
    const auto data = buffer.get();
    for (auto i = 0; i < size; ++i)
      if (!f.apply(buffer[i])) {
        x = nullptr;
        return false;
      }
    x = chunk::make(data, size, [buffer = std::move(buffer)]() noexcept {
      static_cast<void>(buffer);
    });
    return true;
  }

  template <class Inspector>
  friend bool save_impl(Inspector& f, chunk_ptr& x) {
    using vast::detail::narrow;
    if (x == nullptr)
      return f.apply(chunk::invalid_size);
    if (!f.apply(narrow<int64_t>(x->size())))
      return false;
    for (auto byte : *x)
      if (!f.apply(byte))
        return false;
    return true;
  }

  /// A sized view on the raw data.
  const view_type view_;

  /// The function to delete the data.
  deleter_type deleter_;
};

template <class Inspector>
bool inspect(Inspector& f, chunk_ptr& x) {
  if constexpr (Inspector::is_loading) {
    return load_impl(f, x);
  } else {
    return save_impl(f, x);
  }
}

} // namespace vast

namespace fmt {

template <>
struct formatter<vast::chunk_ptr> {
  template <class ParseContext>
  constexpr auto parse(ParseContext& ctx) {
    return ctx.begin();
  }

  template <class FormatContext>
  auto format(const vast::chunk_ptr& value, FormatContext& ctx) const {
    if (!value)
      return format_to(ctx.out(), "{}", "nullptr");
    return format_to(ctx.out(), "*{}", fmt::ptr(value.get()));
  }
};

} // namespace fmt
