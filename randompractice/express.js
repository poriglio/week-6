// REQUIRES
var express = require('express');
var bodyParser = require('body-parser');

// requiring brings the current file the value of module.exports or of the built-in module




// CREATE EXPRESS APP OBJECT

var app = express();

// EXPRESS IS DECLARED ABOVE, then CALLEd below
// APP OBJECT REPRESENTS OUR APP




// APPLICATION CONFIGURATION 

// YOU WANT ALL OF THESE APP.USE FUNCTIONS TO RUN ON EVERYTHING, before all of the other functions are called
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}));
// THE LINE ABOVE TELLS THE BROWSER TO UNENCODE THE URL ENCODED STRING
// BODY PARSER HELPS INTERPRET DATA THAT IS COMING FROM A BROWSER
// DATA IS TYPICALLY SENT IN A URL ENCODED STRING
// {
// 	name: 'Paula',
// 	age : '27'
// }

// ?name=Paula&age=20 <==== that is a URL encoded string
// ?query=searchTerm
app.use(bodyParser.json());
// JSON EXISTS IN STRINGIGIED FORM AND AS ACTUAL OBJECT DATA
// BROWSERS CAN ONLY SEND STRINGS, SO BODY PARSER EXISTS TO HANDLE THIS AND TURN IT BACK INTO AN OBJECtn[]


// SERVING STATIC FILES (typically CSS JS HTML or images)
// static method accepts argument that tells it where to find static files
// CURRENT DIRECTORY + PUBLIC
// app.use(express.static(_dirname + '/public'));
app.use(express.static("./breakoutgroup"))
// DIRNAME REFERS TO ROOT OF APP
// ./ refers to current location

// IF SOMEONE REQUESTS A STATIC FILE, IT WILL FIRST LOOK IN PUBLIC,
// THEN IT WILL LOOK BELOW FOR A ROUTE. THIS IS BEACUSE THE CODE GETS
// EXECUTED TOP TO BOTTOM. MAKE SURE THE REQUEST YOU WANT TO APPEAR FIRST IS TOWARD THE TOP... USUALLY YOU WANT STATIC FILES AT THE TOP



// ROUTEs

// EXPRES LOOKS AT THESE TOP TO BOTTOM TO DECIDE WHICH ONE IS APPROPRIATE

// STATIC ROUTES SHOULD APPEAR ABOVE DYNAMIC ROUTES... IF USER ENTERS A SPECIFIC ROUTE, THAT'S PROBABLY WHAT THEY WANT!

app.get('/whatever',function(request,response,next){
	// console.log("This is the whatever route!")
	next()
	response.send("whatever...")
})

app.get("/:someParameter",function(request,response,next){
	if(request.params.someParameter === "error"){
		next(new Error("my custom error"))
	}
	response.send(request.params.someParameter)
})

// JUST THE FORWARD SLASH REFERS TO THE HOME PAGE (WHAT SOMEONE GETS WHEN THEY ENTER YOURSITE.COM)
app.get("/",function(req,res){
	res.sendFile('index.html',{root: './breakoutgroup'});
})

app.post("/submit",function(request,response){
	response.redirect("/" + request.body.book)
})

// app.get("/submit",function(request,response){
// 	response.send("Thanks for the info, sucker!")
// })

app.get("/:book",function(request,response){
	console.log(request.query)
	response.send("Thanks for submitting your favorites!\nBook: " + request.params.book)
})

// EVERY DYNAMIC PIECE IS DENOTED WITH A COLON

// YOU HAVE TO TELL EXPRESS WHAT THE FILE IS AND WHERE THE FILE IS
// YOU CANT PUT A STATIC FILE INTO A SEND REQUEST; SEND WILL READ IT AS A STRING LITERAL


app.get('/', function(req,res){
	res.send('hello')
	console.log('Query: ' + req.query)
});

app.get('/about',function(req,res){
	res.send('about')
})

app.post('/formsubmit',function(req,res){
	console.log("Form:", req.body)
	// DONT FORGET TO END THE REQUEST!
	// res.send("success!")
	res.redirect("/users/" + req.body.username + "/" + req.body.password)
})

app.get('/users/:username/:password',function(req,res){
	console.log(req.params)
	res.send("Welcome back, " + req.params.username + "Your password is " + req.params.password)

})



// PARAMETERIZED/DYNAMIC ROUTES

app.get('/animals/:animalName/:animalSize', function(req,res){
	res.send('This is the page for ' + req.params.animalName + " that is " + req.params.animalSize)
	console.log(req.params)
})

// THREE OBJECTS USED THE MOST ON THE REQUEST OBJECTS
// 1. req.body - for POST type request. Gives us access to the request body.
// 2. req.query - for GET type routes. Gives us access to the query string.
// 3. req.params - gives us access to parameterized routes

// URL WILL LOOK LIKE THIS:
// /animals/dog
// /animals/cat
// /animals/cheesecake

app.get('/*',function(req,res){
	res.send("this page does not exist")
})
// THIS FUNCTION RUNS WHEN SOMEONE REQUESTS THE HOME ROUTE

// EXPRESS MAGICALLY KNOWS THAT THE FUNCTION BELOW IS AN ERROR HANDLING FUNCTION
// APP.USE WILL MATCH ANY REQUEST TYPE

app.use(function(error,request,response,next){
	console.log("500 error")
	response.send("oops! Something went wrong")
})

// CREATING SERVER AND LISTENING FOR CONNETIONGS

var port = 3000

app.listen(port, function(){
	console.log("Server running on port " + port);
});