/*Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"*/

// SAMPLE TESTS:
/*const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(peopleWithAgeDrink(22), 'drink whisky');
    })
  })*/

//P: can there be an array of ages, can the age be a string value
//R: the appropriate drink for the age 

//SOLUTION:
function peopleWithAgeDrink(old) {
  //P: if statement 
  // each major age bracket
  // return the drink with the age
  // show work
if(old >= 21) return 'drink whiskey'
if(old < 14) return 'drink toddy'
if(old < 18) return 'drink coke'
if(old < 21) return 'drink beer'
}


//E:
peopleWithAgeDrink(22), 'drink whisky'
peopleWithAgeDrink(15), 'drink coke'
peopleWithAgeDrink(20), 'drink beer'