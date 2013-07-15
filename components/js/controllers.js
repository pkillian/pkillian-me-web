'use strict';

/* Controllers */

function BlogCtrl($scope, $http) {
  pkill.setCurrentSection($('#home_section_link'));

  /* Get all blog post data */
  $http.get('/blog/posts.json').success(function(postIDs) {

    $scope.blogposts = [];

    jQuery.each(postIDs, function() {

      $http.get('/blog/blogposts/' + this + '.json').success(function(data) {
        data.content = data.body.join('\n');
        $scope.blogposts.push(data);
      });

    });
  });

}


function BlogPostCtrl($scope, $routeParams, $http) {
  pkill.setCurrentSection($('#home_section_link'));

  $http.get('/blog/blogposts/' + $routeParams.postID + '.json').success(function(data) {
    $scope.post = data;
  });
}


function AboutCtrl($scope) {
  pkill.setCurrentSection($('#about_section_link'));
}


function ContactCtrl($scope) {
  pkill.setCurrentSection($('#contact_section_link'));
}
