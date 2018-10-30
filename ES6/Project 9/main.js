"use strict"

/*
	Example 1: Immediately resolved promise
*/

//setting the promise
//var myPromise = Promise.resolve('Foo');

//to get a promise we use 'then'
//myPromise.then((res) => console.log(res));

/*
	Example 2: Using a Promise to delay a function carrying out a task
*/

var myPromise = new Promise(function(resolve, reject){
	setTimeout(() => resolve(4), 2000);
});

//pauses two seconds and then adds 3 to 4 and prints 7
myPromise.then((res) => {
	res += 3;
	console.log(res);
});

/*
	Example 3: Using a function to fetch data from an API
*/

function getData(method, url){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = function(){
			if(this.status >= 200 && this.status < 300){
				resolve(xhr.response);
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function(){
			reject({
					status: this.status,
					statusText: xhr.statusText
				});
		};
		xhr.send();
	});
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
	//console.log(data);

	//Parsing the data into the HTML
	let todos = JSON.parse(data);
	let output = '';
	//for of loop
	for(let todo of todos){
		//using template literals ``
		output += `
		<li>
			<h3>${todo.title}</h3>
			<p>Completed: ${todo.completed}</p>
		</li>
		`;
	}

	document.getElementById('template').innerHTML = output;

}).catch(function(err){
	console.log(err);
});

