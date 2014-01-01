var express = require('express');

var http = require('http');
var path = require('path');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'public/templates'));
app.set('view engine', 'hjs');
app.use(express.favicon());
//app.use(express.bodyParser());
app.use(express.methodOverride());
//app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'www')));
app.use(express.logger('dev'));

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
