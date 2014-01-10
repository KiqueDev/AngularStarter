// Controllers
var controllers = {};

controllers.homeCtrl = function($scope){
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

controllers.controllersCtrl = function($scope){
    $scope.pageName = "Controllers";
};


controllers.directivesCtrl = function($scope){
    $scope.pageName = "Directives";
    $scope.content = "Content of templating here";

    $scope.me = {
        email: "wuenrique@gmail.com",
        description: "Very nice developer in nyc"
    };

    $scope.devs = [
        {email:"mat@gmail.com", description:"Brasil cool guy"},
        {email:"kattie@gmail.com", description:"China fast runner and typer"},
        {email:"mike@gmail.com", description:"USA happy and lovely guy"}
    ];

    $scope.loadMoreData = function(){
        alert("Load more data!");
    }

    $scope.logToDo = function(todo){
        alert(todo + " is done!");
    }
};

controllers.servicesCtrl = function($scope, myService, myFactory, myProv ){
    $scope.pageName = "Services";
    $scope.serviceOutput = "myService = " + myService;
    $scope.factoryOutput = "myFactory = " + myFactory;
    $scope.providerOutput = "myProvider = " + myProv;
};

controllers.filtersCtrl = function($scope){
    $scope.pageName = "Filters";
    $scope.person = 
        [{ name: "Edward", age: "33" },
          { name: "Enri", age: "55" },
          { name: "Carl", age: "43" },
          { name: "Mike", age: "23" },
          { name: "Rose", age: "15" },
          { name: "Lisa", age: "24" },
          { name: "Nick", age: "33" }];
};

controllers.ctrl1 = function($scope, sharingDataCtrl){
    $scope.data = sharingDataCtrl;
};
controllers.ctrl2 = function($scope,  sharingDataCtrl){
    $scope.data = sharingDataCtrl;
};

angular.module("customControllers", [])
	.controller(controllers);