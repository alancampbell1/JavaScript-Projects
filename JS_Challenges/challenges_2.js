/*
	Challenge 1: Longest Word
	Return the longest word of a String
	If there is more than one word of longest length, put both into an Array
*/

//Note: each internal function iterates through it with each word

function longestWord(sen){
	//remove puncuation and stores it in wordArr 'g' means global meaning it does not stop at the first match
	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
	//We now want to sort by length - longest at the start
	const sorted = wordArr.sort(function(a, b) {
		return b.length - a.length;
	});
	//if multiple words have same length, store in Array
	//filter is high order Array function, it takes a function with a word parameter
	const longestWordArr = sorted.filter(function(word){
		//returns true if length of the second word is the same length
		return word.length === sorted[0].length;
	});

	//check if more than one array val, 1 if true, 0 if false
	if(longestWordArr.length === 1){
		//returns a single word, if longest, not as an array
		return longestWordArr[0];
	} else{
		//returns Array of longest words of equal length
		return longestWordArr;
	}
}
console.log(longestWord('Hello there, my name is Alan'));


/*
	Challenge 2: Array Chunking
	Split an array into chunked arrays of a specific length
	Example:
	chunkArray([1, 2, 3, 4, 5, 6, 7], 3) becomes [[1, 2, 3], [4, 5, 6], [7]]
*/

function chunkArray(arr, len){
	/*
	//Solution 1: while loop
	//Initialise a chunked Array
	const chunkedArr = [];
	//Set index
	let i = 0;

	//loop while the index is less than the Array length
	while(i < arr.length){
		//Slice out from the index to the index + the chunk length and push onto the chunked Array
		chunkedArr.push(arr.slice(i, i + len));
		//increment by the chunk length
		i += len;
	}
	return chunkedArr;
	*/

	//Solution 2: using a forEach

	//initialise chunked Array
	const chunkedArr = [];
	//Loop through the Array
	arr.forEach(function(val){
		//get the last element
		const last = chunkedArr[chunkedArr.length - 1];

		//Check if last and if last length is equal to the chunk length parameter
		if(!last || last.length === len){
			chunkedArr.push([val]);
		} else {
			last.push(val);
		}
	});
	return chunkedArr;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));



/*
	Challenge 3: Flatten Array
	Take an Array and flatten into a single array
	Example:
	[[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
*/

function flattenArray(arrays){
	/*
	//Solution 1: using reduce() - a is the starting point, each iteration is b 
	//b will concatenate on each iteration
	return arrays.reduce(function(a, b){
		return a.concat(b);
	})
	*/

	/*
	//Solution 2: concate.apply
	//the apply method takes a single array and passes all the array elements 
	return [].concat.apply([], arrays);
	*/

	//solution 3: spread operator (...)
	return [].concat(...arrays);

}
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

/*
	Challege 4: Anagram
	An anagram is two words with the same characters.
	Example 'elbow' === 'below'
	We want to return true if parameters is an anagram or false if not
*/

function isAnagram(str1, str2) {
	//returns true if both words have the same characters and no. of characters
	return formatStr(str1) === formatStr(str2);
}

//helper function to do some preprocessing
//replace() replaces anything that is not a word character with an empty string
//split() puts each character into its own array value
//sort() sorts the array in alphabetical order
//join() takes each array value and turns it back into a string
function formatStr(str){
	return str
		.replace(/[^\w]/g, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('')
}
console.log(isAnagram('elbow', 'below'));
console.log(isAnagram('Dormitory', 'dirty room##'));


/*
	Challenge 5: Letter Changes
	Change every letter of a string to the one that follows it and capitalise the vowels.
	z should also return a
	Example: 'hello there' === 'Ifmmp UIfsf'
*/

function letterChanges(str){
	let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char){
		//replacing any z's with a's
		if(char === 'z' || char === 'Z'){
			return 'a';
		} else {
			//using the string object function fromCharCode(), every letter has a char code
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	});
	//using regular expression to make all vowels upper case
	newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel){
		return vowel.toUpperCase();
	});

	return newStr;
}
console.log(letterChanges('Hello There'));
















