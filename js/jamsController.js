portfolioApp.controller('jamsController', function($scope, scService, tracklist) {

  var clientId = 'def295c86b5f5416609b3e8c5e985cb2';
  $scope.tracks = tracklist;

  $scope.play = function(track){
    if (track.isPlaying){
      track.isPlaying = false;
      track.song.pause();
    } else {
      track.isPlaying = true;
      track.song = new Audio();
      track.song.src = track.stream_url + '?client_id=' + clientId;
      track.song.play();
    }
  };

});
