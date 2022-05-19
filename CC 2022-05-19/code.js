/*Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(goals(0,0,0), 0)
Test.assertEquals(goals(43, 10, 5), 58)
  });
});*/

//P: The goals integer will always be positive, will it be an array, 
//R:All the goals from all three leagues total

//SOLUTION:
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  //P:add all three leagues together
  //return total
  //show work
  let total = laLigaGoals + copaDelReyGoals + championsLeagueGoals
  return total
}


//E:
goals(0,0,0), 0
goals(43, 10, 5), 58
goals(1,2,3), 6