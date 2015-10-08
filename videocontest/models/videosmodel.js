var submissions = []

var Submission = function(submission){
	this.name = submission.name
	this.url = submission.url
	this.title = submission.title
	this.about = submission.about
	submissions.push(this)
	console.log(submissions)
}

module.exports = {
	Submission : Submission,
	submissions : submissions
}