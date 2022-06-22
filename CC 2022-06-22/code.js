/*Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18*/

//SAMPLE TESTS:
/*const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual( howManyLightsabersDoYouOwn(), 0 )
    assert.strictEqual( howManyLightsabersDoYouOwn("Adam"), 0 )
    assert.strictEqual( howManyLightsabersDoYouOwn("Zach"), 18 )
    })
})*/

//P: Is it possible to have negative integer, what about an array of different ones, does physical lightsabers count or another form
//R: The name of the programmer and how many lightsabers they own

//SOLUTION:
function howManyLightsabersDoYouOwn(name) {
  //P: If the name is not Zach
  // Who owns 18 
  // Then the answer is 0
  // Show work
  return name === 'Zach' ? 18 : 0
}


//E:
howManyLightsabersDoYouOwn(), 0 
howManyLightsabersDoYouOwn("Adam"), 0 
howManyLightsabersDoYouOwn("Zach"), 18 