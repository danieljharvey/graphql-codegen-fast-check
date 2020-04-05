# GraphQL Codegen for Fast Check

## What?

[GraphQL Code Generator](https://graphql-code-generator.com/) lets you generate
code from a `GraphQL` schema. It is commonly used to create `Typescript`
types to ensure the consuming program agrees with the data it is receiving.

[Fast-check](https://github.com/dubzzz/fast-check) is a Property Testing
framework for `Typescript` / `Javascript`. It allows testing properties of a
program using arbitrarily generated data. `Fast-check` uses `arbitrary`s to
create data, that is, descriptions of the data we need to create.

Say we have this datatype...

```typescript
// our datatype
interface Person {
  name: string;
  age: number;
}
```

...the code to make the `fast-check` `arbitrary` would look like:

```typescript
import * as fc from "fast-check";

const personArbitrary = fc.record({
  name: fc.string(),
  age: fc.integer()
});
```

This can then be used in property tests or as generators to create sample test
data. The problem is that writing them all by hand and keeping them up to date
with your datatypes is a pain.

## This library

This library is a plugin for `GraphQL Code Generator` that creates `fast-check`
`Arbitrary`s for your schema data types.

## How to use

Add the library to your project (and GraphQL Codegen if you need it):

```bash
yarn add graphql-codegen-fast-check @graphql-codegen/cli
```

Create a `codegen.yml` file.

```yaml
schema: path-to-my-graphql-schema.graphql
generates:
  output.ts:
    - graphql-codegen-fast-check
```

Then run the generator in the same folder as your `codegen.yml` file:

```bash
yarn graphql-codegen
```

(hopefully) Success! You should have an `output.ts` folder full of `arbitrary`s
you can use in your project.

## What's working?

[X] Object types
[X] Built-in Scalar types
[X] Enumeration types
[X] Type modifiers (1)
[ ] Custom Scalar types (2)
[X] Union types
[X] Interface types (3)
[ ] Input types (4)
[ ] Documents (5)

1.  Currently lists work but we ignore the nullable / non-nullable distinction.
    Everything is non-nullable for now, this will come soon.
2.  Custom Scalar types are defined outside the schema, frustratingly. For now
    they all emit a `string`, the plan is to allow the config to specify a file
    to override these with the user's own `arbitrary` instances.
3.  These "work" but need to check whether they are actually correct
4.  Currently these just output a `string` (why? don't know) - `fast-check` has
    a `func` `arbitrary` which should make this fairly straightforward to
    implement.
5.  I haven't even thought about tackling this part yet.

## Inspiration

Thanks to [fast-check-io-ts](https://www.npmjs.com/package/fast-check-io-ts)
for showing me that making `arbitrary` instances should be easy.
