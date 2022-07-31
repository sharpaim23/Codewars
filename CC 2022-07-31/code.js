/*Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"*/

//SAMPLE TESTS:
/*describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(replace("Hi!") , "H!!")
Test.assertSimilar(replace("!Hi! Hi!") , "!H!! H!!")
Test.assertSimilar(replace("aeiou") , "!!!!!")
Test.assertSimilar(replace("ABCDE") , "!BCD!")

})})*/


//P:Does this include arrays, or just the character in general,
//R:All vowels with an exclamation mark

//SOLUTION:
//P: Use replace method
// Regex for the vowel replacement
// Also can use split, map, includes, and join 
// Show work
function replace(s){
  return s.replace(/[aeiouAEIOU]/gi, '!')
}


//E:
replace("Hi!") , "H!!"
replace("aeiou") , "!!!!!"
replace("ABCDE") , "!BCD!"