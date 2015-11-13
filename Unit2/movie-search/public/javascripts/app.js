var app = angular.module('movieSearch', ['ngRoute']);
app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'MovieController'
    })
    .when('/movies', {
      templateUrl: '/partials/home.html',
      controller: 'MovieController'
    })
    .when('/movies/:movie', {
      templateUrl: '/partials/movies.html',
      controller: 'MovieController'
    })
    .when('/:movieId/show', {
      templateUrl: '/partials/movieInfo.html',
      controller: 'MovieController'
    })
    .when('/page-not-found', {
      templateUrl: '/partials/error.html'
    })
    .otherwise({
      redirectTo: '/page-not-found'
    })
})
