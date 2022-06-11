/*You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
    assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
  });
});*/

//P: Can there be an empty array, what if there are multiply words that start with the same letter, what about a two letter word
//R: The first word in the array that starting alphabetically with "***' between each character.

//SOLUTION:
function twoSort(s) {
  //P: Sort the array starting @ 0 index
  // Split the array
  // Join it with the separators 
  // show work
  return s.sort()[0].split('').join('***')
}


//E:
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n'
twoSort(["happy", "sad", "words", "giant", "jump", "cracker", "ice cream", "stake", "cheese"]), 'c***h***e***e***s***e'