/*There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
Test.assertEquals(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
Test.assertEquals(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");

  });
});*/


//P: String - Polish alphabet, replace using diacritics,
//R: Print out the string without the use of the Polish letters

//SOLUTION:
//P: Replace method
// Regex for the Polish letters
// Function replacer for the replacement of letters
// IndexOf the replacer to replace the letters
// Show work
correctPolishLetters = string => string.replace(/[ąćęłńóśźż]/g, replacer => 'acelnoszz'['ąćęłńóśźż'.indexOf(replacer)])


//E
correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski"
correctPolishLetters("Lech Wałęsa"),"Lech Walesa"
correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie"