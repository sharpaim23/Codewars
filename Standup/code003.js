/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); */

/* Return your answer as a number */


// Array/Strings/Numbers, no letters just strings & nums, sum of the array
// Return the sum of the array if the strings were numbers

//assert.strictEqual(sumMix([9,3'7','3']), 22)
//assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
//assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// Solution
// Arrow Function
// Reduce Method to iterate over the array
// Set the initial value in reduce method to 0
// Addition sign to convert the stings into numbers and then add
const sumMix = x => x.reduce((a, v) => { return +(a) + +(v) }, 0)  


