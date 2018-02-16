var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port', process.env.PORT);

//middleware gets css etc - has to be above static path to get all
app.use(function(request, response, next) {
	console.log(request.method, request.url);
	next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended : false }));

app.use('/api', routes);

// app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/', function(req, res){
   console.log('get the home page');
   res
   .status(200)
   .sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/json', function(req, res){
   console.log('get the home page');
   res
   .status(200)
   .json({"name": "Abby"});
});

app.get('/file', function(req, res){
   console.log('get file');
   res
   .status(200)
   .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('listening ' + port);
});