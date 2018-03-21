(function(){
  angular
    .module('app')
    .controller('AirfareController', function (DataFactory, $http) {
    var vm = this;
    vm.finalSelections = DataFactory.getUserResults();
    var userAirport = DataFactory.userAirport;

    console.log('userAirport', userAirport);
    console.log(vm.finalSelections);

    vm.finalSelections.forEach

    $http.get(`api/prices/month-matrix?currency=usd&show_to_affiliates=false&origin=${userAirport}&destination=DUB&month=2018-04-21`).then(result => {
      vm.destination = result;
      console.log(result);

    });


  });
})();

