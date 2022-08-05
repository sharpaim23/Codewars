/*Variable assignment
Fix the variables assignments so that this code stores the string 'devLab' in the variable name.*/

//SAMPLE TESTS:
/*describe('variable assignment', () => {
  it('should set variable a', () => {
    Test.assertEquals(a, 'dev')
  })
  it('should set variable b', () => {
    Test.assertEquals(b, 'Lab')
  })
  it('should set variable name', () => {
    Test.assertEquals(name, 'devLab')
  })
}) */

//P: Fixing the variable assignment  = to assign, == is equal in value, === is equal to value and type
//R: The corrected variable assignment to return the string 'devLab'

//SOLUTION:
//P: Remove the extra = 
var a = "dev"
var b = "Lab"

var name = a + b

//E:
name = 'devLab'
