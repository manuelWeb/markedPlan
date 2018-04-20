// Use a Node.js core library
var url = require('url');
var fs = require('fs');

// Parse the URL of the current location
var parts = url.parse(window.location);

// Log the parts object to our browser's console
console.log(parts);
fs.readFile('README.md', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});