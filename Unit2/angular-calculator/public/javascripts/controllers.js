app.controller('AddController', function ($scope, $routeParams){
  console.log($routeParams)
  $scope.message = "hello"
  $scope.add = Number($routeParams.num1) + Number($routeParams.num2)
  $scope.division = Number($routeParams.num1) / Number($routeParams.num2)
})
