"use strict"

/*
	The following is a sample class. It has a constructor. Constructors are
	methods that will run when your class is instaniated, i.e. created.
	Classes can contain Methods. A method is a function that belongs to a 
	class. 

*/

class user{
	//Sample constructor
	constructor (username, email, password){
		this.username = username;
		this.email = email;
		this.password = password;
	}

	register(){
		console.log(this.username + ' is now registered');
	}

	//Static methods do not have to be instaniated.
	static countUsers(){
		console.log('There are 50 users');
	}
}

/*
	To use a class we take a variable and create an object from it.
*/

let bob = new user('bob', 'bob@gmail.com', '1234');

//Using this object we can call methods from the class.
bob.register();

//To call a static method without using an object
user.countUsers();

/*
	We can also inherit and extend classes. 
*/

class member extends user{
	constructor(username, email, password, memberPackage){
		//super passes the 3 parameters up to the constructor in user
		super(username, email, password);
		this.package = memberPackage;
	}

	//Standard method. username comes from superclass
	getPackage(){
		console.log(this.username + ' is subscribed to the ' + this.package + ' package');
	}
}

let mike = new member('mike', 'mike@gmail.com', '1234', 'standard');
mike.getPackage();
//The subclass can call methods from the superclass
mike.register();





