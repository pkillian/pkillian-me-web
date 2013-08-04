var pkill = {};

(function(that, $, window, undefined) {
  "use strict";

  this.cacheBust = "2013-08-04-02";

  this.setCurrentSection = function($section) {
    $section.parent().find('.current').removeClass('current');
    $section.addClass('current');
  };

}).call(pkill, pkill, jQuery, window);