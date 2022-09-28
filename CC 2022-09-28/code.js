/*An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(contamination("abc","z"), "zzz")
Test.assertEquals(contamination("","z"), "")
Test.assertEquals(contamination("abc",""), "")
Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
Test.assertEquals(contamination("//case"," "), "      ")
  });
});*/


//P: Stings - characters and numbers, empty strings, never be two empty strings, character is a string of at least 1 character or an empty string
//R: Return either the empty string or the string of the character

//SOLUTION:
//P: Repeat Method
// Character repeat
// Text length
// Show work
contamination = (text, char) => char.repeat(text.length)


//E
contamination("","z"), ""
contamination("abc",""), ""
contamination("_3ebzgh4","&"), "&&&&&&&&"