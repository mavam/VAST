//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/detail/loader_saver_resolver.hpp>
#include <tenzir/diagnostics.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/prepend_token.hpp>
#include <tenzir/series_builder.hpp>
#include <tenzir/tql/fwd.hpp>
#include <tenzir/tql/parser.hpp>
#include <tenzir/tql2/eval.hpp>
#include <tenzir/tql2/plugin.hpp>

#include <arrow/util/uri.h>
#include <boost/url/parse.hpp>
#include <boost/url/url.hpp>

#include <ranges>

namespace tenzir::plugins::from {
namespace {

class load_operator final : public crtp_operator<load_operator> {
public:
  load_operator() = default;

  explicit load_operator(std::unique_ptr<plugin_loader> loader)
    : loader_{std::move(loader)} {
  }

  auto operator()(operator_control_plane& ctrl) const
    -> caf::expected<generator<chunk_ptr>> {
    if (auto result = loader_->instantiate(ctrl)) {
      return std::move(*result);
    }
    return caf::make_error(ec::silent, "could not instantiate loader");
  }

  auto detached() const -> bool override {
    return true;
  }

  auto name() const -> std::string override {
    return "load";
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)filter, (void)order;
    return do_not_optimize(*this);
  }

  auto internal() const -> bool override {
    return loader_->internal();
  }

  friend auto inspect(auto& f, load_operator& x) -> bool {
    return plugin_inspect(f, x.loader_);
  }

  auto location() const -> operator_location override {
    return operator_location::local;
  }

protected:
  auto infer_type_impl(operator_type input) const
    -> caf::expected<operator_type> override {
    if (input.is<void>()) {
      return tag_v<chunk_ptr>;
    }
    // TODO: Fuse this check with crtp_operator::instantiate()
    return caf::make_error(ec::type_clash,
                           fmt::format("'{}' does not accept {} as input",
                                       name(), operator_type_name(input)));
  }

private:
  std::unique_ptr<plugin_loader> loader_;
};

class read_operator final : public crtp_operator<read_operator> {
public:
  read_operator() = default;

  explicit read_operator(std::unique_ptr<plugin_parser> parser)
    : parser_{std::move(parser)} {
  }

  auto name() const -> std::string override {
    return "read";
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)filter;
    if (order == event_order::ordered) {
      return do_not_optimize(*this);
    }
    // TODO: We could also propagate `where #schema == "..."` to the parser.
    auto parser_opt = parser_->optimize(order);
    if (not parser_opt) {
      return do_not_optimize(*this);
    }
    return optimize_result{
      std::nullopt,
      event_order::ordered,
      std::make_unique<read_operator>(std::move(parser_opt)),
    };
  }

  auto idle_after() const -> duration override {
    return defaults::import::batch_timeout;
  }

  friend auto inspect(auto& f, read_operator& x) -> bool {
    return plugin_inspect(f, x.parser_);
  }

  auto
  operator()(generator<chunk_ptr> input, operator_control_plane& ctrl) const
    -> caf::expected<generator<table_slice>> {
    auto parser = parser_->instantiate(std::move(input), ctrl);
    if (not parser) {
      return caf::make_error(ec::silent, "could not instantiate parser");
    }
    return std::move(*parser);
  }

protected:
  auto infer_type_impl(operator_type input) const
    -> caf::expected<operator_type> override {
    if (input.is<chunk_ptr>()) {
      return tag_v<table_slice>;
    }
    // TODO: Fuse this check with crtp_operator::instantiate()
    return caf::make_error(ec::type_clash,
                           fmt::format("'{}' does not accept {} as input",
                                       name(), operator_type_name(input)));
  }

private:
  std::unique_ptr<plugin_parser> parser_;
};

[[noreturn]] void
throw_loader_not_found(located<std::string_view> x, bool use_uri_schemes) {
  auto available = std::vector<std::string>{};
  for (auto const* p : plugins::get<loader_parser_plugin>()) {
    if (use_uri_schemes) {
      for (auto uri_scheme : p->supported_uri_schemes()) {
        available.push_back(std::move(uri_scheme));
      }
    } else {
      available.push_back(p->name());
    }
  }
  if (use_uri_schemes) {
    diagnostic::error("loader for `{}` scheme could not be found", x.inner)
      .primary(x.source)
      .hint("must be one of {}", fmt::join(available, ", "))
      .docs("https://docs.tenzir.com/connectors")
      .throw_();
  }
  diagnostic::error("loader `{}` could not be found", x.inner)
    .primary(x.source)
    .hint("must be one of {}", fmt::join(available, ", "))
    .docs("https://docs.tenzir.com/connectors")
    .throw_();
}

