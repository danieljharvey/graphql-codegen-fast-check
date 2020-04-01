#!/bin/bash

# die if anything goes wrong
set -euxo pipefail

# compile typescript
yarn build

# run codegen basic
yarn graphql-codegen --config ./test/codegen.yml

# run complex one
yarn graphql-codegen --config ./test/codegen-github.yml
