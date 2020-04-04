export type Maybe<T> = null | undefined | T;

///

type Nominal<A> = {
  readonly symbol: A;
};

type Newtype<Tag extends string, A> = Nominal<Tag> & A;

///

export type TypeName = Newtype<"Typename", string>;
export type Generated = Newtype<"Generated", string>;

////

export type Kind =
  | "Object"
  | "Scalar"
  | "Primitive"
  | "Enum"
  | "Union"
  | "InputObject"
  | "Interface";

///

export type Output = {
  kind: Kind;
  name: TypeName;
  output: Generated;
  deps: TypeName[];
};
