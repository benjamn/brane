type AnyFn = (...args: any[]) => any

type JustMethodKeys<T extends object> = {
  [key in keyof T]: T[key] extends AnyFn ? key : never;
}[keyof T]

export type Safe<T> =
  T extends PromiseLike<infer R> ? Promise<Safe<R>> :
  T extends (...args: infer A) => infer R ? (...args: A) => Promise<Safe<R>> :
  T extends object ? {
    readonly [key in JustMethodKeys<T>]: Safe<T[key]>;
  } : T // All primitives types are thread-safe.

export class Brane {
  public summon<TModule>(
    thunk: () => PromiseLike<TModule>,
    summoner?: string,
  ): Promise<Safe<TModule>> {
    return 0 as any; // TODO
  }
}
