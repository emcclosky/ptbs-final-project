(function(){
    angular.module('app')
      .factory('APIFactory', function($http){
        var data;
        return{
           post
        };
   
        function post (data) {
          return $http.post('/api/startingAirport/', data);
        }
  
      });
  })();
  