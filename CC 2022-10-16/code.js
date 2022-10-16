/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("GetMiddle", function() {
  it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});*/


// String -> one word, looking for the middle letter if odd word.length || 2 letters if even, can be a single letter word 'A' || 'I'
// Return the middle letter if the work length is odd and 2 letters in the middle if the word.length is even

// getMiddle('happy'), 'p'
// getMiddle('dog'), 'o'
// getMiddle('hippopotamus'), 'po'

//SOLUTION:
function getMiddle(s) {
  // declare a variable for the length of the word
  let length = s.length
  // declare a variable to find the middle of each word
  let middle = Math.floor(length / 2 )
  // if else statement to determine what to do with even/odd numbered words.
  if (length % 2 === 0) {
    //if even 
    return s[middle -1] + s[middle]
  } else {
    // if odd
    return s[middle]
  }
}



