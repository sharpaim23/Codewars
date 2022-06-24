/*We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(plural(0), true, "Plural for 0");
Test.assertEquals(plural(0.5), true, "Plural for 0.5");
Test.assertEquals(plural(1), false, "Plural for 1");
Test.assertEquals(plural(100), true, "Plural for 100");
Test.assertEquals(plural(Infinity), true, "Plural for Infinity");

  });
});*/

//P: Can there be an array of numbers, what about stings, what words that don't have a plural version ie deer, elk,  
//R: True or false based on the number provided for the thing, object, food, or time and whether it is plural or not

//SOLUTION:
function plural(n) {
  //P:If something is just 1 it is false
  // If there is multiple of that thing it is plural
  // show work
return !(n ===1)
}


//E:
plural(0.5), true, "Plural for 0.5"
plural(1), false, "Plural for 1"
plural(100), true, "Plural for 100"