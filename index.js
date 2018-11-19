// Code your solution in this file
drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
function findMatching(drivers, string) {

    let match = drivers.filter(function (str) { return str.toUpperCase() == string.toUpperCase()});
    return match;
}
function fuzzyMatch(drivers, string) {
    let fuzzyMatch = drivers.filter(function (str) { return str.slice(0, string.length) === string});
    return fuzzyMatch;
}

function matchName(drivers, string) {
    let matchName = drivers.filter(function (str) { return str.name === string});
    return matchName;
  }

