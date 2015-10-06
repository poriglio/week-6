var array = [1,2,3,4,5,6,7,8,9,10];
var people = ["paula","laura","danya","jesse","lisa","melissa","amir","kyle","clint","mom","dad"]

var chunker = function (array, number){
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

// BEGIN:
// Total elements already pushed away, which is...
// (remainder * (chunkLenghth+1)) + ((i-remainder)*chunkLength)

// END:
// Beginning + chunkLength