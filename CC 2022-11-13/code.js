/* *Story*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.*/

//SAMPLE TESTS:
/*const assert = require('chai').assert;

describe("minMax", () => {
  const testCases = [
    [[1, 2, 3, 4, 5], [1, 5]],
    [[2334454, 5], [5, 2334454]],
    [[5], [5, 5]]
  ];
  for(const [input, expected] of testCases) {
    it(`should work for ${JSON.stringify(input)}`, () => {
      assert.deepEqual(minMax(input), expected);
    });
  }
});*/


// Arrays, lists, nums, min/max -> arr/lists will always have at least one element, function will always get an arr/list, get min/max of item. no check for undefined/null
// Return the minimum and maximum of an item for resale.

//minMax[[1, 2, 3, 4, 5], [1, 5]]
//minMax[[2334454, 5], [5, 2334454]]
//minMax[[5], [5, 5]]


//SOLUTION:
function minMax(arr) {
  // Math.min/max for both arr
  // spread operator for the absent of values
  return [Math.min(...arr),Math.max(...arr)]
}