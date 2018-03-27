(function(){
    angular.module('airports', [])
      .component('airportInput', {
        bindings: {
          onChange: '<'
        },
        template: `
          <input class="inputs" placeholder="Enter your airport" list="airports" ng-model="$ctrl.selectedAirport" ng-change="$ctrl.onChange($ctrl.selectedAirport)">
          <datalist  id="airports">
            <option ng-repeat="airport in $ctrl.airports" ng-value="airport.code">{{airport.city}}</option>
          </datalist>
        `,
        controller: function($http) {
          var vm = this;
          $http.get('airports/airports.json').then(result => {
            vm.airports = result.data.filter(airport => {
              return  airport.country === 'United States';
            });
          });
        },
      });
  })();