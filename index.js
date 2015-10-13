var fs = require("fs");

var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port: process.env.PORT || 3000});

server.views({
  engines: {
    jade: require('jade')
  },
  relativeTo: __dirname + '/views',
});

var globals = require('./globals')(server);


// Configure routes
var routes = require('./routes')(server);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});