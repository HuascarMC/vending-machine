var assert = require('assert');
var ConvertToChange = require('../ConvertToChange');

describe('ConvertToChange', function () {


 it('it converts change dollar', function () {
  const actualResult = ConvertToChange(1)
  const expectedResult = ["DOLLAR"]
  assert.deepEqual(actualResult, expectedResult)
 });

 it('it converts change quarter', function () {
  const actualResult = ConvertToChange(0.25)
  const expectedResult = ["QUARTER"]
  assert.deepEqual(actualResult, expectedResult)
 });

 it('it converts change dime', function () {
  const actualResult = ConvertToChange(0.1)
  const expectedResult = ["DIME"]
  assert.deepEqual(actualResult, expectedResult)
 });

 it('it converts change nickel', function () {
  const actualResult = ConvertToChange(0.05)
  const expectedResult = ["NICKEL"]
  assert.deepEqual(actualResult, expectedResult)
 });

 it('it converts change penny', function () {
  const actualResult = ConvertToChange(0.01)
  const expectedResult = ["PENNY"]
  assert.deepEqual(actualResult, expectedResult)
 });

 it('it converts amount to multiple coins array', function () {
  const actualResult = ConvertToChange(1.41)
  const expectedResult = ["DOLLAR", "QUARTER", "DIME", "NICKEL", "PENNY"]
  assert.deepEqual(actualResult, expectedResult)
 });
});
