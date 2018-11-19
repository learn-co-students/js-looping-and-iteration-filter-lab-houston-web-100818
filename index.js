// Code your solution in this file
drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

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

