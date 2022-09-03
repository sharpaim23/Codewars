/**** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case. */

//SAMPLE TESTS:
/* describe("Basic tests",() =>{
Test.assertEquals(check([66, 101], 66), true);
Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
})*/


//P: a == array x == value = either can contain numbers or strings
//R: Return true if the a contains x || false if not

//SOLUTION:
//P: a being an array
// includes should filter through to check the array
// x is the value that is filter for
// show work
check = (a, x) => {return a.includes(x)};


//E
check([80, 117, 115, 104, 45, 85, 112, 115], 45), true
check(['t', 'e', 's', 't'], 'e'), true
check(['what', 'a', 'great', 'kata'], 'kat'), false