/*Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.*/

//SAMPLE TESTS:
/*const assert = require('chai').assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getDivisorsCnt(1),  1);
    assert.strictEqual(getDivisorsCnt(10), 4);
    assert.strictEqual(getDivisorsCnt(11), 2);
    assert.strictEqual(getDivisorsCnt(54), 8);
  });
});*/


// Number Theory, divisors, + integers,
// Return a number the count of divisors.

//SOLUTION:
function getDivisorsCnt(n) {
  // declare variable for starting point
  let result = 0
  // for loop for number degression
  for (let i = n; i > 0; i--){
    // if statement if n == i are divisors
    if (n % i == 0) {
      // increase the number through the loop
      result ++
    }
  }
  return result
}

//Solution 2
function getDivisorsCnt(n) {
    // declare variable for starting point
  let result = 0
    // for loop for number progression
  for (let i = 0; i <= n + 1; i++){
    // if statement if n == i are divisors
    if (n % i == 0) {
    // increase the number through the loop
      result ++      
    }
  }
  return result
}