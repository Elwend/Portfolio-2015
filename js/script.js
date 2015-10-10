var portfolioApp = angular.module('portfolioApp', [
  'ngRoute'
]);

portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'mainController'
    })

    .when('/contact', {
      templateUrl: 'templates/contact.html',
      controller: 'mainController'
    })

    .when('/portfolio', {
      templateUrl: 'templates/portfolio.html',
      controller: 'mainController'
    })

    .when('/skills', {
      templateUrl: 'templates/skills.html',
      controller: 'mainController'
    })

    .otherwise({
      redirectTo: '/'
    });

  }
]);

portfolioApp.controller('mainController', function($scope) {
  $scope.message = 'Blah';
});
