import ipaddress

import pandas as pd
import pyarrow as pa
import pytest

import vast.utils.arrow as vua


def test_schema_name_extraction():
    # Since Arrow cannot attach names to schemas, we do this via metadata.
    schema = pa.schema(
        [("a", "string"), ("b", "string")], metadata={"VAST:name:0": "foo"}
    )
    assert vua.name(schema) == "foo"


def test_schema_alias_extraction():
    # Since Arrow cannot attach names to schemas, we do this via metadata.
    schema = pa.schema(
        [("a", "string"), ("b", "string")],
        metadata={"VAST:name:0": "foo", "VAST:name:1": "bar"},
    )
    names = vua.names(schema)
    assert len(names) == 2
    assert names[0] == "foo"
    assert names[1] == "bar"
    # The first name is the top-level type name.
    assert vua.name(schema) == "foo"


def test_unpack_ip():
    assert vua.unpack_ip(
        b"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\n" b"\x01\x15\xa5"
    ) == ipaddress.IPv4Address("10.1.21.165")


def test_fmt_ip():
    df = pd.DataFrame(
        [b"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\n\x01\x15\xa5"],
        columns=["ip"],
    )
    assert vua.fmt_ip(df, ip_columns=["ip"]).ip[0] == ipaddress.IPv4Address(
        "10.1.21.165"
    )
