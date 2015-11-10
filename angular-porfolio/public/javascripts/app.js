var app = angular.module('portfolio', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/', {
      templateUrl: '/home.html',
      controller: 'PortfolioController'
    })
    .when('/bio', {
      templateUrl: '/bio.html',
      controller: 'PortfolioController'
    })
    .when('/projects', {
      templateUrl: '/projects.html',
      controller: 'PortfolioController'
    })
    .when('/resume', {
      templateUrl: '/resume.html',
      controller: 'PortfolioController'
    })
})
