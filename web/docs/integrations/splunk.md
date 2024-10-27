# Splunk

[Splunk](https://splunk.com) is a log management and SIEM solution for storing
and processing logs.

Deploy Tenzir between your data sources and existing Splunk for controlling
costs and gaining additional flexibility of data processing and routing.

## Send data to an existing HEC endpoint

To send data from a pipeline to a Splunk [HTTP Event Collector (HEC)][hec]
endpoint, use the [`fluent-bit`](../operators/fluent-bit.md) sink operator.

For example, deploy the following pipeline to forward all
[Suricata](suricata.md) alerts arriving at a node to Splunk:

```
// tql2
export live=true
where @name == "suricata.alert"
splunk "1.2.3.4:8088",
  token="TOKEN",
  tls=on
```

Replace `1.2.3.4` with the IP address of your splunk host and `TOKEN` with your
HEC token.

For more details, read the official [Fluent Bit documentation of the Splunk
output][fluentbit-splunk-output].

## Spawn a HEC endpoint as pipeline source

To send data to a Tenzir pipeline instead of Splunk, you can open a Splunk [HTTP
Event Collector (HEC)][hec] endpoint using the
[`fluent-bit`](../operators/fluent-bit.md) source operator.

For example, to ingest all data into a Tenzir node instead of Splunk, point your
data source to the IP address of the Tenzir node at port 9880 by deploying this
pipeline:

```
fluent-bit splunk splunk_token=TOKEN
| import
```

Replace `TOKEN` with the Splunk token configured at your data source.

To listen on a different IP address, e.g., 1.2.3.4 add `listen=1.2.3.4` to the
`fluent-bit` operator.

For more details, read the official [Fluent Bit documentation of the Splunk
input][fluentbit-splunk-input].

## Test Splunk and Tenzir together

To test Splunk and Tenzir together, use the following [Docker
Compose](https://docs.docker.com/compose/) setup.

### Setup the containers

```yaml title=docker-compose.yaml
version: "3.9"

services:
  splunk:
    image: ${SPLUNK_IMAGE:-splunk/splunk:latest}
    platform: linux/amd64
    container_name: splunk
    environment:
      - SPLUNK_START_ARGS=--accept-license
      - SPLUNK_HEC_TOKEN=abcd1234
      - SPLUNK_PASSWORD=tenzir123
    ports:
      - 8000:8000
      - 8088:8088

  tenzir-node:
    container_name: "Demo"
    image: tenzir/tenzir:latest
    pull_policy: always
    environment:
      - TENZIR_PLUGINS__PLATFORM__CONTROL_ENDPOINT=wss://ws.tenzir.app/production
      - TENZIR_PLUGINS__PLATFORM__API_KEY=<PLATFORM_API_KEY>
      - TENZIR_PLUGINS__PLATFORM__TENANT_ID=<PLATFORM_TENANT_ID>
      - TENZIR_ENDPOINT=tenzir-node:5158
    entrypoint:
      - tenzir-node
    volumes:
      - tenzir-node:/var/lib/tenzir/
      - tenzir-node:/var/log/tenzir/

  tenzir:
    image: tenzir/tenzir:latest
    pull_policy: never
    profiles:
      - donotstart
    depends_on:
      - tenzir-node
    environment:
      - TENZIR_ENDPOINT=tenzir-node:5158

volumes:
  tenzir-node:
    driver: local
```

### Configure Splunk

After you spun up the containers, configure Splunk as follows:

1. Go to <http://localhost:8000> and login with `admin`:`tenzir123`
2. Navigate to _Add data_ → _Monitor_ → _HTTP Event Collector_
3. Configure the event collector:
   - Name: Tenzir
   - Click _Next_
   - Copy the token
   - Keep _Start searching_

[fluentbit-splunk-input]: https://docs.fluentbit.io/manual/pipeline/inputs/splunk
[fluentbit-splunk-output]: https://docs.fluentbit.io/manual/pipeline/outputs/splunk
[hec]: https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector
