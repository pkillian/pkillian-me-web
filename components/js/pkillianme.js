var pkill = {};

(function(that, $, window, undefined) {
  "use strict";

  this.setCurrentSection = function($section) {
    $section.parent().find('.current').removeClass('current');
    $section.addClass('current');
  };

}).call(pkill, pkill, jQuery, window);