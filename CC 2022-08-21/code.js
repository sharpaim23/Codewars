/* Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.*/


//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(include([1,2,3,4], 3), true )
Test.assertEquals(include([1,2,4,5], 3), false)

  });
});*/

//P: Can this array accept any value and type, is there nested arrays
//R: True uf the item belongs to the list, False is not

//SOLUTION:
//P: Array includes
// Look for item
// Returns boolean
// show work
function include(arr, item) {
  return arr.includes(item)
}


//E:
include([1,2,3,4,5,6,8,9], 7), true
include([1,2,3,4,5,6,7,9], 8), true
include([1,2,3,4,5,6,7,8,9],10 ), false