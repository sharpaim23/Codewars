/*Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```
Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(TempleStrings("Animals","Good"), 'Animals are Good')

  });
});*/


//P: Strings/Template literals - use template literals in the return
//R: Return a string containing the two strings using template literals

//SOLUTION:
//P: Template literals
// Return the params using 'are' 
// Show work
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}


//E
TempleStrings("Animals","Good"), 'Animals are Good'
TempleStrings("Cats","Sneaky"), 'Cats are Sneaky'
TempleStrings("Dogs","Love"), 'Dogs are Love'