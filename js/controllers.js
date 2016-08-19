var GridControllers = angular.module("GridControllers", []);

GridControllers.controller("ControllerOne", ["$scope", "Spotify", function($scope, Spotify) {
	

	$scope.getArtistByName = function(artistName) {
		Spotify.getArtistByName(artistName)
		.success(function(data) {
			$scope.result = data.artists.items[0];
		})
		.error(function(err) {
			alert(JSON.stringify(err));
		});
	}

}]);