let app = require('../app');

describe('bifid_cipher test suite', () => {

    describe('Encrypting', () => {
        it('should exit gracefully if no input', () => {
            let result = app.bifidEncrypt('');
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
        it('should exit gracefully if no input', () => {
            let result = app.bifidDecrypt('');
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


});