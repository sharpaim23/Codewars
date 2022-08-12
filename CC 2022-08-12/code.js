/*This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.expect(websites.length > 0, 'The array is still empty')
Test.expect(websites.length == 1000, 'The array does not equal 1,000')
Test.expect(websites.every(function(e){return e == 'codewars';}), 'Every element in the array must contain the value "codewars"');
  });
});*/

//P: Can this array at all be shorter than 1000, will it always be a string inside the array,
//R: Codewars 1000 times within the array

//SOLUTION:
//P: While checks the condition first
// length of websites less than 1000
// push 'codewars'
// show work
// add the value "codewars" to the websites array 1,000 times
var websites = []
  while (websites.length < 1000) websites.push('codewars')

//E:
websites.length > 0, 'The array is still empty'
websites.length == 1000, 'The array does not equal 1,000'
websites.every(function(e){return e == 'codewars';}), 'Every element in the array must contain the value "codewars"'