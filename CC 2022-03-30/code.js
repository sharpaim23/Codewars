//Write a function to convert a name into intials. This kata strictly takes two words with one space in between them. 
//The output should be two capital letters with a dot separating them

function abbrevName(name){
  return name.split("").map(el => el[0].toUpperCase()).join(".")
}