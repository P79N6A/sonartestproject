const assert = require('assert');
const addition = require('../app/index.js');

describe('Addition', function() {
	it('correctly calculates the sum of 1 and 3', () => {
	  assert.equal(addition.add(1, 3), 4);
	});
});