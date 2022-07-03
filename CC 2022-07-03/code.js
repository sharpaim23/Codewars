/*Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
    7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep" */

//SAMPLE TESTS:
/*const strictEqual = require('chai').assert.strictEqual;

function doTest (queue, expected) {
	const log = `for queue [${queue.join(', ')}]\n`;
	const actual = warnTheSheep(queue);
	strictEqual(actual, expected, log);
}

describe("Fixed tests", function() {
  it("Tests", function() {
    doTest(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
		"Oi! Sheep number 2! You are about to be eaten by a wolf!"
	);
    doTest(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
		"Oi! Sheep number 5! You are about to be eaten by a wolf!"
	);
    doTest(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
		"Oi! Sheep number 6! You are about to be eaten by a wolf!"
	);
    doTest(["sheep", "wolf", "sheep"],
		"Oi! Sheep number 1! You are about to be eaten by a wolf!"
	);
    doTest(["wolf"],
		"Pls go away and stop eating my sheep"
	);
    doTest(["sheep", "sheep", "wolf"],
		"Pls go away and stop eating my sheep"
	);
  });
});*/


//P: can there be more than one wolf in the array, can the wolf be the only one left in the array
//R: Either tell the wolf to stop eating the sheep or let the sheep in front of the wolf know it is about to be eaten

//SOLUTION:

function warnTheSheep(queue) {
  let location;
  queue.forEach((x,i)=>{x == 'wolf' ? location=queue.length-i : 0});

  return location == 1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${location-1}! You are about to be eaten by a wolf!`; 
}


//E:
doTest(["sheep", "wolf", "sheep"],
"Oi! Sheep number 1! You are about to be eaten by a wolf!"),
doTest(["wolf"],
"Pls go away and stop eating my sheep"),
doTest(["sheep", "sheep", "wolf"],
"Pls go away and stop eating my sheep")