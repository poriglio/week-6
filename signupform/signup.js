var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",function(request,response){
	response.sendFile("form.html",{root: "./"})
})

app.post('/formsubmit',function(request,response){
	response.redirect("/success/" + request.body.email)
	console.log("You have submitted the form!")
})

app.get("/success/:email",function(request,response){
	response.send("Congratulations! You have successfully submitted your e-mail address, " + request.params.email + "!")
})

var port = 3000

app.listen(port, function(){
	console.log("Server running on port " + port + "...")
})