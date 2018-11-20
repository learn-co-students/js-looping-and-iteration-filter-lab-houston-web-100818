// Code your solution in this file
function findMatching(drivers, string){
    let driversFound = drivers.filter(function(driver){
        if (driver.toUpperCase() == string.toUpperCase()){
            return true;
        }
    });
    return driversFound
}

function fuzzyMatch(drivers, string) {
    let driversFound = drivers.filter(function (driver) {
        if (driver.charAt(0) == string.charAt(0)) {
            return true;
        }
    });
    return driversFound
}
function matchName(drivers, string) {
    let driversFound = drivers.filter(function (driver) {
        if (driver.name == string) {
            return true;
        }
    });
    return driversFound
}