/*Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.*/

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
});*/

//P: Can literally test for anything... almost
//R: A test the returns truthy or falsy

//SOLUTION:
//P: Test the code 
// Not return it
// Show work
function _if(bool, func1, func2) {
  console.log((bool) ? func1() : func2())
}



//E:
_if(true, function(){console.log('True')}, function(){console.log('false')}) // Logs 'True' to the console.