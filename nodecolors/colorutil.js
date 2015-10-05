module.exports = {

}

module.exports.luminosity = function (r,g,b){
	return r*0.2126 + g*0.7152 + b*0.0722
};

module.exports.darken = function(r,g,b){
	var r = Math.round(0.8 * r)
	var g = Math.round(0.8 * g)
	var b = Math.round(0.8 * b)
	return r + " " + g + " " + b
}