'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MainNavCtrl', ['$scope', '$routeParams', '$location', '$timeout', 'localStorageService', '$animate', function ($scope, $routeParams, $location, $timeout, localStorageService, $animate) {

      $animate.enabled(true);

      $scope.loggedin = false;
      $scope.loggingout = false;

      if (localStorageService.get('signin')) {
        $scope.signin = localStorageService.get('signin');

        if ($scope.signin.type === 'init') {
          $scope.signin.type = 'Candidate';
          localStorageService.set('signin', $scope.signin);
        }

        $scope.loggedin = true;
      }

      $scope.logout = function () {
        $scope.loggingout = true;
        $timeout(function () {
          localStorageService.clearAll();
          $scope.loggedin = false;
          $location.url('/home');
          $scope.loggingout = false;
        }, 1000);
      };

      /* Sign in processes */
      if (localStorageService.get('signin')) {
        var signin = localStorageService.get('signin');
        $scope.signin = {
          type      : signin.type,
          email     : signin.email,
          password  : signin.password,
          rememberme: signin.rememberme
        }
      } else {
        $scope.signin = {
          type      : 'init',
          email     : 'name@domain.com',
          password  : 'password',
          rememberme: true
        }
      }

      $scope.cancel = function () {
        $('#signInModal').modal('hide');
      };

      $scope.submit = function (signin) {
        localStorageService.set('signin', signin);
        if (signin.type === 'Candidate') {
          $('#signInModal').modal('hide');
          $location.url('/account');
        }
        if (signin.type === 'Client') {
          $('#signInModal').modal('hide');
          $location.url('/account');
        }
        if (signin.type === 'Partner') {
          $('#signInModal').modal('hide');
          $location.url('/account');
        }
      };
    }])
    .controller('HomeCtrl', ['$scope', 'NewsFactory', function ($scope, NewsFactory) {
      $scope.news_collection = NewsFactory;
    }])
    .controller('BidServicesCtrl', ['$scope', function ($scope) {

    }])
    .controller('TestimonialsCtrl', ['$scope', function ($scope) {

      $scope.testimonials = [
        {
          quote   : 'Started a new job this week thanks to Ben at Bid Solutions. It had only been a few weeks since I started looking for a new role. And in that time my CV had been sourced online and within 5 days I had been informed of a suitable role, an interview had been promptly arranged and the following day I was made an offer. There was no delay and probably because of the way in which Ben had handled this. To all my ex-colleagues looking to make their next move, try Bid Solutions as a first port of call. ',
          name    : 'Christina Tharakan',
          position: '',
          type    : 'candidate',
          company : '',
          image   : ''
        },
        {
          quote   : 'Ben searched out my CV online and contacted me regarding a position he was recruiting for. Ben always returned my call and got in touch and followed up with me when he said he would. Although I was a candidate and not Ben\'s client I was always treated with a refreshing level of respect and honesty which made the whole process straightforward and uncomplicated.',
          name    : 'Carmel Keightley',
          position: '',
          type    : 'candidate',
          company : '',
          image   : ''
        },
        {
          quote   : 'Due to our fast growing business, Kuehne+Nagel quickly needed to recruit a SANT Content Manager and a Bid / Proposal Manager to be based at our corporate headquarters in Switzerland. The candidates presented by Bid Solutions were of high quality. Throughout the entire recruitment process Bid Solutions provided professional assistance and both vacancies were filled within weeks. Special mention should be made to the specialist knowledge and experience in the special field of Bid and Proposal Management.',
          name    : 'Nadine Membrez',
          position: 'HR Manager',
          type    : 'client',
          company : 'Kuehne+Nagel',
          image   : 'http://dummyimage.com/200x50/f00/fff'
        },
        {
          quote   : 'We needed a specific mix of expertise there and then, so it was even more impressive that Bid Solutions could react so quickly and provide the resources needed to help us produce the high quality response.',
          name    : 'Bob Mountford',
          position: '',
          type    : 'client',
          company : 'T-Mobile',
          image   : 'http://dummyimage.com/200x50/f00/fff'
        },
        {
          quote   : 'BidPartners have had a close working relationship with Bid Solutions for many years.  Whenever the need has arisen they have provided the right resources at the right time, through their extensive knowledge of both the market and the good bid resources available.  We have always been impressed by their pro-activity, by their backup services, and by their straightforward approach.',
          name    : 'Andy Downie',
          position: 'Director',
          type    : 'partner',
          company : 'Bid Partners',
          image   : ''
        },
        {
          quote   : 'Bid Solutions are a specialist recruitment agency who have always managed to source the best permanent and contract candidates from the market for me, whether in my role as the Head of Opportunity Management at Dell or as a Director of Strategic Proposals. In a relatively niche field with often ill-defined job titles and descriptions, it is essential that an agency has an in-depth knowledge of the bid and proposal marketplace. Bid Solutions has just this - and that\'s why I regularly refer them to my clients.',
          name    : 'Graham Ablett',
          position: 'Director',
          type    : 'partner',
          company : 'Strategic Proposals',
          image   : ''
        }

      ];

      $scope.view = {
        type: 'candidate'
      }

    }])
    .controller('NewsCtrl', ['$scope', 'NewsFactory', function ($scope, NewsFactory) {
      $scope.news_collection = NewsFactory;

      $scope.totalItems = 64;
      $scope.currentPage = 4;

      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      };

      $scope.pageChanged = function () {
        console.log('Page changed to: ' + $scope.currentPage);
      };

      $scope.maxSize = 5;
      $scope.bigTotalItems = 175;
      $scope.bigCurrentPage = 1;
    }])
    .controller('ResourcesCtrl', ['$scope', function ($scope) {

    }])
    .controller('CreateAccountCtrl', ['$scope', function ($scope) {

    }])
    .controller('MyAccountCtrl', ['$scope', '$animate', function ($scope, $animate) {
    }]);
