var data = require("./data-processor");
var _ = require("lodash");
var fullParkingDataSet;

module.exports = {
  numParkingTickets,
  numTicketTypesIssued,
  mostCommonTicketTypes,
  stateOfLastTicket
};

function numParkingTickets(data) {
  return data.length;
}

function numTicketTypesIssued(data) {
  var allTicketTypes = [];
  data.forEach(function getTicketTypes(ticket) {
    allTicketTypes.push(ticket[10]);
  });
  uniqueTicketTypes = _.uniq(allTicketTypes);
  return uniqueTicketTypes.length;
}

function mostCommonTicketTypes(data) {
  var allTicketTypes = [];
  data.forEach(function getTicketTypes(ticket) {
    allTicketTypes.push(ticket[10]);
  });
  var ticketOccurences = _.countBy(allTicketTypes);
  _.maxBy(ticketOccurences, function maxValue(occurence){
    return occurence.values;
  });

  maxValue = _.max(_.values(ticketOccurences));
  invertedObject = _.invert(ticketOccurences);
  return invertedObject[15151];
}

function stateOfLastTicket(data) {
  var statesAndDates = [];
  data.forEach(function getTicketTypes(ticket) {
    statesAndDates.push([ticket[18], ticket[12]]);
  });

  var sortedStatesAndDates = _.sortBy(statesAndDates, [function getDate(tuple){
    return tuple[0];
  }]);

  sortedStatesAndDates.pop();
  return _.last(sortedStatesAndDates)[1];
}
