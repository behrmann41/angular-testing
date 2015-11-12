var app = angular.module('customFilters', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/', {
      templateUrl: '/partials/kebab.html',
      controller: 'FiltersController'
    })
})
