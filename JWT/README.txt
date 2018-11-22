Node.js Authentication using JSON Web Tokens (JWT):

This project looks into using JSON web tokens to protect routes on a server. The code demonstrates how to make GET and POST requests to routes on a Node.js server and how to protect and gain access to this routes using JSON Web Tokens.

This can be incorporated into Angular and React projects

This project uses 'Postman' to make the requests.

Make sure to install Node.js and the following dependencies:
- express
- jsonwebtoken
- nodemon


We app.js created and nodemon running the server, in Postman we should be able to make a request to the '/api' route on the server.
Using the following GET request URL: http://localhost:5000/api
This should return the message contained in the route: 'Welcome to the API'.

In Postman, by changing the GET to POST, we should be able to run http://localhost:5000/api/posts to return the message: 'Post Created...'

When protected, run a POST request 'http://localhost:5000/api/login' to get a token key.
Run another POST request with 'http://localhost:5000/api/posts' and in the header include: Authorization: bearer tokenkey before pressing send to gain access to the route.

 
