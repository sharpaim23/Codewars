/*Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(SeriesSum(1), "1.00")
Test.assertEquals(SeriesSum(2), "1.25")
Test.assertEquals(SeriesSum(3), "1.39")
Test.assertEquals(SeriesSum(4), "1.49")
  });
});*/


// Strings, Numbers -> only natural nums, get the sum of the series, return it in string formation, round to 2 decimal(toFixed(2))
// Return the sum of the series up to the nth term as a string with 2 decimal places.


//SeriesSum(1), "1.00"
//SeriesSum(2), "1.25"
//SeriesSum(3), "1.39"


//SOLUTION:
function SeriesSum(n) {
  // create a variable establishing the value starting point
  let result = 0
  // for loop
  for (let i = 0; i < n; i++){
    // the result from the for loop added into the series as i continues to increase
    result += 1 / (1 + i * 3)
  }
  // return the result from above using the toFixed(2) method that return a string of the num in two decimal places
  return result.toFixed(2)
}