# parse_json

Parses a string as a JSON value.

```tql
parse_json(input:string) -> any
```

## Description

The `parse_json` function parses a string as a JSON value.

### `input: string`

The string to parse.

## Examples

### Parse a JSON record

```tql
from { input = R#"{ a = 42, b = "text"}"# }
output = input.parse_json()
```
```tql
{
  input: "{ a = 42, b = \"text\"}",
  output: {
    a: 42,
    b: "text"
  }
}
```

### Parse a JSON list

```tql
from { input = "[0,1]" }
output = input.parse_json()
```
```tql
{
  input: "[0,1]",
  output: [0, 1]
}
```
