'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
var myapp = angular.module('frontendApp');

myapp.controller('PlacesCtrl', function ($scope, ngGPlacesAPI) {
  ngGPlacesAPI.nearbySearch({latitude:29.8890110, longitude:-97.9195770, openNow:true, types:['restaurant']}).then(
  function(data){
    $scope.places = data;
    console.log(data);
  });
});

