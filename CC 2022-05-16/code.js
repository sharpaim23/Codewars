/*The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer. */


//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function() {
  it("Testing for fixed tests", () => {
    assert.strictEqual(cockroachSpeed(1.08), 30);
    assert.strictEqual(cockroachSpeed(1.09), 30);
    assert.strictEqual(cockroachSpeed(0), 0);
  });
});*/

//P: The result is a number, will it always be positive, negative at any point
//R: An integer after converting km to cm

//SOLUTION:
function cockroachSpeed(s) {
  //P: convert km to cm 
  //round down to the nearest integer (Math.floor)
  //return speed in cm per second
  return Math.floor(s * 100000 / 3600)
}




//E:
//(cockroachSpeed(1.08), 30);
//(cockroachSpeed(1.09), 30);
//(cockroachSpeed(0), 0);
