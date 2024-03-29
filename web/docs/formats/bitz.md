---
sidebar_custom_props:
  format:
    parser: true
    printer: true
---

# bitz

Reads and writes BITZ, Tenzir's internal wire format.

## Synopsis

```
bitz
```

## Description

The `bitz` format provides a parser and printer for Tenzir's internal wire
format. It enables lossless transfer of events between Tenzir nodes through any
connector.

BITZ is an unstable format, i.e., it cannot safely be written to disk and be
read again later with another Tenzir version.

Use BITZ when you need high-throughput structured data exchange with minimal
overhead. BITZ is a thin wrapper around Arrow's record batches. That is, BITZ
lays out data in a (compressed) columnar fashion that makes it conducive for
analytical workloads. Since it's padded and byte-aligned, it is portable and
doesn't induce any deserialization cost, making it suitable for
write-once-read-many use cases.

:::info Did you know?
BITZ is short for **bi**nary **T**en**z**ir, and a play on the word bits.
:::

## Examples

Transfer events between two pipelines using `zmq`.

```text {0} title="Send BITZ over ZeroMQ"
export
| to zmq://localhost:5670 write bitz
```

```text {0} title="Receive BITZ from ZeroMQ"
from zmq://localhost:5670 read bitz
| import
```
