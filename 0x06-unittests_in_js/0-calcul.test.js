const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should be 1 + 3 = 4', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should be 1 + 3.7 = 5', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should be 1.2 + 3.7 = 5', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should be 1.5 + 3.7 = 5', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
