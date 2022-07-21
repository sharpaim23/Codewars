/*Complete the function which converts a binary number (given as a string) to a decimal number.*/

//SAMPLE TESTS:
/*describe("Example Tests", () => {
  [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => Test.assertEquals( binToDec(inp), exp ) )
});*/

//P: Can this be used on arrays, negative integers, empty strings, empty arrays
//R: A binary number (given as a string) to a decimal number.

//SOLUTION:
//P: ParseInt the parameter
// Use the appropriate radix
// Show work
function binToDec(bin) {
  return parseInt(bin, 2)
}

//E:
["1", 1]
["0", 0]
["1001001", 73]