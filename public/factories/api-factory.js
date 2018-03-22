(function(){
    angular.module('app')
      .factory('APIFactory', function($http, DataFactory){
        var data;

        function apiCall(userAirport, finalSelections){
          airports = [];
          for (var i = 0; i < 3; i++){
            airports.push(finalSelections[i].airport);
          };
          for (var i = 0; i < 3; i ++){
            var destination = airports[i];
            console.log(destination);

            // removed both the from and to airport
            
            $http.get(`api/prices/month-matrix?currency=usd&show_to_affiliates=false&origin=${userAirport}&destination=${destination}&month=2018-04-21`).then(result => {
              data = result;
              console.log('it is me the data', data);
            }); 
          }}

      
        
        return {
           data,
           apiCall
        };
  
  
      });
  })();
  