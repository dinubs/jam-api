(function () {
  "use strict";

  var fs = require('fs')
    , location
    , defaultLocation
    ;

  defaultLocation = {
    "origin": "http://localhost:3000",
    "pathname": "/",
    "host": "localhost:3000",
    "hostname": "localhost",
    "port": "3000",
    "search": "",
    "hash": "#home",
    "href": "http://localhost:3000/#home",
    "protocol": "http:"
  };

  try {
    location = fs.readFileSync('./location.config.js');
  } catch(e) {
    location = defaultLocation;
  }

  module.exports = location;
}());
