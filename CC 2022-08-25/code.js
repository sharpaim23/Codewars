/*It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(bonusTime(10000, true), '£100000');
    assert.strictEqual(bonusTime(25000, true), '£250000');
    assert.strictEqual(bonusTime(10000, false), '£10000');
    assert.strictEqual(bonusTime(60000, false), '£60000');
    assert.strictEqual(bonusTime(2, true), '£20');
    assert.strictEqual(bonusTime(78, false), '£78');
    assert.strictEqual(bonusTime(67890, true), '£678900');
  })
})*/


//P: Can bonus and salary equal ever, What determines the bonus to be a boolean
//R: If the bonus is true return salary x10, if false return salary x1

//SOLUTION:
//P:Ternary operator
// Salary multiplied by bonus
// If true x10
// If false x1
// Show work 
bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}` 

//E:
bonusTime(25000, true), '£250000'
bonusTime(10000, false), '£10000'
bonusTime(60000, false), '£60000'