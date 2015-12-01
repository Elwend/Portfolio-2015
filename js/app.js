var portfolioApp = angular.module('portfolioApp', [
    'ngRoute', 'ngAnimate', 'angular-flexslider'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html'
      })
      .when('/contact', {
        templateUrl: 'templates/contact.html'
      })
      .when('/portfolio', {
        templateUrl: 'templates/portfolio.html',
        controller: 'slideController'
      })
      .when('/skills', {
        templateUrl: 'templates/skills.html',
        controller: 'skillController'
      })
      .when('/jams', {
        templateUrl: 'templates/jams.html',
        controller: 'jamsController',
        resolve: {
          tracklist: function(scService){
            return scService.getTracks();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