[[noreturn]] void throw_parser_not_found(located<std::string_view> x) {
  auto available = std::vector<std::string>{};
  for (auto p : plugins::get<parser_parser_plugin>()) {
    available.push_back(p->name());
  }
  diagnostic::error("parser `{}` could not be found", x.inner)
    .primary(x.source)
    .hint("must be one of {}", fmt::join(available, ", "))
    .docs("https://docs.tenzir.com/formats")
    .throw_();
}

auto get_loader(parser_interface& p, const char* usage, const char* docs)
  -> std::pair<std::unique_ptr<plugin_loader>, located<std::string>> {
  auto l_name = p.accept_shell_arg();
  if (not l_name) {
    diagnostic::error("expected loader name")
      .primary(p.current_span())
      .usage(usage)
      .docs(docs)
      .throw_();
  }
  auto [loader, name, path, is_uri] = detail::resolve_loader(p, *l_name);
  if (not loader) {
    throw_loader_not_found(name, is_uri);
  }
  return {std::move(loader), std::move(path)};
}

class from_plugin final : public virtual operator_parser_plugin {
public:
  auto signature() const -> operator_signature override {
    return {.source = true};
  }

  auto name() const -> std::string override {
    return "from";
  };

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto usage = "from <loader> <args>... [read <parser> <args>...]";
    auto docs = "https://docs.tenzir.com/operators/from";
    if (const auto peek_tcp = p.peek_shell_arg();
        peek_tcp
        and (peek_tcp->inner == "tcp"
             or peek_tcp->inner.starts_with("tcp://"))) {
      if (peek_tcp->inner == "tcp") {
        (void)p.accept_identifier();
      }
      const auto* accept_plugin = plugins::find_operator("tcp-listen");
      if (not accept_plugin) {
        diagnostic::error("`tcp-listen` plugin is required").throw_();
      }
      return accept_plugin->parse_operator(p);
    }
    auto q = until_keyword_parser{"read", p};
    auto [loader, loader_path] = get_loader(q, usage, docs);
    TENZIR_DIAG_ASSERT(loader);
    TENZIR_DIAG_ASSERT(q.at_end());
    auto decompress = operator_ptr{};
    auto parser = std::unique_ptr<plugin_parser>{};
    if (p.at_end()) {
      std::tie(decompress, parser)
        = detail::resolve_parser(loader_path, loader->default_parser());
    } else {
      decompress = detail::resolve_decompressor(loader_path);
      auto read = p.accept_identifier();
      TENZIR_DIAG_ASSERT(read && read->name == "read");
      auto p_name = p.accept_shell_arg();
      if (!p_name) {
        diagnostic::error("expected parser name")
          .primary(p.current_span())
          .note(usage)
          .docs(docs)
          .throw_();
      }
      auto p_plugin = plugins::find<parser_parser_plugin>(p_name->inner);
      if (!p_plugin) {
        throw_parser_not_found(*p_name);
      }
      parser = p_plugin->parse_parser(p);
      TENZIR_DIAG_ASSERT(parser);
    }
    auto ops = std::vector<operator_ptr>{};
    ops.push_back(std::make_unique<load_operator>(std::move(loader)));
    if (decompress) {
      ops.push_back(std::move(decompress));
    }
    ops.push_back(std::make_unique<class read_operator>(std::move(parser)));
    return std::make_unique<pipeline>(std::move(ops));
  }
};

