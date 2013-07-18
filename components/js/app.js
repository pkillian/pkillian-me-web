'use strict';

/* App Module */

var app = angular.module('pkillianme', ['ngSanitize']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/blog', {
        templateUrl: '/blog/blog.html?' + pkill.cacheBust,
        controller: BlogCtrl
      }).
      when('/blog/:postID', {
        templateUrl: '/blog/post.html?' + pkill.cacheBust,
        controller: BlogPostCtrl
      }).
      when('/about', {
        templateUrl: '/about/about.html?' + pkill.cacheBust,
        controller: AboutCtrl
      }).
      when('/contact', {
        templateUrl: '/contact/contact.html?' + pkill.cacheBust,
        controller: ContactCtrl
      }).
      otherwise({
        templateUrl: '/blog/blog.html?' + pkill.cacheBust,
        controller: BlogCtrl
      });
    }
  ]
);

app.controller('htmlController', function($scope) {
  $scope.cacheBust = Date.now();
});