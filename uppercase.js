var map = require('through2-map');
var http = require('http');

var server = http.createServer(function(req, res) {ç
	if (req.method != 'POST'){
		return res.end('Envíame un POST\n');
	}

	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(process.argv[2]);