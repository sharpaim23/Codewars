/*Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]*/

//Sample Tests
/*describe("Basic tests",() => {
  Test.assertDeepEquals(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
  Test.assertDeepEquals(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
  Test.assertDeepEquals(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
});*/

// Array -> Numbers -> new array, containing the last even nums from original array, original array will not be empty && will contain at least 'number' even numbers
// Return a new array containing the last even nums from original array.


//evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
//evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
//evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])


//Solution:
function evenNumbers(array, number) {
  // declare a new array 
  let result = []
  // for loop the index and push to the new array declared
  for (let i = 0; i <= array.length; i++){
    if (array[i] % 2 == 0) {
      result.push(array[i])
    }
  }
  // slice the new array for the last even nums 
  return result.slice(-number)
}

//Solution2:
// arrow function
// filter method for the elem to find the even nums
// slice the new array for the last even nums in the new array
const evenNumbers = (array,number) => array.filter(elem => elem % 2 == 0).slice(-number)