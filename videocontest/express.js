// -=-=-=-=
// REQUIRES
// -=-=-=-=

var express = require('express');
var bodyParser = require('body-parser');

// -=-=-=-=-=-=-=-=-=-=-=-=-
// CREATE EXPRESS APP OBJECT
// -=-=-=-=-=-=-=-=-=-=-=-=-

var app = express();

// -=-=-=-=-=-=-=-=-
// APP CONFIGURATION
// -=-=-=-=-=-=-=-=-

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("./public"))

// -=-=-=-=-=-=-
// MOCK DATABASE
// -=-=-=-=-=-=-

var entries = []

// -=-=-=
// ROUTES
// -=-=-=

app.get("/",function(request,response){
	if(entries.length<8){
		response.sendFile("videocontest.html",{root:"./"})
	}
	else{
		response.sendFile("videocontestfull.html",{root:"./"})
	}
})

app.post("/submit",function(request,response){
	if(entries.length<8){
		entries.push(request.body)
		console.log(entries)
		response.send("Thank you for your submission, " + request.body.name)
	}
	else{
		response.send("We're sorry, but the contest is full!")
	}
})

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// CREATE SERVER, LISTEN FOR CONNETIONS
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var port = 3000;

app.listen(port, function(){
	console.log("Server running on port " + port)
})