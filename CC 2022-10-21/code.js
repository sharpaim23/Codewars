/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
Test.assertEquals(XO("jhgjhg"),true);
  });
});*/


// Strings -> containing 'x' & 'o', case insensitive, string can contain any char, boolean
// Return a boolean on the strings that contain 'x' & 'o' and if there are == num of 'x' & 'o'

//XO("xxOo"),true
//XO("xxxm"),false
//XO("Oo"),false
//XO("jhgjhg"),true


//SOLUTION:
function XO(str) {
  // declare variables for the 'x' & 'o' set to 0
  let oCount = 0
  let xCount = 0
// for loop to establish the 'x' & 'o' count and to determine if the char are equal to 'x' & 'o' case insensitive
  for (let i = 0; i < str.length; i++){
    let letter = str[i]
    if (letter === 'x' || letter === 'X') {
      xCount++
    } else if (letter === 'o' || letter === 'O') {
      oCount++
    }
  }
  // return xCount === to oCount to see if there are the same num of each within the string
  return xCount === oCount
}



