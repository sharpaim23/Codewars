/*Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"*/

//SAMPLE TESTS:
/*// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should test for something", function() {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
}); */


//P: Can more colors be added to this array, what about other attributes, can params be added
//R: A randomized color for the ghost

//SOLUTION:
//P: Create a ghost class
// Use this.color for the colors array
// Math.floor to fix the floating numbers 
// Math.random for the randomized color
// Show work
var Ghost = function () {
  this.color = ['white', 'yellow', 'purple', 'red' ][Math.floor(Math.random() * 4)]
}



//E:
this.color[3], 'red',
this.color[1], 'yellow',
this.color[2], 'purple'