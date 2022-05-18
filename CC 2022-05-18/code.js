/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!*/

//SAMPLE TESTS:
/*describe("doubleChar", function() {
  it("works for some examples", function() {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
});*/

//P:Will it always be a string, will there be separate words, account for spaces, will it be both words and integers, negatives and positives,
//R:each char twice for each string



//SOLUTION:
function doubleChar(str) {
  //P:establish an empty string
  let doubleChar = '';
  //loop through that string 
  for(let i = 0; i < str.length; i++){
    //add together each char
    doubleChar += str[i] + str[i];
  }
  //show result
  return doubleChar
}

//E:
doubleChar("abcd"), "aabbccdd"
doubleChar("Adidas"), "AAddiiddaass"
doubleChar("illuminati"), "iilllluummiinnaattii"