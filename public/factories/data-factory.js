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
                {name: 'Bangkok', airport: 'BKK', tag: ['beach', 'crowded', 'adventure', 'party'], id: 1, img: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/shared/teasersL/TOURS/discover-bangkok-in-2-days/teaserMultiLarge/imageHilight/bangkok-day-trip.jpg'},
                {name: 'Reykjavik', airport: 'RKV', tag: ['city', 'isolation', 'adventure', 'sleep'], id: 2, img: 'http://www.whatson.is/wp-content/uploads/2015/12/january-in-reykjavik-iceland.jpg'},
                {name: 'Milan', airport: 'MIL', tag: ['city', 'crowded', 'lazy', 'sleep'], id: 3, img: 'https://media-cdn.tripadvisor.com/media/photo-s/06/9f/d0/38/the-duomo-s-structure.jpg'},
                {name: 'New York City', airport: 'JFK', tag: ['city', 'crowded', 'adventure', 'party'], id: 4, img: 'https://travel.usnews.com/static-travel/images/destinations/44/chrysler_bldg_gety_marian_kilinski.jpg'},
                {name: 'Havana', airport: 'HAV', tag: ['beach', 'crowded', 'lazy', 'sleep'], id: 5, img: 'https://www.mustdotravels.com/wp-content/uploads/2017/04/Havana.jpg'},
                {name: 'Dublin', airport: 'DUB', tag: ['city', 'isolation', 'lazy', 'sleep'], id: 6, img: 'http://vacations.aircanada.com/media/images/common/csstorage/dest_slider/Ireland_02.jpg'},
                {name: 'Mumbai', airport: 'BOM', tag: ['city', 'crowded', 'adventure', 'sleep'], id: 7, img: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/7485b46b2aa78a9c4e8384f3f40dca15-mumbai-bombay.jpg?sharp=10&vib=20&w=1200'},
                {name: 'Cancun', airport: 'CUN', tag: ['beach', 'isolation', 'lazy', 'party'], id: 8, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Imagebysafa2.jpg/540px-Imagebysafa2.jpg'}
                ];

        var lists = [
                [{tag: 'city', img: 'http://i68.tinypic.com/208e6pd.jpg'}, {tag: 'beach', img: 'http://i68.tinypic.com/21kcz6a.jpg'}],
                [{tag: 'isolation', img: 'http://i68.tinypic.com/2zxmipe.jpg'},{tag: 'crowded', img: 'http://i63.tinypic.com/2wgd4lh.jpg'}],
                [{tag: 'lazy', img: 'http://i64.tinypic.com/2v2f5sx.jpg'},{tag: 'adventure', img: 'http://i63.tinypic.com/259ltmp.jpg'}],
                [{tag: 'party', img: 'http://i64.tinypic.com/vhw5mg.jpg'},{tag: 'sleep', img: 'http://i67.tinypic.com/15f50x.jpg'}]];


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
