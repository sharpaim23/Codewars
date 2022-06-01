/*In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", function(){
  it("Basic tests", function(){
    assert.strictEqual(findDifference([3, 2, 5], [1, 4, 4]), 14);
    assert.strictEqual(findDifference([9, 7, 2], [5, 2, 2]), 106);
    assert.strictEqual(findDifference([11, 2, 5], [1, 10, 8]), 30);
    assert.strictEqual(findDifference([4, 4, 7], [3, 9, 3]), 31);
    assert.strictEqual(findDifference([15, 20, 25], [10, 30, 25]), 0);
  });
});*/

//P:Will it always be a number or can it be a string, If numbers can they be positive and/or negative
//R:The difference between two cuboids

//SOLUTION:
function findDifference([a,b,c],[d,e,f]) {
  //P:two different arrays with three elements
  //multiply those elements together
  //subtract on array from the other
  //Wrap it in Math.abs
  //show work
  return Math.abs(a*b*c - d*e*f)
}


//E:
findDifference([15, 20, 25], [10, 30, 25]), 0
findDifference([11, 2, 5], [1, 10, 8]), 30
findDifference([9, 7, 2], [5, 2, 2]), 106