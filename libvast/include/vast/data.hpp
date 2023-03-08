//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/aliases.hpp"
#include "vast/concept/printable/print.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/operators.hpp"
#include "vast/detail/string.hpp"
#include "vast/detail/type_traits.hpp"
#include "vast/ip.hpp"
#include "vast/pattern.hpp"
#include "vast/policy/merge_lists.hpp"
#include "vast/subnet.hpp"
#include "vast/time.hpp"

#include <caf/default_sum_type_access.hpp>
#include <caf/detail/type_list.hpp>
#include <caf/expected.hpp>
#include <caf/fwd.hpp>
#include <caf/none.hpp>
#include <caf/sum_type.hpp>
#include <caf/variant.hpp>

#include <chrono>
#include <filesystem>
#include <optional>
#include <string>
#include <tuple>
#include <type_traits>

namespace vast {

class data;

namespace detail {

struct invalid_data_type {};

template <class T>
constexpr auto to_data_type() {
  if constexpr (std::is_floating_point_v<T>)
    return double{};
  else if constexpr (std::is_same_v<T, bool>)
    return bool{};
  else if constexpr (std::is_unsigned_v<T>) {
    // TODO (ch7585): Define enumeration and count as strong typedefs to
    //                avoid error-prone heuristics like this one.
    if constexpr (sizeof(T) == 1)
      return enumeration{};
    else
      return uint64_t{};
  } else if constexpr (std::is_convertible_v<T, std::string>)
    return std::string{};
  else if constexpr (detail::is_any_v<T, caf::none_t, int64_t, duration, time,
                                      pattern, ip, subnet, list, map, record>)
    return T{};
  else
    return invalid_data_type{};
}

} // namespace detail

/// Converts a C++ type to the corresponding VAST data type.
/// @relates data
template <class T>
using to_data_type = decltype(detail::to_data_type<std::decay_t<T>>());

/// A type-erased represenation of various types of data.
/// @note Be careful when constructing a `vector<data>` from a single `list`.
/// Brace-initialization may behave unexpectedly, creating a nested vector
/// instead of copying the elements of the list for gcc only. This happens for
/// two reasons:
/// - `data` can be implicitly constructed from `list`, which is exactly
///   `vector<data>`. This is not easily fixable, because `data` is a
///   `variant<list, ...>`, which is implicitly constructible from `list` by
///   design.
/// - Core Working Group (CWG) issue #2137 has not been fixed in clang yet.
///   c.f. https://wg21.cmeerw.net/cwg/issue2137, causing brace-initialization
///   to erroneously behave like other means of construction.
class data : detail::totally_ordered<data>, detail::addable<data> {
public:
  // clang-format off
  using types = caf::detail::type_list<
    caf::none_t,
    bool,
    int64_t,
    uint64_t,
    double,
    duration,
    time,
    std::string,
    pattern,
    ip,
    subnet,
    enumeration,
    list,
    map,
    record
  >;
  // clang-format on

  /// The sum type of all possible builtin types.
  using variant = caf::detail::tl_apply_t<types, caf::variant>;

  /// Default-constructs empty data.
  data() = default;

  data(const data&) = default;
  data& operator=(const data&) = default;
  data(data&&) noexcept = default;
  data& operator=(data&&) noexcept = default;
  ~data() noexcept = default;

  /// Constructs data from optional data.
  /// @param x The optional data instance.
  template <class T>
  data(std::optional<T> x) : data{x ? std::move(*x) : data{}} {
    // nop
  }

  /// Constructs data from a `std::chrono::duration`.
  /// @param x The duration to construct data from.
  template <class Rep, class Period>
  data(std::chrono::duration<Rep, Period> x) : data_{duration{x}} {
    // nop
  }

  /// Constructs data.
  /// @param x The instance to construct data from.
  template <class T>
    requires(!std::same_as<to_data_type<T>, detail::invalid_data_type>)
  data(T&& x) : data_{to_data_type<T>(std::forward<T>(x))} {
    // nop
  }

