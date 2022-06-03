/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("howMuchILoveYou",function() {
  it("Basic tests",function() { 
    assert.strictEqual(howMuchILoveYou(7),"I love you")
    assert.strictEqual(howMuchILoveYou(3),"a lot")
    assert.strictEqual(howMuchILoveYou(6),"not at all")
  });
})*/

//P:Can there be different flowers with more pedals, What about array of pedals, Strings
//R: The phrase corresponding to the pedal that is picked

//SOLUTION:
//P: else/if 
//starting from 1 to 5
//show work
function howMuchILoveYou(nbpetals){
  if(nbpetals % 6 == 1){
    return 'I love you'
  }else if(nbpetals % 6 == 2){
    return 'a little'
  }else if(nbpetals % 6 == 3){
    return 'a lot'
  }else if(nbpetals % 6 == 4){
    return 'passionately'
  }else if(nbpetals % 6 == 5){
    return 'madly'
  }else{
    return 'not at all'
  }
}


//E:
howMuchILoveYou(7),"I love you"
howMuchILoveYou(3),"a lot"
howMuchILoveYou(6),"not at all"