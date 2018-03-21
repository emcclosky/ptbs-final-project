(function(){
  angular
    .module('app')
    .controller('AirfareController', function (DataFactory, $http) {
    var vm = this;
    var finalSelections = DataFactory.finalSelections;
    var userAirport = DataFactory.userAirport;
    console.log('userAirport', userAirport);
    console.log('finalSelections', finalSelections);

    DataFactory.getUserResults();
    $http.get(`api/prices/month-matrix?currency=usd&show_to_affiliates=false&origin=${userAirport}&destination=CHI&month=2018-03-21`).then(result => {
      console.log(result);
    });


  });
})();


//http://api.travelpayouts.com/v2/prices/month-matrix?currency=usd&origin=LED&destination=HKT&show_to_affiliates=true&token=PutHereYourToken