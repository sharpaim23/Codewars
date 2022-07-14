/*Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice*/

//SAMPLE TESTS:
/*describe("Sample Tests", function(){
  it("should work for sample tests", function(){
    Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
  });
});*/


//P: Can it be an empty array, array of strings, integers, array used inside of another array
//R: A list/array of the first n elements from the list/array

//SOLUTION:
//P: Slice the arr
// Start from the index 0 and n
// Show work
function take(arr, n) {
  return arr.slice(0, n)
}


//E:
take[0,1,2,3,5,8,13], [0,1,2]
take[1,2,3,5], [1,2,3]
take[3,5,8,13], [3,5,8]