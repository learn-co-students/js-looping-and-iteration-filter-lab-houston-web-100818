function findMatching(drivers, string) {
  return drivers.filter(function(name) {
    return name.toUpperCase() === string.toUpperCase()
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(name) {
    return name.slice(0, string.length).toUpperCase() === string.toUpperCase()
  })
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver['name'] === string
  })
}
