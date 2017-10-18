// just some basic tests...

let app = require('../app');

describe('bifid_cipher test suite', () => {

    describe('Encrypting', () => {
        it('should exit gracefully if no parameter is given', () => {
            let result = app.bifidEncrypt();
            expect(result).toBe('');
        });

        it('should exit gracefully if input has illegal characters', () => {
            let result = app.bifidEncrypt('342');
            expect(result).toBe('');
        });

        it('should return valid response', () => {
            let result = app.bifidEncrypt('rdvelho');
            expect(result).toBe('HVBPHPD');
        });

        it('should return valid response', () => {
            let result = app.bifidEncrypt('rdvelho');
            expect(result).toBe('HVBPHPD');
        });
    });

    describe('Decrypting', () => {
        it('should exit gracefully if no parameter is given', () => {
            let result = app.bifidDecrypt();
            expect(result).toBe('');
        });

        it('should exit gracefully if input has illegal characters', () => {
            let result = app.bifidDecrypt('342');
            expect(result).toBe('');
        });

        it('should return valid response', () => {
            let result = app.bifidDecrypt('HVBPHPD');
            expect(result).toBe('RDVELHO');
        });

        it('should return valid response', () => {
            let result = app.bifidDecrypt('HVBPHPD');
            expect(result).toBe('RDVELHO');
        });
    });

    describe('executionTime tests', () => {
        it('should exit gracefully if no parameter is given', () => {
            let result = app.executionTime();
            expect(result).toBe('');
        });

        it('should return valid response if just one parameter is given (enc)', () => {
            let result = app.executionTime('-tenc');
            expect(isNaN(result)).toBe(false);
        });

        it('should return valid response if just one parameter is given (dec)', () => {
            let result = app.executionTime('-tdec');
            expect(isNaN(result)).toBe(false);
        });

        it('should return valid response (enc)', () => {
            let result = app.executionTime('-tenc', 'rdvelho');
            expect(isNaN(result)).toBe(false);
        });

        it('should return valid response (dec)', () => {
            let result = app.executionTime('-tdec', 'rdvelho');
            expect(isNaN(result)).toBe(false);
        });


    });

    describe('benchmark tests', () => {
        it('should exit gracefully if no parameter is given', () => {
            let result = app.benchmark();
            expect(result).toBe('');
        });

        it('should return valid response if just one parameter is given (enc)', () => {
            let result = app.benchmark('-benc');
            expect(isNaN(result)).toBe(false);
        });

        it('should return valid response if just one parameter is given (dec)', () => {
            let result = app.benchmark('-bdec');
            expect(isNaN(result)).toBe(false);
        });

        it('should return valid response (enc)', () => {
            let result = app.benchmark('-tenc', 'rdvelho');
            expect(isNaN(result)).toBe(false);
        });

        it('should return valid response (dec)', () => {
            let result = app.benchmark('-tdec', 'rdvelho');
            expect(isNaN(result)).toBe(false);
        });

    });

});