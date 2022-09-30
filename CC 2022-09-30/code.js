/*Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
What kind of tests we made for your code:

Function have to count words and not spaces. You have to be sure that you doing it right
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
Doublecheck that words with chars like -, ', ` are counted right.*/

//SAMPLE TESTS:
/*describe("countWords", function() {
  it("should work in basic form of problem", function() {
    Test.assertEquals(countWords("Hello"), 1);
    Test.assertEquals(countWords("Hello, World!"), 2);
    Test.assertEquals(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), 19);
    Test.assertEquals(countWords(""), 0);
    Test.assertEquals(countWords("With! Symbol@ #Around! (Every) %Word$"), 5);
    Test.assertEquals(countWords("Dear   Victoria, I love  to press   space button."), 8);
  });
  
  it("should work with spaces around string", function() {
    Test.assertEquals(countWords(" Arthur "), 1);
    Test.assertEquals(countWords(" David"), 1);
    Test.assertEquals(countWords("Nelson "), 1);
    Test.assertEquals(countWords("  Hello Gomer  "), 2);
    Test.assertEquals(countWords("  Hello     Bart  "), 2);
  });
  
  it("should work with non-whitespace (ex. breakspace) chars", function() {
    Test.assertEquals(countWords("﻿Hello﻿World "), 2);
    Test.assertEquals(countWords("Hello﻿World"), 2);
  });
});*/


//P:Strings - count all the words, don't count whitespace, and make sure that words with -, ', ` are counted right
//R: Return the number of words in a string

//SOLUTION:
//P: Split Method
// Using regex to remove whitespace
// Filter out the actual words
// Length for the length of the word and how many within the string
// Show work
const countWords = str => str.split(/\s/).filter(x => x).length


//E
countWords(" Arthur "), 1
countWords(" David"), 1
countWords("Nelson "), 1