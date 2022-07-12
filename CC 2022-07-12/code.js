/*Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?*/

//SAMPLE TESTS:
/*describe('fix add five', () => {
  it('fixed tests', () => {
    Test.assertEquals(addFive(5), 10)
    Test.assertEquals(addFive(0), 5)
    Test.assertEquals(addFive(-5), 0)
  })
})*/

//P:Fixing the broken code
//R: The corrected code to return any number + 5


//SOLUTION:
//P: Old version had return num
// change num to total
// show work
function addFive(num) {
  var total = num + 5
  return total
}


//E:
addFive(5), 10
addFive(0), 5
addFive(-5), 0