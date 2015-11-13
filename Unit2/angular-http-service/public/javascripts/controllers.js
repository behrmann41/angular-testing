app.controller('HomeController', function ($scope, $http){
  $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data.data;
  });
  $http.get('itunes.json').then(function(data){
    // $scope.songData = data
  })
})
app.controller('ChatController', function ($scope, $http){
  $scope.hello = 'hello'
  $http.get('https://still-tundra-8387.herokuapp.com/').then(function(data){
    $scope.messages = data.data
  })
  $scope.submit = function () {
  var dataObj = {
    name : $scope.name,
    content : $scope.message,
  };
  $http.post('https://still-tundra-8387.herokuapp.com/messages', {message: dataObj}).then(function(response){
      console.log(response.data)
    }, function(){
        console.log('error');
  });
  $scope.name='';
  $scope.message='';
}
})
