/*Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).*/

//SAMPLE TEST:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(validateUsr('asddsa'), true);
    assert.strictEqual(validateUsr('a'), false);
    assert.strictEqual(validateUsr('Hass'), false);
    assert.strictEqual(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
    assert.strictEqual(validateUsr(''), false);
    assert.strictEqual(validateUsr('____'), true);
    assert.strictEqual(validateUsr('012'), false);
    assert.strictEqual(validateUsr('p1pp1'), true);
    assert.strictEqual(validateUsr('asd43 34'), false);
    assert.strictEqual(validateUsr('asd43_34'), true);
  })
});*/

//P: does the username require any specific characters, what about special characters, can it start with a number
//R: validation of username with regex

//SOLUTION:
//P: look up regex for username validation
// remove the res =
// just return the validation 
// show work
function validateUsr(username) {
  return /^[a-z\d_]{4,16}$/.test(username) 
}


//E:
validateUsr('asddsa'), true
validateUsr('a'), false
validateUsr('Hass'), false