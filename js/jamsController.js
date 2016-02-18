portfolioApp.controller('jamsController', function($scope, scService, tracklist) {

  var clientId = 'def295c86b5f5416609b3e8c5e985cb2';
  $scope.tracklist = tracklist;
  $scope.tracks = [];

  for (var i=0 in $scope.tracklist){
    scService.getTrack($scope.tracklist[i].id, function(done, data){
      if (done){
        $scope.tracks.push(data);
      }
    });
  }

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
