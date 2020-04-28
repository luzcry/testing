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
});