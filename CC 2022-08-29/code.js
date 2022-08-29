/*Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(capitalizeWord('word'), 'Word');
Test.assertSimilar(capitalizeWord('i'), 'I');
Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');
  });
});*/


//Parameter: Capitalization of the first letter in the string
//Results: Every sting will be capitalized

//SOLUTION:
//P: CharAt the zero index for the first letter
// ToUppercase to capitalize the letter
// Add the rest of the word to the previous letter
// Slice will bring the string together again
// Show work
function capitalizeWord(word) {
  return  word.charAt(0).toUpperCase() + word.slice(1)
}


//E
capitalizeWord('word'), 'Word'
capitalizeWord('i'), 'I'
capitalizeWord('glasswear'), 'Glasswear'