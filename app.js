global.express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	next();
});

app.use(express.static('public'));
var port = process.argv[2] || 3002;
http.listen(port, function (req, res) {
	console.log('Express server running on port -->' + port);
});