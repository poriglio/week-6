var fs = require("fs")

var text = fs.readFileSync(process.argv[2],'utf-8')

fs.writeFileSync(process.argv[3],text)

// To use this in terminal, write:
// // node copier.js filenametocopy nameofnewfile

// Challenge:
// Write a program to run in the CLI.
// It should take a file as an argument and make a copy of that file, 
// to a name specified as the last argument.