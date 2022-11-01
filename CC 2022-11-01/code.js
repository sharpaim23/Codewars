/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("longest",function() {
it("Basic tests",function() {
    Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
})})*/


// Strings -> s1/s2, only letters from a to z, sorted string, longest possible, containing distinct letters, taken only once from s1/s2
// Return the longest possible sorted string containing distinct letters each taken only once from params s1 and s2

//longest("aretheyhere", "yestheyarehere"), "aehrsty"
//longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu"
//longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy"

//SOLUTION:
// Arrow function
// spread operator
// Set method adding both params
// sort method
// join method
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')