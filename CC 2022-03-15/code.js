//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//P: Is it always going to be integers? Are we going to be given any special characters? An empty arr ever?
//R: Return 'Even' for even numbers and 'Odd' for odd numbers
//E: If given 2,4,6 should return 'Even'
//   If given 3,5,7 should return 'Odd'
//   If given -2,-4,-6 should return 'Even' despite the negative
//   If given -3,-5,-7 should return 'Odd' despite the negative
//P:  Create a function
function even_or_odd(number) {
  //    Using an if...else statement
  if (number % 2 === 0) {
    //    Figure out if the number given will result in being 'Even' || 'Odd' 
    //    In order to figure out if the number given is 'Even' divide || % the number by 2
    return 'Even';
    //    If the returned result is divisible by 2 || 0 the given number is 'Even'
    //    If the returned result is !divisible || returns a remainder the given number is 'Odd'
  } else {
    return 'Odd';
  }
}
          console.log(even_or_odd(22),(0));
          even_or_odd(73)