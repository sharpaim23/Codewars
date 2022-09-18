/*You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible! */

//SAMPLE TESTS:
/* const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Push an object into array", function(){
  it ("should has a value", function(){
    assert.isNotEmpty(items, 'The array is still empty')
  });
  it ("should has only one value", function(){
    assert.lengthOf(items, 1, 'The array contains too many values')
  });
  it ("should has the correct value", function(){
    assert.deepEqual(items, [{a: "b", c: "d"}], 'The array does not contain the correct value"')
  });
});*/


//P: Array-  push an object, little effort as possible
//R: Push an object into an array with the minimalist effort

//SOLUTION:
//P: Take the object
// Enter it into the array
// Show work
//Problem 1:
items = []
items.push{ a: "b", c: "d" }

//Solution 1:
items = [{ a: "b", c: "d" }]

//Delete this
items.push{ a: "b", c: "d" }

//Problem 2
items = []
items.push{ a: "b", c: "d" }

//Solution 2:
let items = []
items.push({a: "b", c: "d"})

//E