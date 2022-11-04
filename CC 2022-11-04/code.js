/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});*/


// Odd Nums, Math -> odd nums, all nums are +, sum of all nums, no floating nums
// Return the sum of the numbers in the nth row


//rowSumOddNumbers(1), 1
//rowSumOddNumbers(42), 74088
//rowSumOddNumbers(65), 274625

//SOLUTION:
// Odd nums triangle each row is cubed 
function rowSumOddNumbers(n) {
  // return n**3
  return n = n**3
}

// Solution 2:
function rowSumOddNumbers(n) {
  // Math.pow set index
  return Math.pow(n, 3)
}

