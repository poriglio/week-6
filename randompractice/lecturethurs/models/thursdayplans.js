var thursdayPlans = []

var Plan = function(thursdayModel){
	this.lunch = thursdayModel.lunch
	this.evening = thursdayModel.evening.split(", ");
	thursdayPlans.push(this)
	console.log(thursdayPlans)
}

module.exports = {
	Plan : Plan,
	thursdayPlans : thursdayPlans
}

