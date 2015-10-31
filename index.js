var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');
var sh = require('shelljs');

var www_root = path.join(__dirname, 'www');
var port = 8080;

connect().use(serveStatic(www_root)).listen(port);

console.log('Serving directory ' + www_root + '. Server listening at localhost:' + port.toString());
