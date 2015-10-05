var fs = require("fs")

// This is a built in module, so node knows to look for it when you don't include the ./ filepath.

var text = fs.readFileSync('./random.txt','utf-8')

// Second arg is the character set to use to read the file.
// Assign it to a variable so what fs reads can be stored.

fs.writeFileSync('randomcopy.txt',text)

// FIRST ARG IS NAME OF FILE TO COPY TO, SECOND ARG IS CONTENTS TO WRITE INTO NEW FILE

console.log(text)

