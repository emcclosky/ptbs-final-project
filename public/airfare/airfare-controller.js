(function(){
    angular
      .module('app')
      .controller('AirfareController', function  (DataFactory, $http) {
      var vm = this;
      var finalSelections = DataFactory.finalSelections;
      $http.get(`api/prices/month-matrix?show_to_affiliates=false&origin=${origin}&destination=${destination}&month=2018-03-17`).then(result => {
        console.log(result);
      });


    });
  })();
