/*Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilities. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)*/

//SAMPLE TESTS:
/*describe("Basic tests", function(){
Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);
});*/


//Array -> no duplicates, is there ever an empty array, pick exact element from each subarray
// Return the unique array that can be found by picking exactly one element from each subarray

//solve([[1,2],[4],[5,6]]),4
//solve([[1,2],[4,4],[5,6,6]]),4
//solve([[1,2],[3,4],[5,6]]),8


//SOLUTION:
function solve(arr) {
  //create a variable
  // map the new array
  // new Set spread to transform it into an array
  const newArr = arr.map(array => [...new Set(array)].length)
  // reduce method on new array to ultimately receive a single value.
  return newArr.reduce((acc, num) => acc * num)
};

