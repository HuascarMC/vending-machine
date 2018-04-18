var assert = require('assert');
var convertToChange = require('../convertToChange');

describe('convertToChange', function () {


 it('it converts change dollar', function () {
  const actualResult = convertToChange(2)
  const expectedResult = ["DOLLAR", "DOLLAR"]
  console.log(actualResult);
  assert.deepEqual(actualResult, expectedResult)
 });

});
