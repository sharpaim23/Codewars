/*Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A'
For ASCII table, you can refer to http://www.asciitable.com/ */

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getChar(55),'7')
Test.assertEquals(getChar(56),'8')
Test.assertEquals(getChar(57),'9')
Test.assertEquals(getChar(58),':')
Test.assertEquals(getChar(59),';')
Test.assertEquals(getChar(60),'<')
Test.assertEquals(getChar(61),'=')
Test.assertEquals(getChar(62),'>')
Test.assertEquals(getChar(63),'?')
Test.assertEquals(getChar(64),'@')
Test.assertEquals(getChar(65),'A')
  });
});*/

//P: Does this only apply to English characters, can an array of characters be called, or possibly strings of characters
//R: The ASCII results for the chosen characters

//SOLUTION:
function getChar(c){
  //P: Need to turn the integer result into a string
  // fromCharcode after 
  // gets the ASCII code for that Number return as a string 
  // show work
  return String.fromCharCode(c)
}


//E:
getChar(56),'8'
getChar(57),'9'
getChar(58),':'
