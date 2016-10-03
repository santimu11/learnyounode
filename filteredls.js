var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback(error, files) {
	if (error) console.error(error);
	files.forEach(function(file) {
		var ext = "." + process.argv[3];
		if (path.extname(file) == ext {
			console.log(file);
		}
	});
});