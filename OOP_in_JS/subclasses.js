//Basic class with a constructor
class Book {
	constructor(title, author, year){
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

//We want a subclass called Magazine that has everything a book has but
//also has an additional month variable

//Magazine subclass
class Magazine extends Book{
	constructor(title, author, year, month){
		//calls the constructor in the super class
		super(title, author, year);
		this.month = month;
	}
}

//Instantate Magazine
const mag1 = new Magazine('Mag One', 'Alan C', '2018', 'Oct');

console.log(mag1);

//Use method from super class
console.log(mag1.getSummary());