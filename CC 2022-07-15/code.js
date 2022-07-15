/*Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.expectNoError(main)
Test.assertEquals(main('take ', 'item'), 'take item')
Test.assertEquals(main('use ', 'sword'), 'use sword')
  });
});*/

//P: Can this function be fixed any other way besides replacing the brackets and adding a curly bracket
//R: The corrected function

//SOLUTION:
//P: Change the square brackets to parentheses
// Add another curly bracket after the parentheses 
// Show work
function main(verb, noun){
  return verb + noun
}


//E:
main('sit ', 'down'), 'sit down'
main('stand ', 'up'), 'stand up'
main('never ', 'stop'), 'never stop'