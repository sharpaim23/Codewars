/* Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challenge harder and to prompt the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(add('1', 1), true);
Test.assertEquals(add(1, '1'), true);
Test.assertEquals(add(1, '0'), false);
Test.assertEquals(add('11', 11), true);
Test.assertEquals(add(12, 12), true);
Test.assertEquals(add(120, '021'), false);
  });
});*/


//P: Strings, others - compare strings to others like Number, coercion
//R: Return true if they are the same character regardless of their different data types, false it they are not

//SOLUTION:
//P: Simple comparison
// a compared to b
// Show work
add = (a, b) => a == b

//E
add(1, '0'), false
add('11', 11), true
add(12, 12), true