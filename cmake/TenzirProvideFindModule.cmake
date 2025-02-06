# Find modules are needed by the consumer in case of a static build, or if the
# linkage is PUBLIC or INTERFACE.
macro (provide_find_module name)
  message(VERBOSE "Providing cmake module for ${name}")
  configure_file("${PROJECT_SOURCE_DIR}/cmake/Find${name}.cmake"
                 ${CMAKE_BINARY_DIR} COPYONLY)
  install(
    FILES "${CMAKE_BINARY_DIR}/Find${name}.cmake"
    DESTINATION "${TENZIR_INSTALL_CMAKEDIR}/tenzir"
    COMPONENT Development)
endmacro ()
