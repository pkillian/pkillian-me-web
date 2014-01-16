'use strict';

/* App Module */

var app = angular.module('pkillianme', ['ngSanitize']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/blog', {
        templateUrl: '/blog/blog_md.html?' + pkill.cacheBust,
        controller: BlogMarkdownCtrl,
        title: "Blog"
      }).
      when('/blog/:postID', {
        templateUrl: '/blog/post_md.html?' + pkill.cacheBust,
        controller: BlogMarkdownPostCtrl,
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
        templateUrl: '/blog/blog_md.html?' + pkill.cacheBust,
        controller: BlogMarkdownCtrl,
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
  $scope.cacheBust = pkill.cacheBust;
  $scope.year      = new Date().getFullYear();
});
