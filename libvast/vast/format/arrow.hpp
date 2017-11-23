#ifndef VAST_FORMAT_ARROW_HPP
#define VAST_FORMAT_ARROW_HPP

#include <string>

#include "plasma/client.h"

#include "vast/expected.hpp"

namespace vast {

class event;

namespace format {
namespace arrow {

/// Converts events into Arrow Record batches and writes them into a Plasma
/// store.
class writer {
public:
  writer() = default;

  /// Constructs an Arrow writer that connects to a (local) plasma store.
  /// @param plasma_socket The path to the local Plasma listening socket.
  writer(const std::string& plasma_socket);

  ~writer();

  expected<void> write(event const& e);

  expected<void> flush();

  const char* name() const;

  /// Checks whether the writer is connected to the Plasma store.
  /// @returns `true` if the connection to the Plasma store is alive.
  bool connected() const;

private:
  bool connected_;
  plasma::PlasmaClient plasma_client_;
};

} // namespace arrow
} // namespace format
} // namespace vast

#endif
