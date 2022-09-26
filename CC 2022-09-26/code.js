/*Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(arr2bin([1,2]), "11")
Test.assertEquals(arr2bin([1,2,3,4,5]), "1111")
Test.assertEquals(arr2bin([1,10,100,1000]), "10001010111")
Test.assertEquals(arr2bin([null]), "0")
Test.assertEquals(arr2bin([true,true,false,15]),"1111")
  });
});*/


//P: Array - numbers and boolean, no float numbers or doubles
//R: Return the binary equivalent of the sum of the array

//SOLUTION:
//P: Ternary operator 
//Reduce Method
// Typeof current value see if it is equal to a number
// If not then the value is 0
// toString to set it to binary
const arr2bin = arr => arr.reduce((prev, curr) => prev + (typeof curr == 'number' ? curr : 0), 0).toString(2)


//E
arr2bin([1,2,3,4,5]), "1111"
arr2bin([1,10,100,1000]), "10001010111"
arr2bin([null]), "0"