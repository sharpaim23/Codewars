/*The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(dutyFree(12, 50, 1000), 166);
    assert.strictEqual(dutyFree(17, 10, 500), 294);
    assert.strictEqual(dutyFree(24, 35, 3000), 357);   
  });
})*/


//P: will all integers be positive, will the discount be different depending on the whiskey, what about possible arrays
//R: How many bottles of whiskey one will need to buy for the discount to cover the cost of the holiday


//SOLUTION:
function dutyFree(normPrice, discount, hol){
  //P: Simply mathematics
  // normPrice * discount
  // divided by the cost of the entire holiday(hol) & 100 to move he decimal
  // Math.floor to round down
  //show work
  return Math.floor(hol / ((normPrice * discount) / 100))
}

//E:
dutyFree(12, 50, 1000), 166
dutyFree(17, 10, 500), 294
dutyFree(24, 35, 3000), 357 
