var qr = require('qr-image');
var fs = require('fs');
var path = require('path');

fs.readFile('urls.txt', 'utf8', function(err, contents) {
  contents.split('\n').forEach(function(elem,index) {
    qr.image(elem, {
      ec_level: 'Q',
      size: 10,
    }).pipe(fs.createWriteStream(path.join('output', 'qr'+index+'.png')));
  });  
});