(function(){
  angular
    .module('app')
    .controller('AirfareController', function (DataFactory, $http) {
    var vm = this;
    var finalSelections = DataFactory.getUserResults();
    var userAirport = DataFactory.userAirport;
    console.log('userAirport', userAirport);
    console.log('finalSelections', finalSelections);

    DataFactory.getUserResults();
    $http.get(`api/prices/month-matrix?currency=usd&show_to_affiliates=false&origin=${userAirport}&destination=CHI&month=2018-03-21`).then(result => {
      console.log(result);
    });


  });
})();

