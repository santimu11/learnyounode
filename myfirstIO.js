var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var arrayLineas = str.split('\n');

console.log(arrayLineas.length-1);


