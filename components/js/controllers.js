'use strict';
require([pkill.markdownLocation], function (markdown) {});

/* Controllers */

function BlogCtrl($scope, $http) {
  $scope.pageTitle = "Home";

  pkill.setCurrentSection($('#home_section_link'));

  $scope.$watch('body', function() { 
    pkill.unbindColorHighlightsToCitations();
  });

  $scope.blogposts = [];
  $scope.orderProp = 'id';

  for (var currentID = 1; currentID <= pkill.numBlogPosts; currentID++) {

    $http.get('/blog/blogposts/json/' + currentID + '.json?' + pkill.cacheBust).success(function(data) {

      if (!data.body_md) {
        $http.get('/blog/blogposts/md/' + currentID + '.md?' + pkill.cacheBust).success(function(body_md) {
          body_md = body_md.substring(0, body_md.indexOf('<end/>'));
          data.body_md = markdown.toHTML(body_md);
        });
      }

      $scope.blogposts.push(data);
    });

  }

}


function BlogPostCtrl($scope, $routeParams, $http, $window) {
  pkill.setCurrentSection($('#home_section_link'));

  $http.get('/blog/blogposts/json/' + $routeParams.postID + '.json?' + pkill.cacheBust).success(function(data) {
    $scope.pageTitle = data.date;
    $window.document.title = 'PKillian :: ' + data.date;

    if (!data.blog_md) {
      $http.get('/blog/blogposts/md/' + $routeParams.postID + '.md?' + pkill.cacheBust).success(function(blog_md) {
        blog_md = blog_md.replace(/<\s*end\s*\/>/g, '');
        data.blog_md = markdown.toHTML(blog_md);
      });
    }

    $scope.post = data;

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
