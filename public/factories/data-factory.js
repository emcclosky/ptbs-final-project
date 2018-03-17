(function(){
    angular.module('app')
      .factory('DataFactory', function(){
        var userChoices = [];

        var cities = [
                {name: 'Bangkok', airport: 'BKK', tag: ['beach', 'crowded', 'adventure', 'party'], id: 1, img: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/shared/teasersL/TOURS/discover-bangkok-in-2-days/teaserMultiLarge/imageHilight/bangkok-day-trip.jpg'},
                {name: 'Reykjavik', airport: 'RKV', tag: ['city', 'isolation', 'adventure', 'sleep'], id: 2, img: 'http://www.whatson.is/wp-content/uploads/2015/12/january-in-reykjavik-iceland.jpg'},
                {name: 'Milan', airport: 'MXP', tag: ['city', 'crowded', 'lazy', 'sleep'], id: 3, img: 'https://media-cdn.tripadvisor.com/media/photo-s/06/9f/d0/38/the-duomo-s-structure.jpg'},
                {name: 'New York City', airport: 'JFK', tag: ['city', 'crowded', 'adventure', 'party'], id: 4, img: 'https://travel.usnews.com/static-travel/images/destinations/44/chrysler_bldg_gety_marian_kilinski.jpg'},
                {name: 'Havana', airport: 'HAV', tag: ['beach', 'crowded', 'lazy', 'sleep'], id: 5, img: 'https://www.mustdotravels.com/wp-content/uploads/2017/04/Havana.jpg'},
                {name: 'Dublin', airport: 'DUB', tag: ['city', 'isolation', 'lazy', 'sleep'], id: 6, img: 'http://vacations.aircanada.com/media/images/common/csstorage/dest_slider/Ireland_02.jpg'},
                {name: 'Mumbai', airport: 'BOM', tag: ['city', 'crowded', 'adventure', 'sleep'], id: 7, img: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/7485b46b2aa78a9c4e8384f3f40dca15-mumbai-bombay.jpg?sharp=10&vib=20&w=1200'},
                {name: 'Cancun', airport: 'CUN', tag: ['beach', 'isolation', 'lazy', 'party'], id: 8, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Imagebysafa2.jpg/540px-Imagebysafa2.jpg'}
                ];

        var lists = [
                [{tag: 'city', img: 'https://freepresets.com/wp-content/uploads/2016/03/Free-Lightroom-Preset-Vintage-City-After.jpg'}, {tag: 'beach', img: 'https://static.pexels.com/photos/221471/pexels-photo-221471.jpeg'}],
                [{tag: 'isolation', img: 'http://blog.rismedia.com/wp-content/uploads/2015/10/HorsesForHighways.jpg'},{tag: 'crowded', img: 'https://s3-us-west-1.amazonaws.com/eslinsider-images/images/crowdedshibuyacrossing.png'}],
                [{tag: 'lazy', img: 'http://www.guidetocaribbean.net/wp-content/uploads/2017/05/beachdrinks7-600x337.jpg'},{tag: 'adventure', img: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Spaceball_jump_over_Skydive_35.jpg'}],
                [{tag: 'party', img: 'http://themocracy.com/wp-content/uploads/2016/12/Parties.jpg'},{tag: 'sleep', img: 'http://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_self.png,fl_progressive,g_face,h_450,q_80,w_800/v1489376598/self_8-easy-tricks-to-get-better-sleep.jpg'}]];


        var finalSelections = [];
        
        // cities.forEach(function(city) {
        //   var match = _.intersection(city.tag, userChoices).length;
        //   finalSelections.push(Object.assign(city, { match }));
        // });

        // finalSelections.sort(function(a, b) {
        //   return b.match - a.match;
        // });      

        return {
            cities,
            lists,
            userChoices
        };


      });
  })();
