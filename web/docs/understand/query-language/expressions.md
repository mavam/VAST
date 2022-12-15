---
sidebar_position: 0
---

# Expressions

VAST's expression language makes it easy to describe a relevant subset of
interest over structured data. The "easy" part is that VAST expressions operate
on multiple different schemas at once, as opposed to traditional expressions
that apply to a single, fixed schema. The language captures this heterogeneity
with [extractors](#extractors).

An *expression* is a function over an event that evaluates to `true` or
`false`, indicating whether it qualifies as result. Expression operands are
either sub-expressions or predicates, and can be composed via *conjunctions*
(`&&`), *disjunctions* (`||`), and *negations* (`!`).

The following diagram shows an example expression in tree form:

![Spectra](/img/expressions.light.png#gh-light-mode-only)
![Spectra](/img/expressions.dark.png#gh-dark-mode-only)

When written out, it looks like this:

```c
(dport <= 1024 || :addr in 10.0.0.0/8) && ! (#type == /zeek.*/)
```

In this example, the predicate operands `dport`, `:addr`, and `#type` represent
[extractors](#extractors) that resolve to a set of matching fields at runtime.

Let's take a look at the expression components in more depth.

## Connectives

There exist three logical connectives that connect sub-expressions:

- `&&`: the logical AND between two expressions
- `||`: the logical OR between two expressions
- `!`: the logical NOT of one expression

## Predicates

A predicate has the form `LHS` `op` `RHS`, where `LHS` denotes the left-hand
side operand and `RHS` the right-hand side operand. The relational operator
`op` is [typed](#type-compatibility), i.e., only a subset of the cross product
of operand types is valid.

An operand is either an [extractor](#extractors) or a [value](#values). The
typing can often only inferred at runtime when schema information is available.

### Relational Operators

The following operators separate two operands:

- `<`: less than
- `<=`: less equal
- `>=`: greater equal
- `==`: equal to
- `!=`: not equal to
- `in`: in  *(left to right)*
- `!in`: not in *(left to right)*
- `ni`: in *(right to left)*
- `!ni`: not in *(right to left)*

### Type Compatibility

The table below illustrates a partial function over the cross product of
available types. Each letter in a cell denotes a set of operators:
- **E**: equality operators `==`, `!=`
- **R**: range operators `<`, `<=`, `>=`, `>`
- **M**: membership operators `in`, `!in`, `ni`, `!ni`

| | **Bool** | **Integer** | **Count** | **Real** | **Duration** | **Time** | **String** | **Pattern** | **Address** | **Subnet** | **Enum** | **List** | **Map**
---|---|---|---|---|---|---|---|---|---|---|---|---|---
 **Bool** | E |  |  |  |  |  |  |  |  |  |  | M | M
 **Integer** |  | ER |  |  |  |  |  |  |  |  |  | M | M
 **Count** |  |  | ER |  |  |  |  |  |  |  |  | M | M
 **Real** |  |  |  | ER |  |  |  |  |  |  |  | M | M
 **Duration** |  |  |  |  | ER |  |  |  |  |  |  | M | M
 **Time** |  |  |  |  |  | ER |  |  |  |  |  | M | M
 **String** |  |  |  |  |  |  | EM | EM |  |  |  | M | M
 **Pattern** |  |  |  |  |  |  | EM | EM |  |  |  | M | M
 **Address** |  |  |  |  |  |  |  |  | E | EM |  | M | M
 **Subnet** |  |  |  |  |  |  |  |  | EM | EM |  | M | M
 **Enum** |  |  |  |  |  |  |  |  |  |  | E | M | M
 **List** | M | M | M | M | M | M | M | M | M | M | M | EM | M
 **Map** | M | M | M | M | M | M | M | M | M | M | M | M | EM

### Extractors

An *extractor* retrieves a certain aspect of an event. When looking up an
expression, VAST *binds* the extractor to a specific record field, i.e., maps it
to the corresponding numeric column offset in the schema. **Binding an expression
implicitly creates a disjunction of all matching fields.** We find that this
existential qualification is the natural user experience when "extracting" data
declaratively.

VAST has the following extractor types:

1. [Field](#field-extractor): extracts all fields whose name match a given
   record field name.

2. [Type](#type-extractor): extracts all event types that have a field of a
   given type.

3. [Meta](#meta-extractor): matches on the type name or field name of a layout
   instead of the values contained in actual events.

#### Field Extractor

Field extractors have the form `x` or `x.y.z` where `x`, `y`, and `z` match on
record field names. The access fields in nested records. Using a type name as
leftmost element before a `.` is also possible.

A field extractor has *suffix* semantics. It is possible to just write `z` to
access `x.y.z`. In fact, writing `z` is equivalent to `*.z` and creates a
disjunction of all fields ending in `z`.

##### Examples

- `ts > 1 day ago`: events with a record field `ts` from the last 24h hours
- `zeek.conn.id.orig_h in 192.168.0.0/24`: connections with source IP in
  192.168.0.0/24
- `orig_bytes >= 10Ki`: events with a field `orig_bytes` greater or equal to
  10 * 2^10.

#### Type Extractor

Type extractors have the form `:T` where `T` is the type of a field. Type
extractors work for all [basic
types](/docs/understand/data-model/type-system) and user-defined aliases.

A search for type `:T` includes all aliased types. For example, given the alias
`port` that maps to `count`, then the `:count` type extractor will also consider
instances of type `port`. However, a `:port` query does not include `:count`
types because an alias is a strict refinement of an existing type.

##### Examples

- `:timestamp > 1 hour ago`: events with a `timestamp` alias in the last hour
- `:addr == 6.6.6.6`: events with any field of type `addr` equal to 6.6.6.6
- `:count > 42M`: events where `count` values is greater than 42M
- `"evil" in :string`: events where any `string` field contains the substring
  `evil`

#### Meta Extractor

Meta extractors have the form `#extractor`. They work on the event metadata
(e.g., their schema) instead of the value domain.

- `#type`: on the event name in a schema
- `#import_time`: matches on the ingestion time when event arrived at the server

##### Examples

- `#type == "zeek.conn"`: events of type `zeek.conn`
- `"suricata" in #type`: events that have `suricata` in their type name
- `#import_time > 1 hour ago`: events that have been imported within the last
  hour

### Value Predicates

Predicates with type extractors and equality operators can be written tersely
as **value predicates**. That is, if a predicate has the form `:T == X` where
`X` is a value and `T` the type of `X`, it suffices to write `X`.
The predicate parser deduces the type of `X` automatically in this case.

For example, `6.6.6.6` is a valid predicate and expands to `:addr == 6.6.6.6`.
This allows for quick type-based point queries, such as
`(6.6.6.6 || 80/tcp) && "evil"`.

:::tip
Value predicates of type `subnet` expand more broadly. Given a subnet
`10.0.0.0/8`, the parser expands this to:

```c
:subnet == 10.0.0.0/8 || :addr in 10.0.0.0/8
```

This makes it easier to search for IP addresses belonging to a specific subnet.
:::

## Values

Every [type](/docs/understand/data-model/type-system) has a corresponding
value syntax in the expression language.

Here is an over view of basic types:

| Identifier | Description                             | Example Value
| ---------- | --------------------------------------- | -------------
| `none`     | Denotes an absent or invalid value      | `nil`
| `bool`     | A boolean value                         | `T`, `F`
| `int`      | A 64-bit signed integer                 | `-42`, `+3`
| `count`    | A 64-bit unsigned integer               | `0`, `42`
| `real`     | A 64-bit double (IEEE 754)              | `-0.7`, `1.337`
| `duration` | A time span (nanosecond granularity)    | `-3us`, `24h`
| `time`     | A time point (nanosecond granularity)   | `now`, `1h ago`, `2020-01-01+10:42:00`
| `string`   | A sequence of characters                | `"foo"`
| `pattern`  | A regular expression                    | `/fo*.bar$/`
| `addr`     | An IPv4 or IPv6 address                 | `::1`, `10.0.0.1`, `2001:db8::`
| `subnet`   | An IPv4 or IPv6 subnet                  | `::1/128`, `10.0.0.0/8`, `2001:db8::/32`

Complex types:

| Identifier  | Description                             | Example Data
| ----------- | --------------------------------------- | ------------
| `list`      | An ordered sequence of values where each element has type `T` | `[1, 2, 3]`, `[]`
| `map`       | An associate array which maps keys to values | `{x -> a, y -> b, z -> c}`, `{}`
| `record`    | a product type with one or more named fields | `<x: a, y: b, z: c>`, `<a, b, c>`, `<>`
