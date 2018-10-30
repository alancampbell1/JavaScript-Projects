"use strict"

let name = 'Alan';

function makeUpperCase(word){
	return word.toUpperCase();
}

/*
	To use multiple lines without having to concatenate quotes using +,
	use `` (backticks).
	To include variables we include ${name of variable}
	You can pass in functions too with parameters also using the ${}, e.g.
	${nameOfFunction(parameter)}
*/

let template = 
`<h1>${makeUpperCase('Welcome ')}Hello, ${name}</h2>
<p>This is a simple template in JS</p>`;

document.getElementById('template').innerHTML = template;


