/*It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
  Test.assertEquals(joinStrings('string1', 'string2'), 'string1 string2');
  Test.assertEquals(joinStrings('testing', 'testing'), 'testing testing');
  Test.assertEquals(joinStrings(134, 234), '134 234');
  });
});*/


//P: Strings - Two strings, if there is a number in the string must coerce it into being a string, CANNOT use .concat() or .join()
//R: Return to two strings with a space in between the strings

//SOLUTION:
//P: Template literals
// Joins the string and still respects the space between
// Show work
function joinStrings(string1, string2){
  return `${string1} ${string2}`
}


//E
joinStrings('string1', 'string2'), 'string1 string2'
joinStrings('testing', 'testing'), 'testing testing'
joinStrings(134, 234), '134 234'