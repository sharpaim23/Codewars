/*Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!*/

//SAMPLE TESTS:
/*const assert = require('chai').assert


describe('Fixed Tests', function(){
  it('Fixed Tests', function(){
    assert.strictEqual(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
    assert.strictEqual(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
    assert.strictEqual(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');
  })
});*/


//P: Template literal - issue
//R: Fix the issue and correct the Template literal

//SOLUTION:
//P: Change the # to $
// Show work
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}


//E
`I like #{template.join(', ')}!`