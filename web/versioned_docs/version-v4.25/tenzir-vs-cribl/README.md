# Tenzir vs. Cribl

We get a lot of questions about [Cribl](https://cribl.io) from our users:

- How do Tenzir pipelines differ?
- What is the equivalent of a Cribl source and destination?
- Does Tenzir have routes?
- How does Tenzir break events?
- Does Tenzir have packs?

To answer all these questions and quench the thirst of your inquisitive minds,
we put together this side-by-side comparison of Cribl and Tenzir.

## Product

![Cribl vs. Tenzir — Product](cribl-vs-tenzir-product.excalidraw.svg)

#### Cribl

- Cribl has several products:
  - **Cribl Stream**: runs pipelines that process data in motion using a
    [JavaScript-based](https://docs.cribl.io/stream/functions/) pipeline engine.
  - **Cribl Edge**: agent to collect data for forwarding to other Cribl
    products.
  - **Cribl Search**: cloud-based federated search over remote data sources.
    Microsoft's [Kusto Query language
    (KQL)](https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/)
    is the pipeline language for running queries over data at rest.
  - **Cribl Lake**: a data lake running on top of public cloud providers
- Cribl's product suite is closed source.

#### Tenzir

- Tenzir has a single, unified product. **The Tenzir Query Language (TQL)** is a
  unified language to process historical and streaming data. Users deploy
  *nodes* in that can be managed through the *platform* at
  [app.tenzir.com](https://app.tenzir.com).
- Tenzir is an open-core product, with an [open-source
  project](https://github.com/tenzir/tenzir) and a [commercial
  platform](https://tenzir.com/pricing) for enterprise needs.

## Architecture

### Deployment

![Cribl vs. Tenzir — Deployment](cribl-vs-tenzir-deployment.excalidraw.svg)

#### Cribl

- [Concepts](https://docs.cribl.io/stream/deploy-distributed/#concepts):
  - **Leader Node**: a Cribl Stream instance in leader mode to manage
    configurations and watch Worker Nodes.
  - **Worker Node**: a Cribl Stream instance in worker mode, managed by a leader
    node.
  - **Worker Group**: a collection of worker nodes with the same configuration.
  - **Mapping Ruleset**: maps nodes to worker groups.
- The Enterprise Edition supports on-prem hosting instances of leader and
  workers.

#### Tenzir

- Concepts:
  - **Node**: manages pipelines and optional storage.
  - **Platform**: centrally manages nodes.
- You deploy nodes in your infrastructure.
- Users manage nodes and pipelines through the platform.
- Nodes connect to the platform on startup.
- Nodes can run in the cloud and on premises.
- Tenzir hosts an instance of the platform at
  [app.tenzir.com](https://app.tenzir.com) for the Community Edition,
  Professional Edition, and Enterprise Edition.
- The Sovereign Edition allows for an on-premise, air-gapped deployment of the
  platform.

### Pipelines

![Cribl vs. Tenzir — Pipelines](cribl-vs-tenzir-pipelines.svg)

#### Cribl

Cribl Stream has the following pipeline
[concepts](https://docs.cribl.io/stream/basic-concepts/):

- [Sources](https://docs.cribl.io/stream/sources): configurations to collect
  data from remote resources
- [Pipelines](https://docs.cribl.io/stream/pipelines): a series of functions
  that process data, attached to routes
  - [Pre-processing
    Pipelines](https://docs.cribl.io/stream/pipelines/#input-conditioning-pipelines):
    attached to sources, e.g., to apply function to all input events
  - [Post-processing
    Pipelines](https://docs.cribl.io/stream/pipelines/#output-conditioning-pipelines):
    attached to destinations, e.g., to apply function to all output events
- [Routes](https://docs.cribl.io/stream/basic-concepts/#routes): assign events
  to pipelines
- [Destinations](https://docs.cribl.io/stream/destinations/): receive data

#### Tenzir

- Everything in Tenzir is a [pipeline](pipelines/README.md) that consist of one
  or more [operators](tql2/operators.md).
- Pipeline operators can be a *input*, a *transformation*, or an *output*.
- Tenzir will soon feature *Sources* and *Destinations* as concepts on top of
  pipeline operators.

### Functions vs. Operators

![Cribl vs. Tenzir — Operators](cribl-vs-tenzir-operators.excalidraw.svg)

#### Cribl

- A pipeline in Cribl Stream consists of a series of
[functions](https://docs.cribl.io/stream/basic-concepts/#functions).
- A "pipeline" in Cribl Search consists of a
  [dataset](https://docs.cribl.io/search/#datasets) followed by one or more
  [operators](https://docs.cribl.io/search/operators/).

#### Tenzir

- Tenzir does not differentiate between streaming and historical search
  pipelines. To run a historical query, simply use the `export` input operator.
- Tenzir operators are typed, supporting both unstructured data (bytes) and
  structured data (events), as well as conversions betwen the two types.

### Routing

![Cribl vs. Tenzir — Routing](cribl-vs-tenzir-routing.svg)

#### Cribl

- Cribl Stream's [Routes](https://docs.cribl.io/stream/routes/) are sequential
  filters that determine the pipelines events should be delivered to.

#### Tenzir

- Tenzir uses a publish/subscribe model to support various event forwarding
  patterns.
- You can re-implement Cribl Stream Routes using a combination of the
  [`publish`](tql2/operators/publish.md),
  [`subscribe`](tql2/operators/subscribe.md) and
  [`where`](tql2/operators/where.md) operators.

## Installation

### Provisioning

#### Cribl

- Cribl Stream runs on multiple Linux distributions
- A [Docker deployment](https://docs.cribl.io/stream/deploy-docker/) is also
  an option.
- Cribl Stream offers a [sizing calculator](https://www.criblsizing.info/) to
  estimate CPU and RAM requirements.
- A typical deployment consists of one more worker processes per machine.
- To scale horizontally, worker groups can spawn additional workers with the
  same configuration.

#### Tenzir

- Tenzir nodes run natively on any Linux distribution as a static binary
- A Docker deployment is also an option. The [platform](https://app.tenzir.com)
  generate a Docker Compose file for your node.
- Tenzir offers a [node sizing
  calculator](https://docs.tenzir.com/installation/size-a-node) to estimate
  CPU cores, RAM, and storage requirements.
- A typical deployment consists of exactly one Tenzir node process per machine.
- To scale horizontally, users can spawn multiple nodes, each of which runs a
  subset of pipelines.
- To scale vertically, a node uses a thread pool to adapt to the number of
  available CPU cores.

### Executables

#### Cribl

- The `cribl` binary starts/stops a Cribl Stream instance.
- By default, the UI listens on **port 9000**.
- By default, a HTTP In source listens at **port 10080**.

#### Tenzir

- The `tenzir` executable runs a single pipeline.
- The `tenzir-node` executable spawns up a node.
- If a platform configuration is present, the node attempts to connect to the
  platform so that you can manage.
- By default, a node listens on TCP **port 5158** for incoming Tenzir
  connections.
- There is no default HTTP ingest source, you need to deploy a pipeline for
  that.

## Data Model

![Cribl vs. Tenzir — Datamodel](cribl-vs-tenzir-datamodel.excalidraw.svg)

#### Cribl

- An **event** is a [collection of key-value
  pairs](https://docs.cribl.io/stream/event-model/).
- Events are JSON objects.
- Fields starting with a double-underscore are known as *internal fields* that
  sources can add to events, e.g., Syslog adds an `__srcIpPort` field. Internal
  fields are used within Cribl Stream and are not passed to destinations.
- Cribl allows users to write JavaScript to process events.

#### Tenzir

Events:

- An **event** is a semi-structured record, similar to a JSON object but with
  additional data types.
- Tenzir's [type system](tql2/language/types/README.md) is a superset of JSON,
  providing additional first-class types, such as `ip`,  `subnet`, `time`, and
  `duration`.
- Events have a **schema** that includes the field names and types
- Internally, Tenzir represents events as Apache Arrow *record batches*, which
  you can think of as data frames.

Bytes:

- In addition to events, Tenzir pipelines can also transport raw **bytes**.
- The operator decides whether it support bytes, events, or both.
- All Tenzir connectors produce or consume byte streams; formats parse or print
  byte streams.

See also the section on [dataflow](#dataflow) below.

## Dataflow

![Cribl vs. Tenzir — Dataflow](cribl-vs-tenzir-dataflow.svg)

#### Cribl

- A [source](https://docs.cribl.io/stream/sources/) generates bytes or events.
  - [Collector
    sources](https://docs.cribl.io/stream/sources/#collector-sources) fetch
    data in a triggered fashion.
  - [Push sources](https://docs.cribl.io/stream/sources/#push) send data to
    Cribl.
  - [Pull sources](https://docs.cribl.io/stream/sources/#pull-sources)
    continuously fetch data.
  - [System sources](https://docs.cribl.io/stream/sources/#system-sources)
    generate events about Cribl itself
  - [Internal sources](https://docs.cribl.io/stream/sources/#internal-sources)
    are similar to system sources but do not count towards license usage.
- A **custom command** is an optional customization point in the form of an
  executable that takes bytes on stdin bytes from the source and forwards the
  command output on stdout downstream.
- For sources that generates bytes, an [event
  breaker](https://docs.cribl.io/stream/event-breakers) splits bytes
  into individual events.
- **Fields** enable for enrichment on a key-value basis where the key matches a
  field in an event and the value is a JavaScript expression.
- A [parser](https://docs.cribl.io/stream/parsers-library/) is a configuration
  of the [parser function](https://docs.cribl.io/stream/parser-function/), which
  extracts fields from events. It supports JSON, CSV, key-value pairs, Grok,
  regular expressions, among others.
- The `_raw` field catches all events that cannot be parsed.
- Cribl stream sets the event time in the `_time` field and uses the current
  wallclock time if there is no suitable field.

#### Tenzir

- An **input operator** produces data.
- A **output operator** consumes data.
- A **transformation operator** consumes and produces data. Events-to-events
  transformations make it easy to [shape data](usage/shape-data/README.md).
- A **parser** is a bytes-to-events operator. Parsers are equivalent to event
  breakers. For example, breaking at a newline
  is equivalent to applying the [`read_lines`](tql2/operators/read_lines.md)
  parser.
- A **printer** is an events-to-bytes operator.
- The [`shell`](tql2/operators/shell.md) is a bytes-to-bytes transformation that
  can be placed freely in a pipeline where the operator types match. Unlike
  Cribl's custom commands, there are no restrictions where to place this
  operator in a pipeline.
- Similarly, the [`python`](tql2/operators/python.md) is an events-to-events
  transformation that can be placed freely in a pipeline where the operator
  upstream/downstream types match. The operator takes inline Python or a path to
  a file as argument, with the current event being represented by the variable
  `self`.
- Parse errors generate a diagnostic that can be processed separately with the
  [`diagnostics`](tql2/operators/diagnostics.md) input operator.
- There is not special `_time` field in Tenzir.

## Use Cases

This section compares how Cribl and Tenzir handle common use cases that we
encounter.

### Unrolling Arrays

#### Cribl

- The [`unroll`](https://docs.cribl.io/stream/json-unroll-function/) function
  unrolls/explodes an array of objects into individual events.
- The `unroll` function can only operate on the string value of an event that
  has a `_raw` field.

#### Tenzir

- The [`unroll`](tql2/operators/unroll.md) operator performs the same operation
  as Cribl's `unroll` function.
- The `unroll` operator can operate on any array in an event.

### Deduplication

Deduplication means removing duplicate events from a stream. Check out our [blog
post on deduplication](/blog/reduce-cost-and-noise-with-deduplication) that
discusses this topic in more depth.

#### Cribl

Cribl Stream has a [Suppress](https://docs.cribl.io/stream/suppress-function/)
function for deduplicating events.

- Controls:
  - **Key expression**: a string that describes a unique key for deduplicating,
    e.g., `${ip}:${port}` refers to fields `ip` and `port`.
  - **Number to allow**: number of events per time period.
  - **Suppression period**: the interval to suppress events for after the
    maximum number of allowed events have been seen.
  - **Drop suppressed events**: flag to control whether events get dropped or
    enriched with a `suppress=1` field.

Cribl Search has a [`dedup`](https://docs.cribl.io/search/dedup/) operator.

#### Tenzir

Tenzir has a [`deduplicate`](tql2/operators/deduplicate.md) operator.

- Controls:
  - **Extractors**: a list of field names that uniquely identify the event
    ("key expression").
  - **Limit**: the number of events to emit per unique key.
  - **Timeout**: The time that needs to pass until a suppressed event is no
    longer considered a duplicate. ("suppression period")
  - **Distance**: The number of events in sequence since the last occurrence of
    a unique event.

![Deduplicate Controls](deduplicate.excalidraw.svg)

### Enrichment

![Cribl vs. Tenzir — Enrichment](cribl-vs-tenzir-enrichment.excalidraw.svg)

#### Cribl

- **Lookups** are tables usable for enrichment with the [lookup
  function](https://docs.cribl.io/stream/lookup-function)
- Lookup files can be CSV or GeoIP databases in MMDB format.
- Changing lookup state must be periodically refreshed by providing a reload
  interval, which checks the underlying file for changes.
- For frequently changing data, Cribl
  [recommends](https://resources.cribl.io/cloud-onboarding/vd-894679668) the
  [Redis](https://docs.cribl.io/stream/redis-function/) function.

#### Tenzir

- Contexts are stateful objects usable for [enrichment](enrichment/README.md)
  with the [`context::enrich`](tql2/operators/context/enrich.md) operator.
- There exist several context types, such as lookup tables, Bloom filters, GeoIP
  databases, or user-written C++ plugins.
- Contexts are not static and limited to CSV or MMDB files; you can add data
  dynamically from any another pipeline, using the
  `context::*` management operators. That is, you can use all existing
  operators to get data in and then use it to update a context.
- When Tenzir lookup tables have CIDR subnets as key, you can perform an
  enrichment with single IP addresses (using a longest-prefix match). This comes
  in handy for [enriching with a network
  inventory](usage/enrich-with-network-inventory/README.md).
- Tenzir lookup tables support expiration of entries with per-key timeouts. This
  makes it possible to automatically expire no-longer-relevant entries, e.g.,
  stale observables.
- Tenzir lookup tables support aggregation functions as values so that you can
  easily build passive DNS or an asset inventory by extracting suitable
  information from events.

## Packs vs. Packages

#### Cribl

- [Packs](https://docs.cribl.io/stream/packs/) bundle configurations and
  workflows for easy deployment.
- Packs can include routes, pipelines, functions, sample data, and knowledge
  objects (e.g., lookups, parsers, schemas).
- Cribl hosts various packs at the [Packs Dispensary](https://packs.cribl.io/).

#### Tenzir

- A [library](https://app.tenzir.com/library) is a set of
  [packages](packages.md).
- Packages can include [pipelines](pipelines/README.md) and
  [contexts](enrichment/README.md).
- Tenzir maintains an open source [Community
  Library](https://github.com/tenzir/library) on GitHub.
- The Professional Edition and Enterprise Edition support managing custom
  libraries.
