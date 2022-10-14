/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

//SAMPLE TESTS:
/*const { assert } = require("chai")

describe("Basic tests", () => {
  
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
})*/


// Numbers -> will the nums all be positive, any floating nums, any empty integers,
// Square every digit of a num and concatenate them.

// squareDigits(3212), 9414
//squareDigits(2112), 4114
//squareDigits(0), 0

//SOLUTION:
function squareDigits(num){
  // Wrap the return in a Number to convert the string into a number
  return Number(
    // Convert the num into a string
    num.toString()
    //  Split the sting in order to turn the sting into an array
      .split('')
      // Map the array to not only square each element but to also create a new array
      .map(e => e * e)
      // Join the array together to get the concatenated return 
      .join(''))
}