class load_plugin final : virtual public operator_plugin<load_operator> {
public:
  auto signature() const -> operator_signature override {
    return {.source = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto usage = "load <loader> <args>...";
    auto docs = "https://docs.tenzir.com/operators/load";
    auto [loader, _] = get_loader(p, usage, docs);
    TENZIR_DIAG_ASSERT(loader);
    return std::make_unique<load_operator>(std::move(loader));
  }
};

class read_plugin final : virtual public operator_plugin<read_operator> {
public:
  auto signature() const -> operator_signature override {
    return {.transformation = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto usage = "read <parser> <args>...";
    auto docs = "https://docs.tenzir.com/operators/read";
    auto name = p.accept_shell_arg();
    if (!name) {
      diagnostic::error("expected parser name")
        .primary(p.current_span())
        .usage(usage)
        .docs(docs)
        .throw_();
    }
    auto plugin = plugins::find<parser_parser_plugin>(name->inner);
    if (!plugin) {
      throw_parser_not_found(*name);
    }
    auto parser = plugin->parse_parser(p);
    TENZIR_DIAG_ASSERT(parser);
    return std::make_unique<class read_operator>(std::move(parser));
  }
};

class from_events final : public crtp_operator<from_events> {
public:
  from_events() = default;

  explicit from_events(std::vector<record> events)
    : events_{std::move(events)} {
  }

  auto name() const -> std::string override {
    return "tql2.from_events";
  }

  auto operator()() const -> generator<table_slice> {
    // TODO: We are combining all events into a single schema. Is this what we
    // want, or do we want a more "precise" output if possible?
    auto sb = series_builder{};
    for (auto& event : events_) {
      sb.data(event);
    }
    auto slices = sb.finish_as_table_slice("tenzir.from");
    for (auto& slice : slices) {
      co_yield std::move(slice);
    }
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    TENZIR_UNUSED(filter, order);
    return do_not_optimize(*this);
  }

  friend auto inspect(auto& f, from_events& x) -> bool {
    return f.apply(x.events_);
  }

private:
  std::vector<record> events_;
};

using from_events_plugin = operator_inspection_plugin<from_events>;

class from_plugin2 final : public virtual operator_factory_plugin {
  auto create_pipeline_from_uri(std::string_view path, invocation inv,
                                session ctx) const -> failure_or<operator_ptr> {
    const operator_factory_plugin* load_plugin = nullptr;
    const operator_factory_plugin* decompress_plugin = nullptr;
    const operator_factory_plugin* read_plugin = nullptr;
    const auto pipeline_count = std::ranges::count_if(
      inv.args, &ast::expression::is<ast::pipeline_expr>);
    if (pipeline_count > 1) {
      diagnostic::error(
        "`from` can currently not handle more than one nested pipeline")
        .emit(ctx);
      return failure::promise();
    }
    const auto has_pipeline_argument = inv.args.back().is<ast::pipeline_expr>();
    auto url = boost::urls::parse_uri_reference(path);
    if (not url) {
      diagnostic::error("Invalid URI")
        .primary(inv.args.front().get_location())
        .emit(ctx);
      return failure::promise();
    }
    // determine loader based on schema
    {
      if (url->has_scheme()) {
        for (const auto& p : plugins::get<operator_factory_plugin>()) {
          const auto name = p->name();
          // TODO: better way to determine tql2 operator?
          if (not(name.starts_with("load_")
                  or name.starts_with("tql2.load_"))) {
            continue;
          }
          for (auto schema : p->load_schemes()) {
            if (schema == url->scheme()) {
              load_plugin = p;
              break;
            }
          }
          if (load_plugin) {
            break;
          }
        }
        if (not load_plugin) {
          diagnostic::error("Could not determine load operator for scheme `{}`",
                            url->scheme())
            .primary(inv.args.front().get_location())
            .emit(ctx);
          return failure::promise();
        }
      } else {
        load_plugin = plugins::find<operator_factory_plugin>("tql2.load_file");
      }
    }
    auto compression_name = std::string_view{};
    if (not has_pipeline_argument) {
      const auto& file = url->segments().back();
      auto first_dot = file.find('.');
      if (first_dot == file.npos) {
        diagnostic::error("could not infer file type from URI")
          .primary(inv.args.front().get_location())
          .emit(ctx);
        return failure::promise();
      }
      auto filename = std::string_view{file}.substr(first_dot);
      // determine compression based on ending
      {
        constexpr static auto extension_to_compression_map
          = std::array<std::pair<std::string_view, std::string_view>, 8>{{
            {".br", "brotli"},
            {".brotli", "brotli"},
            {".bz2", "bz2"},
            {".gz", "gzip"},
            {".gzip", "gzip"},
            {".lz4", "lz4"},
            {".zst", "zstd"},
            {".zstd", "zstd"},
          }};
        for (const auto& [extension, name] : extension_to_compression_map) {
          if (filename.ends_with(extension)) {
            filename.remove_suffix(extension.size());
            compression_name = name;
            break;
          }
        }
        if (not compression_name.empty()) {
          for (const auto& p : plugins::get<operator_factory_plugin>()) {
            const auto name = p->name();
            // TODO, the decompress operators should ultimately be separate
            // operators
            if (name != "decompress") {
              continue;
            }
            decompress_plugin = p;
          }
          TENZIR_ASSERT(decompress_plugin);
        }
      }
      // determine read operator based on file ending
      {
        for (const auto& p : plugins::get<operator_factory_plugin>()) {
          const auto name = p->name();
          if (not(name.starts_with("read_")
                  or name.starts_with("tql2.read_"))) {
            continue;
          }
          // TODO it may be better to use find here to give better error
          // messages if we find it in the middle of the filename
          // this may happen for unknown compressions
          for (auto extension : p->read_extensions()) {
            if (filename.ends_with(extension)) {
              read_plugin = p;
              break;
            }
          }
        }
        if (not read_plugin) {
          diagnostic::error("could not infer format from uri")
            .primary(inv.args.front().get_location())
            .hint("You can pass a pipeline to `from`")
            .emit(ctx);
          return failure::promise();
        }
      }
    }

    fmt::print("source: {}\n", load_plugin ? load_plugin->name() : "none");
    fmt::print("decompress: {}\n",
               decompress_plugin ? decompress_plugin->name() : "none");
    fmt::print("read: {}\n", read_plugin ? read_plugin->name() : "none");

    if (load_plugin->accepts_pipeline()) {
      TENZIR_ASSERT(inv.args.back().is<ast::pipeline_expr>());
      TENZIR_UNIMPLEMENTED();
    } else {
      auto result = std::vector<operator_ptr>{};
      TRY(auto load_op, load_plugin->make(inv, ctx));
      inv.args.clear();
      auto decompress_op = decltype(load_op){};
      if (decompress_plugin) {
        inv.args.emplace_back(
          ast::constant{std::string{compression_name}, location::unknown});
        TRY(decompress_op, decompress_plugin->make(inv, ctx));
        inv.args.clear();
      }
      TRY(auto read_op, read_plugin->make(inv, ctx));
      result.emplace_back(std::move(load_op));
      if (decompress_op) {
        result.emplace_back(std::move(decompress_op));
      }
      result.emplace_back(std::move(read_op));
      return std::make_unique<pipeline>(std::move(result));
    }

    return failure::promise();
  }

public:
  auto name() const -> std::string override {
    return "tql2.from";
  }

