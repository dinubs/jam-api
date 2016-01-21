location
====

A mock location object for unit tests and such and to maintain compatibility between `Ender.JS` and `Node.JS`

For best results, create a `location.config.js` in the working directory of your app that returns a location object that should be used.

Current Implementation
---

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
      // TODO try all from `__dirname` to `/` before giving up
      location = fs.readFileSync('./location.config.js');
    } catch(e) {
      location = defaultLocation;
    }

    module.exports = location;

TODO
---

Look for `__dirname + "location.config.js"` and then look up one directory at each failure before finally giving up and using the default object.
