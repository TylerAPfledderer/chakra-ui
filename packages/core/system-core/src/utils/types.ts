export type AnyFunction<T = any> = (...args: T[]) => any

export type Dict<T = any> = Record<string, T>

export type DistributiveOmit<T, K extends keyof any> = T extends unknown
  ? Omit<T, K>
  : never

export type DistributiveUnion<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] | T[K] : T[K]
} & DistributiveOmit<U, keyof T>

export type Pretty<T> = { [K in keyof T]: T[K] } & {}

export type Assign<T, U> = Omit<T, keyof U> & U

export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export type UnionToIntersection<T> = (
  T extends any ? (x: T) => any : never
) extends (x: infer R) => any
  ? R
  : never
