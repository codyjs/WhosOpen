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
    'ngGPlaces'
  ])
  .config(function ($routeProvider, ngGPlacesAPIProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/places.html',
        controller: 'PlacesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    ngGPlacesAPIProvider.setDefaults({
      nearbySearchKeys: ['name', 'reference', 'vicinity', 'place_id', 'price_level', 'rating', 'types', 'photos', 'geometry'],
    });
  });
