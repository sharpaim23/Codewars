/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1) */

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


  });
});*/


//Array -> nums, never empty, getting the average, rounded down to integer,
// Return the students grade average rounded down to the nearest integer


// getAverage(77,89,65,94), 81
// getAverage(57,79,55,84), 68
// getAverage(73,92,55,41), 65

//SOLUTION:
// Arrow function
// Reduce method to the array to a single value
// prev and curr for the grade
// add them together 
// divide by the length of grades
const getAverage = marks => Math.floor(marks.reduce((prev,curr) => prev + curr) / marks.length)



