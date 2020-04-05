#!/bin/bash

# die if anything goes wrong
set -euxo pipefail

# build and test
./test.sh

# publish
npm publish
