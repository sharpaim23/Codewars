/*Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.*/

//SAMPLE TESTS:
/*const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
	const actual = remove(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", function () {
	it("sample tests", function () {
		doTest("Hi!", "Hi");
		doTest("Hi!!!", "Hi!!");
		doTest("!Hi", "!Hi");
		doTest("!Hi!", "!Hi");
		doTest("Hi! Hi!", "Hi! Hi");
		doTest("Hi", "Hi");
	});
});*/


//P: can this be used in an array of words, only one exclamation point will be removed
//R: remove an exclamation point from the end of the word

//SOLUTION:
//P:string length - 1 to select the '!' due to the 0 index
// see if there is any character in that index that is equal to the '!'
// sting slice the word starting point 0 for the first letter, end with the last letter
// remove the character if it is equal to '!'
// show work
function remove (string) {
  return string[string.length - 1] === '!' ? string.slice(0, string.length - 1) : string
}

//E:
doTest("Hi!!!", "Hi!!")
doTest("!Hi", "!Hi")
doTest("!Hi!", "!Hi")