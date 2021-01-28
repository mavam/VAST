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

#include "vast/detail/posix.hpp"

#include "vast/config.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/raise_error.hpp"
#include "vast/die.hpp"
#include "vast/error.hpp"
#include "vast/logger.hpp"

#include <caf/expected.hpp>

#include <cerrno>
#include <cstring>
#include <fcntl.h>
#include <limits>
#include <stdexcept>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <sys/select.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <sys/un.h>

namespace vast::detail {

int uds_listen(const std::string& path) {
  int fd;
  if ((fd = ::socket(AF_UNIX, SOCK_STREAM, 0)) < 0)
    return fd;
  ::sockaddr_un un;
  std::memset(&un, 0, sizeof(un));
  un.sun_family = AF_UNIX;
  std::strncpy(un.sun_path, path.data(), sizeof(un.sun_path) - 1);
  ::unlink(path.c_str()); // Always remove previous socket file.
  auto sa = reinterpret_cast<sockaddr*>(&un);
  if (::bind(fd, sa, sizeof(un)) < 0 || ::listen(fd, 10) < 0) {
    ::close(fd);
    return -1;
  }
  return fd;
}

int uds_accept(int socket) {
  if (socket < 0)
    return -1;
  int fd;
  ::sockaddr_un un;
  socklen_t size = sizeof(un);
  if ((fd = ::accept(socket, reinterpret_cast<::sockaddr*>(&un), &size)) < 0)
    return -1;
  return fd;
}

VAST_DIAGNOSTIC_PUSH
#if VAST_GCC
#  pragma GCC diagnostic ignored "-Wmaybe-uninitialized"
#endif

int uds_connect(const std::string& path, socket_type type) {
  int fd;
  switch (type) {
    case socket_type::stream:
    case socket_type::fd:
      if ((fd = ::socket(AF_UNIX, SOCK_STREAM, 0)) < 0)
        return fd;
      break;
    case socket_type::datagram:
      if ((fd = ::socket(AF_UNIX, SOCK_DGRAM, 0)) < 0)
        return fd;
      ::sockaddr_un clt;
      std::memset(&clt, 0, sizeof(clt));
      clt.sun_family = AF_UNIX;
      auto client_path = path + "-client";
      std::strncpy(clt.sun_path, client_path.data(), sizeof(clt.sun_path) - 1);
      ::unlink(client_path.c_str()); // Always remove previous socket file.
      if (::bind(fd, reinterpret_cast<sockaddr*>(&clt), sizeof(clt)) < 0) {
        VAST_WARN("{} failed in bind: {}", detail::id_or_name(__func__),
                  ::strerror(errno));
        return -1;
      }
      break;
  }
  ::sockaddr_un srv;
  std::memset(&srv, 0, sizeof(srv));
  srv.sun_family = AF_UNIX;
  std::strncpy(srv.sun_path, path.data(), sizeof(srv.sun_path) - 1);
  if (::connect(fd, reinterpret_cast<sockaddr*>(&srv), sizeof(srv)) < 0) {
    if (!(type == socket_type::datagram && errno == ENOENT)) {
      VAST_WARN("{} failed in connect: {}", detail::id_or_name(__func__),
                ::strerror(errno));
      return -1;
    }
  }
  return fd;
}

VAST_DIAGNOSTIC_POP

// On Mac OS, CMSG_SPACE is for some reason not a constant expression.
VAST_DIAGNOSTIC_PUSH
VAST_DIAGNOSTIC_IGNORE_VLA_EXTENSION

bool uds_send_fd(int socket, int fd) {
  if (socket < 0)
    return -1;
  char dummy = '*';
  ::iovec iov[1];
  iov[0].iov_base = &dummy;
  iov[0].iov_len = sizeof(dummy);
  char ctrl_buf[CMSG_SPACE(sizeof(int))];
  std::memset(ctrl_buf, 0, CMSG_SPACE(sizeof(int)));
  // Setup message header.
  ::msghdr m;
  std::memset(&m, 0, sizeof(struct msghdr));
  m.msg_name = nullptr;
  m.msg_namelen = 0;
  m.msg_iov = iov;
  m.msg_iovlen = 1;
  m.msg_controllen = CMSG_SPACE(sizeof(int));
  m.msg_control = ctrl_buf;
  // Setup control message header.
  auto c = CMSG_FIRSTHDR(&m);
  c->cmsg_level = SOL_SOCKET;
  c->cmsg_type = SCM_RIGHTS;
  c->cmsg_len = CMSG_LEN(sizeof(int));
  *reinterpret_cast<int*>(CMSG_DATA(c)) = fd;
  // Send a message.
  return ::sendmsg(socket, &m, 0) > 0;
}

int uds_recv_fd(int socket) {
  if (socket < 0)
    return -1;
  char ctrl_buf[CMSG_SPACE(sizeof(int))];
  std::memset(ctrl_buf, 0, CMSG_SPACE(sizeof(int)));
  char dummy;
  ::iovec iov[1];
  iov[0].iov_base = &dummy;
  iov[0].iov_len = sizeof(dummy);
  // Setup message header.
  ::msghdr m;
  std::memset(&m, 0, sizeof(struct msghdr));
  m.msg_name = nullptr;
  m.msg_namelen = 0;
  m.msg_control = ctrl_buf;
  m.msg_controllen = CMSG_SPACE(sizeof(int));
  m.msg_iov = iov;
  m.msg_iovlen = 1;
  // Receive a message.
  if (::recvmsg(socket, &m, 0) <= 0)
    return -1;
  // Iterate over control message headers until we find the descriptor.
  for (auto c = CMSG_FIRSTHDR(&m); c != nullptr; c = CMSG_NXTHDR(&m, c))
    if (c->cmsg_level == SOL_SOCKET && c->cmsg_type == SCM_RIGHTS)
      return *reinterpret_cast<int*>(CMSG_DATA(c));
  return -1;
}

VAST_DIAGNOSTIC_POP

int uds_sendmsg(int socket, const std::string& destination,
                const std::string& msg, int flags) {
  struct sockaddr_un dst;
  std::memset(&dst, 0, sizeof(dst));
  if (destination.empty() || destination.size() >= sizeof(dst.sun_path))
    return -EINVAL;
  dst.sun_family = AF_UNIX;
  std::strncpy(dst.sun_path, destination.data(), sizeof(dst.sun_path) - 1);
  struct iovec iovec;
  std::memset(&iovec, 0, sizeof(iovec));
  iovec.iov_base = const_cast<char*>(msg.data());
  iovec.iov_len = msg.size();
  struct msghdr msghdr;
  std::memset(&msghdr, 0, sizeof(msghdr));
  msghdr.msg_name = &dst;
  // For abstract domain sockets (i.e., where the first char is '@'), the
  // terminating NUL byte is not counted towards the length, but any NUL
  // bytes embedded in the path are. For example, in the extreme case it
  // would be possible to have two different sockets named "\0" and "\0\0".
  auto pathlen = destination[0] == '@' ? destination.size()
                                       : std::strlen(&destination[0]) + 1;
  msghdr.msg_namelen = offsetof(struct sockaddr_un, sun_path) + pathlen;
  msghdr.msg_iov = &iovec;
  msghdr.msg_iovlen = 1;
  return ::sendmsg(socket, &msghdr, flags);
}

unix_domain_socket unix_domain_socket::listen(const std::string& path) {
  return unix_domain_socket{detail::uds_listen(path)};
}

unix_domain_socket unix_domain_socket::accept(const std::string& path) {
  auto server = detail::uds_listen(path);
  if (server != -1)
    return unix_domain_socket{detail::uds_accept(server)};
  return unix_domain_socket{};
}

unix_domain_socket
unix_domain_socket::connect(const std::string& path, socket_type type) {
  return unix_domain_socket{detail::uds_connect(path, type)};
}

unix_domain_socket::operator bool() const {
  return fd != -1;
}

bool unix_domain_socket::send_fd(int fd) {
  VAST_ASSERT(*this);
  return detail::uds_send_fd(this->fd, fd);
}

int unix_domain_socket::recv_fd() {
  VAST_ASSERT(*this);
  return detail::uds_recv_fd(fd);
}

namespace {

[[nodiscard]] caf::error make_nonblocking(int fd, bool flag) {
  auto flags = ::fcntl(fd, F_GETFL, 0);
  if (flags == -1)
    return caf::make_error(ec::filesystem_error,
                           "failed in fcntl(2):", std::strerror(errno));
  flags = flag ? flags | O_NONBLOCK : flags & ~O_NONBLOCK;
  if (::fcntl(fd, F_SETFL, flags) == -1)
    return caf::make_error(ec::filesystem_error,
                           "failed in fcntl(2):", std::strerror(errno));
  return caf::none;
}

} // namespace

caf::error make_nonblocking(int fd) {
  return make_nonblocking(fd, true);
}

caf::error make_blocking(int fd) {
  return make_nonblocking(fd, false);
}

caf::error poll(int fd, int usec) {
  fd_set rdset;
  FD_ZERO(&rdset);
  FD_SET(fd, &rdset);
  timeval timeout{0, usec};
  auto rc = ::select(fd + 1, &rdset, nullptr, nullptr, &timeout);
  if (rc < 0) {
    switch (rc) {
      default:
        vast::die("unhandled select(2) error");
      case EINTR:
      case ENOMEM:
        return caf::make_error(ec::filesystem_error,
                               "failed in select(2):", std::strerror(errno));
    }
  }
  if (!FD_ISSET(fd, &rdset))
    return caf::make_error(ec::filesystem_error,
                           "failed in fd_isset(3):", std::strerror(errno));
  return caf::none;
}

caf::error close(int fd) {
  int result;
  do {
    result = ::close(fd);
  } while (result < 0 && errno == EINTR);
  if (result != 0)
    return caf::make_error(ec::filesystem_error,
                           "failed in close(2):", std::strerror(errno));
  return caf::none;
}

// Note: Enable the *large_file_io* test in filesystem.cpp to test
// modifications to this funciton.
caf::expected<size_t> read(int fd, void* buffer, size_t bytes) {
  auto total = size_t{0};
  auto buf = reinterpret_cast<uint8_t*>(buffer);
  while (total < bytes) {
    ssize_t taken;
    // On darwin (macOS), read returns with EINVAL if more than INT_MAX bytes
    // are requested. This problem might also exist on other platforms, so we
    // defensively limit our calls everywhere.
    constexpr size_t read_max = std::numeric_limits<int>::max();
    auto request_size = std::min(read_max, bytes - total);
    do {
      taken = ::read(fd, buf + total, request_size);
    } while (taken < 0 && errno == EINTR);
    if (taken < 0) // error
      return caf::make_error(ec::filesystem_error,
                             "failed in read(2):", std::strerror(errno));
    if (taken == 0) // EOF
      break;
    total += static_cast<size_t>(taken);
  }
  return total;
}

// Note: Enable the *large_file_io* test in filesystem.cpp to test
// modifications to this funciton.
caf::expected<size_t> write(int fd, const void* buffer, size_t bytes) {
  auto total = size_t{0};
  auto buf = reinterpret_cast<const uint8_t*>(buffer);
  while (total < bytes) {
    ssize_t written;
    // On darwin (macOS), write returns with EINVAL if more than INT_MAX bytes
    // are requested. This problem might also exist on other platforms, so we
    // defensively limit our calls everywhere.
    constexpr size_t write_max = std::numeric_limits<int>::max();
    auto request_size = std::min(write_max, bytes - total);
    do {
      written = ::write(fd, buf + total, request_size);
    } while (written < 0 && errno == EINTR);
    if (written < 0)
      return caf::make_error(ec::filesystem_error,
                             "failed in write(2):", std::strerror(errno));
    // write should not return 0 if it wasn't asked to write that amount. We
    // want to cover this case anyway in case it ever happens.
    if (written == 0)
      return caf::make_error(ec::filesystem_error, "write(2) returned 0");
    total += static_cast<size_t>(written);
  }
  return total;
}

caf::error seek(int fd, size_t bytes) {
  if (::lseek(fd, bytes, SEEK_CUR) == -1)
    return caf::make_error(ec::filesystem_error,
                           "failed in seek(2):", std::strerror(errno));
  return caf::none;
}

} // namespace vast::detail
