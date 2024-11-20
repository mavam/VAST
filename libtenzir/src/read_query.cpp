//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2019 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/read_query.hpp"

#include "tenzir/fwd.hpp"

#include "tenzir/concept/parseable/tenzir/expression.hpp"
#include "tenzir/concept/parseable/to.hpp"
#include "tenzir/defaults.hpp"
#include "tenzir/error.hpp"
#include "tenzir/logger.hpp"
#include "tenzir/scope_linked.hpp"

#include <caf/actor.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/settings.hpp>
#include <caf/stateful_actor.hpp>
#include <sys/stat.h>

#include <chrono>
#include <cstdio>
#include <fstream>
#include <iostream>
#include <unistd.h>

using namespace caf;
using namespace std::chrono_literals;

namespace tenzir {

namespace {

caf::expected<std::string>
read_query(const std::vector<std::string>& args, size_t offset) {
  if (args.size() > offset + 1)
    return caf::make_error(ec::invalid_argument, "spreading a query over "
                                                 "multiple arguments is not "
                                                 "allowed; please pass it as a "
                                                 "single string instead.");
  return args[offset];
}

caf::expected<std::string> read_query(std::istream& in) {
  auto result = std::string{};
  result.assign(std::istreambuf_iterator<char>{in},
                std::istreambuf_iterator<char>{});
  return result;
}

caf::expected<std::string> read_query(const std::string& path) {
  std::ifstream f{path};
  if (!f)
    return caf::make_error(ec::no_such_file,
                           fmt::format("unable to read from '{}'", path));
  return read_query(f);
}

std::string make_all_query() {
  TENZIR_VERBOSE(
    "not providing a query causes everything to be exported; please "
    "be aware that this operation may be very expensive.");
  return "";
}

} // namespace

caf::expected<std::string>
read_query(const invocation& inv, std::string_view file_option,
           enum must_provide_query must_provide_query, size_t argument_offset) {
  TENZIR_TRACE("{} {}", inv, file_option);
  // The below logic matches the following behavior:
  // tenzir export <format> <query>
  //   takes the query from the command line
  // tenzir export -r - <format>
  //   reads the query from stdin.
  // echo "query" | tenzir export <format>
  //   reads the query from stdin
  // tenzir <query.txt export <format>
  //   reads the query from `query.txt`
  // tenzir export <format>
  //   export everything
  // Specifying any two conflicting ways of reading the query
  // results in an error.
  const auto fname = caf::get_if<std::string>(&inv.options, file_option);
  const bool has_query_cli = inv.arguments.size() > argument_offset;
  bool has_query_stdin = [] {
    struct stat stats = {};
    if (::fstat(::fileno(stdin), &stats) != 0)
      return false;
    return S_ISFIFO(stats.st_mode) || S_ISREG(stats.st_mode);
  }();
  if (fname) {
    if (has_query_cli)
      return caf::make_error(
        ec::invalid_argument,
        fmt::format("got query '{}' on the command line and query file"
                    " '{}' specified via '--read' option",
                    read_query(inv.arguments, argument_offset), *fname));
    if (*fname == "-")
      return read_query(std::cin);
    if (has_query_stdin)
      return caf::make_error(ec::invalid_argument,
                             fmt::format("stdin is connected to a pipe or "
                                         "regular file and query file '{}'",
                                         " specified via '--read' option",
                                         *fname));
    return read_query(*fname);
  }
  // As a special case we ignore stdin unless we get an actual query
  // from it, since empirically this is often connected to the remnants
  // of a long-forgotten file descriptor by some distant parent process
  // when running in any kind of automated environment like a CI runner.
  std::string cin_query;
  if (has_query_stdin) {
    auto query = read_query(std::cin);
    if (!query || query->empty())
      has_query_stdin = false;
    else
      cin_query = *query;
  }
  if (has_query_stdin && has_query_cli)
    return caf::make_error(
      ec::invalid_argument,
      fmt::format("got query '{}' on the command line and '{}' via stdin",
                  read_query(inv.arguments, argument_offset), cin_query));
  if (has_query_cli)
    return read_query(inv.arguments, argument_offset);
  if (has_query_stdin)
    return cin_query;
  if (must_provide_query == must_provide_query::yes)
    return caf::make_error(ec::invalid_argument, "no query provided, but "
                                                 "command requires a query "
                                                 "argument");
  // No query provided, make a query that finds everything.
  return make_all_query();
}

} // namespace tenzir
