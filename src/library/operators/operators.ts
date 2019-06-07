import { Operator } from '../../react-app-env';

export const add: Operator = (a: number, b: number) => a + b;
export const subtract: Operator = (a: number, b: number) => a - b;
export const multiply: Operator = (a: number, b: number) => a * b;
export const divide: Operator = (a: number, b: number) => a / b;
export const percentage: Operator = (a: number, b: number) => (a / 100) * b;
