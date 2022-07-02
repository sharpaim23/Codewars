/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata*/

//SAMPLE TESTS:
/*const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

it("sample tests", () => {
  doTest('hello', 'hll');
  doTest('how are you today?', 'hw r y tdy?');
  doTest('complain', 'cmpln');
  doTest('never', 'nvr');
});*/

//P: can this work an arrays, what if the word is all vowels, or no vowels
//R: The word without the vowels

//SOLUTION:
function shortcut (string) {
  //P: vowels need to be replaced
  // string.replace the vowels
  // show work
  return string.replace(/[aeiou]+/g,'');
}


//E:
doTest('how are you today?', 'hw r y tdy?');
doTest('complain', 'cmpln');
doTest('never', 'nvr');