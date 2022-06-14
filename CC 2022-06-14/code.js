/*For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
  });
});*/

//P: Can there ever be empty array, or empty strings, what about books can there be more bad than good, what about more than two goods
//R: One good idea "Publish", two good ideas "I smell a series", no good ideas "Fail!"

//SOLUTION:
function well(x){
  //P: Loop over every array element 
  // Check if the current element is 'good'
  // If yes (=good), increase the counter of good
  // Return the result string depending on the counter
  let num = 0;
  for(let i = 0; i < x.length; i++){
    x[i] === 'good' ? num++ : num;
  }
  if(num > 2){
    return 'I smell a series!';
  } else if(num >= 1 && num <= 2){
    return 'Publish!';
  } else{ 
    return 'Fail!';
  }
}

//E:
well(['bad', 'bad', 'bad']), 'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!'