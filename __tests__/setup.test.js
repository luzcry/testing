afterEach(() => console.log('desíes de cada prueba'));
afterAll(() => console.log('despues de todas las pruebas'));

beforeAll(() => console.log('antes de todas las pruebas'));
beforeEach(() => console.log('antes de cada prueba'));

describe('preparar antes de ejecutar', () => {
    test('es verdadero', () => {
        expect(true).toBeTruthy();
    });
});