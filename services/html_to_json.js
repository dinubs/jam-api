'use strict';

let $ = require('cheerio');

function parse_object(obj, elem) {
  var temp_obj = {};
  delete obj.elem;
  for (var key in obj) {
    if (obj[key] === 'text') {
      temp_obj[key] = $(elem).text();
    } else {
      temp_obj[key] = elem.attribs[obj[key]];
    }
  }
  return temp_obj;
}

function get_primary_type(obj, elem) {
  console.log(obj);
  console.log(elem);
  if (obj === 'img') {
    return elem.attribs['src'];
  }
  return elem.text();
}

function array_element(obj, elems) {
  var temp_tags = elems;
  var temp_array = [];
  for (var i = 0; i < temp_tags.length; i++) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      var temp_obj = parse_object(obj, temp_tags.get(i));
      console.log(temp_obj);
      temp_array.push(temp_obj);
    } else {
      temp_array.push(get_primary_type(obj, temp_tags.get(i)));
    }
  }
  return temp_array;
}

function convert(tags, $) {
  var converted_tags = {};
  
  for (var key in tags) {
    if (tags.hasOwnProperty(key)) {
      if (Array.isArray(tags[key])) {
        if (Object.prototype.toString.call(tags[key][0]) === '[object Object]') {
          var elem = tags[key][0];
          converted_tags[key] = array_element(elem, $(tags[key][0]['elem']));
        } else {
          var elem = tags[key][0];
          converted_tags[key] = array_element(elem, $(tags[key][0]));
        }
      } else {
        converted_tags[key] = $(tags[key]).text();
      }
    }
  }
  
  return converted_tags;
}

module.exports = convert;
