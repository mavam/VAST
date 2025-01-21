# read_xsv

Read XSV from a byte stream.

```tql
read_xsv field_sep:string, list_sep:string, null_value:string,
        [comments=bool, header=string, auto_expand=bool, quotes=string,
         auto_expand=bool, schema=string,
         selector=string, schema_only=bool, raw=bool, unflatten=string]
```

## Description

The `read_xsv` operator transforms a byte stream into a event stream by parsing
the bytes as [XSV](https://en.wikipedia.org/wiki/Delimiter-separated_values), a
generalization of CSV with a more flexible separator specification.

The following table lists existing XSV configurations:

|Format               |Field Separator|List Separator|Null Value|
|---------------------|:-------------:|:------------:|:--------:|
|[`csv`](read_csv.md)|`,`            |`;`           | empty    |
|[`ssv`](read_ssv.md)|`<space>`      |`,`           |`-`       |
|[`tsv`](read_tsv.md)|`\t`           |`,`           |`-`       |

[csv]: https://en.wikipedia.org/wiki/Comma-separated_values
[xsv]: https://en.wikipedia.org/wiki/Delimiter-separated_values

### `field_sep: string`

The string separating different fields.

### `list_sep: string`

The string separating different elements in a list within a single field.

### `null_value: string`

The string denoting an absent value.

### `auto_expand = bool (optional)`

Automatically add fields to the schema when encountering events with too many
values instead of dropping the excess values.

### `comments = bool (optional)`

Treat lines beginning with `#` as comments.

### `header = string (optional)`

The string to be used as the header for the parsed values. If unspecified, the
first line of the input is used as the header.

### `quotes = string (optional)`

A string of not escaped characters that are supposed to be considered as quotes.

Defaults to the characters `"'`.

### `raw = bool (optional)`

Use only the raw types that are native to the parsed format. Fields that have a type
specified in the chosen `schema` will still be parsed according to the schema.

In the case of XSV this means that no parsing of data takes place at all
and every value remains a string.

### `schema = string (optional)`

Provide the name of a schema to be used by the parser.

If a schema with a matching name is installed, the result will always have
all fields from that schema.
* Fields that are specified in the schema, but did not appear in the input will be null.
* Fields that appear in the input, but not in the schema will also be kept. `schema_only=true`
can be used to reject fields that are not in the schema.

If the given schema does not exist, this option instead assigns the output schema name only.

The `schema` option is incompatible with the `selector` option.

### `selector = string (optional)`

Designates a field value as schema name with an optional dot-separated prefix.

The string is parsed as `<fieldname>[:<prefix>]`. The `prefix` is optional and
will be prepended to the field value to generate the schema name.

For example, the Suricata EVE JSON format includes a field
`event_type` that contains the event type. Setting the selector to
`event_type:suricata` causes an event with the value `flow` for the field
`event_type` to map onto the schema `suricata.flow`.

The `selector` option is incompatible with the `schema` option.

### `schema_only = bool (optional)`

When working with an existing schema, this option will ensure that the output
schema has *only* the fields from that schema. If the schema name is obtained via a `selector`
and it does not exist, this has no effect.

This option requires either `schema` or `selector` to be set.

### `unflatten = string (optional)`

A delimiter that, if present in keys, causes values to be treated as values of
nested records.

A popular example of this is the [Zeek JSON](read_zeek_json.md) format. It
includes the fields `id.orig_h`, `id.orig_p`, `id.resp_h`, and `id.resp_p` at
the top-level. The data is best modeled as an `id` record with four nested
fields `orig_h`, `orig_p`, `resp_h`, and `resp_p`.

Without an unflatten separator, the data looks like this:

```tql title="Without unflattening"
{
  id.orig_h: 1.1.1.1,
  id.orig_p: 10,
  id.resp_h: 1.1.1.2,
  id.resp_p: 5
}
```

With the unflatten separator set to `.`, Tenzir reads the events like this:

```tql title="With 'unflatten'"
{
  id: {
    orig_h: 1.1.1.1,
    orig_p: 10,
    resp_h: 1.1.1.2,
    resp_p: 5
  }
}
```
