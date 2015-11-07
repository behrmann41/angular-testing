var app = angular.module('redditClone', []);
app.controller('CloneController', function($scope){
  $scope.showForm = false
  $scope.posts = [{ title: "Outside Aspen, CO", author: "Ned Stark",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae accumsan nunc. Vivamus eget metus eu urna imperdiet malesuada. Quisque varius elit sem. Phasellus elementum, risus vitae dapibus dictum, turpis dui interdum nisi, ut iaculis turpis odio ac ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    imageUrl: "http://uniacke.novascotia.ca/sites/default/files/inline/images/uniacke-estate-trail.jpg"},
                  { title: "Cliffs of Moher", author: "Bob Wellington",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tortor quam, eget cursus neque vehicula ut. Cras scelerisque iaculis.",
                    imageUrl: "http://www.uppercrustindia.com/dynamic/uploads/image/UC_57/Travel/Ireland%20Harbour%20Flight/Ariel-Shot-Of-Cliffs-Of-Moher.jpg"
                  }]
  $scope.postForm = function (){
    $scope.showForm = ($scope.showForm === true) ? false : true
  }
  $scope.submitPost = function (valid){
    if (valid){
      $scope.newPost = {  title: this.title,
                          author: this.author,
                          description: this.description,
                          imageUrl: this.imageUrl
                        }
      $scope.posts.push($scope.newPost)
      $scope.showForm = false
    }
  }
})
