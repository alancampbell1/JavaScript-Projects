"use strict"

//global scope - on the global scope both var and let are the same


//Old Way
var a = 'test1';
console.log(a);

//New Way
let b = 'test2';
console.log(b);


/*
	If we run the following function we get '50 50'. Why? Just inside the function
	we set var a to 30 on the global scope level.
	Then in the if statement, the second var a changed the first one to 50.
*/

function testVar(){
	var a = 30;
	if(true){
		var a = 50;
		console.log(a);
	}
	console.log(a);
}
testVar();

/*
	If we run this function we get '50 30'. So we set a to 30 inside the function.
	We then set a to 50 inside the if statement, a different scope.
	Once, the code is out of the if statement, the old scope with 30 returns.
*/

function testLet(){
	let a = 30;
	if(true){
		let a = 50;
		console.log(a);
	}
	console.log(a);
}
testLet();



/*
	In the following example, var i can be printed outside of the loop scope
	with no issues. i is incremented to 10 and outside the loop is printed.
*/


for(var i = 0; i < 10; i++){
	console.log(i);
}
console.log(i);


/*
	However, if you change i from var to let, i is not recognised outside
	of the for loop.
*/


for(let i = 0; i < 10; i++){
	console.log(i);
}
console.log(i);



/*
	const: the need for const is that if we set something is cannot be changed.
*/

const colors = [];
colors.push('red');
colors.push('blue');
//console.log(colors);

/*
	We get an error if we try to change colors. It can be pushed to but not 
	changed as shown below. push just adds to the array.
*/
colors = 'Green';












