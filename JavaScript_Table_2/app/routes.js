//require express
var express = require('express');
var path = require('path');

//create our router object
var router = express.Router();

//export our router
module.exports = router;

//route for our home page
router.get('/', function(req, res){
	//res.send('hello World');
	res.sendFile(path.join(__dirname, '../Assignment2.html'));
});