/*When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(position("a"),"Position of alphabet: 1");
Test.assertEquals(position("z"),"Position of alphabet: 26");
Test.assertEquals(position("e"),"Position of alphabet: 5");
  });
}); */

//P: Does this also apply to the alphabet in reverse order
//R: The position of each letter  in the alphabet

//SOLUTION:
//P: Template literal for the position
// charCodeAt returns an integer 
// show work
function position(letter){
return `Position of alphabet: ${letter.charCodeAt() - 96}`
}

//E:
position("c"), "Position of alphabet: 3"
position("v"), "Position of alphabet: 22"
position("h"), "Position of alphabet: 8"