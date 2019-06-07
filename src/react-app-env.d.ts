/// <reference types="react-scripts" />

export type Operator = (...params: number[]) => number;

export type OperatorType<OperatorOrMap extends any> = OperatorOrMap extends Operator
  ? ReturnType<OperatorOrMap>
  : OperatorOrMap extends Record<any, any>
  ? { [K in keyof OperatorOrMap]: OperatorType<OperatorOrMap[K]> }[keyof OperatorOrMap]
  : never;

declare module 'Calculator' {
  export type RootOperator = OperatorType<import('./library/root-operators').default>;
}
