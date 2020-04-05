#!/bin/bash

# die if anything goes wrong
set -euxo pipefail

# install
yarn install

# build typescript
yarn build

# publish
npm publish
