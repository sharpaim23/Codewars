/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});*/


// Strings, arrays -> reverse the string, including all spaces and punctuation, new array for the reversed strings
// Return the reversed version of the given string


//reverseWords('apple'), 'elppa'
//reverseWords('a b c d'), 'a b c d'
//reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow'


//SOLUTION:
// arrow function
// split method
// map for new array
// spread operator to spread the string
// reverse method the string
// join method to rejoin the new array
// join method again outside the map to join the string by the spaces
const reverseWords = str => str.split(' ').map(rev => [...rev].reverse().join('')).join(' ')



//Solution 2:
function reverseWords(str) {
  //for loop
  // starting point will be str.length - 1 for the last character of the string 
  // decrementing through the string 
  for (let i = str.length - 1; i >= 0; i--){
    // newString = newString + str[i]
    newString += str[i]
  }
}

