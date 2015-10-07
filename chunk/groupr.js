var groupr = angular.module("grouprModule",[])

groupr.controller("grouprController",["$scope","grouprFactory",function($scope,grouprFactory){

	$scope.submitPerson = function(){
		var Person = function(name){
			this.name = name
			this.randomize = Math.random()
		}
		var person = new Person($scope.name)
		grouprFactory.group.push(person)
		$scope.name = ""
		$scope.oldGroup = angular.copy(grouprFactory.group)
	}

	$scope.submitNumber = function(){
		$scope.newGroup = grouprFactory.group.sort(function(a,b){
			return b.randomize - a.randomize
		})
		$scope.groups = grouprFactory.groupr($scope.newGroup,$scope.number)
		$scope.number = ""
	}

}])
