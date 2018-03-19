(function(){
    angular
      .module('app')
      .controller('ThisOrThatController', function (DataFactory, $location) {
        var vm = this;
        var optIndex = 0;
        var lists = DataFactory.lists;
        vm.options = lists[optIndex];

        //ng -click
        vm.setOptions = function(tag){
            if (optIndex === 3) {
                $location.path('/airfare');
                //change optIndex back to  === 5
            }
            saveOpt(tag);
            optIndex++;
            vm.options = lists[optIndex];
        }

        function saveOpt (tag) {
            DataFactory.userChoices.push(tag);
        }

        vm.back = function(tag){
            optIndex--;
            vm.options = lists[optIndex];
            DataFactory.userChoices.pop(tag)
        };
  
    });
  })();
