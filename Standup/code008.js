/*Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

nthSmallest({3,1,2} ,2) ==> return (2) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) */

//SAMPLE TESTS:
/*const { assert } = require('chai');

describe("Basic tests",() =>{
  it('Basic tests', () => {
    assert.strictEqual(nthSmallest(                 [3,1,2], 2),  2);
    assert.strictEqual(nthSmallest(        [15,20,7,10,4,3], 3),  7);
    assert.strictEqual(nthSmallest(          [-5,-1,-6,-18], 4), -1);
    assert.strictEqual(nthSmallest([-102,-16,-1,-2,-367,-9], 5), -2);
    assert.strictEqual(nthSmallest(      [2,169,13,-5,0,-1], 4),  2);
    assert.strictEqual(nthSmallest(           [2,1,3,3,1,2], 3),  2);
  });
}); */


// Arrays -> find the smallest Nth element, array.length = 3, can +/-/0 integers, duplicates can happen
// Return the smallest Nth element in the array of integers.

//nthSmallest(        [15,20,7,10,4,3], 3),  7
//nthSmallest([-102,-16,-1,-2,-367,-9], 5), -2
//nthSmallest(      [2,169,13,-5,0,-1], 4),  2


//SOLUTION:
function nthSmallest(arr, pos) {
  // sort the arr
  arr.sort((a, b) => a - b)
  // return arr[pos - 1] for the pos of the smallest element 
  return arr[pos - 1]
}


