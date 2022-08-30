/*write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.*/

//SAMPLE TESTS:
/*describe("the stringy function", function() {

  it('Should return a string', function() {
    Test.assertEquals(typeof stringy(3), 'string',
    'Make sure it\'s a string not a number (the function is called stringy after all!)');
  });

  it('Should start with a 1', function() {
    Test.assertEquals(stringy(3)[0], '1',
    'Whoops your string doesn't start with a 1?');
  });  

  it('Should have the correct length', function() {  
    for(let i = 0; i < 10; ++i){
      let parameter = (Math.random() * 50 + 1) | 0;
      Test.assertEquals(stringy(parameter).length, parameter, 'Wrong length on ' + parameter);
    }
  });
});*/


//Parameters: String - with only positive whole numbers
//Results: Take in a number and return the correct 1's and 0's

//SOLUTION:
//P:Empty string
// padStart method that pads the current string with another string
// targetLength which is the size
// padString which is the reoccurring 1's & 0's
// Show work
function stringy(size) {
  return ''.padStart(size, '10')
}


//E
stringy(10), '1010101010'
stringy(3), '101'
stringy(20), '10101010101010101010'

