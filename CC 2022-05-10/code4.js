/*You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

More examples:

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
Have fun! ;) */

//SAMPLE TESTS:
/* describe("Sample tests", function() {
  it("Tests", function() {
    assert.equal(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
    assert.equal(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
    assert.equal(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");
  });
});*/

//SOLUTION:
function getStrings(city){
  //P: String of characters, ignore all non-alphabetical characters 
  //R: char* times number of occurances in order of initial appearance 
  const counts = {}
  for(const char of city.toLowerCase()){
    if(char < 'a' || char > 'z') continue;
    if(!(char in counts)) counts[char] = 0;
    counts[char]++
  }

  let parts = [];
  for(const key in counts) parts.push(`${key}:${'*'.repeat(counts[key])}`);
  return parts.join(',')
}

 //counts = {}
  //for char of chars
  //if char not in counts
  //counts[char] = 0
  //counts[char]+


  //result = ''
  //for key, value in counts
  // result += 'key:* * count' 