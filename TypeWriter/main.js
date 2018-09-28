//ES6 Class

class TypeWriter{
	
	/*
		The constructor for this class takes in 3 elements
		- 'txtElement' which comes from 'span' element in the HTML
		- 'words' which comes from 'data-words' attribute containing our words
		- 'wait' which comes from 'data-wait' which is the wait time before the
		function starts deleting.

		Using the 'this' keyword we assign the parameters to local variables
	*/
	constructor(txtElement, words, wait = 3000){
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}

	//The following method called type does all our work.
	type(){
	const current = this.wordIndex % this.words.length;
		//Get full text of current word
		const fullTxt = this.words[current];


		//Check if isDeleting is true
		if(this.isDeleting){
			//Removes characters
			this.txt = fullTxt.substring(0, this.txt.length - 1);

		} else{
			//adds characters
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		//Insert txt into element
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

		//Initial Type Speed
		let typeSpeed = 300;

		//Increases the deleting speed by double
		if(this.isDeleting){
			typeSpeed /= 2;
		}

		//if word is complete
		if(!this.isDeleting && this.txt === fullTxt){
			//Make pause at end
			typeSpeed = this.wait;
			//Set delete to true
			this.isDeleting = true;
		} else if(this.isDeleting && this.txt === ''){
			this.isDeleting = false;
			//Move to next word
			this.wordIndex++;
			// Pause before start typing
			typeSpeed = 500;
		}

		setTimeout(() => this.type(), typeSpeed)
	}
}

//Init On DOM Load, i.e. when the webpage loads it will run the function init()
document.addEventListener('DOMContentLoaded', init);

//Init App
function init(){
	//Grabs each element from the span
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	//creates a new TypeWriter object and passes the variables
	new TypeWriter(txtElement, words, wait);
}
























