# -- fluent-bit-package -----------------------------------------------------------

FROM debian:bookworm-slim AS fluent-bit-package

ENV CC="gcc-12" \
    CXX="g++-12"

WORKDIR /tmp/fluent-bit
COPY scripts/debian/build-fluent-bit.sh ./scripts/debian/
RUN ./scripts/debian/build-fluent-bit.sh && \
    rm -rf /var/lib/apt/lists/*

# -- dependencies --------------------------------------------------------------

FROM debian:bookworm-slim AS dependencies
LABEL maintainer="engineering@tenzir.com"

ENV CC="gcc-12" \
    CXX="g++-12"

WORKDIR /tmp/tenzir

COPY --from=fluent-bit-package /root/fluent-bit_*.deb /root/
COPY scripts/debian/install-dev-dependencies.sh ./scripts/debian/
RUN ./scripts/debian/install-dev-dependencies.sh && \
    apt-get -y --no-install-recommends install /root/fluent-bit_*.deb && \
    rm /root/fluent-bit_*.deb && \
    rm -rf /var/lib/apt/lists/*

# Tenzir
COPY changelog ./changelog
COPY cmake ./cmake
COPY libtenzir ./libtenzir
COPY libtenzir_test ./libtenzir_test
COPY plugins ./plugins
COPY python ./python
COPY schema ./schema
COPY scripts ./scripts
COPY tenzir ./tenzir
COPY CMakeLists.txt LICENSE README.md tenzir.spdx.json VERSIONING.md \
     tenzir.yaml.example version.json ./

# -- development ---------------------------------------------------------------

FROM dependencies AS development

ENV PREFIX="/opt/tenzir" \
    PATH="/opt/tenzir/bin:${PATH}" \
    CC="gcc-12" \
    CXX="g++-12"

# When changing these, make sure to also update the corresponding entries in the
# flake.nix file.
ENV TENZIR_CACHE_DIRECTORY="/var/cache/tenzir" \
    TENZIR_STATE_DIRECTORY="/var/lib/tenzir" \
    TENZIR_LOG_FILE="/var/log/tenzir/server.log" \
    TENZIR_ENDPOINT="0.0.0.0"

# Additional arguments to be passed to CMake.
ARG TENZIR_BUILD_OPTIONS

RUN cmake -B build -G Ninja \
      -D CMAKE_INSTALL_PREFIX:STRING="$PREFIX" \
      -D CMAKE_BUILD_TYPE:STRING="Release" \
      -D TENZIR_ENABLE_AVX_INSTRUCTIONS:BOOL="OFF" \
      -D TENZIR_ENABLE_AVX2_INSTRUCTIONS:BOOL="OFF" \
      -D TENZIR_ENABLE_UNIT_TESTS:BOOL="OFF" \
      -D TENZIR_ENABLE_DEVELOPER_MODE:BOOL="OFF" \
      -D TENZIR_ENABLE_BUNDLED_CAF:BOOL="ON" \
      -D TENZIR_ENABLE_BUNDLED_SIMDJSON:BOOL="ON" \
      -D TENZIR_ENABLE_MANPAGES:BOOL="OFF" \
      -D TENZIR_ENABLE_PYTHON_BINDINGS_DEPENDENCIES:BOOL="ON" \
      ${TENZIR_BUILD_OPTIONS} && \
    cmake --build build --parallel && \
    cmake --install build --strip && \
    rm -rf build

RUN mkdir -p \
      $PREFIX/etc/tenzir \
      /var/cache/tenzir \
      /var/lib/tenzir \
      /var/log/tenzir

EXPOSE 5158/tcp

WORKDIR /var/lib/tenzir
VOLUME ["/var/lib/tenzir"]

ENTRYPOINT ["tenzir"]
CMD ["--help"]

# -- tenzir-de -----------------------------------------------------------------

FROM debian:bookworm-slim AS tenzir-de

# When changing these, make sure to also update the entries in the flake.nix
# file.
ENV PREFIX="/opt/tenzir" \
    PATH="/opt/tenzir/bin:${PATH}" \
    TENZIR_CACHE_DIRECTORY="/var/cache/tenzir" \
    TENZIR_STATE_DIRECTORY="/var/lib/tenzir" \
    TENZIR_LOG_FILE="/var/log/tenzir/server.log" \
    TENZIR_ENDPOINT="0.0.0.0"

RUN useradd --system --user-group tenzir
COPY --from=development --chown=tenzir:tenzir $PREFIX/ $PREFIX/
COPY --from=development --chown=tenzir:tenzir /var/cache/tenzir/ /var/cache/tenzir/
COPY --from=development --chown=tenzir:tenzir /var/lib/tenzir/ /var/lib/tenzir/
COPY --from=development --chown=tenzir:tenzir /var/log/tenzir/ /var/log/tenzir/
COPY --from=fluent-bit-package /root/fluent-bit_*.deb /root/

RUN apt-get update && \
    apt-get -y --no-install-recommends install \
      ca-certificates \
      gnupg2 \
      libasan6 \
      libboost-filesystem++1.81 \
      libboost-url1.81 \
      libc++1 \
      libc++abi1 \
      libflatbuffers2 \
      libfmt9 \
      libgrpc++1.51 \
      libhttp-parser2.9 \
      libmaxminddb0 \
      libpcap0.8 \
      libprotobuf32 \
      librabbitmq4 \
      librdkafka++1 \
      libre2-9 \
      libspdlog1.10 \
      libunwind8 \
      libxxhash-dev \
      libyaml-cpp0.7 \
      libyara9 \
      libzmq5 \
      lsb-release \
      openssl \
      python3 \
      python3-venv \
      robin-map-dev \
      wget && \
    wget "https://apache.jfrog.io/artifactory/arrow/$(lsb_release --id --short | tr 'A-Z' 'a-z')/apache-arrow-apt-source-latest-$(lsb_release --codename --short).deb" && \
    apt-get -y --no-install-recommends install \
      ./apache-arrow-apt-source-latest-$(lsb_release --codename --short).deb && \
    apt-get update && \
    apt-get -y --no-install-recommends install libarrow1500 libparquet1500 && \
    apt-get -y --no-install-recommends install /root/fluent-bit_*.deb && \
    rm /root/fluent-bit_*.deb && \
    rm -rf /var/lib/apt/lists/*

USER tenzir:tenzir

EXPOSE 5158/tcp
WORKDIR /var/lib/tenzir
VOLUME ["/var/cache/tenzir", "/var/lib/tenzir"]

# Verify that Tenzir starts up correctly.
RUN tenzir 'version'

ENTRYPOINT ["tenzir"]
CMD ["--help"]

# -- tenzir-node-de ------------------------------------------------------------

FROM tenzir-de AS tenzir-node-de

ENTRYPOINT ["tenzir-node"]

# -- plugins -------------------------------------------------------------------

FROM development AS plugins-source

WORKDIR /tmp/tenzir
COPY contrib/tenzir-plugins ./contrib/tenzir-plugins

FROM plugins-source AS compaction-plugin

RUN cmake -S contrib/tenzir-plugins/compaction -B build-compaction -G Ninja \
      -D CMAKE_INSTALL_PREFIX:STRING="$PREFIX" && \
      cmake --build build-compaction --parallel && \
      DESTDIR=/plugin/compaction cmake --install build-compaction --strip --component Runtime && \
      rm -rf build-compaction

FROM plugins-source AS context-plugin

RUN cmake -S contrib/tenzir-plugins/context -B build-context -G Ninja \
      -D CMAKE_INSTALL_PREFIX:STRING="$PREFIX" && \
      cmake --build build-context --parallel && \
      DESTDIR=/plugin/context cmake --install build-context --strip --component Runtime && \
      rm -rf build-context

FROM plugins-source AS pipeline-manager-plugin

RUN cmake -S contrib/tenzir-plugins/pipeline-manager -B build-pipeline-manager -G Ninja \
      -D CMAKE_INSTALL_PREFIX:STRING="$PREFIX" && \
      cmake --build build-pipeline-manager --parallel && \
      DESTDIR=/plugin/pipeline-manager cmake --install build-pipeline-manager --strip --component Runtime && \
      rm -rf build-pipeline-manager

FROM plugins-source AS platform-plugin

RUN cmake -S contrib/tenzir-plugins/platform -B build-platform -G Ninja \
      -D CMAKE_INSTALL_PREFIX:STRING="$PREFIX" && \
      cmake --build build-platform --parallel && \
      DESTDIR=/plugin/platform cmake --install build-platform --strip --component Runtime && \
      rm -rf build-platform

# -- tenzir-ce -------------------------------------------------------------------

FROM tenzir-de AS tenzir-ce

COPY --from=context-plugin --chown=tenzir:tenzir /plugin/context /
COPY --from=pipeline-manager-plugin --chown=tenzir:tenzir /plugin/pipeline-manager /
COPY --from=platform-plugin --chown=tenzir:tenzir /plugin/platform /

# -- tenzir-node-ce ------------------------------------------------------------

FROM tenzir-ce AS tenzir-node-ce

ENTRYPOINT ["tenzir-node"]

# -- tenzir-demo --------------------------------------------------------------

FROM tenzir-ce AS tenzir-demo

USER root
RUN apt-get update && \
    apt-get -y --no-install-recommends install jq lsof && \
    rm -rf /var/lib/apt/lists/*

USER tenzir:tenzir
COPY demo-node /demo-node
COPY --from=tenzir-ce --chown=tenzir:tenzir \
       /var/cache/tenzir \
       /var/lib/tenzir/ \
       /var/log/tenzir
ENV TENZIR_AUTOMATIC_REBUILD=0
RUN /demo-node/setup.bash

ENTRYPOINT ["tenzir-node"]

# -- tenzir-ee -------------------------------------------------------------------

FROM tenzir-ce AS tenzir-ee

COPY --from=compaction-plugin --chown=tenzir:tenzir /plugin/compaction /
COPY --from=context-plugin --chown=tenzir:tenzir /plugin/context /

# -- tenzir-node-ee ------------------------------------------------------------

FROM tenzir-ee AS tenzir-node-ee

ENTRYPOINT ["tenzir-node"]

# -- tenzir-node -----------------------------------------------------------------

FROM tenzir-node-ce AS tenzir-node

# -- tenzir ----------------------------------------------------------------------

# As a last stage we re-introduce the community edition as tenzir so that it's
# the default when not specifying a build target.
FROM tenzir-ce AS tenzir
