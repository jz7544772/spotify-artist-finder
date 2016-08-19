var SpotifyServices = angular.module("SpotifyServices", []);

SpotifyServices.factory("Spotify", ["$http", function($http) {
	$http.defaults.headers.get = {
		//"X-Mashape-Key": "OD7NWFZX8Lmshs6KF4I2FerfwN8Mp1hWvxFjsnOhKId01oaanL",
		"Accept": "application/json"
	}

	var reformatQuery = function(query) {
		return query.replace(/\s/gi, "+");
	}

	var getArtistByName = function(artistName) {
		//var targetUrl = "https://mager-spotify-web.p.mashape.com/search/1/album.json?q="+artistName;
		var reformattedArtistName = reformatQuery(artistName);
		var targetUrl = "https://api.spotify.com/v1/search?q=" 
			+ reformattedArtistName
			+ "&type=artist&limit=1";
		console.log(targetUrl);
		return $http.get(targetUrl);
	}

	return {
		getArtistByName:getArtistByName
	};
}]);