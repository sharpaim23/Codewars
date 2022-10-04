/*Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
Happy hacking! */

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(aliasGen("Mike", "Millington"), "Malware Mike");
Test.assertEquals(aliasGen("Fahima", "Tash"), "Function T-Rex");
Test.assertEquals(aliasGen("Daisy", "Petrovic"), "Data Payload");
Test.assertEquals(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
Test.assertEquals(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");

  });
}); */


//P: Strings - First and last Names, ternary operations, &&
//R: Return one word name in response to the first letter of the first name and one for the first letter of the surname. If the first character from either name given is not A-Z
// Return 'Your name must start with a letter A-Z'

//SOLUTION:
//P: Create the first Letter variable with the string at the 0 index
// Create the variable for the name to check if the character is between a-z
// Check to see if the first letter of the first name and surname are a-z
// If not response will be
// Show work
const firstLetter = str => str[0].toUpperCase()

const isValidName = name => /[a-z]/gi.test(name)

const aliasGen = (fName, sName) =>
  isValidName(fName[0]) && isValidName(sName[0])
    ? `${firstName[firstLetter(fName)]} ${surname[firstLetter(sName)]}`
    : 'Your name must start with a letter from A - Z.'


//E
aliasGen("Fahima", "Tash"), "Function T-Rex"
aliasGen("Daisy", "Petrovic"), "Data Payload"
aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z."