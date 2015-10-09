var subController = require("../models/videosmodel.js");

module.exports = {
	createVideos : function(request,response){
		var videos = new subController.Submission(request.body)
		response.send(subController.submissions)
	},
	getMovies : function(request,response){
		response.send(subController.submissions)
	}
}