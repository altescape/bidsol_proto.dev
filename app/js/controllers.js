'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

    .controller('MainNavCtrl', ['$rootScope', '$scope', '$routeParams', '$location', '$anchorScroll', '$timeout', 'localStorageService', '$templateCache', function ($rootScope, $scope, $routeParams, $location, $anchorScroll, $timeout, localStorageService, $templateCache) {

			$templateCache.removeAll();

			$scope.qty = 1;
			var emitted_qty = 1;
			if (!localStorageService.get('cart_items')) {
				localStorageService.set('cart_items', 0);
				$scope.cart_items = 0;
			} else {
				$scope.cart_items = localStorageService.get('cart_items');
			}

			$scope.cartFilled = localStorageService.get('cart');
			$scope.$on('fillCart', function(event, mess) {
				$scope.cartFilled = mess;
				localStorageService.set('cart', true);

				localStorageService.set('cart_items', parseInt(localStorageService.get('cart_items'), 10) + emitted_qty);
				$scope.cart_items = localStorageService.get('cart_items');
			});

			$scope.$on('setQty', function(event, mess) {
				emitted_qty = mess;
			});

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
				$scope.$broadcast('loggedIn', true);
        if (signin.type === 'Candidate') {
          $('#signInModal').modal('hide');
        }
        if (signin.type === 'Client') {
          $('#signInModal').modal('hide');
        }
        if (signin.type === 'Partner') {
          $('#signInModal').modal('hide');
        }
      };

			$rootScope.$on('$stateChangeStart', function(event, toState){
				console.log(toState);

				// scrolls to top on each state change
				$location.hash('top');
				$anchorScroll();
			});
    }])

    .controller('HomeCtrl', ['$scope', 'NewsFactory', function ($scope, NewsFactory) {
      $scope.news_collection = NewsFactory;
    }])

    .controller('BidServicesCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
			$scope.fillCart = function () {
				// mock time
				$scope.cart_feedback = true;
				$timeout(function () {
					$scope.cart_feedback = false;
					$scope.$emit('fillCart', true);
					$scope.cart_feedback_added = true;
					$timeout(function () {
					$scope.cart_feedback_added = false;
					}, 2000);
				}, 1000);

			};
			$scope.setQty = function () {
				$scope.$emit('setQty', $scope.qty);
			};

			$rootScope.$on('$stateChangeStart', function(event, toState){
				console.log(toState);

				// scrolls to top on each state change
				$location.hash('top');
				$anchorScroll();
			});
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

    .controller('BlogCtrl', ['$scope', 'BlogFactory', function ($scope, BlogFactory) {
      $scope.blog_collection = BlogFactory;

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

    .controller('AboutCtrl', ['$scope', 'TeamFactory', function ($scope, TeamFactory) {
      $scope.team_collection = TeamFactory;
    }])

    .controller('EventsCtrl', ['$scope', 'EventsFactory', function ($scope, EventsFactory) {
      $scope.collection = EventsFactory;
			$scope.date = {
				month: "January",
				year : "2014"
			}
			$scope.limit = 12;
    }])

    .controller('ResourcesCtrl', ['$scope', function ($scope) {

    }])

    .controller('CreateAccountCtrl', ['$scope', function ($scope) {

    }])

    .controller('MyAccountCtrl', ['$scope', '$animate', 'localStorageService', function ($scope, $animate, localStorageService) {

			if (localStorageService.get('signin')) {
				$scope.showNav = true;
			} else {
				$scope.showNav = false;
			}

			$scope.$on('loggedIn', function(event, mess) {
				$scope.showNav = mess;
			});

      $scope.industries = [
        {name: "Facilities management"},
        {name: "Financial services"},
        {name: "Food and beverage"},
        {name: "Government and public sector"},
        {name: "Healthcare services"},
        {name: "Hotels and hotel management"},
        {name: "Leisure"},
        {name: "Healthcare"},
        {name: "Information tech"},
        {name: "Legal services"},
        {name: "Real estate and property management"},
        {name: "Professional services"},
        {name: "Telecommunications"},
        {name: "Security and surveillance"},
        {name: "Financial services"},
        {name: "etc.."}
      ];
      $scope.positions = [
        {name: "Bid administrator"},
        {name: "Bid analyst"},
        {name: "Bid author"},
        {name: "Bid consultant"},
        {name: "Bid co-ordinator"},
        {name: "etc..."}
      ];
      $scope.skills = [
        {name: "APMP"},
        {name: "Bid best practice"},
        {name: "Bid governance"},
        {name: "Bid management"},
        {name: "Bid process"},
        {name: "etc..."}
      ];
      $scope.qualifications = [
        {name: "A Levels"},
        {name: "APMP Foundation"},
        {name: "APMP Practitioner"},
        {name: "APMP Professional"},
        {name: "Bachelors Degree"},
        {name: "etc..."}
      ];
      $scope.locations = [
        {name: "East London"},
        {name: "Central London"},
        {name: "Essex"},
        {name: "Guildford"},
        {name: "Telford"},
        {name: "etc..."}
      ];

      $scope.$watch('industries', function (lists) {
        $scope.countIndustries = 0;
        angular.forEach(lists, function (list) {
          if (list.checked) {
            $scope.countIndustries += 1;
          }
        })
      }, true);

      $scope.$watch('positions', function (lists) {
        $scope.countPositions = 0;
        angular.forEach(lists, function (list) {
          if (list.checked) {
            $scope.countPositions += 1;
          }
        })
      }, true);

      $scope.$watch('skills', function (lists) {
        $scope.countSkills = 0;
        angular.forEach(lists, function (list) {
          if (list.checked) {
            $scope.countSkills += 1;
          }
        })
      }, true);

      $scope.$watch('qualifications', function (lists) {
        $scope.countQualifications = 0;
        angular.forEach(lists, function (list) {
          if (list.checked) {
            $scope.countQualifications += 1;
          }
        })
      }, true);

      $scope.$watch('locations', function (lists) {
        $scope.countLocations = 0;
        angular.forEach(lists, function (list) {
          if (list.checked) {
            $scope.countLocations += 1;
          }
        })
      }, true);

      $scope.checkAll = function (alist) {
        angular.forEach(alist, function (value, key) {
          value.checked = true;
        });
      };

      $scope.uncheckAll = function (alist) {
        angular.forEach(alist, function (value, key) {
          value.checked = false;
        });
      };

      /* PAGINATION */
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

		.controller('MyAccountCtrl', ['$scope', '$animate', 'localStorageService', function ($scope, $animate, localStorageService) {

			if (localStorageService.get('signin')) {
				$scope.showNav = true;
			} else {
				$scope.showNav = false;
			}

			$scope.$on('loggedIn', function(event, mess) {
				$scope.showNav = mess;
			});

			$scope.industries = [
				{name: "Facilities management"},
				{name: "Financial services"},
				{name: "Food and beverage"},
				{name: "Government and public sector"},
				{name: "Healthcare services"},
				{name: "Hotels and hotel management"},
				{name: "Leisure"},
				{name: "Healthcare"},
				{name: "Information tech"},
				{name: "Legal services"},
				{name: "Real estate and property management"},
				{name: "Professional services"},
				{name: "Telecommunications"},
				{name: "Security and surveillance"},
				{name: "Financial services"},
				{name: "etc.."}
			];
			$scope.positions = [
				{name: "Bid administrator"},
				{name: "Bid analyst"},
				{name: "Bid author"},
				{name: "Bid consultant"},
				{name: "Bid co-ordinator"},
				{name: "etc..."}
			];
			$scope.skills = [
				{name: "APMP"},
				{name: "Bid best practice"},
				{name: "Bid governance"},
				{name: "Bid management"},
				{name: "Bid process"},
				{name: "etc..."}
			];
			$scope.qualifications = [
				{name: "A Levels"},
				{name: "APMP Foundation"},
				{name: "APMP Practitioner"},
				{name: "APMP Professional"},
				{name: "Bachelors Degree"},
				{name: "etc..."}
			];
			$scope.locations = [
				{name: "East London"},
				{name: "Central London"},
				{name: "Essex"},
				{name: "Guildford"},
				{name: "Telford"},
				{name: "etc..."}
			];

			$scope.$watch('industries', function (lists) {
				$scope.countIndustries = 0;
				angular.forEach(lists, function (list) {
					if (list.checked) {
						$scope.countIndustries += 1;
					}
				})
			}, true);

			$scope.$watch('positions', function (lists) {
				$scope.countPositions = 0;
				angular.forEach(lists, function (list) {
					if (list.checked) {
						$scope.countPositions += 1;
					}
				})
			}, true);

			$scope.$watch('skills', function (lists) {
				$scope.countSkills = 0;
				angular.forEach(lists, function (list) {
					if (list.checked) {
						$scope.countSkills += 1;
					}
				})
			}, true);

			$scope.$watch('qualifications', function (lists) {
				$scope.countQualifications = 0;
				angular.forEach(lists, function (list) {
					if (list.checked) {
						$scope.countQualifications += 1;
					}
				})
			}, true);

			$scope.$watch('locations', function (lists) {
				$scope.countLocations = 0;
				angular.forEach(lists, function (list) {
					if (list.checked) {
						$scope.countLocations += 1;
					}
				})
			}, true);

			$scope.checkAll = function (alist) {
				angular.forEach(alist, function (value, key) {
					value.checked = true;
				});
			};

			$scope.uncheckAll = function (alist) {
				angular.forEach(alist, function (value, key) {
					value.checked = false;
				});
			};

			/* PAGINATION */
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


		}]);
