var request = require('request');
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  }
  return body
})

console.log(body)

var color = process.argv[2]

var colorSearch = function (color){
	for(var i=0; i<colors.length; i++){
		if(colors[i].name.toLowerCase() === color.toLowerCase()){
			var colorCodes = colors[i].rgb
			return colorCodes.r + " " + colorCodes.g + " " + colorCodes.b
		}
		else{
			return "The color you entered is not a web color."
		}
	}
}

console.log(colorSearch(color))