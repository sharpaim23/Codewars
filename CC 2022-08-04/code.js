/*Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in the same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
var data = [2,4,5,2];
Test.expect( printArray( data ) ==
  "2,4,5,2", "int test failed" )
  });
});*/

//P: what about the single letter words,  or two worded words, what about numbers,
//R: String with comma delimited elements of the array in the same order

//SOLUTION:
//P: Separate the array
// then join the array
// return the array
// show work
function printArray(array){
  return array.join()
}

//E:
printArray(data), 'd,a,t,a'
printArray(ships), 's,h,i,p,s'
printArray(kickstand), 'k,i,c,k,s,t,a,n,d'