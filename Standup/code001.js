/*Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.*/


//Strings, Numbers, - divisible by 3 || 5 && both, return strings 'fizz', 'buzz','fizzBuzz'
//Print out the word 'fizz' if the integer is divisible by 3, 'buzz' if by 5, and 'fizzBuzz' if by both
// n = 5 -> 1,2,fizz,4,buzz
// n = 9 -> 1,2,fizz,4,buzz,fizz,7,8,fizz
// n = 15 -> 1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzBuzz

//SOLUTION:
//Function param(num)
function fizzBuzz(num) {
  //set up the for loop
  for (let i = 1; i <= num; i++) {
    //conditional 
    //if i % 3 && i % 5 === 0 -> fizzBuzz
    //console log the result
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
    //if i % 3 === 0 -> fizz
    //if i % 5 === 0 -> buzz

  }
}


// fizzBuzz(5), 1,2,fizz,4,buzz
// fizzBuzz(9), 1,2,fizz,4,buzz,fizz,7,8,fizz
// fizzBuzz(12), 1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzBuzz
