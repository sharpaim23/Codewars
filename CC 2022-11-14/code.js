/* **The museum of incredible dull things**
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]*/

//SAMPLE TESTS:
/*const Test = require('@codewars/test-compat');

describe("removeSmallest", function() {
  it("works for the examples", function() {
    Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
    Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
    Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
    Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");
  });
  
  it("returns [] if the list has only one element", function() {
    for (let i = 0; i < 10; ++i) {
      let x = ~~(Math.random() * 400);
      Test.assertSimilar(removeSmallest([x]), [], `Wrong result for ${[x]}`);
    }
  });
  
  function randomArray(length) {
    return Array.from({length: length}, () => ~~(Math.random() * 400));
  }
  
  it("returns a list that misses only one element", function() {
    for(let i = 0; i < 10; ++i) {
      let arr = randomArray(~~(Math.random() * 10) + 1);
      let l = arr.length;
      Test.assertSimilar(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`);
    }
  });
});*/


// Arrays -> arr of nums, remove lowest num, don't reorder arr, or mutate the arr, if multi of same num remove the num @ lowest index, if empty arr/return empty arr
// Return the arr with the smallest num at the smallest index removed. 

//removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]"
//removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]"
//removeSmallest([]), [], "Wrong result for []"

// Solution 1:
function removeSmallest(numbers) {
  // create variables to hold the new arr, length of nums, and starting count 
  let result = [],
    length = numbers.length,
    array = [...numbers],
    count = 0
  // for loop loops through the initial arr
  for (let i = 0; i < length - 1; i++){
    // for loop to arrange the arr
    for (let j = i + 1; j < length; j++){
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  // for loop to iterate through arr
  for (let i = 0; i < length; i++){
    // if statement to check if nums is == to num in index 0 of arr
    if (numbers[i] == array[0]) {
      // if so, break out of function
      break
    }
    // if not, continue though the for loop
    count++
  }
  // for loop again through arr
  for (let i = 0; i < length; i++){
    // if statement to check if i does not == the count num through the for loop
    if (i != count) {
      // if it doesn't then push i to new arr 
      result.push(numbers[i])
    }
  }
  // if does return the new arr
  return result
}

// Solution 2:
// arrow function
// filter method
// indexOf 
// Math.min in the spread of numbers
const removeSmallest = numbers =>  numbers.filter((_, index) => index != numbers.indexOf(Math.min(...numbers)))