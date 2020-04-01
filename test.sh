#!/bin/bash

# die if anything goes wrong
set -euxo pipefail

# compile typescript
yarn build

# run codegen
yarn graphql-codegen --verbose --config ./test/codegen.yml
