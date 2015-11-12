var app = angular.module('calculator', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider){
  $routeProvider
    .when('/add/:num1/:num2', {
      templateUrl: '/partials/add.html',
      controller: 'AddController'
    })
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'AddController'
    })
    .when('/div/:num1/:num2', {
      templateUrl: '/partials/div.html',
      controller: 'AddController'
    })
  $locationProvider.html5Mode(true)
})
