/*Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

  });
});*/


//Strings, Capitalization, String.prototype -> capitalize the first letter in each word, all quotes, 
// Return the Jaden Smith quotes 'strings' with each letter capitalized. 

//SOLUTION:
// Return this.split 'this' is the string representation because of the use of the prototype 'this' is attached too
String.prototype.toJadenCase = function () {
  return this.split(' ')
    //map to create a new array after calling a provided function on every element in the calling array
    // toUpperCase to capitalize every first letter of the words
    // slice to return a shallow copy of a portion of the array into a new array object.
    // join creates and returns a new string using concatenation of all the elements in an array
    .map(w => w[0].toUpperCase() + w.slice(1)).join(' ')

};


