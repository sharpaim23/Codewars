/*In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata. */

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(testEven(0), true, "testEven for 0");
Test.assertEquals(testEven(0.5), false, "testEven for 0.5");
Test.assertEquals(testEven(1), false, "testEven for 1");
Test.assertEquals(testEven(2), true, "testEven for 2");
Test.assertEquals(testEven(-4), true, "testEven for 2");
  });
});*/

//P:Can the numbers be strings, or arrays. 
//R: True if the number is even, false if the number is uneven

//SOLUTION:
function testEven(n) {
  //P: else/if
  //number % 2 === 0, true
  //else false
  //show work
  if(n % 2 === 0){
    return true
  }else{
    return false
  }
}


//E:
testEven(0), true
testEven(1), false
testEven(-4), true