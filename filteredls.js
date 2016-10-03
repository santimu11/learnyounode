var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback(error, files) {
	if (error) console.error(error);
	files.forEach(function(file) {
		if (path.extname(file) == ("." + process.argv[3])) {
			console.log(file);
		}
	});
});