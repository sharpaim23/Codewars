/*Create a method all which takes two params:

a sequence
a function (function pointer in C)
and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(all([1,2,3,4,5], function(v){return v<9}), true)
Test.assertEquals(all([1,2,3,4,5], function(v){return v>9}), false)

  });
});*/


//P: Method, Array, Function - Two params, array, function
//R: Return true if the function in the params returns true for every element including empty sequences, false if it doesn't

//SOLUTION:
//P: Two params
// Every method to test all the array within the function
// Show work
all = (arr,fun) => arr.every(fun)


//E
all([1,2,3,4,5], function(v){return v<9}), true
all([1,2,3,4,5], function(v){return v>9}), false