# GraphQL Codegen for Fast Check

## What?

[GraphQL Code Generator](https://graphql-code-generator.com/) lets you generate
code from a `GraphQL` schema. It is commonly used to create `Typescript`
types to ensure the consuming program agrees with the data it is receiving.

[Fast-check](https://github.com/dubzzz/fast-check) is a Property Testing
framework for `Typescript` / `Javascript`. It allows testing properties of a
program using arbitrarily generated data. `Fast-check` uses `Arbitrary`s to
create data, that is, descriptions of the data we need to create.

Say we have this datatype...

```typescript
// our datatype
interface Person {
  name: string;
  age: number;
}
```

...the arbitrary would look like:

```typescript
import * as fc from "fast-check";

const personArbitrary = fc.record({
  name: fc.string(),
  age: fc.integer()
});
```

This can then be used in property tests or as generators to create sample test
data.

## This library

This library is a plugin for `GraphQL Code Generator` that creates `fast-check`
`Arbitrary`s for your schema data types.

## How to use

_ahem_
