'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
      return function (scope, elm, attrs) {
        elm.text(version);
      };
    }]).
    directive('topLinks',function () {
      return {
        restrict   : 'A',
        templateUrl: "partials/global/top-links.html"
      }
    }).
    directive('socialLink',function () {
      return {
        restrict   : 'A',
        templateUrl: "partials/global/social-link.html"
      }
    }).
    directive('navbarStaticTop',function () {
      return {
        restrict   : 'A',
        templateUrl: "partials/global/navbar-static-top.html"
      }
    }).
    directive('mainFooter',function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/global/main-footer.html",
				controller : function ($scope, InformationFactory) {
					$scope.info_links = InformationFactory;
				}
      }
    }).
    directive('createCandidateAccountForm',function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/forms/create-candidate-account-form.html"
      }
    }).
    directive('bsBanner',function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/home/bs-banner.html"
      }
    }).
    directive('bsBannerAltern',function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/home/bs-banner-altern.html"
      }
    }).
    directive('bsServicesAll',function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/bid-services/bs-services-all.html"
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
    directive('requestCallback', function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/forms/request-callback.html"
      }
    }).
    directive('sendToFriend', function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/forms/send-to-friend.html"
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
    }).
    directive('dummyContentOverviewPage', function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/dummy/dummy-content-overview-page.html",
        scope: {
          title: '@',
          tint: '@',
          color: '@'
        }
      }
    }).
    directive('plainDummyText', function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/dummy/plain-dummy-text.html"
      }
    }).
    directive('productThumb', function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/bid-services/bid-training/product-thumb-partial.html"
      }
    }).
    directive('videoListing', function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/bid-services/bid-training/video-listing-partial.html"
      }
    }).
    directive('bidServicesVerticalList', function () {
      return {
        restrict   : 'E',
        templateUrl: "partials/global/bid-services-vertical-list.html"
      }
    });
