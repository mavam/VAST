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

#include "vast/system/infer_command.hpp"

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/address.hpp"
#include "vast/concept/parseable/vast/subnet.hpp"
#include "vast/concept/parseable/vast/time.hpp"
#include "vast/concept/printable/stream.hpp"
#include "vast/concept/printable/vast/schema.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/make_io_stream.hpp"
#include "vast/detail/narrow.hpp"
#include "vast/detail/overload.hpp"
#include "vast/detail/string.hpp"
#include "vast/error.hpp"
#include "vast/format/zeek.hpp"
#include "vast/data.hpp"
#include "vast/logger.hpp"
#include "vast/schema.hpp"

#include <caf/actor_system.hpp>
#include <caf/expected.hpp>
#include <caf/message.hpp>
#include <caf/settings.hpp>

#include <cmath>
#include <iostream>
#include <sstream>
#include <string>
#include <utility>

#include <simdjson.h>

namespace vast::system {

namespace {

template <class Reader>
caf::expected<schema>
infer(const std::string& input, const caf::settings& options) {
  record_type rec;
  auto layout = [&](auto x) { rec = x.layout(); };
  auto stream = std::make_unique<std::istringstream>(input);
  auto reader = Reader{options, std::move(stream)};
  auto [error, n] = reader.read(1, 1, layout);
  if (error)
    return error;
  VAST_ASSERT(n == 1);
  schema result;
  result.add(std::move(rec));
  return result;
}

type deduce(simdjson::dom::element e) {
  switch (e.type()) {
    case ::simdjson::dom::element_type::ARRAY:
      if (const auto arr = e.get_array();arr.size())
        return list_type{ deduce(arr.at(0)) };
      return list_type{ type{} };
    case ::simdjson::dom::element_type::OBJECT:{
      record_type result;
      auto xs = e.get_object();
      for (auto& [k, v] : xs)
        result.fields.emplace_back(std::string{k}, deduce(v));
      if (result.fields.empty())
        return {};
      return result;
    }
    case ::simdjson::dom::element_type::INT64:
      return integer_type{};
    case ::simdjson::dom::element_type::UINT64:
      return count_type{};
    case ::simdjson::dom::element_type::DOUBLE:
      return real_type{};
    case ::simdjson::dom::element_type::STRING: {
      const std::string x{e.get_string().value()};
      if (parsers::net(x))
        return subnet_type{};
      if (parsers::addr(x))
        return address_type{};
      if (parsers::ymdhms(x))
        return time_type{};
      if (parsers::duration(x))
        return duration_type{};
      return string_type{};
    }
    case ::simdjson::dom::element_type::BOOL:
      return bool_type{};
    case ::simdjson::dom::element_type::NULL_VALUE:
      return {};
  }
  return {};
}

caf::expected<schema> infer_json(const std::string& input) {
  using namespace vast;
  // Try JSONLD.
  auto lines = detail::split(input, "\r\n");
  if (lines.empty())
    return caf::make_error(ec::parse_error, "failed to get first line of "
                                            "input");
  ::simdjson::dom::parser json_parser;
  auto x = json_parser.parse(lines[0]);
  if (x.error())
    return caf::make_error(ec::parse_error, "failed to parse JSON value");

  auto deduced = deduce(x.value());
  auto rec_ptr = caf::get_if<record_type>(&deduced);
  if (!rec_ptr)
    return caf::make_error(ec::parse_error, "could not parse JSON object");
  auto rec = std::move(*rec_ptr);
  rec.name("json"); // TODO: decide (and document) what name we want here
  schema result;
  result.add(std::move(rec));
  return result;
}

auto show(const schema& schema) {
  std::cout << schema;
  return caf::none;
}

} // namespace

caf::message
infer_command(const invocation& inv, [[maybe_unused]] caf::actor_system& sys) {
  VAST_TRACE_SCOPE("{}", inv);
  const auto& options = inv.options;
  auto input = detail::make_input_stream<defaults::infer>(options);
  if (!input)
    return make_message(input.error());
  // Setup buffer for input data.
  auto buffer_size = caf::get_or(options, "vast.infer.buffer-size",
                                 defaults::infer::buffer_size);
  std::string buffer;
  buffer.resize(buffer_size);
  // Try to parse input with all readers that we know.
  auto& stream = **input;
  stream.read(buffer.data(), buffer_size);
  auto bytes_read = detail::narrow_cast<size_t>(stream.gcount());
  VAST_ASSERT(bytes_read <= buffer_size);
  buffer.resize(bytes_read);
  auto schema = infer<format::zeek::reader>(buffer, options);
  if (schema)
    return show(*schema);
  VAST_INFO("{} failed to infer Zeek TSV: {}",
            detail::pretty_type_name(inv.full_name), render(schema.error()));
  schema = infer_json(buffer);
  if (schema)
    return show(*schema);
  VAST_INFO("{} failed to infer JSON: {}",
            detail::pretty_type_name(inv.full_name), render(schema.error()));
  // Failing to infer the input is not an error.
  return caf::none;
}

} // namespace vast::system
