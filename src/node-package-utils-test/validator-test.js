import assert from 'node:assert'
import test from 'node:test'
import { isEmail, isHexColor, isIP } from '../node-package-utils/validator.js'

test('Email Validations', async (t) => {
    await t.test('Valid Email Check', (t) => {
        const email = "test@test.com";
        assert(isEmail(email));
    });

    await t.test('Invalid Email Check', (t) => {
        const email = "testnotanemail";
        assert(isEmail(email) === false);
    });
});

test('Hex Color Validations', async (t) => {
    await t.test('Valid Hex Color Check', (t) => {
        const hexColor = "#FFFFFF";
        assert(isHexColor(hexColor));
    });

    await t.test('Invalid Hex Color Check', (t) => {
        const hexColor = "test";
        assert(isHexColor(hexColor) === false);
    });
});

test('IP Validations', async (t) => {
    await t.test('Valid IP Check', (t) => {
        const ip = "172.16.0.0";
        assert(isIP(ip));
    });

    await t.test('Invalid IP Check', (t) => {
        const ip = "test";
        assert(isIP(ip) === false);
    });
});