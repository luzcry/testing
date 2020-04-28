import {
    getDataFromApi
} from '../promise.js';

describe('probando promesas', () => {
    test('realizando una peticion a una api', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });
    test('resuelve un hola', () => {
        return expect(Promise.resolve('hola!')).resolves.toBe('hola!');
    });

    test('rechaza con un error', () => {
        return expect(Promise.reject('error')).rejects.toBe('error');
    })
});