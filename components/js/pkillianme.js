var pkill = {};

(function(that, $, window, undefined) {
  "use strict";

  this.cacheBust = Date.now();

  this.setCurrentSection = function($section) {
    $section.parent().find('.current').removeClass('current');
    $section.addClass('current');
  };

}).call(pkill, pkill, jQuery, window);