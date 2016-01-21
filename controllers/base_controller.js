var $ = require('jparser');
var request = require('request');

var convert = require('../services/html_to_json');

module.exports = {
  index: function(req, res) {
    res.view('base/index', {title: 'Hello'});
  },
  parse: function(req, res) {
    request(req.query.url, function(err, data, body) {
      if (err) return res(err.toString());
      body = $(body);
      res(convert(req.payload, body));
    });   
  }
}