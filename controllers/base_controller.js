'use strict';

let $ = require('cheerio');
let request = require('request');

let convert = require('../services/html_to_json');

module.exports = {
  index: function(req, res) {
    res.view('base/index', {title: 'Hello'});
  },
  parse: function(req, res) {
    request(req.query.url, function(err, data, body) {
      if (err) return res(err.toString());
      let json_data = JSON.parse(req.payload.json_data);
      res(convert(json_data, $.load(body)));
    });
  }
}

