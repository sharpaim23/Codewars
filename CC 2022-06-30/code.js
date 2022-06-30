/*Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(nameShuffler('john McClane'),'McClane john');
  });
});*/

//P: what about empty strings, or an array, or integers, what about first last and middle names
//R: First name and Last name swapped

//SOLUTION:
function nameShuffler(str){
  //P: create a variable that holds the str.split for the fullName
  // split separates the first and last name in the array
  // then take the fullName in the first index and the fullName in the 0 index
  // join them and make sure to add a space between the quotation marks
  const fullName = str.split(' ')
  return [fullName[1],fullName[0]].join(' ')
}


//E:
nameShuffler('Don Hill'), 'Hill Don'
nameShuffler('Kim Smith'), 'Smith Kim'
nameShuffler('Michael Jordan'), 'Jordan Michael'