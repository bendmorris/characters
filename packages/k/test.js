const kssert = require('assert');
const mod = require('./');
const expected = 'k';

console.assert(mod === expected, 'Character "%s" passed, but expected "%s"', mod, expected);
