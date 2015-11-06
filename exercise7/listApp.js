var app = angular.module('contactList', []);
app.controller('contactList', function ($scope){
  $scope.contacts = [
    {name: "Bob Ross", email: "bross@gmail.com", number: "303-456-7890"},
    {name: "John Madden", email: "jmadden@gmail.com", number: "303-321-4621"},
    {name: "Steve Buschemi", email: "sBuschemi@gmail.com", number: "303-824-1726"}
  ]
  $scope.addContact = function (){
    $scope.newContact = {name: $scope.newName, email: $scope.newEmail, number: $scope.newNumber}
    $scope.contacts.push($scope.newContact)
    $scope.newName = ''
    $scope.newEmail = ''
    $scope.newNumber = ''
  }
})
