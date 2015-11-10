var app = angular.module('route-test', ['ngRoute'])
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/dogs', {
      templateUrl: '/dog.html',
      controller: 'DogsController'
    })
    .when('/', {
      templateUrl: '/home.html',
      controller: 'HomeController'
    })
});
