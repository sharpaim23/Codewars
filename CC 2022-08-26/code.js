/*Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"*/

//SAMPLE TESTS:
/* describe("reverseWords",function(){
  it("should work for some examples", function(){
    Test.assertEquals(reverseWords("hello world!"), "world! hello")
    Test.assertEquals(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
    Test.assertEquals(reverseWords("foobar"                       ),  "foobar")
    Test.assertEquals(reverseWords("kata editor"                  ),  "editor kata")
    Test.assertEquals(reverseWords("row row row your boat"        ),  "boat your row row row")
  });
});*/


//P: String - needs reversed
//R: Reverse the words in the string

//SOLUTION:
//P: Split the string
// Reverse the words
// Join them again
// Show work
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}


//E
reverseWords("foobar"),  "foobar"
reverseWords("kata editor"),  "editor kata"
reverseWords("row row row your boat"),  "boat your row row row"