/*Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
Consider an Example :
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
Input >> Output Examples:
expressionsMatter(1,2,3)  ==>  return 9
Explanation:
After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

expressionsMatter(1,1,1)  ==>  return 3
Explanation:
After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

expressionsMatter(9,1,1)  ==>  return 18
Explanation:
After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18. */

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", function() {
  it("Small values", function() {
    assert.strictEqual(expressionMatter(2, 1, 2), 6);
    assert.strictEqual(expressionMatter(2, 1, 1), 4);
    assert.strictEqual(expressionMatter(1, 1, 1), 3);
    assert.strictEqual(expressionMatter(1, 2, 3), 9);
    assert.strictEqual(expressionMatter(1, 3, 1), 5);
    assert.strictEqual(expressionMatter(2, 2, 2), 8);
  });

  it("Medium values", function() {
    assert.strictEqual(expressionMatter(5, 1, 3), 20);
    assert.strictEqual(expressionMatter(3, 5, 7), 105);
    assert.strictEqual(expressionMatter(5, 6, 1), 35);
    assert.strictEqual(expressionMatter(1, 6, 1), 8);
    assert.strictEqual(expressionMatter(2, 6, 1), 14);
    assert.strictEqual(expressionMatter(6, 7, 1), 48);
  });

  it("Mixed values", function() {
    assert.strictEqual(expressionMatter(2, 10, 3), 60);
    assert.strictEqual(expressionMatter(1, 8, 3), 27);
    assert.strictEqual(expressionMatter(9, 7, 2), 126);
    assert.strictEqual(expressionMatter(1, 1, 10), 20);
    assert.strictEqual(expressionMatter(9, 1, 1), 18);
    assert.strictEqual(expressionMatter(10, 5, 6), 300);
    assert.strictEqual(expressionMatter(1, 10, 1), 12);
  });
}); */


//P:All integers are positive, The numbers are in the range (1  ≤  a, b, c  ≤  10), You can use the same operation more than once
//R: This highest result possible

//SOLUTION:
function expressionMatter(a, b, c) {
  //P:get the max result
  //add, multiply, all three parameters
  //show work
  return Math.max(a+b+c, a*(b+c), a*b*c, a*b+c, a+b*c, (a+b)*c)
}


//E:
expressionMatter(1, 10, 1), 12
expressionMatter(9, 1, 1), 18
expressionMatter(1, 8, 3), 27