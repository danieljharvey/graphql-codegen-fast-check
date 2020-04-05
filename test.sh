#!/bin/bash

# die if anything goes wrong
set -euxo pipefail

# replace twitter output with something that typechecks
echo "export const a = 1" | tee ./output/twitter/output.ts

# replace github output with something that typechecks
echo "export const a = 1" | tee ./output/github/output.ts

# install shit
yarn install

# run tests
yarn test

# compile typescript
yarn build

# run codegen basic
yarn graphql-codegen --config ./test/twitter/codegen.yml

# typecheck result
yarn tsc --noEmit ./output/twitter/output.ts

# run codegen advanced
yarn graphql-codegen --config ./test/github/codegen.yml

# typecheck advanced result
yarn tsc --noEmit ./output/github/output.ts

# output some shit (only from the basic one, the advanced one blows the stack)
yarn ts-node ./test/test-output.ts
