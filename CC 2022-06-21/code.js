/*Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getRealFloor(1), 0);
Test.assertEquals(getRealFloor(5), 4);
Test.assertEquals(getRealFloor(15), 13);
  });
});*/

//P: What if there is not higher than 13 floors, can there be an array of floors, or what about an empty floor
//R: The European system floor number instead of the American system floor number. The equivalent.

//SOLUTION:
function getRealFloor(n) {
  //P: N less than the 13th floor
  // If not n - 2 to compensate the 13th floor in the American system
  // Or n less than 0 
  // If not n - 1 for the American system first floor 
  // Or just n for the European system ground floor
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}


//E:
getRealFloor(1), 0
getRealFloor(5), 4
getRealFloor(15), 13