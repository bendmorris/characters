const sssert = require('assert');
const mod = require('./');
const expected = 's';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
