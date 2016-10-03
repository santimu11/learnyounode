var modulo = require('./modulo');

var callback = function(error, files) {
	if (error) console.log(error);
	else {
		files.forEach(function(file) {
			console.log(file);
		});
	}
} 

modulo(process.argv[2], process.argv[3], callback);