var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	// var fileContents = fs.readFileSync("data.txt");
	fs.readFile('data.txt',function(err,data){
	  res.header("Content-Type","text/html");
	  // res.render('index', { title: 'Express' });
	   res.send(data)
	});
});

// You can't have send AND render... one of them acts like a break or return statement and ends the response.

module.exports = router;
