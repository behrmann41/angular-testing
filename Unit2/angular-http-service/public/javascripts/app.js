var app = angular.module('chatApp', ['ngRoute']);
app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeController'
    })
    .when('/chat', {
      templateUrl: '/partials/chat.html',
      controller: 'ChatController'
    })
})
