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
//      $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
//      $routeProvider.when('/create-account', {templateUrl: 'partials/create-account.html', controller: 'CreateAccountCtrl'});
//      $routeProvider.when('/bid-services', {templateUrl: 'partials/bid-services.html', controller: 'BidServicesCtrl'});
//      $routeProvider.when('/bid-services/bid-recruit', {templateUrl: 'partials/bid-services/bidrecruit.html', controller: 'BidRecruitCtrl'});
//      $routeProvider.when('/testimonials', {templateUrl: 'partials/testimonials.html', controller: 'TestimonialsCtrl'});
//      $routeProvider.when('/news', {templateUrl: 'partials/news.html', controller: 'NewsCtrl'});
//      $routeProvider.when('/news/item', {templateUrl: 'partials/news-item.html', controller: 'NewsCtrl'});
//      $routeProvider.when('/resources', {templateUrl: 'partials/resources.html', controller: 'ResourcesCtrl'});
//      $routeProvider.when('/my-account', {templateUrl: 'partials/account/my-account.html', controller: 'MyAccountCtrl'});
//      $routeProvider.when('/my/cv', {templateUrl: 'partials/account/my-cv.html', controller: 'MyAccountCtrl'});
//      $routeProvider.when('/my/details', {templateUrl: 'partials/account/my-details.html', controller: 'MyAccountCtrl'});
//      $routeProvider.when('/my/skills', {templateUrl: 'partials/account/my-skills.html', controller: 'MyAccountCtrl'});
//      $routeProvider.otherwise({redirectTo: '/home'});

      $urlRouterProvider.otherwise("/partials/account/my-skills");

      $stateProvider
          .state('home', {
            url: "/home",
            views : {
              "mainView" : {templateUrl: "partials/home.html"}
            }
          })
          .state('bid-services', {
            url: "/bid-services",
            views : {
              "mainView" : {templateUrl: "partials/bid-services.html"}
            }
          })
          .state('bidrecruit', {
            url: "/bid-services/bidrecruit",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/bidrecruit.html"}
            }
          })
          .state('bidconsult', {
            url: "/bid-services/bidconsult",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/bidconsult.html"}
            }
          })
          .state('bidtraining', {
            url: "/bid-services/bidtraining",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/bidtraining.html"}
            }
          })
          .state('bidsoftware', {
            url: "/bid-services/bidsoftware",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/bidsoftware.html"}
            }
          })
          .state('biddesign', {
            url: "/bid-services/biddesign",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/biddesign.html"}
            }
          })
          .state('testimonials', {
            url: "/testimonials",
            views : {
              "mainView" : {templateUrl: "partials/testimonials.html"}
            },
            controller : 'TestimonialsCtrl'
          })
          .state('news', {
            url: "/news",
            views : {
              "mainView" : {templateUrl: "partials/news.html"}
            },
            disableAutoScrolling: true
          })
          .state('news.item', {
            url: "/item",
            views : {
              "mainView" : {templateUrl: "partials/news.html"},
              "newsView" : {templateUrl: "partials/news-item.html"}
            }
          })
          .state('create-account', {
            url: "/create-account",
            views : {
              "mainView" : {templateUrl: "partials/create-account.html"}
            },
            controller : 'CreateAccountCtrl'
          })
          .state('account', {
            url: "/account",
            views : {
              "mainView" : {templateUrl: "partials/account/my-account.html"},
              "accountView" : {templateUrl: "partials/account/search-jobs.html"}
            },
            controller : 'MyAccountCtrl'
          })
          .state('account.search-jobs', {
            url: "/search-jobs",
            views : {
              "mainView" : {templateUrl: "partials/account/my-account.html"},
              "accountView" : {templateUrl: "partials/account/search-jobs.html"}
            },
            controller : 'MyAccountCtrl'
          })
          .state('account.saved-jobs', {
            url: "/saved-jobs",
            views : {
              "mainView" : {templateUrl: "partials/account/my-account.html"},
              "accountView" : {templateUrl: "partials/account/saved-jobs.html"}
            },
            controller : 'MyAccountCtrl'
          })
          .state('account.saved-searches', {
            url: "/saved-searches",
            views : {
              "mainView" : {templateUrl: "partials/account/my-account.html"},
              "accountView" : {templateUrl: "partials/account/saved-searches.html"}
            },
            controller : 'MyAccountCtrl'
          })
          .state('account.timesheets', {
            url: "/timesheets",
            views : {
              "mainView" : {templateUrl: "partials/account/my-account.html"},
              "accountView" : {templateUrl: "partials/account/timesheets.html"}
            },
            controller : 'MyAccountCtrl'
          })
          .state('account.job-applications', {
            url: "/job-applications",
            views : {
              "mainView" : {templateUrl: "partials/account/my-account.html"},
              "accountView" : {templateUrl: "partials/account/job-applications.html"}
            },
            controller : 'MyAccountCtrl'
          })
          .state('account.my-cv', {
            url: "/my/cv",
            views : {
              "mainView" : {templateUrl: "partials/account/my-account.html"},
              "accountView" : {templateUrl: "partials/account/my-cv.html"}
            },
            controller : 'MyAccountCtrl'
          })
          .state('account.my-details', {
            url: "/my/details",
            views : {
              "mainView" : {templateUrl: "partials/account/my-account.html"},
              "accountView" : {templateUrl: "partials/account/my-details.html"}
            },
            controller : 'MyAccountCtrl'
          })
          .state('account.my-skills', {
            url: "/my/skills",
            views : {
              "mainView" : {templateUrl: "partials/account/my-account.html"},
              "accountView" : {templateUrl: "partials/account/my-skills.html"}
            },
            controller : 'MyAccountCtrl'
          })
    }]);
