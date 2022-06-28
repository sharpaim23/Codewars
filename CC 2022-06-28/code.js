/*We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.*/

//SAMPLE TESTS:
/*describe('#arr creates a new array with the numbers 0 to N-1',() =>{
  it('should return an array',_=>Test.expect(arr() instanceof Array));
  it('should return a blank array when called with no argument',_=>Test.assertSimilar(arr(), []));
  it('should return 0 to 3 when called with 4',_=>Test.assertSimilar(arr(4), [0,1,2,3]));
});*/


//P: Can the array be filled with strings, negative integers, infinite numbers
//R: An array from an set amount of numbers


//SOLUTION:
//P: N is the array
// Array.from to start the array
// For the length of N
// To the end of i
// show work
const arr = N => Array.from({length: N}, (_,i) => i)


//E:
arr(4), [0,1,2,3]
arr(6), [0,1,2,3,4,5]
arr(10), [0,1,2,3,4,5,6,7,8,9]