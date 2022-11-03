/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("validatePIN", function() {
  it("should return False for pins with length other than 4 or 6", function() {
    Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
    Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
    Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
    Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
    Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
    Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
    Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
    Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
    Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
  });
  
  it("should return False for pins which contain characters other than digits", function() {
    Test.assertEquals(validatePIN("a234"),false, "Wrong output for 'a234'")
    Test.assertEquals(validatePIN(".234"),false, "Wrong output for '.234'")
  });
  
  it("should return True for valid pins", function() {
    Test.assertEquals(validatePIN("1234"),true, "Wrong output for '1234'");
    Test.assertEquals(validatePIN("0000"),true, "Wrong output for '0000'");
    Test.assertEquals(validatePIN("1111"),true, "Wrong output for '1111'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("098765"),true, "Wrong output for '098765'");
    Test.assertEquals(validatePIN("000000"),true, "Wrong output for '000000'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("090909"),true, "Wrong output for '090909'");
  });
});*/


// Numbers, Strings -> can only be a length of 4 || 6, nums only +, no floating integers, has to pass as valid string, no special characters
// Return True if the pin matches a valid string and is only 4 || 6 digits in length, false if not


//validatePIN("1234"),true, "Wrong output for '1234'"
//validatePIN("0000"),true, "Wrong output for '0000'"
//validatePIN("1111"),true, "Wrong output for '1111'"

//SOLUTION:
function validatePIN(pin) {
  //if else statement
  // check pin to see if not 4 && 6
  if (pin.length != 4 && pin.length != 6) {
    return false
  }
  // for loop
  for (let i = 0; i < pin.length; i++){
    // if statement to check if pin for special characters
    if (pin[i] > '9' || pin < '0') {
      return false
    }
  }
  return true
}

//Solution 2:
// arrow function
// regex looks for digits length of 4 || 6
// test method to test the pin
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin)