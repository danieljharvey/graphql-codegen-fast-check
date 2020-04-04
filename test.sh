#!/bin/bash

# die if anything goes wrong
set -euxo pipefail

# remove old output so it doesn't get typechecked
echo "export const a = 1" | tee ./output/output.ts

# run tests
yarn test

# compile typescript
yarn build

# run codegen basic
yarn graphql-codegen --config ./test/codegen.yml

# typecheck result
yarn tsc --noEmit ./output/output.ts

# output some shit
yarn ts-node ./output/test-output.ts
