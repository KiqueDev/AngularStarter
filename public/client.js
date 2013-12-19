(function(){
	var starterApp = angular.module("starterApp", ['ngRoute']);

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

	//////// Module Styles /////////
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

	// Controlelr with hardcoded Data
	controllers.homeController = function($scope){
		$scope.pageName = "Home";
		$scope.people = [
			{ name: "Edward", sex: "male" },
			{ name: "Enri", sex: "male" },
			{ name: "Lisa", sex: "female" },
			{ name: "Mike", sex: "male" }
		];

		$scope.add = function(){
			$scope.people.push({name:$scope.newPerson.name, sex:"male"});
		}

	};

	// Controller using "Factory"
	controllers.aboutController = function($scope, starterAppFactory){
		$scope.pageName = "About";
		$scope.people = starterAppFactory.getObject();
	};

	// Controller Deafult
	controllers.contactController = function($scope){
		$scope.pageName = "Contact";
		$scope.content = "Information about contact us goes here";
	};
	// ...
	starterApp.controller(controllers);
}());