/*Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behavior described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.*/

//SAMPLE TESTS:
/*describe("Your 'xor' function/operator", () => {
  it("should work for the four basic cases described above", () => {
    Test.assertEquals(xor(false, false), false, "false xor false === false");
    Test.assertEquals(xor(true, false), true, "true xor false === true");
    Test.assertEquals(xor(false, true), true, "false xor true === true");
    Test.assertEquals(xor(true, true), false, "true xor true === false");
    Test.assertNotEquals(xor(true, true), true, "'xor' is NOT identical to 'or'");
  });
});*/

//P: can either be an array, or strings, integers, floating, negative, undefined
//R: If the parameters are are equal either parameter can be equivalent a || b

//SOLUTION:
function xor(a, b) {
  //P:if else statement 
  // if a is equal to be then false
  // || if a or b equal true than true
  // otherwise false
  // show work
  if(a == b){
    return false
  }else if(a || b == true){
    return true
  }else{
    return false
  }
}


//E:
xor(true, false), true, "true xor false === true"
xor(false, true), true, "false xor true === true"
xor(true, true), false, "true xor true === false"