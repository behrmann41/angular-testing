angular.module('testing', [])
  .controller('myController', function ($scope, $sce){
    $scope.symbols = [$sce.trustAsHtml("&spades;"),
                      $sce.trustAsHtml("&clubs;"),
                      $sce.trustAsHtml("&hearts;"),
                      $sce.trustAsHtml("&diams;")];
    $scope.numbers = [1,1,2,5,6,9,9,9];
    $scope.second = [
        {name:"mike", age:23},
        {name:"andy", age:34},
        {name:"reid", age:45},
        {name:"reid", age:45}
      ];
    $scope.third = {name: "mike", age: 35, title: "Mr."};
  })
  .controller('cameraController', function($scope){
    $scope.cameras = [
    {
      title: "Nikon D3100 DSLR",
      image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
      rating: 3.4,
      price: 369.99,
      onSale: true
    },
    {
      title: "Canon EOS 70D",
      image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
      rating: 2.0,
      price: 1099.0,
      onSale: false
    },
    {
      title: "Nikon D810A",
      image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ];
})
