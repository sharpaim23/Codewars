/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/

//SAMPLE TESTS:
/*const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(descendingOrder(0), 0)
    assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
    assert.strictEqual(descendingOrder(123456789), 987654321)
    })
  } */


// Descending order of nums, non-negative, rearrange the order to be descending
// Return the params of nums in descending order, rearrange them to always be in descending order.

// descendingOrder(58), 85
// descendingOrder(269), 962
// descendingOrder(562389), 986532

//SOLUTION:
// Number function to keep the param a number
function descendingOrder(n) {
  // toString method to change the num into a string
  // split method to split the num 
  // sort method to get the descending order of the num
  // join method to rejoin the num in descending order
  return Number(n.toString().split('').sort((a,b) => b - a).join(''))
}



