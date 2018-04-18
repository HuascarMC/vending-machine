var assert = require('assert');
var convertToChange = require('../convertToChange');

describe('convertToChange', function () {


 it('it converts change', function () {
  const actualResult = convertToChange(1.35)
  const expectedResult = ["DOLLAR", "QUARTER", "DIME"]
  assert.deepEqual(actualResult, expectedResult)
 });

});
