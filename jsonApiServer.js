/*var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var ParseUrl = url.parse(req.url, true);
	var fecha = new Date().toISOString();
	var resultado;

	if (req.method != 'GET') {
		return res.end('Envíame un GET\n');
	}


	if (resultado) {
		res.writeHead(200, {
			'Content-Type': 'application/json';
		});
		res.end(JSON.stringify(resultado));
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(process.argv[2]);*/

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

	var objURL = url.parse(req.url, true);
	var fecha = new Date(objURL.query.iso);
	var objJSON;

	if (req.method != 'GET') {
		res.writeHead(405);
		return res.end('Envíame un GET\n');
	} else {
		if (objURL.pathname === '/api/parsetime') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			objJSON = {
				"hour": fecha.getHours(),
				"minute": fecha.getMinutes(),
				"second": fecha.getSeconds()
			};

		} else if (objURL.pathname === '/api/unixtime') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			objJSON = {
				"unixtime": fecha.getTime()
			};

		} else {
			res.writeHead(404);
			objJSON = {
				"ERROR": "No has elegido la opcion correcta"
			};
		}

		res.end(JSON.stringify(objJSON));

	}



});

server.listen(process.argv[2]);