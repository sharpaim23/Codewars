// Clock shows h hours, m minutes, s seconds after midnight. Your task is to write a function which returns the time since midnight in 
//milliseconds. Example: h = 0, s = 1, s = 1 result = 6100 Input constraints: 0<=h<=23, 0<=m<=59, 0<=s<=59

function past(h,m,s){
  const convertHours = h * 60 * 60 * 1000
  const convertMinutes = m * 60 * 1000
  const convertSeconds = s * 1000
  return convertHours + convertMinutes + convertSeconds
}