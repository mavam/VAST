#! /usr/bin/env bash

set -euo pipefail

brew install go

git clone https://github.com/apache/arrow-adbc.git
cd arrow-adbc
cmake -B build c/ -DCMAKE_BUILD_TYPE=Release -DADBC_DRIVER_SNOWFLAKE=ON -DADBC_DRIVER_MANAGER=ON
cmake --install build
