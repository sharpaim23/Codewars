/*Write a function that checks if a given string (case insensitive) is a palindrome.*/

//SAMPLE TESTS:
/*const { assert } = require('chai');

describe("Fixed tests", function() {
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
  it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
  it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
  it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
  it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
});*/

//P: Can be any give string of words, Can it be an array of words, empty strings or arrays
//R: True or False on if the word is a palindrome

//SOLUTION:
function isPalindrome(x) {
  //P: Lowercase the string 
  // Create a for loop
  // Check if x[i] do not equal to x.length 
  // Return boolean
  // Show work
  let lowerCase = /[A-Za-z0-9]/g
  x = x.toLowerCase().replace(lowerCase, '')
  let lenX = x.length
  for(let i = 0; i < lenX/2; i++){
    if(x[i] !== x[lenX - 1 - i]){
      return false
    }
  }
  return true
}


//E:
isPalindrome("aba"), true
isPalindrome("Abba"), true
isPalindrome("hello"), false