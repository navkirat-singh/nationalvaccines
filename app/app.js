'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  var viewsBaseUrl = "views/"
  // App routing
  $routeProvider.when('/home', {
    templateUrl: viewsBaseUrl + "home/home.html",
    controller: "homeController"
  });

  $routeProvider.when('/principals', {
    templateUrl: viewsBaseUrl + "principals/principals.html",
    controller: "principalsController"
  });

  $routeProvider.when('/accolades', {
    templateUrl: viewsBaseUrl + "accolades/accolades.html",
    controller: "accoladesController"
  });

  $routeProvider.when('/contactus', {
    templateUrl: viewsBaseUrl + "contactus/contactus.html",
    controller: "contactUsController"
  });

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
