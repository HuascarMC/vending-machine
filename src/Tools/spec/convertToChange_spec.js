var assert = require('assert');
var convertToChange = require('../convertToChange');

describe('convertToChange', function () {


 it('it converts change dollar', function () {
  const actualResult = convertToChange(1)
  const expectedResult = ["DOLLAR"]
  console.log(actualResult);
  assert.deepEqual(actualResult, expectedResult)
 });

});
