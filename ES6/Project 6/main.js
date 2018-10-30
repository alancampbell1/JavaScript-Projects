"use strict"

/*
	The following is an example of a basic function that takes a parameter.
*/

function greet($greeting){
	console.log($greeting);
}
greet('Hello');

/*
	What if we wanted to run a function that takes a parameter without
	passing a parameter?
	The solution is to give the variable a default value like so.
	This is actually, a lot harder in ES5.
*/

function greet2($greeting = 'Hello'){
	console.log($greeting);
}
greet2();

/*
	Spread Operator: represented as three dots (...)
	It is used to allow an expression to be expanded in places where
	multiple arguments are expected.
*/

/*
	In the following example, if we wanted to args to test() we would use
	the apply() method in ES5.
	In ES6, we use the spread Operator, ...
*/

let args1 = [1,2,3];
let args2 = [4,5,6];

function test1(){
	console.log(args1);
}

function test2(){
	console.log(args1 + ', ' + args2);
}


//Using the apply() method from ES5
test1.apply(null, args1);

//Using the spread operator, ...
test1(...args1);

//Using the spread operator, ... with multiple arrays
test2(...args1, ...args2);






