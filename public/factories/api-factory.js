(function(){
    angular.module('app')
      .factory('APIFactory', function($http, DataFactory){
        var data;

        function apiCall(){
          var userAirport = DataFactory.getUserAirport();
          var destinations = angular.copy(DataFactory.getUserResults()).slice(0, 3);

          var promises = [];
          for (var i = 0; i < destinations.length; i ++){
            var destination = destinations[i].airport;
            promises.push($http.get(`api/prices/month-matrix?currency=usd&show_to_affiliates=false&origin=${userAirport}&destination=${destination}&month=2018-04-21`))
          }

          return Promise.all(promises).then(function(result){
            for (var i = 0; i < destinations.length; i++) {
              var destination = destinations[i];
              var price;
              if (result[i].data) {
                var prices = result[i].data.map(function(data){
                  return data.value;
                });
                price = Math.min(...prices);
              } else {
                price = undefined;
              }
              Object.assign(destination, { price })
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
  