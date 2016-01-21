function convert(tags, doc) {
  var converted_tags = {};
  
  for (var key in tags) {
    if (tags.hasOwnProperty(key)) {
      
      if (Array.isArray(tags[key])) {
        converted_tags[key] = [];
        var temp_tags = doc.find(tags[key][0]);
        for (var i = 0; i < temp_tags.length; i++) {
          converted_tags[key][i] = doc.find(temp_tags.get(i)).attr('href');
        }
      } else {
        converted_tags[key] = doc.find(tags[key]).text();  
      }
    }
  }
  
  return converted_tags;
}

module.exports = convert;
