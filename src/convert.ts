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

type Maybe<T> = null | undefined | T;

type Nominal<A> = {
  readonly symbol: A;
};

type Newtype<Tag extends string, A> = Nominal<Tag> & A;

export type TypeName = Newtype<"Typename", string>;

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
      const iFields = (node.fields || []).map(withField);
      return ["Interface", `fc.record({${iFields.join(",")}})`];
    case "ObjectTypeDefinition":
      const oFields = (node.fields || []).map(withField);
      return ["Object", `fc.record({${oFields.join(",")}})`];
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

export type Kind =
  | "Object"
  | "Scalar"
  | "Primitive"
  | "Enum"
  | "Union"
  | "InputObject"
  | "Interface";
export type NamedType = [Kind, TypeName, string];

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

export const getSchemaDeclarations = (schema: GraphQLSchema): string => {
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

  const interfaces = namedTypes
    .map(withNamedType)
    .filter(notNull)
    .filter(byKind("Interface"));

  const objects = namedTypes
    .map(withNamedType)
    .filter(notNull)
    .filter(byKind("Object"));

  const mixed = sortASTs([...unions, ...objects, ...interfaces])
    .map(render)
    .join("\n");

  return `${primitives}\n${enums}\n${scalars}\n${mixed}`;
};

const findableKeys = (key: TypeName) => [
  `${getArbitraryName(key)},`,
  `${getArbitraryName(key)})`,
  `${getArbitraryName(key)}}`,
  `${getArbitraryName(key)} `
];

export const includesOneOf = (val: string, opts: string[]): boolean =>
  opts
    .map(opt => val.includes(opt))
    .reduce((total, value) => total || value, false);

// if one object mentions another definition, put it after that definition
export const sortASTs = (as: NamedType[]): NamedType[] =>
  [...as].sort(([_a, key, val], [_b, newKey, newVal]) => {
    // console.log(`${_a}: ${key}: ${val}`);
    // console.log(`${_b}: ${newKey}: ${newVal}`);
    const leftMentionsRight = includesOneOf(newVal, findableKeys(key));
    const rightMentionsLeft = includesOneOf(val, findableKeys(newKey));
    if (leftMentionsRight) {
      // console.log(`moving ${key} left to avoid ${newKey}:${newVal}`);
      return -1; // move left before right
    } else if (rightMentionsLeft) {
      // console.log(`${newKey} moves left to go before ${key}:${val}`);
      return 1; // move right before left
    }
    /*console.log(
      `Not moving ${key} because it's not found in ${newKey}:${newVal}`
    );*/
    return 0;
  });
