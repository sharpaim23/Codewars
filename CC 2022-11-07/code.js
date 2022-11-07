/*In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from a to z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("printerError",function() {
it("Basic tests",function() {   
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "3/56")
})})*/


// Strings -> labels use color named a - m, good -> control string letters a-m, bad -> control string letters not a-m, return error rate,
// Return the error rate of the printer as a string whose numerator is the number of errors and the denominator is the length of the control string. Don't reduce to simpler expression

    //var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    //Test.assertEquals(printerError(s), "3/56")
    //var s="aaaaaaaabbbbbbcccc"
    //Test.assertEquals(printerError(s), "0/18")
    //var s="aaabbbcccdddxxxyyyfff"
    //Test.assertEquals(printerError(s), "6/21")



//SOLUTION 1:
function printerError(s) {
  // create variable 
  result = 0
  // for in statement
  for (let index in s) {
    // if statement to check index is greater than 'm'
    if (s[index] > 'm') {
      // result++ keep looping through the letters
      result++
    }
  }
  // concatenate the result as a fraction
  return result + '/' + s.length
}


//Solution 2:
// arrow function
// template literals
// match method to determine the letters
// regex to decide which letter to match to
// length over length to show non-errors || errors
const printerError = s => `${(s.match(/[n-z]/g) || []).length}/${s.length}`