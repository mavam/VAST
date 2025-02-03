//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2025 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/diagnostics.hpp"
#include "tenzir/tql2/registry.hpp"

namespace tenzir {

/// The context that is available during all execution stages.
class base_ctx {
public:
  base_ctx(diagnostic_handler& dh, const registry& reg) : dh_{dh}, reg_{reg} {
  }

  template <class T>
    requires std::convertible_to<T, diagnostic_handler&>
             and std::convertible_to<T, const registry&>
  explicit(false) base_ctx(T&& x) : base_ctx{x, x} {
  }

  explicit(false) operator diagnostic_handler&() {
    return dh_;
  }

  explicit(false) operator const registry&() {
    return reg_;
  }

private:
  std::reference_wrapper<diagnostic_handler> dh_;
  std::reference_wrapper<const registry> reg_;
};

} // namespace tenzir