  auto
  make(invocation inv, session ctx) const -> failure_or<operator_ptr> override {
    // TODO: Improve diagnostics and consider refactoring.
    // TODO: Options are only applied to loader?
    // ```
    // from "https://example.org/foo.json", headers={"My-Token": "Foo123"}
    // ---
    // load "https://example.org/foo.json", headers={"My-Token": "Foo123"}
    // read_json schema="test123"
    // ---
    // from "https://example.org/foo.json",
    //   headers={"My-Token": "Foo123"},
    //   read_args=[schema="test123"]
    // ```
    auto docs = "https://docs.tenzir.com/tql2/operators/from";
    if (inv.args.empty()) {
      diagnostic::error("expected positional argument `<path/url/events>`")
        .primary(inv.self)
        .docs(docs)
        .emit(ctx);
      return failure::promise();
    }
    auto& expr = inv.args[0];
    TRY(auto value, const_eval(expr, ctx));
    auto f = detail::overload{
      [&](record& event) -> failure_or<operator_ptr> {
        auto events = std::vector<record>{};
        events.push_back(std::move(event));
        return std::make_unique<from_events>(std::move(events));
      },
      [&](list& event_list) -> failure_or<operator_ptr> {
        auto events = std::vector<record>{};
        for (auto& event : event_list) {
          auto event_record = caf::get_if<record>(&event);
          if (not event_record) {
            diagnostic::error("expected list of records")
              .primary(expr)
              .docs(docs)
              .emit(ctx);
            return failure::promise();
          }
          events.push_back(std::move(*event_record));
        }
        return std::make_unique<from_events>(std::move(events));
      },
      [&](std::string& path) -> failure_or<operator_ptr> {
        return create_pipeline_from_uri(path, std::move(inv), std::move(ctx));
      },
      [&](auto&) -> failure_or<operator_ptr> {
        diagnostic::error("expected a URI, record or list of records")
          .primary(inv.args[0])
          .docs(docs)
          .emit(ctx);
        return failure::promise();
      },
    };
    return caf::visit(f, value);
  }
};

class load_plugin2 final : virtual public operator_factory_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.load";
  }

