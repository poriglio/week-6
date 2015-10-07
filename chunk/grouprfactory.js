groupr.factory("grouprFactory",function(){

	var group = []

	var Person = function(name){
		this.name = name
	}

	var groupr = function (array, number){
		var newArray = [];
		var smallArray = [];
		var remainder = array.length%number
		var chunkLength = (array.length - remainder)/number
		if(remainder===0){
			for(var x=0;x<array.length; x+=chunkLength){
				smallArray = array.slice(x,x+chunkLength)
				newArray.push(smallArray)
			}
		}
		else{
			for(var i=0; i<number; i++){
				if(i<remainder){
					smallArray = array.slice((i*(chunkLength+1)),(i*(chunkLength+1)+(chunkLength+1)))
					newArray.push(smallArray)
				}
				else{
					smallArray = array.slice((remainder*(chunkLength+1))+((i-remainder)*chunkLength),chunkLength+(remainder*(chunkLength+1))+((i-remainder)*chunkLength))
					newArray.push(smallArray)
				}
			}
		}
		return newArray
	}

	return {
		group : group,
		groupr : groupr
	}

});