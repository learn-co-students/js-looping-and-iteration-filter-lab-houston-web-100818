// Code your solution in this file
function findMatching(drivers, string) {
  let match = drivers.filter(function (str) { return str.toUpperCase() == string.toUpperCase()});
  return match;
}

function fuzzyMatch(drivers, string) {
  let fuzz = drivers.filter(function (str) {return str.slice(0, string.length) === string});
  return fuzz;
}

function matchName(drivers, string) {
  let match = drivers.filter(function (str) {return str.name === string});
  return match;
}