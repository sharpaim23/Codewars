/*Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!*/

//SAMPLE TESTS:
/*describe("Fix Timmy's Counter", function() {
  it("Fixed Tests", function() {
    Test.assertSimilar(createArray(1),[1]);
    Test.assertSimilar(createArray(2),[1,2]);
    Test.assertSimilar(createArray(3),[1,2,3]);
    Test.assertSimilar(createArray(4),[1,2,3,4]);
    Test.assertSimilar(createArray(5),[1,2,3,4,5]);
  });
});*/

//P:What is the function missing, is a new array being created or modified
//R:Fix the function error

//PREVIOUS FUNCTION:
function createArray(number){
  var newArray = []
  for(var counter = 1; counter <= number;){
    newArray.push(counter)
  }
}

//P: No counter continuing 
//add counter++ 
//show work

//SOLUTION:
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

//E:
createArray(4),[1,2,3,4]
createArray(2),[1,2]
createArray(5),[1,2,3,4,5]