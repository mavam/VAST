# this is a comment
include_guard(GLOBAL)

function (VASTRegisterPlugin)
  include(GNUInstallDirs)

  cmake_parse_arguments(PLUGIN "" "TARGET;ENTRYPOINT" "SOURCES;TEST_SOURCES"
                        ${ARGN})

  # A replacement for target_link_libraries that links static libraries using
  # the platform-specific whole-archive options. Please test any changes to this
  # macro on all supported platforms and compilers.
  macro (target_link_whole_archive target visibility library)
    get_target_property(target_type ${library} TYPE)
    if (target_type STREQUAL "STATIC_LIBRARY")
      # Prevent elision of self-registration code in statically linked libraries,
      # c.f., https://www.bfilipek.com/2018/02/static-vars-static-lib.html
      # Possible PLATFORM_ID values:
      # - Windows: Windows (Visual Studio, MinGW GCC)
      # - Darwin: macOS/OS X (Clang, GCC)
      # - Linux: Linux (GCC, Intel, PGI)
      # - Android: Android NDK (GCC, Clang)
      # - FreeBSD: FreeBSD
      # - CrayLinuxEnvironment: Cray supercomputers (Cray compiler)
      # - MSYS: Windows (MSYS2 shell native GCC)#
      target_link_options(
        ${target}
        ${visibility}
        $<$<PLATFORM_ID:Darwin>:LINKER:-force_load,$<TARGET_FILE:${library}>>
        $<$<OR:$<PLATFORM_ID:Linux>,$<PLATFORM_ID:FreeBSD>>:LINKER:--whole-archive,$<TARGET_FILE:${library}>,--no-whole-archive>
        $<$<PLATFORM_ID:Windows>:LINKER:/WHOLEARCHIVE,$<TARGET_FILE:${library}>>
      )
    endif ()
    target_link_libraries(${target} ${visibility} ${library})
  endmacro ()

  if (NOT PLUGIN_TARGET)
    message(
      FATAL_ERROR "TARGET must be specified in call to VASTRegisterPlugin")
  endif ()

  if (NOT PLUGIN_ENTRYPOINT)
    list(LENGTH PLUGIN_SOURCES num_sources)
    if (num_sources EQUAL 1)
      list(GET PLUGIN_SOURCES 0 PLUGIN_ENTRYPOINT)
      set(PLUGIN_SOURCEs "")
    else ()
      message(
        FATAL_ERROR "ENTRYPOINT must be specified in call to VASTRegisterPlugin"
      )
    endif ()
  endif ()

  # Craete a stub source file with an identfier if no sources except for the
  # entrypoint exist.
  if (NOT PLUGIN_SOURCES)
    string(MAKE_C_IDENTIFIER "${PLUGIN_TARGET}" plugin_identifier)
    file(WRITE "${CMAKE_CURRENT_BINARY_DIR}/stub.cpp"
         "void vast_plugin_${plugin_identifier}_stub() {}")
    set(PLUGIN_SOURCES "${CMAKE_CURRENT_BINARY_DIR}/stub.cpp")
  endif ()

  # Create a static library target for our plugin _without_ the entrypoint.
  add_library(${PLUGIN_TARGET} STATIC ${PLUGIN_SOURCES})
  target_link_libraries(
    ${PLUGIN_TARGET}
    PUBLIC vast::libvast
    PRIVATE vast::internal)

  # Create a static library target for our plugin with the entrypoint, and use
  # static versions of VAST_REGISTER_PLUGIN family of macros.
  add_library(${PLUGIN_TARGET}-static STATIC ${PLUGIN_ENTRYPOINT})
  target_link_whole_archive(${PLUGIN_TARGET}-static PRIVATE ${PLUGIN_TARGET})
  target_link_libraries(${PLUGIN_TARGET}-static PRIVATE vast::internal)
  target_compile_definitions(${PLUGIN_TARGET}-static
                             PRIVATE VAST_ENABLE_STATIC_PLUGINS_INTERNAL)

  if (VAST_ENABLE_STATIC_PLUGINS)
    # Link our static library against the vast binary directly.
    target_link_whole_archive(vast PRIVATE ${PLUGIN_TARGET}-static)
  else ()
    # Enable position-independent code for the static library if we're linking
    # it into shared one.
    set_property(TARGET ${PLUGIN_TARGET} PROPERTY POSITION_INDEPENDENT_CODE ON)

    # Create a shared library target for our plugin.
    add_library(${PLUGIN_TARGET}-shared SHARED ${PLUGIN_ENTRYPOINT})
    target_link_whole_archive(${PLUGIN_TARGET}-shared PRIVATE ${PLUGIN_TARGET})
    target_link_libraries(${PLUGIN_TARGET}-shared PRIVATE vast::internal)

    # Install the plugin library to <libdir>/vast/plugins, and also configure
    # the library output directory accordingly.
    set_target_properties(
      ${PLUGIN_TARGET}-shared
      PROPERTIES LIBRARY_OUTPUT_DIRECTORY
                 "${CMAKE_BINARY_DIR}/${CMAKE_INSTALL_LIBDIR}/vast/plugins"
                 OUTPUT_NAME "${PLUGIN_TARGET}")
    install(TARGETS ${PLUGIN_TARGET}-shared
            DESTINATION "${CMAKE_INSTALL_LIBDIR}/vast/plugins")

    # Ensure that VAST only runs after all pluigns are built.
    if (TARGET vast)
      add_dependencies(vast ${PLUGIN_TARGET}-shared)
    endif ()
  endif ()

  if (EXISTS "${CMAKE_CURRENT_SOURCE_DIR}/schema")
    # Install the bundled schema files to <datadir>/vast.
    install(DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/schema"
            DESTINATION "${CMAKE_INSTALL_DATADIR}/vast")
    # Copy schemas from bundled plugins to the build directory so they can be
    # used from a VAST in a build directory (instead if just an installed VAST).
    file(
      GLOB_RECURSE
      plugin_schema_files
      CONFIGURE_DEPENDS
      "${CMAKE_CURRENT_SOURCE_DIR}/schema/*.schema"
      "${CMAKE_CURRENT_SOURCE_DIR}/schema/*.yml"
      "${CMAKE_CURRENT_SOURCE_DIR}/schema/*.yaml")
    list(SORT plugin_schema_files)
    foreach (plugin_schema_file IN LISTS plugin_schema_files)
      string(REGEX REPLACE "^${CMAKE_CURRENT_SOURCE_DIR}/schema/" ""
                           relative_plugin_schema_file ${plugin_schema_file})
      string(MD5 plugin_schema_file_hash "${plugin_schema_file}")
      add_custom_target(
        vast-schema-${plugin_schema_file_hash} ALL
        BYPRODUCTS
          "${CMAKE_BINARY_DIR}/share/vast/schema/${relative_plugin_schema_file}"
        COMMAND
          ${CMAKE_COMMAND} -E copy "${plugin_schema_file}"
          "${CMAKE_BINARY_DIR}/share/vast/schema/${relative_plugin_schema_file}"
        COMMENT
          "Copying schema file ${relative_plugin_schema_file} for plugin ${PLUGIN_TARGET}"
      )
      if (TARGET vast-schema)
        add_dependencies(vast-schema vast-schema-${plugin_schema_file_hash})
      endif ()
    endforeach ()
  endif ()

  # Setup unit tests.
  if (VAST_ENABLE_UNIT_TESTS AND PLUGIN_TEST_SOURCES)
    add_executable(${PLUGIN_TARGET}-test ${PLUGIN_TEST_SOURCES})
    target_link_libraries(${PLUGIN_TARGET}-test PRIVATE vast::test
                                                        vast::internal)
    target_link_whole_archive(${PLUGIN_TARGET}-test PRIVATE
                              ${PLUGIN_TARGET}-static)
    add_test(NAME build-${PLUGIN_TARGET}-test
             COMMAND "${CMAKE_COMMAND}" --build "${CMAKE_BINARY_DIR}" --config
                     "$<CONFIG>" --target ${PLUGIN_TARGET}-test)
    set_tests_properties(build-${PLUGIN_TARGET}-test
                         PROPERTIES FIXTURES_SETUP vast_unit_test_fixture)
    add_test(NAME ${PLUGIN_TARGET} COMMAND ${PLUGIN_TARGET}-test)
    set_tests_properties(${PLUGIN_TARGET} PROPERTIES FIXTURES_REQUIRED
                                                     vast_unit_test_fixture)
  endif ()

  # Setup integration tests.
  if (TARGET vast::vast
      AND EXISTS "${CMAKE_CURRENT_SOURCE_DIR}/integration/tests.yaml")
    if ("${CMAKE_PROJECT_NAME}" STREQUAL "VAST")
      set(integration_test_path "${CMAKE_SOURCE_DIR}/vast/integration")
    else ()
      if (IS_ABSOLUTE "${CMAKE_INSTALL_DATADIR}")
        set(integration_test_path "${CMAKE_INSTALL_DATADIR}/vast/integration")
      else ()
        get_target_property(integration_test_path vast::vast LOCATION)
        get_filename_component(integration_test_path "${integration_test_path}"
                               DIRECTORY)
        get_filename_component(integration_test_path "${integration_test_path}"
                               DIRECTORY)
        set(integration_test_path
            "${integration_test_path}/${CMAKE_INSTALL_DATADIR}/vast/integration"
        )
      endif ()
    endif ()
    file(
      GENERATE
      OUTPUT
        "${CMAKE_CURRENT_BINARY_DIR}/${PLUGIN_TARGET}-integration-$<CONFIG>.sh"
      CONTENT
        "#!/bin/sh
        if ! command -v jq >/dev/null 2>&1; then
          >&2 echo 'failed to find jq in $PATH'
          exit 1
        fi
        base_dir=\"${integration_test_path}\"
        env_dir=\"${CMAKE_CURRENT_BINARY_DIR}/integration_env\"
        app=\"$<TARGET_FILE:vast::vast>\"
        set -e
        if [ ! -d \"$env_dir\" ]; then
          python3 -m venv \"$env_dir\"
        fi
        . \"$env_dir/bin/activate\"
        python -m pip install --upgrade pip
        python -m pip install -r \"$base_dir/requirements.txt\"
        $<$<BOOL:${VAST_ENABLE_ARROW}>:python -m pip install pyarrow>
        $<$<TARGET_EXISTS:${PLUGIN_TARGET}-shared>:export VAST_PLUGIN_DIRS=\"$<TARGET_FILE_DIR:${PLUGIN_TARGET}-shared>\">
        export VAST_SCHEMA_DIRS=\"${CMAKE_CURRENT_SOURCE_DIR}/schema\"
        python \"$base_dir/integration.py\" \
          --app \"$app\" \
          --set \"${CMAKE_CURRENT_SOURCE_DIR}/integration/tests.yaml\" \
          --directory vast-${PLUGIN_TARGET}-integration-test \
          \"$@\"")
    add_custom_target(
      ${PLUGIN_TARGET}-integration
      COMMAND
        /bin/sh
        "${CMAKE_CURRENT_BINARY_DIR}/${PLUGIN_TARGET}-integration-$<CONFIG>.sh"
        -v DEBUG
      USES_TERMINAL)
    if (NOT TARGET integration)
      add_custom_target(integration)
    endif ()
    add_dependencies(integration ${PLUGIN_TARGET}-integration)
  endif ()
endfunction ()
