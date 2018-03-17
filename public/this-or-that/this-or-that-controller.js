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
            saveOpt(tag);
            optIndex++;
            vm.options = lists[optIndex];
        }

        function saveOpt (tag) {
            DataFactory.userSelects.push(tag);
        }

        vm.back = function(tag){
            optIndex--;
            vm.options = lists[optIndex];
            DataFactory.userSelects.pop(tag)
        };
  
    });
  })();
