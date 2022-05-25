/*When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.*/


//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(switchItUp(1),"One");
    assert.strictEqual(switchItUp(3),"Three");
    assert.strictEqual(switchItUp(5),"Five");
  });
});*/

//P: Will there ever be a negative integer, with the integer be a string ever, what about an array of numbers
//R: return each number into string word of that number

//SOLUTION:
function switchItUp(number){ 
  //P: switch statement 
  switch(number){
  case 0:
    return "Zero"
    break;
  case 1:
    return "One"
    break;
  case 2:
    return "Two"
    break;
  case 3:
    return "Three"
    break;
  case 4:
    return "Four"
    break;
  case 5:
    return "Five"
    break;
  case 6:
    return "Six"
    break;
  case 7:
    return "Seven"
    break;
  case 8:
    return "Eight"
    break;
  case 9:
    return "Nine"
    break;
    default:
      break;
  }
}

//E:
switchItUp(1),"One"
switchItUp(3),"Three"
switchItUp(5),"Five"