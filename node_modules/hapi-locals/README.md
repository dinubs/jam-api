Hapi Locals
===========

A Hapi plugin to add local variables and functions to all templates rendered.

## Goal:
Add server method "locals" to add global variables and functions for all templates. Just like app.locals in expressjs.

## How to use

```javascript

// register plugin
plugins = [];

plugins.push({
  register: require("hapi-locals")
});

// or, with hoek merge options
plugins.push({
  register: require('hapi-locals'),
  options: {
    isMergeArrays: false
  }
});

server.register(plugins, function(err) {
  if (err) {
    throw err;
  }
});

// set local variable or function
server.methods.locals("siteTitle", "My SiteTitle");

server.methods.locals("cacheVer", "1922");

server.methods.locals("sayHi", function(name) {
  return "Hello " + name;
});

```

Using in jade template
```jade
title #{siteTitle}

link(rel='stylesheet', href='/public/css/main.css?#{cacheVer}')

p!= sayHi("Tony")
```

## Plugin Options

hapi-locals use [hoek.merge] (https://github.com/hapijs/hoek#mergetarget-source-isnulloverride-ismergearrays) to merge the context, you can set the merge parameters in options 

### isNullOverride
default to true

### isMergeArrays
default to true
