//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

// NOTE: This file contains an example for using the CAF testing framework, and
// does not contain any meaningful tests for the example plugin. It merely
// exists to show how to setup unit tests.

#define SUITE transform_plugin

#include <vast/concept/convertible/to.hpp>
#include <vast/data.hpp>
#include <vast/system/make_transforms.hpp>
#include <vast/test/test.hpp>

#include <caf/settings.hpp>

namespace {

const std::string config = R"_(
vast:
  transforms:
    my-transform:
      - example-transform: {}
  transform-triggers:
    import:
      - transform: my-transform
        location: server
        events:
          - vast.test
)_";

} // namespace

// Verify that we can use the transform names to load
TEST(load plugins from config) {
  auto yaml = vast::from_yaml(config);
  REQUIRE(yaml);
  auto* rec = caf::get_if<vast::record>(&*yaml);
  REQUIRE(rec);
  auto settings = vast::to<caf::settings>(*rec);
  REQUIRE(settings);
  auto client_source_transforms = vast::system::make_transforms(
    vast::system::pipelines_location::client_source, *settings);
  CHECK(client_source_transforms);
  auto server_import_transforms = vast::system::make_transforms(
    vast::system::pipelines_location::server_import, *settings);
  CHECK(server_import_transforms);
  auto server_export_transforms = vast::system::make_transforms(
    vast::system::pipelines_location::server_export, *settings);
  REQUIRE(server_export_transforms);
  auto client_sink_transforms = vast::system::make_transforms(
    vast::system::pipelines_location::client_sink, *settings);
  REQUIRE(client_sink_transforms);
}
