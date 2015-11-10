var app = angular.module('route-test', ['ngRoute'])
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '/home',
      controller: 'HomeController'
    })
    .when('/dogs', {
      templateUrl: '/dogs1',
      controller: 'DogsController'
    })
});
