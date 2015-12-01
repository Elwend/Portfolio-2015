portfolioApp.service('scService', function($http, $q){

  var self = this;
  var clientId = 'def295c86b5f5416609b3e8c5e985cb2';
  var tracks = [];

  this.getTracks = function(){
    $http({
      method: 'GET',
      url: 'http://api.soundcloud.com/users/29175866/playlists/155789715?client_id=def295c86b5f5416609b3e8c5e985cb2'
    }).success(function(data){
     tracks = data.tracks;
     for (var i in tracks){
       var track = tracks[i].id;
       self.getTrack(track).then(function(data){
         tracks.push(data);
       });
     }
    });
    return tracks;
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
