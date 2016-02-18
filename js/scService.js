portfolioApp.service('scService', function($http, $q){

  var self = this;
  var clientId = 'def295c86b5f5416609b3e8c5e985cb2';

  this.getTracks = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://api.soundcloud.com/users/29175866/playlists/155789715?client_id=def295c86b5f5416609b3e8c5e985cb2'
    }).success(function(data){
     var tracklist = data.tracks;
     deferred.resolve(tracklist);
    });
    return deferred.promise;
  };

  this.getTrack = function(track, callback){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://api.soundcloud.com/tracks/'+track+'?client_id=def295c86b5f5416609b3e8c5e985cb2'
    }).success(function(data){
      callback(true, data);
    });
  };

});
