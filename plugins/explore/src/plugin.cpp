//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "explore/components.hpp"
#include "explore/ui_state.hpp"

#include <vast/argument_parser.hpp>
#include <vast/data.hpp>
#include <vast/error.hpp>
#include <vast/logger.hpp>
#include <vast/plugin.hpp>
#include <vast/table_slice.hpp>

#include <ftxui/component/screen_interactive.hpp>

#include <thread>

namespace vast::plugins::explore {

namespace {

/// The configuration for the `explore` operator.
struct plugin_args {
  std::optional<located<int>> width;
  std::optional<located<int>> height;
  std::optional<location> fullscreen;

  friend auto inspect(auto& f, plugin_args& x) -> bool {
    return f.object(x)
      .pretty_name("plugin_args")
      .fields(f.field("width", x.width), f.field("height", x.height),
              f.field("fullscreen", x.fullscreen));
  }
};

/// Construct an FTXUI screen from the operator configuration.
auto make_screen(const plugin_args& args) -> ftxui::ScreenInteractive {
  using namespace ftxui;
  VAST_ASSERT((args.width && args.height) || (!args.width && !args.height));
  VAST_ASSERT(args.width && args.width->inner > 0 && args.height->inner > 0);
  if (args.width || args.height)
    return ScreenInteractive::FixedSize(args.width->inner, args.height->inner);
  if (args.fullscreen)
    return ScreenInteractive::Fullscreen();
  return ScreenInteractive::FitComponent();
}

class explore_operator final : public crtp_operator<explore_operator> {
public:
  explore_operator() = default;

  explicit explore_operator(plugin_args args) : args_{std::move(args)} {
  }

  auto name() const -> std::string override {
    return "explore";
  }

  auto operator()(generator<table_slice> input) const
    -> generator<std::monostate> {
    using namespace ftxui;
    auto screen = make_screen(args_);
    ui_state state;
    // Ban UI main loop into dedicated thread.
    auto thread = std::thread([&] {
      auto main = MainWindow(&screen, &state);
      screen.Loop(main);
    });
    for (auto&& slice : input) {
      if (slice.rows() == 0) {
        co_yield {};
        continue;
      }
      // The task executes inside the UI thread. Therefore state access is
      // thread-safe.
      auto task = [&state, &screen, slice] {
        auto& table = state.tables[slice.schema()];
        if (!table)
          table = std::make_shared<table_state>();
        table->slices.push_back(slice);
        screen.PostEvent(Event::Custom); // Redraw screen
      };
      screen.Post(task);
      co_yield {};
    }
    thread.join();
  }

  friend auto inspect(auto& f, explore_operator& x) -> bool {
    (void)f, (void)x;
    return true;
  }

  auto location() const -> operator_location override {
    return operator_location::local;
  }

private:
  plugin_args args_;
};

class plugin final : public virtual operator_plugin<explore_operator> {
public:
  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser
      = argument_parser{"explore", fmt::format("https://docs.tenzir.com/docs/"
                                               "connectors/sinks/explore")};
    auto args = plugin_args{};
    parser.add("-f,--fullscreen", args.fullscreen);
    parser.add("-w,--width", args.width, "<int>");
    parser.add("-h,--height", args.height, "<int>");
    parser.parse(p);
    if (args.width && !args.height)
      diagnostic::error("--width requires also setting --height")
        .primary(args.width->source)
        .throw_();
    else if (args.height && !args.width)
      diagnostic::error("--height requires also setting --width")
        .primary(args.width->source)
        .throw_();
    return std::make_unique<explore_operator>(std::move(args));
  }
};

} // namespace

} // namespace vast::plugins::explore

VAST_REGISTER_PLUGIN(vast::plugins::explore::plugin)
