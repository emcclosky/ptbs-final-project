(function(){
    angular.module('app')
      .factory('DataFactory', function(){
        var userAirport;
        function setUserAirport(usrAprt){
          return userAirport = usrAprt;
        };
        function getUserAirport(){
          return userAirport;
        };
        
        var userChoices = [];


        var cities = [
                {name: 'Bangkok', airport: 'BKK', tag: ['beach', 'crowded', 'adventure', 'party'], id: 1, activities:['Explore the Temple of the Emerald Buddha', 'Shop at the Floating Market', 'Tour the Summer Palace'], img: 'http://i63.tinypic.com/oiyi6h.jpg'},
                {name: 'Reykjavik', airport: 'REK', tag: ['city', 'isolation', 'adventure', 'sleep'], id: 2, activities:['Visit Blue Lagoon', 'Take the Viking Horse-Riding Tour', 'Be enchanted by the Northern Lights'], img: 'http://i68.tinypic.com/2re1w5s.jpg'},
                {name: 'Milan', airport: 'MIL', tag: ['city', 'crowded', 'lazy', 'sleep'], id: 3, activities:['Take in the ornate Milan Cathedral', 'Shop at the Galleria Vittorio Emanuele II', 'Tour the medieval castle Sforzesco' ], img: 'http://i65.tinypic.com/1675d9g.jpg'},
                {name: 'New York City', airport: 'JFK', tag: ['city', 'crowded', 'adventure', 'party'], id: 4, activities:['Statue of Liberty and Ellis Island', 'Visit 9/11 Memorial', 'Go on the TCM Classic Film Tour of New York', 'Enjoy a show on Broadway', 'Take in the city from the Rockefeller Center Observation Deck'], img: 'http://i68.tinypic.com/2pq2rh5.jpg'},
                {name: 'Havana', airport: 'EYW', tag: ['beach', 'crowded', 'lazy', 'sleep'], id: 5, activities:['Enjoy salsa dancing', 'Smoke a cuban cigar', 'Ride in a vintage convertible', 'Visit Ernest Hemingway\'s house'], img: ' http://i64.tinypic.com/2h3qv6v.jpg'},
                {name: 'Dublin', airport: 'DUB', tag: ['city', 'isolation', 'lazy', 'sleep'], id: 6, activities:['Visit Blarney Castle', 'Take the Cliffs of Moher Tour', 'See the Guinness Storehouse', 'Irish Whiskey Museum Experience'], img: ' http://i67.tinypic.com/pytu8.jpg'},
                {name: 'Mumbai', airport: 'BOM', tag: ['city', 'crowded', 'adventure', 'sleep'], id: 7, activities:['Take the Mumbai Cave Tour', 'Visit the Global Vipassana Pagoda', 'Go leisure sailing', 'See the Entrance to India'], img: 'http://i66.tinypic.com/2dir87t.jpg'},
                {name: 'Cancun', airport: 'CUN', tag: ['beach', 'isolation', 'lazy', 'party'], id: 8, activities:['Explore the Tulum Ruins', 'Go reef and shipwreck snorkeling', 'Tour Chichen Itza and Cenote'], img: 'http://i65.tinypic.com/xu4na.jpg'}
                ];

        var lists = [
                [{tag: 'City', img: 'http://i68.tinypic.com/208e6pd.jpg'}, {tag: 'Beach', img: 'http://i68.tinypic.com/21kcz6a.jpg'}],
                [{tag: 'Isolation', img: 'http://i68.tinypic.com/2zxmipe.jpg'},{tag: 'Crowded', img: 'http://i63.tinypic.com/2wgd4lh.jpg'}],
                [{tag: 'Lazy', img: 'http://i64.tinypic.com/2v2f5sx.jpg'},{tag: 'Adventure', img: 'http://i63.tinypic.com/259ltmp.jpg'}],
                [{tag: 'Party', img: 'http://i64.tinypic.com/vhw5mg.jpg'},{tag: 'Sleep', img: 'http://i67.tinypic.com/15f50x.jpg'}]];


        function getUserResults(){
          var finalSelections = [];
          cities.forEach(function(city) {
            var match = intersection(city.tag, userChoices).length;
            finalSelections.push(Object.assign(city, { match }));
          });

          return finalSelections.sort(function(a, b) {
            return b.match - a.match;
          });
        }

        return {
            cities,
            lists,
            userChoices,
            getUserResults,
            userChoices,
            setUserAirport,
            getUserAirport
        };


        function intersection (arr, arr2) {
          var result = [];
          for (var item of arr) {
            if (arr2.includes(item)) {
              result.push(item);
            }
          }
          return result;
        }


      });
  })();
