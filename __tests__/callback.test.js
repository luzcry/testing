import {
    callbackHell
} from '../callback.js'

describe('probando un callback', () => {
    test('callback', done => {
        function othercallback(data) {
            expect(data).toBe('hola javascripters')
            done();
        };
        callbackHell(othercallback);
    });
});