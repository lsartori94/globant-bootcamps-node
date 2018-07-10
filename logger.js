const fs = require('fs');
const moment = require('moment');

var Logger = exports.Logger = {};

let wstream = fs.createWriteStream('myOutput.txt');
  wstream.write(new Date )
  wstream.write('message');
  wstream.end();
