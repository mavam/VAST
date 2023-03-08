---
sidebar_position: 0
---

# Pipelines

The VAST language centers around one principle: **dataflow pipelines**.

A pipeline is chain of [operators](operators) that represents a flow of data.
Operators can produce, transform, or consume data. Think of it as UNIX pipes or
Powershell commands where output from one command is input to the next:

![Pipeline Chaining](pipeline-chaining.excalidraw.svg)

VAST distinguishes three types of operators:

1. **Source**: generates new data
2. **Transformation**: modifies data
3. **Sink**: consumes data

A pipeline consists of one source, one sink, and zero or more transformations.
The diagram below illustrates the operator chaining:

![Pipeline Structure](pipeline-structure.excalidraw.svg)

If a pipeline would not have a source and sink, it would "leak" data. We call
pipelines that have both a source and sink a **closed pipeline**. VAST can only
execute closed pipelines. A pipeline that solely consists of a chain
transformations is an **open pipeline**. You can use open pipelines as building
blocks to build nested pipelines:

![Nested Pipeline](pipeline-nested.excalidraw.svg)

## Syntax

VAST comes with its own language to define pipelines, geared towards working
with richly typed, structured event data across multiple schemas. There exist
numerous dataflow languages out there, and drew inspiration from others to
achieve:

- the *familiarity* of [splunk](https://splunk.com)
- the *capability* of [jq](https://stedolan.github.io/jq/)
- the *elegance* of [Zed](https://zed.brimdata.io/)
- the *fluidity* of [Nu](https://www.nushell.sh/)
- the *ambition* of [PRQL](https://prql-lang.org/)
- the *ease* of [Kusto](https://github.com/microsoft/Kusto-Query-Language)

:::tip Why yet another language?
You may sigh and ask "why are you creating yet another language?" We hear you.
Please allow us to elaborate. First, our long-term strategy is to support as
many [language frontends](#language-frontends) as possible. Databricks already
built a [SIEM-to-Spark
transpiler](https://github.com/databrickslabs/transpiler). Our committment to
Apache Arrow and efforts like [substrait](https://substrait.io/) and
[ibis](https://ibis-project.org/) further show that there is a viable path to
convergence. Unfortunately we cannot wait until these technologies are
production-grade; the needed [data engineering has a long
tail](/blog/parquet-and-feather-data-engineering-woes).

Second, our goal is to build an open system on top of Apache Arrow, allowing
anyone to hook into a standardized data stream to deploy analytics at scale.
None of the existing dataflow languages used by security people have this
property. Neither did we encounter the capability to write operators that work
across mulitple schemas in a rich type system. We do not want users to think of
tables, but rather domain types. Finally, users should be able to express both
streaming and batch workloads in a unified language.

In summary, speed of iteration, the current data ecosystem state, the
committment to an open data plane, the focus on types as opposed tables, and the
unified execution of streaming and batch workloads drove us to devising a new
language.
:::

More generally, we put a lot of emphasis on the following guidelines when
designing the language:

1. Use natural language keywords where possible
2. Lean on operator names that are familiar to Unix and Powershell users
3. Avoid gratuitous syntax elements like brackets, braces, quotes, or
   punctionations.
4. Exploit symmetries for an intuitive learning experience, e.g., `from` and
   `to` have their duals `read` and `write`.

How does the syntax of a concrete VAST pipeline look? Let's take the following
example:

![Pipeline Example](pipeline-example.excalidraw.svg)

Here is how you write this pipeline in the VAST language:

```cpp
from vast
| where #type == "zeek.weird" && note == "SSL::Invalid_Server_Cert"
| summarize count(num) by id.resp_h
| sort
| head 20
| write json to stdout
```

The pipeline performs the following steps:

1. Get data from VAST
2. Filters out a subset of events
3. Aggregate them by destination IP
4. Sort by frequency
5. Take the top-20 items
6. Write the output as JSON to standard output

:::caution Running closed pipelines
We do not support running closed pipelines yet, but aim to ship this ability
soon. The corresponding [roadmap
item](https://github.com/tenzir/public-roadmap/issues/18) tracks the progress
publicly.

Until then, it is only possible to run an open pipelines. When using the `vast`
binary, source and sink operators are implicit. You can [run an open
pipeline](/docs/use/export) with the `export` command as follows:

```bash
vast export json 'where ... | ... | head 20'
```
:::

## Expressions

VAST [expressions](expressions) are search expressions to describe the desired
working set, usually at the beginning of an interactive data exploration. An
expression consists of predicates chained together by *connectives*, such as a
conjunction (logical AND), a disjunction (logical OR), and a negation (logical
NOT). The expressiveness is equivalent to [boolean
algebra](https://en.wikipedia.org/wiki/Boolean_algebra) and its laws.

Expression occur predominatly as argument to the [where](operators/where.md)
operator to filter the dataflow. Other expression elements, such as
[extractors](expressions#extractors), also occur in other operators.

Historically, the VAST language only supported providing expressions. But the
strong demand for reshaping and analytic workloads made the language evolve to
include dataflow semantics.

## Connectors and Formats

VAST has two low-level abstractions to integrate with the rest of the world:

- [Connector](../connectors): performs low-level I/O to exchange data with a
  resource. A connector provides a *loader* to acquire raw bytes, and/or a
  *dumper* to send raw bytes to an external resource.
- [Format](../formats): translates bytes into structured events and vice versa.
  A format provides a *parser* that generates events or a *printer* that
  translates events into raw bytes.

The following diagram illustrates the dataflow between connectors, formats, and
the remaining operators:

![Connectors & Formats](connector-format.excalidraw.svg)

A connector is typically I/O-bound whereas a format CPU-bound.

## Logical and Phyiscal Operators

VAST has two types of operators:

1. **Logical Operators**: user-facing operators that express the intent in the
   domain.

2. **Physical Operators**: data-facing implementation detail.

Let's consider an example of a logical pipeline with the source consisting of
`from` and `read`, and the sink `write` and `to`:

![Logical Plan](operator-logical.excalidraw.svg)

A given `from`-`read` and `write`-`to` combination often directly maps to its
physical counterpart, the `load`-`parse` and `print`-`dump` operators that do
the actual work with the help of a connector and format:  

![Physical Plan](operator-physical.excalidraw.svg)

However, this rigid mapping is not required. The interfaces for sources and
sinks only demand that the operator generates or consumes structured events.
Some sources do the loading and parsing in a single step, e.g., when going
through a third-party library that exposes the structured data directly. We'd
still like to write `from X` at the logical level in this case, but the physical
then won't go through `load` and `parse`.

This decoupling is what makes the VAST language declarative: the user only needs
to specify the intent of how the data flows, but it's up to the implementation
to select the optimal building blocks for the most efficient realization. For
example, filter predicates may be "pushed down" to reduce the amount of data
that flows through a pipeline. Such optimizations are common practice in
declarative query languages.

## Language Frontends

If you do not like the syntax of the VAST language and prefer to bring your own
language to the data, then you can write a [frontend](frontends) that transpiles
user input into the VAST language.

For example, we provide a [Sigma](frontends/sigma) frontend that transpiles a
YAML detection rule into VAST [expression](expressions). In fact, the VAST
language itself is a language frontend.

In future, we aim for providing frontends for SQL and other detection languages.
Please [chat with us](/discord) if you have ideas about concrete languages VAST
should support.
