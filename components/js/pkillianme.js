var pkill = {};

(function(that, $, window, undefined) {
  "use strict";

  this.cacheBust = "2013-08-15-01";

  this.setCurrentSection = function($section) {
    $section.parent().find('.current').removeClass('current');
    $section.addClass('current');
  };

  this.bindColorHighlightsToCitations = function() {
    $('#viewport').delegate('.citation', 'mouseenter', function(event) {
      $('#source' + $(this).attr('id')).css('color', '#f3992a');
    });

    $('#viewport').delegate('.citation', 'mouseleave', function(event) {
      $('#source' + $(this).attr('id')).css('color', '#a0a0a0');
    });

  };

}).call(pkill, pkill, jQuery, window);
