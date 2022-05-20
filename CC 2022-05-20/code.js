/*You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number */

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(getAge("4 years old"), 4);
  })
})*/

//P:Always a valid string, string will always start with a number, not an array
//R: the girls age 0-9

//SOLUTION:
function getAge(inputString){
  //P: convert first arg to string
  // parse string 
  // return int
  return parseInt(inputString)
  }

//E:
getAge("4 years old"), 4
getAge("2 years old"), 2
getAge("6 years old"), 6