var connect = require('connect');
var serveStatic = require('serve-static');
var sh = require('shelljs');

var path = __dirname + '/www';
var port = 8080;

connect().use(serveStatic(path)).listen(port);

console.log('Serving directory ' + path + '. Server listening at localhost:' + port.toString());
