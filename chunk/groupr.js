var groupr = angular.module("grouprModule",[])

groupr.controller("grouprController",["$scope","grouprFactory",function($scope,grouprFactory){

	$scope.submitPerson = function(){
		grouprFactory.group.push($scope.name)
		$scope.name = ""
		$scope.group = grouprFactory.group
	}

	$scope.submitNumber = function(){
		$scope.groups = grouprFactory.groupr(grouprFactory.group,$scope.number)
		$scope.number = ""
	}

}])