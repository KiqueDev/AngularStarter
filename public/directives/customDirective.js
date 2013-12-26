angular.module("customDirective", [])
    .directive("namer", function(){ // Class example
        return {
            scope:{},
            restrict:"C",
            link: function(scope, elem, attr){
                scope.full = attr.name + " " + attr.num;
                scope.name = attr.name;
                scope.num = attr.num;
            },
            template: "{{name}} {{num}}"
        }
});  