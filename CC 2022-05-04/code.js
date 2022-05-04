/*Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.*/


function isDivideBy(number, a, b){
  if(number % a === 0 && number % b === 0){
    return true
  }else{
    return false
  }
}


//A few cases:
isDivideBy(-12, 2, -6)  //->  true
isDivideBy(-12, 2, -5)  //->  false

isDivideBy(45, 1, 6)    //->  false
isDivideBy(45, 5, 15)   //->  true

isDivideBy(4, 1, 4)     //->  true
isDivideBy(15, -5, 3)   //->  true