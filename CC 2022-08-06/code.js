/*This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.*/

//SAMPLE TESTS:
/*describe('Fixed Tests', () => {
  it("Test", () => {
    Test.assertSimilar(preFizz(1), [1], `Array should be from 1 to 1`);
    Test.assertSimilar(preFizz(2), [1,2], `Array should be from 1 to 2`);
    Test.assertSimilar(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
    Test.assertSimilar(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
    Test.assertSimilar(preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);
  });
});*/

//P: will n always be positive, can the output be negative integers, what about the array positive or negative, can this be converted to strings
//R: An algorithm that gets you from input to the output

//SOLUTION:
//P: assign a variable to an empty array
// for loop for that array
// push i from for loop to continuously add to the array
// then return arr
// show work
function preFizz(n) {
  let arr = []
  for (let i = 1; i <= n; i++){
    arr.push(i)
  }
  return arr
}

//E:
preFizz(2), [1,2], `Array should be from 1 to 2`
preFizz(3), [1,2,3], `Array should be from 1 to 3`
preFizz(4), [1,2,3,4], `Array should be from 1 to 4`