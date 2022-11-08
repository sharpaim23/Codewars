/*An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

Test.assertEquals(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
  });
});*/


// Arrays -> two arrays, one num is missing from one arr, find the missing num, can be +/-, floating
// Return the number that was deleted from the array

//findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion'
//findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion'
//findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion'


//SOLUTION:
function findDeletedNumber(arr, mixArr) {
  // if else statement
  // does the arrays == 
  if (arr.length == mixArr.length) {
    return 0
  } else {
    // create a new variable to hold the sorted array
    let sortedMix = mixArr.sort((a, b) => a + b)
    // for loop to loop though the array
    for (let i = 0; i < arr.length; i++){
      // if statement to see if the array do not match 
      if (arr[i] != sortedMix[i])
        // if no match return the array with the extra num/element
        return arr[i]
    }
  }
}


// Solution 2:
// arrow function
const findDeletedNumber = (arr, mixArr) =>
  // find method
  // mixArr ! include num return num
  // otherwise return 0
  arr.find(number => !mixArr.includes(number)) || 0
