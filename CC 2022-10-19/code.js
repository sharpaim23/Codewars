/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]*/

//SAMPLE TESTS:
/*const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
    assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
    assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
  });
}); */


// array -> non-negative integers, some with/some without strings, remove the strings, also includes letters, possibly words
// Return a new list with of non-negative integers with no strings

// filter_list([1,2,'a','b']),[1,2]
// filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]


//SOLUTION:
function filter_list(l) {
  // Filter method to filter the array 
  // typeof method to identify and remove the 'string'
  return l.filter(el => typeof el !== 'string')
}

