(function(){
  angular
    .module('app')
    .controller('AirfareController', function (APIFactory, DataFactory, $http) {
    var vm = this;
    vm.finalSelections = DataFactory.getUserResults();
    vm.userAirport = DataFactory.getUserAirport();

    APIFactory.apiCall(vm.userAirport, vm.finalSelections);  

  });
})();

