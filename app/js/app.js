'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
      'ngRoute',
      'ui.bootstrap',
      'ui.router',
      'LocalStorageModule',
      'ngAnimate',
      'myApp.filters',
      'myApp.services',
      'myApp.directives',
      'myApp.controllers'
    ]).
    config(['$routeProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $stateProvider, $urlRouterProvider) {
      $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
      $routeProvider.when('/create-account', {templateUrl: 'partials/create-account.html', controller: 'CreateAccountCtrl'});
      $routeProvider.when('/bid-services', {templateUrl: 'partials/bid-services.html', controller: 'BidServicesCtrl'});
      $routeProvider.when('/bid-services/bid-recruit', {templateUrl: 'partials/bid-services/bidrecruit.html', controller: 'BidRecruitCtrl'});
      $routeProvider.when('/testimonials', {templateUrl: 'partials/testimonials.html', controller: 'TestimonialsCtrl'});
      $routeProvider.when('/news', {templateUrl: 'partials/news.html', controller: 'NewsCtrl'});
      $routeProvider.when('/news/item', {templateUrl: 'partials/news-item.html', controller: 'NewsCtrl'});
      $routeProvider.when('/resources', {templateUrl: 'partials/resources.html', controller: 'ResourcesCtrl'});
      $routeProvider.when('/my-account', {templateUrl: 'partials/account/my-account.html', controller: 'MyAccountCtrl'});
      $routeProvider.when('/my/cv', {templateUrl: 'partials/account/my-cv.html', controller: 'MyAccountCtrl'});
      $routeProvider.when('/my/details', {templateUrl: 'partials/account/my-details.html', controller: 'MyAccountCtrl'});
      $routeProvider.when('/my/skills', {templateUrl: 'partials/account/my-skills.html', controller: 'MyAccountCtrl'});
      $routeProvider.otherwise({redirectTo: '/home'});

      $urlRouterProvider.otherwise("/partials/account/my-skills");

      $stateProvider
          .state('my-cv', {
            url: "/my/cv",
            templateUrl: "partials/account/my-cv.html"
          })
          .state('my-details', {
            url: "/my/details",
            templateUrl: "partials/account/my-details.html"
          })
          .state('my-skills', {
            url: "/my/skills",
            templateUrl: "partials/account/my-skills.html"
          })
    }]);
