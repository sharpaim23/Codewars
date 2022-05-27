/*altERnaTIng cAsE <=> ALTerNAtiNG CaSe
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.*/

//SAMPLE TESTS:
/*describe("String.prototype.toAlternatingCase", () => {
  it("should work for fixed tests (provided in the description)", () => {
    Test.assertEquals("hello world".toAlternatingCase(), "HELLO WORLD");
    Test.assertEquals("HELLO WORLD".toAlternatingCase(), "hello world");
    Test.assertEquals("hello WORLD".toAlternatingCase(), "HELLO world");
    Test.assertEquals("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    Test.assertEquals("12345".toAlternatingCase(), "12345");
    Test.assertEquals("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
    Test.assertEquals("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
    Test.assertEquals("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
  });
});*/

//P:Is it only letters and words affected, can this be applied to strings and arrays
//R:Every other letters alternative so Upper to lower vice versa

//SOLUTION:
String.prototype.toAlternatingCase = function () {
  //P:split the word
  //return an array of the word
  //apply the alternative case for that letter
  //join them together
  //show work
  return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}


//E:
"HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld"
"hello world".toAlternatingCase(), "HELLO WORLD"
"HELLO WORLD".toAlternatingCase(), "hello world"
