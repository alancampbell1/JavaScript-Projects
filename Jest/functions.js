//This file contains basic functions to test using Jest

//bringing in the axios dependency
const axios = require('axios');

//Class 1: to add two numbers
const functions = {
	//takes in two numbers and adds them together
	add: (num1, num2) => num1 + num2,
	//a null function
	isNull: () => null,
	//checkValue simply takes in something and returns it
	checkValue: (x) => x,
	//
	createUser: () => {
		//object variable created
		const user = { firstName: 'Alan' }
		//lastName value added
		user['lastName'] = 'Campbell';
		return user;
	},
	//Making a request to the JSON Placeholder API - a fake REST API for testing
	//returning JSON data from the first entry
	fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
	.then(res => res.data)
	.catch(err => 'error')
};

//exporting to use in test file
module.exports = functions;