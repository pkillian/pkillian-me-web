'use strict';

/* App Module */

var app = angular.module('pkillianme', ['ngSanitize']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/blog', {
        templateUrl: '/blog/blog.html?' + pkill.cacheBust,
        controller: BlogCtrl,
        title: "Blog"
      }).
      when('/blog/:postID', {
        templateUrl: '/blog/post.html?' + pkill.cacheBust,
        controller: BlogPostCtrl,
        title: "Blog"
      }).
      when('/about', {
        templateUrl: '/about/about.html?' + pkill.cacheBust,
        controller: AboutCtrl,
        title: "About"
      }).
      when('/contact', {
        templateUrl: '/contact/contact.html?' + pkill.cacheBust,
        controller: ContactCtrl,
        title: "Contact"
      }).
      when('/resume', {
        templateUrl: '/resume/resume.html?' + pkill.cacheBust,
        controller: ResumeCtrl,
        title: "Resume"
      }).
      otherwise({
        templateUrl: '/blog/blog.html?' + pkill.cacheBust,
        controller: BlogCtrl,
        title: "Home"
      });
    }]
  ).run(['$rootScope', function($rootScope){
    $rootScope.pageTitle = '';
    $rootScope.$on('$routeChangeSuccess', function(evt, cur, prev) {
      $rootScope.pageTitle = cur.title;
    });
    }]
  );

app.controller('htmlController', function($scope) {
  $scope.cacheBust = "2013-08-15-01";
});
