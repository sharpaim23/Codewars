/*Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).*/

//SAMPLE TESTS:
/*describe("sumOfDifferences([1, 2, 10]", function() {
  Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
});

describe("sumOfDifferences([-3, -2, -1])", function() {
  Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2);
});*/

//P: Can floating integers work as well, strings, nested arrays
//R: Sum of the difference between consecutive pairs in the array in descending order


//SOLUTION:
//P: Ternary Operator
// Arr.length greater than 1
// Math.max spread array
// Minus Math.min spread array
// else 0 
// Show work
sumOfDifferences = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0


//E:
sumOfDifferences([10,2,1]), 9
sumOfDifferences([8,2,1]), 7
sumOfDifferences([5,2,1]), 4