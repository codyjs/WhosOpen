'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SettingsCtrl
 * @description
 * # SeettingsCtrl
 * Controller of the settings
 */

function milesToMeters(miles){
  return miles/0.00062137;
}

var myapp = angular.module('frontendApp');

myapp.controller('SettingsCtrl', ['$scope', '$cookies', 'settings', function($scope, $cookies, settings) {
      
	  $scope.radius = settings.radius;
	  $scope.minPrice = settings.minPrice;
	  $scope.maxPrice = settings.maxPrice;
	  $scope.minRating = settings.minRating;
	  
	  $scope.update = function(form) {
	  
	    settings.radius = form.radius;
		settings.maxPrice = form.maxPrice;
		settings.minPrice = form.minPrice;
		settings.minRating = form.minRating
		
		$cookies.settings = "set";
		$cookies.radius = settings.radius;
		$cookies.maxPrice = settings.maxPrice;
		$cookies.minPrice = settings.minPrice;
		$cookies.minRating = settings.minRating;
		
		console.log(settings);
	  }
	  
	  console.log(settings);
	  console.log($scope);


    }]);
