var assert = require('assert');
var convertToChange = require('../convertToChange');

describe('convertToChange', function () {


 it('it converts change dollar', function () {
  const actualResult = convertToChange(1)
  const expectedResult = ["DOLLAR"]
  console.log(actualResult);
  assert.deepEqual(actualResult, expectedResult)
 });

 it('it converts change quarter', function () {
  const actualResult = convertToChange(0.25)
  const expectedResult = ["QUARTER"]
  console.log(actualResult);
  assert.deepEqual(actualResult, expectedResult)
 });

 it('it converts change dime', function () {
  const actualResult = convertToChange(0.1)
  const expectedResult = ["DIME"]
  console.log(actualResult);
  assert.deepEqual(actualResult, expectedResult)
 });

 it('it converts change nickel', function () {
  const actualResult = convertToChange(0.05)
  const expectedResult = ["NICKEL"]
  console.log(actualResult);
  assert.deepEqual(actualResult, expectedResult)
 });

 it('it converts change penny', function () {
  const actualResult = convertToChange(0.01)
  const expectedResult = ["PENNY"]
  console.log(actualResult);
  assert.deepEqual(actualResult, expectedResult)
 });

 it('it converts change penny', function () {
  const actualResult = convertToChange(1.41)
  const expectedResult = ["DOLLAR", "QUARTER", "DIME", "NICKEL", "PENNY"]
  console.log(actualResult);
  assert.deepEqual(actualResult, expectedResult)
 });



});
