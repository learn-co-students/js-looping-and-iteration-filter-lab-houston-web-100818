
function findMatching(drivers, str) {
   return drivers.filter(function (driver) {return driver.toLowerCase() === str.toLowerCase()})
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(function (driver) { return driver.toLowerCase()[0] === str.toLowerCase()[0]; });

}

function matchName(drivers, str) {
    return drivers.filter(function (driver) { return driver["name"].toLowerCase() === str.toLowerCase(); });

}