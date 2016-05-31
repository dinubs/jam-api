var c = require('./controllers/index');

module.exports = function(server) {
  // Base routes
  server.route({method: 'GET', path: '/', handler: c.Base.index});
  server.route({method: 'POST', path: '/', handler: c.Base.parse});

  server.route({
    path: '/{p*}',
    method: 'OPTIONS',
    handler: function(req, reply){
      console.log('test');
      reply({method: 'options'});
    },
    config: {
      auth: false,
      cors: true
    }
  });

  // Static files
  server.route({
    method: 'GET',
    path: '/css/{file}.css',
    handler: function (request, reply) {
        reply.file("./public/css/"+request.params.file+".css");
    }
  });
  server.route({
      method: 'GET',
      path: '/js/{file}.js',
      handler: function (request, reply) {
          reply.file("./public/js/"+request.params.file+".js");
      }
  });
};
