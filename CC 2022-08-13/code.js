/*Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

var websites = [];*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Checking Content", () => {
  it("Should not be empty", () => {
    assert.isNotEmpty(websites, 'The array is still empty')
  })
  it('Should contain "codewars"', () => {
    assert.include(websites, 'codewars', 'The array does not contain the correct value "codewars"')
  });
  it("Should only contain 1 item", () => {
    assert.lengthOf(websites, 1)
  })
});*/


//P: Push to an array
//R: Add 'codewars' to an array

//SOLUTION:
//P: websites because that is the parameter
// push to add the word 'codewars' to the array
// show work
// add the value "codewars" to the already defined websites array
websites.push('codewars')

//E:
websites.push('all')
websites.push('the')
websites.push('codewars')
