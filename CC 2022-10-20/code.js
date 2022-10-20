/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});*/


// Strings -> words, or letters the do not repeat, consecutive or non-consecutive, empty strings will isogram, ignore letter case
// Return that determines whether a string that is only letters is an isogram. -> Empty strings are isograms

//isIsogram('cancel'), false
//isIsogram('jumping'), true
//isIsogram('moon'), false

//SOLUTION:
function isIsogram(str) {
  // if empty return true
  if (str.isEmpty) {
    return true
  } else {
    // all lower case
    str = str.lowerCase()
  }
  // split string into characters
  let arr = str.split('')
  let sortedArr = arr.slice().sort()

  for (let i = 0; i < arr.length; i++){
    // if duplicate is found return false
    if (sortedArr[i + 1] == sortedArr[i]) {
      return false
    }
  }
  // else return true
  return true
}

