/*This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(strCount('Hello', 'o'), 1);
Test.assertEquals(strCount('Hello', 'l'), 2);
Test.assertEquals(strCount('', 'z'), 0);
  });
});*/

//P: Can this sting be within an array of other strings, can the string be a two worded string
//R: The amount of occurrences the second argument is found within the first argument 

//SOLUTION:
function strCount(str, letter){  
  //P: str.split letter
  // by it's length - 1 
  // show work
  
  return str.split(letter).length - 1
}


//E:
strCount('Hello', 'o'), 1
strCount('Hello', 'l'), 2
strCount('', 'z'), 0