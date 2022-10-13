/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet */


// String -> URL as a string, domain name as a string, include special characters, lower case
// Return a URL as a string parse out just the domain name and return that as a string

//SOLUTION:
// Replace Method to replace the 'http://' 'https://' & 'www.' with an empty string 
// Split Method and return the 0 index which is the domain name
function domainName(url) {
  url = url.replace('http://', '')
  url = url.replace('https://', '')
  url = url.replace('www.', '')

  return url.split('.')[0]
}



//domainName("http://github.com/carbonfive/raygun") == "github" 
//domainName("http://www.zombie-bites.com") == "zombie-bites"
//domainName("https://www.cnet.com") == "cnet 