  friend bool operator==(const data& lhs, const data& rhs);
  friend bool operator<(const data& lhs, const data& rhs);

  // These operators need to be templates so they're instantiated at a later
  // point in time, because there'd be a cyclic dependency otherwise.
  // caf::variant<Ts...> is just a placeholder for vast::data_view here.

  template <class... Ts>
  friend bool operator==(const data& lhs, const caf::variant<Ts...>& rhs) {
    return is_equal(lhs, rhs);
  }

  template <class... Ts>
  friend bool operator==(const caf::variant<Ts...>& lhs, const data& rhs) {
    return is_equal(lhs, rhs);
  }

  template <class... Ts>
  friend bool operator!=(const data& lhs, const caf::variant<Ts...>& rhs) {
    return !is_equal(lhs, rhs);
  }

  template <class... Ts>
  friend bool operator!=(const caf::variant<Ts...>& lhs, const data& rhs) {
    return !is_equal(lhs, rhs);
  }

  friend flatbuffers::Offset<fbs::Data>
  pack(flatbuffers::FlatBufferBuilder& builder, const data& value);

  friend caf::error unpack(const fbs::Data& from, data& to);

  /// @cond PRIVATE

  [[nodiscard]] variant& get_data() {
    return data_;
  }

  [[nodiscard]] const variant& get_data() const {
    return data_;
  }

  template <class Inspector>
  friend auto inspect(Inspector& f, data& x) {
    return f.apply(x.data_);
  }

  /// @endcond

private:
  variant data_;
};

} // namespace vast

namespace caf {

template <>
struct sum_type_access<vast::data> : default_sum_type_access<vast::data> {};

} // namespace caf

