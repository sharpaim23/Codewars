/*This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Notes:

The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(derive(7,8), "56x^7");
Test.assertEquals(derive(5,9), "45x^8");
  });
}); */


//P: Can either number be negative numbers, can they be put into an array of numbers, are there any floating numbers.
//R: Return the expression Numberx^Number

//SOLUTION:
//P: Template literal the parameters
// multiply the coefficient by exponent
// add 'x' '^'
// exponent - 1
// show work
function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`
}


//E:
derive(3,5), "15x^4"
derive(5,5), "25x^4"
derive(11,10), "110x^9"