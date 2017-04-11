var qr = require('qr-image');
var fs = require('fs');
var path = require('path');

if (process.argv[2]) {
  var manuelGeneratedQrImagePath = path.join('output', 'qr_manual.png');
  qr.image(process.argv[2], {
    ec_level: 'Q',
    size: 10,
  }).pipe(fs.createWriteStream(manuelGeneratedQrImagePath));
  require('child_process').spawn('open', [manuelGeneratedQrImagePath]);
  return;
}

fs.readFile('urls.txt', 'utf8', function(err, contents) {
  contents.split('\n').forEach(function(elem,index) {
    qr.image(elem, {
      ec_level: 'Q',
      size: 10,
    }).pipe(fs.createWriteStream(path.join('output', 'qr'+index+'.png')));
  });  
});