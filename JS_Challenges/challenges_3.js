/*
	Challenge 1: Add All Numbers
	return a sum of all parameters entered regardless of the amount of numbers - no arrays
	Example: addAll(1,2,3,4) === 10
*/

function addAll(){
	//Solution 1 (ES5) - using arguments object and for loop:
	//Turn arguments object into an Array containing values
	var args = Array.prototype.slice.call(arguments);
	//counter variable
	var total = 0;
	//loop through to add numbers
	for(let i = 0; i < args.length; i++){
		total += args[i];
	}
	return total;
	
}
//console.log(addAll(2,5,6,7));

//...numbers is known as the rest
function allAll2(...numbers){
	//Solution 2 (ES6) - Rest/Reduce Operators and forEach loop:
	//...numbers contains the values in an array, i.e [2,5,6,7]
	//acc is set to 0, cur is the current iteration of the rest, we add them
	return numbers.reduce((acc, cur) => acc + cur);
}
console.log(allAll2(2,5,6,7));

/*
	Challenge 2: Sum all primes
	Pass in a number to loop up to and add all the prime numbers. A prime number
	is a whole number greater than 1 whose only factors are 1 and itself.
	Example: sumAllPrimes(10) == 17
*/

function sumAllPrimes(num){
	//our counter
	let total = 0;

	//nested function
	function checkForPrime(i){
		for(let j = 2; j < i; j++){
			//if it divides in equally it is not prime
			if(i % j === 0){
				return false;
			} 
		}
		return true;
	}
	//loops through starting at 2 because 1 is prime
	for(let i = 2; i <= num; i++){
		if(checkForPrime(i)){
			total += i;
		}
	}
	return total;
}
console.log(sumAllPrimes(10));


/*
	Challenge 3: SEEK & DESTROY
	Remove from the array whatever is in the following arguments. Return the 
	leftover values in an array
	Example: seakAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
	2's and 6's are removed
*/

//Solution 1 - arguments, indexOf, filter
function seekAndDestroy(arr){
	//turning the args object and turning it into an Array
	const args = Array.from(arguments);

	function filterArr(arr){
		//we want to return true if it is not in the Array, return -1 if not found
		return args.indexOf(arr) === -1
	}

	return arr.filter(filterArr);
}
//console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

//Solution 2: ...rest, filter & includes
function seekAndDestroy2(arr, ...rest){
	return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy2([2, 3, 4, 6, 6, 'hello'], 2, 6));


/*
	Challenge 4: Sort by Height
	People are standing in a row in a Park. There are trees between then which
	you cannot move. Your task is to rearrange the people by their heights in
	a non-descending order without moving the trees.
	Example:
	a = [-1, 150, 190, 170, -1, -1, 160, 180]
	sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
	The -1's represent the trees
*/

function sortByHeight(a){
	//Holds the position of where the -1's are
	const arr1 = [];
	//Holds all the values
	const arr2 = [];

	a.forEach((val, i) => {
		//if the value is a -1, push its position onto the first array
		if(val === -1){
			arr1.push(i);
		} else {
			//if its not a -1, push its value onto the second array
			arr2.push(val)
		}
	});

	//sorts arr2 lowest to highest in sortArr
	const sortArr = arr2.sort((a, b) => a - b);

	//using the splice function to put -1 into its correct position
	arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

	return sortArr;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));


/*
	Challenge 5: Missing Letters
	Find the missing letter in the passed letter range and return it. If all
	letters are present, return undefined.
	Example: missingLetters("abce") == "d"
*/

function missingLetters(str){
	//every char has a specific character code, we want the first one
	let compare = str.charCodeAt(0);
	//hold the missing letter
	let missing;

	//we want to split the string into an Array
	//map() is similar to forEach but returns an Array
	str.split('').map((char, i) => {
		//we are going to compare 'compare' to the char code of the index
		if(str.charCodeAt(i) == compare){
			//move onto the next character code
			++compare;
		} else{
			//if the character code is missing we want to put that into the variable 'missing'
			missing = String.fromCharCode(compare);
		}
	});
	return missing;
}

console.log(missingLetters("abce"));


/*
	Challenge 6: Even and Odd Sums
	Take in an Array and return an Array of the sum of even and odd numbers.
	Example: evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
*/

function evenOddSums(arr){
	let evenSum = 0;
	let oddSum = 0;

	//using % to tell if the number is odd or even, using ternary to determine which one to add onto
	arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

	return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71]));
