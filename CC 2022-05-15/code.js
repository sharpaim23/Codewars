/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.

Note: Use "" instead of '' in C++. */

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(updateLight("green"), "yellow");
    assert.strictEqual(updateLight("yellow"), "red");
    assert.strictEqual(updateLight("red"), "green");
  });
}); */

//P: Will there be string of integers, array of strings, use for caution light
//R: string of color the light is turning

//SOLUTION:
const updateLight = current_status => {
  if (current_status == 'green') {
    return 'yellow'
  } else if (current_status == 'yellow') {
    return 'red'
  }else if( current_status == 'red'){
    return 'green'
  }
}
//determine light status
//set up conditional for color the light  is currently
//change it to what it will be turning

//E: updateLight("green"), "yellow");
(updateLight("yellow"), "red");
//(updateLight("red"), "green")




