/*Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
    assert.deepEqual(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
    assert.deepEqual(pipeFix([6,9]),[6,7,8,9]);
    assert.deepEqual(pipeFix([-1,4]),[-1,0,1,2,3,4]);
    assert.deepEqual(pipeFix([1,2,3]),[1,2,3]);
  });
});*/

//P: Can there be negative integers, strings, empty arrays
//R: The correct pipe list the has a value that increments by 1

//SOLUTION:
function pipeFix(numbers){
  //P: assign variable to Math.max applied to all numbers
  // assign another variable for an empty array to push the new array into\
  // for loop to push the incremented numbers into the new array
  // return the result 
  // show work
  let q = Math.max.apply(null, numbers)
  let result = []
  for(let i = Math.min.apply(null, numbers); i <= q; i++) result.push(i)
  return result
}



//E:
pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]
pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]
pipeFix([6,9]),[6,7,8,9]