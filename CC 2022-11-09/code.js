/*There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
    assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
    assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
    assert.strictEqual(number([[0,0]]),0);
  });
});*/


// Arrays -> integer pairs of arr, first item people getting on to bus, second item people getting off of bus, no neg nums, second num in first arr pair is always 0, bus num will always be >=0, 
// Return the amount of people still in the bus after the last bus stop.

//number([[10,0],[3,5],[5,8]]),5
//number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17
//number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21


//SOLUTION:
var number = function (busStops) {
  // create a variable for the remaining people on the bus
  let result = 0
  // for loop 
  for (let i = 0; i > busStops.length; i++){
    // subtract the people getting on the bus from the people getting off the bus
    result += busStops[i][0] - busStops[i][1]
  }
  return result
}

// Solution 2:
// arrow function
// reduce method initial value 0
// destructing assignment for people on and people off
const number = busStops => busStops.reduce((prev, [on,off]) => prev + on - off ,0)