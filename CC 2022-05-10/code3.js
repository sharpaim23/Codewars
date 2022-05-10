/* Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters*/

//SAMPLE TESTS:
/*describe('tests', () => {
  it('fixed tests', () => {
    Test.assertEquals(kebabize('myCamelCasedString'), 'my-camel-cased-string');
    Test.assertEquals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
  });
}); */

//SOLUTION:
function kebabize(str) {
  const characters = [...str];
  for(let i = 0; i < characters.length; i++){
    if(characters[i].match(/[^a-z]/i)) characters.splice(i--,1);
    else if(i && characters[i].match(/[A-Z]/)) characters.splice(i++,0, '-')
  }
  return characters.join('').toLowerCase()
}