var module = angular.module("videoApp",[])

module.controller("videoController",["$scope","$http",function($scope,$http){

	$scope.intro = "Welcome to my Video Contest!"

	$scope.entries = 

}])

Instead of using action, name, and method on your form, use ng-model="sub.name" etc !!! And ng-submit on the form. Or ng-click on the button.

$scope.submit = function () {
	$http.post("/submit", $scope.sub)
}

Back in server side, in app.post function, enter response.send(submissions)

chain "then " onto the end of .post, and add a function to return the data

