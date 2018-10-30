"use strict"

/*
	A generator is simply a function that can be paused to yield a value.
	It is marked by the * symbol.
*/

 function *g1(){
 	console.log('Hello');
 	yield 'Yield 1 Ran...';

 	console.log('World');
 	yield 'Yield 2 Ran...';
 	//removes done being 'false'
 	return 'Returned...';
 }

 //setting the generator to a variable

 var g = g1();

/*
	The following prints 'Hello' followed by an object yielding 'Yield 1 Ran...'
*/

//printing multiple values from one function
/*
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
*/

//Using an iterator - 'for of' loop unique to ES6

for(let val of g){
	console.log(val);
}