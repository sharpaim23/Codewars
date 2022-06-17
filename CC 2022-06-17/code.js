/*Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findLongest("The quick white fox jumped around the massive dog"), 7);
    assert.strictEqual(findLongest("Take me to tinseltown with you"), 10); 
    assert.strictEqual(findLongest("Sausage chops"), 7); 
    assert.strictEqual(findLongest("Wind your body and wiggle your belly"), 6); 
    assert.strictEqual(findLongest("Lets all go on holiday"), 7); 
  })
});*/

//P: Will this all be strings, are there possibly any array of words
//R: The longest sting as a number

//SOLUTION:
function findLongest(str) {
  //P: Split the sting into an array of strings
  // Initiate a variable that will hold the length of the longest word
  // Create a for loop
  // Return the longest word
  // Show work  
  var spl = str.split(" ");
  var longest = 0
  for (var i = 0; i < spl.length; i++) 
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
    return longest
}


//E:
findLongest("Take me to tinseltown with you"), 10
findLongest("Sausage chops"), 7
findLongest("Wind your body and wiggle your belly"), 6