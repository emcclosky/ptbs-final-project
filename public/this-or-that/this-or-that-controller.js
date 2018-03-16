(function(){
    angular
      .module('app')
      .controller('ThisOrThatController', function (DataFactory) {
        var vm = this;
        var optIndex = 0;
        var lists = DataFactory.lists;
        vm.options = lists[optIndex];

        //ng -click
        vm.setOptions = function(tag){
        if (optIndex === 5) {
            $location.path('/airfare');
        }
        // saveOpt();
        optIndex++;
        vm.options = lists[optIndex];
        }

        function saveOpt (tag) {
        DataFactory.options[optIndex] = tag;
        }

        vm.back = function(){
        optIndex--;
        vm.options = lists[optIndex];
        };
  
    });
  })();
