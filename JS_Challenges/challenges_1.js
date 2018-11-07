//Challenge 1: REVERSE A STRING
//Return a string in reverse
//ex. reverseString('hello') == 'olleh'

function reverseString(str){
	/*
	//turns a string into an array according to each char
	const strArr = str.split('');
	//calls the reverse function to reverse the Array
	strArr.reverse();
	//calls the join function to combine array elements and return it
	return strArr.join('');
	*/

	//Combining all three moves into one
	//return str.split('').reverse().join('');

	/*
	//blank variable
	let revString = '';
	//Decrement for loop to loop backwards through str
	for(let i = str.length - 1; i >= 0; i--){
		//revString is updated with each letter on each loop
		revString = revString + str[i];
	}
	//newly populated with word backwards
	return revString;
	*/

	/*
	let revString = '';
	//Loop forward through the length
	for(let i = 0; i <= str.length - 1; i++){
		//revString is updated with each letter on each loop
		revString = str[i] + revString;
	}
	return revString;
	*/

	/*
	//Using ES6 / Modern JavaScript - 'for of loop'
	let revString = '';
	//for of loop to iterate through each letter
	for(let char of str){
		//revString is updated with each letter on each loop
		revString = char + revString;
	}
	return revString;
	*/

	/*
	//Using a foreach loop
	let revString = '';
	str.split('').forEach(function(char){
		revString = char + revString;
	});
	return revString;
	*/

	/*
	//Using ES6 Arrow functions
	let revString = '';
	str.split('').forEach(char => revString = char + revString);
	return revString;
	*/

	/*
	//Using reduce
	return str.split('').reduce(function(revString, char){
		return char + revString;
	}, '');
	*/

	//Using reduce and ES6 Arrow functions
	return str.split('').reduce((revString, char) => char + revString, '');
}

const output = reverseString('Hello');
//console.log(output);

////////////////////////////////////////////////////////////////////////////

//Challenge 2: Validate a Palindrome
//Return true if Palindrome and false if not
//ex. isPalindrome('otto') === 'true', isPalindrome('hello') == false

function isPalindrome(str){
	//new string created that takes str, splits it, reverses it and joins it back
	const revString = str.split('').reverse().join('');
	//alt to using an if conditional
	return revString === str;
}

const output1 = isPalindrome('otto');
//console.log(output1);


////////////////////////////////////////////////////////////////////////////

//Challenge 3: Reverse an Integer
//Return an integer in reverse
//ex. reverseInt(521) === 125

function reverseInt(int){
	//turning an int into a String and reversed, like above
	const revString = int.toString().split('').reverse().join('');

	//turns the string into an int and returns it
	//We also use the sign method of the math object in JS for negative numbers
	return parseInt(revString) * Math.sign(int);
}

const output2 = reverseInt(-521);
//console.log(output2);

////////////////////////////////////////////////////////////////////////////

//Challenge 4: Capitalise letters
//Return a string with the first letter of every word capitalised
//ex. capitalisedLetters('i love javascript') === 'I Love Javascript'

function captialiseLetters(str){
	/*
	//Soution 1
	//turn the string into an array of 3 words and make sure it is lowercase
	const strArr = str.toLowerCase().split(' ');
	for(let i = 0; i < strArr.length; i++){
		//using substring method to find the first the letter, make it uppercase and concate to the rest
		strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
	}
	//return the array as a String
	return strArr.join(' ');
	*/

	/*
	//Solution 2 - using map, a high order array function
	return str
	.toLowerCase()
	.split(' ')
	.map(function(word){
		return word[0].toUpperCase() + word.substr(1);
	})
	.join(' ');
	*/

	//Solution 3 - using ES6 arrow functions
	//return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');


	//Solution 4 - using regular expressions
	return str.replace(/\b[a-z]/gi, function(char){
		return char.toUpperCase();
	});

}

const output3 = captialiseLetters('i love javascript');
//console.log(output3);


////////////////////////////////////////////////////////////////////////////

//Challenge 5: Max Character
//return the character that is most common in a string
//ex. maxCharacter('javascript') == 'a'
function maxCharacter(str){
	//using an object as a map
	const charMap = {};
	let maxNum = 0;	//highest number of a certain character in a string
	let maxChar = '';	//letter than has most occurances

	//loop through string as an Array
	str.split('').forEach(function(char){
		//if it exists, add 1
		if(charMap[char]){
			charMap[char]++;
		} else{
			//make one
			charMap[char] = 1;
		}
	});
	//using a for in loop to loop through an object
	for(let char in charMap){
		//debugger;

		//if the first number apart of the charMap object is greater than 0
		if(charMap[char] > maxNum){
			//reset the maxNum to this number
			maxNum = charMap[char];
			//change the maxChar value to this particular char
			maxChar = char;
		}
	}

	return maxChar;
}

const output4 = maxCharacter('javascript');
//console.log(output4);

//Challenge 6: FIZZBUZZ
/*
	Write a program that prints all the numbers from 1 to 100. For
	multiples of 3, instead of the number, print 'Fizz', for multiples
	of 5 print 'Buzz'. For numbers which are multiples of both 3 and 5,
	print 'FizzBuzz'
*/

function fizzBuzz(){
	for(let i = 1; i <= 100; i++){
		//use modolus
		if(i % 3 === 0 && i % 5 === 0){
			console.log('FizzBuzz');
		} else if(i % 3 === 0){
			console.log('Fizz');
		} else if(i % 5 === 0){
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}

//method call
fizzBuzz();