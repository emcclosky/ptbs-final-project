(function(){
    angular.module('app')
      .factory('DataFactory', function(){
        var data;
        var cities = [
                {name: '', airport: '', tag: ['city', 'crowded', 'stay out late'], id: 1, img: ''},
                {name: '', airport: '', tag: ['secluded', 'secluded', 'stay out late'], id: 2, img: ''},
                {name: '', airport: '', tag: [], id: 3, img: ''},
                {name: '', airport: '', tag: [], id: 4, img: ''},
                {name: '', airport: '', tag: [], id: 5, img: ''},
                {name: '', airport: '', tag: [], id: 6, img: ''},
                {name: '', airport: '', tag: [], id: 7, img: ''},
                {name: '', airport: '', tag: [], id: 8, img: ''}
                ];

        var lists = [
                [{tag: 'city', img: 'http://placehold.it/400X400'}, {tag: 'beach', img: 'http://placehold.it/400X400'}],
                [{tag: 'secluded', img: 'http://placehold.it/400X400'},{tag: 'crowded', img: 'http://placehold.it/400X400'}],
                [{tag: 'relax', img: 'http://placehold.it/400X400'},{tag: 'explore', img: 'http://placehold.it/400X400'}],
                [{tag: 'stay out late', img: 'http://placehold.it/400X400'},{tag: 'stay in', img: 'http://placehold.it/400X400'}]];        
        return {
            cities,
            lists
        }


  
      });
  })();



