/*In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
[1, 2, 3, 4]  -> [4, 3, 2, 1]
[9, 2, 0, 7]  -> [7, 0, 2, 9] */

//SAMPLE TESTS:
/*describe("reverseList", function(){
  it("should reverse some sample arrays", function(){
    Test.assertSimilar(reverseList([1,2,3,4]), [4,3,2,1]);
    Test.assertSimilar(reverseList([3,1,5,4]), [4,5,1,3]);
  });
});*/

//P: Can the list be an empty array, negative integers, strings, words
//R: The list in reverse order

//SOLUTION:
function reverseList(list) {
//P: List being the parameter
// List.reverse would work in the simplicity
// Show work
return list.reverse()

}

//E:
reverseList([1,2,3,4]), [4,3,2,1]
reverseList([2,5,8,7]), [7,8,5,2]
reverseList([3,1,5,4]), [4,5,1,3]
reverseList([2,5,8,7]), [7,8,5,2]