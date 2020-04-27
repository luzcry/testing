import {
    numbers
} from '../numbers';

describe('comparación de números', () => {
    test('mayor que', () => {
        expect(numbers(2, 2)).toBeGreaterThan(3)
    });
    test('mayor que o igual', () => {
        expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
    });
    test('menor que', () => {
        expect(numbers(2, 2)).toBeLessThan(10);
    })
    test('menor que o igual', () => {
        expect(numbers(2, 2)).toBeLessThanOrEqual(10);
    })
});