export type Maybe<T> = null | undefined | T;

///

export type Either<E, A> =
  | { _tag: "Left"; error: E }
  | { _tag: "Right"; payload: A };

export const left = <E, A>(error: E): Either<E, A> => ({
  _tag: "Left",
  error
});

export const right = <E, A>(payload: A): Either<E, A> => ({
  _tag: "Right",
  payload
});

export const caseEither = <E, A, B>(
  either: Either<E, A>,
  cases: { onLeft: (e: E) => B; onRight: (a: A) => B }
): B =>
  either._tag === "Left"
    ? cases.onLeft(either.error)
    : cases.onRight(either.payload);

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
