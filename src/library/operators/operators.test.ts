import partialRight from 'ramda/src/partialRight';
import * as operator from './operators';

describe('division, multiplication, addition and subtraction functions', () => {
  test('addition', () => {
    const addTwoAnd = operator.add.bind(null, 2);
    expect(addTwoAnd(2)).toBe(4);
    expect(addTwoAnd(4)).toBe(6);
    expect(addTwoAnd(8)).toBe(10);
    expect(addTwoAnd(16)).toBe(18);
  });

  test('subtraction', () => {
    const subtractTwoFrom = partialRight(operator.subtract, [2]);
    expect(subtractTwoFrom(2)).toBe(0);
    expect(subtractTwoFrom(4)).toBe(2);
    expect(subtractTwoFrom(8)).toBe(6);
    expect(subtractTwoFrom(16)).toBe(14);
  });

  test('multiplication', () => {
    const multiplyByTwo = operator.multiply.bind(null, 2);
    expect(multiplyByTwo(2)).toBe(4);
    expect(multiplyByTwo(4)).toBe(8);
    expect(multiplyByTwo(8)).toBe(16);
    expect(multiplyByTwo(16)).toBe(32);
  });

  test('division', () => {
    const divideByTwo = partialRight(operator.divide, [2]);
    expect(divideByTwo(2)).toBe(1);
    expect(divideByTwo(4)).toBe(2);
    expect(divideByTwo(6)).toBe(3);
    expect(divideByTwo(8)).toBe(4);
  });
});
