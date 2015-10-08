var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
// DIRNAME MUST HAVE TWO UNDERSCORES BEFORE IT

var thursdayController = require("./controllers/thursdayController.js")

app.get("/", function(request,response){
	response.sendFile("/html/home.html", {root:"./public"})
})

app.post("/thursdayplans",thursdayController.createPlans)

app.get('/getplans',thursdayController.getPlans)

var port = 3000

app.listen(port,function(){
	console.log("Server running on port " + port + "...")
})

