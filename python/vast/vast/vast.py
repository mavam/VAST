import asyncio
import time
from abc import ABC
from enum import Enum, auto
from typing import AsyncIterable
import secrets

import pyarrow as pa
import vast.utils.arrow
import vast.utils.config
import vast.utils.logging

from .cli import CLI

logger = vast.utils.logging.get(__name__)


class ExportMode(Enum):
    HISTORICAL = auto()
    CONTINUOUS = auto()
    UNIFIED = auto()


class TableSlice(ABC):
    """The VAST abstraction wrapping Arrow record batches"""


class PyArrowTableSlice(TableSlice):
    """A TableSlice internally represented by a PyArrow RecordBatch"""

    def __init__(self, batch: pa.RecordBatch):
        self._batch = batch


class _LazyReader:
    """Helper class that instantiates the PyArrow RecordBatchStreamReader in a
    dedicated thread to avoid blocking"""

    def __init__(self, source):
        self.source = source
        self._reader = None

    async def get(self):
        if self._reader is None:
            self._reader = await asyncio.to_thread(
                pa.RecordBatchStreamReader, self.source
            )
        return self._reader


class AsyncRecordBatchStreamReader:
    """A thread based wrapper that makes PyArrow RecordBatchStreamReader
    async"""

    def __init__(self, source):
        self.reader: _LazyReader = _LazyReader(source)

    def __aiter__(self):
        return self

    async def __anext__(self) -> TableSlice:
        reader = await self.reader.get()

        def _next_batch():
            try:
                return PyArrowTableSlice(reader.read_next_batch())
            except StopIteration:
                return None

        value = await asyncio.to_thread(_next_batch)
        if value is None:
            raise StopAsyncIteration
        return value


class VAST:
    """An instance of a VAST node."""

    def __init__(self):
        pass

    @staticmethod
    def _export_args(mode: ExportMode, limit: int):
        args = {}
        match mode:
            case ExportMode.CONTINUOUS:
                args["continuous"] = True
            case ExportMode.UNIFIED:
                args["unified"] = True
            case ExportMode.HISTORICAL:
                pass
        if limit > 0:
            args["max_events"] = limit
        return args

    @staticmethod
    async def start():
        """Starts a VAST node."""
        self = VAST()
        proc = await CLI().start().exec()
        await proc.communicate()
        logger.debug(proc.stderr.decode())
        return self

    @staticmethod
    async def export(
        expression: str, mode: ExportMode = ExportMode.HISTORICAL, limit: int = 100
    ) -> AsyncIterable[TableSlice]:
        """Executes a VAST and receives results as Arrow Tables."""
        if limit == 0:
            return
        cmd = CLI().export(**VAST._export_args(mode, limit))
        if expression == "":
            cmd = cmd.arrow()
        else:
            cmd = cmd.arrow(expression)
        proc = cmd.sync_exec()

        def log():
            id = secrets.token_hex(6)
            export_str = f"export({expression}, {mode}, {limit})"
            logger.debug(f"[export-{id}] Start logging for {export_str}")
            for line in iter(proc.stderr.readline, b""):
                logger.debug(f"[export-{id}] {line.decode().strip()}")
            logger.debug(f"[export-{id}] Stop logging")

        # TODO: don't use default thread pool here as it won't scale
        t = asyncio.create_task(asyncio.to_thread(log))

        try:
            # VAST concatenates IPC streams for different types so we need to
            # spawn multiple stream readers
            while True:
                logger.debug("starting new record batch stream")
                async for batch in AsyncRecordBatchStreamReader(proc.stdout):
                    yield batch
        except Exception as e:
            if isinstance(e, pa.ArrowInvalid):
                logger.debug("completed processing stream of record batches")
            else:
                proc.kill()
                await asyncio.wait_for(t, 3)
                raise e

    @staticmethod
    async def status(timeout=0, retry_delay=0.5, **kwargs) -> str:
        """Executes the `vast status` command and return the response string.

        If `timeout` is greater than 0, the invocation of `vast status` will be
        retried every `retry_delay` seconds for at most `timeout` seconds.

        Examples: `status()`, `status(timeout=30, detailed=True)`.
        """
        start = time.time()
        while True:
            proc = await CLI().status(**kwargs).exec()
            stdout, stderr = await proc.communicate()
            logger.debug(stderr.decode())
            if proc.returncode == 0:
                return stdout.decode("utf-8")
            else:
                duration = time.time() - start
                if duration > timeout:
                    msg = f"VAST status failed with code {proc.returncode}"
                    raise Exception(msg)
                await asyncio.sleep(retry_delay)

    @staticmethod
    async def count(*args, **kwargs) -> int:
        """
        Executes the VAST count command and return the response number.
        Examples: `count()`, `count("#type == /suricata.alert/", estimate=True)`.
        """
        proc = await CLI().count(*args, **kwargs).exec()
        stdout, stderr = await proc.communicate()
        logger.debug(stderr.decode())
        if proc.returncode != 0:
            msg = f"VAST count failed with code {proc.returncode}"
            raise Exception(msg)
        return int(stdout.decode("utf-8"))
