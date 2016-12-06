var
http = require('http'),
md = require('../md-plus'),

server = http.createServer(function(req, res) {
	var data = md.renderFile('./README.md');
	res.end(data);
});

server.listen(3000, function() {
	console.log('Listening on 3000...');
});
