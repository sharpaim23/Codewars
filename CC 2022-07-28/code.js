/*Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(problem("hello"), "Error");
    assert.strictEqual(problem(1), 56);
    assert.strictEqual(problem(5), 256);
    assert.strictEqual(problem(0), 6);
    assert.strictEqual(problem(1.2), 66);
    assert.strictEqual(problem(3), 156);
    assert.strictEqual(problem("RyanIsCool"), "Error");
    assert.strictEqual(problem(-3), -144);
    assert.strictEqual(problem(""), "Error");
    assert.strictEqual(problem(0.03), 7.5);
  })
})*/

//P: can x be an array, negative integer, floating integer
//R: Error if x is a 'string' if not return the math equation

//SOLUTION:
//P: Typeof returns a string indicating the type of the unevaluated operand
// In this case it is a 'string'
// should return an 'Error'
// else return the math equation
// show work
function problem(x) {
return typeof x == 'string' ? 'Error' : (x * 50) + 6
}


//E:
problem(0), 6
problem(1.2), 66
problem(3), 156