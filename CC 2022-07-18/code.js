/*Complete the function which converts hex number (given as a string) to a decimal number.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(hexToDec("1"), 1);
    assert.strictEqual(hexToDec("a"), 10);
    assert.strictEqual(hexToDec("10"), 16);
    assert.strictEqual(hexToDec("FF"), 255);
    assert.strictEqual(hexToDec("-C"), -12);
  })
})*/

//P: any hexadecimal, non stings, arrays with hexadecimals
//R: Convert a hexadecimal given as a string to a decimal number

//SOLUTION:
//P: parseInt the parameter
// add in the radix of 16 for this function
// show work
function hexToDec(hexString){
  return parseInt(hexString,16)
}



//E:
hexToDec("a"), 10
hexToDec("10"), 16
hexToDec("FF"), 255