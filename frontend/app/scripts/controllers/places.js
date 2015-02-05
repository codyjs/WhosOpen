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

myapp.controller('PlacesCtrl', function ($scope, ngGPlacesAPI, geolocation) {
  $scope.radius = 1;

  // Initial query
  geolocation.getLocation().then(function(data){
    console.log(data);
    ngGPlacesAPI.nearbySearch({latitude:data.coords.latitude, longitude:data.coords.longitude, openNow:true, types:['restaurant'], radius: milesToMeters($scope.radius)}).then(function(data){
      $scope.places = data;
      console.log(data);
    },
    function(reason) { // Promise rejected
      console.log(reason);
    });
  });

  // Button press
  $scope.getPlaces = function(){
    $scope.error='';
    $scope.places='';
    var radiusMeters = milesToMeters($scope.radius);
    if (radiusMeters >= 50000){
      $scope.error = 'ERROR: Radius Exceeded!';
      return;
    }

    geolocation.getLocation().then(function (data){
      console.log(data);
      ngGPlacesAPI.nearbySearch({latitude:data.coords.latitude, longitude:data.coords.longitude, openNow:true, types:['restaurant'], radius: milesToMeters($scope.radius)}).then(function(data){
        $scope.places = data;
        console.log(data);
      },
      function(reason) { // Promise rejected
        console.log(reason);
      });
    });
  };
});
