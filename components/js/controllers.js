'use strict';

/* Controllers */

function BlogCtrl($scope, $http) {

  $http.get('/blog/posts.json').success(function(postIDs) {
    $scope.blogposts = [];

    jQuery.each(postIDs, function() {

      $http.get('/blog/blogposts/' + this + '.json').success(function(data) {
        $scope.blogposts.push(data);
      });

    });
  });

}

//PhoneListCtrl.$inject = ['$scope', '$http'];


function BlogPostCtrl($scope, $routeParams, $http) {
  $http.get('/blog/blogposts/' + $routeParams.postID + '.json').success(function(data) {
    $scope.post = data;
  });
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];
