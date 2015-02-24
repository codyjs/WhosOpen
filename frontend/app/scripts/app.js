'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngGPlaces',
    'geolocation',
  ])
  .config(function ($routeProvider, ngGPlacesAPIProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/places.html',
      })
	  .when('/settings', {
		templateUrl: 'views/settings.html',
	  })
      .otherwise({
        redirectTo: 'views/places.html'
      });

    ngGPlacesAPIProvider.setDefaults({
      nearbySearchKeys: ['name', 'reference', 'vicinity', 'place_id', 'price_level', 'rating', 'types', 'photos', 'geometry'],
    });
  })
  .service("settings", function Settings(){
    var settings = this
	settings.radius = 5;
	settings.minPrice = 0;
	settings.maxPrice = 5;
	settings.minRating = 0;
  });
