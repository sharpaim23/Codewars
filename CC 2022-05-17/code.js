/*Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true */

//SAMPLE TEST:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Test Suite",()=>{
  it("Fixed tests",()=>{
    assert.strictEqual(setAlarm(true, true),  false,"Should be false.");
    assert.strictEqual(setAlarm(false,true),  false, "Should be false.");
    assert.strictEqual(setAlarm(true, false), true,"Should be true.");
  });
});*/


//P: Will there ever be a time where there are other parameters added, can there be a undefined or null returned 
//R: alarm should be set if employed but not on vacation 



//SOLUTION:
function setAlarm(employed, vacation){
  //conditional on employed and vacation
  //go through the entire true false listed above in example
  //show work
if(employed == true && vacation == true){
  return false
}else if(employed == false && vacation == false){
  return false;
  }else if(employed == false && vacation == true){
    return false;
  }else{
    return true
  }
}
//E:
//setAlarm(true, true),  false,"Should be false.");
//setAlarm(false,true),  false, "Should be false.");
//setAlarm(true, false), true,"Should be true.")