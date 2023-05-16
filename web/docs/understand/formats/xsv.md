# xsv

Parses and prints lines with separated values.

## Synopsis

```
csv
ssv
tsv
```

## Description

The `xsv` format is a generalization of [comma-separated values (CSV)][csv] data
in tabular form with a more flexible separator specification supporting tabs, commas, and spaces. The first line in an XSV file is the header that describes the
field names. The remaining lines contain concrete values. One line corresponds
to one event, minus the header.

The following table juxtaposes the available XSV configurations:

|Format         |Field Separator|List Separator|Null Value|
|---------------|:-------------:|:------------:|:--------:|
|[`csv`](csv.md)|`,`            |`;`           | empty    |
|[`ssv`](ssv.md)|`<space>`      |`,`           |`-`       |
|[`tsv`](tsv.md)|`\t`           |`,`           |`-`       |

[csv]: https://en.wikipedia.org/wiki/Comma-separated_values

Like the [`json`](json.md) parser, the XSV parser infers types automatically.
Consider this piece of CSV data:

```csv
ip,sn,str,rec.a,rec.b
1.2.3.4,10.0.0.0/8,foo bar,-4.2,/foo|bar/
```

Here's the schema that the parser infers from the above data:

```yaml title=test.schema
record:
  - ip: ip
  - sn: subnet
  - str: string
  - record:
    - a: double
    - b: pattern
```

Note that nested records have dot-separated field names.

The default loader for the `xsv` parser is [`stdin`](../connectors/stdin.md).

The default saver for the `xsv` printer is [`stdout`](../connectors/stdout.md).

## Examples

Read CSV from stdin:

```
read csv from stdin
```

Write a multi-schema stream of events to a directory in TSV format, with one
file per unique schema:

```
write tsv to directory /tmp/result
```
