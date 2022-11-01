/*Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(stringTransformer('Example string'), 'STRING eXAMPLE');
  });
});*/


// Strings -> new string that change the case of every character, lower to upper case, reverse the order of words from the input
// Return Reverse order of words from the input to a new string that change the case of every character.

//stringTransformer('Example string'), 'STRING eXAMPLE'
//stringTransformer('White House'), 'hOUSE wHITE'
//stringTransformer('pRETTY Penny'), 'pENNY Pretty'

//SOLUTION 1:
function stringTransformer(str) {
  // split method
  // map method
  // replace regex globally
  return str.split` `.map(v => v.replace(/./gi, v => {
    // if statements if === lower case to upper case
    if (v === v.toLowerCase()) return v.toUpperCase()
    // if statement if === upper case to lower case
    if (v === v.toUpperCase()) return v.toLowerCase()
    // reverse method
    // join string
  })).reverse().join` `
}

//Solution 2:
// Arrow function
// replace method for the character class, globally
// Ternary Operator upper to lower case
// split method
// reverse method
// join string
const stringTransformer = (s) => s.replace(/./g,m=>m.toUpperCase()==m?m.toLowerCase():m.toUpperCase()).split(' ').reverse().join(' ')