  auto
  make(invocation inv, session ctx) const -> failure_or<operator_ptr> override {
    auto usage = "load <url/path>, [options...]";
    auto docs = "https://docs.tenzir.com/operators/load";
    if (inv.args.empty()) {
      diagnostic::error("expected at least one argument")
        .primary(inv.self)
        .usage(usage)
        .docs(docs)
        .emit(ctx);
      return failure::promise();
    }
    TRY(auto string_data, const_eval(inv.args[0], ctx));
    auto string = caf::get_if<std::string>(&string_data);
    if (not string) {
      diagnostic::error("expected string")
        .primary(inv.args[0])
        .usage(usage)
        .docs(docs)
        .emit(ctx);
      return failure::promise();
    }
    auto uri = arrow::util::Uri{};
    if (not uri.Parse(*string).ok()) {
      auto target = plugins::find<operator_factory_plugin>("tql2.load_file");
      TENZIR_ASSERT(target);
      return target->make(inv, ctx);
    }
    auto scheme = uri.scheme();
    auto supported = std::vector<std::string>{};
    for (auto plugin : plugins::get<operator_factory_plugin>()) {
      auto plugin_schemes = plugin->load_schemes();
      if (std::ranges::find(plugin_schemes, scheme) != plugin_schemes.end()) {
        return plugin->make(inv, ctx);
      }
      supported.insert(supported.end(), plugin_schemes.begin(),
                       plugin_schemes.end());
    }
    std::ranges::sort(supported);
    diagnostic::error("encountered unsupported scheme `{}`", scheme)
      .primary(inv.args[0])
      .hint("must be one of: {}", fmt::join(supported, ", "))
      .emit(ctx);
    return failure::promise();
  }
};

class save_plugin2 final : virtual public operator_factory_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.save";
  }

  auto
  make(invocation inv, session ctx) const -> failure_or<operator_ptr> override {
    auto usage = "save <url/path>, [options...]";
    auto docs = "https://docs.tenzir.com/operators/save";
    if (inv.args.empty()) {
      diagnostic::error("expected at least one argument")
        .primary(inv.self)
        .usage(usage)
        .docs(docs)
        .emit(ctx);
      return failure::promise();
    }
    TRY(auto string_data, const_eval(inv.args[0], ctx));
    auto string = caf::get_if<std::string>(&string_data);
    if (not string) {
      diagnostic::error("expected string")
        .primary(inv.args[0])
        .usage(usage)
        .docs(docs)
        .emit(ctx);
      return failure::promise();
    }
    auto uri = arrow::util::Uri{};
    if (not uri.Parse(*string).ok()) {
      auto target = plugins::find<operator_factory_plugin>("tql2.save_file");
      TENZIR_ASSERT(target);
      return target->make(inv, ctx);
    }
    auto scheme = uri.scheme();
    auto supported = std::vector<std::string>{};
    for (auto plugin : plugins::get<operator_factory_plugin>()) {
      auto plugin_schemes = plugin->save_schemes();
      if (std::ranges::find(plugin_schemes, scheme) != plugin_schemes.end()) {
        return plugin->make(inv, ctx);
      }
      supported.insert(supported.end(), plugin_schemes.begin(),
                       plugin_schemes.end());
    }
    std::ranges::sort(supported);
    diagnostic::error("encountered unsupported scheme `{}`", scheme)
      .primary(inv.args[0])
      .hint("must be one of: {}", fmt::join(supported, ", "))
      .emit(ctx);
    return failure::promise();
  }
};

} // namespace
} // namespace tenzir::plugins::from

TENZIR_REGISTER_PLUGIN(tenzir::plugins::from::from_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::from::load_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::from::read_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::from::from_events_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::from::from_plugin2)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::from::load_plugin2)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::from::save_plugin2)
