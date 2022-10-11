/*There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it. */

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;

describe("Solution", function() {
  it("should test for something", function() {
    MrFreeze.speak = function() {return 1;}
    assert.strictEqual(MrFreeze.speak(), "hi", 'MrFreeze was able to be modified')
    assert.strictEqual(Object.isFrozen(MrFreeze), true, 'MrFreeze is not frozen')
  });
});*/


//P: Object & Class - frozen object
//R: Return the object as frozen so no other changes can be made to it

//SOLUTION:
//P: Freeze the object so no other changes can be made to it
// Show work
Object.freeze(MrFreeze)



//E
MrFreeze.speak(), "hi", 'MrFreeze was able to be modified'
Object.isFrozen(MrFreeze), true, 'MrFreeze is not frozen'
Object.freeze(MrFreeze), true, 'MrFreeze is frozen'