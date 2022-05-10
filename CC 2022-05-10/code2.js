/*You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.*/

//SAMPLE TEST:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Cat and Mouse - Easy Version", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(catMouse('C....m'), "Escaped!");
    assert.strictEqual(catMouse('C..m'), "Caught!");
    assert.strictEqual(catMouse('C.....m'), "Escaped!");
  })
});*/

//SOLUTION:
function catMouse(x){
  const distance = Math.abs(x.indexOf('C') - x.indexOf('m')) - 1
  if(distance > 3) return 'Escaped!'
  return 'Caught!'
}
