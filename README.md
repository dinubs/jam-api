# Jam API
Jam API is a service that allows you to turn any site into a JSON accessible api using CSS selectors. To get started simply run a post request to http://www.jamapi.xyz with formdata of "url" and "json_data", here's an example of what your data should look like:
```json
{
  "title": "title",
  "logo": ".nav-logo img",
  "paragraphs": [{ "elem": ".home-post h1", "value": "text"}], 
  "links": [{"elem": ".home-post > a:first-of-type", "location": "href"}]
}
```
Using API you can simply generate JSON data from any website.

## Code samples
### nodejs
```js
const request = require('request');
request.post('http://www.jamapi.xyz/', {form: {url: 'http://www.gavin.codes/', json_data: '{"title": "title"}'}}, function(err, response, body) {
  console.log(body);
})  
```
### Javascript
```js
fetch('http://www.jamapi.xyz', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: 'http://www.gavin.codes/',
      json_data: '{"title": "title"}'
    })
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    document.body.innerHTML = json;
  });  
```
### Ruby
```ruby
require 'httparty'
response = HTTParty.post("http://www.jamapi.xyz/",
  :body => { "url" => "http://www.gavin.codes/", "json_data" => "{'title': 'title'}"})  
puts response.to_json
```
### Python
```python
import requests
payload = {'url': 'http://www.gavin.codes/', 'json_data': '{"title": "title"}'}

r = requests.post("http://www.jamapi.xyz", data=payload)
print(r.json())
```

## Features
Will auto pull the img src on corresponding elements, will auto pull the href from links. If passing JSON, you must provide a "elem" property, and then the element attributes you want. When you pass an array with JSON you'll get a structure that looks as follows:
```json
[
  {
      "index": 0,
      "value": {
          "value": "Porter Robinson – Sad Machine (Cosmo’s Midnight Remix)"
      }
  },
  {
      "index": 1,
      "value": {
          "value": "Listen to Rachel Platten’s “Stand By You”"
      }
  }]
```
All the attributes you provide as JSON will be put inside of the value property, and the index property is to be able to track what index it ocurred in the DOM. I nested JSON values into it's own so that you can still have an "index" property returned and not run into issues.

## How it works
Main power of the program is in `services/html_to_json.js`. Start site with `node index` after doing `npm install`.

Suggested node version is at least `4.2.2`
