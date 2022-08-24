/*Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realize you are dead, or swim when you realize you can make it!

You are given 5 variables;

sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

sharkSpeed = how fast it can move in meters/second.

pontoonDistance = how far you need to swim to safety in metres.

youSpeed = how fast you can swim in meters/second.

dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!".*/

//SAMPLE TESTS:
/*describe("Example tests",() =>{
Test.assertEquals(shark(12, 50, 4, 8, true), "Alive!");
Test.assertEquals(shark(7, 55, 4, 16, true), "Alive!");
Test.assertEquals(shark(24, 0, 4, 8, true), "Shark Bait!");
});*/

//P: Can there be an array of speeds for both human and shark, can the pontoon in the water floating add or subtract distance from both human and shark
//R: If the human will be eaten to survive the shark speed back to the pontoon boat


//SOLUTION:
//P: Speed divided by distance for both
// Ternary operator
// Return 'Alive' if made it back or 'Shark Bait!' if eaten
// Show work
shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed) > pontoonDistance / youSpeed ? 'Alive!' : 'Shark Bait!'

//E:
shark(12, 50, 4, 8, true), "Alive!"
shark(7, 55, 4, 16, true), "Alive!"
shark(24, 0, 4, 8, true), "Shark Bait!"