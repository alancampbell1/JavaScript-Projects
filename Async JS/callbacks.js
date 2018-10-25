//We are going to mimic blog posts on a server

//An array of objects
const posts = [
	{title: 'Post One', body: 'This is post one'},
	{title: 'Post Two', body: 'This is post two'}
];

/*
 *	we are copying how to fetch data from a server which can take a couple sec.
 *  So we are using a setTimeout function
 */
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
 * This is going to read in a post and create a new one after 2 seconds.
 * However, because we have a two second delay it will not work. So we read
 * in a callback function and call it after the push command.
 */

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000)
}

/*
	What happens above is that it waits two seconds and then showed all the
	posts. The reason it waited was because it had to wait to create the post
	before it called the callback().
*/




//Passing through an object to the function
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);















