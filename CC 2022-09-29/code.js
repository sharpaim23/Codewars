/*Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)*/

//SAMPLE TESTS:
/*describe("Basic tests", function() {
  it("should work as expected", function() {
    Test.assertSimilar(getNumberFromString("1"), 1);
    Test.assertSimilar(getNumberFromString("123"), 123);
    Test.assertSimilar(getNumberFromString("this is number: 7"), 7);
  });
});*/


//P: Strings - remove all numbers from the string, parse remaining number
//R: Return the number from the string

//SOLUTION:
//P: Replace Method
// Regex for replacing the characters 
// Unary Plus to convert the sting into a number
getNumberFromString = s => +s.replace(/\D/g, '')



//E
getNumberFromString("1"), 1
getNumberFromString("123"), 123
getNumberFromString("this is number: 7"), 7