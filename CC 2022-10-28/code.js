/*Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
i.e.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
  })
})*/


// Strings -> list of strings, returns a list with only friends, friend with 4 >= is not a friend, 4 <= is a friend
// Return a new list of friends from a list of strings. Any name 4 > not friend, 4 < is friend

//friend(['Ryan', 'David', 'Josh', 'Alexander'])
//friend(['Samuel', 'Steven', 'Case', 'Peter'])
//friend(['Brad', 'Matt', 'Kyle', 'Will'])


//SOLUTION:
function friend(friends) {
  // declare a new variable for the new array of friends
  let result = []
  // for loop through the list of established friends to get friends.length
  for (let i = 0; i < friends.length; i++){
    // if else of the friends the == 4 in their name
    if (friends[i].length == 4) {
      // push to new array of friends
      result.push(friends[i])      
    }
  }
  // return declared variable
  return result 
}

//Solution 2:
const friend = friends => friends.filter(friend => friend.length == 4)


