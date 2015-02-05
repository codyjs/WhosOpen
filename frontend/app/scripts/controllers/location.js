'use strict';

angular.module('frontendApp')
       .config(function(ngGPlacesAPIProvider) {
           ngGPlacesAPIProvider.setDefaults({ 
               radius: 500,
               types: ['food'],
               openNow: true,
               nearbySearchKeys: ['name', 'reference', 'vicinity', 'openNow'],
               placeDetailsKeys: ['formatted_address', 'formatted_phone_number',
                                  'reference', 'website'
               ],
           })
       })

/**
 * @ngdoc function
 * @name frontendApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LocationCtrl', function ($scope, ngGPlacesAPI, geolocation) {
      geolocation.getLocation().then(function (data) {
          ngGPlacesAPI.nearbySearch({latitude: data.coords.latitude, longitude: data.coords.longitude}).then(function (places) {
              $scope.places = places; // list of "places"
              console.log(places);
              /* we might have to get a "detail" search of every "place" we have in the places array */
              
          })
      });
  });
