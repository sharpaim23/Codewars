/*Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.*/


//Strings, Numbers, - divisible by 3 || 5 && both, return strings 'fizz', 'buzz','fizzbuzz'
//Print out the word 'fizz' if the integer is divisible by 3, 'buzz' if by 5, and 'fizzbuzz' if by both

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



// let i;
// for (let i = 1; i < 101; i++){
//   if (i % 15 == 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 == 0) {
//   console.log('Fizz')
//   } else if (i % 5 == 0) {
//   console.log('Buzz')
//   }else console.log(i)
// }

// i(6, 20, 60)
// console.log('Fizz');
// console.log('Buzz');
// console.log('FizzBuzz');