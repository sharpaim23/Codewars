/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades' */

//SAMPLE TESTS:
/*const assert = require('chai').assert;

describe("Basic tests",() => {
  it('Testing №1 for "3♣"', () => {
    let actualClubs = defineSuit('3♣');
    assertNotPrinting(actualClubs);
    assert.strictEqual(actualClubs, 'clubs');
  });
  it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
  it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
  it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
  
  function assertNotPrinting(actual) {
    assert.isDefined(actual, 'You have to return the suit. Did you print it to the console instead?\n');
  }
});*/


//P: Deck of cards - preloaded, is it a full deck with jokers
//R: Name the suit of the card

//SOLUTION:
//P: If statement
// Includes to search the array to see if the certain suit is amongst them
// Return the proper suit
// Show work
function defineSuit(card) {
  if(card.includes('♣')) return 'clubs'
  if(card.includes('♦')) return 'diamonds'
  if(card.includes('♥')) return 'hearts'
  if(card.includes('♠')) return 'spades'
}


//E
defineSuit('Q♠'), 'spades'
defineSuit('9♦'), 'diamonds'
defineSuit('J♥'), 'hearts'