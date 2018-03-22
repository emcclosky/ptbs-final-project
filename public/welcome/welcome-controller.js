(function(){
    angular
      .module('app')
      .controller('WelcomeController', function (APIFactory, DataFactory) {
      var vm = this;

      vm.addAirport = function () {
        if(!vm.newAirport){
          return;
        } else {
          DataFactory.setUserAirport(vm.newAirport);
        }
  
        };

    });
  })();