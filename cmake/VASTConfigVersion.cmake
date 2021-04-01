set(VAST_VERSION_FALLBACK "2021.03.25")

if (NOT VAST_VERSION_TAG)
  if (DEFINED ENV{VAST_VERSION_TAG})
    set(VAST_VERSION_TAG "${ENV{VAST_VERSION_TAG}}")
  elseif (EXISTS "${CMAKE_CURRENT_LIST_DIR}/../.git")
    find_package(Git QUIET)
    if (Git_FOUND)
      execute_process(
        COMMAND "${GIT_EXECUTABLE}" describe --tags --long --dirty --abbrev=10
        WORKING_DIRECTORY "${CMAKE_CURRENT_LIST_DIR}/.."
        OUTPUT_VARIABLE VAST_VERSION_TAG
        OUTPUT_STRIP_TRAILING_WHITESPACE
        RESULT_VARIABLE VAST_GIT_DESCRIBE_RESULT)
      if (NOT VAST_GIT_DESCRIBE_RESULT EQUAL 0)
        message(FATAL_ERROR "git describe failed: ${VAST_GIT_DESCRIBE_RESULT}")
      endif ()
    endif ()
  endif ()
endif ()

if (NOT VAST_VERSION_TAG)
  set(VAST_VERSION_TAG "${VAST_VERSION_FALLBACK}")
endif ()

# We accept:
# (1) 2021.03.25(-dirty)
# (2) 2021.03.25-rc1(-dirty)
# (3) 2021.03.25-13-g3c8009fe4(-dirty)
# (4) 2021.03.25-rc1-13-g3c8009fe4(-dirty)

list(LENGTH "${VAST_VERSION_TAG}" version_tag_list_len)
if (NOT version_tag_list_len EQUAL 0)
  message(FATAL_ERROR "Invalid version tag: ${VAST_VERSION_TAG}")
endif ()
unset(version_tag_list_len)

string(REPLACE "-" ";" version_list "${VAST_VERSION_TAG}")
# The version string can optionally have a "-dirty" suffix, we strip it now to
# get consistent reverse indexing.
list(GET version_list -1 version_list_last)
if (NOT version_list_last OR version_list_last STREQUAL "dirty")
  list(POP_BACK version_list)
endif ()
list(LENGTH version_list version_list_len)

# Extract Major, Minor, and Patch.
list(GET version_list 0 VAST_VERSION_MMP)
string(REPLACE "." ";" VAST_VERSION_MMP "${VAST_VERSION_MMP}")
list(GET VAST_VERSION_MMP 0 VAST_VERSION_MAJOR)
list(GET VAST_VERSION_MMP 1 VAST_VERSION_MINOR)
list(GET VAST_VERSION_MMP 2 VAST_VERSION_PATCH)

# Extract Tweak and Commit.
if (version_list_len GREATER 2)
  list(GET version_list -2 VAST_VERSION_TWEAK)
  list(GET version_list -1 VAST_VERSION_COMMIT)
else ()
  # Default tweak to 0 and commit to unset.
  set(VAST_VERSION_TWEAK 0)
endif ()

unset(version_list)
unset(version_list_last)
unset(version_list_len)

cmake_policy(PUSH)
if (POLICY CMP0009)
  # Do not follow symlinks in FILE GLOB_RECURSE by default.
  # https://cmake.org/cmake/help/latest/policy/CMP0009.html
  cmake_policy(SET CMP0009 NEW)
endif ()

file(
  GLOB_RECURSE
  hash_files
  "${CMAKE_CURRENT_LIST_DIR}/../libvast/*.hpp"
  "${CMAKE_CURRENT_LIST_DIR}/../libvast/*.hpp.in"
  "${CMAKE_CURRENT_LIST_DIR}/../libvast/*.cpp"
  "${CMAKE_CURRENT_LIST_DIR}/../cmake/*"
  "${CMAKE_CURRENT_LIST_DIR}/../CMakeLists.txt")
list(SORT hash_files)

cmake_policy(POP)

list(FILTER hash_files EXCLUDE REGEX
     "^${CMAKE_CURRENT_SOURCE_DIR}/libvast/aux/")

list(FILTER hash_files EXCLUDE REGEX
     "^${CMAKE_CURRENT_SOURCE_DIR}/libvast/test/")

list(
  SORT hash_files
  COMPARE FILE_BASENAME
  CASE INSENSITIVE)

foreach (hash_file IN LISTS hash_files)
  if (EXISTS "${hash_file}" AND NOT IS_DIRECTORY "${hash_file}")
    file(MD5 "${hash_file}" hash)
    list(APPEND hashes "${hash}")
  endif ()
endforeach ()

string(MD5 VAST_BUILD_TREE_HASH "${hashes}")
