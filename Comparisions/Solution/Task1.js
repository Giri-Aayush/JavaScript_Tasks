let a = 5 > 4; //true
alert(a);
a = "apple" > "pineapple"; //false
alert(a);
a = "2" > "12"; //true
alert(a);
a = (undefined == null); //true
alert(a);
a = (undefined === null);//false
alert(a);
a = (null == "\n0\n");//false
alert(a);
a = (null === +"\n0\n");//false
alert(a);
/*
Some of the reasons:

Obviously, true.
Dictionary comparison, hence false. "a" is smaller than "p".
Again, dictionary comparison, first char "2" is greater than the first char "1".
Values null and undefined equal each other only.
Strict equality is strict. Different types from both sides lead to false.
Similar to (4), null only equals undefined.
Strict equality of different types.
*/