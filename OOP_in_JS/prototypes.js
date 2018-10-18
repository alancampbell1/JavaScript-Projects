/*
	This example looks at creating Prototype Methods. These can replace
	the getSummary functions found the constructor of the last example
	in constructors.js

	We use prototype functions because for every object we create we may
	not want a getSummary function available.
*/

//Constructor
function Book(title, author, year){
	this.title = title;
	this.author = author;
	this.year = year;

}

//getSummary prototype function
Book.prototype.getSummary = function() {
	return `${this.title} was written by ${this.author} in ${this.year}`;
}

//getAge - returns number of years pased since book was created
Book.prototype.getAge = function(){
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
};

//A prototype function that manipulates the data
//Revise, aka change the year value
Book.prototype.revise = function(newYear){
	this.year = newYear;
	this.revised = true;
}



const book1 = new Book('Book One', 'John Doe', '2006');
const book2 = new Book('Book Two', 'Jane Doe', '2011');

//To get access to the title value from myBook1 we do the following
console.log(book2.title);
//To get access to a function we do the following
console.log(book2.getSummary());

//When we just print book2 we only get properties, no functions like before
//Unless you expand the __proto__ section
console.log(book2);

console.log(book2.getAge());


//Before revise() is called
console.log(book2);
//Calling the revise() function on book2
book2.revise('2018');
//Revisiting the information to see if changes were made
console.log(book2);





