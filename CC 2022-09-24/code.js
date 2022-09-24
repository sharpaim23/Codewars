/*Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];*/

//SAMPLE TESTS:
/* describe("Tests", () => {
  it("test", () => {
var arr = ['a', 'b', 'c', 'd', 'e'];
Test.assertSimilar(first(arr), ['a']);
Test.assertSimilar(first(arr, 2), ['a', 'b']);

  });
});*/


//P: Array, Elements - first element of the sequence within an array
//R: Return the first element within an array

//SOLUTION:
//P: Slice Method
// Ternary Operator
// If n equals undefined
// Use either 0,1 or 0, n
// Show work
first = (arr, n) => n == undefined ? arr.slice(0, 1) : arr.slice(0, n)

// Solution 2
const first = (arr, n = 1) => arr.slice(0, n)

//E
first(arr), ['a']
first(arr, 2), ['a', 'b']
first(arr, 4), ['a', 'b', 'c', 'd']