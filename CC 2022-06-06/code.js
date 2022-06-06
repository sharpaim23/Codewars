/*Character recognition software is widely used to digitize printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitized character recognition softwares often make mistakes.

Your task is correct the errors in the digitized text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(correct("L0ND0N"),"LONDON");
    assert.strictEqual(correct("DUBL1N"),"DUBLIN");
    assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
    assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
    assert.strictEqual(correct("PAR15"),"PARIS");
  });
});*/

//P:Can there be possibly more characters misinterpreted as numbers, can the strings be empty, what about arrays
//R:The correct spelling from the misinterpreted characters as numbers

//SOLUTION:
function correct(string){
  //P: Replace the mistaken numbers with the correct characters.
  //return the replacement
  //show work
  return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')
}


//E:
correct("DUBL1N"),"DUBLIN"
correct("BUDAPE5T"),"BUDAPEST"
correct("PAR15"),"PARIS"