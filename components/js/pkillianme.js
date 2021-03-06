var pkill = {};

(function(that, $, window, document, undefined) {
  "use strict";

  $.browser.mobile = navigator.userAgent.match(/Android|Blackberry|iP[aho]|Mini|Mobile/);

  this.cacheBust = "2014011901";
  this.markdownLocation = "/components/lib/node_modules/marked/lib/marked.js";
  this.numBlogPosts = 1;

  this.bindSidebarFold = function() {
    
  };

  this.blankTargetLinks = function() {
    $('a').each(function() {
      if ($(this).attr('href').indexOf('http') == 0) {
        $(this).attr('target', '_blank');
      }
    });
  };

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

