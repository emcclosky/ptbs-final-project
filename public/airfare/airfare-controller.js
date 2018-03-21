(function(){
  angular
    .module('app')
    .controller('AirfareController', function (DataFactory, $http) {
    var vm = this;
    var finalSelections = DataFactory.finalSelections;
    console.log('finalSelections', finalSelections);
    DataFactory.getUserResults();
    $http.get(`api/prices/month-matrix?show_to_affiliates=false&origin=DTT&destination=CHI&month=2018-03-17`).then(result => {
      console.log(result);
    });


  });
})();