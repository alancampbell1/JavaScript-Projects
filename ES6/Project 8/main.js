"use strict"

/*
	Previously in ES6, 'this' needed to be predefined as on line 11.
*/

function PreFixer(prefix){
	this.prefix = prefix;
}
PreFixer.prototype.prefixArray = function(arr){
	let that = this;
	return arr.map(function(x){
		console.log(that.prefix + x);
	});
}

let pre = new PreFixer('Hello ');
pre.prefixArray(['Alan', 'Niall']);

/*
	As with the previous example, Arrow functions save us from having
	to define 'this' as on line 11.
*/

PreFixer.prototype.prefixArray2 = function(arr){
	return arr.map((x) =>{
		console.log(this.prefix + x);
	});
}

let pre2 = new PreFixer('Hello ');
pre.prefixArray2(['Alan', 'Niall']);


/*
	Simple example of the Syntax
*/

//ES5 Example
let add = function(a, b){
	let sum = a + b;
	console.log(sum);
	return false;
}

//ES6 Example
let add2 = (a, b) =>{
	let sum = a + b;
	console.log(sum);
	return false;
}


add(2,2);
add2(2,2);