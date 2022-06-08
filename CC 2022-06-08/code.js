/*DESCRIPTION:
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]*/

//SAMPLE TESTS:
/*describe("Basic tests", () => {
  it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
  it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
});*/

//P: Can there be an empty array, what about stings within the array, can there be more than just one array
//R: The range between two numbers within an array

//SOLUTION:
function between(a, b) {
  //P:Let a = 1 and b = 10
  // Determine which number is lower/higher
  // Push lower number to start of array
  // Add 1 to lower number until it is equal to the higher number
  const betweenArray = []

  while(a<=b){
    betweenArray.push(a)
    a++
  }
  return betweenArray
}

//E:
between(1, 4), [1, 2, 3, 4]
between(-2, 2), [-2, -1, 0, 1, 2]
between(6,12), [6,7,8,9,10,11,12]