/*
	In JavaScript almost everything is an object. However, there are several
	data types, such as Strings, Numbers and Booleans, which are actually
	primitives. These primitives act as objects because you can use methods
	on them. Giving the impression that a String is an object.
	What happens, when we call a method on a primitive, JavaScript behind the
	scenes, adds a wrapper to it from which you can create Strings as objects.
*/

//We declare a String Primitive
const s1 = 'Hello';
//We call a method on the String Primitive and the result is printed
console.log(s1.toUpperCase());
console.log(typeof s1);

//We can create objects of type String using the following code
const s2 = new String('Hello');
//typeof returns the type of the s2, aka an Object
console.log(typeof s2);


/*
	We also have DOM objects.
	window refers to the parent object of everything. It has a number of
	methods associated with it including alert();
	
	console.log(window);

	//information of the browser, OS you are using
	console.log(navigator.appVersion);
*/


/*
	The following is an example of a basic object literal.
	It can have properties and functions
*/

const book1 = {
	title: 'Book One',
	author: 'John Doe',
	year: '2018',
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

};

//This returns an object with some fields
console.log(book1);

//If we wanted an individual property we refer to the object, then dot (.)
//and its property
console.log(book1.title);

//We can call functions in the Object Literal like so which returns some text
console.log(book1.getSummary());

//To see all the values of an Object returned as an Array
console.log(Object.values(book1));

//To see all the keys of an Object returned as an Array
console.log(Object.keys(book1));











