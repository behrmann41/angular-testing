app.controller("MovieController", function ($scope, $http, $routeParams, $location) {
  $scope.search = function() {
    $http.get('http://www.omdbapi.com/?s=' + $scope.title.toLowerCase() + '&r=json').then(function (response) {
      $scope.movies = response.data.Search;
      console.log($scope.movies);
    });
    $location.url('/movies/'+$scope.title);
  }
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.movieId + '&r=json').then(function (response) {
    $scope.movieInfo = response.data;
  });

})
