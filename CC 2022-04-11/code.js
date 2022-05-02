//Given an array of integers.
// Return an array, where the first element is the count of positives numbers anf the second element is sum of the negative numbers. 0 is 
//neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example: For Input:
// [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15], you should return [10,-65].

function countPositivesSumNegatives(input){
  let sumOfPositive = 0;
    let sumOfNegative =0;
    
    if(input == null || input.length < 1){
      return []
    }else{
      input.map(item => {
        if(item > 0){
          sumOfPositive++;
        }else if(item < 0){
          sumOfNegative += item;
        }else{
          return []
        }
      })
    }
      return [sumOfPositive, sumOfNegative]
}