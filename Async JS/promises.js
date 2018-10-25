//An array of objects
const posts = [
	{title: 'Post One', body: 'This is post one'},
	{title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
	//Takes a callback function and period of time to delay 
	setTimeout(() => {
		//blank variable
		let output = '';
		//foreach loop to loop through array of objects created above
		posts.forEach((post) => {
			//append to blank variable
			output += `<l1>${post.title}</li>`;
		});
		//insert into document
		document.body.innerHTML = output;

	}, 1000);
}


/*
	We want to return a Promise with two parameters. 'resolve' when you want to
	successfully resolve a Promise. 'reject' is when you get an error.

	So its waiting 2 seconds, then it checks and then it resolves. Once complete
	it calls getPosts
*/

function createPost(post) {
	 return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);

			const error = false;

			//error checking
			if(!error) {
				resolve();
			} else {
				reject('Error: Something went wrong.');
			}
		 }, 2000)
    });
}

//Using .catch means we get a clean error and not an uncaught error

/*
createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts)
.catch(err => console.log(err));
*/

//Promises are very popular, esp. with Mongoose, NodeJS.

/*

//Promise.all - a faster alternative to calling of createPost() above.
//promise1 contains a piece of text
const promise1 = Promise.resolve('Hello World');
//promise2 contains a number
const promise2 = 10;
//promise3 contains a timeout
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

//Using fetch means two '.then' to format the json and get the data
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

//Takes in an Array of Promises and prints them to the console.
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

//Because promise3 is set to 2 seconds all other promises must wait 2 secs too.

*/

/*
Async / Await - a way to handle responses. It requires a function that is labelled
asynchronous.
A more elegant way to handle promises. 
*/

/*
async function init() {
	//So we are waiting for createPost() to be done until it moves onto getPosts()
	await createPost({title: 'Post Three', body: 'This is post three'});

	getPosts();
}

init();
*/

//Async / Await / Fetch
async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	//Format the data
	const data = await res.json();

	console.log(data);
}

fetchUsers();





