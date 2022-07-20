/*As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

Lynn: Alan, there’s that teacher chap.
Alan: Michael, if he hits me, will you hit him first?
Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
Alan: Yeah, chicken stock.
Phil: Hello Alan.
Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
Lynn: What do you mean?
Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

Task
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages).*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Alan Partridge II - Apple Turnover", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(apple('50'), 'It\'s hotter than the sun!!'); 
    assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 
  })
});*/

//P:
//R:

//SOLUTION:
//P:
function apple(x){
  if (x ** 2 > 1000) {
    return 'It\'s hotter then the sun!!'
  } else {
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
  }
}



//E:
apple('50'), 'It\'s hotter than the sun!!' 
apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.' 
apple(2), 'Help yourself to a honeycomb Yorkie for the glovebox.' 
