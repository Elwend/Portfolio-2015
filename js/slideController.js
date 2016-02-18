portfolioApp.controller('slideController', function($scope) {

  $scope.pauseOnHover = true;
  $scope.isActive = false;

  $scope.lifespeedSlides = ['../images/lifespeed/1.png', '../images/lifespeed/2.png', '../images/lifespeed/3.png', '../images/lifespeed/4.png', '../images/lifespeed/5.png', '../images/lifespeed/6.png', '../images/lifespeed/7.png', '../images/lifespeed/8.png'];

  $scope.activeSlides = function() {
    if ($scope.isActive === true) {
      $scope.isActive = false;
    } else {
      $scope.isActive = true;
    }
  }

});
