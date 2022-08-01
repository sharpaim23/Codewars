/*Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.*/

// SAMPLE TESTS:
/*describe("The combat() function", function () {
  it("should work for some example tests", function () {
    Test.assertEquals(combat(100, 5), 95);
    Test.assertEquals(combat(92, 8), 84);
    Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");
  });
});*/

//P: Can health be a string or an array of health, array or damages, what about combo damages
//R: The players new health status

//SOLUTION:
//P: Check to see if health is greater/less than damage
// Check to see if health is 0
// If not the sub health from damage
// Arrive at new health
// Show work
function combat(health, damage) {
  return health < damage ? 0 : health - damage
}


//E:
combat(100, 5), 95
combat(92, 8), 84
combat(20, 30), 0, "Health cannot go below 0"