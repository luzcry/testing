import {
    arrayFruits,
    arrayColors
} from '../arrays';

describe('comprobaremos que existe un elemento', () => {
    test('¿tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('no contiene un platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(5);
    });
    test('comprobaremos que existe un color', () => {
        expect(arrayColors()).toContain('azul');
    });
});