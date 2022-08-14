/*This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL */

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;

describe("Tests", () => {
  it("Should remove the first and last character", () => {
    assert.strictEqual(array('1,2,3'), '2');
    assert.strictEqual(array('1,2,3,4'), '2 3');
    assert.strictEqual(array('1,2,3,4,5'), '2 3 4');
  })
  it("Should return null if the final result is an empty string", () => {
    assert.strictEqual(array(''), null);
    assert.strictEqual(array('1'), null);
    assert.strictEqual(array('1,2'), null);
  })
}); */


//P: Can the array consist of more than just strings, integers, negatives, can this work with just string with no array
//R: A new string without the first and last string in that sequence

//SOLUTION:
//P: New variable to split the sequence of characters
//  New variable to slice and join new sequence
// Return second new variable with an ternary operator
// Show work
function array(arr){
  let newArr = arr.split(/\W/g)
  let arrSlice = newArr.slice(1, newArr.length - 1).join(' ')
  return arrSlice ? arrSlice : null
}


//E:
array('1,2,3,4,5'), '2 3 4'
array('1,2,3,4'), '2 3'
array(''), null