/*
	A constructor is basically just a function. 
	With our constructor below we can create books from it.
*/

function Book(){
	//console.log('Book Initialised...');
}

//Instantiate a Book object, it calls the constructor above
const book1 = new Book();
const book2 = new Book();


/*
	When we instantiate a newBook we want to pass in 3 parameters to 
	assign values to properties.
*/

function newBook(title, author, year){
	this.title = title;
	this.author = author;
	this.year = year;

	this.getSummary = function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

const myBook1 = new newBook('Book One', 'John Doe', '2018');
const myBook2 = new newBook('Book Two', 'Jane Doe', '2017');

//To get access to the title value from myBook1 we do the following
console.log(myBook1.title);
//To get access to a function we do the following
console.log(myBook1.getSummary());


