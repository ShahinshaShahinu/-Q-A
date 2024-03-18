var fs = require("fs");

 fs.readFile("fsModule.html",'utf8', (err, data) => {
    console.log(data);
});

// 'utf8' is an encoding option used to convert/interpret file data as a text format/string 
// when reading from a file in Node.js.

