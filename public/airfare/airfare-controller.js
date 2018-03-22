(function(){
  angular
    .module('app')
    .controller('AirfareController', function (APIFactory, $http, $timeout) {
    var vm = this;
    vm.$onInit = function () {
      APIFactory.apiCall().then(function(result){
        $timeout(vm.finalSelections = result);
      }); 
    }
  });
})();

