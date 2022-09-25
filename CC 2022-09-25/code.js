/*Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order. */

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;

chai.config.truncateThreshold = 0;

describe('Test Cases', function() {
  const lst = [3, 5, 8, 13];

  it('Should return cascading lists of 1 element', function() {
    assert.deepEqual(eachCons(lst, 1), [[3], [5], [8], [13]]);
  });
  
  it('Should return cascading lists of 2 element', function() {
    assert.deepEqual(eachCons(lst, 2), [[3,5], [5,8], [8,13]]);
  });
  
  it('Should return cascading lists of 3 element', function() {
    assert.deepEqual(eachCons(lst, 3), [[3,5,8], [5,8,13]]);
  });
  
  it('Empty list should return an empty list', function() {
    assert.deepEqual(eachCons([], 3), []);
  });
});*/


//P: Arrays, Cascading Subsets -  array with cascading subsets, n being length of said subset
//R: Return an array with cascading subset with n length

//SOLUTION:
//P: Map method
// Slice from the starting point of the index
// Filter the array with the length 
// Show work
function eachCons(array, n) {
	return array.map( (x,e) => array.slice(e,e + n)).filter(x => x.length == n)
}


//E
eachCons(lst, 2), [[3, 5], [5, 8], [8, 13]]
eachCons(lst, 2), [[3, 5], [5, 8], [8, 13]]
eachCons([], 3), []
