import {
  GraphQLSchema,
  NamedTypeNode,
  TypeDefinitionNode,
  GraphQLNamedType,
  FieldDefinitionNode,
  TypeNode,
  EnumValueDefinitionNode
} from "graphql";
import { format } from "prettier";
import * as fc from "fast-check";

type Maybe<T> = null | undefined | T;

type Nominal<A> = {
  readonly symbol: A;
};

type Newtype<Tag extends string, A> = Nominal<Tag> & A;

type TypeName = Newtype<"Typename", string>;

const nodeName = (node: TypeDefinitionNode): TypeName =>
  node ? (node.name.value as TypeName) : ("no node" as TypeName);

const withNamedFieldType = (namedTypeNode: NamedTypeNode): string => {
  return getArbitraryName(namedTypeNode.name.value as TypeName);
};

const withFieldType = (typeNode: TypeNode): string => {
  if (typeNode.kind === "NamedType") {
    return withNamedFieldType(typeNode);
  } else if (typeNode.kind === "ListType") {
    const internalType = withFieldType(typeNode.type);
    return `fc.array(${internalType})`;
  } else {
    // therefore typeNode.kind === 'NonNullType'
    // probably need to make a custom Arbitrary for filtering out null values (and add them to all the primitive values by default, ffs)
    return withFieldType(typeNode.type);
  }
};

const withField = (field: FieldDefinitionNode): string => {
  const fieldName = field.name.value;
  const fieldType = withFieldType(field.type);
  return `${fieldName}: ${fieldType}`;
};

const withEnum = (values: readonly EnumValueDefinitionNode[]) => {
  const v = values
    .map(value => {
      const val = value.name.value;
      return `fc.constant("${val}")`;
    })
    .join(", ");
  return `fc.oneof(${v})`;
};

const withUnion = (types: readonly NamedTypeNode[]): string => {
  const nodes = types.map(withNamedFieldType).join(", ");
  return `fc.oneof(${nodes})`;
};

const withAstNode = (node: TypeDefinitionNode): [Kind, string] => {
  switch (node.kind) {
    case "ScalarTypeDefinition":
      return ["Scalar", `fc.anything()`];
    case "EnumTypeDefinition":
      return ["Enum", withEnum(node.values || [])];
    case "InputObjectTypeDefinition":
      // not yet supported
      return ["InputObject", ""];
    case "InterfaceTypeDefinition":
      // not yet supported
      return ["Interface", ""];
    case "ObjectTypeDefinition":
      const fields = (node.fields || []).map(withField);
      return ["Object", `fc.record({${fields.join(",")}})`];
    case "UnionTypeDefinition":
      return ["Union", withUnion(node.types || [])];
  }
};

const withPrimitive = (node: GraphQLNamedType): string | null => {
  switch (node.name) {
    case "Int":
      return `fc.integer()`;
    case "Boolean":
      return `fc.boolean()`;
    case "String":
      return "fc.string()";
    case "ID":
      return `fc.string()`;
    case "Float":
      return `fc.float()`;
  }
  // console.log(`Primitive ${node.name} not found`);

  return null;
};

const getArbitraryName = (typeName: TypeName): string => `arbitrary${typeName}`;

type Kind =
  | "Object"
  | "Scalar"
  | "Primitive"
  | "Enum"
  | "Union"
  | "InputObject"
  | "Interface";
type NamedType = [Kind, TypeName, string];

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

const withNamedType = (item: GraphQLNamedType): NamedType | null => {
  if (item.astNode) {
    const [nodeKind, str] = withAstNode(item.astNode);
    return [nodeKind, nodeName(item.astNode), str];
  } else {
    const prim = withPrimitive(item);
    if (prim) {
      return ["Primitive", item.name as TypeName, prim];
    } else {
      return null;
    }
  }
};

const notNull = <A>(a: A | null): a is A => a !== null;

const byKind = (k: Kind) => (a: NamedType) => a[0] === k;

const render = (val: NamedType) => {
  const [_, variable, definition] = val;
  return `export const ${getArbitraryName(variable)} = ${definition}`;
};

const getSchemaDeclarations = (schema: GraphQLSchema): string => {
  const namedTypes = getNamedTypes(schema);
  const primitives = namedTypes
    .map(withNamedType)
    .filter(notNull)
    .filter(byKind("Primitive"))
    .map(render)
    .join("\n");

  const scalars = namedTypes
    .map(withNamedType)
    .filter(notNull)
    .filter(byKind("Scalar"))
    .map(render)
    .join("\n");

  const enums = namedTypes
    .map(withNamedType)
    .filter(notNull)
    .filter(byKind("Enum"))
    .map(render)
    .join("\n");

  const unions = namedTypes
    .map(withNamedType)
    .filter(notNull)
    .filter(byKind("Union"));

  const objects = namedTypes
    .map(withNamedType)
    .filter(notNull)
    .filter(byKind("Object"));

  const mixed = sortASTs([...unions, ...objects])
    .map(render)
    .join("\n");

  return `${primitives}\n${enums}\n${scalars}\n${mixed}`;
};

// if one object mentions another definition, put it after that definition
const sortASTs = (as: NamedType[]): NamedType[] =>
  [...as].sort(([_a, key, val], [_b, newKey, newVal]) => {
    if (val.includes(newKey)) {
      return 1;
    } else if (newVal.includes(key)) {
      return -1;
    }
    return 1;
  });

module.exports = {
  plugin: (schema: GraphQLSchema, documents: any, config: any) => {
    const declarations = getSchemaDeclarations(schema);
    return format(`import * as fc from 'fast-check'\n${declarations}`, {
      parser: "typescript"
    });
  }
};
