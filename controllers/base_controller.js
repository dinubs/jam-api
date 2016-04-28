'use strict';

let $ = require('cheerio');
let request = require('request');

let convert = require('../services/html_to_json');

module.exports = {
  index: function(req, res) {
    res.view('base/index', {title: 'Hello'});
  },
  parse: function(req, res) {
    request(req.payload.url, function(err, data, body) {
      if (err) return res(err.toString());
      // This is a poor fix to the issue, but for the time being since it's 4 in the morning.
      try {
        let json_data = JSON.parse(req.payload.json_data);
        return res(convert(json_data, $.load(body)));
      } catch(e) {
        return res({'error': 'invalid JSON'});
      }
    });
  }
}
