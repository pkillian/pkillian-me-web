var pkill = {};

(function(that, $, window, document, undefined) {
  "use strict";

  $.browser.mobile = navigator.userAgent.match(/Android|Blackberry|iP[aho]|Mini|Mobile/);

  $(document).ready(function() {
    $('a').each(function() {
      if ($(this).attr('href').indexOf('http') == 0) {
        $(this).attr('target', '_blank');
      }
    });
  });

  this.cacheBust = "2014011901";
  this.markdownLocation = "/components/lib/node_modules/marked/lib/marked.js";
  this.numBlogPosts = 1;

  this.setCurrentSection = function($section) {
    $section.parent().find('.current').removeClass('current');
    $section.addClass('current');
  };

  this.bindColorHighlightsToCitations = function() {
    $('#viewport').delegate('.citation', 'mouseenter', function(event) {
      $('#source' + $(this).attr('id')).css('color', '#F3992A');
      $('#source' + $(this).attr('id')).children().css('color', '#F3992A');

      $(this).css('color', '#F3992A');
      $(this).children().css('color', '#F3992A');
    });

    $('#viewport').delegate('.citation', 'mouseleave', function(event) {
      $('#source' + $(this).attr('id')).css('color', '#A0A0A0');
      $('#source' + $(this).attr('id')).children().css('color', '#A0A0A0');

      $(this).css('color', '#404040');
      $(this).children().css('color', '#A0A0A0');
    });

    $('#viewport').delegate('.source_link', 'mouseenter', function(event) {
      $(this).css('color', '#F3992A');
      $(this).children().css('color', '#F3992A');

      $('#' + $(this).attr('id').replace('source', '')).css('color', '#F3992A');
      $('#' + $(this).attr('id').replace('source', '')).children().css('color', '#F3992A');
    });

    $('#viewport').delegate('.source_link', 'mouseleave', function(event) {
      $(this).css('color', '#A0A0A0');
      $(this).children().css('color', '#A0A0A0');

      $('#' + $(this).attr('id').replace('source', '')).css('color', '#404040');
      $('#' + $(this).attr('id').replace('source', '')).children().css('color', '#A0A0A0');
    });
  };

  this.unbindColorHighlightsToCitations = function() {
    $('#viewport').undelegate('.citation', 'mouseenter');
    $('#viewport').undelegate('.citation', 'mouseleave');
    $('#viewport').undelegate('.source_link', 'mouseenter');
    $('#viewport').undelegate('.source_link', 'mouseleave');
  };

}).call(pkill, pkill, jQuery, window, document);

$(document).ready(function() {
  pkill.blankTargetLinks();
  pkill.bindSidebarFold();
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-47387011-1', 'pkillian.me');
ga('send', 'pageview');

