var app = angular.module("thursdayApp",[])

app.controller("thursdayController",["$scope","$http",function($scope,$http){

	$scope.greeting = "Welcome to Thursday."

	$http.get('/getplans').then(function(returnData){
		$scope.plans = returnData.data
	})
	
	$scope.thursdayPlans = function(){
		console.log($scope.thursday)
		// -=-=-=-=-=-=-=-=-=-=
		// POST DATA TO SERVER:
		// -=-=-=-=-=-=-=-=-=-=
		$http.post("/thursdayplans",$scope.thursday).then(function(returnData){
			console.log("Your return data is " + returnData.data)
			$scope.plans = returnData.data
		})
		// There are many methods on $http. Get and Post are the most often used. Post takes two args: URl to post to, and the data to post.

	}

}])
