(function(){
    angular.module('app', ["ngRoute"])
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
  
function returnHome () {
  document.location.href="/";
        }