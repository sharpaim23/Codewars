/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",function() {
  it("noBoringZeros",function() {
    assert.strictEqual(noBoringZeros(1450), 145)
    assert.strictEqual(noBoringZeros(960000), 96)
    assert.strictEqual(noBoringZeros(1050), 105)
    assert.strictEqual(noBoringZeros(-1050), -105)
    assert.strictEqual(noBoringZeros(-105), -105)
    assert.strictEqual(noBoringZeros(0), 0)
  })
})*/


//P: Can it be a '0', or an array of zeros, floating integers
//R: no numbers ending in zeros

//SOLUTION:
//P:Math.abs the parameter
// Any number less than 9
// AND any number modules 10 equals 0
// Divide the n by 10
// Return n
// Show work
function noBoringZeros(n) {
  while ((Math.abs(n) > 9) && (n % 10 === 0)) {
    n /= 10
  }
  return n
}

//E:
noBoringZeros(960000), 96
noBoringZeros(1050), 105
noBoringZeros(-1050), -105