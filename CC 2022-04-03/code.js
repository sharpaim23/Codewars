//Given a year, return the century it is in

function century(year){
  return Math.floor(year/100) + ((year % 100) ? 1 :0)
}

