import {
  GraphQLSchema,
  NamedTypeNode,
  TypeDefinitionNode,
  GraphQLNamedType,
  FieldDefinitionNode,
  TypeNode,
  EnumValueDefinitionNode
} from "graphql";
import * as fc from "fast-check";
import {
  TypeName,
  Maybe,
  Output,
  Kind,
  Generated,
  Either,
  left,
  right,
  caseEither
} from "./types";

const nodeName = (node: TypeDefinitionNode): TypeName =>
  node ? (node.name.value as TypeName) : ("no node" as TypeName);

type FieldReturn = {
  output: Generated;
  deps: TypeName[];
};

const withNamedFieldType = (namedTypeNode: NamedTypeNode): FieldReturn => {
  const name = namedTypeNode.name.value as TypeName;
  return { output: getArbitraryName(name), deps: [name] };
};

const withFieldType = (typeNode: TypeNode): FieldReturn => {
  if (typeNode.kind === "NamedType") {
    return withNamedFieldType(typeNode);
  } else if (typeNode.kind === "ListType") {
    const internalType = withFieldType(typeNode.type);
    return {
      output: `fc.array(${internalType.output})` as Generated,
      deps: internalType.deps
    };
  } else {
    // therefore typeNode.kind === 'NonNullType'
    // probably need to make a custom Arbitrary for filtering out null values (and add them to all the primitive values by default, ffs)
    return withFieldType(typeNode.type);
  }
};

const withField = (field: FieldDefinitionNode): FieldReturn => {
  const fieldName = field.name.value;
  const fieldType = withFieldType(field.type);
  return {
    output: `${fieldName}: ${fieldType.output}` as Generated,
    deps: fieldType.deps
  };
};

const withEnum = (values: readonly EnumValueDefinitionNode[]): Generated => {
  const v = values
    .map(value => {
      const val = value.name.value;
      return `fc.constant("${val}")`;
    })
    .join(", ");
  return `fc.oneof(${v})` as Generated;
};

const withUnion = (types: readonly NamedTypeNode[]): FieldReturn => {
  const fieldReturns = types.map(withNamedFieldType);
  const output = fieldReturns.map(i => i.output).join(", ");
  return {
    output: `fc.oneof(${output})` as Generated,
    deps: flattenDeps(fieldReturns)
  };
};

const flattenDeps = (fieldReturns: FieldReturn[]): TypeName[] =>
  fieldReturns.map(i => i.deps).reduce((as, a) => as.concat(a), []);

const withAstNode = (name: TypeName, node: TypeDefinitionNode): Output => {
  switch (node.kind) {
    case "ScalarTypeDefinition":
      return {
        kind: "Scalar",
        name,
        output: `fc.anything()` as Generated,
        deps: []
      };
    case "EnumTypeDefinition":
      return {
        kind: "Enum",
        name,
        output: withEnum(node.values || []),
        deps: []
      };
    case "InputObjectTypeDefinition":
      // this is awful
      return {
        kind: "InputObject",
        name,
        output: "fc.anything()" as Generated,
        deps: []
      };
    case "InterfaceTypeDefinition":
      const iFieldReturns = (node.fields || []).map(withField);
      const iFieldOutput = iFieldReturns.map(i => i.output).join(",");
      return {
        kind: "Interface",
        name,
        output: `fc.record({${iFieldOutput}})` as Generated,
        deps: flattenDeps(iFieldReturns)
      };
    case "ObjectTypeDefinition":
      const oFieldReturns = (node.fields || []).map(withField);
      const oFieldOutput = oFieldReturns.map(i => i.output).join(",");
      return {
        kind: "Object",
        name,
        output: `fc.record({${oFieldOutput}})` as Generated,
        deps: flattenDeps(oFieldReturns)
      };
    case "UnionTypeDefinition":
      const uFieldReturns = withUnion(node.types || []);

      return {
        kind: "Union",
        name,
        output: uFieldReturns.output,
        deps: uFieldReturns.deps
      };
  }
};

