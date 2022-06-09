/*
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
Test.assertEquals(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
Test.assertEquals(sayHello('Lieutenant Uhura'), 'Hello, Lieutenant Uhura')
Test.assertEquals(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
  });
});*/

//P: Can the greeting just be an empty string, what happens if there is more than one person entering, can the names be in arrays
//R: A Hello greeting followed by the persons name

//SOLUTION:
function sayHello(name) {
  //P: Use template literal
  // backticks and Hello followed by the name parameter
  // show work 
  return `Hello, ${name}`
}


//E:
sayHello('Mr. Spock'), 'Hello, Mr. Spock'
sayHello('Captain Kirk'), 'Hello, Captain Kirk'
sayHello('Dr. McCoy'), 'Hello, Dr. McCoy'