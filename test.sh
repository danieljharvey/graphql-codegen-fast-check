#!/bin/bash

# die if anything goes wrong
set -euxo pipefail

# compile typescript
yarn build

# run codegen basic
yarn graphql-codegen --config ./test/codegen.yml
