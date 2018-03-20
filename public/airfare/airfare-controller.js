(function(){
    angular
      .module('app')
      .controller('AirfareController', function (APIFactoy, DataFactory, $http) {
      var vm = this;
       var finalSelections = DataFactory.finalSelections;
      $http.get("http://api.travelpayouts.com/v2/prices/month-matrix?show_to_affiliates=false&origin=DTT&destination=CHI&month=2018-03-17", { headers: {"X-Access-Token": "5c61b72f81da16dfda7b47729c783f90"}}).then(result => {
        console.log(result);
      })


    });
//we added the below
//$.getJSON not working
    // $.getJSON('curl --include --header "X-Access-Token: 5c61b72f81da16dfda7b47729c783f90" "http://api.travelpayouts.com/v2/prices/month-matrix?currency=rub&origin=LED&destination=HKT&show_to_affiliates=true&month=2018-04-17"' + cityCode, function (data) {
    //
    //        var items = [],
    //            $ul;
    //
    //        $.each(data, function (currency, val) {
    //
    //            items.push(currency + '<span class="price">' + val.flightPrice + '</span> <span class="city">' + val.principalcity + '</span>');
    //        });


  })();
