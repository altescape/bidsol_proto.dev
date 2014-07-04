'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
      return function (scope, elm, attrs) {
        elm.text(version);
      };
    }]).
    directive('navbarStaticTop',function () {
      return {
        restrict   : 'A',
        templateUrl: "partials/global/navbar-static-top.html"
      }
    }).
    directive('mainFooter',function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/global/main-footer.html"
      }
    }).
    directive('createCandidateAccountForm',function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/forms/create-candidate-account-form.html"
      }
    }).
    directive('createClientAccountForm',function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/forms/create-client-account-form.html"
      }
    }).
    directive('accountHorizontalSubNav', function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/account/account-horizontal-sub-nav.html"
      }
    }).
    directive('gooBox', function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/global/goo-box.html"
      }
    }).
    directive('bidServicesMenu', function () {
      return {
        restrict   : 'A',
        templateUrl: "partials/global/bid-services-menu.html"
      }
    }).
    directive('dummyContentInfoPage', function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/dummy/dummy-content-info-page.html",
        scope: {
          title: '@',
          tint: '@',
          color: '@'
        }
      }
    });
