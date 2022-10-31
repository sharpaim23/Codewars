/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution('abcde', 'cde'), true)
Test.assertEquals(solution('abcde', 'abc'), false)
});
});*/


//Strings -> can be an characters, nums, empty strings
// Return true if the first argument (string) passed in ends with the second argument (string), if not return false

//solution('abcde', 'cde'), true
//solution('abcde', 'abc'), false
//solution('fghijk', 'ijk'), true

//SOLUTION 1:
function solution(str, ending) {
  // if else 
  // typeof if param != match 'string' || ending != 'string'
  if (typeof str != 'string' || typeof ending != 'string') {
    return false
    // else if params match
  } else if (str === '' || ending === '') {
    return true
    // else 
  } else {
    // create a variable for result
    let result
    // for loop the ending length starting backwards
    for (let i = ending.length; i > 0; i--){
      // if else str && ending match
      if (str[str.length - i] == ending[ending.length - i]) {
        result = true
        // else
      } else {
        result = false
        break
      }
    }
    return result
  }
}

//Solution 2:
// Arrow function 
// endsWith() method 
const solution = (str, ending) => str.endsWith(ending)

