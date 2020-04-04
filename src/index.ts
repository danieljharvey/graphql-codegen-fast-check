import { GraphQLSchema } from "graphql";
import { format } from "prettier";
import { getSchemaDeclarations } from "./convert";

module.exports = {
  plugin: (schema: GraphQLSchema, documents: any, config: any) => {
    const declarations = getSchemaDeclarations(schema);
    const output = `import * as fc from 'fast-check'\n${declarations}`;
    return format(output, {
      parser: "typescript"
    });
  }
};
