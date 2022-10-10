/*Prolog:
This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

Task:
Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
42, "number"   --> true
"42", "number" --> false */

//SAMPLE TESTS:
/*describe("Basic Tests", function() {
  Test.assertEquals(typeValidation(42, "number"), true);
  Test.assertEquals(typeValidation("42", "number"), false);
});*/


//P: Function - two params, variables are matching,
//R: Return true if the variables match, false if not.

//SOLUTION:
//P: Arrow function
// typeOf operand for the type of v
// Ternary operator for the boolean
// Show work
typeValidation = (v, t) => typeof v == t ? true : false 


//E
typeValidation(42, "number"), true
typeValidation("42", "number"), false