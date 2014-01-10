angular.module("customFilters", [])
    .filter("reverse", function(){
        return function(txt){
            return txt.split("").reverse().join("");
        }
    });