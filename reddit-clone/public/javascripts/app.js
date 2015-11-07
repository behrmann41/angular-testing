var app = angular.module('redditClone', []);
app.controller('CloneController', function($scope){
  $scope.showForm = false
  $scope.submitPost = function (){
    $scope.showForm = ($scope.showForm === true) ? false : true
  }
})
