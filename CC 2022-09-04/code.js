/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.*/

//SAMPLE TESTS:
/*describe("Basic tests",() =>{
Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
});*/


//P: Array - numbers, character codes for lower case vowels
//R: Return the checked array for any vowels, if so change the array value to a string of that vowel.

//SOLUTION:
//P: Map to create a new array and to map over the existing array
// charCode to determine if any of the numbers within the array are lower case vowels
// Ternary Operator to then check the remaining of the array with the charCodes
// Change the array if necessary.
// Show work
function isVow(a) {
  return a.map(charCode => /[aeiou]/.test(String.fromCharCode(charCode)) ? String.fromCharCode(charCode) : charCode)
}


//E
isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]