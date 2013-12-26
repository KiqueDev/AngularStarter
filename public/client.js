(function(){
    var starterApp = angular.module("starterApp", ["ngRoute", "customDirective"]);

    starterApp.config(function($routeProvider){
        // Setting The Routes
        $routeProvider
            .when("/",
                {
                    controller:"homeController",
                    templateUrl:"views/home.html"
                })
            .when("/about",
                {
                    controller:"aboutController",
                    templateUrl:"views/about.html"
                })
            .when("/contact",
                {
                    controller:"contactController",
                    templateUrl:"views/contactus.html"
                })
            .otherwise({ redirectTo:"/"});
    });

    //////// Testing Directives  /////////
    starterApp.directive('directiveElement', function(){ // Element example
        return {
            restrict:"E",
            link: function(scope, elem, attr){
                scope.title = attr.title;
            },
            replace:true,
            template: "<h1>{{title}}</h1>"
        }
    });

    //////// Testing Modules Services /////////
    var MyFunc = function() {
        this.name = "default name";

        this.$get = function() {
            this.name = "new name"
            return "Hello from MyFunc.$get(). this.name = " + this.name;
        };

        return "Hello from MyFunc(). this.name = " + this.name;
    };
    // returns the actual function
    starterApp.service( 'myService', MyFunc );

    // returns the function's return value
    starterApp.factory( 'myFactory', MyFunc );

    // returns the output of the function's $get function
    starterApp.provider( 'myProv', MyFunc );

    starterApp.factory('starterAppFactory', function() {
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
    });
        
    // Controllers
    var controllers = {};

    // Controller with hardcoded Data
    controllers.homeController = function($scope){
        $scope.pageName = "Home";
        $scope.people = [
            { name: "Edward", sex: "male" },
            { name: "Enri", sex: "male" },
            { name: "Lisa", sex: "female" },
            { name: "Mike", sex: "male" }
        ];

        $scope.add = function(){
            if($scope.newPerson && $scope.newPerson.name.length != 0){
                $scope.people.push({name:$scope.newPerson.name, sex:"male"});
            }
        }

    };

    // Controller using "Factory"
    controllers.aboutController = function($scope, starterAppFactory){
        $scope.pageName = "About";
        $scope.content = "Information about info goes here";
        // $scope.people = starterAppFactory.getObject();
    };

    // Controller Deafult
    controllers.contactController = function($scope){
        $scope.pageName = "Contact";
    };

    controllers.testingServicesController = function($scope, myService, myFactory, myProv ){
        $scope.serviceOutput = "myService = " + myService;
        $scope.factoryOutput = "myFactory = " + myFactory;
        $scope.providerOutput = "myProvider = " + myProv;
    };

    // ...
    starterApp.controller(controllers);
}());