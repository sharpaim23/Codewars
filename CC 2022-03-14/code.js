//Given a set of numbers, return the additive inverse of each. Each positive becomes negative and the negative becomes positives

function invert(array){
  return array.map(num => num * -1)
}