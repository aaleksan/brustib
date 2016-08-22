'use strict';

// Declare app level module which depends on views, and components
angular.module('brustib', [
  'ngRoute',
  'brustib.times',
  'brustib.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/times'});
}]);
