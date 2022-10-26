/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;

describe("Your function", function() {
  it("should work for basic tests", function() {
    assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
    assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
    assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
    assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
    assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
  });
}); */


// Array -> add lowest of +nums, array of 4 +num integers, no floats/non-positive integers
// Return the sum of the two lowest positive numbers given an array of minimum 4 positive integers

//sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6"
//sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24"
//sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16"

//SOLUTION:
function sumTwoSmallestNumbers(numbers) {  
  // declare variable for the first min num
  // splice used here for the second min num
  let oneSet = Math.min(...numbers)
  numbers.splice(numbers.indexOf(oneSet), 1)
  // declare a variable for second min num
  // Math.min for the second min element in the array
  let setTwo = Math.min(...numbers)
  // add the variables together
  return oneSet + setTwo
}


//Solution 2:
// function sumTwoSmallestNumbers(numbers) {
//   var [ a, b ] = numbers.sort((a, b) => a - b)
//   return a + b
// }


//Solution 3:
// function sumTwoSmallestNumbers(numbers) {  
//   numbers.sort((a,b) => a - b);
//   return numbers[0] + numbers[1];
// };