function findMatching(array, string){
  return array.filter(name => name.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(array, string) {
  return array.filter(name => name.slice(0,2).toUpperCase() === string.toUpperCase());
}

function matchName(array, string){
  return array.filter(names => names.name === string);
}
