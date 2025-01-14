: "${BATS_TEST_TIMEOUT:=10}"

setup() {
  export TENZIR_EXEC__DUMP_IR=true
  export TENZIR_TQL2=true
  bats_load_library bats-support
  bats_load_library bats-assert
  bats_load_library bats-tenzir
}

@test "empty" {
  check tenzir ''
}

@test "one let" {
  check tenzir 'let $foo = 42'
}
