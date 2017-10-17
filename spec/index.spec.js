let app = require("../index");

describe("bifid_cipher test suite", function () {
    it("should return valid response", function () {
        let result = app.bifidEncrypt('rdvelho');
        expect(result).toBe('HVBPHPD');
    });

    it("should fail gracefully", function () {
        let result = app.bifidEncrypt('');
        expect(result).toBe('');
    });
});