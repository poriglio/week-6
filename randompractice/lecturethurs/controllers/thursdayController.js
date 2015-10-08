var thursdayModel = require("../models/thursdayplans.js");

// EXPORT SO WE CAN ACCESS METHODS IN APP.JS

module.exports = {
		// Use request.body to create new plans
	createPlans : function(request,response){
		var plans = new thursdayModel.Plan(request.body)
		response.send(thursdayModel.thursdayPlans)
	},
	getPlans : function(request,response){
		response.send(thursdayModel.thursdayPlans)
	}
}