/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

//SAMPLE TESTS:
/*const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});*/


//P: Strings - counting vowels, not including 'y', lower case letters/spaces
//R: Return the vowel count in a string

//SOLUTION:
//P: For of loop
// Declare a variable set to 0
// Use the for of loop to look for the vowels in the string
// Return the declared variable
// Show work

//Solution 1
const vowels = ['a', 'e', 'i','o','u']
function getCount(str) {
  let count = 0

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++
    }
  }
  return count;
}

//Solution 2
function getCount(str) {
  const count = str.match(/[aeiou]/gi).length
  return count
}


//E
getCount("abracadabra"), 5
getCount("hooper"), 3
getCount("ice cream"), 4