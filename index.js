var fs = require("fs");

var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server({ debug: { request: ['error'] } });
server.connection({
  port: process.env.PORT || 5000,
  routes: {
    json: {
      space: 4
    },
    cors: true
  }
});

server.views({
  engines: {
    jade: require('jade')
  },
  relativeTo: __dirname + '/views',
});


// Configure routes
var routes = require('./routes')(server);

server.start(function (err) {
  console.log(err);
  console.log('Server running at:', server.info.uri);
});
