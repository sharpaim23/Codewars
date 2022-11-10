/*Implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Should pass Basic tests", () => {
    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
  });
});*/


// Arrays, Nums, -> two different arrays, subtract the num from the array a if present in array b, return a new array, can be any type num,
// Return a new array result from subtracting one list from the other within the two arrays.


//arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]"
//arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]"
//arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []"


//Solution 1:
function arrayDiff(a, b) {
  // for loop for the first array
  for (let i = 0; i < a.length; i++){
    // another for loop for the second array
    for (let j = 0; j < b.length; j++){
      // if statement to determine if there is a match within each array
      if (a[i] == b[j]) {
        // delete the item in the first array
        delete a[i]
      }
    }
  }
  console.log(a.filter(Boolean))
  // return the filtered array which quickly removes all empty items from an array same as arr.filter(item => Boolean(item))
  return a.filter(Boolean)
}


//SOLUTION 2:
// arrow function
// filter method to filter down the items from the given arr 
// includes methods returns a boolean 
const arrayDiff = (a, b) => a.filter(num => !b.includes(num))