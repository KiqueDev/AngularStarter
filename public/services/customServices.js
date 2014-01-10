var MyFunc = function() {
    this.name = "default name";

    this.$get = function() {
        this.name = "new name"
        return "Hello from MyFunc.$get(). this.name = " + this.name;
    };

    return "Hello from MyFunc(). this.name = " + this.name;
};

angular.module("customServices", [])
    // returns the actual function
    .service( 'myService', MyFunc )

    // returns the function's return value
    .factory( 'myFactory', MyFunc )

    // returns the output of the function's $get function
    .provider( 'myProv', MyFunc )

    // Simple Basic
    .factory('starterAppFactory', function() {
        var object = []; // Ajax data
        var factory = {};
        factory.sayHello = function() {
                return "Hello";
        };

        factory.addObject = function(p){    
            people.push(p);
        };

        factory.getObject = function(){
            return object;
        };
        return factory;
    })
    .factory( 'sharingDataCtrl', function(){
        return {message: "Shared Data"};
    });