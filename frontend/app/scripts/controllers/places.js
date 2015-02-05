'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */

function milesToMeters(miles){
  return miles/0.00062137;
}

var myapp = angular.module('frontendApp');

myapp.controller('PlacesCtrl', function ($scope, ngGPlacesAPI) {
  $scope.radius = 1;
  $scope.getPlaces = function(){
    $scope.error='';
    $scope.places='';
    var radiusMeters = milesToMeters($scope.radius);
    if (radiusMeters >= 50000){
      $scope.error = 'ERROR: Radius Exceeded!';
      return;
    }
    ngGPlacesAPI.nearbySearch({latitude:29.8890110, longitude:-97.9195770, openNow:true, types:['restaurant'], radius: radiusMeters}).then(function(data){
      $scope.places = data;
      console.log(data);
    });
  };
});
