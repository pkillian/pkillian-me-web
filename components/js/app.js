'use strict';

/* App Module */

angular.module('pkillianme', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/blog', {
  		templateUrl: '/blog/blog.html',
  		controller: BlogCtrl
      }).
      when('/blog/:postID', {
  		templateUrl: '/blog/post.html',
  		controller: BlogPostCtrl
      }).
      when('/about', {
  		templateUrl: '/about/about.html' 
      }).
      when('/contact', {
  		templateUrl: '/contact/contact.html' 
      }).
      otherwise({
      	templateUrl: '/blog/blog.html',
  		controller: BlogCtrl
      });
  }]);
