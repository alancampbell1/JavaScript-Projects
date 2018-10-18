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

	getAge(){
		const years = new Date().getFullYear() - this.year;
		return `${this.title} is ${years} years old`;
	}

	revise(newYear){
		this.year = newYear;
		this.revise = true;
	}

	//Static methods: a method where you can call it without instantiating
	//an object.

	static topBookStore(){
		return 'Barnes & Noble';
	}
}

//Instantiate an object
const book1 = new Book('Book1', 'Alan C', '2018');
console.log(book1);

console.log(book1.getSummary());

//Calls the revise method that changes the year value
book1.revise('2017');
console.log(book1);

//to call topBookStore we call the name of the class
console.log(Book.topBookStore());