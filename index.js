// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (str) { return str.toUpperCase() == string.toUpperCase()});
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (str) {return str.slice(0, string.length) === string});
}

function matchName(drivers, string) {
  return drivers.filter(function (str) {return str.name === string});
}