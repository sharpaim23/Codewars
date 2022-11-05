/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("findNextSquare", function() {
  it("should return the next square for perfect squares", function() {
    Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
    Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
    Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
    Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
  });
  
  it("should return -1 for numbers which aren't perfect squares", function() {
    Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
    Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
  });
});*/


// Square -> looking for the next perfect square, is an integer n such that sqrt (n) is also an integer
// Return the next perfect square, if it is not return -1

//findNextSquare(121), 144, "Wrong output for 121"
//findNextSquare(625), 676, "Wrong output for 625"
//findNextSquare(319225), 320356, "Wrong output for 319225"


//SOLUTION 1:
function findNextSquare(sq) {
  // if statement 
  // Math.sqrt % 1 to check for remainder
  if (Math.sqrt(sq) % 1) {
    return -1
  }
  // return Math.sqrt + 1 ** 2 for squared 
  return (Math.sqrt(sq) + 1) ** 2
}

// Solution 2:
// Arrow function
// Math.sqrt % 1 to check for remainder
// if so return -1
// if not return Math.sqrt of the sq + 1 ** 2 to square it
const findNextSquare = sq => Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1 ) ** 2

