(function(){
    angular.module('app')
      .factory('APIFactory', function($http, DataFactory){
        var data;

        function apiCall(){
          var userAirport = DataFactory.getUserAirport();
          var destinations = DataFactory.getUserResults().slice(0, 3);
          var destinationNames = destinations.map(dest => dest.airport);
          return $http.get(`api/prices?origin=${userAirport}&destinations=${destinationNames.join(',')}`).then(function(result){
            for (var i = 0; i < destinations.length; i++) {
              var destination = destinations[i];
              var { price, url } = result.data[i].destination;
              Object.assign(destination, { price, url });
            }
            return destinations;
          });
        }

        
        return {
           data,
           apiCall
        };
  
  
      });
  })();
  