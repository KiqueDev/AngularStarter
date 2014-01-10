// Directives
var directives = {};

directives.namer = function(){
    return {
        restrict:"AC",
        scope:{},
        link: function(scope, elem, attr){
            scope.full = attr.name + " " + attr.num;
            scope.name = attr.name;
            scope.num = attr.num;
        },
        template: "{{name}} {{num}}"
    }
};

directives.customDirective = function($parse){
    return {
        link: function(scope, elem, attr){
            scope.sentence = "";
            scope.$watch(attr.customDirective, function(sent){
                elem.text("Results: " + sent);
            });

            elem.bind("click", function(){
                console.log("Clicked Sentence Input");
                scope.$apply(function(){
                    $parse(attr.customDirective).assign(scope, "Default");
                });
            });
        }
    }
};

directives.profiler = function(){
    return {
        restrict:"E",
        scope:{
            email:"@",
            desc:"@"
        },
        templateUrl: "partials/profiler.html"
    }
};

directives.mouseEnter = function(){
    return {
        restrict:"A",
        link: function(scope, elem, attr){
          elem.bind("mouseenter", function(){
            console.log("mouse entered");
            scope.$apply(attr.mouseEnter);
          });
        }
    }
};

directives.mouseLeave = function(){
    return {
        restrict:"A",
        link: function(scope, elem, attr){
          elem.bind("mouseleave", function(){
            console.log("mouse leaved", attr.mouseLeave);
          });
        }
    }
};

directives.superhero = function(){
    return {
        restrict:"E",
        scope:{},
        controller: function($scope){
          $scope.abilities =[];
          this.addStrength = function(){ 
            $scope.abilities.push("Strength Power");
          }
          this.addSpeed = function(){
            $scope.abilities.push("Speed Power");
          }
          this.addFire = function(){
            $scope.abilities.push("Fire Power");
          }
        },
        link: function(scope, elem){
          elem.bind("click", function(){
            console.log(scope.abilities);
          });
        }

    }
};

directives.strength = function(){
    return {
        require:"superhero",
        link: function(scope, elem, attr, superHeroCtrl){
          superHeroCtrl.addStrength();
        }
    }
};
directives.speed =  function(){
    return {
        require:"superhero",
        link: function(scope, elem, attr, superHeroCtrl){
          superHeroCtrl.addSpeed();
        }
    }
};
directives.fire = function(){
    return {
        require:"superhero",
        link: function(scope, elem, attr, superHeroCtrl){
          superHeroCtrl.addFire();
        }
    }
};
directives.person =  function(){
    return {
        restrict:"E",
        scope:{
          done:"&"
        },
        template: "To Do List: <input type='text' ng-model='todo'>" +
                  "<br/>{{todo}}<br/>" +
                  "<div style='background:gray; padding:10px; width:100px;' ng-click='done({todo:todo})'>I am done</div>"
    }
};

directives.trans = function(){
    return {
        restrict:"E",
        transclude: true,
        template: "<div ng-transclude>Tranacluded div now</div>"
    }
};

angular.module("customDirectives", [])
    .directive(directives);