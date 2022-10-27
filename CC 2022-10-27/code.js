/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {         
    assert.strictEqual(getSum(0,-1),-1);
    assert.strictEqual(getSum(0,1),1);
  })
});*/


// Numbers -> +/- nums, find the sum, if two nums are === then return either a || b
// Return the sum of all the integers between and including them. If the two nums are === return either a || b

//getSum(0,-1),-1
//getSum(0,1),1
//getSum(1,1),1


//SOLUTION:
// set variable for both min and max
// use the sum of integers formula
// max - min + 1 
// multiply that by the max + min / 2
function getSum(a, b) {
  let min = Math.min(a, b)
  max = Math.max(a, b)
  
  return (max - min + 1) * (max + min) / 2
  
}

