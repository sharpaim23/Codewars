/*Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(distinct([1]), [1]);
Test.assertSimilar(distinct([1,2]), [1,2]);
Test.assertSimilar(distinct([1,1,2]), [1,2]);
  });
});*/


//P: Can anything be inside the array, strings, negatives, 
//R: A new array after removing the duplicates

//SOLUTION:
//P: Create a new variable for the new array
// Spread the new array 
// Return the new array
// Show work
function distinct(a) {
  let arr = [...new Set(a)]
  return arr;
}


//E:
distinct([1]), [1]
distinct([1,2]), [1,2]
distinct([1,1,2]), [1,2]