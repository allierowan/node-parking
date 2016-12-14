var fs = require("fs");
var parse = require('csv-parse');

module.exports = {
  parseFileToArray
};


function parseFileToArray (fileName, callback) {
  var allFebParkingTicketsString;

  fs.readFile(fileName, function loadFile(err, data){
     allFebParkingTicketsString = data.toString("utf-8");
     dataArray = myParse(allFebParkingTicketsString, callback);
  });
}

function myParse(csvString, callback) {
  return parse(csvString, {delimiter: ','}, function makeArray(err, data) {
    callback(data);
  });
}
