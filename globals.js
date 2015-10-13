var config = require('./config.json');

module.exports = function(server) {
  // register hapi-locals plugin
  server.register({
    register: require('hapi-locals')
  }, function(err) {
    if (err) {
      throw err;
    }
  });

  // Define global methods and variables here
  server.methods.locals('app_name', config.app_name);
  server.methods.locals('app_description', config.app_description);
}
