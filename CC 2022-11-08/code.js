/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("One's and Zero's", () => {

  it("Example tests", () => {
      Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
      Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
      Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
      Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
  });

});*/


// Array -> nums in array, binary, convert from binary to actual num, can be more than 4 in the array, no neg nums,
// Return the binary representation of the array.


//binaryArrayToNumber([0,0,1,0]), 2
//binaryArrayToNumber([1,1,1,1]), 15
//binaryArrayToNumber([0,1,1,0]), 6

//SOLUTION:
// arrow function
// join method to remove spaces, ect...
// wrapped in a parseInt for the 32 bit integer
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

