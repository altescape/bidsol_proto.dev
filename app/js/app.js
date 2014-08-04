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

      $urlRouterProvider.otherwise("/home");

      $stateProvider
          .state('home', {
            url: "/home",
            views : {
              "mainView" : {templateUrl: "partials/home.html"}
            }
          })
					.state('bid-services-home', {
						url: "/bid-services",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/overview.html"}
						}
					})
					.state('bid-services', {
						url: "/bid-services",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"}
						}
					})
          .state('bidrecruit-home', {
            url: "/bid-services/bidrecruit",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/bidrecruit.html"}
            }
          })
          .state('bid-services.bidrecruit', {
            url: "/bidrecruit",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidrecruit.html"},
							"bidServiceRecruitView" : {templateUrl: "partials/bid-services/bid-recruit/index.html"}
						}
          })
          .state('bid-services.bidrecruit.index', {
            url: "/",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidrecruit.html"},
							"bidServiceRecruitView" : {templateUrl: "partials/bid-services/bid-recruit/index.html"}
						}
          })
          .state('bid-services.bidconsult', {
            url: "/bidconsult",
            views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
              "bidServiceView" : {templateUrl: "partials/bid-services/bidconsult.html"}
            },
						controller: function ($scope, $location, $anchorScroll) {
							$location.hash('top');
							$anchorScroll();
						}
          })
          .state('bid-services.bidtraining', {
            url: "/bidtraining",
            views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
              "bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
							"bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/index.html"}
            }
          })
          .state('bid-services.bidtraining.index', {
            url: "/",
            views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
              "bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
							"bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/index.html"}
            }
          })
          .state('bid-services.bidtraining.apmp', {
            url: "/apmp",
            views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
              "bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
              "bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/apmp.html"}
            }
          })
          .state('bid-services.bidtraining.prp-writing', {
            url: "/proposal-writing",
            views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
              "bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
              "bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/prp-writing.html"}
            }
          })
          .state('bid-services.bidtraining.prp-master-class', {
            url: "/proposal-master-class",
            views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
              "bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
              "bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/prp-master-class.html"}
            }
          })
					.state('bid-services.bidtraining.bidding', {
						url: "/bidding-to-public-sector",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
							"bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/bidding.html"}
						}
					})
					.state('bid-services.bidtraining.tailored-courses', {
						url: "/tailored-courses",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
							"bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/tailored-courses.html"}
						}
					})
					.state('bid-services.bidtraining.training-packages', {
						url: "/training-packages",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
							"bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/training-packages.html"}
						}
					})
					.state('bid-services.bidtraining.product-detail', {
						url: "/training-packages/product-detail",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
							"bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/product-detail.html"}
						}
					})
					.state('bid-services.bidtraining.videos', {
						url: "/videos",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
							"bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/videos.html"}
						}
					})
					.state('bid-services.bidtraining.video-detail', {
						url: "/videos-detail",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidtraining.html"},
							"bidServiceDetailView" : {templateUrl: "partials/bid-services/bid-training/video-detail.html"}
						}
					})
          .state('bid-services.bidsoftware', {
            url: "/bid-software",
						views : {
							"mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidsoftware.html"}
						}
          })
          .state('bid-services.biddesign', {
            url: "/bid-design",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/biddesign.html"}
            }
          })
          .state('bid-services.bidprinting', {
            url: "/bid-printing",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidprinting.html"}
            }
          })
          .state('bid-services.bidindustries', {
            url: "/bid-industries",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidindustries.html"}
            }
          })
          .state('bid-services.bidglobal', {
            url: "/bid-global",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/index.html"},
							"bidServiceView" : {templateUrl: "partials/bid-services/bidglobal.html"}
            }
          })
          .state('detail', {
            url: "/bid-services/detail",
            views : {
              "mainView" : {templateUrl: "partials/bid-services/detail.html"}
            }
          })
          .state('cart', {
            url: "/cart",
            views : {
              "mainView" : {templateUrl: "partials/cart.html"}
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
              "mainView" : {templateUrl: "partials/news/news.html"}
            },
            disableAutoScrolling: true
          })
          .state('news.item', {
            url: "/item",
            views : {
              "mainView" : {templateUrl: "partials/news/news.html"},
              "newsView" : {templateUrl: "partials/news/news-item.html"}
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
          .state('blog', {
            url: "/blog",
            views : {
              "mainView" : {templateUrl: "partials/blog/blog.html"}
            }
          })
					.state('blog.item', {
						url: "/item",
						views : {
							"mainView" : {templateUrl: "partials/blog/blog.html"},
							"newsView" : {templateUrl: "partials/blog/blog-item.html"}
						}
					})
					.state('about', {
						url: "/about",
						views : {
							"mainView" : {templateUrl: "partials/about/about.html"},
							"aboutView" : {templateUrl: "partials/about/overview.html"}
						}
					})
					.state('about.overview', {
						url: "/overview",
						views : {
							"mainView" : {templateUrl: "partials/about/about.html"},
							"aboutView" : {templateUrl: "partials/about/overview.html"}
						}
					})
					.state('about.history', {
						url: "/history",
						views : {
							"mainView" : {templateUrl: "partials/about/about.html"},
							"aboutView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Company History";
								}
							}
						}
					})
					.state('about.team', {
						url: "/team",
						views : {
							"mainView" : {templateUrl: "partials/about/about.html"},
							"aboutView" : {templateUrl: "partials/about/team.html"}
						}
					})
					.state('about.sustainability', {
						url: "/sustainability-policy",
						views : {
							"mainView" : {templateUrl: "partials/about/about.html"},
							"aboutView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Sustainability Policy";
								}
							}
						}
					})
					.state('about.careers', {
						url: "/careers-opportunities",
						views : {
							"mainView" : {templateUrl: "partials/about/about.html"},
							"aboutView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Career Opportunities";
								}
							}
						}
					})
					.state('about.terms', {
						url: "/terms-of-business",
						views : {
							"mainView" : {templateUrl: "partials/about/about.html"},
							"aboutView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Terms of Business";
								}
							}
						}
					})
					.state('about.global', {
						url: "/global-coverage",
						views : {
							"mainView" : {templateUrl: "partials/about/about.html"},
							"aboutView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Global Coverage";
								}
							}
						}
					})
					.state('contact', {
						url: "/contact",
						views : {
							"mainView" : {templateUrl: "partials/contact.html"}
						}
					})
					.state('events', {
						url: "/events",
						views : {
							"mainView" : {templateUrl: "partials/events/events.html"}
						}
					})
					.state('events.overview', {
						url: "/overview",
						views : {
							"mainView" : {templateUrl: "partials/events/events.html"},
							"eventsView" : {templateUrl: "partials/events/overview.html"}
						}
					})
					.state('events.item', {
						url: "/item",
						views : {
							"mainView" : {templateUrl: "partials/events/events.html"},
							"eventsView" : {templateUrl: "partials/events/item.html"}
						}
					})
					.state('gen', {
						url: "/info",
						views : {
							"mainView" : {templateUrl: "partials/global/index.html",
								controller: function($scope, InformationFactory){
									$scope.sidenav_heading = {
										name: "Information",
										state : "gen.info"
									};
									$scope.sidenav = InformationFactory
								}
							}
						}
					})
					.state('gen.info', {
						url: "/information",
						views : {
							"mainView" : {templateUrl: "partials/global/index.html"},
							"genView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Information";
								}
							}
						}
					})
					.state('gen.stats', {
						url: "/stats-and-facts",
						views : {
							"mainView" : {templateUrl: "partials/global/index.html"},
							"genView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Stats & Facts";
								}
							}
						}
					})
					.state('gen.terminology', {
						url: "/simplifying-bid-terminology",
						views : {
							"mainView" : {templateUrl: "partials/global/index.html"},
							"genView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Simplifying Bid Terminology";
								}
							}
						}
					})
					.state('gen.resources', {
						url: "/free-resources",
						views : {
							"mainView" : {templateUrl: "partials/global/index.html"},
							"genView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Free Resources";
								}
							}
						}
					})
					.state('gen.ass-programme', {
						url: "/associative-programme",
						views : {
							"mainView" : {templateUrl: "partials/global/index.html"},
							"genView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Associative Programme";
								}
							}
						}
					})
					.state('gen.publications', {
						url: "/publications",
						views : {
							"mainView" : {templateUrl: "partials/global/index.html"},
							"genView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Publications";
								}
							}
						}
					})
					.state('gen.amazon', {
						url: "/amazon",
						views : {
							"mainView" : {templateUrl: "partials/global/index.html"},
							"genView" : {
								templateUrl: "partials/global/plain-template.html",
								controller: function($scope){
									$scope.title = "Amazon Books";
								}
							}
						}
					})
    }]);
