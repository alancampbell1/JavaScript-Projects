//Bring in dependencies
const express = require('express');
const jwt = require('jsonwebtoken');

//initialise app variable with express
const app = express();

//Simple route
app.get('/api', (req, res) => {
	res.json({
		message: 'Welcome to the api'
	});
});

//creating a route we want to protect
app.post('/api/posts', verifyToken, (req, res) => {
	jwt.verify(req.token, 'secretkey', (err, authData) => {
		//check for an error
		if(err){
			res.sendStatus(403);
		} else {
			res.json({
				message: 'Post Created...',
				authData
			});
		}
	});
});

//creating a route to get the JSON Web Token
app.post('/api/login', (req, res) => {
	//creating a mock user to replace a user inputting information in the front end
	const user = {
		id: 1,
		username: 'Alan',
		email: 'alanjamescampbell1@gmail.com'
	}
	//a token code is return which is needed to make a request to a protected route and includes expire time limit
	jwt.sign({user}, 'secretkey',{ expiresIn: '30s' }, (err, token) => {
		res.json({
			token
		});
	});
});

//Token Format: 'Authorization: Bearer <access_token>'
//middleware- verify token
function verifyToken(req, res, next){
	//Get auth header value
	const bearerHeader = req.headers['authorization'];
	//check to see if bearer not undefined
	if(typeof bearerHeader != 'undefined'){
		//split at the space
		const bearer = bearerHeader.split(' ');
		//get token from array
		const bearerToken = bearer[1];
		//set the token
		req.token = bearerToken;
		//next middleware
		next();
	} else {
		//forbidden
		res.sendStatus(403);
	}
}

//running the server on port 5000
app.listen(5000, () => console.log('Server started on port 5000'));







