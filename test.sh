#!/bin/bash

# lets set up a test environment

yarn build

graphql-codegen --config ./test/codegen.yml

yarn jest -c jest.tsc.config.js
