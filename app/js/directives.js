'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
      return function (scope, elm, attrs) {
        elm.text(version);
      };
    }]).
    directive('navbarStaticTop', function () {
      return {
        restrict: 'E',
        templateUrl : "partials/global/navbar-static-top.html"
      }
    }).
    directive('mainFooter', function () {
      return {
        restrict: 'E',
        templateUrl : "partials/global/main-footer.html"
      }
    });
