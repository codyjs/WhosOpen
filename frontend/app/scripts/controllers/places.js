'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
var myapp = angular.module('frontendApp');

myapp.controller('PlacesCtrl', function ($scope, $http) {
  // ngGPlacesAPI.nearbySearch({latitude:-29.894492, longitude:-97.946472}).then(
  // function(data){
  //   $scope.places = data;
  //   console.log(data);
  // });

  var API_KEY = 'AIzaSyBV7a4ewqo20uCBQS6-grNRZegg_Tvo0zI';
  var latitude = '29.894492';
  var longitude = '-97.946472';
  var radius = '5000';
  var rankby = 'distance';
  var type = 'restaurant';
  var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+latitude+','+
    longitude+'&radius='+radius+'&types='+type+'&key='+API_KEY;
  
  var req = {
   method: 'GET',
   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+latitude+','+
    longitude+'&radius='+radius+'&types='+type+'&key='+API_KEY,
   headers: {
     'Access-Control-Allow-Origin': 'http://localhost:9000',
     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
     'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
   }
  };



  $http.jsonp(url)
    .success(function(data, status, headers, config) {
      $scope.places = data;
      console.log(data);
    });
});

