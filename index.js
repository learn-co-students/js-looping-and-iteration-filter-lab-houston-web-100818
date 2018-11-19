function findMatching(array, name){
    return array.filter(function(element){
        return element.toLowerCase() === name.toLowerCase()
    })
};

function fuzzyMatch(array, substring){
    return array.filter(
        function (element){
            return element.slice(0,substring.length) === substring
        }
    )
};

function matchName(array, name){
    return array.filter(
        function (element){
            return element.name.toLowerCase() === name.toLowerCase()
        }
    )
};