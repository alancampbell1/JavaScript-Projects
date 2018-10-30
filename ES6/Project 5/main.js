"use strict"

let theString = 'Hello, my name is Alan and I love JS';

/*
	startsWith()
	Returns true because 'theString' starts with 'Hello'.
*/
console.log(theString.startsWith('Hello'));

/*
	endsWith()
	Returns true because 'theString' ends with 'JS'.
*/
console.log(theString.endsWith('JS'));

/*
	endsWith()
	Returns true because 'theString' contains 'love'.
*/
console.log(theString.includes('love'));

////////////////Number Methods/Features////////////////////////

/*
	ES5 supported the ability to get Hexidecimal values.
	0xFF returns 255.
	With ES6, we can now use Binary and Octal
*/

console.log(0xFF);

//ES6 supports Binary - returns 43
console.log(0b101011);

//ES6 Supports Octal - returns 355
console.log(0o543);


/*
	ES6 has a number of Number methods.
	isFinite() returns true or false depending on if a number is finite
*/
console.log(Number.isFinite(3));		//true
console.log(Number.isFinite(-3));		//true
console.log(Number.isFinite(Infinity));	//false
console.log(Number.isFinite(NaN));		//false

/*
	isNaN() is function that checks if a number is 'not a number'
*/

console.log(Number.isNaN(NaN));			//true
console.log(Number.isNaN('Alan'));		//false
console.log(Number.isNaN(45));			//false

/*
	isInteger() - checks to see if the variable is an Integer
*/

console.log(Number.isInteger(NaN));			//False
console.log(Number.isInteger(12));			//True
console.log(Number.isInteger('Hello'));		//False



