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

#include "vast/system/profiler.hpp"

#include "vast/concept/printable/vast/error.hpp"
#include "vast/config.hpp"
#include "vast/filesystem.hpp"
#include "vast/fwd.hpp"
#include "vast/logger.hpp"
#include "vast/time.hpp"

#include <caf/event_based_actor.hpp>
#include <caf/scheduled_actor.hpp>

#if VAST_HAVE_GPERFTOOLS
#  include <gperftools/heap-profiler.h>
#  include <gperftools/profiler.h>
#endif

using namespace caf;

namespace vast {
namespace system {

#if VAST_HAVE_GPERFTOOLS
behavior profiler(stateful_actor<profiler_state>* self, path dir,
                  std::chrono::seconds secs) {
  auto prepare = [=]() -> caf::expected<void> {
    if (!exists(dir)) {
      auto t = mkdir(dir);
      if (!t) {
        VAST_ERROR(self, "could not create directory:", t.error());
        self->quit(t.error());
      }
    }
    return {};
  };
  return {
    [=](atom::start, atom::cpu) {
      ProfilerState ps;
      ProfilerGetCurrentState(&ps);
      if (ps.enabled) {
        VAST_WARNING(self, "ignores request to start enabled CPU profiler");
      } else if (prepare()) {
        auto filename = (dir / "perftools.cpu").str();
        VAST_INFO(self, "starts gperftools CPU profiler in", filename);
        ProfilerStart(filename.c_str());
        self->delayed_send(self, secs, atom::flush_v);
      }
    },
    [=](atom::stop, atom::cpu) {
      ProfilerState ps;
      ProfilerGetCurrentState(&ps);
      if (!ps.enabled) {
        VAST_WARNING(self, "ignores request to stop disabled CPU profiler");
      } else {
        VAST_INFO(self, "stops gperftools CPU profiler");
        ProfilerStop();
        VAST_INFO(self, "recorded", ps.samples_gathered,
                  "gperftools CPU profiler samples in", ps.profile_name);
      }
    },
    [=](atom::start, atom::heap) {
#  if VAST_USE_PERFTOOLS_HEAP_PROFILER
      if (IsHeapProfilerRunning()) {
        VAST_WARNING(self, "ignores request to start enabled heap profiler");
      } else if (prepare()) {
        VAST_INFO(self, "starts gperftools heap profiler");
        auto filename = (dir / "perftools.heap").str();
        HeapProfilerStart(filename.c_str());
      }
#  else
      VAST_WARNING(self, "cannot start heap profiler",
                   "(not linked against tcmalloc)");
#  endif
    },
    [=](atom::stop, atom::heap) {
#  if VAST_USE_PERFTOOLS_HEAP_PROFILER
      if (!IsHeapProfilerRunning()) {
        VAST_WARNING(self, "ignores request to stop disabled heap profiler");
      } else {
        VAST_INFO(self, "stops gperftools heap profiler");
        HeapProfilerDump("cleanup");
        HeapProfilerStop();
      }
#  else
      VAST_WARNING(self, "cannot stop heap profiler",
                   "(not linked against tcmalloc)");
#  endif
    },
    [=](atom::flush) {
      ProfilerState ps;
      ProfilerGetCurrentState(&ps);
      if (ps.enabled) {
        VAST_DEBUG(self, "flushes gperftools CPU profiler");
        ProfilerFlush();
        self->delayed_send(self, secs, atom::flush_v);
      }
    }};
}
#else // VAST_HAVE_GPERFTOOLS
behavior profiler(stateful_actor<profiler_state>*, path, std::chrono::seconds) {
  return {};
}
#endif // VAST_HAVE_GPERFTOOLS

} // namespace system
} // namespace vast
