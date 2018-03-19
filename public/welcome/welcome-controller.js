(function(){
    angular
      .module('app')
      .controller('WelcomeController', function (APIFactory, DataFactory) {
      var vm = this;
  
      vm.addAirport = function () {
        if(!vm.newAirport){
          return;
        }
        APIFactory.post(vm.newAirport).then(function(result) {
          
          // vm.toDos.push(result.data);
          // DataFactory.setData(vm.toDos);
          vm.newAirport = '';        
        
        }).catch(function(err){
          console.log(err);
        })
  
        };

    });
  })();