namespace vast {

// -- helpers -----------------------------------------------------------------

/// @returns `true` if *x is a *basic* data.
/// @relates data
bool is_basic(const data& x);

/// @returns `true` if *x is a *complex* data.
/// @relates data
bool is_complex(const data& x);

/// @returns `true` if *x is a *recursive* data.
/// @relates data
bool is_recursive(const data& x);

/// @returns `true` if *x is a *container* data.
/// @relates data
bool is_container(const data& x);

/// @returns The maximum nesting depth any field in the record `r`.
size_t depth(const record& r);

/// Flattens a record recursively.
record flatten(const record& r);

/// Flattens a record recursively according to a record type such
/// that only nested records are lifted into parent list.
/// @param r The record to flatten.
/// @param rt The record type according to which *r* should be flattened.
/// @returns The flattened record if the nested structure of *r* is a valid
///          subset of *rt*.
std::optional<record> flatten(const record& r, const record_type& rt);
std::optional<data> flatten(const data& x, const type& t);

/// Merges one record into another such that the source overwrites potential
/// keys in the destination.
/// @param src The record to merge into *dst*.
/// @param dst The result record containing the merged result.
/// @param merge_lists Whether to merge or overwrite lists.
void merge(const record& src, record& dst,
           enum policy::merge_lists merge_lists);

/// Evaluates a data predicate.
/// @param lhs The LHS of the predicate.
/// @param op The relational operator.
/// @param rhs The RHS of the predicate.
bool evaluate(const data& lhs, relational_operator op, const data& rhs);

/// Tries to find the entry with the dot-sperated `path`.
/// @pre `!path.empty()`
template <typename T>
  requires caf::detail::tl_contains<data::types, T>::value
const T* get_if(const record* r, std::string_view path) {
  VAST_ASSERT(!path.empty());
  auto names = detail::split(path, ".");
  VAST_ASSERT(!names.empty());
  auto current = r;
  for (auto& name : names) {
    auto last = &name == &names.back();
    auto it = current->find(name);
    if (it == current->end())
      // Field not found.
      return nullptr;
    auto& field = it->second;
    if (last) {
      // Path was completely processed.
      return caf::get_if<T>(&field);
    }
    current = caf::get_if<record>(&field);
    if (!current) {
      // This is not a record, but path continues.
      return nullptr;
    }
  }
  die("unreachable");
}

template <typename T>
T* get_if(record* r, std::string_view path) {
  auto result = get_if<T>(static_cast<const record*>(r), path);
  return const_cast<T*>(result); // NOLINT
}

/// Finds the entry with the dot-sperated `path` or returns the `fallback` value.
/// @pre `!path.empty()`
template <class T>
  requires(!std::convertible_to<T, std::string_view>)
T const& get_or(const record& r, std::string_view path, T const& fallback) {
  VAST_ASSERT(!path.empty());
  auto result = get_if<T>(&r, path);
  if (result)
    return *result;
  return fallback;
}

template <class T>
  requires(!std::is_reference_v<T>)
T const& get_or(const record& r, std::string_view path, T&& fallback) = delete;

inline std::string_view
get_or(const record& r, std::string_view path, std::string_view fallback) {
  auto result = get_if<std::string>(&r, path);
  if (result)
    return *result;
  return fallback;
}

/// Finds the entry with the dot-seperated `path`, asserting that it exists.
/// @pre `!path.empty()`
template <typename T>
T const& get(record const& r, std::string_view path) {
  auto result = get_if<T>(&r, path);
  VAST_ASSERT(result);
  return *result;
}

template <typename T>
T& get(record& r, std::string_view path) {
  auto result = get_if<T>(&r, path);
  VAST_ASSERT(result);
  return *result;
}

// -- convertible -------------------------------------------------------------

template <class T, class... Opts>
data to_data(const T& x, Opts&&... opts) {
  data d;
  if (convert(x, d, std::forward<Opts>(opts)...))
    return d;
  return {};
}

caf::error convert(const record& xs, caf::dictionary<caf::config_value>& ys);
caf::error convert(const record& xs, caf::config_value& cv);
caf::error convert(const data& d, caf::config_value& cv);

bool convert(const caf::dictionary<caf::config_value>& xs, record& ys);
bool convert(const caf::dictionary<caf::config_value>& xs, data& y);
bool convert(const caf::config_value& x, data& y);

// -- strip ------------------------------------------------------------

/// Remove empty sub-records from the tree.
/// Example:
///   { a = 13, b = {}, c = { d = {} } }
/// is changed into:
///   { a = 13 }
record strip(const record& xs);

// -- JSON -------------------------------------------------------------

/// Prints data as JSON.
/// @param x The data instance.
/// @returns The JSON representation of *x*, or an error.
caf::expected<data> from_json(std::string_view x);

/// Prints data as JSON.
/// @param x The data instance.
/// @returns The JSON representation of *x*, or an error.
caf::expected<std::string> to_json(const data& x);

// -- YAML -------------------------------------------------------------

/// Parses YAML into a data.
/// @param str The string containing the YAML content
/// @returns The parsed YAML as data, or an error.
caf::expected<data> from_yaml(std::string_view str);

/// Loads YAML from a file.
/// @param file The file to load.
/// @returns The parsed YAML or an error.
caf::expected<data> load_yaml(const std::filesystem::path& file);

/// Loads all *.yml and *.yaml files in a given directory.
/// @param dir The directory to traverse recursively.
/// @param max_recursion The maximum number of nested directories to traverse
/// before aborting.
/// @returns The parsed YAML, one `data` instance per file, or an error.
caf::expected<std::vector<std::pair<std::filesystem::path, data>>>
load_yaml_dir(const std::filesystem::path& dir, size_t max_recursion
                                                = defaults::max_recursion);

/// Prints data as YAML.
/// @param x The data instance.
/// @returns The YAML representation of *x*, or an error.
caf::expected<std::string> to_yaml(const data& x);

} // namespace vast

#include "vast/concept/printable/vast/data.hpp" // IWYU pragma: keep

namespace fmt {

template <>
struct formatter<vast::data> {
  template <typename ParseContext>
  constexpr auto parse(ParseContext& ctx) {
    return ctx.begin();
  }

  template <typename FormatContext>
  auto format(const vast::data& value, FormatContext& ctx) const {
    auto out = ctx.out();
    vast::print(out, value);
    return out;
  }
};

} // namespace fmt
