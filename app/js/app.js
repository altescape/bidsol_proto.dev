'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/bid-services', {templateUrl: 'partials/bid-services.html', controller: 'BidServicesCtrl'});
    $routeProvider.when('/bid-services/bid-recruit', {templateUrl: 'partials/bid-services/bidrecruit.html', controller: 'BidRecruitCtrl'});
  $routeProvider.when('/testimonials', {templateUrl: 'partials/testimonials.html', controller: 'TestimonialsCtrl'});
  $routeProvider.when('/news', {templateUrl: 'partials/news.html', controller: 'NewsCtrl'});
  $routeProvider.when('/resources', {templateUrl: 'partials/resources.html', controller: 'ResourcesCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
