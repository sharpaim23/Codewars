/*Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

Good luck!*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(howManyDalmatians(26), "More than a handful!");
    assert.strictEqual(howManyDalmatians(8), "Hardly any");
    assert.strictEqual(howManyDalmatians(14), "More than a handful!");
    assert.strictEqual(howManyDalmatians(80), "Woah that's a lot of dogs!");
    assert.strictEqual(howManyDalmatians(100), "Woah that's a lot of dogs!");
    assert.strictEqual(howManyDalmatians(101), "101 DALMATIANS!!!");
  })
}) */


//P: can the integer be a string, or an array, what about if the dogs are not dalmatians
//R: the correct response to the number of dogs 

//SOLUTION:
function howManyDalmatians(number){
  //P: simple if else statement
  // return response
  // show work
  if(number <= 10){
    return 'Hardly any'
  }else if(number <= 50){
    return 'More than a handful!'
  }else if(number === 101){
    return '101 Dalmations!!!'
  }else{
    return "Woah that's a lot of dogs!"
  }
}



//E:
howManyDalmatians(8), "Hardly any"
howManyDalmatians(100), "Woah that's a lot of dogs!"
howManyDalmatians(101), "101 DALMATIANS!!!"