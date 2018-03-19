(function(){
    angular
      .module('app')
      .controller('AirfareController', function (APIFactory, DataFactory) {
      var vm = this;
      var finalSelections = DataFactory.finalSelections;
      
      console.log('getUserResults', DataFactory.getUserResults());

    });
  })();