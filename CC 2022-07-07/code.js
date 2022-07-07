/*The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("The Wide-Mouthed frog! ", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(mouthSize("toucan"),"wide")
    assert.strictEqual(mouthSize("ant bear"),"wide")
    assert.strictEqual(mouthSize("alligator"),"small")
  })
}*/

//P: can there be another animal with a small mouth, what about crocodiles, can this be put into an array, integers
//R: small mouth if the frog is talking to an alligator or wide if it is not


//SOLUTION:
function mouthSize(animal) {
  //P: make sure the case sensitive is set to lower case
  // ternary operation 
  // else if
  // show work
return (animal.toLowerCase() == 'alligator' ? 'small' : 'wide')
}



//E:
mouthSize("toucan"),"wide"
mouthSize("ant bear"),"wide"
mouthSize("alligator"),"small"