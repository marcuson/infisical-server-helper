import { Type } from '@nestjs/common';

export function isExactType<T>(value: any, type: Type<T>): value is T {
  if (type instanceof String) {
    return typeof value === 'string' || value instanceof type;
  }

  return value.constructor.name === type.name;
}

export type IfEquals<X, Y, A = X, B = never> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;

export type MutableKeysOf<T, TOnNonMutableKey = never> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P,
    TOnNonMutableKey
  >;
}[keyof T];

export type MutablePartOf<T> = Pick<T, MutableKeysOf<T>>;

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
