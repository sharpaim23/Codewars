/*You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unnecessary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
    assert.strictEqual(reverse('This is so easy'), 'easy so is This');
    assert.strictEqual(reverse('no one cares'), 'cares one no');
    assert.strictEqual(reverse(''), '');
    assert.strictEqual(reverse('CodeWars'), 'CodeWars');
  })
})*/


//P: What about empty strings, Can this also work on strings within an array, What about one words
//R: The reversed words in a given string

//SOLUTION:
//P: Take the string split it
// Reverse it
// Join it again
// Show work
function reverse(string){
  return string.split(' ').reverse().join(' ')
}

//E:
reverse('I am an expert at this'), 'this at expert an am I'
reverse('This is so easy'), 'easy so is This'
reverse('no one cares'), 'cares one no'