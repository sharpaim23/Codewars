/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  })
})*/


// Stings -> string of words, finding the length of the shortest word, string will never be empty, and no different data types
//Return the length of the shortest word(s).


// findShort("bitcoin take over the world maybe who knows perhaps"), 3
// findShort("turns out random test cases are easier than writing out basic ones"), 3
// findShort("Let's travel abroad shall we"), 2

//SOLUTION:
// arrow function
// split the string
// map the string for a new array by the word length
// Wrap it in Math.min for the min numbers or letters for the words
// Apply method that calls the specific function with a given 'this' value, and arguments provided as an array (or array-like object)
const findShort = (s) => Math.min.apply(this, s.split(' ').map(word => word.length))
