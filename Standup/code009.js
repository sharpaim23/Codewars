/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" */

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
});*/


// Strings, Arrays -> strings convert into new, character replacement, ignore capitalization if the character is a duplicate
// Return a new string replacing the single characters with '(' and duplicate characters with ')' ignoring the capitalization of the duplicated characters.

//duplicateEncode("din"),"((("
//duplicateEncode("recede"),"()()()"
//duplicateEncode("Success"),")())())","should ignore case"

//SOLUTION:
function duplicateEncode(word) {
  // declare an variable obj for the key value 
  let obj = {}
  // ignore the upper case & split string
  let letter = word.toLowerCase().split('')
// for loop 
  for (let i = 0; i < letter.length; i++){
    // create a variable the pos of each letter in the array
    let x = letter[i]
    // conditions 
    if (obj[x] === undefined) {
      // creating the first value within the string 
      obj[x] = 1
      // else if there is already a value add 1 to the previous value
    } else {
      obj[x] += 1
    }
  }
  // return the new array with map
  return letter.map(function (letter) {
    // replacing the obj if === 1 with '(' || ')' if the obj is a duplicate
    return obj[letter] === 1 ? '(' : ')'
    // join the obj
  }).join('')
}






