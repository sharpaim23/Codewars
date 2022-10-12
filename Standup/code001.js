/*Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.*/


//Strings, Numbers, - divisible by 3 || 5 && both, return strings 'fizz', 'buzz','fizzbuzz'
//Print out the word 'fizz' if the integer is divisible by 3, 'buzz' if by 5, and 'fizzbuzz' if by both
// n = 5 -> 1,2,Fizz,4,Buzz
// n = 9 -> 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz
// n = 15 -> 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,fizz,13,14,FizzBuzz

//SOLUTION:
//Declare variable
let i;
//set up the for loop
for (let i = 1; i < 101; i++){
  //if else statement for the 3,5, & 3&5 divisible 
  //console log the result
  if (i % 15 == 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
  console.log('Fizz')
  } else if (i % 5 == 0) {
  console.log('Buzz')
  }else console.log(i)
}


// FizzBuzz(5), 1,2,Fizz,4,Buzz
// FizzBuzz(9), 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz
// FizzBuzz(12), 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,fizz,13,14,FizzBuzz
