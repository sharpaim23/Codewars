/* Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!*/

//SAMPLE TESTS:
/*describe('method: nextId', function() {
  it('returns the lowestNextId', function() {
    Test.assertEquals(nextId([0,1,2,3,5]), 4);
  });
  it('returns the lowestNextId', function() {
    Test.assertEquals(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
  });
});*/


//P: Can the array be any amount of integers, can there be floating integers, strings
//R: The smallest id for the new data

//SOLUTION:
//P: Sort to sort the array in place and return a sorted array
// Reduce to reduce the array into the sum of the array
// Show work
nextId = ids => ids.sort((a,b) => a-b).reduce((c,d) => c + (c == d), 0)

//E:
nextId([0,1,2,3,5]), 4
nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11
nextId([0, 1, 3]), 2