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

#include "vast/table_slice.hpp"

#include "vast/chunk.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/overload.hpp"
#include "vast/error.hpp"
#include "vast/expression.hpp"
#include "vast/fbs/table_slice.hpp"
#include "vast/fbs/utils.hpp"
#include "vast/ids.hpp"
#include "vast/logger.hpp"
#include "vast/msgpack_table_slice.hpp"
#include "vast/table_slice_builder.hpp"
#include "vast/table_slice_builder_factory.hpp"
#include "vast/value_index.hpp"

#if VAST_HAVE_ARROW
#  include "vast/arrow_table_slice.hpp"
#endif // VAST_HAVE_ARROW

namespace vast {

// -- utility functions --------------------------------------------------------

namespace {

/// Visits a FlatBuffers table slice to dispatch to its specific encoding.
/// @param visitor A callable object to dispatch to.
/// @param x The FlatBuffers root type for table slices.
/// @note The handler for invalid table slices takes no arguments. If none is
/// specified, visig aborts when the table slice encoding is invalid.
template <class Visitor>
auto visit(Visitor&& visitor, const fbs::TableSlice* x) noexcept(
  std::conjunction_v<
    // Check whether the handlers for all other table slice encodings are
    // noexcept-specified. When adding a new encoding, add it here as well.
    std::is_nothrow_invocable<Visitor>,
    std::is_nothrow_invocable<Visitor, const fbs::table_slice::arrow::v0&>,
    std::is_nothrow_invocable<Visitor, const fbs::table_slice::msgpack::v0&>>) {
  if (!x)
    return std::invoke(std::forward<Visitor>(visitor));
  switch (x->table_slice_type()) {
    case fbs::table_slice::TableSlice::NONE:
      return std::invoke(std::forward<Visitor>(visitor));
    case fbs::table_slice::TableSlice::arrow_v0:
#if VAST_HAVE_ARROW
      return std::invoke(std::forward<Visitor>(visitor),
                         *x->table_slice_as_arrow_v0());
#else
      static std::once_flag flag;
      std::call_once(flag, [] {
        VAST_ERROR_ANON("database contains Arrow-encoded table slices, but "
                        "this version of VAST does not support Apache Arrow; "
                        "data may be missing from exports");
      });
      return std::invoke(std::forward<Visitor>(visitor));
#endif
    case fbs::table_slice::TableSlice::msgpack_v0:
      return std::invoke(std::forward<Visitor>(visitor),
                         *x->table_slice_as_msgpack_v0());
  }
  // GCC-8 fails to recognize that this can never be reached, so we just call a
  // [[noreturn]] function.
  die("unhandled table slice encoding");
}

/// Get a pointer to the `vast.fbs.TableSlice` inside the chunk.
/// @param chunk The chunk to look at.
const fbs::TableSlice* as_flatbuffer(const chunk_ptr& chunk) noexcept {
  if (!chunk)
    return nullptr;
  return fbs::GetTableSlice(chunk->data());
}

/// Verifies that the chunk contains a valid `vast.fbs.TableSlice` FlatBuffers
/// table and returns the `chunk` itself, or returns `nullptr`.
/// @param chunk The chunk to verify.
/// @param verify Whether to verify the chunk.
/// @note This is a no-op if `verify == table_slice::verify::no`.
chunk_ptr
verified_or_none(chunk_ptr&& chunk, enum table_slice::verify verify) noexcept {
  if (verify == table_slice::verify::yes && chunk) {
    const auto data = reinterpret_cast<const uint8_t*>(chunk->data());
    auto verifier = flatbuffers::Verifier{data, chunk->size()};
    if (!verifier.template VerifyBuffer<fbs::TableSlice>())
      chunk = {};
  }
  return std::move(chunk);
}

/// A helper utility for rebuilding an existing table slice with a new builder.
/// @param slice The table slice to rebuild.
/// @param args... Arguments to pass to the table slice builder factory.
template <class... Args>
table_slice rebuild_slice(const table_slice& slice, Args&&... args) {
  auto builder
    = factory<table_slice_builder>::make(std::forward<Args>(args)...);
  if (!builder)
    return {};
  for (table_slice::size_type row = 0; row < slice.rows(); ++row)
    for (table_slice::size_type column = 0; column < slice.columns(); ++column)
      if (!builder->add(slice.at(row, column)))
        return {};
  auto result = builder->finish();
  result.offset(slice.offset());
  return result;
}

/// A helper utility for accessing the state of a table slice.
/// @param slice The encoding-specific FlatBuffers table.
/// @param state The encoding-specific runtime state of the table slice.
template <class Slice, class State>
constexpr auto& state([[maybe_unused]] Slice&& slice, State&& state) noexcept {
  using slice_type = std::decay_t<Slice>;
  if constexpr (std::is_same_v<slice_type, fbs::table_slice::arrow::v0>) {
    return std::forward<State>(state).arrow_v0;
  } else if constexpr (std::is_same_v<slice_type,
                                      fbs::table_slice::msgpack::v0>) {
    return std::forward<State>(state).msgpack_v0;
  } else {
    static_assert(detail::always_false_v<slice_type>, "cannot access table "
                                                      "slice state");
  }
}

} // namespace

// -- constructors, destructors, and assignment operators ----------------------

table_slice::table_slice() noexcept {
  // nop
}

table_slice::table_slice(chunk_ptr&& chunk, enum verify verify) noexcept
  : chunk_{verified_or_none(std::move(chunk), verify)} {
  if (chunk_ && chunk_->unique()) {
    ++num_instances_;
    auto f = detail::overload{
      []() noexcept { die("invalid table slice encoding"); },
      [&](const auto& slice) noexcept {
        auto& state_ptr = state(slice, state_);
        state_ptr = new std::decay_t<decltype(*state_ptr)>{slice};
        chunk_->add_deletion_step([state_ptr]() noexcept {
          --num_instances_;
          delete state_ptr;
        });
      },
    };
    visit(f, as_flatbuffer(chunk_));
  }
}

table_slice::table_slice(chunk_ptr&& chunk, enum verify verify,
                         record_type layout) noexcept
  : chunk_{verified_or_none(std::move(chunk), verify)} {
  if (chunk_ && chunk_->unique()) {
    ++num_instances_;
    auto f = detail::overload{
      []() noexcept { die("invalid table slice encoding"); },
      [&](const auto& slice) noexcept {
        auto& state_ptr = state(slice, state_);
        state_ptr
          = new std::decay_t<decltype(*state_ptr)>{slice, std::move(layout)};
        chunk_->add_deletion_step([state_ptr]() noexcept {
          --num_instances_;
          delete state_ptr;
        });
      },
    };
    visit(f, as_flatbuffer(chunk_));
  }
}

table_slice::table_slice(const fbs::FlatTableSlice& flat_slice,
                         const chunk_ptr& parent_chunk,
                         enum verify verify) noexcept {
  const auto flat_slice_begin
    = reinterpret_cast<const char*>(flat_slice.data()->data());
  const auto flat_slice_size = flat_slice.data()->size();
  VAST_ASSERT(flat_slice_begin >= parent_chunk->begin());
  VAST_ASSERT(flat_slice_begin + flat_slice_size <= parent_chunk->end());
  auto chunk = parent_chunk->slice(flat_slice_begin - parent_chunk->begin(),
                                   flat_slice_size);
  // Delegate the sliced chunk to the constructor.
  *this = table_slice{std::move(chunk), verify};
}

table_slice::table_slice(const table_slice& other) noexcept
  : chunk_{other.chunk_}, offset_{other.offset_}, state_{other.state_} {
  // nop
}

table_slice::table_slice(const table_slice& other, enum encoding encoding,
                         enum verify verify) noexcept {
  // FIXME: When switching to versioned encodings, perform re-encoding when
  // the encoding version is outdated, too.
  if (encoding == other.encoding()) {
    chunk_ = other.chunk_;
    offset_ = other.offset_;
    state_ = other.state_;
  } else {
    switch (encoding) {
      case encoding::none:
        // Do nothing, we have an invalid table slice here.
        break;
      case encoding::arrow:
        *this = rebuild_slice(other, caf::atom("arrow"), other.layout());
        break;
      case encoding::msgpack:
        *this = rebuild_slice(other, caf::atom("msgpack"), other.layout());
        break;
    }
    // If requested, verify the chunk after performing re-encoding.
    chunk_ = verified_or_none(std::move(chunk_), verify);
  }
}

table_slice& table_slice::operator=(const table_slice& rhs) noexcept {
  chunk_ = rhs.chunk_;
  offset_ = rhs.offset_;
  state_ = rhs.state_;
  return *this;
}

table_slice::table_slice(table_slice&& other) noexcept
  : chunk_{std::exchange(other.chunk_, {})},
    offset_{std::exchange(other.offset_, invalid_id)},
    state_{std::exchange(other.state_, {})} {
  // nop
}

table_slice::table_slice(table_slice&& other, enum encoding encoding,
                         enum verify verify) noexcept {
  if (encoding == other.encoding()) {
    // If the encoding matches, we can just move the data.
    chunk_ = std::exchange(other.chunk_, {});
    offset_ = std::exchange(other.offset_, invalid_id);
    state_ = std::exchange(other.state_, {});
  } else {
    // Changing the encoding requires a copy, so we just delegate to the
    // copy-constructor with re-encoding.
    const auto& copy = std::exchange(other, {});
    *this = table_slice{copy, encoding, verify};
  }
}

table_slice& table_slice::operator=(table_slice&& rhs) noexcept {
  chunk_ = std::exchange(rhs.chunk_, {});
  offset_ = std::exchange(rhs.offset_, invalid_id);
  state_ = std::exchange(rhs.state_, {});
  return *this;
}

table_slice::~table_slice() noexcept {
  // nop
}

// -- operators ----------------------------------------------------------------

bool operator==(const table_slice& lhs, const table_slice& rhs) noexcept {
  // Check whether the slices point to the same chunk of data.
  if (lhs.chunk_ == rhs.chunk_)
    return true;
  // Check whether the slices have different sizes or layouts.
  if (lhs.rows() != rhs.rows() || lhs.columns() != rhs.columns()
      || lhs.layout() != rhs.layout())
    return false;
  // Check whether the slices contain different data.
  for (size_t row = 0; row < lhs.rows(); ++row)
    for (size_t col = 0; col < lhs.columns(); ++col)
      if (lhs.at(row, col) != rhs.at(row, col))
        return false;
  return true;
}

bool operator!=(const table_slice& lhs, const table_slice& rhs) noexcept {
  return !(lhs == rhs);
}

// -- properties ---------------------------------------------------------------

enum table_slice::encoding table_slice::encoding() const noexcept {
  auto f = detail::overload{
    []() noexcept { return encoding::none; },
    [](const fbs::table_slice::arrow::v0&) noexcept {
      // clang-format-fix
      return encoding::arrow;
    },
    [](const fbs::table_slice::msgpack::v0&) noexcept {
      return encoding::msgpack;
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

const record_type& table_slice::layout() const noexcept {
  auto f = detail::overload{
    []() noexcept {
      static const auto empty_layout = record_type{};
      return &empty_layout;
    },
    [&](const auto& slice) noexcept { return &state(slice, state_)->layout(); },
  };
  return *visit(f, as_flatbuffer(chunk_));
}

table_slice::size_type table_slice::rows() const noexcept {
  auto f = detail::overload{
    []() noexcept { return size_type{}; },
    [&](const auto& slice) noexcept { return state(slice, state_)->rows(); },
  };
  return visit(f, as_flatbuffer(chunk_));
}

table_slice::size_type table_slice::columns() const noexcept {
  auto f = detail::overload{
    []() noexcept { return size_type{}; },
    [&](const auto& slice) noexcept { return state(slice, state_)->columns(); },
  };
  return visit(f, as_flatbuffer(chunk_));
}

id table_slice::offset() const noexcept {
  return offset_;
}

void table_slice::offset(id offset) noexcept {
  offset_ = offset;
}

int table_slice::instances() noexcept {
  return num_instances_;
}

// -- data access --------------------------------------------------------------

void table_slice::append_column_to_index(table_slice::size_type column,
                                         value_index& index) const {
  VAST_ASSERT(offset() != invalid_id);
  auto f = detail::overload{
    []() noexcept {
      die("cannot append column of invalid table slice to index");
    },
    [&](const auto& slice) noexcept {
      return state(slice, state_)
        ->append_column_to_index(offset(), column, index);
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

data_view table_slice::at(table_slice::size_type row,
                          table_slice::size_type column) const {
  VAST_ASSERT(row < rows());
  VAST_ASSERT(column < columns());
  auto f = detail::overload{
    [&]() noexcept -> data_view {
      die("cannot access data of invalid table slice");
    },
    [&](const auto& slice) noexcept {
      return state(slice, state_)->at(row, column);
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

#if VAST_HAVE_ARROW

std::shared_ptr<arrow::RecordBatch> as_record_batch(const table_slice& slice) {
  auto f = detail::overload{
    []() noexcept -> std::shared_ptr<arrow::RecordBatch> {
      die("cannot access record batch of invalid table slice");
    },
    [&](auto&&) noexcept -> std::shared_ptr<arrow::RecordBatch> {
      VAST_ASSERT(slice.encoding() != table_slice::encoding::arrow);
      // Rebuild the slice as an Arrow-encoded table slice.
      auto copy = table_slice(slice, table_slice::encoding::arrow,
                              table_slice::verify::no);
      // Bind the lifetime of the copy (and thus the returned Record Batch) to
      // the lifetime of the original slice.
      slice.chunk_->ref();
      copy.chunk_->add_deletion_step([=]() noexcept { slice.chunk_->deref(); });
      return as_record_batch(copy);
    },
    [&](const fbs::table_slice::arrow::v0&) noexcept {
      return slice.state_.arrow_v0->record_batch();
    },
  };
  return visit(f, as_flatbuffer(slice.chunk_));
}

#endif // VAST_HAVE_ARROW

// -- concepts -----------------------------------------------------------------

span<const byte> as_bytes(const table_slice& slice) noexcept {
  return as_bytes(slice.chunk_);
}

// -- operators ----------------------------------------------------------------

void select(std::vector<table_slice>& result, const table_slice& xs,
            const ids& selection) {
  VAST_ASSERT(xs.encoding() != table_slice::encoding::none);
  auto xs_ids = make_ids({{xs.offset(), xs.offset() + xs.rows()}});
  auto intersection = selection & xs_ids;
  auto intersection_rank = rank(intersection);
  // Do no rows qualify?
  if (intersection_rank == 0)
    return;
  // Do all rows qualify?
  if (rank(xs_ids) == intersection_rank) {
    result.emplace_back(xs);
    return;
  }
  // Get the desired encoding, and the already serialized layout.
  caf::atom_value impl = caf::atom("NULL");
  span<const byte> serialized_layout = {};
  auto f = detail::overload{
    []() noexcept {},
    [&](const fbs::table_slice::arrow::v0& slice) noexcept {
      impl = caf::atom("arrow");
      serialized_layout
        = {reinterpret_cast<const byte*>(slice.layout()->data()),
           slice.layout()->size()};
    },
    [&](const fbs::table_slice::msgpack::v0& slice) noexcept {
      impl = caf::atom("msgpack");
      serialized_layout
        = {reinterpret_cast<const byte*>(slice.layout()->data()),
           slice.layout()->size()};
    },
  };
  visit(f, fbs::GetTableSlice(as_bytes(xs).data()));
  // Start slicing and dicing.
  auto builder = factory<table_slice_builder>::make(impl, xs.layout());
  if (builder == nullptr) {
    VAST_ERROR(__func__, "failed to get a table slice builder for", impl);
    return;
  }
  id last_offset = xs.offset();
  auto push_slice = [&] {
    if (builder->rows() == 0)
      return;
    auto slice = builder->finish(serialized_layout);
    if (slice.encoding() == table_slice::encoding::none) {
      VAST_WARNING(__func__, "got an empty slice");
      return;
    }
    slice.offset(last_offset);
    result.emplace_back(std::move(slice));
  };
  auto last_id = last_offset - 1;
  for (auto id : select(intersection)) {
    // Finish last slice when hitting non-consecutive IDs.
    if (last_id + 1 != id) {
      push_slice();
      last_offset = id;
      last_id = id;
    } else {
      ++last_id;
    }
    VAST_ASSERT(id >= xs.offset());
    auto row = id - xs.offset();
    VAST_ASSERT(row < xs.rows());
    for (size_t column = 0; column < xs.columns(); ++column) {
      auto cell_value = xs.at(row, column);
      if (!builder->add(cell_value)) {
        VAST_ERROR(__func__, "failed to add data at column", column, "in row",
                   row, "to the builder:", cell_value);
        return;
      }
    }
  }
  push_slice();
}

std::vector<table_slice> select(const table_slice& xs, const ids& selection) {
  std::vector<table_slice> result;
  select(result, xs, selection);
  return result;
}

table_slice truncate(const table_slice& slice, size_t num_rows) {
  VAST_ASSERT(slice.encoding() != table_slice::encoding::none);
  VAST_ASSERT(num_rows > 0);
  if (slice.rows() <= num_rows)
    return slice;
  auto selection = make_ids({{slice.offset(), slice.offset() + num_rows}});
  auto xs = select(slice, selection);
  VAST_ASSERT(xs.size() == 1);
  return std::move(xs.back());
}

std::pair<table_slice, table_slice>
split(const table_slice& slice, size_t partition_point) {
  VAST_ASSERT(slice.encoding() != table_slice::encoding::none);
  if (partition_point == 0)
    return {{}, slice};
  if (partition_point >= slice.rows())
    return {slice, {}};
  auto first = slice.offset();
  auto mid = first + partition_point;
  auto last = first + slice.rows();
  // Create first table slice.
  auto xs = select(slice, make_ids({{first, mid}}));
  VAST_ASSERT(xs.size() == 1);
  // Create second table slice.
  select(xs, slice, make_ids({{mid, last}}));
  VAST_ASSERT(xs.size() == 2);
  return {std::move(xs.front()), std::move(xs.back())};
}

uint64_t rows(const std::vector<table_slice>& slices) {
  auto result = uint64_t{0};
  for (auto& slice : slices)
    result += slice.rows();
  return result;
}

namespace {

struct row_evaluator {
  row_evaluator(const table_slice& slice, size_t row)
    : slice_{slice}, row_{row} {
    // nop
  }

  template <class T>
  bool operator()(const data& d, const T& x) {
    return (*this)(x, d);
  }

  template <class T, class U>
  bool operator()(const T&, const U&) {
    return false;
  }

  bool operator()(caf::none_t) {
    return false;
  }

  bool operator()(const conjunction& c) {
    for (auto& op : c)
      if (!caf::visit(*this, op))
        return false;
    return true;
  }

  bool operator()(const disjunction& d) {
    for (auto& op : d)
      if (caf::visit(*this, op))
        return true;
    return false;
  }

  bool operator()(const negation& n) {
    return !caf::visit(*this, n.expr());
  }

  bool operator()(const predicate& p) {
    op_ = p.op;
    return caf::visit(*this, p.lhs, p.rhs);
  }

  bool operator()(const attribute_extractor& e, const data& d) {
    // TODO: Transform this AST node into a constant-time lookup node (e.g.,
    // data_extractor). It's not necessary to iterate over the schema for
    // every row; this should happen upfront.
    auto&& layout = slice_.layout();
    if (e.attr == atom::type_v)
      return evaluate(layout.name(), op_, d);
    if (e.attr == atom::timestamp_v) {
      for (size_t col = 0; col < layout.fields.size(); ++col) {
        auto& field = layout.fields[col];
        if (has_attribute(field.type, "timestamp")) {
          if (!caf::holds_alternative<time_type>(field.type)) {
            VAST_WARNING_ANON("got timestamp attribute for non-time type");
            return false;
          }
        }
        auto lhs = to_canonical(field.type, slice_.at(row_, col));
        auto rhs = make_view(d);
        return evaluate_view(lhs, op_, rhs);
      }
    }
    return false;
  }

  bool operator()(const type_extractor&, const data&) {
    die("type extractor should have been resolved at this point");
  }

  bool operator()(const field_extractor&, const data&) {
    die("field extractor should have been resolved at this point");
  }

  bool operator()(const data_extractor& e, const data& d) {
    VAST_ASSERT(e.offset.size() == 1);
    auto&& layout = slice_.layout();
    if (e.type != layout) // TODO: make this a precondition instead.
      return false;
    auto col = e.offset[0];
    auto& field = layout.fields[col];
    auto lhs = to_canonical(field.type, slice_.at(row_, col));
    auto rhs = make_data_view(d);
    return evaluate_view(lhs, op_, rhs);
  }

  const table_slice& slice_;
  size_t row_;
  relational_operator op_;
};

} // namespace

ids evaluate(const expression& expr, const table_slice& slice) {
  // TODO: switch to a column-based evaluation strategy where it makes sense.
  ids result;
  result.append(false, slice.offset());
  for (size_t row = 0; row != slice.rows(); ++row) {
    auto x = caf::visit(row_evaluator{slice, row}, expr);
    result.append_bit(x);
  }
  return result;
}

} // namespace vast