const withPrimitive = (node: GraphQLNamedType): Generated | null => {
  switch (node.name) {
    case "Int":
      return `fc.integer()` as Generated;
    case "Boolean":
      return `fc.boolean()` as Generated;
    case "String":
      return "fc.string()" as Generated;
    case "ID":
      return `fc.string()` as Generated;
    case "Float":
      return `fc.float()` as Generated;
  }
  // console.log(`Primitive ${node.name} not found`);

  return null;
};

const getArbitraryName = (typeName: TypeName): Generated =>
  `arbitrary${typeName}` as Generated;

const getNamedTypes = (schema: GraphQLSchema): GraphQLNamedType[] => {
  const typesMap = schema.getTypeMap();
  const namedTypes: Maybe<GraphQLNamedType>[] = Object.keys(typesMap).map(
    key => {
      const item = schema.getType(key);
      return item || null;
    }
  );
  return namedTypes.filter(
    (a: Maybe<GraphQLNamedType>) => a !== null && a !== undefined
  ) as GraphQLNamedType[];
};

const withNamedType = (item: GraphQLNamedType): Output | null => {
  if (item.astNode) {
    return withAstNode(nodeName(item.astNode), item.astNode);
  } else {
    const prim = withPrimitive(item);
    if (prim) {
      return {
        kind: "Primitive",
        name: item.name as TypeName,
        output: prim,
        deps: []
      };
    } else {
      return null;
    }
  }
};

const notNull = <A>(a: A | null): a is A => a !== null;

const removeKind = (k: Kind) => (a: Output) => a.kind !== k;

const render = (val: Output) => {
  const { name, output } = val;
  return `export const ${getArbitraryName(name)} = ${output}`;
};

export const getSchemaDeclarations = (schema: GraphQLSchema): string =>
  sortASTs(getNamedTypes(schema).map(withNamedType).filter(notNull))
    .map(render)
    .join("\n\n");

const filterSplit = <A>(
  as: A[],
  f: (a: A) => boolean
): { yes: A[]; no: A[] } => ({
  yes: as.filter(f),
  no: as.filter(a => !f(a))
});

export const sortASTs = (as: Output[]): Output[] => {
  const limit = 10000;
  return caseEither(magicSort(as, limit), {
    onRight: payload => payload,
    onLeft: err => {
      throw err;
      return [];
    }
  });
};

const showProgress = (used: Output[], remaining: Output[]): void => {
  const unresolved = [
    ...new Set(remaining.map(a => a.deps).reduce((as, a) => as.concat(a), []))
  ];
  const resolved = used.map(a => a.name);
  console.log("RESOLVED", resolved);
  console.log("UNRESOLVED", unresolved);
};

export const magicSort = (
  as: Output[],
  startingLimit: number
): Either<string, Output[]> => {
  let limit = startingLimit;
  let newRemaining = as;
  let newUsed: Output[] = [];
  let error = `Could not resolve ordering within ${startingLimit} tries`;
  while (newRemaining.length > 0 && limit > 0) {
    const succeeded = caseEither(moveASTs(newUsed, newRemaining), {
      onRight: payload => {
        newUsed = payload.used;
        newRemaining = payload.remaining;
        limit = limit - 1;
        return true;
      },
      onLeft: err => {
        error = err;
        return false;
      }
    });
    // showProgress(newUsed, newRemaining);
    if (!succeeded) {
      break;
    }
  }
  if (newRemaining.length > 0) {
    return left(error);
  }
  return right(newUsed);
};

type ASTReturn = Either<
  string,
  {
    used: Output[];
    remaining: Output[];
  }
>;

export const moveASTs = (used: Output[], remaining: Output[]): ASTReturn => {
  // remove everything in used from deps list
  const usedDeps = used.map(a => a.name);

  const remainingFiltered = remaining.map(a => ({
    ...a,
    deps: a.deps.filter(dep => !usedDeps.includes(dep))
  }));

  // move everything with empty deps list left
  const { yes: moved, no: keep } = filterSplit(
    remainingFiltered,
    a => a.deps.length === 0
  );

  // done
  const newUsed = [...used, ...moved];
  if (newUsed.length === used.length) {
    return left(
      `No changes made, unresolvable. ${newUsed.length} moved, ${keep.length} remaining to move.`
    );
  }
  return right({ used: newUsed, remaining: keep });
};
