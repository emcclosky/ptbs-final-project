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

        var imgSets = [
                [{tag: 'city', img: ''}, {tag: 'beach', img: ''}],
                [{tag: 'secluded', img: ''},{tag: 'crowded', img: ''}],
                [{tag: 'relax', img: ''},{tag: 'explore', img: ''}],
                [{tag: 'stay out late', img: ''},{tag: 'stay in', img: ''}]];        


  
      });
  })();



