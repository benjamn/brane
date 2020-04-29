#!/usr/bin/env bash

node "$(dirname $0)/../node_modules/.bin/mocha" \
     --reporter spec \
     --full-trace \
     --require esm \
     --require source-map-support/register \
     $@
