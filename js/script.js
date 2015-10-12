var portfolioApp = angular.module('portfolioApp', [
  'ngRoute', 'ngAnimate', 'angular-flexslider'
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
      controller: 'slideController'
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
  $scope.skills = ['Javascript', 'jQuery', 'JSON, AJAX', 'Angular', 'Backbone', 'Ruby', 'Ruby on Rails', 'HTML', 'CSS/SCSS/SASS', 'Bower', 'Grunt/Gulp', 'MySQL, PostgreSQL'];
  $scope.tools = ['Git/Github', 'Asana', 'Jira', 'Confluence', 'Pivotal Tracker', 'Atom/Sublime Text', 'Visual Studio', 'Photoshop'];
});

portfolioApp.controller('slideController', function($scope){
  $scope.lifespeedSlides = ['../images/lifespeed/1.png', '../images/lifespeed/2.png', '../images/lifespeed/3.png', '../images/lifespeed/4.png', '../images/lifespeed/6.png', '../images/lifespeed/7.png', '../images/lifespeed/8.png'];
  $scope.pauseOnHover = true;
  $scope.activeSlides = function(){
    $scope.isActive = true;
  }
});
