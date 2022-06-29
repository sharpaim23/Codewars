/*Task
Please refer to two example above and write your first JS function.

mission 1:

use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

mission 2:

use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

mission 3:

type the console.log() in the next line(don't forget to put the str in the brackets).

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata */

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.expect(helloWorld, "function helloWorld is not defined")
helloWorld();
  });
});*/

//P: Can this be an arrow function, if else, switch, ternary
//R:  A function that console.logs('Hello World!')

//SOLUTION:
//P: Create a function helloWorld
// define a variable str
// assign it a string of "Hello World"
// console.log(str)
// show work
function helloWorld(){
  const str = 'Hello World!'
  console.log(str);
}


//E:
console.log(str), 'Hello World!';