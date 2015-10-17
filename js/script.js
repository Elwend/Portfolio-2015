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
        controller: 'jamsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

portfolioApp.service('scService', function($http, $q){
  var self = this;
  var clientId = 'def295c86b5f5416609b3e8c5e985cb2';
  var tracks;
  this.getPlaylist = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://api.soundcloud.com/users/29175866/playlists/155789715?client_id=def295c86b5f5416609b3e8c5e985cb2'
    }).success(function(data){
     tracks = data.tracks;
     deferred.resolve(tracks);
    });
    return deferred.promise;
  },
  this.getTrack = function(track){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://api.soundcloud.com/tracks/'+track+'?client_id=def295c86b5f5416609b3e8c5e985cb2'
    }).success(function(data){
      deferred.resolve(data);
    })
    return deferred.promise;
  }
});

portfolioApp.controller('mainController', function($scope) {

});

portfolioApp.controller('jamsController', function($scope, scService) {
  var clientId = 'def295c86b5f5416609b3e8c5e985cb2';
  $scope.tracks = [];
  $scope.play = function(track){
    var song = new Audio();
    song.src = track + '?client_id=' + clientId;
    song.play();
  };
  var getPlaylist = function(){
    scService.getPlaylist().then(function(tracks){
      for (var i in tracks){
        var track = tracks[i];
        track = track.id;
        scService.getTrack(track).then(function(data){
          $scope.tracks.push(data);
        });
      }
    });
  };
  getPlaylist();
});

portfolioApp.controller('skillController', function($scope){
  $scope.skills = ['Javascript', 'jQuery', 'JSON, AJAX', 'Angular', 'Backbone', 'Ruby', 'Ruby on Rails', 'HTML', 'CSS/SCSS/SASS', 'Bower', 'Grunt/Gulp', 'MySQL, PostgreSQL'];
  $scope.tools = ['Git/Github', 'Asana', 'Jira', 'Confluence', 'Pivotal Tracker', 'Atom/Sublime Text', 'Visual Studio', 'Photoshop'];
});

portfolioApp.controller('slideController', function($scope) {
  $scope.lifespeedSlides = ['../images/lifespeed/1.png', '../images/lifespeed/2.png', '../images/lifespeed/3.png', '../images/lifespeed/4.png', '../images/lifespeed/6.png', '../images/lifespeed/7.png', '../images/lifespeed/8.png'];
  $scope.pauseOnHover = true;
  $scope.isActive = false;
  $scope.activeSlides = function() {
    if ($scope.isActive === true) {
      $scope.isActive = false;
    } else {
      $scope.isActive = true;
    }
  }
});
