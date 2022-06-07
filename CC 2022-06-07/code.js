/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)*/


//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Tests example test cases", () => {
    assert.strictEqual(sumStr("4","5"), "9");
    assert.strictEqual(sumStr("34","5"), "39");
    assert.strictEqual(sumStr("12","6"), "18");
  });
});*/


//P:Only strings, can there be an array of strings, negative numbers
//R:The sum of the two strings

//SOLUTION:
function sumStr(a,b) {
  //P:Convert the string into a number
  //then add both converted strings to numbers for the sum
  //show answer
  return String(Number(a) + Number(b))
}


//E:
sumStr("4","5"), "9"
sumStr("34","5"), "39"
sumStr("12","6"), "18"