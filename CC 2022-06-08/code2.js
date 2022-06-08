/*Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15*/

//SAMPLE TESTS:
/*describe('move function', () => {
  it('basic tests', () => {
    Test.assertEquals(move(0, 4), 8);
    Test.assertEquals(move(3, 6), 15);
    Test.assertEquals(move(2, 5), 12);
  })
})*/

//P: Can there be more dice added to the game, what happens if less dice were used, what happens if the player loses a turn
//R: The new position of said player once the dice is rolled

//SOLUTION:
function move (position, roll) {
  //P: Take player current position
  // Roll the dice
  // Multiply it by two
  // Gives current players new position
  // Show work
  return position + roll *2
}

//E:
move(0, 4), 8
move(3, 6), 15
move(2, 5), 12