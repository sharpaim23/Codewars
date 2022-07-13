/*Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false*/

//SAMPLE TESTS:
/*describe("Palindrome", function() {
    it("should identifies that a string is palindrome", function() {
        Test.assertEquals(isPalindrome("anna"), true);
    });
    
    it("should identifies that a string is not palindrome", function() {
        Test.assertEquals(isPalindrome("walter"), false);
    });
    
    it("should identifies that a number is palindrome", function() {
        Test.assertEquals(isPalindrome(12321), true);
    });
    
    it("should identifies that a number is not palindrome", function() {
        Test.assertEquals(isPalindrome(123456), false);
    });
    
    it("should identifies that a string is palindrome on punctuation", function() {
        Test.assertEquals(isPalindrome("."), true);
    });
    
    it("should identifies that a string is palindrome on punctuation", function() {
        Test.assertEquals(isPalindrome(".!!."), true);
    });
});*/

//P: Can the palindrome work on arrays, negative integers
//R: True or false for any word, integer, or string if it is a palindrome 

//SOLUTION:
//P: Convert the line to a string
// Check to see if the line is equal to the line palindrome
// Take the other line and turn it into a string 
// Split it
// Reverse it
// Join it together again
// Show work
function isPalindrome(line) {
  return line.toString() == line.toString().split('').reverse().join('')
}


//E:
isPalindrome('Yay'), true
isPalindrome('Super'), false
isPalindrome('Hannah'), true