var decode = require('string_decoder')
var fs = require("fs")
var oldFile = require("./" + process.argv[2])

oldFile = fs.writeFileSync(oldFile)

console.log(oldFile)

// var oldFile = process.argv[2]
var newFileName = process.argv[3]

// STEPS TO SOLVE THIS EXERCISE:

// 1. Parse CSV file
// 2.	
// 3.
// 4.
// 5. Manipulate content
// 6.
// 7.
// 8.
// 9.
// 10. Turn it to JSON file with the filename specified by process.argv[3]