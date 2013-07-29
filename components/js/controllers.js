'use strict';

/* Controllers */

function BlogCtrl($scope, $http) {
  $scope.pageTitle = "Home";

  pkill.setCurrentSection($('#home_section_link'));

  /* Get all blog post data */
  $http.get('/blog/posts.json').success(function(postIDs) {

    $scope.blogposts = [];
    $scope.orderProp = 'id';

    jQuery.each(postIDs, function() {

      var currentID = this;

      $http.get('/blog/blogposts/json/' + currentID + '.json?' + pkill.cacheBust).success(function(data) {
        if (!data.body) {
          $http.get('/blog/blogposts/html/' + currentID + '.html?' + pkill.cacheBust).success(function(body_html) {
            data.body = body_html;
          });
        }

        $scope.blogposts.push(data);
      });

    });
  });

}


function BlogPostCtrl($scope, $routeParams, $http) {
  pkill.setCurrentSection($('#home_section_link'));

  $http.get('/blog/blogposts/' + $routeParams.postID + '.json?' + pkill.cacheBust).success(function(data) {
    $scope.post = data;
    $scope.pageTitle = data.date;
  });
}


function AboutCtrl($scope) {
  $scope.pageTitle = "About";

  pkill.setCurrentSection($('#about_section_link'));
}


function ContactCtrl($scope) {
  $scope.pageTitle = "Contact";

  pkill.setCurrentSection($('#contact_section_link'));
}

function ResumeCtrl($scope) {
  $scope.pageTitle = "Resume";

  pkill.setCurrentSection($('#resume_section_link'));
}
