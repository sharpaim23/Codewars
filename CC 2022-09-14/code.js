/*At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age]. */

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
  });
});*/


//P: Array - numbers only, in any order, whole numbers
//R: Return the age difference between the youngest and oldest family member

//SOLUTION:
//P: Math.min & .max
// To get youngest and oldest ages
// Then subtract Math.max from .min
// Within the array
// Show work
differenceInAges = ages => [Math.min(...ages),Math.max(...ages), Math.max(...ages) - Math.min(...ages)]



//E
differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]
differenceInAges([57, 99, 14, 32]), [14, 99, 85]
differenceInAges([65, 89, 11, 22]), [11, 89, 78]