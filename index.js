function findMatching(drivers, string) {
  const result = drivers.filter(function(str) {
    return str.toUpperCase() === string.toUpperCase();
  });
  return result;
}

function fuzzyMatch(drivers, string) {
  const result = drivers.filter(function(str) {
    return str.slice(0, string.length) === string;
  });
  return result;
}

function matchName(drivers, string) {
  const result = drivers.filter(function(str) {
    return str.name === string;
  });
  return result;
}
