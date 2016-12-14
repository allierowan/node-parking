console.log('Starting up....');

var data = require("./data-processor");
var _ = require("lodash");
var analyze = require("./analysis");


data.parseFileToArray('./parking-data/parking_feb_2016.csv', function logData(data) {
  //number of feb parking tickets

  console.log("Number of parking tickets in feb: " + analyze.numParkingTickets(data));

  console.log("Number of ticket types issued in feb: " + analyze.numTicketTypesIssued(data));

  console.log("The most common ticket type was: " + analyze.mostCommonTicketTypes(data));

  console.log("The driver who received the last ticket in february was from: " + analyze.stateOfLastTicket(data));
});
