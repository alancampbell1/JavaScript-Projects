//Constructor
function Book(title, author, year){
	this.title = title;
	this.author = author;
	this.year = year;

}

//getSummary prototype function
Book.prototype.getSummary = function() {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};

//To create a magazine object but to inherit the properties of the book
//Magazine Constructor
function Magazine(title, author, year, month){
	Book.call(this, title, author, year);

	this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine object
const mag1 = new Magazine('Mag1', 'Alan C', '2018', 'Oct');


//Use Magazine Constructor instead of book constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getSummary());
