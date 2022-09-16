/*What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(addLength('apple ban'),["apple 5", "ban 3"]);
Test.assertSimilar(addLength('you will win'),["you 3", "will 4", "win 3"]);
  });
});*/


//P: Array - stings, at least one element, words will always be separated by a space
//R: Return an array from a string with the length of each word added to each element.

//SOLUTION:
//P: Split the words in the array
// Map the array for new array
// Template literal the word and word length
// Show work
function addLength(str) {
return str.split(' ').map(word => `${word} ${word.length}`)
}


//E
addLength('apple ban'),["apple 5", "ban 3"]
addLength('you will win'),["you 3", "will 4", "win 3"]
addLength('How bout them Chiefs'),["How 3", "bout 4", "them 4", "Chiefs 6"]
