/*What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertSimilar([1,2,3,4].filter((num)=>{ return num > 3}), [4])

  });
});*/


//P: Array, Filter - Use the filter method on the array
//R: Implement the filter Array.prototype.filter function on the array given

//SOLUTION:
//P: Declare a variable set equal to an empty array
// For loop for the new array
// Push new values into the new array
// return the variable declared from the beginning 
// Show work
Array.prototype.filter = function (func) {
  let result = []

  for (let i = 0; i < this.length; i++){
    if (func(this[i])) {
      result.push(this[i])
    }
  }
  return result
}


//E
[1,2,3,4].filter((num)=>{ return num > 3}), [4]
[1,2,16,24].filter((num)=>{ return num > 2}), [16,24]
[20,55,62,13].filter((num)=>{ return num > 55}), [62]