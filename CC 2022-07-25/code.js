/*I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
var arr = [1,2] 
swapValues(arr);
Test.assertEquals(arr[0], 2, "Failed swapping numbers")
Test.assertEquals(arr[1], 1, "Failed swapping numbers")

  });
});*/

//P:can the swap be for empty arrays, arrays involving strings, can theses arrays hold anything
//R: swap the values

//SOLUTION:
//P remove the Array prototype
// add arr to the parameter
// change the variables to arr instead of args
// leave everything else
// show work
function swapValues(arr) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

//E:
arr[0], 2, "Failed swapping numbers"
arr[1], 1, "Failed swapping numbers"