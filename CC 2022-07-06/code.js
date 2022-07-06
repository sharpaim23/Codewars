/*Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */
Example:

toBinary(1)  /* should return 1 */
toBinary(5)  /* should return 101 */
toBinary(11) /* should return 1011 */ 

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(toBinary(1), 1);
    assert.strictEqual(toBinary(2), 10);
    assert.strictEqual(toBinary(3), 11);
    assert.strictEqual(toBinary(5), 101);  
  });
})*/

//P: does this also include floats, and what about arrays, and strings of numbers
//R: the binary format of a given number

//SOLUTION:
  //P: set a variable toBinary to n
  // then to change the integer that is now binary to string
  // arrow function toString(2) to change the binary into a string
  // show work
  let toBinary = n => + n.toString(2)



//E:
toBinary(1), 1
toBinary(2), 10
toBinary(3), 11