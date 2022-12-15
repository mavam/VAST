#!/usr/bin/env bash

# A script to synchronize two VAST instances, possibly with an assoicated query
# for selectively synchronizing based on specific properties or types
#
# Usage examples:
#   sync-vast-nodes.sh "#type == \"suricata.alert\""  10 :42000 :42001 vast
#   sync-vast-nodes.sh "" 10 :42000 :42001 vast
#
# Arguments
#   query: e.g. "#type == \"suricata.alert\"" - mind the quotes; can be empty ""
#   seconds - sync interval in seconds - default 5
#   VAST endpoint of source - default :42000
#   VAST endpoint of sink   - default :42001
#   path to VAST binary     - default `vast` (must be in path)

TS_FILE="last_queried.ts"

Q=${1:-""}
S=${2:-5}
SOURCE_VAST_ENDPOINT=${3:-:42000}
DESTINATION_VAST_ENDPOINT=${4:-:42001}
VAST_BINARY="${5:-vast}"

>&2 echo "syncing $SOURCE_VAST_ENDPOINT to $DESTINATION_VAST_ENDPOINT every $S seconds"

if [ -e $TS_FILE ]
then
  PREVIOUS_TIMESTAMP=`cat $TS_FILE`
  >&2 echo "reading start timestamp from file: $PREVIOUS_TIMESTAMP"
else
  PREVIOUS_TIMESTAMP="1970-01-01T00:00:00+00:00"
  >&2 echo "no previous sync time stamp starting from $PREVIOUS_TIMESTAMP"
fi 

while true; do
  TIMESTAMP=`date -Iseconds`
  if [ -z $Q ]
  then
    QUERY="#import_time >= $PREVIOUS_TIMESTAMP && #import_time < $TIMESTAMP"
  else
    QUERY="$Q && #import_time >= $PREVIOUS_TIMESTAMP && #import_time < $TIMESTAMP"
  fi

  >&2 echo " processing time range: $PREVIOUS_TIMESTAMP <= #import_time < $TIMESTAMP"

  # count events - only run sync when count != 0
  EVENTS=`$VAST_BINARY -e $SOURCE_VAST_ENDPOINT count --estimate "$QUERY"`
  >&2 echo "events to sync: $EVENTS"
  if [ $EVENTS -ne 0 ]
  then
    $VAST_BINARY -e $SOURCE_VAST_ENDPOINT export arrow "$QUERY" \
      |  $VAST_BINARY -e $DESTINATION_VAST_ENDPOINT import arrow
    status=$?
    if [ $status -eq 0 ]
    then
      >&2 echo "import succeeded"
      >&2 echo $TIMESTAMP > $TS_FILE
      PREVIOUS_TIMESTAMP=$TIMESTAMP
    else
      >&2 echo "import failed (code: $status)"
    fi
  fi
  sleep $S
done
