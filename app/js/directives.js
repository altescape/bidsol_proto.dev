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
    }).
    directive('createCandidateAccountForm', function () {
      return {
        restrict: 'E',
        templateUrl : "partials/forms/create-candidate-account-form.html"
      }
    }).
    directive('createClientAccountForm', function () {
      return {
        restrict: 'E',
        templateUrl : "partials/forms/create-client-account-form.html"
      }
    });
