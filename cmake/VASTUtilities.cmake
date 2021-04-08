# Miscellaneous CMake helper.

# Joins a list to a string.
function (join values separator output)
  string(REPLACE ";" "${separator}" _tmp_str "${values}")
  set(${output}
      "${_tmp_str}"
      PARENT_SCOPE)
endfunction ()

# Retrives a textual representation of the current month.
macro (month result)
  cmake_policy(SET CMP0007 NEW)
  set(months
      ";January;February;March;April;May;June;July;August;September;October;November;December"
  )
  string(TIMESTAMP m "%m")
  list(GET months "${m}" ${result})
endmacro ()

# Retrives the current date in the from "Month Year".
macro (month_year result)
  month(m)
  string(TIMESTAMP y "%Y")
  set(${result} "${m} ${y}")
endmacro ()

# Retrives the current date in the from "Month Day, Year".
macro (month_day_year result)
  month(m)
  string(TIMESTAMP d "%d")
  string(TIMESTAMP y "%Y")
  set(${result} "${m} ${d}, ${y}")
endmacro ()

# Creates a relative symbolic link in the installation directory. Both source
# and destination are interpreted as relative to ${CMAKE_INSTALL_PREFIX}.
macro (install_symlink _filepath _sympath)
  get_filename_component(_symdir ${_sympath} DIRECTORY)
  file(RELATIVE_PATH _rel "${CMAKE_INSTALL_PREFIX}/${_symdir}"
       "${CMAKE_INSTALL_PREFIX}/${_filepath}")
  install(
    CODE "
    set(_destdir \"${CMAKE_INSTALL_PREFIX}\")
    if (NOT \"\$ENV{DESTDIR}\" STREQUAL \"\")
      string(PREPEND _destdir \"\$ENV{DESTDIR}/\")
      set(_destdir )
    endif ()
    set(_dst \"\${_destdir}/${_sympath}\")
    message(STATUS \"Creating:   \${_dst} -> ${_rel}\")
    execute_process(COMMAND \"${CMAKE_COMMAND}\" -E create_symlink
                    \"${_rel}\" \"\${_dst}\")
  ")
endmacro (install_symlink)

# Helper utility for printing the status of dependencies.
macro (dependency_summary name what)
  get_property(VAST_DEPENDENCY_SUMMARY GLOBAL
               PROPERTY VAST_DEPENDENCY_SUMMARY_PROPERTY)
  if (TARGET ${what})
    get_target_property(type "${what}" TYPE)
    if (type STREQUAL "INTERFACE_LIBRARY")
      string(MD5 stub "${what}")
      file(TOUCH "${CMAKE_CURRENT_BINARY_DIR}/${stub}.cpp")
      add_library(${stub} SHARED EXCLUDE_FROM_ALL
                  "${CMAKE_CURRENT_BINARY_DIR}/${stub}.cpp")
      target_link_libraries(${stub} PUBLIC ${what})
      cmake_policy(PUSH)
      cmake_policy(SET CMP0026 OLD)
      get_target_property(location "${stub}" LOCATION)
      cmake_policy(POP)
      get_filename_component(location "${location}" DIRECTORY)
      get_filename_component(location "${location}" DIRECTORY)
    else ()
      get_target_property(location "${what}" LOCATION)
      get_filename_component(location "${location}" DIRECTORY)
      get_filename_component(location "${location}" DIRECTORY)
    endif ()
  else ()
    set(location "${what}")
  endif ()
  if ("${location}" STREQUAL "" OR "${location}" MATCHES "-NOTFOUND$")
    set(location "Not found")
  endif ()
  list(APPEND VAST_DEPENDENCY_SUMMARY " * ${name}: ${location}")
  set_property(GLOBAL PROPERTY VAST_DEPENDENCY_SUMMARY_PROPERTY
                               "${VAST_DEPENDENCY_SUMMARY}")
endmacro ()
