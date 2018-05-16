const assert = require('assert');

require('./index');

const arr = [1,4,6,7,10,12];

assert.equal(arr.interpolationSearch(4), 1);
assert.equal(arr.interpolationSearch(1), 0);
assert.equal(arr.interpolationSearch(6), 2);
assert.equal(arr.interpolationSearch(7), 3);
assert.equal(arr.interpolationSearch(10), 4);
assert.equal(arr.interpolationSearch(12), 5);
