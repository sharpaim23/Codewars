/* Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4*/

//SAMPLE TESTS:
/*describe('get average', function () {
  it('should return the average', function () {
    Test.assertEquals(findAverage([1]), 1)
    Test.assertEquals(findAverage([1, 3, 5, 7]), 4)
  })
})*/


//P: Array - find the mean of the array, numbers only
//R: Finding the mean of the entire array

//SOLUTION:
//P: For loop
// Starting index at 0
// Less than nums.length
// Return the result / nums.length
// Show work
var findAverage = function(nums){
  result = 0
  for (let i = 0; i < nums.length(); i++){
    result += nums[i]
  }
  return result / nums.length
}

//Solution 2:
//P: Reduce Method
// Function arrow
// Divided by nums.length
//Show work

var findAverage = nums => nums.reduce((a,b) => a + b) / nums.length

//E    
findAverage([1]), 1
findAverage([1, 3, 5, 7]), 4
findAverage([2,4,6,12]), 6