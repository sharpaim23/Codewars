/*Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).*/

//SAMPLE TESTS:
/*const { assert } = require("chai")

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
  });
})*/


// Mathematics -> defining a triangle, triangles surface > 0, will it be all +integers, floating integers
// Return true if the triangle can be built with the sides of given length, false if not.

//isTriangle(1,2,2), true
//isTriangle(7,2,2), false
//isTriangle(5,3,3), true

//SOLUTION:
function isTriangle(a, b, c) {
  // if else
  // using triangle inequality theorem
  if (a + b > c && a + c > b && b + c > a) {
    // if triangle
    return true
  } else {
    // if not a triangle
    return false;
  }
}



