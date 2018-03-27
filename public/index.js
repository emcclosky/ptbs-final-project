(function(){
    angular.module('app', ["ngRoute", "airports"])
      .config(function($routeProvider){
        $routeProvider
          .when('/', {
            template: '<welcome></welcome>'
          })
          .when('/app', {
            template: '<this-or-that></this-or-that>'
          })
          .when('/airfare', {
            template: '<airfare></airfare>'
          })
      });
  })();
  