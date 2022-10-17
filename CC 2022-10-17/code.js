/*You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
0  =>  true
3  =>  false
4  =>  true
25  =>  true
26  =>  false */

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("isSquare", function(){
  it("should work for some examples", function(){
    Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
    Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare( 3), false, "3 is not a square number");
    Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});*/


// Integral Numbers -> looking to see if certain numbers are square, test will always use integral numbers,
// Return true if the integral numbers are squared and false if not

// isSquare(15), false
// isSquare(12), true
// isSquare(36), true

//SOLUTION:
// If statement to take care of the negative numbers
const isSquare = function (n) {
  if (n < 0) {
    return false
  }
  // for loop to proceed through the rest of the numbers 
  for (let i = 0; i <= n; i++){
    // multiply i by 2 to check if it is a square and equal to n
    if (i ** 2 == n) {
      // if true then continue through the list of numbers
      return true
    } else {
      continue
    }
  }
  //if not return false 
  return false
}

//Solution 2
function isSquare(n) {
  // return the Math.sqrt method to check if the number is a sqrt.
  // Also returns a boolean
  return Math.sqrt(n) % 1 === 0
}