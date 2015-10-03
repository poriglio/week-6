// -=-=-=-=-=
// EXERCISE 1
// -=-=-=-=-=

var makeArray = function(string){
	newArray = []
	for(var x=0;x<string.length;x++){
		newArray.push(string.substring(x,x+1))
	}
	return newArray
}

var calculate = function(array){
	var total=0
	var longNumber = []
	array.forEach(function(element,index,array){
		if(isNaN(element)&&longNumber.length>0){
			total+= Number(longNumber.join(""))
			longNumber = []
		}
		else if(isNaN(element)){
			return false
		}
		else if(!isNaN(element)&&index===array.length-1){
			longNumber.push(element)
			total+= Number(longNumber.join(""))
			longNumber = []
		}
		else{
			longNumber.push(element)
		}
	})
	return total
}

var addNumbers = function(string){
	var newArray = makeArray(string)
	return calculate(newArray)
}

// -=-=-=-=-=
// EXERCISE 2
// -=-=-=-=-=

// var punctuationDestroyer = function (array){
// 	array.forEach(function(element){
// 		for(var x=0; x<element.length;x++){
// 			if(element.substring(x,x+1)){
// 				element.slice(x,x+1)
// 			}
// 		}
// 	})
// 	return array
// }

var lengthFinder = function(array){
	var lengths = []
	array.forEach(function(element){
		lengths.push(element.length)
	})
	return lengths
}

var highestNumber = function (array){
	array.sort(function(a,b){
		if(a>b){
			return -1
		}
		else if(b>a){
			return 1
		}
		else{
			return 0
		}
	})
	return array[0]
}

var findWord = function(array,length){
	var word = []
	array.forEach(function(element){
		if(element.length === length){
			word.push(element)
		}
	})
	return word[0]
}

var longestWord = function (string){
	var stringList = string.split(" ")
	// stringList = punctuationDestroyer(stringList)
	var number = highestNumber(lengthFinder(stringList))
	return findWord(stringList,number)
}