/*Write a function that returns the total surface area and volume of a box as an array: [area, volume]*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(getSize(4, 2, 6), [88, 48]);   
    assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
    assert.deepEqual(getSize(4, 2, 6)[0], 88);
    assert.deepEqual(getSize(4, 2, 6)[1], 48);
  })
});*/

//P: can the surface area have a particular size and/or shape
//R: the surface area and volume of a box as an array

//SOLUTION:
//P: Get the surface area of each side
// multiply it by 2
// then find volume
// show work
getSize = (width, height, depth) => [2 * (width * height + width * depth + height * depth), width * height * depth]


//E:
getSize(4, 2, 6), [88, 48]
getSize(10, 10, 10), [600, 1000]
getSize(4, 2, 6)[0], 88
