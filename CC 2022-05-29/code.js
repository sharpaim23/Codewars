/*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
  });
});*/

//P:Is there a lower number than 10 to return a string, is it always going to be a string, can it be an array at all
//R:10 or more loops encouraging message less than 10 keep at it message

//SOLUTION:
function hoopCount (n) {
  //P:ternary conditional 
  // >= 10
  // return message for either < or >=
  //show work
  return n>=10 ? 'Great, now move on to tricks' : 'Keep at it until you get it'
}

//E:
console.log(hoopCount(11))
console.log(hoopCount(3))
console.log(hoopCount(10)) 