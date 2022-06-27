/*Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
or `name` = ""        => return "Hello, World!"*/

//SAMPLE TESTS:
/*const assert = require('chai').assert;
describe("Sample Tests", () => {
  it("should work for sample inputs", () => {
    let actualJohn = hello('johN');
    assert.isDefined(actualJohn, "You have to return a string instead of logging it to the console");
    assert.strictEqual(actualJohn, 'Hello, John!', "returns 'Hello, John!' when given 'johN'");
    assert.strictEqual(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
    assert.strictEqual(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given");
    assert.strictEqual(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string");
  });
});*/

//P: Can there be an array or names or an empty array, are proper names considered Mr or Mrs. 
//R: Hello name for the person name or Hello World for no name given

//SOLUTION:
function hello(name) {
  //P: Name is undefined or with 0 letters
  // return Hello World
  // else return name with proper capitalization and corrected letters to lower case
  // show work
  if (typeof name === "undefined" || name.length === 0) {
    return `Hello, World!`;
  } else {
    return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
  }
}

//E:
hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given"
hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string"
hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'"


