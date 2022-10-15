/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Test 1", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", () => {
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
  });
});*/


// String -> space separated nums, all nums are valid Int32, don't have validate, at least 1 num in string, output string MUST be 2 nums separated, highest num first
// Return string of separated nums highest num first

// highAndLow('2 4 6'), '2 6'
// highAndLow('1 4 7'), '1 7'
// highAndLow('3 6 9'), '3 9'

//SOLUTION:
// Arrow function 
const highAndLow = numbers => {
  // using split method on the existing string of numbers
  nums = numbers.split(' ')
  // template literals along with using the spread method to pull the max and min nums
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}


