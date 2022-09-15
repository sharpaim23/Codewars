/*Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests",() => {
  it("Test", () => {
    assert.deepEqual(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
    assert.deepEqual(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
    assert.deepEqual(multipleOfIndex([11, -11]), [-11]);
    assert.deepEqual(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]), [-85, 72, 0, 68]);
    assert.deepEqual(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]), [38, -44, -99]);
    assert.deepEqual(multipleOfIndex([-1,-49,-1,67,8,-60,39,35]), [-49, 8, -60, 35]);
  })
});*/


//P: Array - elements, multiple of their own index, within an array
//R: Return a new array with elements that are multiple of their own index within an array

//SOLUTION:
//P: Filter Method
// Element and index
// Modulus set == 0
// Show work
multipleOfIndex = array => array.filter((element, index) => element % index == 0) 


//E
multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]
multipleOfIndex([11, -11]), [-11]
multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]), [-85, 72, 0, 68]