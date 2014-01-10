(function(){
    var starterApp = angular.module("starterApp", ["ngRoute", "customDirectives", "customControllers", "customServices", "customFilters"]);

    starterApp.config(function($routeProvider){
        // Setting The Routes
        $routeProvider
            .when("/",
                {
                    controller:"homeCtrl",
                    templateUrl:"views/home.html"
                })
            .when("/controllers",
                {
                    controller:"controllersCtrl",
                    templateUrl:"views/controllers.html"
                })
            .when("/directives",
                {
                    controller:"directivesCtrl",
                    templateUrl:"views/directives.html"
                })
            .when("/services",
                {
                    controller:"servicesCtrl",
                    templateUrl:"views/services.html"
            })
            .when("/filters",
                {
                    controller:"filtersCtrl",
                    templateUrl:"views/filters.html"
            })
            .otherwise({ redirectTo:"/"});
    });
}());