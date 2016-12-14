console.log('Starting up....');

var data = require("./data-processor");
var _ = require("lodash");


data.parseFileToArray('./parking-data/parking_feb_2016.csv', function logData(data) {
  //number of feb parking tickets
  console.log("Number of parking tickets in feb: " + data.length);

  var allTicketTypes = [];
  data.forEach(function getTicketTypes(ticket) {
    allTicketTypes.push(ticket[10]);
  });
  uniqueTicketTypes = _.uniq(allTicketTypes);
  console.log("Number of ticket types issued in feb: " + uniqueTicketTypes.length);

  var ticketOccurences = _.countBy(allTicketTypes);
  _.maxBy(ticketOccurences, function maxValue(occurence){
    return occurence.values;
  });

  maxValue = _.max(_.values(ticketOccurences));
  invertedObject = _.invert(ticketOccurences);
  console.log("The most common ticket type was: " + invertedObject[15151]);

});
