// -=-=-=-=
// REQUIRES
// -=-=-=-=

var express = require('express');
var bodyParser = require('body-parser');

var submissionsController = require("./controllers/submissionscontroller.js")

// -=-=-=-=-=-=-=-=-=-=-=-=-
// CREATE EXPRESS APP OBJECT
// -=-=-=-=-=-=-=-=-=-=-=-=-

var app = express();

// -=-=-=-=-=-=-=-=-
// APP CONFIGURATION
// -=-=-=-=-=-=-=-=-

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"))

// -=-=-=-=-=-=-
// MOCK DATABASE
// -=-=-=-=-=-=-


// -=-=-=
// ROUTES
// -=-=-=
var entries = 0

app.get("/",function(request,response){
	if(entries<8){
		response.sendFile("/html/videocontest.html",{root:"./public"})
	}
	else{
		response.sendFile("/html/videocontestfull.html",{root:"./public"})
	}
})

app.post("/createVideos",submissionsController.createVideos)

	// if(entries<8){
	// 	entries++
	// 	console.log(entries)
	// 	response.send("Thank you for your submission, " + request.body.name)
	// }
	// else{
	// 	response.send("We're sorry, but the contest is full!")
	// }

app.get("/getMovies",submissionsController.getMovies)

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// CREATE SERVER, LISTEN FOR CONNETIONS
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var port = 3000;

app.listen(port, function(){
	console.log("Server running on port " + port)
})