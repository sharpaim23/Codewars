/* Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a*/

//SAMPLE TESTS:
/* describe("Tests", () => {
  it("test", () => {
Test.assertEquals(ArrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters')
Test.assertEquals(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!')

  });
});*/


//P: Array - numbers that are needing to be converted into characters
//R: To convert the array into characters according to the String.fromCharCode(97)

//SOLUTION:
//P: Map the array
//  Element run through the String.fromCharCode
// Join them together again
// Show work
var ArrowFunc = function(arr) {
  return arr.map(element => String.fromCharCode(element)).join(''); //Complete this function
}


//E
ArrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters'
ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!'