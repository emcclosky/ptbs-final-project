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
                {name: 'Bangkok', airport: 'BKK', tag: ['beach', 'crowded', 'adventure', 'party'], id: 1, activities:[], img: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/shared/teasersL/TOURS/discover-bangkok-in-2-days/teaserMultiLarge/imageHilight/bangkok-day-trip.jpg'},
                {name: 'Reykjavik', airport: 'REK', tag: ['city', 'isolation', 'adventure', 'sleep'], id: 2, activities:['Visit Blue Lagoon', 'Take the Viking Horse-Riding Tour', 'Be enchanted by the Northern Lights'], img: 'http://www.whatson.is/wp-content/uploads/2015/12/january-in-reykjavik-iceland.jpg'},
                {name: 'Milan', airport: 'MIL', tag: ['city', 'crowded', 'lazy', 'sleep'], id: 3, activities:['Take in the ornate Milan Cathedral', 'Shop at the Galleria Vittorio Emanuele II', 'Tour the medieval castle Sforzesco' ], img: 'https://media-cdn.tripadvisor.com/media/photo-s/06/9f/d0/38/the-duomo-s-structure.jpg'},
                {name: 'New York City', airport: 'JFK', tag: ['city', 'crowded', 'adventure', 'party'], id: 4, activities:['Statue of Liberty and Ellis Island', 'Visit 9/11 Memorial', 'Go on the TCM Classic Film Tour of New York', 'Enjoy a show on Broadway', 'Take in the city from the Rockefeller Center Observation Deck'], img: 'https://travel.usnews.com/static-travel/images/destinations/44/chrysler_bldg_gety_marian_kilinski.jpg'},
                {name: 'Havana', airport: 'EYW', tag: ['beach', 'crowded', 'lazy', 'sleep'], id: 5, activities:['Enjoy salsa dancing', 'Smoke a cuban cigar', 'Ride in a vintage convertible', 'Visit Ernest Hemingway\'s house'], img: 'https://www.mustdotravels.com/wp-content/uploads/2017/04/Havana.jpg'},
                {name: 'Dublin', airport: 'DUB', tag: ['city', 'isolation', 'lazy', 'sleep'], id: 6, activities:['Visit Blarney Castle', 'Take the Cliffs of Moher Tour', 'See the Guinness Storehouse', 'Irish Whiskey Museum Experience'], img: 'http://vacations.aircanada.com/media/images/common/csstorage/dest_slider/Ireland_02.jpg'},
                {name: 'Mumbai', airport: 'BOM', tag: ['city', 'crowded', 'adventure', 'sleep'], id: 7, activities:['Take the Mumbai Cave Tour', 'Visit the Global Vipassana Pagoda', 'Go leisure sailing', 'See the Entrance to India'], img: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/7485b46b2aa78a9c4e8384f3f40dca15-mumbai-bombay.jpg?sharp=10&vib=20&w=1200'},
                {name: 'Cancun', airport: 'CUN', tag: ['beach', 'isolation', 'lazy', 'party'], id: 8, activities:['Explore the Tulum Ruins', 'Go reef and shipwreck snorkeling', 'Tour Chichen Itza and Cenote'], img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Imagebysafa2.jpg/540px-Imagebysafa2.jpg'}
                ];

        var lists = [
                [{tag: 'City', img: 'https://freepresets.com/wp-content/uploads/2016/03/Free-Lightroom-Preset-Vintage-City-After.jpg'}, {tag: 'Beach', img: 'https://static.pexels.com/photos/221471/pexels-photo-221471.jpeg'}],
                [{tag: 'Isolation', img: 'http://blog.rismedia.com/wp-content/uploads/2015/10/HorsesForHighways.jpg'},{tag: 'Crowded', img: 'https://s3-us-west-1.amazonaws.com/eslinsider-images/images/crowdedshibuyacrossing.png'}],
                [{tag: 'Lazy', img: 'http://www.guidetocaribbean.net/wp-content/uploads/2017/05/beachdrinks7-600x337.jpg'},{tag: 'Adventure', img: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Spaceball_jump_over_Skydive_35.jpg'}],
                [{tag: 'Party', img: 'http://themocracy.com/wp-content/uploads/2016/12/Parties.jpg'},{tag: 'Sleep', img: 'http://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_self.png,fl_progressive,g_face,h_450,q_80,w_800/v1489376598/self_8-easy-tricks-to-get-better-sleep.jpg'}]];


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
