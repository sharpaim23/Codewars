/*Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.*/

//SAMPLE TESTS:
/*describe("Solution", function(){
  it("basic tests", function(){
    var input = [ 4, 3, 9, 7, 2, 1 ];
    var expected = [ 2, 9, 3, 49, 4, 1 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);
    
    input = [ 100, 101, 5, 5, 1, 1 ];
    expected = [ 10, 10201, 25, 25, 1, 1 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);
    
    input = [ 1, 2, 3, 4, 5, 6 ];
    expected = [ 1, 4, 9, 2, 25, 36 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);
  });
});*/


//P: Array - numbers, always positive, never empty or null
//R: Return the square root or squared number depending

//SOLUTION:
//P: Map the array
// Square root the number to see if there is a modulus
// If so, multiply it by its self
// If not, get the square root
// Show work
squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x))


//E
input = [ 4, 3, 9, 7, 2, 1 ];
expected = [2, 9, 3, 49, 4, 1];

input = [ 100, 101, 5, 5, 1, 1 ];
expected = [10, 10201, 25, 25, 1, 1];

input = [1, 2, 3, 4, 5, 6];
expected = [1, 4, 9, 2, 25, 36];