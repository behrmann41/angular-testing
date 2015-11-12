var app = angular.module('pingPong', []);
app.controller('pingController', function($scope){
  //testing scope
  $scope.randomNumber = function (){
    $scope.number = Math.floor(Math.random() * 10) + 1
  }
  $scope.reverseWord = function (){
    $scope.word = $scope.word.split('').reverse().join('')
  }
  // ping pong scope

  $scope.player1 = 0
  $scope.player2 = 0
  $scope.count = 0
  $scope.servingP1 = false
  $scope.servingP2 = false
  $scope.gameOver = false
  $scope.turn1 = true
  $scope.turn2 = false
  $scope.scorePlayer1 = function (){
    $scope.player1++
    $scope.count++
    if ($scope.count % 2 == 0 && $scope.turn1 == true){
      $scope.servingP1 = true
      $scope.turn1 = false
      $scope.turn2 = true
    } else {
      $scope.servingP1 = false
    }
    if ($scope.player1 === 11){
      $scope.gameOver = true
    }
  }
  $scope.scorePlayer2 = function (){
    $scope.player2++
    $scope.count++
    if ($scope.count % 2 == 0 && $scope.turn2 == true){
      $scope.servingP2 = true
      $scope.turn2 = false
      $scope.turn1 = true
    } else {
      $scope.servingP2 = false
    }
    if ($scope.player2 === 11){
      $scope.gameOver = true
    }
  }
  $scope.reset = function (){
    $scope.player1 = 0
    $scope.player2 = 0
    $scope.servingP1 = false
    $scope.servingP2 = false
    $scope.gameOver = false
  }

})
