//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/concept/printable/core.hpp"
#include "vast/concept/printable/print.hpp"
#include "vast/concept/printable/string/char.hpp"
#include "vast/concept/printable/string/string.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/legacy_deserialize.hpp"
#include "vast/detail/operators.hpp"
#include "vast/detail/stable_set.hpp"
#include "vast/taxonomies.hpp"
#include "vast/type.hpp"

#include <caf/expected.hpp>

#include <filesystem>
#include <string>
#include <vector>

namespace vast {

struct module_ng {
  std::string name = {};
  std::string description = {};
  std::vector<std::string> references = {};

  std::vector<type> types = {};
  concepts_map concepts = {};
  models_map models = {};

  template <class Inspector>
  friend auto inspect(Inspector& f, module_ng& x) {
    return f(x.name, x.description, x.references, x.types, x.concepts,
             x.models);
  }

  inline static const record_type& layout() noexcept {
    static const auto result = record_type{
      {"module", string_type{}},
      {"description", string_type{}},
      {"references", list_type{string_type{}}},
      {"types", list_type{record_type{}}},
      {"concepts", concepts_data_layout},
      {"models", models_data_layout},
    };
    return result;
  };

  // MAYBE:  static caf::error merge(const module& other);
};

caf::expected<module_ng>
load_module_ng(const std::filesystem::path& module_file);

struct module_gin {
  std::map<std::string, module_ng> modules;

  template <class Inspector>
  friend auto inspect(Inspector& f, module_gin& x) {
    return f(x.modules);
  }

private:
  caf::error
  load_recursive(const detail::stable_set<std::filesystem::path>& module_dirs,
                 size_t max_recursion = defaults::max_recursion);
};

static caf::expected<module_gin>
load_module_gin(const caf::actor_system_config& cfg);

using symbol_table_ng = std::map<std::string, type>;

caf::error convert(const record& in, type& out, const symbol_table_ng& table);

/// A sequence of types.
class module : detail::equality_comparable<module> {
public:
  using value_type = type;
  using const_iterator = std::vector<value_type>::const_iterator;
  using iterator = std::vector<value_type>::iterator;

  friend bool operator==(const module& x, const module& y);

  /// Merges two module.
  /// @param s1 The first module.
  /// @param s2 The second module.
  /// @returns The union of *s1* and *s2* if the inputs are disjunct.
  static caf::expected<module> merge(const module& s1, const module& s2);

  /// Combines two module, prefering definitions from s2 on conflicts.
  /// @param s1 The first module.
  /// @param s2 The second module.
  /// @returns The combination of *s1* and *s2*.
  static module combine(const module& s1, const module& s2);

  /// Adds a new type to the module.
  /// @param t The type to add.
  /// @returns `true` on success.
  bool add(value_type t);

  /// Retrieves the type for a given name.
  /// @param name The name of the type to lookup.
  /// @returns The type with name *name* or `nullptr if no such type exists.
  value_type* find(std::string_view name);

  //! @copydoc find(const std::string& name)
  [[nodiscard]] const value_type* find(std::string_view name) const;

  // -- container API ----------------------------------------------------------

  [[nodiscard]] const_iterator begin() const;
  [[nodiscard]] const_iterator end() const;
  [[nodiscard]] size_t size() const;
  [[nodiscard]] bool empty() const;
  void clear();

  // -- CAF -------------------------------------------------------------------

  template <class Inspector>
  friend auto inspect(Inspector& f, module& x) ->
    typename Inspector::result_type {
    return f(caf::meta::type_name("vast.schema"), x.types_);
  }

private:
  std::vector<value_type> types_;
};

/// Loads the complete module for an invocation by combining the configured
/// modules with the ones passed directly as command line options.
/// @param options The set of command line options.
/// @returns The parsed module.
caf::expected<module> get_module(const caf::settings& options);

/// Gathers the list of paths to traverse for loading module or taxonomies data.
/// @param cfg The application config.
/// module directories.
/// @returns The list of module directories.
detail::stable_set<std::filesystem::path>
get_module_dirs(const caf::actor_system_config& cfg);

/// Loads a single module file.
/// @param module_file The file path.
/// @returns The parsed module.
caf::expected<module> load_module(const std::filesystem::path& module_file);

/// Loads module files from the given directories.
/// @param module_dirs The directories to load modules from.
/// @param max_recursion The maximum number of nested directories to traverse
/// before aborting.
/// @note Modules from the same directory are merged, but directories are
/// combined. It is designed so types that exist in later paths can override the
/// earlier ones, but the same mechanism makes no sense inside of a single
/// directory unless we specify a specific order of traversal.
caf::expected<vast::module>
load_module(const detail::stable_set<std::filesystem::path>& module_dirs,
            size_t max_recursion = defaults::max_recursion);

/// Loads modules according to the configuration. This is a convenience wrapper
/// around *get_module_dirs* and *load_module*.
caf::expected<vast::module> load_module(const caf::actor_system_config& cfg);

} // namespace vast

namespace fmt {

template <>
struct formatter<vast::module> {
  template <class ParseContext>
  constexpr auto parse(ParseContext& ctx) {
    return ctx.begin();
  }

  template <class FormatContext>
  auto format(const vast::module& value, FormatContext& ctx) {
    auto out = ctx.out();
    for (const auto& t : value) {
      auto f = [&]<vast::concrete_type T>(const T& x) {
        out = format_to(out, "type {} = {}\n", t.name(), x);
      };
      caf::visit(f, t);
    }
    return out;
  }
};

} // namespace fmt
