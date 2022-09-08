/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


  });
});*/


//P: Array - numbers, find the average, never empty, round down to the nearest integer
//R: Find the mean of the array

//SOLUTION:
//P: Reduce the array
// Then divide the array by its length
// Round it down to the nearest integer
// Show work
getAverage = marks => Math.floor(marks.reduce((prev,curr) => prev + curr) / marks.length)


//E
getAverage([2,2,2,2]),2
getAverage([1,2,3,4,5,]),3
getAverage([1,1,1,1,1,1,1,2]),1