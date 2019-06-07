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
        const subtractFrom16 = operator.subtract.bind(null, 16);
        expect(subtractFrom16(2)).toBe(14);
        expect(subtractFrom16(4)).toBe(12);
        expect(subtractFrom16(8)).toBe(8);
        expect(subtractFrom16(16)).toBe(0);
    });

    test('multiplication', () => {
        const multiplyByTwo = operator.multiply.bind(null, 2);
        expect(multiplyByTwo(2)).toBe(4);
        expect(multiplyByTwo(4)).toBe(8);
        expect(multiplyByTwo(8)).toBe(16);
        expect(multiplyByTwo(16)).toBe(32);
    });

    test('division', () => {
        const divide32By = operator.divide.bind(null, 32);
        expect(divide32By(2)).toBe(16);
        expect(divide32By(4)).toBe(8);
        expect(divide32By(8)).toBe(4);
        expect(divide32By(16)).toBe(2);
    });
});
