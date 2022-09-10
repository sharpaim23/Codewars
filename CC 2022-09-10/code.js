/*Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]*/

//SAMPLE TESTS:
/* describe("Sample tests", function() {
  it("should pass sample tests", function() {
    Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
    Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
    Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
    Test.assertDeepEquals(divisibleBy([0], 4), [0]);
    Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);
  })  
})*/


//P: Two parameters: Array & Divisor - the array is numbers, divisor is dividable by the array
//R: Return all the numbers within the array that is divisible by the divisor

//SOLUTION:
//P: Using the filter method
// element modular the divisor equal to 0
// show work
divisibleBy = (numbers, divisor) => numbers.filter(x => x % divisor == 0)


//E
divisibleBy([1,2,3,4,5,6], 2), [2,4,6]
divisibleBy([1,2,3,4,5,6], 3), [3,6]
divisibleBy([0,1,2,3,4,5,6], 4), [0,4]