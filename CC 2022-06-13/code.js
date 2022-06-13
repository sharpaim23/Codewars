/*Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super" */

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message)
Test.assertEquals(new Ball().ballType, "regular");
Test.assertEquals(new Ball("super").ballType, "super");
  });
});*/

//P:Can there be an array of ball types, can ball types be integers
//R: Ball types class for new Balls

//SOLUTION:
let Ball = function(ballType){
  // Ternary expression for balltype
  // or 'regular' if balltype is empty
  //show work
  return { ballType : ballType || "regular"}
}


//E:
new Ball().ballType, "regular"
new Ball("super").ballType, "super"
new Ball("bouncy").balltype, "bouncy"