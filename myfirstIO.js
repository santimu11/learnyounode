/*var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var arrayLineas = str.split('\n');

console.log(arrayLineas.length-1);*/

var fs = require('fs')  
       
var contents = fs.readFileSync(process.argv[2])  
var lines = contents.toString().split('\n').length - 1  
console.log(lines)
