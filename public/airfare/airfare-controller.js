(function(){
  angular
    .module('app')
    .controller('AirfareController', function (APIFactory, $http, $timeout) {
    var vm = this;
    vm.$onInit = function () {
      vm.showLoader = true;
      APIFactory.apiCall().then(function(result){
        vm.showLoader = false;
        $timeout(vm.finalSelections = result);
    
      }); 
    }
  });
})();

