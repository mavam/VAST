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

@test "one let with unknown variable" {
  check ! tenzir 'let $foo = $bar'
}

@test "two lets" {
  check tenzir 'let $foo = 42 | let $bar = now()'
}

@test "two lets with dependency" {
  check tenzir 'let $foo = 42 | let $bar = $foo + 1'
}
